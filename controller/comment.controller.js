const Comment = require("../model/comment.model");
const Post = require("../model/post.model");
const {PrismaClient} = require('../prisma/generated/client');
const prisma = new PrismaClient();

const createComment = async (req, res) => {
  try {

    const { content, parentId } = req.body;
    const postId = parseInt(req.params.postId);
    const userId = req.user.userId;

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = await prisma.comment.create({
      data: {
        content: content,
        user: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id: parseInt(postId),
          },
        },
        parent: parentId ? {
          connect: {
            id: parseInt(parentId),
          },
        } : undefined,
      },
    });

    await prisma.post.update({
      where: {
        id: parseInt(postId),
      },
      data: {
        commentCount: {
          increment: 1,
        },
      },
    });



    res.status(200).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error });
  } finally {
    await prisma.$disconnect();
  }
};

/*const getPostComments = async (req, res) => {
  try {
    const postId = req.params.id;

    if (!postId) {
      return res.status(400).json({ message: "Post ID is required" });
    }

    // Fetch comments from Prisma based on postId
    const comments = await prisma.comment.findMany({
      where: { postId: parseInt(postId) },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            // Add other user fields as needed, excluding password
          },
        },
        CommentVote: true
      },
      orderBy: { createdAt: 'desc' },
    });

    const formattedComments = formatComments(comments);

    return res.status(200).json(formattedComments);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something Went Wrong!", error: err.message });
  } finally {
    await prisma.$disconnect(); // Close the Prisma client connection
  }
};*/
/*const formatComments = (comments) => {
  const commentMap = {};
  const result = [];

  // Create a mapping of comment IDs to their formatted representation
  comments.forEach((comment) => {
    const formattedComment = {
      _id: String(comment.id),
      commentedBy: {
        _id: String(comment.user.id),
        username: comment.user.username,
        email: comment.user.email,
        // Add other user fields as needed
      },
      post: String(comment.postId),
      content: comment.content,
      parent: comment.parentId ? String(comment.parentId) : null,
      children: [],
      upvotedBy: [], // Add upvotedBy and downvotedBy arrays if needed
      downvotedBy: [],
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    };

    commentMap[comment.id] = formattedComment;

    if (!comment.parentId) {
      result.push(formattedComment);
    }
  });

  // Connect child comments to their parent in the formatted result
  comments.forEach((comment) => {
    if (comment.parentId) {
      commentMap[comment.parentId].children.push(commentMap[comment.id]);
    }
  });

  return result;
};*/


const formatComments = (comments, commentVotes) => {
  const commentMap = {};
  const result = [];

  comments.forEach((comment) => {
    const formattedComment = {
      _id: String(comment.id),
      commentedBy: {
        _id: String(comment.user.id),
        username: comment.user.username,
        email: comment.user.email,
        isAdmin: comment.user.isAdmin,
        createdAt: comment.user.createdAt,
        updatedAt: comment.user.updatedAt,
      },
      post: String(comment.postId),
      content: comment.content,
      parent: comment.parentId ? String(comment.parentId) : null,
      children: [],
      upvotedBy: [],
      downvotedBy: [],
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    };

    commentMap[comment.id] = formattedComment;

    if (!comment.parentId) {
      result.push(formattedComment);
    }
  });

  commentVotes.forEach((vote) => {
    const comment = commentMap[vote.commentId];
    if (comment) {
      if (vote.isUpvote) {
        comment.upvotedBy.push(String(vote.userId));
      } else {
        comment.downvotedBy.push(String(vote.userId));
      }
    }
  });

  comments.forEach((comment) => {
    if (comment.parentId) {
      const parent = commentMap[comment.parentId];
      if (parent) {
        parent.children.push(commentMap[comment.id]);
      }
    }
  });

  return result;
};

const getPostComments = async (req, res) => {
  try {
    const postId = req.params.id;

    if (!postId) {
      return res.status(400).json({ message: "Post ID is required" });
    }

    // Fetch comments and comment votes from Prisma based on postId
    const comments = await prisma.comment.findMany({
      where: { postId: parseInt(postId) },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            isAdmin: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const commentVotes = await prisma.commentVote.findMany({
      where: { commentId: { in: comments.map((comment) => comment.id) } },
    });

    const formattedComments = formatComments(comments, commentVotes);

    return res.status(200).json(formattedComments);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something Went Wrong!", error: err.message });
  } finally {
    await prisma.$disconnect(); // Close the Prisma client connection
  }
};


const addReply = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user.userId;
    const postId = req.params.postId;
    const commentId = req.params.id;

    const comment = await prisma.comment.create({
      data: {
        content: content,
        user: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
        parentId: commentId
      },
    });

    res
      .status(201)
      .json({ message: "reply added successfully", comment: comment });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: " could not save comment", error: err.message });
  }
};

const updateCommentForPost = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user.userId;
    const commentId = parseInt(req.params.id);

    const comment = await prisma.comment.findUnique(
        {
          where: {id: commentId},
          include: {
            user: true
          }
        }
    )

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (!req.user.isAdmin){
      if (!comment.userId || comment.user.id.toString() !== userId.toString()) {
        return res.status(401).json({ message: "Access is denied." });
      }
    }



   await prisma.comment.update(
       {
         where: {id: commentId},
         data: {
           content: comment ? content : comment.content
         }
       }
   )

    res.status(200).json({ message: "Comment updated successfully", comment });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}

const deleteCommentForPost = async (req, res) => {
  try {
    const userId = req.user.userId;
    const isAdmin = req.user.isAdmin;
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.id);

    const post = await prisma.post.findUnique(
        {
          where: {id: postId}
        }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = await prisma.comment.findUnique(
        {
          where: {id: commentId},
          include: {
            user: true
          }
        }
    );

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.user.id === userId || isAdmin ) {
      await prisma.comment.delete({
        where: {id: commentId}
      });
    }
    else{
      return res.status(401).json({ message: "Access is denied." });
    }

    await prisma.post.update(
        {
          where: {id: postId},
          data: {
            commentCount: {decrement: 1}
          }
        }
    )

    res.status(200).json({ message: "Comment deleted successfully", comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const upvoteComment = async (req, res) => {
  const commentId = parseInt(req.params.commentId);
  const vote = req.query.vote;
  const userId = req.user.userId;

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

   /* const hasUpvoted = await prisma.commentVote.findFirst({
      where: { commentId, userId, isUpvote: true },
    });

    const hasDownvoted = await prisma.commentVote.findFirst({
      where: { commentId, userId, isUpvote: false },
    });

    if (vote === 'downvote' && hasDownvoted) {
      await prisma.commentVote.deleteMany({
        where: { commentId, userId, isUpvote: false },
      });
    }

    if (vote === 'upvote' && hasUpvoted) {
      await prisma.commentVote.deleteMany({
        where: { commentId, userId, isUpvote: true },
      });

      return res.status(200).json({
        message: 'Successfully removed upvote from the comment',
      });
    }*/

    if (vote === 'upvote'){
      await prisma.commentVote.create({
        data: { commentId, userId, isUpvote: true },
      });
      return res.status(200).json({
        message: 'Successfully upvoted the comment',
      });
    }else if (vote === 'downvote'){
      await prisma.commentVote.deleteMany({
        where: { commentId, userId, isUpvote: true },
      });
      return res.status(200).json({
        message: 'Successfully removed upvote from the comment',
      });
    }




  } catch (error) {
    console.error(`Error upvoting comment: ${error.message}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};


const downvoteComment = async (req, res) => {
  const commentId = parseInt(req.params.commentId);
  const userId = req.user.userId;

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    const hasUpvoted = await prisma.commentVote.findFirst({
      where: { commentId, userId, isUpvote: true },
    });

    const hasDownvoted = await prisma.commentVote.findFirst({
      where: { commentId, userId, isUpvote: false },
    });

    console.log(hasDownvoted)

    if (hasDownvoted) {
      await prisma.commentVote.deleteMany({
        where: { commentId, userId, isUpvote: false },
      });
    }

    if (hasUpvoted) {
      await prisma.commentVote.deleteMany({
        where: { commentId, userId, isUpvote: true },
      });

      return res.status(200).json({
        message: 'Successfully removed down vote from the comment',
      });
    }

    await prisma.commentVote.create({
      data: { commentId, userId, isUpvote: false },
    });

    return res.status(200).json({
      message: 'Successfully down voted the comment',
    });
  } catch (error) {
    console.error(`Error down voting comment: ${error.message}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createComment,
  getPostComments,
  addReply,
  updateCommentForPost,
  deleteCommentForPost,
  upvoteComment,
  downvoteComment,
};

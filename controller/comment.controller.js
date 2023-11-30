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

const getPostComments = async (req, res) => {
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
      },
      orderBy: { createdAt: 'desc' },
    });

    /*let commentParents = {};
    let rootComments = [];

    // Organize comments into a tree structure
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      commentParents[comment.id] = comment;
    }

    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if (comment.parentId) {
        let commentParent = commentParents[comment.parentId];
        if (!commentParent) {
          commentParent = { id: comment.parentId, children: [] };
          commentParents[comment.parentId] = commentParent;
        }
        commentParent.children = [...commentParent.children, comment];
      } else {
        rootComments = [...rootComments, comment];
      }
    }*/

    const formattedComments = formatComments(comments);

    return res.status(200).json(formattedComments);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something Went Wrong!", error: err.message });
  } finally {
    await prisma.$disconnect(); // Close the Prisma client connection
  }
};


const formatComments = (comments) => {
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
    const postId = req.params.postId;
    const commentId = req.params.id;

    const post = await Post.findById(postId);
    console.log(isAdmin)

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comment = await Comment.findById(commentId).populate('commentedBy');
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.commentedBy._id.toString() === userId || isAdmin ) {
      await Comment.deleteOne({ _id: commentId });
    }
    else{
      return res.status(401).json({ message: "Access is denied." });
    }
    await Comment.deleteOne({ _id: commentId });
    post.commentCount -= 1;

    await post.save();

    res.status(200).json({ message: "Comment deleted successfully", comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const upvoteComment = async (req, res) => {
  const commentId = req.params.commentId;
  const userId = req.user.userId;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Post not found" });
    }

    const hasUpvoted = comment.upvotedBy.includes(userId);
    const hasDownvoted = comment.downvotedBy.includes(userId);

    if (hasDownvoted) {
      comment.downvotedBy = comment.downvotedBy.filter(
        (id) => id.toString() !== userId
      );
    }

    if (hasUpvoted) {
      comment.upvotedBy = comment.upvotedBy.filter(
        (id) => id.toString() !== userId
      );
      await comment.save();
      return res
        .status(200)
        .json({ message: "Successfully removed upvote from the comment" });
    }

    comment.upvotedBy.push(userId);
    await comment.save();

    return res
      .status(200)
      .json({ message: "Successfully upvoted the comment" });
  } catch (error) {
    console.error(`Error upvoting comment: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const downvoteComment = async (req, res) => {
  const commentId = req.params.commentId;
  const userId = req.user.userId;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: "comment not found" });
    }

    const hasUpvoted = comment.upvotedBy.includes(userId);
    const hasDownvoted = comment.downvotedBy.includes(userId);

    if (hasUpvoted) {
      comment.upvotedBy = comment.upvotedBy.filter(
        (id) => id.toString() !== userId
      );
    }

    if (hasDownvoted) {
      comment.downvotedBy = comment.downvotedBy.filter(
        (id) => id.toString() !== userId
      );
    } else {
      comment.downvotedBy.push(userId);
    }

    await comment.save();

    return res
      .status(200)
      .json({ message: "Successfully downvoted the comment" });
  } catch (error) {
    console.error(`Error downvoting comment: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
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

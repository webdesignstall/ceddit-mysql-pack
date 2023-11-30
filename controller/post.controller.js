const Post = require("../model/post.model");
const Community = require("../model/community.model");

const {PrismaClient} = require('../prisma/generated/client');

const prisma = new PrismaClient();

/*const createPost = async (req, res) => {
  try {
    const { title, content, imageUrl, communityId } = req.body;
    const userId = req.user.userId;

    if (!(title && content)) {
      throw new Error("All input required");
    }
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "community not found" });
    }

    const post = await Post.create({
      title,
      content,
      imageUrl,
      user: userId,
      community: communityId,
      upvotedBy: [userId],
    });

    community.posts.push(post);
    await community.save();
    res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};*/

const createPost = async (req, res) => {
  try {
    const { title, content, imageUrl, communityId } = req.body;
    const userId = parseInt(req.user.userId);

    if (!(title && content)) {
      throw new Error("All input required");
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        imageUrl,
        userId: userId,
        communityId: parseInt(communityId),
        // postVote: {
        //   create: {
        //     isUpvote: true,  // or false, depending on your logic
        //     user: {
        //       connect: {
        //         id: userId  // Assuming userId is the ID of the user creating the post
        //       }
        //     }
        //   }
        // }
      }
    });


    res.json(post);

  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const filterPosts = async (data, postVotes) => {
  const formattedPosts = await Promise.all(
      data.map(async (post) => {
        const upvotedBy = await postVotes(post.id);
        return {
          _id: post.id,
          title: post.title,
          content: post.content,
          imageUrl: post.imageUrl,
          commentCount: post.commentCount,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          user: {
            _id: post.user.id,
            username: post.user.username,
            email: post.user.email,
            isAdmin: post.user.isAdmin,
          },
          community: {
            _id: post.community.id,
            admin: post.community.adminId,
            name: post.community.name,
            bio: post.community.bio,
          },
          upvotedBy,
          downvotedBy: [], // You can handle downvotes similarly
        };
      })
  );

  return formattedPosts;
};

const postVotes = async (postId) => {
  const votes = await prisma.postVote.findMany({
    where: {
      postId: postId,
      isUpvote: true,
    },
  });
  return votes.map((vote) => vote.userId);
};

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
        community: true,
      },
    });

    const filteredPosts = await filterPosts(posts, postVotes);

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getCommunityPosts = async (req, res) => {

  const communityId = parseInt(req.params.id);
  try {

    const community = await prisma.community.findUnique({
      where: { id: communityId },
      include: {
        posts: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                email: true
              }
            },
            community: true,
          },
        },
      },
    });

    const filteredPosts = await filterPosts(community.posts, postVotes);

    const communitiyFormate = {
      _id: community.id,
      adminId: community.adminId,
      name: community.name,
      bio: community.bio,
      subscriberCount: community.subscriberCount,
      createdAt: community.createdAt,
      updatedAt: community.updatedAt
    }

    res.status(200).json({community: {...communitiyFormate, posts: filteredPosts}});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/*
const getPosts = async (req, res) => {
  try {

    const posts = await prisma.post.findMany({
      include: {
        user: true,
        community: true,
        postVote: true
      }
    })

    const postVotes = await prisma.postVote.findMany({
      where: {
        postId: { in: posts.map((post) => post.id) },
        userId: { in: posts.map((post) => post.user.id) },
        isUpvote: true
      },
    });

    const filteredPosts = filterPosts(posts, postVotes);

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
*/


const getPostById = async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId
      },
      include: {
        user: true,
        community: true,
        postVote: true
      }
    })

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const postVotes = await prisma.postVote.findMany({
      where: { postId:  post.id },
    });

    const filterPost = {
        _id: post.id,
        title: post.title,
        content: post.content,
        imageUrl: post.imageUrl,
        commentCount: post.commentCount,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        user: {
          _id: post.user.id,
          username: post.user.username,
          email: post.user.email,
          isAdmin: post.user.isAdmin
        },
        community: {
          _id: post.community.id,
          admin: post.community.adminId,
          name: post.community.name,
          bio: post.community.bio
        },
        upvotedBy: postVotes
      }



    res.json(filterPost);
  } catch (error) {
    console.error(error);
    res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
  }
};


const deletePost = async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    await prisma.$transaction([
      prisma.commentVote.deleteMany({
        where: {
          comment: {
            postId: postId,
          },
        },
      }),
      prisma.comment.deleteMany({
        where: {
          postId: postId,
        },
      }),
      prisma.postVote.deleteMany({
        where: {
          postId: postId,
        },
      }),
      prisma.post.delete({
        where: { id: postId },
      }),
    ]);

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: "An error occurred while deleting the post.",
    });
  }
};



const updatePost = async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    const post = await prisma.post.findUnique({where: {id: postId}});

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post) {
      await prisma.post.update({
        where: {id: postId},
        data: {
          title: req.body.title || post.title,
          content: req.body.content || post.content
        }})

      return res
          .status(200)
          .json({ message: "Post updated successfully", post });
    } else {
      return res.status(403).json({ message: "Permission denied" });
    }
  } catch (error) {
    console.error(error);
    res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
  }
};


const searchPosts = async (req, res) => {
  const query = req.query.posts;
  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { content: { contains: query } },
        ],
      },
      include: {
        user: true,
        community: true,
      },
    });

    const filteredPosts = filterPosts(posts);

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};




const votePost = async (req, res) => {
  const postId = parseInt(req.params.postId);
  const vote = req.query.vote;
  const userId = req.user.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return res.status(404).json({ error: 'post not found' });
    }

    if (vote === 'upvote'){

      const isVoted = await prisma.postVote.findFirst(
          {
            where: { postId, userId }
          }
      )

      if (!isVoted){
        await prisma.postVote.create({
          data: { postId, userId, isUpvote: true },
        });
        return res.status(200).json({
          message: 'Successfully upvoted the post',
        });
      }


    }else if (vote === 'downvote'){
      await prisma.postVote.deleteMany({
        where: { postId, userId, isUpvote: true },
      });
      return res.status(200).json({
        message: 'Successfully removed upvote from the post',
      });

    }

  } catch (error) {
    console.error(`Error upvoting comment: ${error.message}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};

const downvotePost = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.userId;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const hasUpvoted = post.upvotedBy.includes(userId);
    const hasDownvoted = post.downvotedBy.includes(userId);

    if (hasUpvoted) {
      post.upvotedBy = post.upvotedBy.filter((id) => id.toString() !== userId);
    }

    if (hasDownvoted) {
      post.downvotedBy = post.downvotedBy.filter(
        (id) => id.toString() !== userId
      );
    } else {
      post.downvotedBy.push(userId);
    }

    await post.save();

    return res
      .status(200)
      .json({ message: "Successfully downvoted the post", post });
  } catch (error) {
    console.error(`Error downvoting post: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};




module.exports = {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost,
  searchPosts,
  votePost,
  downvotePost,
  getCommunityPosts
};

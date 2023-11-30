const Community = require("../model/community.model");
const Post = require("../model/post.model");
const { PrismaClient } = require('../prisma/generated/client')

const prisma = new PrismaClient()
const createCommunity = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const userId = parseInt(req.user.userId);
    console.log(req.user)
    if (!name || !bio) {
      return res.status(400).json({ error: "Both name and bio are required" });
    }

    /*const existingCommunity = await Community.findOne({
      $or: [{ name }],
    });*/

    const existingCommunity = await prisma.community.findFirst({
      where: {
        OR: [{ name }]
      }
    });



    if (existingCommunity) {
      return res.status(400).json({ error: "Community name must be unique" });
    }

   /* const community = await Community.create({
      name,
      bio,
      admin: userId,
      subscribedBy: [userId],
    });*/



    const community = await prisma.community.create({
      data: {
        name,
        bio,
        adminId: userId,
      },
    });


    res.json(community);
  } catch (err) {
    return res.status(400).json({ error: err.message });
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


    if (!community) {
      return res.status(404).json({ error: "Community not found" });
    }

    return res.json({ community });
  } catch (error) {
    console.error(`Error getting community posts: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCommunities = async (req, res) => {
  try {
    // const communities = await Community.find();
    /*const communities = await prisma.community.findMany();*/

    const communities = await prisma.community.findMany({
      include: {
        posts: {
          select: {
            id: true
          }
        },
        communitySubscriber: {
          select: {
            userId: true
          }
        }
      }
    });

    const formattedCommunities = communities.map((community) => {
      return {
        _id: community.id,
        adminId: community.adminId,
        name: community.name,
        bio: community.bio,
        createdAt: community.createdAt,
        updatedAt: community.updatedAt,
        posts: community.posts,
        subscribedBy: community.communitySubscriber.map((subscriber) => subscriber.userId),
        subscriberCount: community.subscriberCount
      };
    });


    return res.json({ communities: formattedCommunities });
  } catch (error) {
    console.error(`Error getting communities: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const subscribedToCommunity = async (req, res) => {
  const userId = parseInt(req.user.userId);
  const communityId = parseInt(req.params.id);

  try {
    // const community = await Community.findById(communityId);
    const community = await prisma.community.findFirst({where: {id: communityId}, include: {
        communitySubscriber: {
          where: { userId: userId } // Optionally, add a filter to check for a specific user
        }
      }});

    if (!community) {
      return res.status(404).json({ error: "Community not found" });
    }

    // const isSubscribed = community.communitySubscriber.some(subscriber => subscriber.userId === userId);
    const isSubscribed = community.communitySubscriber.length > 0;

    if (isSubscribed) {
     /* community.subscribedBy = community.subscribedBy.filter(
        (id) => id.toString() !== userId
      );
      community.subscriberCount -= 1;
      await community.save();*/

      community.communitySubscriber = community.communitySubscriber.filter(
          (subscriber) => subscriber.userId !== userId
      );

      // Update the subscriberCount
      const updatedCommunity = await prisma.community.update({
        where: {
          id: communityId,
        },
        data: {
          subscriberCount: {
            decrement: 1,
          },
        },
      });


      await prisma.communitySubscriber.deleteMany({where: {userId: userId, communityId: communityId}})

      return res
        .status(200)
        .json({ message: "Successfully unsubscribed from the community" });
    }

    /*community.subscribedBy.push(userId);
    community.subscriberCount += 1;

    await community.save();*/

    const updatedCommunity = await prisma.community.update({
      where: { id: communityId },
      data: {
        communitySubscriber: {
          create: { userId: userId },
        },
        subscriberCount: {
          increment: 1,
        },
      },
    });

   /* await prisma.communitySubscriber.create({data: {
        userId: userId,
        communityId: communityId
      }})*/

    return res
      .status(200)
      .json({ message: "Successfully subscribed to the community" });
  } catch (error) {
    console.error(`Error subscribing to community: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getTop10 = async (req, res) => {
  try {
  /*  const topCommunities = await Community.find()
      .sort({ subscriberCount: -1 })
      .limit(10);*/


    const communities = await prisma.community.findMany({
      include: {
        posts: {
          select: {
            id: true
          }
        },
        communitySubscriber: {
          select: {
            userId: true
          }
        }
      },
      take: 10,
      orderBy: {
        subscriberCount: 'desc'
      }
    });

    const formattedCommunities = communities.map((community) => {
      return {
        _id: community.id,
        adminId: community.adminId,
        name: community.name,
        bio: community.bio,
        createdAt: community.createdAt,
        updatedAt: community.updatedAt,
        posts: community.posts,
        subscribedBy: community.communitySubscriber.map((subscriber) => subscriber.userId),
        subscriberCount: community.subscriberCount
      };
    });


    // return res.json({ communities: formattedCommunities });

    return res.status(200).json({ communities: formattedCommunities });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCommunity = async (req, res) => {
  const communityId = parseInt(req.params.id);

  try {
    // Fetch post IDs associated with the community
    const postIds = await prisma.post.findMany({
      where: { communityId: communityId },
      select: { id: true },
    });

    await prisma.$transaction([
      prisma.commentVote.deleteMany({
        where: {
          comment: {
            postId: {
              in: postIds.map(post => post.id),
            },
          },
        },
      }),
      prisma.comment.deleteMany({
        where: {
          postId: {
            in: postIds.map(post => post.id),
          },
        },
      }),
      prisma.postVote.deleteMany({
        where: {
          postId: {
            in: postIds.map(post => post.id),
          },
        },
      }),
      prisma.post.deleteMany({
        where: { communityId: communityId },
      }),
      prisma.communitySubscriber.deleteMany({
        where: { communityId: communityId },
      }),
      prisma.community.delete({
        where: { id: communityId },
      }),
    ]);

    return res.status(200).json({ message: "Community deleted successfully" });
  } catch (error) {
    console.error(`Error deleting community: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const updatedCommunity = async (req, res) => {
  const communityId = parseInt(req.params.id);
  const { name, bio } = req.body;

  try {
    // const community = await Community.findById(communityId);
    const community = await prisma.community.findFirst({where: {id: communityId}});

    if (!community) {
      return res.status(404).json({ error: "Community not found" });
    }

    const userId = req.user.userId;
    // if (community.admin.toString() !== userId) {
    //   return res.status(403).json({
    //     error: "Permission denied - You are not the admin of this community",
    //   });
    // }



 /*   community.name = name || community.name;
    community.bio = bio || community.bio;

    await community.save();*/

    await prisma.community.update({where: {id: communityId}, data: {
      name, bio
      }})

    return res
      .status(200)
      .json({ message: "Community updated successfully", community });
  } catch (error) {
    console.error(`Error updating community: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCommunity,
  getCommunityPosts,
  getAllCommunities,
  subscribedToCommunity,
  getTop10,
  deleteCommunity,
  updatedCommunity,
};

const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require('../prisma/generated/client')

const prisma = new PrismaClient()

const getUserDict = (token, user) => {
  return {
    token,
    username: user.username,
    userId: user._id,
    isAdmin: user.isAdmin,
    user: user,
  };
};

const buildToken = (user) => {
  return {
    userId: user.id,
    isAdmin: user.isAdmin,
  };
};

/*const register = async (req, res) => {
  try {
    const { username, email, password, image } = req.body;

    if (!(username && email && password)) {
      throw new Error("All input required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username }],
    });

    if (existingUser) {
      throw new Error("Email and username must be unique");
    }

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
      image,
      isAdmin: email.toLowerCase() === "ceddit@admin.com" ? true : false,
    });

    const token = jwt.sign(buildToken(user), process.env.TOKEN_KEY || "secret");

    return res.status(200).json(getUserDict(token, user));
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(400).json({ error: error.message });
  }
};*/



const register = async (req, res) => {
  try {
    const { username, email, password, image } = req.body;

    if (!(username && email && password)) {
      throw new Error("All input required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email.toLowerCase() },
          { username: username.toLowerCase() },
        ],
      },
    });

    if (existingUser) {
      throw new Error("Email and username must be unique");
    }

    const user = await prisma.user.create({
      data: {
        username,
        email: email.toLowerCase(),
        password: hashedPassword,
        image,
        isAdmin: email.toLowerCase() === "ceddit@admin.com" ? true : false,
      },
    });


    const token = jwt.sign(buildToken(user), process.env.TOKEN_KEY || "secret");

    return res.status(200).json(getUserDict(token, user));
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(400).json({ error: error.message });
  }
};

// Your Prisma model definition here
// ...

// Example Prisma User model (similar to the provided MongoDB model)
// Make sure to define associations properly based on your schema
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// prisma.user model definition
// ...



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      throw new Error("All input required");
    }

    // const user = await User.findOne({ email: email.toLowerCase() });
    const user = await prisma.user.findFirst({where: { email: email.toLowerCase() } });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }
    delete  user.password

    const token = jwt.sign(buildToken(user), process.env.TOKEN_KEY || "secret");

    return res.json(getUserDict(token, user));
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };

const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwtoken = require("jsonwebtoken");

const userController = {
  newUser: async (req, res) => {
    const {
      firstName,
      lastName,
      password,
      email,
      photo,
      country,
      google,
      admin,
    } = req.body;
    let hashedPass = bcryptjs.hashSync(password, 10);
    const newUsers = new User({
      firstName,
      lastName,
      password: hashedPass,
      email,
      photo,
      country,
      google,
      admin,
    });
    try {
      let userExist = await User.findOne({ email: email });
      if (userExist) throw new Error("Email already in use");
      await newUsers.save();
      const token = jwtoken.sign({ ...newUsers }, process.env.SECRETKEY);
      res.json({
        success: true,
        response: { firstName: newUsers.firstName, photo: newUsers.photo, token },
        error: null,
      });
    } catch (err) {
      res.json({ success: false, response: null, error: err.message });
    }
  },
  logUser: async (req, res) => {
    const { email, password, isGoogle } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (!user) throw new Error("Incorrect email or password");
      if (user.google && !isGoogle)
        throw new Error(
          "The account was created with Google, you must login with Google"
        );
      let passwordAccepted = bcryptjs.compareSync(password, user.password);
      if (!passwordAccepted) throw new Error("Incorrect email or password");
      const token = jwtoken.sign({ ...user }, process.env.SECRETKEY);
      res.json({
        success: true,
        response: { firstName: user.firstName, photo: user.photo, token },
      });
    } catch (err) {
      res.json({ success: false, error: err.message });
    }
  },
  verifyToken: (req, res) => {
    res.json({
      firstName: req.user.firstName,
      photo: req.user.photo,
    });
  },
};

module.exports = userController;

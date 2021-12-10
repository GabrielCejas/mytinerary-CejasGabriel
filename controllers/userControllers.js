const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwtoken = require("jsonwebtoken");

const userController = {
  newUser: async (req, res) => {
    const { firstName, lastName, password, email, photo, country, admin } =
      req.body;
    let hashedPass = bcryptjs.hashSync(password, 10);
    const newUsers = new User({
      firstName,
      lastName,
      password: hashedPass,
      email,
      photo,
      country,
      admin,
    });
    try {
      let userExist = await User.findOne({ email: email });
      if (userExist) throw new Error("Email already in use");
      await newUsers.save();
      const token = jwtoken.sign({ ...newUsers }, process.env.SECRETKEY);
      res.json({
        success: true,
        response: { name: newUsers.firstName, photo: newUsers.photo, token },
        error: null,
      });
    } catch (err) {
      res.json({ success: false, response: null, error: err.message });
    }
  },
  logUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      let userExist = await User.findOne({ email: email });
      if (!userExist) throw new Error("Incorrect email or password");
      let passwordAccepted = bcryptjs.compareSync(password, userExist.password);
      if (!passwordAccepted) throw new Error("Incorrect email or password");
      const token = jwtoken.sign({ ...userExist }, process.env.SECRETKEY);
      res.json({ success: true, response: {name: userExist.firstName, photo: userExist.photo, token} });
    } catch (err) {
      res.json({ success: false, error: err.message });
    }
  },
};

module.exports = userController;

const User = require("../models/User");
const bcryptjs = require("bcryptjs");

const userController = {
  newUser: async (req, res) => {
    const { name, lastname, password, email, photo, country, admin } = req.body;
    let hashedPass = bcryptjs.hashSync(password, 10);
    const newUsers = new User({
      name,
      lastname,
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
      res.json({ success: true, response: newUsers, error: null });
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
      res.json({ success: true, response: userExist });
    } catch (err) {
      res.json({ success: false, error: err.message });
    }
  },
};

module.exports = userController;

const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    firstName: joi.string().trim().min(2).max(15).required(),
    lastName: joi.string().trim().min(2).max(15).required(),
    email: joi.string().trim().email().required(),
    password: joi.string().trim().min(5).required(),
    photo: joi.string().trim().min(2).max(15).required(),
    country: joi.string().trim().required(),
  });
  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    res.json({success: false, errors: validation.error.details});
  }
};

module.exports = validator;

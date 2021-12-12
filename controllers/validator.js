const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    firstName: joi.string().trim().min(2).max(15).required().messages({
      "string.empty": "The field cannot be empty",
      "string.min": "The first name must have a minimum of 2 words.",
      "string.max": "The first name must have a max of 15 words.",
    }),
    lastName: joi.string().trim().min(2).max(15).required().messages({
      "string.empty": "The field cannot be empty",
      "string.min": "The last name must have a minimum of 2 words.",
      "string.max": "The last name must have a max of 15 words.",
    }),
    email: joi.string().trim().email().required().messages({
      "string.empty": "The field cannot be empty",
      "string.email": "Mail formatting is incorrect",
    }),
    password: joi.string().trim().min(5).required().messages({
      "string.empty": "The field cannot be empty",
      "string.min": "The password must have a minimum of 5 letters..",
    }),
    photo: joi.string().trim().min(4).required().messages({
      "string.empty": "The field cannot be empty",
      "string.min": "The photo must have a minimum of 4 letters..",
    }),
    country: joi.string().trim().required().messages({
      "string.empty": "The field cannot be empty",
    }),
    google: joi.boolean(),
  });
  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    res.json({ success: false, errors: validation.error.details });
  }
};

module.exports = validator;

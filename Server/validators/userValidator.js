// userValidator.js
const Joi = require("joi");

// Validation schema for creating a user
exports.createUserValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().integer().min(1).required(),
    gender: Joi.string().valid("Male", "Female", "Other").required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

// Validation schema for updating a user
exports.updateUserValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(6),
    username: Joi.string().alphanum().min(3).max(30),
    firstName: Joi.string(),
    lastName: Joi.string(),
    age: Joi.number().integer().min(1),
    gender: Joi.string().valid("Male", "Female", "Other"),
    address: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
  }).min(1); // At least one field must be present for an update

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

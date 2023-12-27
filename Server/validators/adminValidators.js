const Joi = require("joi");

exports.createAdminValidator = (req, res, next) => {
  const adminSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18),
    gender: Joi.string(),
    DOB: Joi.date(),
    phonenumber: Joi.string(),
    address: Joi.string(),
    role: Joi.string().valid("admin", "user"),
    active: Joi.boolean(),
  });

  const { error } = adminSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

exports.updateAdminValidator = (req, res, next) => {
  const adminSchema = Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
    email: Joi.string().email(),
    age: Joi.number().integer().min(18),
    gender: Joi.string(),
    DOB: Joi.date(),
    phonenumber: Joi.string(),
    address: Joi.string(),
    role: Joi.string().valid("admin", "user"),
    active: Joi.boolean(),
  });

  const { error } = adminSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

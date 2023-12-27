const Joi = require("joi");

exports.createPlanValidator = (req, res, next) => {
  const planSchema = Joi.object({
    title: Joi.string().required(),
    img: Joi.string().required(),
    content1: Joi.string().required(),
    content2: Joi.string().required(),
    content3: Joi.string().required(),
  });

  const { error } = planSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

exports.updatePlanValidator = (req, res, next) => {
  const planSchema = Joi.object({
    title: Joi.string(),
    img: Joi.string(),
    content1: Joi.string(),
    content2: Joi.string(),
    content3: Joi.string(),
  });

  const { error } = planSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

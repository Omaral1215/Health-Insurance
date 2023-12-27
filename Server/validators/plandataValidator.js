const Joi = require("joi");

exports.createPlanDataValidator = (req, res, next) => {
  const planDataSchema = Joi.object({
    name: Joi.string().required(),
    categories: Joi.array().items(
      Joi.object({
        planCategory: Joi.string().required(),
        premiums: Joi.array().items(
          Joi.object({
            year: Joi.number().required(),
            sumInsured: Joi.number().required(),
            premiumWithoutTax: Joi.number().required(),
            premiumWithTax: Joi.number().required(),
          })
        ),
      })
    ),
  });

  const { error } = planDataSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

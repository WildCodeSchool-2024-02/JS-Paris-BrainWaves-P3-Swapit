const Joi = require("joi");

const schema = Joi.object({
  pseudo: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().min(3).max(30).required(),

  confirmPassword: Joi.any().required().label("confirm password").equal(Joi.ref('password')),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "fr"] },
  }),
  phone: Joi.string().min(10).required(),
});

module.exports = schema;

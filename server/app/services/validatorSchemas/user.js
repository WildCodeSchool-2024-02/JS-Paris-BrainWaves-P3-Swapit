const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
  min: 5,
  max: 250,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 5,
};

const schema = Joi.object({
  pseudo: Joi.string().alphanum().min(3).max(30).required(),

  password: passwordComplexity(complexityOptions),

  confirmPassword: Joi.any()
    .required()
    .label("confirm password")
    .equal(Joi.ref("password")),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "fr"] },
  }),
  phone: Joi.string().min(10).required(),
});

module.exports = schema;

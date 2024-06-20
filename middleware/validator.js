const Joi = require("joi");

const validate = {
  //регистрация
  register: (req, res, next) => {
    const schema = Joi.object({
      first_name: Joi.string().alphanum().min(2).max(30).required(),
      last_name: Joi.string().alphanum().min(2).max(30).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().min(6).required(),
    });

    const validationResult = schema.validate({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    if (validationResult.error) {
      return res
        .status(422)
        .json({ error: validationResult.error.details[0].message });
    } else {
      next();
    }
  },
  //логин
  login: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().min(6).required(),
    });
    const validationResult = schema.validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (validationResult.error) {
      return res
        .status(422)
        .json({ error: validationResult.error.details[0].message });
    } else {
      next();
    }
  },
  //товары
  products: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(255).required(),
      description: Joi.string().max(255),
      price: Joi.number().required(),
      popularity: Joi.number(),
      seller: Joi.string().max(255).required(),
      type: Joi.string().max(50),
      is_fav: Joi.number(),
      img_url: Joi.string().max(255),
    });
    const validationResult = schema.validate({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      popularity: req.body.popularity,
      seller: req.body.seller,
      type: req.body.type,
      is_fav: req.body.is_fav,
      img_url: req.body.img_url,
    });
    if (validationResult.error) {
      return res
        .status(422)
        .json({ error: validationResult.error.details[0].message });
    } else {
      next();
    }
  },
  //заказы
  orders: (req, res, next) => {
    const schema = Joi.object({
      status: Joi.string().required(),
      sum: Joi.number()
    });
    const validationResult = schema.validate({
      status: req.body.status,
      sum: req.body.sum,
    });
    if (validationResult.error) {
      return res
        .status(422)
        .json({ error: validationResult.error.details[0].message });
    } else {
      next();
    }
  },
};

module.exports = validate;

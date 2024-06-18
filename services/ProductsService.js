const { Products } = require("../models/init");

class ProductsService {
  get = async (params) => {
    try {
      const id = parseInt(params.id);
      const products = await Products.findOne({
        where: {
          id: params.id,
        },
      });
      return products;
    } catch (e) {
      throw e;
    }
  };
  post = async (body) => {
    try {
      const products = await Products.create(body);
      return products;
    } catch (e) {
      throw e;
    }
  };
  patch = async (params) => {
    try {
      const id = parseInt(params.id);
      const products = await Products.findByPk(id);
      return products;
    } catch (e) {
      throw e;
    }
  };
  delete = async (params) => {
    try {
      const id = parseInt(params.id);
      const products = await Products.findByPk(id);
      return products;
    } catch (e) {
      throw e;
    }
  };
}

module.exports = ProductsService;

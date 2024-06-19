const { Orders } = require("../models/init");

class OrdersService {
  get = async (params) => {
    try {
      const id = parseInt(params.id);
      const orders = await Orders.findOne({
        where: {
          id: params.id,
        },
      });
      return orders;
    } catch (e) {
      throw e;
    }
  };
  post = async (body) => {
    try {
      const orders = await Orders.create(body);
      return orders;
    } catch (e) {
      throw e;
    }
  };
  patch = async (params) => {
    try {
      const id = parseInt(params.id);
      const orders = await Orders.findByPk(id);
      return orders;
    } catch (e) {
      throw e;
    }
  };
  delete = async (params) => {
    try {
      const id = parseInt(params.id);
      const orders = await Orders.findByPk(id);
      return orders;
    } catch (e) {
      throw e;
    }
  };
}

module.exports = OrdersService;
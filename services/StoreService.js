const { Favorite, Basket, Orders, ProductsOrders, Products, User } = require("../models/init");
const { Op } = require("sequelize");

class StoreService {
  addToFavOrBasket = async (data, model, token_id) => {
    try {
      if (token_id != data.user_id) {
        throw new Error("It's not current user!");
      }
      await model.create(data); //Ожидается Favorite/Basket
      return "Товар добавлен";
    } catch (error) {
      throw error;
    }
  };

  deleteFromFavOrBasket = async (data, model, token_id) => {
    try {
      if (token_id != data.user_id) {
        throw new Error("It's not current user!");
      }

      const item = await model.findOne({ 
        where: { 
            [Op.and]: [
                { product_id: data.product_id },
                { user_id: data.user_id }
            ]
        } 
      });
      if (item) {
        item.destroy();
        return "Товар удален";
      } else {
        throw new Error("Not founded");
      }
    } catch (error) {
      throw error;
    }
  };

  createOrder = async (data, token_id) => {
    try {
      const user_basket = await Basket.findAll({
        where: {
          user_id: token_id
        },
        attributes: ['product_id']
      });

      //await sequelize.transaction(async (t) => {
      //}) Возможные транзакции

      if (user_basket.length == 0) {
        throw new Error("Basket is empty");
      }

      const order = await Orders.create({ ...data, user_id: token_id });

      for (let i = 0; i < user_basket.length; i++) {
        await ProductsOrders.create({
          order_id: order.id,
          product_id: user_basket[i].product_id
        });
      }

      await Basket.destroy({
        where: {
          user_id: token_id
        }
      });

      return order;
    } catch (error) {
      throw error;
    }
  };

  refusalOrder = async (data, token_id) => {
    try {
      const order = await Orders.findByPk(data.order_id);
      if (!order) {
        throw new Error("Not founded");
      }

      if (token_id != order.user_id) {
        throw new Error("It's not current user!");
      }

      order.status = "Отказ";
      await order.save();

      return order;
    } catch (error) {
      throw error;
    }
  }

  getMyOrders = async (token_id) => {
    try {
      return Orders.findAll({
        where: {
            user_id: token_id,
        }
      })
    } catch (error) {
      throw error;
    }
  }

  //!NOT WORK
  getMyFav = async (token_id) => {
    try {
        const products = await Products.findAll({
        include: [{
            model: Favorite,
            // where: { user_id: token_id },
            // attributes: [], // Не включать атрибуты Basket в результат
        }],
        });

        return products;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
  }
}

module.exports = StoreService;

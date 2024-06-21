//Соединим наши сущности
const User = require("./user");
const Products = require("./products");
const Orders = require("./orders");

const ProductsOrders = require("./products_orders");
const Favorite = require("./favorite");
const Basket = require("./basket");

// связь многие ко многим - 3я таблица "products_orders" в БД создается автоматически
Products.belongsToMany(Orders, { through: "products_orders" });
Products.belongsToMany(User, { through: "favorite" });
Products.belongsToMany(User, { through: "basket" });
User.hasMany(Orders);

const init = async () => {
  //Синхронизация
  await Sequelize.sync({ alter: true });
  await User.sync({
    //Parameters - 1 принудительно обновить, 2 перезаписать таблицу
    alter: false, //true
    force: false,
  });
  await Products.sync({
    alter: true,
    force: false,
  });
  await Orders.sync({
    alter: true,
    force: false,
  });

  //Перексрестные таблицы !
  await ProductsOrders.sync({
    alter: false,
    force: false,
  });
  await Favorite.sync({
    alter: false,
    force: false,
  });
  await Basket.sync({
    alter: false,
    force: false,
  });
};

module.exports = {
  init,
  User,
  Products,
  Orders,
  ProductsOrders,
  Favorite,
  Basket,
};
const Sequelize = require("../DB");

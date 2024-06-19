//Соединим наши сущности
const User = require("./user");
const Products = require("./products");
const Orders = require("./orders");

// связь многие ко многим - 3я таблица "products_orders" в БД создается автоматически 
Products.belongsToMany(Orders, { through: "products_orders" });

const init = async () => {
  //Синхронизация
  await Sequelize.sync({ alter: true });
  await User.sync({
    //Parameters - 1 принудительно обновить, 2 перезаписать таблицу
    alter: false,
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
};

module.exports = { init, User, Products, Orders };
const Sequelize = require("../DB");

const Sequelize = require("../DB");

const Products = require("./products");
const Orders = require("./orders");

Products.belongsToMany(Orders, { through: "products_orders" });

const init = async () => {
  await Sequelize.sync({ alter: true });
  await Products.sync({ alter: true });
  await Orders.sync({ alter: true });
};

module.exports = { init, Products, Orders };

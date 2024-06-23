const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const ProductsOrders = sequelize.define(
  "products_orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    order_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
    tableName: "products_orders",
    timestamps: true,
  }
);

module.exports = ProductsOrders;

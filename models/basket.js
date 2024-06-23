const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const Basket = sequelize.define(
  "basket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
    tableName: "basket",
    timestamps: true,
  }
);

module.exports = Basket;

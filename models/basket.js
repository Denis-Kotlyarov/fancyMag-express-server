const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const Basket = sequelize.define(
  "basket",
  {
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

const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const Favorite = sequelize.define(
  "products_orders",
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
    tableName: "favorite",
    timestamps: true,
  }
);

module.exports = Favorite;

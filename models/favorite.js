const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const Favorite = sequelize.define(
  "products_orders",
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
    tableName: "favorite",
    timestamps: true,
    indexes: [
    {
      unique: true,
      fields: ['product_id', 'user_id']
    }
  ]
  }
  
);

module.exports = Favorite;

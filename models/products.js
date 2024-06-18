const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10.0),
      allowNull: false,
    },
    popularity: {
      type: DataTypes.TINYINT(11),
      allowNull: false,
    },
    seller: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    is_fav: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: "products",
    timestamps: true,
  }
);

module.exports = Products;

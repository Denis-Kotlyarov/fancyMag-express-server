const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const Orders = sequelize.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM(
        "Ожидает оплаты",
        "Сборка",
        "Заказ в пути",
        "Заказ получен",
        "Отказ"
      ),
      allowNull: false,
    },
    sum: {
      type: DataTypes.DECIMAL(10.0),
      allowNull: false,
    },
  },

  {
    underscored: true,
    tableName: "orders",
    timestamps: true,
  }
);

module.exports = Orders;

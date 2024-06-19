"use strict";
const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    //Атрибуты модели
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //Другая служебная информация
    scopes: {
      withOutPassword: {
        attributes: ["id", "first_name", "last_name", "email"],
      },
    },
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;

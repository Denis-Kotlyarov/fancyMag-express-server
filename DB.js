const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fancyMag', 'root', '', {
  host: 'MySQL-5.7',
  dialect: "mysql"
});

// ПРОВЕРКА СОЕДИНЕНИЯ 

// (async ()=> {try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }})()

module.exports = sequelize;
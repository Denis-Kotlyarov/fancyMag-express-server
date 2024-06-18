//Соединим наши сущности
const User = require("./user");

//Здесь надо будет добавить связи

const init = async () => {
  //Синхронизация
  await User.sync({
    //Parameters - 1 принудительно обновить, 2 перезаписать таблицу
    alter: false,
    force: false,
  });
};

module.exports = { init, User };

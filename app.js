// Начальные импорты
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// Импорт моделей, для ожидания их синхронизации при старте сервера
const { init } = require("./models/init");

// Импорты для документации
const swaggerDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.0.2",
    info: {
      title: "FancyMag",
      description: "Базовоя документация API нашего сервиса, тестовая сборка",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server"
      }
    ]
  },
  apis: ["./routes/*.js", "./controllers/*.js", "./services/*.js", "./models/*.js"],
}

// Импорт роутов
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Доп. настройки
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Подключение роутов + дока
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc(options))) //!Дока

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, async () => {
  await init();
});

module.exports = app;

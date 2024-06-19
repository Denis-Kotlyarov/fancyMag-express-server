const express = require("express");
const ordersRouter = require ("./routes/orders")
const productsRouter = require ("./routes/products")
const usersRouter = require ("./routes/users")

const app = express();
const port = 3001;

const { init } = require("./models/init");

app.use(express.json());
app.use("/index", ordersRouter );
app.use("/index", productsRouter );
// app.use("/index", usersRouter );

app.listen(port, async () => {
  console.log(`Порт ${port}`);
  await init();
});
module.exports = app;


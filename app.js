const express = require("express");
const indexRouter = require ("./routes/index")

const app = express();
const port = 3001;

const { init } = require("./models/init");

app.use(express.json());
app.use("/index", indexRouter );

app.listen(port, async () => {
  console.log(`Порт ${port}`);
  await init();
});
module.exports = app;


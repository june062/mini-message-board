const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routers/indexRouter");
const newMessageRouter = require("./routers/newMessageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.use((err, req, res, next) => {
  res.status(404).send(err);
});

app.listen(3000);

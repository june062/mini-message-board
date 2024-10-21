const { Router } = require("express");
const newMessageRouter = Router();
const sendMsgToDatabase = require("../controllers/newMessageController");

newMessageRouter.get("/", (req, res) => {
  res.render("newMessageView");
  res.end();
});
newMessageRouter.post("/", (req, res, next) => {
  sendMsgToDatabase(req, res);
  res.redirect("/");
  res.end();
});

module.exports = newMessageRouter;

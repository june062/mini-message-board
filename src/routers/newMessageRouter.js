const { Router } = require("express");
const newMessageRouter = Router();
const sendMsgToDatabase = require("../controllers/newMessageController");

newMessageRouter.get("/", (req, res) => {
  res.render("newMessageView");
});
newMessageRouter.post("/", (req, res, next) => {
  sendMsgToDatabase(req, res);
  res.redirect("/");
  res.end();
});

module.exports = newMessageRouter;

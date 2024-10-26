const { Router } = require("express");
const newMessageRouter = Router();
const sendMsgToDatabase = require("../controllers/newMessageController");

newMessageRouter.get("/", (req, res) => {
  res.render("newMessageView");
  res.end();
});
newMessageRouter.post("/", async (req, res, next) => {
  await sendMsgToDatabase(req, res);
  res.redirect("/");
  res.end();
});

module.exports = newMessageRouter;

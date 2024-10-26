const { Router } = require("express");
const messageRouter = Router();
const retrieveMessageInfo = require("../controllers/messageController.js");

messageRouter.get(
  "/:messageId",
  async (req, res, next) => {
    await retrieveMessageInfo(req, res);
    next();
  },
  (req, res) => {
    res.render("messageInfo", { message: res.locals.messageInfo });
  }
);

module.exports = messageRouter;

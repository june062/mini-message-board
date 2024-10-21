const { Router } = require("express");
const messageRouter = Router();
const retrieveMessageInfo = require("../controllers/messageController.js");

messageRouter.get(
  "/:messageId",
  (req, res, next) => {
    retrieveMessageInfo(req, res);
    next();
  },
  (req, res) => {
    console.log(res.locals.messageInfo.user);
    res.render("messageInfo", { message: res.locals.messageInfo });
  }
);

module.exports = messageRouter;

const { Router } = require("express");
const indexRouter = Router();
const { retrieveMessages } = require("../controllers/indexRouterController.js");
const {
  retrieveMessageInfo,
} = require("../controllers/indexRouterController.js");

indexRouter.get(
  "/",
  async (req, res, next) => {
    await retrieveMessages(req, res);

    next();
  },
  (req, res) => {
    res.render("indexView", {
      messages: res.locals.messages,
      title: "Mini Message Board",
    });
  }
);

module.exports = indexRouter;

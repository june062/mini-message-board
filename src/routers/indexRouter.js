const { Router } = require("express");
const indexRouter = Router();
const indexRouterController = require("../controllers/indexRouterController.js");
/* const messages = require("../models/messagesDB.js"); */

indexRouter.get(
  "/",
  (req, res, next) => {
    indexRouterController(req, res);

    next();
  },
  (req, res) => {
    res.render("indexView", { messages: res.locals.messages });
  }
);
module.exports = indexRouter;

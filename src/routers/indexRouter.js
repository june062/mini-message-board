const { Router } = require("express");
const indexRouter = Router();
const indexRouterController = require("../controllers/indexRouterController.js");

indexRouter.get(
  "/",
  (req, res, next) => {
    indexRouterController(req, res);

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

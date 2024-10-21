const { Router } = require("express");
const indexRouter = Router();
const retrieveMessages = require("../controllers/indexRouterController.js");

indexRouter.get(
  "/",
  (req, res, next) => {
    retrieveMessages(req, res);

    next();
  },
  (req, res) => {
    res.render("indexView", {
      messages: res.locals.messages,
      title: "Mini Message Board",
    });
  }
);
indexRouter.get("/:messageId", (req, res) => {
  console.log(req.params.messageId);
});

module.exports = indexRouter;

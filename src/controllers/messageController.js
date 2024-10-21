const messages = require("../models/messagesDB");

async function retrieveMessageInfo(req, res) {
  res.locals.messageInfo = messages[req.params.messageId];
}
module.exports = retrieveMessageInfo;

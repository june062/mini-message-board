const messages = require("../models/messagesDB.js");
async function retrieveMessages(req, res) {
  res.locals.messages = messages;
}
module.exports = retrieveMessages;

let messages = require("../models/messagesDB");
async function sendMsgToDatabase(req, res) {
  let text = req.body["user_message"];
  let user = req.body["user_name"];
  let added = new Date();

  messages.push({ text, user, added });
}

module.exports = sendMsgToDatabase;

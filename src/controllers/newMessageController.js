let queries = require("../models/queries");

async function sendMsgToDatabase(req, res) {
  let text = req.body["user_message"];
  let user = req.body["user_name"];
  let added = new Date();

  await queries.sendMsgToDatabase(user, text, added);
}

module.exports = sendMsgToDatabase;

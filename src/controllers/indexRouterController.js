const messages = require("../models/messagesDB.js");
const queries = require("../models/queries.js");
async function retrieveMessages(req, res) {
  try {
    res.locals.messages = await queries.retrieveMessages();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { retrieveMessages };

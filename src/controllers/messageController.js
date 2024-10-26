const queries = require("../models/queries");

async function retrieveMessageInfo(req, res) {
  res.locals.messageInfo = await queries.retrieveMessageInfo(
    req.params.messageId
  );
}
module.exports = retrieveMessageInfo;

const pool = require("./pool");

async function retrieveMessages() {
  try {
    let { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (err) {
    console.log(err);
  }
}
async function retrieveMessageInfo() {}
async function sendMsgToDatabase() {}

module.exports = { retrieveMessages, retrieveMessageInfo, sendMsgToDatabase };

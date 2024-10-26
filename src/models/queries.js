const pool = require("./pool");

async function retrieveMessages() {
  try {
    let { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (err) {
    console.log(err);
  }
}
async function retrieveMessageInfo(id) {
  try {
    let { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
    let row = rows[0];

    return row;
  } catch (error) {
    console.log(error);
  }
}
async function sendMsgToDatabase() {}

module.exports = { retrieveMessages, retrieveMessageInfo, sendMsgToDatabase };

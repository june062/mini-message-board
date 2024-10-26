const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `CREATE TABLE IF NOT EXISTS 
messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, message_user VARCHAR(20) NOT NULL, message VARCHAR(100), added date NOT NULL);

INSERT INTO messages (message_user, message, added)
VALUES
('Mary', 'Hey, everyone! How is it going?', '${new Date()}' ),
('Ghostface', 'WAZZAAAAAAAAAAAAAAAAAAA', '${new Date()}'),
('John', 'Hey, Mary! Pretty good how about yourself?', '${new Date()}'),
('Shorty', 'WAAAAAZZZZZZZAAAAAAAAAAAAAAAAAAAA', '${new Date()}'),
('Mary', 'Please, stop. We are trying to have a conv-', '${new Date()}'),
('Shorty', 'WAAAAAZZZZZZZAAAAAAAAAAAAAAAAAAAA', '${new Date()}'),
('Ghostface', 'WAAAAAZZZZZZZAAAAAAAAAAAAAAAAAAAA', '${new Date()}'),

 `;

async function populateDB() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_PRODUCTION_URI,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
populateDB();

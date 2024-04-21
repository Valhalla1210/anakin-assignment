require('dotenv').config();
const SQL_SERVER_PASSWORD=process.env.SQL_SERVER_PASSWORD;
const SQL_SERVER_USER=process.env.SQL_SERVER_USER;
const CONNECTION_LIMIT=process.env.CONNECTION_LIMIT;

const mysql = require('mysql2');
//connection pooling to allow multiple users
const dB = mysql.createPool({
  host: 'localhost',
  user: SQL_SERVER_USER,
  password: SQL_SERVER_PASSWORD,
  database: 'railway_management_system',
  waitForConnections: true,
  connectionLimit: CONNECTION_LIMIT,
  queueLimit: 0
});

module.exports={dB};
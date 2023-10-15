const mysql = require('mysql');
const config = require('../lib/config');
const pool = mysql.createPool({
  connectionLimit: 3,
  host: process.env.DB_HOST || config.db.host,
  user: process.env.DB_USER || config.db.user,
  password: process.env.DB_PASSWORD || config.db.password,
  database: process.env.DB_DATABASE || config.db.database
});

module.exports = pool;


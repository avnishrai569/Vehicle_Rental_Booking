const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

module.exports = {
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  dialect: config.dialect, // Ensure this is a string
};

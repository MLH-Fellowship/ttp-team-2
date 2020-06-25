const Sequelize = require("sequelize");
const databaseName = "mlh";

console.log("Opening database connection");

const db = new Sequelize("postgres://iosmcvwz:3cghTYtqq70HjOhDn_aWG8Kyo5Qkn3FW@ruby.db.elephantsql.com:5432/iosmcvwz" || `postgres://localhost:5432/${databaseName}`, { logging: false });

module.exports = db;
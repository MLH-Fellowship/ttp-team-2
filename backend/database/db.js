const Sequelize = require("sequelize");
const databaseName = "mlh";

console.log("Opening database connection");
console.log(process.env.DATABASE_URL);

const db = new Sequelize(
    "postgres://inoozicy:HIKFJaqS-4ThLPpkINdjrh_l8X-SmVcC@ruby.db.elephantsql.com:5432/inoozicy" || `postgres://localhost:5432/${databaseName}`,
  { logging: false }
);
//const db = new Sequelize("postgres://iosmcvwz:3cghTYtqq70HjOhDn_aWG8Kyo5Qkn3FW@ruby.db.elephantsql.com:5432/iosmcvwz" || `postgres://localhost:5432/${databaseName}`, { logging: false });

module.exports = db;

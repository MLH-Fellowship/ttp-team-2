const Sequelize = require("sequelize");
const databaseName = "mlh";

console.log("Opening database connection");
console.log(process.env.DATABASE_URL);

const db = new Sequelize(
  "postgres://inoozicy:HIKFJaqS-4ThLPpkINdjrh_l8X-SmVcC@ruby.db.elephantsql.com:5432/inoozicy" ||
    `postgres://localhost:5432/${databaseName}`,
  { logging: false }
);

module.exports = db;

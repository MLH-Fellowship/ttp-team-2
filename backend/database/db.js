const Sequelize = require("sequelize");
const databaseName = "mlh";

console.log("Opening database connection");

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, { logging: false });

module.exports = db;
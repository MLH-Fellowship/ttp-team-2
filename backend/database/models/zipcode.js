const Sequelize = require("sequelize");
const db = require("../db");

const Zipcode = db.define("zipcode", {
    zipCode: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false
    }
});




module.exports = Zipcode;
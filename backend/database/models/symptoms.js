const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");
const { SSL_OP_NO_QUERY_MTU } = require("constants");

const Symptoms = db.define("symptoms", {
    testResult: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    fever: {
        type: Sequelize.BOOLEAN
    },
    headache: {
        type: Sequelize.BOOLEAN
    },
    cough: {
        type: Sequelize.BOOLEAN
    },
    tiredness: {
        type: Sequelize.BOOLEAN
    },
    tasteLoss: {
        type: Sequelize.BOOLEAN
    }
});



module.exports = Symptoms;
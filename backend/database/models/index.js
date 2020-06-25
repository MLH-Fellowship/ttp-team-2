const User = require("./user");
const Zipcode = require("./zipcode")
const Symptoms = require("./symptoms");
const { isCompositeComponentWithType } = require("react-dom/test-utils");

// Make associations here, if necessary;
Zipcode.hasMany(User, { foreignKey: 'username', sourceKey: 'user' })
User.belongsTo(Zipcode, { foreignKey: 'username', targetKey: 'user' })

// Information about association is present in the target model, foregin key constraint of zipcode, select zipcode from users;
// Zipcode.hasMany(User, { as: 'User' })
// User.hasOne(Symptoms)

module.exports = {
  User,
  Zipcode,
  Symptoms
};
const User = require("./user");
const Zipcode = require("./zipcode")
const Symptoms = require("./symptoms")

// Make associations here, if necessary;

// zipcode has a field called userID but user does not have any zipcodes

// Information about association is present in the target model, foregin key constraint of zipcode
Zipcode.hasMany(User)
User.hasOne(Symptoms)

module.exports = {
  User,
  Zipcode,
  Symptoms
};
const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      email: "test@gmail.com",
      zipcode: "10310",
      password: "password",
      salt: "test salt",
    }),
  ]);
};

module.exports = seedDatabase;

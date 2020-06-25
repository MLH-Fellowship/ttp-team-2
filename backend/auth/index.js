const express = require("express");
const router = express.Router();
const { User, Zipcode } = require("../database/models");

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      res.status(401).send("Wrong username and/or password");
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send("Wrong username and/or password");
    } else {
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password, zip } = req.body;
    console.log(username, password, zip);
    const zipC = await Zipcode.findOne({ where: { zipCode: zip } });
    // const zipC = await Zipcode.create(
    //   { zipCode: zip, user: username },
    //   { include: User }
    // );
    // const user = await User.create({ username, password }, { include: Zipcode });
    const user = await zipC.createUser({ username, password });

    console.log(user);
    req.login(user, (err) => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
      console.log("user already exists");
    } else {
      next(err);
    }
  }
});

router.delete("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    } else {
      res.status(204).end();
    }
  });
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

module.exports = router;

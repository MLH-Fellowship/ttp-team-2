require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const authRouter = require("./auth");
const apiRouter = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./database");
const sessionStore = new SequelizeStore({ db });

const app = express();

app.use(bodyParser.json());

// insert elements into the database

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const syncDb = async () => {
  await db.sync({ force: true }).then(() => {
    console.log(`Database & tables created!`);
    user = db.models.user;
    zipcode = db.models.zipcode;

    zipcode
      .bulkCreate([
        { zipCode: "10001", user: "user01" },
        { zipCode: "10022", user: "user02" },
        { zipCode: "32003", user: "user03" },
      ])
      .then(function () {
        return zipcode.findAll();
      })
      .then(function (zipcodes) {
        // console.log(zipcodes);
      });

    user
      .bulkCreate([
        { username: "user01", password: "123" },
        { username: "user02", password: "123" },
        { username: "user03", password: "123" },
      ])
      .then(function () {
        return user.findAll();
      })
      .then(function (users) {
        // console.log(users);
      });
  });
};

// get all the zip codes
app.get("/allZip", function (req, res) {
  db.models.zipcode.findAll({ include: user }).then(function (zips) {
    res.send(zips);
  });
});

const configureApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

  /*
  
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
 
  */

  app.use(
    session({
      secret:
        "a super secretive secret key string to encrypt and sign the cookie",
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/auth", authRouter);
  app.use("/api", apiRouter);
};

const startListening = () => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!`);
  });
};

const bootApp = async () => {
  await sessionStore.sync();
  await syncDb();
  await configureApp();
  await startListening();
};

bootApp();

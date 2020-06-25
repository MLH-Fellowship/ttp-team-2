const express = require("express");
const session = require("express-session");
const passport = require("passport");
const authRouter = require("./auth");
const apiRouter = require("./routes");
const cors = require("cors");

// Load environmental variables from .env file
require("dotenv").config();

// Utilities;
const createLocalDatabase = require("./utils/createLocalDatabase");
const seedDatabase = require("./utils/seedDatabase");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Database instance
const db = require("./database");

const sessionStore = new SequelizeStore({ db });

// Instantiate express application
const app = express();

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Helper function to sync the database
const syncDb = async () => {
  if (process.env.NODE_ENV === "production") {
    db.sync();
  } else {
    console.log("As a reminder, the forced synchronization option is on");
    db.sync({ force: true })
      .then(() => seedDatabase())
      .catch((err) => {
        if (err.name === "SequelizeConnectionError") {
          createLocalDatabase();
          seedDatabase();
        } else {
          console.log(err);
        }
      });
  }
};

// Helper function to create our app with configurations and middleware
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

// Main function declaration
const bootApp = async () => {
  await sessionStore.sync();
  await syncDb();
  await configureApp();
  await startListening();
};

// Main function invocation
bootApp();

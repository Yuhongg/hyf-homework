// const express = require("express");
// const app = express();
// const router = express.Router();
// const path = require("path");

// const mealsRouter = require("./api/meals");
// const reservationsRouter = require("./api/reservations");
// const contactusRouter = require("./api/contactus");

// const buildPath = path.join(__dirname, "../../dist");
// const port = process.env.PORT || 3000;
// const cors = require("cors");

// app.use(express.static(buildPath));

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.use(express.json());

const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;

app.use(cors());

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/contactus", contactusRouter);

app.use(process.env.API_PATH, router);

app.use("*", (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
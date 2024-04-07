const express = require("express"); // express js configuration
require("dotenv").config(); // dotenv configuration

const app = express(); // instance for express app

const morgan = require("morgan"); // request logger

const Todos = require("../routes/todos");
const ErrorHandler = require("../middlewares/ErrorHandler");

// Middlewares
app.use(express.json());
// Error Handling Middleware
app.use(ErrorHandler);

// If the form data is coming
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Logging incoming and outgoing requests
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello,World from server!",
  });
});

// API
app.use("/api", Todos);

// exporting the app
module.exports = app;

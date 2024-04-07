const express = require("express");
const todos = require("../data/todos");

const router = express.Router();

// Getting all the Routes
router.get("/todos", (req, res, next) => {
  try {
    // Response Message
    res
      .json({
        success: true,
        todos: todos,
      })
      .status(201);
  } catch (error) {
    return next(error);
  }
});

// Get single Route
router.get("/todos/:id", (req, res, next) => {
  try {
    const todoId = req.params.id;
    console.log({ todoId });

    const filteredTodo = todos?.find((item) => {
      return +item.id === +todoId;
    });

    console.log("fil", filteredTodo);

    // Response
    res
      .json({
        success: true,
        todo: filteredTodo,
      })
      .status(201);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

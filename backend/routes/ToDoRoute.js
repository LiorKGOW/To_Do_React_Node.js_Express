const { Router } = require("express");
const { getToDo } = require("../controllers/ToDoController");

const router = Router();

// GET Method using root route would return all ToDo items
router.get('/', getToDo);

module.exports = router;

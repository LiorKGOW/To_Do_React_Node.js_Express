const { Router } = require("express");
const { getToDo, saveToDo } = require("../controllers/ToDoController");

const router = Router();

// GET Method using root route would return all ToDo items
router.get('/', getToDo);

// POST Method using 'save' would create a new ToDo item, and save it to the database
router.post('/save', saveToDo);

module.exports = router;

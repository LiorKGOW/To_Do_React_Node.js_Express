const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

// GET Method using '/todos' root route would return all ToDo items
router.get('/todos', getToDo);

// POST Method using '/save' route would create a new ToDo item and save it to the database
router.post('/save', saveToDo);

// PUT Method using '/update' route would update an existing ToDo item and save it to the database
router.put('/update', updateToDo);

// POST Method using '/delete' route would delete the ToDo item with the given id from the database
router.post('/delete', deleteToDo);

module.exports = router;

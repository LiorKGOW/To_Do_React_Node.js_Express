const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

// GET Method using '/todos' route would return all ToDo items
router.get('/todos', getToDo);

// POST Method using '/todos' route would create a new ToDo item and save it to the database
router.post('/todos', saveToDo);

// PUT Method using '/todos' route would update an existing ToDo item and save it to the database
router.put('/todos', updateToDo);

// DELETE Method using '/todos', with an addition of the id of a ToDo in the DB, would result in deleting the ToDo item with the given id (recieved as a query parameter) from the database
// For instance, if there is a ToDo in the DB with the id of 123, and the server would recieve a DELETE request with the following route: "/todos/123", this item would be deleted from the DB
router.delete('/todos/:id', deleteToDo);

module.exports = router;

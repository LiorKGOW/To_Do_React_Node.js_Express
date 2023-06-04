import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import NoTasksToPresent from "./components/NoTasksToPresent";
import {
  getAllTodos,
  addNewToDo,
  updateToDo,
  deleteToDo, 
} from "./utils/ServerRequestHandler";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTodoId, setUpdatedTodoId] = useState("");

  useEffect(() => {
    getAllTodos(setTodos);
  }, []);

  const enterUpdateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setUpdatedTodoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Lior's ToDo List</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Enter a new task here"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          {isUpdating ? (
            <div
              className="update-btn"
              onClick={() => updateToDo(updatedTodoId, text, setTodos, setText, setIsUpdating)}
            >
              Update
            </div>
          ) : (
            <div
              className="add-btn"
              onClick={() => addNewToDo(text, setText, setTodos)}
            >
              Add
            </div>
          )}
        </div>

        <div className="list">
          {todos.length > 0 ? (
            todos.map(({_id, text}) => (
              <ToDo
                id={_id}
                key={_id}
                text={text}
                enterUpdateMode={() => enterUpdateMode(_id, text)}
                deleteToDo={() => deleteToDo(_id, setTodos)}
              />
            ))
          ) : (
            <NoTasksToPresent />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

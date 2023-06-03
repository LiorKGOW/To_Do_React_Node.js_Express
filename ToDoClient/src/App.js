import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllTodos, addNewToDo } from "./utils/HandleToDoApiRequests";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllTodos(setTodos);
  }, []);

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
          <div className="add-btn" onClick={() => addNewToDo(text, setText, setTodos)}>
            Add
          </div>
        </div>

        <div className="list">
          {todos.map((todo) => (
            <ToDo id={todo._id} key={todo._id} text={todo.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllTodos } from "./utils/HandleApi";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos(setTodos);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Lior's ToDo App</h1>

        <div className="top">
          <input type="text" placeholder="Enter a new task here" />
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

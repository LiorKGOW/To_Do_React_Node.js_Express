import ToDo from "./components/ToDo";
import { mockToDos } from "./mockData";

function App() {
  const { data } = mockToDos;

  return (
    <div className="App">
      <div className="container">
        <h1>Lior's ToDo App</h1>

        <div className="top">
          <input type="text" placeholder="Enter a new task here" />
        </div>

        <div className="list">
          {data.map((todo) => (
            <ToDo text={todo.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

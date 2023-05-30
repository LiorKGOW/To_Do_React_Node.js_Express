import axios from "axios";

// Be sure to change the port to the backend server port! can be found in backend\Server.js
const BACKEND_SERVER_PORT = 5000;
const baseUrl = `http://localhost:${BACKEND_SERVER_PORT}`;

const getAllTodos = async (setTodo) => {
  try {
    await axios.get(baseUrl + "/todos").then((response) => {
      if (response.data) {
        setTodo(response.data);
        console.log(`fetched the following data: ${response.data}`);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export { getAllTodos };

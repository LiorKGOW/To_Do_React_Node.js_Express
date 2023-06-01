import axios from "axios";
import { BASE_URL } from "./constants";

const getAllTodos = async (setTodo) => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);

    if (response.data) {
      setTodo(response.data);

      const todoTexts = response.data.map((todo) => todo.text);
      console.log(
        `Fetched ${response.data.length} ToDo items from the server:`
      );
      console.log(todoTexts);
    }
  } catch (err) {
    console.log(err);
  }
};

export { getAllTodos };

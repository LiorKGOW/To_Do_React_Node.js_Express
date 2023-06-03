import axios from "axios";
import { BASE_URL } from "./constants";

const getAllTodos = async (setTodos) => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);

    if (response.data) {
      setTodos(response.data);

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

const addNewToDo = async ( text, setText, setTodos ) => {
  const response = await axios
    .post(`${BASE_URL}/todos`, { text })
    .catch((error) => {
      console.log(error);
    });

  if (response.data) {
    console.log(`Added a new Todo item with the following text: "${text}"`);
    setText("");
    getAllTodos(setTodos);
  }
};

export { getAllTodos, addNewToDo };

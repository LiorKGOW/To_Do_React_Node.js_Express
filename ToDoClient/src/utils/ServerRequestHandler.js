import axios from "axios";
import { BASE_URL } from "./constants";

const getAllTodos = async (setTodos) => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);

    if (response.status === 200) {
      setTodos(response.data);

      const todoTexts = response.data.map((todo) => todo.text);
      console.log(
        `Fetched ${response.data.length} ToDo items from the server:`
      );
      console.log(todoTexts);
    }
  } catch (error) {
    console.log(error);
  }
};

const addNewToDo = async (text, setText, setTodos) => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, { text });

    if (response.status === 200) {
      console.log(`Added a new Todo item with the following text: "${text}"`);
      setText("");
      getAllTodos(setTodos);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateToDo = async (toDoId, text, setTodos, setText, setIsUpdating) => {
  try {
    const response = await axios.put(`${BASE_URL}/todos`, {
      _id: toDoId,
      text,
    });

    if (response.status === 200) {
      console.log("ToDo's message updated successfully !");
    }

    setText("");
    setIsUpdating(false);
    getAllTodos(setTodos);
  } catch (error) {
    console.log(error);
  }
};

const deleteToDo = async (_id, setTodos) => {
  try {
    const response = await axios.delete(`${BASE_URL}/todos/${_id}`);
    if (response.status === 200) {
      console.log(response.data);
    }
    getAllTodos(setTodos);
  } catch (error) {
    console.log(error);
  }
};

export { getAllTodos, addNewToDo, updateToDo, deleteToDo };

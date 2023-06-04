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
  } catch (error) {
    console.log(error);
  }
};

const addNewToDo = async (text, setText, setTodos) => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, { text });

    if (response.data) {
      console.log(`Added a new Todo item with the following text: "${text}"`);
      setText("");
      getAllTodos(setTodos);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateToDo = async (toDoId, text, setTodo, setText, setIsUpdating) => {
  try {
    const response = await axios.put(`${BASE_URL}/todos`, {
      _id: toDoId,
      text,
    });

    if(response.data){
      console.log("ToDo's message updated successfully !");
    }

    setText("");
    setIsUpdating(false);
    getAllTodos(setTodo);
  } catch (error) {
    console.log(error);
  }
};

export { getAllTodos, addNewToDo, updateToDo };

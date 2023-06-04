import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = (props) => {
  const { _id, text, enterUpdateMode, deleteToDo } = props;
  return (
    <div id={_id} className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className='icon' onClick={enterUpdateMode} />
        <AiFillDelete className='icon' onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;

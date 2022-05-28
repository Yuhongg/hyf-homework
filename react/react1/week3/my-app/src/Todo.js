import React from "react";
import { useState } from "react";

const TodoItem = ({ todo, changeText }) => {
  const { text, id, isDone } = todo;
  const [isEditMode, setIsEditMode] = useState(false);

  function handler() {
    console.log("handler");
    setIsEditMode(!isEditMode);
  }

  function editHandler(e) {
    changeText(e.target.value);
  }
  return (
    <li>
      {isEditMode ? (
        <>
          <input value={text} onChange={editHandler} />{" "}
          <button onClick={handler}>Save</button>
        </>
      ) : (
        <>
          <input type="checkbox" />
          {text}
          {""}
          <button onClick={handler}>Edit</button>
          {""}
        </>
      )}
    </li>
  );
};

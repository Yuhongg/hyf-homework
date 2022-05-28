import React from "react";

const TodoItems = ({ todos, changeText }) => {
  return (
    <ul>
      {todos.map((aTodo) => {
        return <TodoItem key={aTodo.id} todo={aTodo} changeText={changeText} />;
      })}
    </ul>
  );
};

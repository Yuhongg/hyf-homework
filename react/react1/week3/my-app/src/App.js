import "./App.css";
import { useState } from "react";
import TodoItem from "./Todoitem";
import Todo from "./Todo";

const initialTodos = [
  { text: "Todo item 1", id: 0, isDone: true },
  { text: "Todo item 2", id: 1, isDone: true },
  { text: "Todo item 3", id: 2, isDone: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodoItem(text) {
    const newTodo = { text, done: false, id: 3 };
    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);
  }
  function changeText(id, text) {
    const newTodos = todos.map((aTodo) => {
      if (aTodo.id === id) {
        console.log(aTodo);
        return { ...aTodo, text };
      } else {
        return aTodo;
      }
    });
    console.log(newTodos);
    setTodos(newTodos);
  }
  return (
    <div>
      <Header addTodoItem={addTodoItem} />
      <TodoItems todos={todos} changeText={changeText} />
    </div>
  );
}

function Header({ addTodoItem }) {
  const [value, setValue] = useState();
  const clickHandler = () => {
    console.log("clicked", value);
    addTodoItem(value);
  };
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <button onClick={clickHandler}>Add a todo task</button>
    </div>
  );
}

export default App;

import "./App.css";
import tasks from "./TodoTask";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="Todolist">
      <tasks />
      <ul>
        {tasks.map((task) => {
          return (
            <TodoList
              title={task.title}
              description={task.description}
              deadline={task.deadline}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;

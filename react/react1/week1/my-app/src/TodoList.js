function TodoList(props) {
  return (
    <li>
      <h3>
        {props.title}: {props.description}, {props.deadline}
      </h3>
    </li>
  );
}
export default TodoList;

function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li className="m-2 text-lg flex justify-between">
      <div className="checkbox-wrapper-11">
        <input
          id="02-11"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label for="02-11"> {title}</label>
      </div>

      <button
        onClick={() => deleteTodo(id)}
        className="text-red-700 border-red-700 bg-red-200 hover:bg-red-300 border-style-solid rounded-lg border-2 px-2 ml-52"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

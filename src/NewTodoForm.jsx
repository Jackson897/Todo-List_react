import { useState } from "react";

function NewTodoForm({ addTodos }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    addTodos(newItem);

    setNewItem("");
  }
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mb-10 p-5 border-blue-800 border-style-solid border-2 rounded-lg min-w-96"
      >
        <div>
          <label
            htmlFor="item"
            className="font-bold text-2xl flex items-center justify-center pb-5"
          >
            New Item
          </label>
          <input
            type="text"
            id="item"
            className="bg-blue-800 rounded-lg border-color-800 w-full text-white alinea_centro_testo"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="w-full border-style-solid border-2 border-blue-800  rounded-lg my-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;

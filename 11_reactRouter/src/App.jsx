import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
      },
    ]);

    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-red-100 h-screen">
      <div className=" mx-auto max-w-md">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter tasks..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        {todos.length === 0 ? (
          <p>No todo yet!</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id}>
              <h1>{todo.text}</h1>
              <button onClick={() => handleDelete(todo.id)}>Delete todo</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

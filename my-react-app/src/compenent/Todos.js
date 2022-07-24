import React from "react";

const Todos = ({ todos,deleteTodo,doneTodo }) => {
  return todos.length > 0
    ? <ul>
        {todos.map(todo =>
          <li key={todo.id} className="todos__item">
            <span
              className={
                todo.status ? "todos__text todos_text_done" : "todos__text"
              }
            >
           {todo.name}
            </span>
            <div className="todos__buttons">
              <button onClick={() =>doneTodo(todo.id)} disabled={todo.status}>
                ✅
              </button>
              <button onClick={() =>deleteTodo(todo.id)}>
                ❌
              </button>
            </div>
          </li>
        )}
      </ul>
    : null;
};

export default Todos;

import React, { useState } from "react";
import "./App.css";
import TodoField from "./compenent/TodoField";
import Todos from "./compenent/Todos";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      name: "alışveriş",
      status: false
    },
    {
      id: 2,
      name: "shopping",
      status: false
    }
  ]);

  const addTodo = todo => {
    if (todo.name) {
      settodos([...todos, todo]);
      toast.success(`"${todo.name}" Listeye eklendi.`);
    }
  };
  const deleteTodo = id => {
    let newTodos = todos.filter(todo => todo.id !== id);
    settodos(newTodos);
    toast.error("Listeden silindi !", {
      position: "top-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0
    });
  };
  const doneTodo = id => {
    let currentTodo = todos.find(todo => todo.id === id);
    currentTodo.status = true;
    settodos([...todos]);
    toast.info('Listedeki yapıldı', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>Todos</h1>
      <TodoField addTodo={addTodo} />
      <Todos doneTodo={doneTodo} deleteTodo={deleteTodo} todos={todos} />
      <style>
        {"h1,span {text-align:center; color:#03c03c;}"}
        {"body { background-color: #FFFFF0; color:orange; margin-top:100px }"}
        
        
      </style>
    </div>
  );
}

export default App;

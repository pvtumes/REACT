import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomMessage from "./components/WelcomeMessage";
import { TodoItemscontext } from "./store/todo-items-store";

function App() {
  const todoList = [];

  const [data, setdata] = useState(todoList);

  const onNewItem = (itemName, itemDate) => {
    console.log(itemName, itemDate);
    setdata([...data, { todo: itemName, date: itemDate }]); // ✅ Corrected
  };

  const handleDeleteButton = (toddoItemname) => {
    console.log("deleted ", toddoItemname);
    const newTodoitems = data.filter((item) => item.todo !== toddoItemname);
    setdata(newTodoitems);
  };

  return (
    <TodoItemscontext.Provider>
      <center>
        <AppName />
        <AddTodo onNewItem={onNewItem} />
        <div className="Item-container">
          {data.length === 0 && <WelcomMessage></WelcomMessage>}
          <TodoItems handleDeleteButton={handleDeleteButton} todolist={data} />
        </div>
      </center>
    </TodoItemscontext.Provider>
  );
}

export default App;

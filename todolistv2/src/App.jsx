import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoList = [
    { todo: "Learn React", date: "2025-03-06" },
    { todo: "Complete project", date: "2025-03-07" },
    { todo: "Read a book", date: "2025-03-08" },
    { todo: "Go for a run", date: "2025-03-09" },
    { todo: "Write a blog post", date: "2025-03-10" },
    { todo: "Prepare for an interview", date: "2025-03-11" },
    { todo: "Watch a tutorial", date: "2025-03-12" },
    { todo: "Clean the workspace", date: "2025-03-13" },
    { todo: "Plan the next week", date: "2025-03-14" },
    { todo: "Meet a friend", date: "2025-03-15" },
  ];
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="Item-container">
        <TodoItems todolist={todoList}></TodoItems>
      </div>
    </center>
  );
}

export default App;

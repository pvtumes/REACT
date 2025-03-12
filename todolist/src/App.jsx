import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem2 from "./components/TodoItem2.jsx";
import "./App.css";

function App() {
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="Item-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;

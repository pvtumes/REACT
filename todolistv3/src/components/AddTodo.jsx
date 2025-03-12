import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, SetTodoname] = useState("");
  const [tododate, settododate] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    SetTodoname(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);
    settododate(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <input
            onChange={handleNameChange}
            value={todoName} // Controlled input
            type="text"
            placeholder="Enter to do here......"
          />
        </div>
        <div className="col-4">
          <input
            onChange={handleDateChange}
            value={tododate} // Controlled input
            type="date"
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              if (todoName && tododate) {
                onNewItem(todoName, tododate);
                SetTodoname(""); // Clear input after adding
                settododate(""); // Clear input after adding
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;

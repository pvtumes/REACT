import { useContext, useRef } from "react";
import { TodoItemscontext } from "../store/todo-items-store";

function AddTodo({ onNewItem }) {
  const todoNameRef = useRef("");
  const todoDateRef = useRef("");
  const noOfUpdates = useRef(0);

  const handleNameChange = () => {
    noOfUpdates.current += 1;
  };

  const handleDateChange = () => {
    console.log(noOfUpdates.current);
  };
  useContext(TodoItemscontext);
  

  return (
    <>
      <div className="row">
        <div className="col-4">
          <input
            ref={todoNameRef} // ✅ Using useRef
            onChange={handleNameChange}
            type="text"
            placeholder="Enter to do here......"
            defaultValue="" // ✅ Avoid controlled input issue
          />
        </div>
        <div className="col-4">
          <input
            ref={todoDateRef} // ✅ Using useRef
            onChange={handleDateChange}
            type="date"
            defaultValue=""
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              const todoName = todoNameRef.current.value;
              const tododate = todoDateRef.current.value;
              if (todoName && tododate) {
                onNewItem(todoName, tododate);
                todoNameRef.current.value = ""; // ✅ Clear input after adding
                todoDateRef.current.value = ""; // ✅ Clear input after adding
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

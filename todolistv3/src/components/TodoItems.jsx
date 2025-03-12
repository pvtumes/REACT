function TodoItems({ todolist, handleDeleteButton }) {
  return (
    <>
      {todolist.map((item, index) => (
        <div className="row" key={index}>
          <div className="col-4 text">{item.todo}</div>
          <div className="col-4 text">{item.date}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDeleteButton(item.todo)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoItems;

function TodoItem1() {
  let todo = "do xyz";
  let tododate = "12/02/2004";
  return (
    <>
      <div>
        <div className="row">
          <div className="col-4 text">{todo}</div>
          <div className="col-4 text">{tododate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem1;

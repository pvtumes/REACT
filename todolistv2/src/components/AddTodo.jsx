function AddTodo() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Enter to do here......" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;

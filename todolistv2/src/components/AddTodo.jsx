function AddTodo() {
  return (
    <>
      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="Enter to do here......" />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;

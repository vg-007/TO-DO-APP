function Addtask() {
  return (
    <div className="container rowval">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter the TaskName"></input>
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtask;

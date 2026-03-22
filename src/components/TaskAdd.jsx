const Item=({taskname,date})=>{
    return (
        <div className="container rowval">
      <div className="row">
        <div className="col-6">
          {taskname}
        </div>
        <div className="col-4">
            {date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
    );
}
export default Item;
function App() {
  return (
    <center>
      <h1>TO-DO APP</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter the TaskName"></input>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">submit</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;

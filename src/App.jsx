import Appname from "./components/Appname";
import Addtask from "./components/Addtask";
import Todoitems from "./components/Todo-items"
import "./App.css";
function App() {
  const itemlist = [
    {
      taskname: "coding",
      lastdate: "22/03/2026",
    },
    {
      taskname: "Assignments",
      lastdate: "25/03/2026",
    }
  ];
  return (
    <div className="dabba">
      <div className="mainContain">
        <center>
          <Appname></Appname>
          <Addtask></Addtask>
          <Todoitems items={itemlist}></Todoitems>
          
        </center>
      </div>
    </div>
  );
}

export default App;

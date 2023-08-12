import Header from "./Header"
import Concepts from "./Concepts"
import allConcepts from "../../concepts.js"

function App() {
  return (
    <div>
      <Header/>
      <Concepts concepts={allConcepts}/>
    </div>
  );
}

export default App;

import {getLocation} from "./service/api";

function App() {
  return (
    <div className="App">
      {getLocation()}
    </div>
  );
}

export default App;

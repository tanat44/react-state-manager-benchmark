import "./App.css";
import { StateManagementBenchmark } from "./StateManagementBenchmark/StateManagementBenchmark";
import { ZustandTest } from "./ZustandTest/ZustandTest";

function App() {
  return (
    <div className="App">
      <StateManagementBenchmark />
      <ZustandTest />
    </div>
  );
}

export default App;

import { useState } from "react";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import "./App.css";
import { HelloReact } from "./HelloReact";
import { HelloRecoilAtom } from "./HelloRecoilAtom";
import { HelloRecoilFamily } from "./HelloRecoilFamily";
import { HelloRedux } from "./HelloRedux";
import { HelloZustand } from "./HelloZustand";
import store from "./redux/store";

function App() {
  const [mount, setMount] = useState(true);
  const unmountRecoil = () => {
    setMount(!mount);
  };

  return (
    <div className="App">
      <h1>State Management Benchmark</h1>
      {mount && (
        <>
          <RecoilRoot>
            <HelloRecoilFamily />
            <hr />
            <HelloRecoilAtom />
          </RecoilRoot>
          <hr />
          <Provider store={store}>
            <HelloRedux />
          </Provider>
          <hr />
          <HelloZustand />
          <hr />
          <HelloReact />
        </>
      )}
      <hr />
      <button onClick={unmountRecoil}>Unmount State</button>
    </div>
  );
}

export default App;

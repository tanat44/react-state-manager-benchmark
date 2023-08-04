import { useState } from "react";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import store from "../redux/store";
import { HelloReact } from "./HelloReact";
import { HelloRecoilAtom } from "./HelloRecoilAtom";
import { HelloRecoilFamily } from "./HelloRecoilFamily";
import { HelloRedux } from "./HelloRedux";
import { HelloZustand } from "./HelloZustand";

export const StateManagementBenchmark = ({ props }: any) => {
  const [mount, setMount] = useState(true);
  const unmountRecoil = () => {
    setMount(!mount);
  };

  return (
    <div className="Panel">
      <h3>State Management Benchmark</h3>
      {mount && (
        <>
          <RecoilRoot>
            <HelloRecoilFamily />
            <HelloRecoilAtom />
          </RecoilRoot>
          <Provider store={store}>
            <HelloRedux />
          </Provider>
          <HelloZustand />
          <HelloReact />
        </>
      )}
      <button onClick={unmountRecoil}>Unmount States</button>
    </div>
  );
};

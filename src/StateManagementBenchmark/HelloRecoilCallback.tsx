import {
  atom,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useCallback, useEffect, useRef, useState } from "react";

const countAtom2 = atom<number>({
  key: "count2",
  default: 0,
});

const countAtom1 = atom<number>({
  key: "count1",
  default: 0,
});

type Props = {
  running: boolean;
};

export const RenderRecoil = ({ running }: Props) => {
  const [time, setTime] = useState<number>(0);
  const [count, setCount] = useRecoilState(countAtom1);
  const mouseUpdate = useCallback(
    (e: MouseEvent) => {
      setCount(count + 1);
    },
    [count, setCount]
  );

  const mouseUpdateReactRef = useRef<(e: MouseEvent) => void>(mouseUpdate);

  const startMouseListener = () => {
    document.addEventListener("mousemove", mouseUpdateReactRef.current);
    setTime(Date.now());
  };

  const stopMouseListener = () => {
    document.removeEventListener("mousemove", mouseUpdateReactRef.current);
  };

  useEffect(() => {
    running ? startMouseListener() : stopMouseListener();
  }, [running]);

  console.log(time, count);

  return <div>RecoilState Frame Time = {(Date.now() - time) / count}</div>;
};

export const RenderRecoilCallback = ({ running }: Props) => {
  const count = useRecoilValue(countAtom2);
  const [time, setTime] = useState<number>(0);
  const mouseUpdate = useRecoilCallback(
    ({ snapshot, set }) =>
      async (e: MouseEvent) => {
        const count = await snapshot.getPromise(countAtom2);
        set(countAtom2, count + 1);
      },
    []
  );
  const mouseUpdateReactRef = useRef(mouseUpdate);

  const startMouseListener = () => {
    document.addEventListener("mousemove", mouseUpdateReactRef.current);
    setTime(Date.now());
  };

  const stopMouseListener = () => {
    document.removeEventListener("mousemove", mouseUpdateReactRef.current);
  };

  useEffect(() => {
    running ? startMouseListener() : stopMouseListener();
  }, [running]);

  return (
    <div>
      RecoilCallback Frame Time = {((Date.now() - time) / count).toFixed(2)}
    </div>
  );
};
export const HelloRecoilCallback = () => {
  const [running, setRunning] = useState<boolean>(false);

  return (
    <div className="Border">
      Recoil Callback
      <br />
      {running ? (
        <button onClick={() => setRunning(false)}>Stop</button>
      ) : (
        <button onClick={() => setRunning(true)}>Start</button>
      )}
      <RenderRecoil running={running} />
      <RenderRecoilCallback running={running} />
      <br />
    </div>
  );
};

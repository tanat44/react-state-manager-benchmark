import { atom, useRecoilCallback, useResetRecoilState } from "recoil";
import { ShapesDict } from "./type";

const shapesAtom = atom<ShapesDict>({
  key: "shapes",
  default: {},
});

const NUM_SHAPE = 10000;

export const HelloRecoilAtom = () => {
  const resetAtom = useResetRecoilState(shapesAtom);

  const createManyShapes = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        const oldShapes = await snapshot.getPromise(shapesAtom);
        const shapes: ShapesDict = { ...oldShapes };
        for (let i = 0; i < NUM_SHAPE; ++i) {
          shapes[i.toString()] = {
            id: i.toString(),
            value: (Math.random() * 100000).toFixed(0),
          };
        }
        set(shapesAtom, shapes);
      }
  );

  const deleteAll = useRecoilCallback(({ reset }) => async () => {
    reset(shapesAtom);
  });

  const getShape = useRecoilCallback(({ snapshot }) => async (id: number) => {
    const shapes = await snapshot.getPromise(shapesAtom);
    console.log(shapes[id.toString()]);
  });

  const xCreateManyShapes = async () => {
    for (let i = 0; i < 100; ++i) {
      console.log("round " + i);
      await createManyShapes();
    }
  };

  return (
    <>
      Recoil Atom
      <br />
      <button onClick={createManyShapes}>Create {NUM_SHAPE} shapes</button>
      <br />
      <button onClick={deleteAll}>Delete All</button>
      <br />
      <button onClick={() => getShape(400)}>Get Shape 400</button>
      <br />
      <button onClick={resetAtom}>Reset recoil state</button>
      <br />
      <button onClick={xCreateManyShapes}>Many creates</button>
      <br />
    </>
  );
};

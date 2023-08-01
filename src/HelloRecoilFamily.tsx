import { atomFamily, useRecoilCallback } from "recoil";
import { Shape } from "./type";

const shapeAtom = atomFamily<Shape, number>({
  key: "shape",
  default: {
    id: "defaultId",
    value: "defaultValue",
  },
});

const NUM_SHAPE = 10000;

export const HelloRecoilFamily = () => {
  const createManyShapes = useRecoilCallback(({ set }) => async () => {
    for (let i = 0; i < NUM_SHAPE; ++i) {
      set(shapeAtom(i), {
        id: i.toString(),
        value: (Math.random() * 100000).toFixed(0),
      });
    }
  });

  const deleteAll = useRecoilCallback(({ set, reset }) => async () => {
    for (let i = 0; i < NUM_SHAPE; ++i) {
      reset(shapeAtom(i));
    }
  });

  const getShape = useRecoilCallback(({ snapshot }) => async (id: number) => {
    console.log(await snapshot.getPromise(shapeAtom(id)));
  });

  const xCreateManyShapes = async () => {
    for (let i = 0; i < 100; ++i) {
      console.log("round " + i);
      await createManyShapes();
    }
  };

  return (
    <>
      Recoil Family
      <br />
      <button onClick={createManyShapes}>Create {NUM_SHAPE} shapes</button>
      <br />
      <button onClick={deleteAll}>Delete All</button>
      <br />
      <button onClick={() => getShape(400)}>Get Shape 400</button>
      <br />
      <button onClick={xCreateManyShapes}>Many creates</button>
      <br />
    </>
  );
};

import { useShapesStore } from "./suzstand/store";
import { Shape } from "./type";

const NUM_SHAPE = 10000;

export const HelloZustand = () => {
  const addShapes = useShapesStore((state) => state.addShapes);
  const deleteAllShapes = useShapesStore((state) => state.deleteAllShapes);

  const createManyShapes = async () => {
    const temp: Shape[] = [];
    for (let i = 0; i < NUM_SHAPE; ++i) {
      temp.push({
        id: i.toString(),
        value: (Math.random() * 100000).toFixed(0),
      });
    }
    addShapes(temp);
  };

  const deleteAll = async () => {
    deleteAllShapes();
  };

  const getShape = async (id: number) => {
    const shapes = useShapesStore.getState().shapes;
    console.log(shapes[id]);
  };

  const xCreateManyShapes = async () => {
    for (let i = 0; i < 100; ++i) {
      console.log("round " + i);
      await createManyShapes();
    }
  };

  return (
    <>
      Zustand <br />
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

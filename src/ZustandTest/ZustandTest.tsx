import { Shape, ShapeType } from "../type";
import { useShapesStore } from "../zustand/useShapesStore";
import { SetShapeValue } from "./SetShapeValue";
import { ShapeDetail } from "./ShapeDetail";
import { ShapeTypeSelect } from "./ShapeTypeSelect";

const NUM_SHAPE = 10;

export const ZustandTest = () => {
  const addShapes = useShapesStore((state) => state.addShapes);
  const deleteAllShapes = useShapesStore((state) => state.deleteAllShapes);

  console.log("Render Zustand");

  const createManyShapes = async () => {
    const temp: Shape[] = [];
    for (let i = 0; i < NUM_SHAPE; ++i) {
      temp.push({
        id: i.toString(),
        value: (Math.random() * 100000).toFixed(0),
        type: ShapeType.A,
      });
    }
    addShapes(temp);
  };

  const deleteAll = async () => {
    deleteAllShapes();
  };

  const getShape = async (id: number) => {
    console.log(useShapesStore.getState().shapes[id.toString()]);
  };

  return (
    <div className="Panel">
      <h3>Zustand Test</h3>
      <div className="Border">
        <button onClick={createManyShapes}>Create {NUM_SHAPE} shapes</button>
        <br />
        <button onClick={deleteAll}>Delete All</button>
        <br />
        <button onClick={() => getShape(4)}>Get Shape 4</button>
      </div>
      <SetShapeValue id={"1"} />
      <ShapeDetail id={"1"} />
      <ShapeDetail id={"2"} />
      <ShapeTypeSelect />
    </div>
  );
};

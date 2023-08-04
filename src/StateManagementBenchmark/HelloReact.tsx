import { useState } from "react";
import { Shape, ShapeType } from "../type";

const NUM_SHAPE = 10000;

export const HelloReact = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  const createManyShapes = async () => {
    const temp: Shape[] = [];
    for (let i = 0; i < NUM_SHAPE; ++i) {
      temp.push({
        id: i.toString(),
        value: (Math.random() * 100000).toFixed(0),
        type: ShapeType.A,
      });
    }
    setShapes(temp);
  };

  const deleteAll = async () => {
    setShapes([]);
  };

  const getShape = async (id: number) => {
    console.log(shapes[id]);
  };

  const xCreateManyShapes = async () => {
    for (let i = 0; i < 100; ++i) {
      console.log("round " + i);
      await createManyShapes();
    }
  };

  return (
    <div className="Border">
      REACT STATE <br />
      <button onClick={createManyShapes}>Create {NUM_SHAPE} shapes</button>
      <br />
      <button onClick={deleteAll}>Delete All</button>
      <br />
      <button onClick={() => getShape(400)}>Get Shape 400</button>
      <br />
      <button onClick={xCreateManyShapes}>Many creates</button>
      <br />
    </div>
  );
};

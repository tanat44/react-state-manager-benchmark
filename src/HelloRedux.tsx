import { useDispatch, useStore } from "react-redux";
import {
  addShapes,
  deleteAllShapes,
  selectShapeById,
} from "./redux/shapesSlice";
import { Shape } from "./type";

const NUM_SHAPE = 10000;

export const HelloRedux = () => {
  const dispatch = useDispatch();
  const store = useStore();

  const createManyShapes = async () => {
    const temp: Shape[] = [];
    for (let i = 0; i < NUM_SHAPE; ++i) {
      temp.push({
        id: i.toString(),
        value: (Math.random() * 100000).toFixed(0),
      });
    }
    dispatch(addShapes(temp));
  };

  const deleteAll = async () => {
    dispatch(deleteAllShapes());
  };

  const getShape = async (id: number) => {
    console.log(selectShapeById(store.getState(), id.toString()));
  };

  const xCreateManyShapes = async () => {
    for (let i = 0; i < 100; ++i) {
      console.log("round " + i);
      await createManyShapes();
    }
  };

  return (
    <>
      {/* <Counter /> */}
      Redux <br />
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

import { useState } from "react";
import { useShape } from "../zustand/hook/useShape";

type Props = {
  id: string;
};

export const SetShapeValue = ({ id }: Props) => {
  const [value, setValue] = useState<string>("");
  const { updateShapeValue } = useShape();

  const commit = () => {
    updateShapeValue(id, value);
  };

  return (
    <div className="Border">
      SetValue ShapeId = {id} <br />
      Value <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={commit}>Save</button>
    </div>
  );
};

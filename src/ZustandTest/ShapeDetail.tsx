import { useShapesStore } from "../zustand/useShapesStore";
type Props = {
  id: string;
};

export const ShapeDetail = ({ id }: Props) => {
  const thisShape = useShapesStore((state) => state.shapes[id]);

  console.log(`Render ShapeDetail id=${id}`);
  return (
    <div className="Border">
      <b>Shape {id}</b>
      <br />
      Value {thisShape ? thisShape.value : "-"}
      {"  "}
      Type {thisShape ? thisShape.type : "-"}
    </div>
  );
};

import { ShapeType } from "../type";
import { useToolStore } from "../zustand/useToolStore";

export const ShapeTypeSelect = () => {
  const changeTool = useToolStore((state) => state.changeTool);
  const onChange = (tool: string) => {
    changeTool(ShapeType[tool as keyof typeof ShapeType]);
  };
  const currentTool = useToolStore((state) => state.currentTool);

  console.log("Render ShapeTypeSelect");

  return (
    <div className="Border">
      Current Tool = {currentTool}
      <br />
      Change Tool
      <select onChange={(e) => onChange(e.target.value)}>
        {Object.keys(ShapeType).map((tool) => (
          <option key={tool} value={tool}>
            {tool}
          </option>
        ))}
      </select>
    </div>
  );
};

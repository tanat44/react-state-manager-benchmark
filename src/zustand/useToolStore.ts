import { create } from "zustand";
import { ShapeType } from "../type";
import { produce } from "immer";

interface ToolState {
  currentTool: ShapeType;
  changeTool: (newTool: ShapeType) => void;
}

export const useToolStore = create<ToolState>((set) => ({
  currentTool: ShapeType.A,
  changeTool: (newTool: ShapeType) =>
    set(
      produce((state) => {
        state.currentTool = newTool;
      })
    ),
}));

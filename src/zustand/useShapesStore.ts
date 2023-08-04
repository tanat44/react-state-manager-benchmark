import { create } from "zustand";
import { Shape, ShapesDict } from "../type";
import { produce } from "immer";
import { useToolStore } from "./useToolStore";

interface ShapesState {
  shapes: ShapesDict;
  addShapes: (shapes: Shape[]) => void;
  deleteAllShapes: () => void;
  setShapeValue: (id: string, value: string) => void;
  setShapeId: (id: string, newShape: Shape) => void;
}

export const useShapesStore = create<ShapesState>((set) => ({
  shapes: {},
  addShapes: (shapes: Shape[]) =>
    set((state) => {
      const newShapes = { ...state.shapes };
      shapes.forEach((s) => (newShapes[s.id] = s));
      return { shapes: newShapes };
    }),
  deleteAllShapes: () =>
    set(
      produce((state) => {
        state.shapes = {};
      })
    ),
  setShapeValue: (id: string, value: string) =>
    set(
      produce((state) => {
        const currentType = useToolStore.getState().currentTool;
        state.shapes[id].value = value;
        state.shapes[id].type = currentType;
      })
    ),
  setShapeId: (id: string, newShape: Shape) =>
    set(
      produce((state) => {
        state.shapes[id] = newShape;
      })
    ),
}));

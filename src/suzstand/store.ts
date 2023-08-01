import { create } from "zustand";
import { Shape, ShapesDict } from "../type";

interface ShapesState {
  shapes: ShapesDict;
  addShapes: (shapes: Shape[]) => void;
  deleteAllShapes: () => void;
}

export const useShapesStore = create<ShapesState>()((set) => ({
  shapes: {},
  addShapes: (shapes: Shape[]) =>
    set((state) => {
      const newShapes = { ...state.shapes };
      shapes.forEach((s) => (newShapes[s.id] = s));
      return { shapes: newShapes };
    }),
  deleteAllShapes: () =>
    set((state) => {
      const shapes = state.shapes;
      Object.keys(shapes).forEach((key) => {
        delete shapes[key];
      });
      return {};
    }),
}));

import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Shape, ShapesDict } from "../type";

export const shapesSlice = createSlice({
  name: "shapes",
  initialState: {
    value: {} as ShapesDict,
  },
  reducers: {
    addShapes: (state, action: PayloadAction<Shape[]>) => {
      action.payload.forEach((s) => {
        state.value[s.id] = s;
      });
    },
    deleteAllShapes: (state) => {
      Object.keys(state.value).forEach((key) => {
        delete state.value[key];
      });
      state.value = {};
    },
  },
});

const selectShapes = (state: any) => state.shapes.value;
const selectShapesId = (state: any, id: string) => id;
export const selectShapeById = createSelector(
  [selectShapes, selectShapesId],
  (shapes, id) => shapes[id]
);

// Action creators are generated for each case reducer function
export const { addShapes, deleteAllShapes } = shapesSlice.actions;

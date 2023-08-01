import { configureStore } from "@reduxjs/toolkit";
import { shapesSlice } from "./shapesSlice";

export default configureStore({
  reducer: {
    shapes: shapesSlice.reducer,
  },
});

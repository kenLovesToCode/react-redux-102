import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "../features/modelSlice";
import stateReducer from "../features/stateSlice";

export default configureStore({
  reducer: {
    modelReducer,
    stateReducer,
  },
});

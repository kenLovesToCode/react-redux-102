import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { initialData } from "./initialData";

export const modelSlice = createSlice({
  name: "users",
  initialState: initialData.modelData,
  reducers: {
    // createUser: (state, action) => {
    //   action.payload.id = nanoid();
    //   state.users = state.users.concat([action.payload]);
    // },
    saveCallback: (state, action) => {
      if (!action.payload.data.id) {
        action.payload.data.id = nanoid();
        state[action.payload.dataType] = state[action.payload.dataType].concat([
          action.payload.data,
        ]);
      } else {
        state[action.payload.dataType] = state[action.payload.dataType].map(
          (d) => (d.id === action.payload.data.id ? action.payload.data : d)
        );
      }
    },
    // deleteUser: (state, action) => {
    //   state.users = state.users.filter((user) => user.id !== action.payload);
    // },
    deleteCallback: (state, action) => {
      state[action.payload.dataType] = state[action.payload.dataType].filter(
        (d) => d.id !== action.payload.id
      );
    },
  },
});

export const { deleteCallback, saveCallback } = modelSlice.actions;
export default modelSlice.reducer;

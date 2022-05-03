import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editing: false,
  selectedId: -1,
  selectedType: "users",
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    startEditing: (state, action) => {
      state.editing = true;
      state.selectedId = action.payload;
    },
    endEditing: (state) => {
      state.editing = false;
    },

    startCreating: (state) => {
      state.editing = true;
      state.selectedId = -1;
    },
  },
});

export const { startEditing, endEditing, startCreating } = stateSlice.actions;
export default stateSlice.reducer;

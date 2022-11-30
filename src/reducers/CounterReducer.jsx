import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne: (state, action) => {
      state.value++;
    },
    minesOne: (state, action) => {
      state.value--;
    },
  },
});
export const counterState = (state) => state.counter.value;
export const { minesOne, addOne } = counterSlice.actions;
export default counterSlice.reducer;

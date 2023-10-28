import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItems(state, action) {
      state.items.pop();
    },
    clearCart(state) {
      //state.items.length = 0;
      state.items = [];
    },
  },
});

export const { addItems, deleteItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

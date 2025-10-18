import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../../pages/Perfil";

type cartState = {
  items: Dish[];
  isOpen: boolean;
};

const initialState: cartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      const dish = state.items.find((item) => item.id === action.payload.id);
      if (!dish) {
        state.items.push(action.payload);
      } else {
        alert("O prato já está no carrinho");
      }
    },
    remove: (state, action: PayloadAction<Dish>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, open, close, clear } = cartSlice.actions;
export default cartSlice.reducer;

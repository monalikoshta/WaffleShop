import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  link: string;
}

export interface CartState {
  value: Array<Product>;
  total: number;
}

const initialState: CartState = {
  value: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      // console.log(action.payload);
      let item = state.value.find((x: Product) => x.id == action.payload.id);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
      }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      else {
        state.value = [...state.value, action.payload];
        state.total += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      //   state.value = 0;
      let item = state.value.find((x: Product) => x.id == action.payload);
      if (item) {
        state.total -= item.price;
      }
      state.value = state.value.filter((x) => x.id != action.payload);
    },
    incrementCount: (state, action: PayloadAction<number>) => {
      // console.log(action.payload);
      //   state.value += action.payload;
      let item = state.value.find((x: Product) => x.id == action.payload);
      if (item) {
        item.quantity = item.quantity + 1;
        state.total += item.price;
      }
    },
    decrementCount: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload;
      let item = state.value.find((x: Product) => x.id == action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
        } else {
          state.value = state.value.filter((x) => x.id != action.payload);
        }
        state.total -= item.price;
      }
    },
    emptyCart: () => {
      //   state.value += action.payload;
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  incrementCount,
  decrementCount,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;

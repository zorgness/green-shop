import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { Product } from "./entities/Product";
import { retriveProductList } from "./use-cases";

export const productsAdapter = createEntityAdapter<Product>();

productsAdapter.getInitialState(); //?

export const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retriveProductList.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload.products);
    });
  },
});

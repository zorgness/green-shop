import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../entities/Product";

// export const retriveProductList = createAction<{
//   products: Array<{ id: number; title: string; price: number }>;
// }>("products/retriveProductList");

export const retriveProductList = createAsyncThunk<
  {
    products: Array<Product>;
  },
  void,
  {
    extra: {
      existingProducts: Array<{ id: number; title: string; price: number }>;
    };
  }
>("products/retriveProductList", async (_, { extra: { existingProducts } }) => {
  return {
    products: existingProducts,
  };
});

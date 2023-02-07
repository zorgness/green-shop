import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../entities/Product";
import { ProductListQuery } from "./queries";

// export const retriveProductList = createAction<{
//   products: Array<{ id: number; title: string; price: number }>;
// }>("products/retriveProductList");

export const retriveProductList = createAsyncThunk<
  Readonly<{ products: Readonly<Array<Product>> }>,
  void,
  { extra: { productListQuery: ProductListQuery } }
>("products/retriveProductList", async (_, { extra: { productListQuery } }) => {
  return productListQuery();
});

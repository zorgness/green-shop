import { RootState } from "../../store";
import { productsAdapter } from "./productsSlice";

const productsSelector = productsAdapter.getSelectors<RootState>(
  (state) => state.products
);

export const selectAllProducts = (state: RootState) => {
  const products = productsSelector.selectAll(state);
  return {
    products,
  };
};

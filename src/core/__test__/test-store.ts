import { createStore, RootState, StoreProps } from "../store";
import { Product } from "../product/entities/Product";
import {
  productsAdapter,
  productsSlice,
  initialState as productInitialState,
} from "../product/productsSlice";
import { createInMemoryProductListQuery } from "../product/adaptaters/product-list/in-memory";

type TestStoreProps = Partial<StoreProps> & {
  existingProducts?: Array<Product>;
};

export const createTestStore = ({
  existingProducts = [],
  ...storeProps
}: TestStoreProps) => {
  const products = productsAdapter.upsertMany(
    productInitialState,
    existingProducts
  );
  const preloadedState: RootState = {
    [productsSlice.name]: products,
  };
  return createStore({
    preloadedState,
    productListQuery: createInMemoryProductListQuery(),
    ...storeProps,
  });
};

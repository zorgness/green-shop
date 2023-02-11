import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { productsSlice } from "./product/productsSlice";
import { ProductListQuery } from "./product/use-cases/queries";

const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type StoreProps = {
  productListQuery: ProductListQuery;

  preloadedState?: RootState;
};

export const createStore = ({
  productListQuery,
  preloadedState,
}: StoreProps) => {
  const store = configureStore({
    reducer: combineReducers({
      [productsSlice.name]: productsSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            productListQuery,
          },
        },
      }),
    preloadedState,
  });
  return store;
};

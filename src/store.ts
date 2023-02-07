import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { productsSlice } from "./core/product/productsSlice";
import { ProductListQuery } from "./core/product/use-cases/queries";

const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = ({
  productListQuery,
}: {
  productListQuery?: ProductListQuery;
}) => {
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
  });
  return store;
};

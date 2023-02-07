import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { productsSlice } from "./core/product/productsSlice";

const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = ({
  existingProducts = [],
}: {
  existingProducts?: Array<{ id: number; title: string; price: number }>;
}) => {
  const store = configureStore({
    reducer: combineReducers({
      [productsSlice.name]: productsSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            existingProducts,
          },
        },
      }),
  });
  return store;
};

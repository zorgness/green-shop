import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore, StoreProps } from "./core/store";
import { Provider } from "react-redux";
import { data as products } from "./data/dataProduct";
import { createInMemoryProductListQuery } from "./core/product/adaptaters/product-list";

const store = createStore({
  productListQuery: createInMemoryProductListQuery({
    existingProducts: products,
  }),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

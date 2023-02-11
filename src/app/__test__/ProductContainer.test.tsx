import { screen, render } from "@testing-library/react";
import { ProductContainer } from "../components/ProductContainer";
import { data } from "../../data/dataProduct";
import { createTestStore } from "../../core/__test__/test-store";
import { Provider } from "react-redux";

describe("Product List Unit Test Suite", () => {
  test("should show an empty state", () => {
    const store = createTestStore({ existingProducts: [] });
    render(
      <Provider store={store}>
        <ProductContainer />
      </Provider>
    );
    expect(screen.queryByText(/no product yet/)).toBeInTheDocument();
  });

  test("should load availables products", () => {
    //arrange
    const store = createTestStore({ existingProducts: data });

    render(
      <Provider store={store}>
        <ProductContainer />
      </Provider>
    );

    //assert
    const products: HTMLElement[] = screen.getAllByRole("product-item");

    expect(products[0]).toHaveTextContent("Terrarium Siam #1");
    expect(products[1]).toHaveTextContent("Terrarium Japan #1");
  });
});
export {};

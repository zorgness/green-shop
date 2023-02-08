import { screen, render } from "@testing-library/react";
import { ProductContainer } from "../components/ProductContainer";

describe("Product List Unit Test Suite", () => {
  test("should show an empty state", () => {
    render(<ProductContainer />);
    expect(screen.queryByText(/no product yet/)).toBeInTheDocument();
  });

  test("should load available products", () => {
    //arrange
    render(<ProductContainer />);

    //assert
    const products = screen.getAllByTestId("product-item");
    expect(products[0]).toHaveTextContent("Terrarium Siam #1");
    //expect(products[1]).toHaveTextContent("Terrarium Japan #1");
  });
});
export {};

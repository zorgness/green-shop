import { screen, render } from "@testing-library/react";
import { ProductContainer } from "../components/ProductContainer";

describe("Product List Unit Test Suite", () => {
  test("Product List is empty", () => {
    render(<ProductContainer />);
    expect(screen.queryByText(/no product/)).toBeInTheDocument();
  });
});
export {};

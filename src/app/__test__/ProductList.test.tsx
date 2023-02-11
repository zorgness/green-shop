import { screen, render } from "@testing-library/react";
import { ProductContainer } from "../components/ProductContainer";

describe("Product List Unit Test Suite", () => {
  test("should show an empty state", () => {
    render(<ProductContainer products={[]} />);
    expect(screen.queryByText(/no product yet/)).toBeInTheDocument();
  });

  test("should load available products", () => {
    //arrange
    render(
      <ProductContainer
        products={[
          { id: 1, title: "Terrarium Siam #1", price: 55 },
          { id: 2, title: "Terrarium Japan #1", price: 75 },
        ]}
      />
    );

    //assert
    const products: HTMLElement[] = screen.getAllByRole("product-item");

    expect(products[0]).toHaveTextContent("Terrarium Siam #1");
    expect(products[1]).toHaveTextContent("Terrarium Japan #1");
  });
});
export {};

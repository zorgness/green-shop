import { selectors, useCases } from "../..";
import { createStore } from "../../../store";
import { retriveProductList } from "../use-cases";
import { retriveProductListSUT } from "./retrive-product-list/sut-builder";

describe("retrive product list", () => {
  test("retrive product list empty", () => {
    //arrange
    const { selectAllProducts } = retriveProductListSUT()
      .withoutProducts()
      .build();

    //assert
    expect(selectAllProducts()).toEqual({
      products: [],
    });
  });

  test("can retrieve product list with multiple produts", async () => {
    //arrange
    const { selectAllProducts, retriveProductList } = retriveProductListSUT()
      .withoutExistingProducts([
        {
          id: 1,
          title: "terrarium siam",
          price: 76,
        },
        {
          id: 2,
          title: "terrarium japan",
          price: 90,
        },
      ])
      .build();

    //act

    await retriveProductList();

    //assert
    expect(selectAllProducts()).toEqual({
      products: [
        {
          id: 1,
          title: "terrarium siam",
          price: 76,
        },
        {
          id: 2,
          title: "terrarium japan",
          price: 90,
        },
      ],
    });
  });
});

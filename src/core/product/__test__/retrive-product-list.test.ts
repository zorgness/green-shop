import { selectors } from "../..";
import { createStore } from "../../../store";
describe("retrive product list", () => {
  test("retrive product list empty", () => {
    //arrange
    const store = createStore();
    //assert
    expect(selectors.selectAllProducts(store.getState())).toEqual({
      products: [],
    });
  });
});

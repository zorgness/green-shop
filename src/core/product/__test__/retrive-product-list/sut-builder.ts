import { selectors, useCases } from "../../..";
import { createStore } from "../../../../store";
import { createInMemoryProductListQuery } from "../../adaptaters/product-list";

// SUT: system under test
interface SUTProps {
  products?: Array<{
    id: number;
    title: string;
    price: number;
  }>;
}
export const retriveProductListSUT = (props: SUTProps = {}) => {
  return {
    withoutProducts() {
      return retriveProductListSUT({
        ...props,
        products: [],
      });
    },
    withoutExistingProducts(products: SUTProps["products"]) {
      return retriveProductListSUT({
        ...props,
        products,
      });
    },
    build() {
      const productListQuery = createInMemoryProductListQuery({
        existingProducts: props.products,
      });
      const store = createStore({ productListQuery });
      const selectAllProducts = () =>
        selectors.selectAllProducts(store.getState());
      const retriveProductList = async () =>
        store.dispatch(useCases.retriveProductList());

      return {
        selectAllProducts,
        retriveProductList,
      };
    },
  };
};

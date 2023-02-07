import { selectors, useCases } from "../../..";
import { createStore } from "../../../../store";

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
      const store = createStore({
        existingProducts: props.products,
      });
      const selectAllProducts = () =>
        selectors.selectAllProducts(store.getState());
      const retriveProductList = async () => {
        await store.dispatch(useCases.retriveProductList());
      };

      return {
        selectAllProducts,
        retriveProductList,
      };
    },
  };
};

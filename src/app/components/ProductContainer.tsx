import React from "react";
import { CardProduct } from "./cards/CardProduct";
import { ProductHeaderContainer } from "./ProductHeaderContainer";

interface ProductContainerProps {}

export const ProductContainer: React.FC<ProductContainerProps> = ({}) => {
  return (
    <div className="" data-testid="product-item">
      <p>no product yet</p>
      <ProductHeaderContainer />

      <div className="flex items-center justify-between flex-wrap gap-10 p-5">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

import React from "react";
import { CardProduct } from "./cards/CardProduct";
import { ProductHeaderContainer } from "./ProductHeaderContainer";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../core/product/selectors";

export const ProductContainer: React.FC = () => {
  const products = useSelector(selectAllProducts).products;

  if (products.length > 0) {
    return (
      <div className="">
        <ProductHeaderContainer />

        <div className="flex items-center justify-between flex-wrap gap-10 p-5">
          {products.map((item) => {
            return <CardProduct key={item.id} product={item} />;
          })}
        </div>
      </div>
    );
  }

  return <p>no product yet</p>;
};

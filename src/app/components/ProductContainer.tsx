import React from "react";
import { CardProduct } from "./cards/CardProduct";
import { ProductHeaderContainer } from "./ProductHeaderContainer";

interface ProductContainerProps {
  products?: Array<{
    id: number;
    title: string;
    price: number;
  }>;
}

export const ProductContainer: React.FC<ProductContainerProps> = ({
  products = [],
}) => {
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

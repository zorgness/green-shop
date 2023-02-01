import React from "react";

interface ProductHeaderContainerProps {}

export const ProductHeaderContainer: React.FC<
  ProductHeaderContainerProps
> = ({}) => {
  return (
    <div className="m-5">
      <button className="btn-flat">Filtrer</button>
    </div>
  );
};

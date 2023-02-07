export const createProductListResult = ({
  products,
}: {
  products: Array<{ id: number; title: string; price: number }>;
}) =>
  Object.freeze({
    products: Object.freeze({ products }),
  });

export type ProductListResult = ReturnType<typeof createProductListResult>;

export interface ProductListQuery {
  (): Promise<ProductListResult>;
}

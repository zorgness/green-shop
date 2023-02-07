import { ProductListQuery, ProductListResult } from "../../use-cases/queries";

export const createInMemoryProductListQuery =
  ({
    existingProducts = [],
  }: {
    existingProducts?: ProductListResult["products"];
  }): ProductListQuery =>
  async () => ({
    products: existingProducts,
  });

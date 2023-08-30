import { IProductRepository } from "../core/ports/product-repository";
import { IProduct } from "../core/models/Product";

export class ProductRepositoryImpl implements IProductRepository {
  findAll(): Promise<IProduct[]> {
    return Promise.resolve([]);
  }

  save(product: IProduct): Promise<IProduct> {
    return Promise.resolve(undefined);
  }

}
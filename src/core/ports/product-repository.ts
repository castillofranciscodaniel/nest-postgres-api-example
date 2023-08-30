import { IProduct } from '../models/Product';

export interface IProductRepository {
  findAll(): Promise<IProduct[]>;

  save(product: IProduct): Promise<IProduct>;
}

export const IProductRepository = Symbol("IProductRepository");

import { Inject, Injectable } from "@nestjs/common";
import { IProductRepository } from "../ports/product-repository";
import { IProduct } from "../models/Product";

@Injectable()
export class SaveProduct {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository
  ) {
  }

  execute(product: IProduct): Promise<IProduct> {
    return this.productRepository.save(product);
  }
}
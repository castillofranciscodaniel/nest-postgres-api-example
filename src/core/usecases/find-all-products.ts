import { Inject, Injectable } from "@nestjs/common";
import { IProductRepository } from "../ports/product-repository";
import { IProduct } from "../models/Product";

@Injectable()
export class FindAllProducts {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository
  ) {
  }

  execute(): Promise<IProduct[]> {
    return this.productRepository.findAll();
  }

}
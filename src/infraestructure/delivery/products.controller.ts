import { Body, Controller, Get, Post, Scope } from "@nestjs/common";
import { SaveProduct } from "../../core/usecases/save-product";
import { FindAllProducts } from "../../core/usecases/find-all-products";
import { IProduct } from "../../core/models/Product";

@Controller({
    path: "/products",
    scope: Scope.REQUEST
  }
)
export class AppController {
  constructor(private readonly saveProduct: SaveProduct,
              private readonly findAllProducts: FindAllProducts) {
  }

  @Get()
  findAll(): Promise<IProduct[]> {
    return this.findAllProducts.execute();
  }

  @Post()
  save(@Body() product: IProduct): Promise<IProduct> {
    return this.saveProduct.execute(product);
  }

}

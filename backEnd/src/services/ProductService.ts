import IService from '../interfaces/IService';
import { IProduct  } from '../interfaces/IProduct';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class ProductService implements IService<IProduct> {
  private _product:IModel<IProduct>;

  constructor(model:IModel<IProduct>) {
    this._product = model;
  }

  public async read():Promise<IProduct[]> {
    const allProducts = await this._product.read();
    if (!allProducts) throw new Error(ErrorTypes.EntityNotFound);
    return allProducts;
  }
}

export default ProductService;

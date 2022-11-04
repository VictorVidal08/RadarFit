import IService from '../interfaces/IService';
import { IProduct} from '../interfaces/IProduct';
import ProductZodSchema from '../interfaces/IProduct';
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

  public async create(obj:unknown):Promise<IProduct> {
    const parsed = ProductZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return this._product.create(parsed.data);
  }

  public async readOne(_id:string):Promise<IProduct> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    const product = await this._product.readOne(_id);
    if (!product) throw new Error(ErrorTypes.ObjectNotFound);
    return product;
  }

  public async update(_id: string, obj: object): Promise<IProduct> {
    let now = new Date().toISOString();
    const newObj = { ...obj, updated: new Date(now) }
    const parsed = ProductZodSchema.safeParse(newObj);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._product.update(_id, parsed.data);

    if (!updated) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }

    return updated;
  }

  public async delete(_id:string):Promise<IProduct> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);
    const product = await this._product.delete(_id);
    if (!product) throw new Error(ErrorTypes.ObjectNotFound);
    return product;
  }
}

export default ProductService;

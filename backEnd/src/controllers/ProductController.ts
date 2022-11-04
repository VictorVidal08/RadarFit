import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IProduct } from '../interfaces/IProduct';

export default class ProductController {
  constructor(private _service: IService<IProduct>) { }

  public async read(
    _req: Request,
    res: Response<IProduct[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }
}

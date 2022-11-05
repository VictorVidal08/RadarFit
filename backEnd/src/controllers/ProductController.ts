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

  public async create(
    req: Request, 
    res: Response<IProduct>,
  ) {
    const created = await this._service.create(req.body);
    return res.status(201).json(created);
  }

  public async readOne(
    req: Request,
    res: Response<IProduct>,
  ) {
    const { id } = req.params;
    // console.log(id.length);
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<IProduct>,
  ) {
    const { id } = req.params;
    const { body } = req;
    const updated = await this._service.update(id, body);
    return res.status(200).json(updated);
  }

  public async delete(
    req: Request,
    res: Response<IProduct>,
  ) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).end();
  }

  public async updateOne(
    req: Request,
    res: Response<IProduct>,
  ) {
    const { id } = req.params;
    const user = req.body;
    const actualData = await this._service.readOne(id);
    if(!user.produto) {
      user.produto = actualData.produto;
    } else if (!user.valor) {
      user.valor = actualData.valor;
    } else if (!user.descricao) {
      user.descricao = actualData.descricao;
    }
    const updated = await this._service.update(id, user);
    return res.status(200).json(updated);
  }

  public async readByQuery(
    req: Request,
    res: Response<IProduct[] | null>,
  ) {
    const search = req.query;
    const { q } = search;
    if (!q) return res.status(500).end();
    const result = await this._service.readByQuery(q as string);
    return res.status(200).json(result);
  }
}

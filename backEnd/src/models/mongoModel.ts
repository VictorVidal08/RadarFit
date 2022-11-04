import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  private _model: Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async read():Promise<T[]> {
    return this._model.find();
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }
}

export default MongoModel;

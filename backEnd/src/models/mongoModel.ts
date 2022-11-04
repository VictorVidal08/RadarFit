import { Model, isValidObjectId, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

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

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);

    return this._model.findOne({ _id });
  }

  public async update(_id:string, obj:Partial<T>):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    
    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);

    return this._model.findOneAndDelete({ _id });
  }
}

export default MongoModel;

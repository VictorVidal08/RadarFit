import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IProduct } from '../interfaces/IProduct';
import MongoModel from './mongoModel';

const productMongooseSchema = new Schema<IProduct>({
    produto: String,
    valor: Number,
    descricao: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
}, {
  versionKey: false,
});

class Products extends MongoModel<IProduct> {
  constructor(model = mongooseCreateModel('Products', productMongooseSchema)) {
    super(model);
  }
}

export default Products;
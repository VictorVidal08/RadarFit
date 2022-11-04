import { Router } from 'express';
import ProductsController from '../controllers/ProductController';
import ProductsModel from '../models/productModel';
import ProductService from '../services/ProductService';

const productRoute = Router();

const product = new ProductsModel();
const productService = new ProductService(product);
const productController = new ProductsController(productService);

productRoute.get('/produtos', (req, res) => productController.read(req, res));

export default productRoute;

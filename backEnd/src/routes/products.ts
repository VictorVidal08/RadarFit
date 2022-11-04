import { Router } from 'express';
import ProductsController from '../controllers/ProductController';
import ProductsModel from '../models/productModel';
import ProductService from '../services/ProductService';

const productRoute = Router();

const product = new ProductsModel();
const productService = new ProductService(product);
const productController = new ProductsController(productService);

productRoute.get('/produtos', (req, res) => productController.read(req, res));
productRoute.post('/produtos', (req, res) => productController.create(req, res));
productRoute.get('/produtos/:id', (req, res) => productController.readOne(req, res));
productRoute.put('/produtos/:id', (req, res) => productController.update(req, res));

export default productRoute;

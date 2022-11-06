"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
const productModel_1 = require("../models/productModel");
const ProductService_1 = require("../services/ProductService");
const productRoute = (0, express_1.Router)();
const product = new productModel_1.default();
const productService = new ProductService_1.default(product);
const productController = new ProductController_1.default(productService);
productRoute.get('/produtos/find', (req, res) => productController.readByQuery(req, res));
productRoute.get('/produtos', (req, res) => productController.read(req, res));
productRoute.post('/produtos', (req, res) => productController.create(req, res));
productRoute.get('/produtos/:id', (req, res) => productController.readOne(req, res));
productRoute.put('/produtos/:id', (req, res) => productController.update(req, res));
productRoute.delete('/produtos/:id', (req, res) => productController.delete(req, res));
productRoute.patch('/produtos/:id', (req, res) => productController.updateOne(req, res));
exports.default = productRoute;
//# sourceMappingURL=products.js.map
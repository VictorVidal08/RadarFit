"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IProduct_1 = require("../interfaces/IProduct");
const catalog_1 = require("../errors/catalog");
class ProductService {
    constructor(model) {
        this._product = model;
    }
    async read() {
        const allProducts = await this._product.read();
        if (!allProducts)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        return allProducts;
    }
    async create(obj) {
        const parsed = IProduct_1.default.safeParse(obj);
        if (!parsed.success) {
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        }
        return this._product.create(parsed.data);
    }
    async readOne(_id) {
        if (_id.length < 24)
            throw new Error(catalog_1.ErrorTypes.InvalidMongoId);
        const product = await this._product.readOne(_id);
        if (!product)
            throw new Error(catalog_1.ErrorTypes.ObjectNotFound);
        return product;
    }
    async update(_id, obj) {
        let now = new Date().toISOString();
        const newObj = { ...obj, updated: new Date(now) };
        const parsed = IProduct_1.default.safeParse(newObj);
        if (!parsed.success) {
            throw parsed.error;
        }
        const updated = await this._product.update(_id, parsed.data);
        if (!updated) {
            throw new Error(catalog_1.ErrorTypes.ObjectNotFound);
        }
        return updated;
    }
    async delete(_id) {
        if (_id.length < 24)
            throw new Error(catalog_1.ErrorTypes.InvalidMongoId);
        const product = await this._product.delete(_id);
        if (!product)
            throw new Error(catalog_1.ErrorTypes.ObjectNotFound);
        return product;
    }
    async readByQuery(search) {
        const matchProducts = await this._product.readByQuery(search);
        if (!matchProducts)
            throw new Error(catalog_1.ErrorTypes.EntityNotFound);
        console.log(matchProducts);
        return matchProducts;
    }
}
exports.default = ProductService;
//# sourceMappingURL=ProductService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoModel_1 = require("./mongoModel");
const productMongooseSchema = new mongoose_1.Schema({
    produto: String,
    valor: Number,
    descricao: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
}, {
    versionKey: false,
});
class Products extends mongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('Products', productMongooseSchema)) {
        super(model);
    }
}
exports.default = Products;
//# sourceMappingURL=productModel.js.map
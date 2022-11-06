"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ProductZodSchema = zod_1.z.object({
    produto: zod_1.z.string({
        required_error: 'Product is required',
        invalid_type_error: 'Product must be a string',
    }),
    valor: zod_1.z.number({
        required_error: 'Value is required',
        invalid_type_error: 'Value must be a number',
    }).gte(1).lte(100000),
    descricao: zod_1.z.string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
    }).min(3, { message: 'Description must be 3 or more characters long' }),
    created: zod_1.z.date({
        invalid_type_error: 'created must be a date',
    }).optional(),
    updated: zod_1.z.date({
        invalid_type_error: 'updated must be a date',
    }).optional(),
});
exports.default = ProductZodSchema;
//# sourceMappingURL=IProduct.js.map
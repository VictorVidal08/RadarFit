"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("express-async-errors");
const products_1 = require("./routes/products");
const app = express();
app.use(express.json());
app.use(products_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
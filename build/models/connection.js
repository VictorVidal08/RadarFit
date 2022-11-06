"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
require("dotenv/config");
const MONGO_DB_URL = 'mongodb+srv://victorvidal:agbdlcid08@radarfit.stw3ckx.mongodb.net/test';
const connectToDatabase = (mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL) => mongoose.connect(mongoDatabaseURI);
exports.default = connectToDatabase;
//# sourceMappingURL=connection.js.map
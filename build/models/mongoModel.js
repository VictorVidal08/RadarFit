"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const catalog_1 = require("../errors/catalog");
class MongoModel {
    constructor(model) {
        this._model = model;
    }
    async read() {
        return this._model.find();
    }
    async create(obj) {
        return this._model.create({ ...obj });
    }
    async readOne(_id) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw Error(catalog_1.ErrorTypes.InvalidMongoId);
        return this._model.findOne({ _id });
    }
    async update(_id, obj) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw Error(catalog_1.ErrorTypes.InvalidMongoId);
        return this._model.findByIdAndUpdate({ _id }, { ...obj }, { new: true });
    }
    async delete(_id) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw Error(catalog_1.ErrorTypes.InvalidMongoId);
        return this._model.findOneAndDelete({ _id });
    }
    async readByQuery(search) {
        return this._model.find({ "produto": { $regex: search } });
    }
}
exports.default = MongoModel;
//# sourceMappingURL=mongoModel.js.map
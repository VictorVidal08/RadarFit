"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCatalog = exports.ErrorTypes = void 0;
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["EntityNotFound"] = "EntityNotFound";
    ErrorTypes["InvalidMongoId"] = "InvalidMongoId";
    ErrorTypes["ObjectNotFound"] = "ObjectNotFound";
})(ErrorTypes = exports.ErrorTypes || (exports.ErrorTypes = {}));
exports.errorCatalog = {
    EntityNotFound: {
        message: 'Something went wrong',
        httpStatus: 400,
    },
    InvalidMongoId: {
        message: 'Id must have 24 hexadecimal characters',
        httpStatus: 400,
    },
    ObjectNotFound: {
        message: 'Object not found',
        httpStatus: 404,
    },
};
//# sourceMappingURL=catalog.js.map
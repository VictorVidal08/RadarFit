"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const connection_1 = require("./models/connection");
const port = process.env.PORT || 3001;
(0, connection_1.default)()
    .then(() => {
    app_1.default.listen(port, () => console.log(`Running server on port: ${port}`));
})
    .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
});
//# sourceMappingURL=index.js.map
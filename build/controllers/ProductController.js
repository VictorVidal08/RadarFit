"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    constructor(_service) {
        this._service = _service;
    }
    async read(_req, res) {
        const result = await this._service.read();
        return res.status(200).json(result);
    }
    async create(req, res) {
        const created = await this._service.create(req.body);
        return res.status(201).json(created);
    }
    async readOne(req, res) {
        const { id } = req.params;
        // console.log(id.length);
        const result = await this._service.readOne(id);
        return res.status(200).json(result);
    }
    async update(req, res) {
        const { id } = req.params;
        const { body } = req;
        const updated = await this._service.update(id, body);
        return res.status(200).json(updated);
    }
    async delete(req, res) {
        const { id } = req.params;
        await this._service.delete(id);
        return res.status(204).end();
    }
    async updateOne(req, res) {
        const { id } = req.params;
        const user = req.body;
        const actualData = await this._service.readOne(id);
        if (!user.produto) {
            user.produto = actualData.produto;
        }
        else if (!user.valor) {
            user.valor = actualData.valor;
        }
        else if (!user.descricao) {
            user.descricao = actualData.descricao;
        }
        const updated = await this._service.update(id, user);
        return res.status(200).json(updated);
    }
    async readByQuery(req, res) {
        const search = req.query;
        const { q } = search;
        if (!q)
            return res.status(500).end();
        const result = await this._service.readByQuery(q);
        return res.status(200).json(result);
    }
}
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map
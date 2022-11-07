# Ferramentas utilizadas:

- Banco de dados não relacional MongoDB;
- ODM (Object Document Mapping) Mongoose para trabalhar com o banco de dados MongoDB;
- Utilização de POO; 

A utilização de classe abstrata se deu afim de permitir a construção de um código de fácil expansão.

# Como rodar a aplicação

Após clonar o projeto em seu computador, entre no repositório do projeto.

Execute o comando:

```
npm install
```
depois inicie o projeto com o comando:

```
npm run dev
```

Execute os endpoints com o thunderclient, insomia, postman ou outra aplicação de sua preferência.

### API endpoints

`GET /produtos`

Retorna todos os produtos

Não é necessário nenhum body na requisição.

---

`GET /produtos/find`

Retorna os produtos de acordo com o termo passado parâmetro `q`

Exemplo de url GET: http://localhost:3001/produtos/find?q=alexa

---

`GET /produtos/{id}`

Retorna os detalhes do produto

Exemplo de url GET: http://localhost:3001/produtos/6365616eea721dd3d6c1659a

Não é necessário nenhum body na requisição.

---

`POST /produtos`

Adiciona um novo produto

Exemplo de url POST: http://localhost:3001/produtos

BODY da requisição deve seguir o modelo:
{
  "produto": "Teste create",
  "valor": 1233.21,
  "descricao": "produto create"
}

---

`PUT /produtos/{id}`

Atualiza os dados de um produto

Exemplo de url PUT: http://localhost:3001/produtos/6365616eea721dd3d6c1659a

BODY da requisição deve seguir o modelo:
{
  "produto": "Teste de update",
  "valor": 1233,
  "descricao": "produto update"
}

---

`PATCH /produtos/{id}`

Atualiza apenas alguns dados do produto

exemplo de url PATCH http://localhost:3001/produtos/6365616eea721dd3d6c1659a

BODY da requisição deve seguir o modelo (Ao menos um parâmetro(produto, valor ou descricao) deve ser informado):

{
  "produto": "Teste UPDATEoNE",
  "valor": 133.21
}

---

`DELETE /produtos/{id}`

não é necessário nenhum body na requisição.

exemplo de url DELETE http://localhost:3001/produtos/6365616eea721dd3d6c1659a

Apaga o produto

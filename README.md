# NODE + MONGODB + DOCKER + CRUD

CRUD basico usando Node, Mongoose, e Docker.

## Rotas no Postman
> [Download das Rotas](https://run.pstmn.io/button.js)
#### Recuperar todos os usu�rios
> GET http://{SEU_IP}:8000/api/pessoa

#### Cadastrar um usu�rio
> POST http://{SEU_IP}:8000/api/pessoa

* Dados passado pelo Body
```json
{ 
  "nome": "Fulano de Tal",
  "email": "fulanodetal@teste.com",
  "telefone": "(+55) 99 2131-1231"
}
```

#### Editar um usu�rio
> PUT http://{SEU_IP}:8000/api/pessoa{_id}

* Dados passado pelo Body
```json
{ 
  "nome": "Fulano de Tal",
  "email": "fulanodetal@teste.com",
  "telefone": "(+55) 99 2131-1231"
}
```
#### Excluir um usu�rio
> DELETE http://{SEU_IP}:8000/api/pessoa/{_id}

> ![Rotas](https://i.ibb.co/LrJtL6J/Capturar.png)


## Instalando e Executando
Para dar inicio ao projeto, é necessário ter o [Node](https://nodejs.org/en/download/) e o [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows) instalado

```git
git clone https://github.com/rafaeldias97/API-CRUD-BASICO-NODE.git
```
```bash
docker-compose up --build
```
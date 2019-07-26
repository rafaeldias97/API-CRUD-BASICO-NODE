const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
mongoose.Promise = global.Promise

const pessoa = require('./routes/pessoa');

app.use('/api/pessoa', pessoa);

mongoose.connect('mongodb://mongodb:27017/crud-node-mongo-docker', {
    useNewUrlParser: true
  }).then(result => {
    console.log('MongoDB Conectado');
  }).catch(error => {
    console.log(error);
  });

app.listen(8000, () => console.log('Server ativo na porta 8000'));
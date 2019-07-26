
const mongoose = require('mongoose');
const { Schema } = mongoose;

const pessoaSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  telefone: {
    type: String,
    require: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('pessoa', pessoaSchema);
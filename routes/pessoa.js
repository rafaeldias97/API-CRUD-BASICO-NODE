const express = require('express');
const router = express.Router();
const Pessoa = require('../models/Pessoa');

router.post('', (req, res) => {
  const cadastrarPessoa = new Pessoa({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone
  });

  cadastrarPessoa
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('', (req, res) => {
  Pessoa
    .find()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  const novosDados = { nome: req.body.nome, email: req.body.email, telefone: req.body.telefone };
  Pessoa.findOneAndUpdate({ _id: req.params.id }, novosDados, { new: true })
    .then(pessoa => {
      res.json(pessoa);
    })
    .catch(error => res.status(500).json(error));
});

router.delete('/:id', (req, res) => {
  Pessoa.findOneAndDelete({ _id: req.params.id })
    .then(pessoa => {
      res.json(pessoa);
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;
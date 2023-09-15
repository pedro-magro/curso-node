import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/:nome/:sobrenome/', function (req, res) {
  res.send({
    nome: req.params.nome,
    sobrenome: req.params.sobrenome,
  });
});

app.listen(8080, function () {
  console.log('Servidor no ar');
});

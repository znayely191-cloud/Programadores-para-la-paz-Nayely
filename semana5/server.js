const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor de la Semana 5 funcionando correctamente ✅');
});

app.listen(3001, () => {
  console.log('Servidor de la Semana 5 ejecutándose en el puerto 3001');
});

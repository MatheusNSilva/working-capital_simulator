const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Usa o $PORT fornecido pelo Heroku
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api', routes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

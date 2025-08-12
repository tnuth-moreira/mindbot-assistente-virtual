import express from 'express';
import apiRoutes from './api/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo à API MindBot!');
});

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}
);
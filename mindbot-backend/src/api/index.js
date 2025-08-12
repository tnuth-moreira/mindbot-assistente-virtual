import axios from 'axios';
import express from 'express';

const router = express.Router();

router.post('/analisar', async (req, res) => {
  console.log('Recebido POST /api/analisar com body:', req.body);
  try {
    const { mensagem } = req.body;
    const resposta = await axios.post('http://localhost:5001/analisar', 
      { mensagem },
      { headers: { 'Content-Type': 'application/json' } }
    );
    res.json(resposta.data);
  } catch (error) {
    console.error('Erro ao chamar API Flask:', error.response?.status, error.response?.data || error.message);

    res.status(500).json({ error: 'Erro ao analisar sentimento' });
  }
});


export default router;

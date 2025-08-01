const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/analisar', async (req, res) => {
try {
  const { mensagem } = req.body;
  const resposta = await axios.post('http://localhost:5000/sentimento')
  res.json(resposta.data);
  } catch (error) {
    console.error('Erro ao chamar API Flash:', error.message);
    res.status(500).json({ error: 'Erro ao analisar sentimmento'});
  }
});

module.exports= router;

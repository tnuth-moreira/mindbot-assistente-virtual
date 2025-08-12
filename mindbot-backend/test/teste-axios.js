import axios from 'axios';

async function testar() {
  try {
    const resposta = await axios.post('http://localhost:5000/analisar', 
      { mensagem: "Teste de mensagem" }, 
      { headers: { 'Content-Type': 'application/json' } }
    );
    console.log('Resposta:', resposta.data);
  } catch (error) {
    console.error('Erro:', error.response?.status, error.response?.data || error.message);
  }
}

testar();

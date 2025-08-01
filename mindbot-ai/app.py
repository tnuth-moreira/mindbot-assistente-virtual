from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

def analisar_sentimento(texto):
    blob = TextBlob(texto)
    if blob.sentiment.polarity > 0:
        return "Positivo"
    elif blob.sentiment.polarity < 0:
        return "Negativo"
    else:
        return "Neutro"
    
@app.route('/analisar', methods=['POST'])
def detectar_sentimento():
    data = request.json
    mensagem = data.get('mensagem', '')
    sentimento = analisar_sentimento(mensagem)
    return jsonify({'sentimento': sentimento})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

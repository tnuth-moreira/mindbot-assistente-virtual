from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


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
    data = request.get_json()
    mensagem = data.get('mensagem', '')
    if not mensagem:
        return jsonify({'erro': 'Mensagem vazia'}), 400

    sentimento = analisar_sentimento(mensagem)
    return jsonify({'sentimento': sentimento}), 200

if __name__ == '__main__':
    app.run(port=5001)

from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app) 

@app.route('/submit-url', methods=['POST'])
def submit_url():
    data = request.get_json()
    url = data.get('url')

    # Placeholder response - Later for scraping
    response = {
        "message": "URL received",
        "url": url
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.route('/submit-url', methods=['POST'])
def submit_url():
    data = request.get_json()
    url = data.get('url')

    # Fetch the page content
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if the request was successful
    except requests.exceptions.RequestException as e:
        return jsonify({"error": "Failed to fetch the URL"}), 400

    # Parse the page content with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract the title as an example (you can add more logic here)
    title = soup.title.string if soup.title else 'No title found'
    # Extract the first 300 characters of visible text
    body_text = soup.get_text()
    snippet = body_text[:300]

    # Return the extracted data as a response
    return jsonify({
        "message": "URL content scraped successfully",
        "title": title,
        "snippet": snippet
    }), 200

if __name__ == '__main__':
    app.run(debug=True)

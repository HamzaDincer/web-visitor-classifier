import nltk
from nltk.corpus import stopwords
from collections import Counter
import requests
from bs4 import BeautifulSoup
from flask import Flask, request, jsonify
from flask_cors import CORS

nltk.download('stopwords')
stop_words = set(stopwords.words('english'))

app = Flask(__name__)
CORS(app)

def extract_keywords(text):
    # Tokenize the text and remove stopwords
    words = [word for word in text.lower().split() if word.isalpha() and word not in stop_words]
    # Count word frequencies
    word_counts = Counter(words)
    # Extract top 5 most common words as keywords
    keywords = [word for word, count in word_counts.most_common(5)]
    return keywords

@app.route('/submit-url', methods=['POST'])
def submit_url():
    data = request.get_json()
    url = data.get('url')

    # Fetch the page content
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        return jsonify({"error": "Failed to fetch the URL"}), 400

    # Parse the page content
    soup = BeautifulSoup(response.text, 'html.parser')
    title = soup.title.string if soup.title else 'No title found'
    body_text = soup.get_text()
    snippet = body_text[:300]

    # Extract keywords from snippet
    keywords = extract_keywords(snippet)

    # Generate a simple question using keywords
    questions = [f"What interests you most about {keyword}?" for keyword in keywords]

    return jsonify({
        "message": "URL content scraped and questions generated",
        "title": title,
        "snippet": snippet,
        "questions": questions
    }), 200

if __name__ == '__main__':
    app.run(debug=True)

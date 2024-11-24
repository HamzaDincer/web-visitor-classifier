import os
import json
import requests
from urllib.parse import urlparse
from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

app = Flask(__name__)
CORS(app)



def generate_questions_and_choices(content):

    prompt = f"""
    You are an assistant tasked with creating visitor classification questions. The goal is to generate questions that help identify the user preferences, user interests, or needs of website visitors based on the following website content:

    Website Content:
    {content}

    Generate 5 visitor-oriented questions with 4 multiple-choice answers each. Each question should be designed to classify the visitor's intent, preferences, or demographics.

    Format the response as JSON:
    [
      {{
        "question": "Question 1 text",
        "choices": ["Option 1", "Option 2", "Option 3", "Option 4"]
      }},
      {{
        "question": "Question 2 text",
        "choices": ["Option 1", "Option 2", "Option 3", "Option 4"]
      }},
      {{
        "question": "Question 3 text",
        "choices": ["Option 1", "Option 2", "Option 3", "Option 4"]
      }}
    ]
    """
    try:

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
        )

        content = response.choices[0].message.content
        return json.loads(content) 
    except Exception as e:
        return str(e)


@app.route('/submit-url', methods=['POST'])

def submit_url():
    data = request.get_json()
    url = data.get('url')

    parsed_url = urlparse(url)
    if not parsed_url.scheme:
        url = f"http://{url}"  

    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Failed to fetch the URL: {e}"}), 400

    soup = BeautifulSoup(response.text, 'html.parser')
    title = soup.title.string if soup.title else 'No title found'
    body_text = soup.get_text()

    questions_and_choices = generate_questions_and_choices(body_text)

    return jsonify({
        "message": "Questions and choices generated successfully",
        "title": title,
        "questions_and_choices": questions_and_choices
    }), 200

@app.route('/profile-visitor', methods=['POST'])

def profile_visitor():
    data = request.get_json()
    responses = data.get('responses')

    if not responses:
        return jsonify({"error": "No responses provided"}), 400
    

    formatted_responses = "\n".join(
    [f"Q{i + 1}: {responses[str(i)]}" for i in sorted(map(int, responses.keys()))]
    )


    prompt = f"""
    Based on the following answers to classification questions, determine the visitor's profile. Provide a concise result.

    Answers:
    {formatted_responses}

    Respond with just the profile name.
    """

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
        )

        profile = response.choices[0].message.content.strip()
        return jsonify({"profile": profile}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

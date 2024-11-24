# 🌐 Web Visitor Classifier

Welcome to the **Web Visitor Classifier**, a tool that combines the magic of web scraping and machine learning to dynamically classify website visitors based on their interests or industry. With an elegant React frontend and a robust Flask backend, this project is both powerful and fun to use!

Whether you're a recruiter, a developer, or just someone with a curious mind, this app has something for everyone. 🚀

## ✨ Features

This project boasts the following cool features:

- **Dynamic Web Scraping**: Fetches content from any valid URL using `BeautifulSoup` and `requests`.
- **Visitor-Oriented Question Generation**: Leverages OpenAI's GPT models to dynamically create questions targeting visitor preferences, intent, or demographics.
- **Visitor Profiling**: Uses OpenAI's GPT-3.5-turbo to classify visitors into categories (e.g., "Developer," "Marketer") based on their responses.
- **Interactive Frontend**: User-friendly React interface with Material-UI for a polished and responsive design.
- **State Management**: Redux efficiently manages questions, user responses, and profiling results.
- **Real-Time Feedback**: Includes loading indicators to improve user experience during processing.
- **Backend Caching**: Optimized backend with URL content caching to reduce redundant processing and speed up requests.
- **Error Handling**: Robust error detection for invalid URLs, incomplete inputs, and connectivity issues.

It's the perfect blend of data scraping, user interaction, and machine learning. 🎉

## 🛠️ Tech Stack

This project is built using a modern and scalable tech stack:

### Frontend:

- **React**: For creating a dynamic and interactive user interface.
- **Redux**: For managing application state efficiently.
- **Material-UI (MUI)**: For a clean and responsive design.

### Backend:

- **Flask**: A lightweight framework for handling API requests.
- **BeautifulSoup**: For parsing and extracting content from web pages.
- **NLTK**: For natural language processing and keyword extraction.
- **OpenAI GPT Models**: For generating questions and classifying visitors based on their responses.

### Tools and Deployment:

- **Flask-CORS**: To enable secure cross-origin requests.
- **Python Requests**: For fetching content from web pages.
- **Functools LRU Cache**: For caching URL content to optimize repeated requests.

## 🚀 Setup

### Frontend Setup

1. Install dependencies:

```bash
npm install
```

2. Start the React development server:

```bash
npm start
```

### Backend Setup:

1. Navigate to the backend folder:

```bash
cd backend
```

2. Set up a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows
```

3. Install backend dependencies:

```bash
pip install -r requirements.txt
```

4. Start the Flask server:

```bash
python app.py
```

## 📝 License

This project is licensed under the **MIT License**.

# 🌐 Web Visitor Classifier

Welcome to the **Web Visitor Classifier**, a tool that combines the magic of web scraping and machine learning to dynamically classify website visitors based on their interests or industry. With an elegant React frontend and a robust Flask backend, this project is both powerful and fun to use!
Whether you're a recruiter, a developer, or just someone with a curious mind, this app has something for everyone. 🚀

## ✨ Features

This project boasts the following cool features:

- **Dynamic Web Scraping**: Fetches content from any valid URL using `BeautifulSoup` and `requests`.
- **Keyword Extraction**: Leverages natural language processing to identify key topics from website content.
- **Question Generation**: Dynamically creates visitor classification questions based on scraped content.
- **Interactive Frontend**: User-friendly React interface with Redux for state management.
- **Real-Time Classification**: Displays questions in real-time and prepares for potential user profiling.
- **Scalable Backend**: Built with Flask and integrated with CORS for seamless communication.
- **Error Handling**: Robust error detection for invalid URLs and connectivity issues.

It's the perfect blend of data scraping and user interaction wrapped up in one neat package. 🎉

## 🛠️ Tech Stack

This project is built using a modern and scalable tech stack:

### Frontend:
- **React**: For creating a dynamic and interactive user interface.
- **Redux**: For managing application state efficiently.

### Backend:
- **Flask**: A lightweight framework for handling API requests.
- **BeautifulSoup**: For parsing and extracting content from web pages.
- **NLTK**: For natural language processing and keyword extraction.

### Tools and Deployment:
- **Flask-CORS**: To enable secure cross-origin requests.
- **Python Requests**: For fetching content from web pages.
- **AWS**: (Optional) For deploying the backend and database storage.

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


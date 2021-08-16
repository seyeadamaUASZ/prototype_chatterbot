from chatbot import chatbot
from flask import Flask, render_template, request,jsonify, abort, make_response 
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
app.static_folder = 'static'

@app.route('/chat', methods=['POST'])
def talk():
    if not request.json or not 'message' in request.json:
        abort(400)
    # parsed_json = json.loads(request.json)
    # user_message = parsed_json['message']
    # response = str(chatbot.get_response(user_message))
    # return jsonify(response)
    user_message=request.json['message']
    return jsonify({'msg':str(chatbot.get_response(user_message))})


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(chatbot.get_response(userText))

if __name__ == "__main__":
    app.run() 
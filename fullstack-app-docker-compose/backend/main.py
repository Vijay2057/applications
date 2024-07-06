from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.get("/data")
def get_data():
    return {"name": "Vijay"}


@app.post("/data")
def put_data():
    data = request.data
    print("data : ", data)
    return "posted successfully"


app.run(host="0.0.0.0", port=5000)

from flask import send_from_directory
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/gpa")
def gpa():
    return render_template("gpa.html")

@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/libavoid.wasm")
def libavoid_wasm():
    return send_from_directory("static/libavoid", "libavoid.wasm")

if __name__ == "__main__":
    app.run(debug=True, template_folder="templates")


  
from flask import *

app = Flask(__name__)

@app.route("/home", methods = ["POST", "GET"])
def home():
    return render_template("home.html")
@app.route("/projects")
def projects():
    return render_template('projects.html')
@app.route("/about")
def about():
    return render_template('about.html')

@app.errorhandler(404)
def page404(error):
    return "Error: Detecting multiple NULL class objects in the area. Are you sure whatever you're doing is worth it?"

@app.errorhandler(500)
def page500(error):
    return "Something went wrong at Evan Miocevich HQ, we'll get on this (definitely)"


    

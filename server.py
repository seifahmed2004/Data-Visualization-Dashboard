from flask import Flask, jsonify, render_template
import pandas as pd
app = Flask(__name__)
df = pd.read_csv("students (1).csv")
df2=pd.read_csv("Num_students.csv")
@app.route("/")
def index():
    return render_template("index.html")
# chart 1
@app.route("/get-datachart")
def get_datachart():
    major_counts = df["Major"].value_counts()
    data = [{"class": major, "value": count} for major, count in major_counts.items()]
    return jsonify(data)
# chart 2
@app.route("/get-datatable")
def get_datatable():
    classes = df["Gender"].value_counts().index
    values = df["Gender"].value_counts().values
    datab = [{"class": classes[i], "value": int(values[i])} for i in range(len(classes))]
    return jsonify(datab)
# chart 3
@app.route("/get-datagrade")
def get_datagrade():
    classes = df["GraduationYear"].value_counts().index
    values = df["GraduationYear"].value_counts().values
    databb = [{"class": str(classes[i]), "value": int(values[i])} for i in range(len(classes))]
    return jsonify(databb)
#chart 4
@app.route("/get-datagpa")
def get_datagpa():
    year = df2["year"]
    value = df2["value"]
    data = []
    for i in range(len(year)):
        data.append({"year": str(year[i]), "value": int(value[i])})
    return jsonify(data)  

if __name__ == "__main__":
    app.run(debug=True)


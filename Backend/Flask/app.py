from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)

class DataHolder():
    data = []


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        #pass
        task_content = request.form.get('content') #request.form content type = ImmutableMultiDict; get returns String
        #new_task = task_content.popitem()
        return task_content

    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
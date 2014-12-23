# -*- coding: utf-8 -*-

from flask import Flask, render_template
from utils import get_random_line


app = Flask(__name__)

@app.route("/")
def root():
    context = {
        'image_url': get_random_line('urls.txt')
    }
    return render_template('index.html', **context)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
# -*- coding: utf-8 -*-

from flask import Flask, render_template
from utils import Parser

app = Flask(__name__)

@app.route("/")
def root():
    parser = Parser()

    context = {
        'articles': parser.parse_file('articles.txt')
    }
    return render_template('index.html', **context)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

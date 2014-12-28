# -*- coding: utf-8 -*-

from flask import Flask, render_template
from utils import Parser

app = Flask(__name__)
parser = Parser('articles.txt')

@app.route("/")
def root():

    context = {
        'articles': parser.get_index_articles()
    }
    return render_template('index.html', **context)

@app.route('/article/<int:art_id>')
def article(art_id):
    print(parser.get_article(art_id))
    return 
    return render_template('article.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

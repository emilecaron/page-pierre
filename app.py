# -*- coding: utf-8 -*-

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def root():
    context = {
        'image_url': 'https://media.joomeo.com/large/5499d3cdf34bd.jpg'
    }
    return render_template('index.html', **context)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
"""simple website app for CI"""
import os
from flask import Flask, current_app
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
metrics = PrometheusMetrics(app=None, path='/metrics')

@app.route('/')
def hello_world():
    """main route to return index.html"""
    return current_app.send_static_file('index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT'))
    metrics.init_app(app)
    app.run(debug=False,host='0.0.0.0', port=port)

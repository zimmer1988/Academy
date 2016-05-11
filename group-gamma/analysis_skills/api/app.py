from flask import Flask
from flask import request

app = Flask(__name__)


@app.route('/statistic')
def get_statistic():
    """Returns the data for the chart drawing"""
    return 'Data for charmts'


@app.route('/skills', methods='POST')
def data_processing():
    """Getting data into json to store in the database"""
    pass


if __name__ == '__main__':
    app.run()

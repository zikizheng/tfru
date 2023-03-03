from flask import Flask, request, render_template, url_for
from flask_cors import CORS
import json
from PIL import Image
import base64
import io
import os
import shutil
import time
from face import face

app = Flask(__name__)
CORS(app)

@app.route("/api", methods=['POST','GET'])
def api():
    data = request.get_json()
    directory = './face'
    try:
        result = data['data']
        b=bytes(result, 'utf-8')
        image=b[b.find(b'/9'):]
        im = Image.open(io.BytesIO(base64.b64decode(image)))
        im.save(directory+'/1.jpeg')

    except:
        pass
    return "1"
if __name__=='__main__':
    app.run()

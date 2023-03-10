from flask import Flask, request, render_template, url_for
from flask_cors import CORS
import json
from PIL import Image
import base64
import io
import os
import shutil
import time
from face import faceDetect

app = Flask(__name__)
CORS(app)

@app.route("/api", methods=['POST','GET'])
def api():
    file_name = os.path.join(os.path.dirname(__file__), './face/1.jpeg')
    data = request.get_json()
    result = data['data']
    b=bytes(result, 'utf-8')
    image=b[b.find(b'/9'):]
    im = Image.open(io.BytesIO(base64.b64decode(image)))
    im.save(file_name)
    try:
        face = faceDetect()[0]
        if face:
            return faceDetect()[1]
        else:
            return '0,0,0,0'
    except:
        return '0,0,0,0'
if __name__=='__main__':
    app.run()
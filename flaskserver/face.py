import cv2
import os

def faceDetect():

    retval = os.getcwd()
    file_name = os.path.join(os.path.dirname(__file__), './face/1.jpeg')
    assert os.path.exists(file_name)

    cap = cv2.imread(file_name)

    # Create the haar cascade
    faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    try:
        gray = cv2.cvtColor(cap, cv2.COLOR_BGR2GRAY)
        # Detect faces in the image
        faces = faceCascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30)
            #flags = cv2.CV_HAAR_SCALE_IMAGE
        )

        print("Found {0} faces!".format(len(faces)))


        # Draw a rectangle around the faces
        fstring = ''
        for (x, y, w, h) in faces:
            cv2.rectangle(cap, (x, y), (x+w, y+h), (0, 255, 0), 2)
            fstring = fstring + f'{x},{y},{w},{h} '

        # Display the resulting frame
        os.chdir(os.path.join(os.path.dirname(__file__), "./face/"))
        cv2.imwrite('2.jpeg', cap)
        os.chdir(retval)

        if len(faces) > 0:
            return [True, fstring]
        else:
            return [False]
    except:
        pass
#!/usr/bin/python3
import base64
import os

from deepface import DeepFace
import cv2
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from flask import Flask, session, request, jsonify
import json
import time
import secrets
import config
from keywordDictionary import key_dictionary, color_dictionary

# App config
app = Flask(__name__)

app.secret_key = secrets.token_urlsafe(16)
app.config['SESSION_COOKIE_NAME'] = 'spotify-login-session'


@app.route('/upload', methods=['POST'])
def upload():
    image = request.json['image']
    imageBuffer = base64.b64decode(image.split(',')[1])
    imageName = "test.jpg"
    imagePath = f"./../src/Capture/{imageName}"
    imageBuffer = base64.b64decode(image.split(',')[1])
    with open(imagePath, 'wb') as f:
        f.write(imageBuffer)
    emotion = processImage(imagePath)
    return jsonify({'emotion': emotion})


# To get playlist suggestions based on keyword
@app.route('/recommendPlaylists')
def recommendPlaylists():
    code = request.values["code"]
    userKeyword = key_dictionary[request.values["keyword"]]
    getAccessToken(code)
    playlists = []
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    resultStr = json.dumps(sp.search(userKeyword, limit=15, offset=0, type='playlist', market='CA'))
    result = json.loads(resultStr)
    for i in result['playlists']['items']:
        playlistDictionary = {'playlistID': i['id'], 'playlistName': i['name'],
                              'playlistBy': i['owner']['display_name'],
                              'playlistImg': i['images'][0]['url'], 'playlistDesc': i['description'],
                              'playlistURL': i['external_urls']['spotify'],
                              'color1': color_dictionary[request.values["keyword"]][0],
                              'color2': color_dictionary[request.values["keyword"]][1]}
        playlists.append(playlistDictionary)
    return playlists


# Get Access token from the code generated
def getAccessToken(code):
    sp_oauth = spotifyOAuth()
    session.clear()
    code = request.values["code"]
    token_info = sp_oauth.get_access_token(code)
    token_info = checkToken(token_info)
    session["token_info"] = token_info
    print(token_info)


# Checks to see if token is valid and gets a new token if not
def checkToken(token_info):
    # Checking if the session already has a token stored
    if not (session.get('token_info', False)):
        return token_info

    # Checking if token has expired
    now = int(time.time())
    is_token_expired = session.get('token_info').get('expires_at') - now < 60

    # Refreshing token if it has expired
    if is_token_expired:
        sp_oauth = spotifyOAuth()
        token_info = sp_oauth.refresh_access_token(session.get('token_info').get('refresh_token'))
        session['token_info'] = token_info

    return token_info


# Function to process the image and return the keyword
def processImage(img_path):
    emotion = {}
    demography = []
    img = cv2.imread(img_path)
    try:
        getEmotion = DeepFace.analyze(img, ['emotion'], detector_backend='ssd')
        demography.append(getEmotion[0]['dominant_emotion'])
        if demography[0] not in emotion:
            emotion[demography[0]] = 1
        else:
            emotion[demography[0]] += 1
    except:
        pass

    try:
        getEmotion = DeepFace.analyze(img, ['emotion'], detector_backend='opencv')
        demography.append(getEmotion[0]['dominant_emotion'])
        if demography[1] not in emotion:
            emotion[demography[1]] = 1
        else:
            emotion[demography[1]] += 1
    except:
        pass

    try:
        getEmotion = DeepFace.analyze(img, ['emotion'], detector_backend='mtcnn')
        demography.append(getEmotion[0]['dominant_emotion'])
        if demography[2] not in emotion:
            emotion[demography[2]] = 1
        else:
            emotion[demography[2]] += 1
    except:
        pass

    os.remove(img_path)
    if len(demography) == 0:
        return 404
    elif emotion[max(emotion, key=lambda x: emotion[x])] > 1:
        return max(emotion, key=lambda x: emotion[x])
    else:
        return demography[0]


def spotifyOAuth():
    return SpotifyOAuth(
        client_id=config.CLIENT_ID,
        client_secret=config.CLIENT_SECRET,
        redirect_uri=config.REDIRECT_URI,
        scope="user-read-private")


if __name__ == '__main__':
    app.run()

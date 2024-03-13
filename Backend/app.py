#!/usr/bin/python3

import spotipy
from spotipy.oauth2 import SpotifyOAuth
from flask import Flask, url_for, session, request, redirect
import json
import time
import secrets
import config

# App config
app = Flask(__name__)

app.secret_key = secrets.token_urlsafe(16)
app.config['SESSION_COOKIE_NAME'] = 'spotify-login-session'

def getAccessToken(code):
    sp_oauth = spotifyOAuth()
    session.clear()
    code = request.values["code"]
    token_info = sp_oauth.get_access_token(code)
    token_info = checkToken(token_info)
    session["token_info"] = token_info
    print(token_info)


# To get playlist suggestions based on keyword
@app.route('/recommendPlaylists')
def recommendPlaylists():
    code = request.values["code"]
    userKeyword = request.values["keyword"]
    getAccessToken(code)
    playlists = []
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    resultStr = json.dumps(sp.search(userKeyword, limit=10, offset=0, type='playlist', market='CA'))
    result = json.loads(resultStr)
    print(result)
    for i in result['playlists']['items']:
        playlistDictionary = {'playlistID': i['id'], 'playlistName': i['name'],
                              'playlistBy': i['owner']['display_name'],
                              'playlistImg': i['images'][0]['url'], 'playlistDesc': i['description'],
                              'playlistURL': i['external_urls']['spotify']}
        playlists.append(playlistDictionary)
    return playlists


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


def spotifyOAuth():
    return SpotifyOAuth(
        client_id=config.CLIENT_ID,
        client_secret=config.CLIENT_SECRET,
        redirect_uri=config.REDIRECT_URI,
        scope="user-read-private")


if __name__ == '__main__':
    app.run()

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios"
import request from "request"
import qs from "qs"

import SpotifyConfig from './config'

async function getSpotify() {
  const token = await getToken();
  const album = await getAlbums(token);
  return album;
}

async function getToken() {
  const result = await axios.post(
    'https://accounts.spotify.com/api/token',
    "grant_type=client_credentials", 
    {
      auth: {
        username: SpotifyConfig.client_id,
        password: SpotifyConfig.client_secret,
      },
    }
  );

  return result.data.access_token;
}

function getAlbums(accessToken) {
  return axios({
    url: 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      access_token: accessToken,
    }
  })
}

getSpotify().then(result => {
  console.log(result)
})





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

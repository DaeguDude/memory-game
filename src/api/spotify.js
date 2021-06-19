
import axios from "axios"
import SpotifyConfig from '../config'

async function getSpotify() {
  const token = await getToken();
  const tracks = await getTracks(token);
  const albumImageUrls = getListOfAlbumImages(tracks)
  return albumImageUrls;
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

// Authorization
// seed_artist
// seed_genres
// seed_tracks

// function getAlbums(accessToken) {
//   return axios({
//     url: 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     params: {
//       access_token: accessToken,
//     }
//   })
// }
function getTracks(accessToken) {
  const endpoint = "https://api.spotify.com/v1/recommendations";
  const artists = '6sFIWsNpZYqfjUpaCgueju';
  const jaypark = '4XDi67ZENZcbfKnvMnTYsI'
  
  
  const danceability = encodeURIComponent('0.9');

  return fetch(`${endpoint}?seed_artists=${jaypark}&target_danceability=${danceability}`, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
  .then(result => result.tracks)
}

function getListOfAlbumImages(tracks) {
  return tracks
    .map(track => track.album)
    .map(album => album.images[0])
    .map(image => image.url)
}

export default getSpotify

// I want to get recommendations from Spotify.
// What recommendations? Doesn't matter at the point. 
// It just needs to retrieve some ablbums to show the images
// for the user
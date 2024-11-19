// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBFGneaiLzOMt705nOUi_aJmbttrlgfMVF0r4BPTYrGAEtjQA2GB0hh1TOWYKWe7w_xXnwVQk-ilObjn9qShiT29KXTEUNfZKnPwzsE40EwYCq5M1Mx2q6otV2dNQGTiSSqHCfuk7ipMgxAJGzLlxj0iq86Lzr2OYtQgbNPaOa05-ndDPsgikufJZNyYP2k42sHnpmnir8h9Mr-0fNIvNjaxaPAkIpvG5YUTtEQ2R5hsK053IR6SsVK3OCf-HWflVEXsgd_dvi5iyvT2g4PnBSz23y8ZA';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const topTracksIds = [
  '5zCnGtCl5Ac5zlFHXaZmhy','3NPWH2UbMjch2vnS7qMFGM','06LCamFUOtImIKi9mFRKiD','0TL0LFcwIBF5eX7arDIKxY','0WvjrHwSrm0ZfhRGje2j2W'
];

async function getRecommendations(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

const recommendedTracks = await getRecommendations();
console.log(
  recommendedTracks.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);




// 10 song playlist

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBFGneaiLzOMt705nOUi_aJmbttrlgfMVF0r4BPTYrGAEtjQA2GB0hh1TOWYKWe7w_xXnwVQk-ilObjn9qShiT29KXTEUNfZKnPwzsE40EwYCq5M1Mx2q6otV2dNQGTiSSqHCfuk7ipMgxAJGzLlxj0iq86Lzr2OYtQgbNPaOa05-ndDPsgikufJZNyYP2k42sHnpmnir8h9Mr-0fNIvNjaxaPAkIpvG5YUTtEQ2R5hsK053IR6SsVK3OCf-HWflVEXsgd_dvi5iyvT2g4PnBSz23y8ZA';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:5zCnGtCl5Ac5zlFHXaZmhy','spotify:track:665b3Nss3OQmhTUdB5hBXw','spotify:track:3NPWH2UbMjch2vnS7qMFGM','spotify:track:5GeBgck1MU2tlIkMpsn8uT','spotify:track:06LCamFUOtImIKi9mFRKiD','spotify:track:5XsoDbDt98b0FkFLOhsJuS','spotify:track:0TL0LFcwIBF5eX7arDIKxY','spotify:track:6mTvwBzWTGDOVeCNQEqtOE','spotify:track:0WvjrHwSrm0ZfhRGje2j2W','spotify:track:6MZyrnqwsLnrWY5Gk0AyXg'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My recommendation playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);


// now play a song

const playlistId = '3jjQ9rNGWqqZ70McxSZJbw';

<iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/3jjQ9rNGWqqZ70McxSZJbw?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
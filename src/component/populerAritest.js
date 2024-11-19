import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);


function populer_Artiest(){
    return (
        <div className="container">
            <div className="row">
                <h1>hello </h1>
            </div>
        </div>
    );
};

export default populer_Artiest;
const artistField = document.getElementById('artist-name');
const songField = document.getElementById('song-name');
const searchBtn = document.getElementById('search-btn');


searchBtn.addEventListener('click', () => {
  let artist = artistField.value;
  let songName = songField.value;
  console.debug(`Query for lyrics of artist: ${artist} song: ${songName}`);
  artistField.value = '';
  songField.value = '';
});

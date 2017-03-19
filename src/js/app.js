import testMod from './modules/reader';
import LyricDataType from './modules/lyrics';

const L = new LyricDataType();

const artistField = document.getElementById('artist-name');
const songField = document.getElementById('song-name');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  let artist = artistField.value;
  let songName = songField.value;
  L.getLyrics(artist, songName);
  artistField.value = '';
  songField.value = '';
});

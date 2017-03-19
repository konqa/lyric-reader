import testMod from './modules/reader';
import SongManager from './modules/lyrics';

const SM = new SongManager();

const artistField = document.getElementById('artist-name'),
   songField = document.getElementById('song-name'),
   searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  let artist = artistField.value;
  let songName = songField.value;
  SM.getLyrics(artist, songName);
  artistField.value = '';
  songField.value = '';
});


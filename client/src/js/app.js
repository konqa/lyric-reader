import GetLyrics from './modules/lyrics';

const artistField = document.getElementById('artist-name'),
   songField = document.getElementById('song-name'),
   searchBtn = document.getElementById('search-btn');

function Song (artist, song) {
  this.artist = artist;
  this.song = song;
}

searchBtn.addEventListener('click', () => {
  let artist = artistField.value,
    songName = songField.value,
    searchQuery = new Song(artist, songName);

  GetLyrics(searchQuery.artist, searchQuery.song);
  artistField.value = '';
  songField.value = '';
});


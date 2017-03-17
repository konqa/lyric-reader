class Lyrics {
  constructor () {
    this.URI = '/mock/songs.json';
  }

  getSongLyrics(artist, song) {
    console.log('Getting lyrics for ${artist}, ${song}');
  }

}

export default Lyrics;

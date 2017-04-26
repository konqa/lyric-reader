import readLyrics from './reader';

const getLyrics = function (artist, song) {
    const songStore = 'mock/songs.json',
        lyricsP = document.getElementById('lyrics');

    fetch(songStore).then((response) => {
        return response.json();
    }).then((ourSongs) => {
        console.info('All songs: ', ourSongs);
        ourSongs.filter((s) => {
            if (s.Artist === artist && s.Song === s.Song) {
                console.debug('Matching object:', s);
                return s;
            } 
        }).map((s) => {
            readLyrics(s.Lyrics);
            lyricsP.innerHTML = s.Lyrics;
        });
    });
};

export default getLyrics;

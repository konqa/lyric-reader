const getLyrics = function (artist, song) {
    const songStore = 'mock/songs.json';
    console.debug(`Getting lyrics for artist:${artist} song:${song}`);    

    fetch(songStore).then((response) => {
        return response.json();
    }).then((ourSongs) => {
        console.info('All songs: ', ourSongs);
        ourSongs.filter((s) => {
            if (s.Artist === artist && s.Song === s.Song)
            console.debug('Match:', s.Lyrics);
        });
    });
};

export default getLyrics;


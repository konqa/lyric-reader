class SongManager {
    constructor () { 
        this.URI = '/mock/songs.json';
    }

    getLyrics (artist, song) {
        console.log(`User search for ${artist} ${song}`);
    }

}

export default SongManager;


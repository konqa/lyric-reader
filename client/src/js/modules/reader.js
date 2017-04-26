const readLyrics = function (lyrics) {
    console.info('Reading: ', lyrics);
    const read = new SpeechSynthesisUtterance();
    read.text = lyrics;
    speechSynthesis.speak(read);
};

export default readLyrics;
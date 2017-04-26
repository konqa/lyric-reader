const readLyrics = function (lyrics) {
    console.info('Reading: ', lyrics);
    const utternence = new SpeechSynthesisUtterance();
    utternence.text = lyrics;
    speechSynthesis.speak(utternence);
};

export default readLyrics;
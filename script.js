const musicTracks = [
    { src: 'src/track1.m4a', type: 'audio/mp4' },
    { src: 'src/track2.m4a', type: 'audio/mp4' },
    { src: 'src/track3.m4a', type: 'audio/mp4' }
];

const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', playRandomMusic);

function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * musicTracks.length);
    const randomTrack = musicTracks[randomIndex];
    
    audio.src = randomTrack.src;
    audio.type = randomTrack.type;
    audio.play();
}

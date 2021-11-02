let playPauseButton = document.getElementById('play-pause-btn');
let volumeRange = document.getElementById("volume-range");
let volumeButton = document.getElementById('volume-btn');
let track = document.getElementById('track');
let volume;
let audioPlayer = document.getElementById('audioPlayer');

audioPlayer.volume = +volumeRange.value/100


playPauseButton.onclick = function (){
    if (playPauseButton.src.slice(-8) === 'play.png') {
        audioPlayer.play()
        playPauseButton.src = 'img/stop.png'
    } else if (playPauseButton.src.slice(-8) === 'stop.png'){
        audioPlayer.pause()
        playPauseButton.src = 'img/play.png'
    }
}

volumeButton.onclick = function (){
    if (volumeButton.src.slice(-13) === 'volume-on.png') {
        volumeButton.src = 'img/no-volume.png';
        volume = volumeRange.value;
        volumeRange.value = '0';
        audioPlayer.volume = 0;
    } else if (volumeButton.src.slice(-13) === 'no-volume.png'){
        volumeButton.src = 'img/volume-on.png';
        volumeRange.value = volume;
        console.log(typeof(volume))
        audioPlayer.volume = +volume/100;
    }
}

volumeRange.oninput = function (){
    audioPlayer.volume = +volumeRange.value/100;
    if (+volumeRange.value/100 === 0){
        volumeButton.src = 'img/no-volume.png';
    } else{
        volumeButton.src = 'img/volume-on.png';
    }

}

recentTracksDiv = document.getElementById("recent-tracks");

const songs = new Map([
    ['15:03', 'Soundgarden - Blow Up The Outside World'],
    ['14:59', 'System Of A Down - Lonely Day'],
    ['14:55', 'Radiohead - Karma Police'],
    ['14:50', 'The Cranberries - Zombie'],
])


// delete later
for ([key, value] of songs){
    let newTrack = document.createElement("div");
    newTrack.className = "recent-track";
    newTrack.innerHTML = `
        <div class="recent-track-time">
            <span>${key}</span>
        </div>
        <div class="recent-track-name">
            <span>${value}</span>
        </div>
    `;
    recentTracksDiv.appendChild(newTrack);
}
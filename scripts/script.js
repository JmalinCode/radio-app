let playPauseButton = document.getElementById('play-pause-btn');
let volumeRange = document.getElementById("volume-range");
let volumeButton = document.getElementById('volume-btn');
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

// delete later
const songs = new Map([
    ['15:03', 'Soundgarden - Blow Up The Outside World'],
    ['14:59', 'System Of A Down - Lonely Day'],
    ['14:55', 'Radiohead - Karma Police'],
    ['14:50', 'The Cranberries - Zombie'],
])

for ([key, value] of songs){
    let newTrack = document.createElement("div");
    newTrack.className = "recent_track";
    newTrack.innerHTML = `
        <div class="recent_track_time">
            <span>${key}</span>
        </div>
        <div class="recent_track_name">
            <span>${value}</span>
        </div>
    `;
    recentTracksDiv.appendChild(newTrack);
}

if(/Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent)){
    trackDiv = document.getElementById("playing-track-div");
    let platingNowName = trackDiv.textContent 
    trackDiv.remove()
    mainContainer = document.getElementById("container-main");
    let playingTrackDiv = document.createElement("div");
    playingTrackDiv.className = "main_box"
    playingTrackDiv.innerHTML = `
        <div class="main_box_title">
            <span>Playing now</span>
        </div>
        <div class="recent_track">
            <span id="playing-track">${platingNowName}</span>
        </div>
    `;
    mainContainer.insertBefore(playingTrackDiv, recentTracksDiv)
}

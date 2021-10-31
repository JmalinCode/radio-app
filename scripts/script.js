let playPauseButton = document.getElementById('play-pause-btn');
let volumeRange = document.getElementById("volume-range");
let volumeButton = document.getElementById('volume-btn');
let track = document.getElementById('track');
let volume;
let audioPlayer = document.getElementById('audioPlayer');


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



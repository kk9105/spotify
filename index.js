console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('spotify/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName: "Mast Magan", filePath: "spotify/1.mp3", coverPath: "spotify/images/cover1.jpeg"},
    {songName: "Shayad", filePath: "spotify/2.mp3", coverPath: "spotify/images/cover2.jpeg"},
    {songName: "Hawayein", filePath: "spotify/3.mp3", coverPath: "spotify/images/cover3.jpeg"},
    {songName: "Tera Yaar Hoon Main", filePath: "spotify/4.mp3", coverPath: "spotify/images/cover4.jpeg"},
    {songName: "Tujhe Kitna Chahne Lage", filePath: "spotify/5.mp3", coverPath: "spotify/images/cover5.jpeg"},
    {songName: "Kesariya", filePath: "spotify/6.mp3", coverPath: "spotify/images/cover6.jpeg"},
    {songName: "Apna Bana Le", filePath: "spotify/7.mp3", coverPath: "spotify/images/cover7.jpeg"},
    {songName: "Satranga", filePath: "spotify/8.mp3", coverPath: "spotify/images/cover8.jpeg"},
];

songItems.forEach((element, i) => {
    element.addEventListener('click', () => {
        songIndex = i;
        playSong();
    });
});

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
   progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id) - 1; // Subtract 1 here
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `spotify/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})





document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    

    audioElement.src = `spotify/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
  

    audioElement.src = `spotify/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});


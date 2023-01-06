console.log("Welcome to Music Masala ");

let songIndex = 1;
let audioElement = new Audio("Song/1.mp3");
let MasterPlay = document.getElementById("MasterPlay");
let modify = document.getElementById("modify");
let SongName = document.getElementById("SongName");
let gif= document.getElementById('gif');
let Duration = document.getElementById('Duration')

let songs = [
    {songName: "Tu-Hi-Siya-Ka-ram", file: "Song/1.mp3",Duration:"7:00"},
    {songName: "Dandelions", file: "Song/2.mp3",Duration:"3:24"},
    {songName: "Deva-Deva", file: "Song/3.mp3",Duration:"3:48"},
    {songName: "One-Kiss", file: "Song/4.mp3",Duration:"4:39"},
    {songName: "Apna-Bana-Le", file: "Song/5.mp3",Duration:"3:32"},
    {songName: "Tu-Itna-Zaroori-Kaise-Hua", file: "Song/6.mp3",Duration:"4:14"},
    {songName: "Tu-Jo-Mila-(Lofi-Mix)", file: "Song/7.mp3",Duration:"2:53"},
    {songName: "Unstoppable", file: "Song/8.mp3",Duration:"4:06"},
]
// audioElement.play();
//Handle play/pause Click
MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    modify.value = progress;
})

modify.addEventListener('change',()=>{
    audioElement.currentTime = (modify.value*audioElement.duration)/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
})}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        //console.log(e.target);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `Song/${songIndex}.mp3`;
        SongName.innerText = songs[songIndex-1].songName;
        Duration.innerText = songs[songIndex-1].Duration;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        }
        else{
            audioElement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            gif.style.opacity = 0;
            MasterPlay.classList.remove('fa-pause-circle');
            MasterPlay.classList.add('fa-play-circle');
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 1;
    }
    else{
       songIndex += 1;
    }
        audioElement.src = `Song/${songIndex}.mp3`;
        SongName.innerText = songs[songIndex-1].songName;
        Duration.innerText = songs[songIndex-1].Duration;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 8;
    }
    else{
       songIndex -= 1;
    }
        audioElement.src = `Song/${songIndex}.mp3`;
        SongName.innerText = songs[songIndex-1].songName;
        Duration.innerText = songs[songIndex-1].Duration;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
})
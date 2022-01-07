let songIndex = 0
let audioElement = new Audio('5.mp3')
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItems = document.getElementsByClassName("songItem")
let masterSongName = document.getElementById("masterSongName")

let songs = [
    {songName: "Stargazing Song by Travis Scott" , filePath: "songs/1.mp3" , coverPath: "covers/cover1.jpg"},
    {songName: "Luna Song By Diljit Dosanjh" , filePath: "songs/2.mp3" , coverPath: "covers/luna.jpg"},
    {songName: "INDUSTRY BABY By Jack Harlow and Lil Nas X" , filePath: "songs/3.mp3" , coverPath: "covers/cover2.jpg"},
    {songName: "Pavizha Mazhaye By K. S. Harisankar, P S Jayhari" , filePath: "songs/4.mp3" , coverPath: "covers/cover4.jpg"},
    {songName: "Heat Waves Song By Glass Animals" , filePath: "songs/1.mp3" , coverPath: "covers/cover5.jpg"},
    {songName: "Better Song By Khalid" , filePath: "songs/6.mp3" , coverPath: "covers/cover6.jpg"},
    {songName: "Girls Want Girls Drake feat. Lil Baby" , filePath: "songs/7.mp3" , coverPath: "covers/cover7.jpg"},
    {songName: "Brown Munde Song By AP Dhillion" , filePath: "songs/8.mp3" , coverPath: "covers/cover8.jpg"},
    {songName: "Something Just Like This By The Chainsmokers" , filePath: "songs/9.mp3" , coverPath: "covers/cover9.jpg"},
    {songName: "Girl Friend Song By A. R. Rahman" , filePath: "songs/10.mp3" , coverPath: "covers/cover10.jpg"}

]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }

})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle')
            element.classList.add('fa-play-circle')
    
        })
    
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src= `songs/${songIndex}.mp3`
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }else{
        songIndex += 1
    }
    audioElement.src= `songs/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else
    {
        songIndex -= 1
    }
    audioElement.src= `songs/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
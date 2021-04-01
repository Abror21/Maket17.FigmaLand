const wrapper = document.querySelector('.wrapper');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const menuClose = document.querySelector('.menu-close');
const modalBtn = document.querySelector('.Modal__btn');

const modal = document.querySelector('.Modal')
const orderBtns = document.querySelectorAll('.modal-btn');

menu.addEventListener('click', () => {
    if (menu.classList.contains('active') && nav.classList.contains('active')) {
        wrapper.classList.remove('active')
        nav.classList.remove('active')
        menu.classList.remove('active')
        body.style.overflow = 'visible'
    }else{
        wrapper.classList.add('active')
        nav.classList.add('active')
        menu.classList.add('active')
        body.style.overflow = 'hidden'
    }
})
wrapper.addEventListener('click', () => {
    wrapper.classList.remove('active')
    nav.classList.remove('active')
    menu.classList.remove('active')
    body.style.overflow = 'visible'
});
menuClose.addEventListener('click', () => {
    wrapper.classList.remove('active')
    nav.classList.remove('active')
    menu.classList.remove('active')
    body.style.overflow = 'visible'
})
document.querySelector(".features__btn").onclick = btnClose;
document.querySelector(".features__video-play").onclick = videoPlay;
document.querySelector(".features__video-pause").onclick = videoPause;
document.querySelector(".features__video-stop").onclick = videoStop;
document.querySelector(".features__video-speed-up").onclick = videoSpeedUp;
document.querySelector(".features__video-speed-down").onclick = videoSpeedDown;
document.querySelector(".features__video-volume").oninput = videoVolume;
let video = document.querySelector('.features__video-pleer');
let progress = document.querySelector('.features__video-progress');
let vDuration = document.querySelector(".features__video-duration");
video.ontimeupdate = progressUpdate;
let speed = 1;
let sound;


function btnClose(){
    document.querySelector('.features__btn').style = `opacity: 0; pointer-events: none;`;
    videoPlay()
}
function videoPlay() {

    video.play()
    speed = 1;
    video.playbackRate = speed;
}
function videoPause() {
    video.pause()
}
function videoStop() {
    video.pause()
    video.currentTime = 0;
    progress.value = 0;
}
function videoSpeedUp() {
    video.play()
    speed += 0.3;
    video.playbackRate = speed;
    if (speed >= 6) {
        speed = 6
    }
}
function videoSpeedDown() {
    video.play()
    speed -= 0.3;
    if (speed < 0) {
        speed = 0.1
    }
    video.playbackRate = speed;
}

function videoVolume() {
    let v = this.value;
    video.volume = v / 100;
    sound = this.value;
     
}
function fixNumber(number) {
    return number < 10 ? `0${number}` : number;
}

function timeNumber(number) {
    if (number >= 60) {
        return number / 60;
    } else {
        return '00';
    }
}

function progressUpdate(){
    let d = video.duration;
    let c = video.currentTime;
    progress.value = (c*100)/d;
    let minute = Number(video.duration.toFixed());
    let second = Number(video.currentTime.toFixed());
    vDuration.innerText = `${Math.floor(timeNumber(second))}:${fixNumber(second%60)}/${Math.floor(minute/60)}:${Math.floor(minute%60)}`;
}

progress.addEventListener('click', (e)=>{
    let width = e.target.offsetWidth;
    let currentTime = e.offsetX;
    progress.value = 100*(currentTime/width);
    video.pause()
    video.currentTime = video.duration*(currentTime/width);
    video.play()
})

const changeSound = document.querySelector('.features__video-sound');
const changeSoundItem = document.querySelector('.features__video-sound>.fas.fa-volume-up');
changeSound.addEventListener('click', ()=>{
    let value = document.querySelector('.features__video-volume');
    if(changeSoundItem.classList.contains('fa-volume-up')){
        changeSoundItem.classList.remove('fa-volume-up')
        value.value = 0;
        video.volume = 0;
        changeSoundItem.classList.add('fa-volume-mute')
    }else{
        value.value = sound;
        video.volume = value.value / 100;
        changeSoundItem.classList.add('fa-volume-up')
        changeSoundItem.classList.remove('fa-volume-mute')
    }
})
document.querySelector('.features__video-fullscreen').onclick = fullScreen;
function fullScreen(){
    video.requestFullscreen()
}
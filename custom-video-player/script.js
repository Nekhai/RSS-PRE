const player = document.querySelector('.video__container');
const video = document.querySelector('.video__player');
const btnPlay = document.querySelector('.control__btn-play');
const btnMute = document.querySelector('.control__btn-mute');
const btnScreen = document.querySelector('.control__btn-screen');
const progress = document.querySelector('.control__progress');
const volume = document.querySelector('.control__volume');
const btnStart = document.querySelector('.video__start');
const control = document.querySelector('.video__control');
let currentSpeed = 1;

function playVideo() {
  document.querySelector('video').playbackRate = 1;
  if (video.paused) {
    video.play();
    btnPlay.style.background = 'url(./assets/svg/play.svg)';
    btnStart.style.display = 'none';
  } else {
    video.pause();
    btnPlay.style.background = 'url(./assets/svg/pause.svg)';
  }
}

function changeVolume() {
  video.volume = this.value;
  video.value = this.value * 100;
  volume.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${video.value}%, #fff ${video.value}%, white 100%)`
}

function videoProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  progress.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${progress.value}%, #fff ${progress.value}%, white 100%)`
}

function changeProgress(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function muteVolume() {
  if (video.muted === false) {
    video.muted = true;
    btnMute.style.background = 'url(./assets/svg/mute.svg)';
  } else {
    video.muted = false;
    btnMute.style.background = 'url(./assets/svg/volume.svg)';
  }
}

function fullScreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function speedUp() {
  if (event.shiftKey === true) {
    currentSpeed += 0.25;
    document.querySelector('video').playbackRate = currentSpeed;
  } else if (video.paused) {
    video.currentTime += 0.04;
  }
}

function speedDown() {
  if (event.shiftKey === true && currentSpeed > 0.25) {
    currentSpeed -= 0.25;
    document.querySelector('video').playbackRate = currentSpeed;
  } else if (video.paused) {
    video.currentTime -= 0.04;
  }
}

function skip(n) {
  console.log('ay')
  video.currentTime += n;
}

function skipTo(n) {
  video.currentTime = (video.duration / 100) * n;
}

function mouseStopped() {
  control.classList.remove('move');
}

function leaveMouse() {
  control.classList.remove('over');
}

function overMouse() {
  control.classList.add('over');
}

function transitionControl() {
  control.classList.add('move');
  let timer;
  clearTimeout(timer);
  timer = setTimeout(mouseStopped, 3000);
}

function whatKey(event) {
  switch (event.code) {
    case 'Space':
      playVideo();
      break;
    case 'KeyK':
      playVideo();
      break;    
    case 'KeyM':
      muteVolume();
      break;  
    case 'KeyF':
      fullScreen();
    break; 
    case 'Comma':
      speedDown();
    break;   
    case 'Period':
      speedUp();
      break;  
    case 'KeyJ':
      skip(-10);
      break;  
    case 'KeyL':
      skip(10);
      break;   
    case 'Digit1':
      skipTo(10);
      break; 
    case 'Digit2':
      skipTo(20);
      break; 
    case 'Digit3':
      skipTo(30);
      break; 
    case 'Digit4':
      skipTo(40);
      break; 
    case 'Digit5':
      skipTo(50);
      break; 
    case 'Digit6':
      skipTo(60);
      break; 
    case 'Digit7':
      skipTo(70);
      break; 
    case 'Digit8':
      skipTo(80);
      break; 
    case 'Digit9':
      skipTo(90);
      break; 
    case 'Digit0':
      skipTo(0);
      break; 
  }
}

btnPlay.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);
volume.addEventListener('change', changeVolume);
progress.addEventListener('click', changeProgress);
video.addEventListener('timeupdate', videoProgress);
video.addEventListener('mousemove', transitionControl);
control.addEventListener('mouseover', overMouse);
control.addEventListener('mouseleave', leaveMouse);
btnMute.addEventListener('click', muteVolume);
btnScreen.addEventListener('click', fullScreen);
btnStart.addEventListener('click', playVideo);
document.addEventListener('keydown', whatKey);

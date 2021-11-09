const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// 更新播放、暂停视频
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// 更新播放、暂停的 icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// 更新 progress & timestamp
function updaeProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let minute = Math.floor(video.currentTime / 60);
  let second = Math.floor(video.currentTime % 60);
  if (minute < 10) {
    minute = '0' + String(minute);
  }
  if (second < 10) {
    second = '0' + String(second);
  }
  timestamp.innerHTML = `${minute}:${second}`;
}

// 设置视频进度
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// 停止播放视频
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// 事件监听
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updaeProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

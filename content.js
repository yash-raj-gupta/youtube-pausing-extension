let isActive = true;

function handleVisibilityChange() {
  if (isActive) {
    const videos = document.querySelectorAll('video');
    const youtubePlayer = document.querySelector('.html5-video-player');

    if (document.hidden) {
      videos.forEach(video => video.pause());
      if (youtubePlayer && youtubePlayer.pauseVideo) {
        youtubePlayer.pauseVideo();
      }
    } else {
      videos.forEach(video => video.play());
      if (youtubePlayer && youtubePlayer.playVideo) {
        youtubePlayer.playVideo();
      }
    }
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.isActive !== undefined) {
    isActive = message.isActive;
  }
});

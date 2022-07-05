

var labels = [];
var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  barGap: 2,
  barHeight: 3,
  barWidth: 3,
  barRadius: 2,
  plugins: [
    WaveSurfer.regions.create({}),
    WaveSurfer.timeline.create({
      container: '#timeline',
      notchPercentHeight: 40,
      primaryColor: '#444',
      primaryFontColor: '#444'
    })
  ]
});
// wavesurfer.load(`data:audio/x-wav;base64,${base64String}`);
wavesurfer.on('ready', function () {
  wavesurfer.play();
});
wavesurfer.on('play', function () {
  document.getElementById('ppb').innerHTML = 'Pause';
});
wavesurfer.on('pause', function () {
  document.getElementById('ppb').innerHTML = 'Play';
});
// REGIONS
var re = wavesurfer.addRegion({
  start: 0,
  end: 26.622,
  color: '#ffd70033',
  resize: false,
  drag: false
});
var re = wavesurfer.addRegion({
  start: 28.962,
  end: 33.246,
  color: '#ffd70033',
  resize: false,
  drag: false
});
var re = wavesurfer.addRegion({
  start: 33.474,
  end: 37.278,
  color: '#ffd70033',
  resize: false,
  drag: false
});
var re = wavesurfer.addRegion({
  start: 37.506,
  end: 42.462,
  color: '#ffd70033',
  resize: false,
  drag: false
});
var re = wavesurfer.addRegion({
  start: 42.786,
  end: 47.07,
  color: '#ffd70033',
  resize: false,
  drag: false
});
var re = wavesurfer.addRegion({
  start: 47.298,
  end: 60.606,
  color: '#ffd70033',
  resize: false,
  drag: false
});
/**========= */
document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    play();
  }
});
function play() {
  wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
  console.log(wavesurfer.getCurrentTime());
}
wavesurfer.drawer.on('click', function (e) {
  console.log(wavesurfer.getCurrentTime());
});

// 持續監控目前時間
wavesurfer.on('audioprocess', function () {
  if (wavesurfer.isPlaying()) {
    const totalTime = wavesurfer.getDuration();
    const  currentTime = wavesurfer.getCurrentTime();
    const  remainingTime = totalTime - currentTime;

    document.getElementById('time-total').innerText = `總時間：${totalTime.toFixed(1)}`;
    document.getElementById('time-current').innerText = `現在時間：${currentTime.toFixed(1)}`;
    document.getElementById('time-remaining').innerText = `剩餘時間：${remainingTime.toFixed(1)}`;
  }
});

const openFile = function (event) {
  const input = event.target;
  const reader = new FileReader();

  reader.onload = function () {
    const arrayBuffer = reader.result;
    const base64str = btoa(arrayBuffer);
    wavesurfer.load(`data:audio/wav;base64,${base64str}`);
  };

  reader.readAsBinaryString(input.files[0]);
};

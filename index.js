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
}

// function send() {
//   const audioFile = document.getElementById('audioFile').files[0];

//   var reader = new FileReader();
//   reader.onload = function () {
//     var arrayBuffer = reader.result;

//     var base64str = btoa(arrayBuffer);
//     wavesurfer.load(`data:audio/wav;base64,${base64str}`);
//     //   document.getElementById("base64textarea").value  = 'data:audio/wav;base64,' + base64str;
//   };

//   reader.readAsBinaryString(audioFile);
// }

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

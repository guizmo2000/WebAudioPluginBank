//Including: record, multi-channel, newstrack and download function

var userMediaStream;
var constraints = { audio: true };

navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);
  
  function gotStream(stream) {
    userMediaStream = stream;
    playlist.initRecorder(userMediaStream);
    $(".btn-record").removeClass("disabled");
  }
  
  function logError(err) {
    console.error(err);
  }
  
  if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia(constraints)
    .then(gotStream)
    .catch(logError);
  } else if (navigator.getUserMedia && 'MediaRecorder' in window) {
    navigator.getUserMedia(
      constraints,
      gotStream,
      logError
    );
  }
  
var playlist = WaveformPlaylist.init({
    samplesPerPixel: 9000,
    zoomLevels: [1000, 5000, 9000],
    waveHeight: 100,
    container: document.getElementById("playlist"),
    timescale: true,
    state: 'cursor',
    mono:true,
    colors: {
      waveOutlineColor: '#E0EFF1',
      timeColor: 'grey',
      fadeColor: 'black'
    },
    controls: {
      show: true, //whether or not to include the track controls
      width: 200 //width of controls in pixels
    }
      
    
  });

  playlist.initExporter(); //initialize the WAV exporter.

  
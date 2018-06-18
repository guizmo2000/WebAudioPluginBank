var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: 'cursor',
  colors: {
    waveOutlineColor: '#E0EFF1'
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200 //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000]
});

playlist.load([
  {
    "src": "./waveform-playlist/dist/waveform-playlist/media/audio/BasketCaseGreendayriffDI.mp3",
    "name": "Guitar",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "./waveform-playlist/dist/waveform-playlist/media/audio/Vocals30.mp3",
    "name": "Vocal",
    "gain": 0.05,
  },
  {
    "src": "./waveform-playlist/dist/waveform-playlist/media/audio/PianoSynth30.mp3",
    "name": "Piano",
    "gain": 0.05,
  },
]).then(function() {
  //can do stuff with the playlist.
});

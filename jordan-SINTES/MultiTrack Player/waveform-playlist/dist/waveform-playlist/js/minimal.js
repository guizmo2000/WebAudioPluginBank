var playlist = WaveformPlaylist.init({
  container: document.getElementById("playlist")
});

playlist.load([
  {
    "src": "./waveform-playlist/dist/waveform-playlist/media/audio/BasketCaseGreendayriffDI.mp3"
  }
]).then(function() {
  //can do stuff with the playlist.
});

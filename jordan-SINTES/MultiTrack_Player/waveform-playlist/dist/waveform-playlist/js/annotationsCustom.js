var notes = [
    {
     "begin": "0.000", 
     "children": [], 
     "end": "13", 
     "id": "intro", 
     "language": "eng", 
     "lines": [
      "*intro*"
     ]
    }, 
    {
     "begin": "13", 
     "children": [], 
     "end": "32", 
     "id": "verse1.pt1", 
     "language": "eng", 
     "lines": [
      "Short steps, deep breath, Everything is alright, Chin up, I can't, Step into the spotlight."
     ]
    },
    {
        "begin": "32", 
        "children": [], 
        "end": "50", 
        "id": "verse1.pt2", 
        "language": "eng", 
        "lines": [
         "She said, I'm sad, Somehow without any words I just stood there Searching for an answer"
        ]
    },
    {
        "begin": "50", 
        "children": [], 
        "end": "67", 
        "id": "pre-refrain", 
        "language": "eng", 
        "lines": [
         "When this world is no more, The moon is all we'll see, I'll ask you to fly away with me"
        ]
    },
    {
        "begin": "67", 
        "children": [], 
        "end": "90", 
        "id": "refrain", 
        "language": "eng", 
        "lines": [
         "Until the stars all fall down, They empty from the sky, But I don't mind, If you're with me, then everything's alright"
        ]
    }
  ];
  
  var actions = [
    {
      class: 'fa.fa-minus',
      title: 'Reduce annotation end by 0.010s',
      action: (annotation, i, annotations, opts) => {
        var next;
        var delta = 0.010;
        annotation.end -= delta;
  
        if (opts.linkEndpoints) {
          next = annotations[i + 1];
          next && (next.start -= delta);
        }
      }
    },
    {
      class: 'fa.fa-plus',
      title: 'Increase annotation end by 0.010s',
      action: (annotation, i, annotations, opts) => {
        var next;
        var delta = 0.010;
        annotation.end += delta;
  
        if (opts.linkEndpoints) {
          next = annotations[i + 1];
          next && (next.start += delta);
        }
      }
    },
    {
      class: 'fa.fa-scissors',
      title: 'Split annotation in half',
      action: (annotation, i, annotations) => {
        const halfDuration = (annotation.end - annotation.start) / 2;
  
        annotations.splice(i + 1, 0, {
          id: 'test',
          start: annotation.end - halfDuration,
          end: annotation.end,
          lines: ['----'],
          lang: 'en',
        });
  
        annotation.end = annotation.start + halfDuration;
      }
    },
    {
      class: 'fa.fa-trash',
      title: 'Delete annotation',
      action: (annotation, i, annotations) => {
        annotations.splice(i, 1);
      }
    }
  ];
  
  var playlist = WaveformPlaylist.init({
    container: document.getElementById("playlist"),
    timescale: true,
    state: 'select',
    samplesPerPixel: 1024,
    colors: {
      waveOutlineColor: '#E0EFF1',
      timeColor: 'grey',
      fadeColor: 'black'
    },
    annotationList: {
      annotations: notes,
      controls: actions,
      editable: true,
      isContinuousPlay: false,
      linkEndpoints: true
    }
  });
  
  playlist.load([
    {
      src: "./waveform-playlist/dist/waveform-playlist/media/audio/test.wav"
    }
  ]).then(function() {
    //can do stuff with the playlist.
  });
  
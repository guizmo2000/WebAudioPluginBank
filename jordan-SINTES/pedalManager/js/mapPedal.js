function SelectMidi(n) {
    this._root.querySelector('#midiport').selectedIndex = n + 1;
    this.currentPort = n;
    
  }

function InitMidi() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(
        (access) => {
          console.log("====> MIDI ready.");
          setTimeout(() => {
            var it = access.inputs.values();
            for (var i = it.next(); !i.done; i = it.next()) {
              var e = document.createElement("option");
              e.innerHTML = i.value.name;
              this._root.querySelector('#midiport').appendChild(e);
              this.midiPort.push(i.value);
             
            }
            if (this.midiPort.length > 0) this.SelectMidi(this.midiPort.length - 1);
          }, 10);
        }, () => {
          console.log("MIDI is not available.");
        }
      );
    }
    webAudioControlsMidiManager.addMidiListener(event => {
      var note = event.note;
      var data = event.data;
      var channel = data[0];
      var controlNumber = data[1];
      var value = data[2];
      if (channel != 248) {
        console.log("Midi event hook: data:[" + data + "] channel:" + data[0] + " cc:" + controlNumber + " value:" + value);
        
        var sound =document.getElementById("sound");
        var pedal1=document.getElementById("pedal1");
        var pedal2=document.getElementById("pedal2");
        var pedal3=document.getElementById("pedal3");
        var pedal4=document.getElementById("pedal4");
        var pedal5=document.getElementById("pedal5");
        var pedal6=document.getElementById("pedal6");
        var pedal7=document.getElementById("pedal7");
        var pedal8=document.getElementById("pedal8");
        var pedal9=document.getElementById("pedal9");
        var pedal10=document.getElementById("pedal10");
       
        function clearAll(){
          pedal1.setAttribute('style', 'background:red;');
          pedal2.setAttribute('style', 'background:red;');
          pedal3.setAttribute('style', 'background:red;');
          pedal4.setAttribute('style', 'background:red;');
          pedal5.setAttribute('style', 'background:red;');
          pedal6.setAttribute('style', 'background:red;');
          pedal7.setAttribute('style', 'background:red;');
          pedal8.setAttribute('style', 'background:red;');
          pedal9.setAttribute('style', 'background:red;');
          pedal10.setAttribute('style', 'background:red;');
        }
        switch(controlNumber){  
          case 20:
            clearAll();
            pedal1.setAttribute('style', 'background:green; ');
            break;
          case 21:
            clearAll();
            pedal2.setAttribute('style', 'background:green; ');
            break;
          case 22:
            clearAll();
            pedal3.setAttribute('style', 'background:green; ');
            break;
          case 23:
            clearAll();
            pedal4.setAttribute('style', 'background:green; ');
            break;
          case 24:
            clearAll();
            pedal5.setAttribute('style', 'background:green; ');
            break;
          case 25:
            clearAll();
            pedal6.setAttribute('style', 'background:green; ');
            break;
          case 26:
            clearAll();  
            pedal7.setAttribute('style', 'background:green; ');
            break;
          case 27:
          if(data[0]==176){
            sound.innerHTML=value;
          }
          else{
            clearAll();
            pedal8.setAttribute('style', 'background:green; ');
          }
            break;
          case 28:
            clearAll();
            pedal9.setAttribute('style', 'background:green; ');
            break;
          case 29:
            clearAll();
            pedal10.setAttribute('style', 'background:green; ');
            break;
        }
      }
   });
}

window.onload=InitMidi;



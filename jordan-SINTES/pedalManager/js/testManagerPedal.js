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
        }
        
        
        var bank01=document.querySelector('#bank01');
        var bank02=document.querySelector('#bank02');
        var bank03=document.querySelector('#bank03');
        var bank04=document.querySelector('#bank04');
        var bank05=document.querySelector('#bank05');

        var button6=document.querySelector('#button6');
        var button7=document.querySelector('#button7');
        var button8=document.querySelector('#button8');
        var button9=document.querySelector('#button9');
        var button10=document.querySelector('#button10');

        var play=document.querySelector("#play");
        var pause=document.querySelector("#pause");
        var stop=document.querySelector("#stop");
        var record=document.querySelector("#record");
        var clear=document.querySelector("#clear");

        var delay=document.querySelector("#delay");
        var chorus=document.querySelector("#chorus");
        var overdrive=document.querySelector("#overdrive");
        var analyse=document.querySelector("#analyse");
        var faust=document.querySelector("#faust");
        
        var volume=document.querySelector("#volume");
        
        function clearAll(){

          button6.setAttribute('id', 'button6'); button6.setAttribute('style', 'background:grey');
          button7.setAttribute('id', 'button7'); button7.setAttribute('style', 'background:grey');
          button8.setAttribute('id', 'button8'); button8.setAttribute('style', 'background:grey');
          button9.setAttribute('id', 'button9'); button9.setAttribute('style', 'background:grey');
          button10.setAttribute('id', 'button10'); button10.setAttribute('style', 'background:grey');

          bank01.setAttribute('style', 'background:grey');
          bank02.setAttribute('style', 'background:grey');
          bank03.setAttribute('style', 'background:grey');
          bank04.setAttribute('style', 'background:grey');
          bank05.setAttribute('style', 'background:grey');

          play.setAttribute('style', 'background:grey;');
          pause.setAttribute('style', 'background:grey;');
          stop.setAttribute('style', 'background:grey;');
          record.setAttribute('style', 'background:grey;');
          clear.setAttribute('style', 'background:grey;');

          delay.setAttribute('style', 'background:grey;');
          chorus.setAttribute('style', 'background:grey;');
          overdrive.setAttribute('style', 'background:grey;');
          analyse.setAttribute('style', 'background:grey;');
          faust.setAttribute('style', 'background:grey;');
        }
      

        if(controlNumber==00){
          
          button6.setAttribute('id', 'preset1');
          button7.setAttribute('id', 'preset2');
          button8.setAttribute('id', 'preset3');
          button9.setAttribute('id', 'preset4');
          button10.setAttribute('id', 'preset5');

          button6.innerHTML="Preset 1"
          button7.innerHTML="Preset 2"
          button8.innerHTML="Preset 3"
          button9.innerHTML="Preset 4"
          button10.innerHTML="Preset 5"
          
          
        }

        else if(controlNumber==01){
          button6.setAttribute('id', 'preset6');
          button7.setAttribute('id', 'preset7');
          button8.setAttribute('id', 'preset8');
          button9.setAttribute('id', 'preset9');
          button10.setAttribute('id', 'preset10');
          
          button6.innerHTML="Preset 6"
          button7.innerHTML="Preset 7"
          button8.innerHTML="Preset 8"
          button9.innerHTML="Preset 9"
          button10.innerHTML="Preset 10"
          
          
        }

        else if(controlNumber==02){
          button6.innerHTML="Preset 11"
          button7.innerHTML="Preset 12"
          button8.innerHTML="Preset 13"
          button9.innerHTML="Preset 14"
          button10.innerHTML="Preset 15"
          
          button6.setAttribute('id', 'preset11');
          button7.setAttribute('id', 'preset12');
          button8.setAttribute('id', 'preset13');
          button9.setAttribute('id', 'preset14');
          button10.setAttribute('id', 'preset15');
        }

        else if(controlNumber==03){
          button6.innerHTML="Preset 16"
          button7.innerHTML="Preset 17"
          button8.innerHTML="Preset 18"
          button9.innerHTML="Preset 19"
          button10.innerHTML="Preset 20"
          
          button6.setAttribute('id', 'preset16');
          button7.setAttribute('id', 'preset17');
          button8.setAttribute('id', 'preset18');
          button9.setAttribute('id', 'preset19');
          button10.setAttribute('id', 'preset20');
        }
        
        else if(controlNumber==04){
          button6.innerHTML="Preset 21"
          button7.innerHTML="Preset 22"
          button8.innerHTML="Preset 23"
          button9.innerHTML="Preset 24"
          button10.innerHTML="Preset 25"
          
          button6.setAttribute('id', 'preset21');
          button7.setAttribute('id', 'preset22');
          button8.setAttribute('id', 'preset23');
          button9.setAttribute('id', 'preset24');
          button10.setAttribute('id', 'preset25');
        }
     
        switch(controlNumber){  
          case 00:
            clearAll();
            bank01.setAttribute('style', 'background:green; ');
            break;
          case 01:
            clearAll();
            bank02.setAttribute('style', 'background:green; ');
            break;
          case 02:
            clearAll();
            bank03.setAttribute('style', 'background:green; ');
            break;
          case 03:
            clearAll();
            bank04.setAttribute('style', 'background:green; ');
            break;
          case 04:
            clearAll();
            bank05.setAttribute('style', 'background:green; ');
            break;
          case 05:
            clearAll();
            button6.setAttribute('style', 'background:green; ');
            break;
          case 06:
            clearAll();  
            button7.setAttribute('style', 'background:green; ');
            break;
          case 07:
            clearAll();
            button8.setAttribute('style', 'background:green; ');
            break;
          case 08:
            clearAll();
            button9.setAttribute('style', 'background:green; ');
            break;
          case 09:
            clearAll();
            button10.setAttribute('style', 'background:green; ');
            break;
          case 10:
            clearAll();
            play.setAttribute('style', 'background:green; ');
            break;
          case 11:
            clearAll();
            pause.setAttribute('style', 'background:green; ');
            break;
          case 12:
            clearAll();
            stop.setAttribute('style', 'background:green; ');
            break;
          case 13:
            clearAll();
            record.setAttribute('style', 'background:green; ');
            break;
          case 14:
            clearAll();
            clear.setAttribute('style', 'background:green; ');
            break;
          case 15:
            clearAll();
            delay.setAttribute('style', 'background:green; ');
            break;
          case 16:
            clearAll();  
            chorus.setAttribute('style', 'background:green; ');
            break;
          case 17:
            clearAll();
            overdrive.setAttribute('style', 'background:green; ');
            break;
          case 18:
            clearAll();
            analyse.setAttribute('style', 'background:green; ');
            break;
          case 19:
            clearAll();
            faust.setAttribute('style', 'background:green; ');
            break;
          case 27:
            volume.innerHTML=value;
        }
          
    
    });
}

window.onload=InitMidi;



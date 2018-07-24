/*  ################################## Minilogue emulation ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/

window.Minilogue = class Minilogue extends WebAudioPluginCompositeNode {

  constructor(ctx, URL, options) {
    /*    ################     API PROPERTIES    ###############   */
    super(ctx, URL, options)

    // fields about structure
    this.state;
    // to controle the number of notes played simultanely
    this.playedvoices = [];
    this.voices = [];
    parent = this;
    // max number of voices, depends to "voice-mode"
    this.maxVoices = 4;


    // assign manually the params which does not fit the defaultvalue/max/min schema
    this.params = { "wave1": "sawtooth", "status": "disable", "wave2": "sawtooth", "lfodest": "cutoff" };

    // P3 : Json descriptor
    this.addParam({ name: 'lfoint', defaultValue: 20, minValue: 1, maxValue: 1000 });
    this.addParam({ name: 'lforate', defaultValue: 0, minValue: 0, maxValue: 20 });
    this.addParam({ name: 'mastergain', defaultValue: 5, minValue: 0, maxValue: 10 });
    this.addParam({ name: 'resonance', defaultValue: 0.1, minValue: 0, maxValue: 30 });
    this.addParam({ name: 'lowpass', defaultValue: 2000, minValue: 30, maxValue: 22050 });
    this.addParam({ name: 'highpass', defaultValue: 30, minValue: 30, maxValue: 22050 });
    this.addParam({ name: 'feedback', defaultValue: 0.5, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'time', defaultValue: 0.5, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'mix', defaultValue: 0.5, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'pitch1', defaultValue: 1, minValue: 0.5, maxValue: 2 });
    this.addParam({ name: 'pitch2', defaultValue: 1, minValue: 0.5, maxValue: 2 });
    this.addParam({ name: 'osc1gain', minValue: 0, maxValue: 3, defaultValue: 3 });
    this.addParam({ name: 'osc2gain', defaultValue: 3, minValue: 0, maxValue: 3 });
    this.addParam({ name: 'osc1shape', defaultValue: 0.5, minValue: 0, maxValue: 100 });
    this.addParam({ name: 'osc2shape', defaultValue: 0.5, minValue: 0, maxValue: 100 });
    this.addParam({ name: 'ampattack', defaultValue: 0.001, minValue: 0.001, maxValue: 5 });
    this.addParam({ name: 'ampdecay', defaultValue: 1, minValue: 0.001, maxValue: 5 });
    this.addParam({ name: 'ampsustain', defaultValue: 0.5, minValue: 0.001, maxValue: 1 });
    this.addParam({ name: 'amprelease', defaultValue: 0.001, minValue: 0.001, maxValue: 5 });
    this.addParam({ name: 'egattack', defaultValue: 0.5, minValue: 0.001, maxValue: 5 });
    this.addParam({ name: 'egdecay', defaultValue: 1, minValue: 0.001, maxValue: 5 });
    this.addParam({ name: 'egsustain', defaultValue: 0.5, minValue: 0.001, maxValue: 1 });
    this.addParam({ name: 'egrelease', defaultValue: 1, minValue: 0.001, maxValue: 5 });
    this.addParam({ name: 'osc1Octave', defaultValue: 3, minValue: 1, maxValue: 5 });
    this.addParam({ name: 'osc2Octave', defaultValue: 3, minValue: 1, maxValue: 5 });
    this.addParam({ name: 'noise', defaultValue: 0.1, minValue: 0.1, maxValue: 3 });
    this.addParam({ name: 'ringmodulation', defaultValue: 0, minValue: 0, maxValue: 1 });



    // SDK behavior overriding (for voices schema)
    this.setup();
  }

  /*    ################     API METHODS    ###############   */

  // Override the inputs number
  get numberOfInputs() {
    return 0;
  }

  // Override the param set management
  setParam(key, value) {
    console.log(key, value);
    try {
      this[key] = (value);
    } catch (error) {

      console.log(error)
    }
  }


  // Override Setup actions
  setup() {
    console.log("setup");
    this.ppdelay = new Delay(parent, this.context);
    this.createIO();
    this.normalize = this.context.createGain();
    this.normalize.connect(this._output);
    this.gainforAnalyse = this.context.createGain();
    this.gainforAnalyse.gain.value = 3;
    this.analyser = this.context.createAnalyser();
    this.gainforAnalyse.connect(this.analyser);

  }

  /*  #########  Personnal code for the web audio graph  #########   */

  createIO() {
    this.inputs.push(this._input);
    this.outputs.push(this._output);
  }

  setInitialParamValues() {
    /*
     * set default value for parameters and assign it to the web audio nodes
     */
    this.master = this.params.mastergain;
    this.lowpass = this.params.lowpass;
    this.resonance = this.params.resonance;
    this.highpass = this.params.highpass;
    this.osc1pitch = this.params.pitch1;
    this.osc2pitch = this.params.pitch2;
    this.osc1gain = this.params.osc1gain;
    this.osc2gain = this.params.osc2gain;
    this.osc1shape = this.params.osc1shape;
    this.osc2shape = this.params.osc2shape;
    this.lforate = this.params.lforate;
    this.lfoint = this.params.lfoint;
    this.feedback = this.params.feedback;
    this.time = this.params.time;
    this.mix = this.params.mix;
    this.ampattack = this.params.ampattack;
    this.ampdecay = this.params.ampdecay;
    this.ampsustain = this.params.ampsustain;
    this.amprelease = this.params.amprelease;
    // this.egattack = this.params.egattack;
    // this.egdecay = this.params.egdecay;
    // this.egsustain = this.params.egsustain;
    // this.egrelease = this.params.egrelease;
    this.osc1octave = this.params.osc1Octave;
    this.osc2octave = this.params.osc2Octave;
    this.noise = this.params.noise;
    // this.ringmodulation = this.params.ringmodulation
    this.wave1 = this.params.wave1;
    this.wave2 = this.params.wave2;

  }


  /**
   * Called when keyboard down / click / midi controlled
   * @param {Int} key 
   */
  noteOn(key) {
    // The voices table test if the same note is not already played
    if (this.voices[key] == null) {
      // we block at 4 voices
      if (this.playedvoices.length == this.maxVoices) {
        this.killNote(this.playedvoices[0]);
        this.playedvoices.shift();
      }
      this.playedvoices.push(key);
      // The params are initiated to have the latest values
      this.voices[key] = new Voice(this.context, key, parent);
      // The voice is assigned at it's range in the voice table
      this.setInitialParamValues();
      // wire the voices graph with the persistant one
      this.voices[key].amp.connect(this._output);
      this.voices[key].amp.connect(this.gainforAnalyse);
      // active the ADSR node
      this.voices[key].ampEnveloppe.gateOn();
      // connect to normalisation 
      if (this.params.status == "disable") this.voices[key].amp.connect(this.normalize);
      else if (this.params.status == "enable") {
        this.ppdelay.dryGainNode.gain.value = 0.1;
        this.ppdelay.wetGainNode.gain.value = 1;
        this.voices[key].amp.connect(this.ppdelay.feedbackGainNode);
        this.voices[key].amp.connect(this.ppdelay.dryGainNode);
      }

    } else {
      this.killNote(key);
      this.noteOn(key);
    }
    // this.normalizeGain();

  }

  noteOff(key) {
    if (this.voices[key] != null) {
      // the voice is pull off the playedvoice array when noteoff
      this.playedvoices.splice(this.playedvoices.indexOf(key));
      this.voices[key].ampEnveloppe.gateOff();
      // Shut off the note playing and clear it 


    }
  }

  killNote(key) {
    console.log("kill"+key)
    this.voices[key].osc1.stop();
    this.voices[key].osc2.stop();
    this.voices[key].lfo.stop();
    this.voices[key].whitenoise.bufferSource.stop(this.context.currentTime);
    delete this.voices[key];
    this.voices[key] = null;
  }

  normalizeGain() {
    this.normalize.gain.setValueAtTime(1 / this.playedvoices.length, this.context.currentTime);
  }


  //------------------------------------------------ Setter Part ----------------------------------------------------


  /*
   * This part does the link between nodes and params. It makes possible the new voices to be set up and the voices to be updatable in real time
   */

  set noise(_noise) {
    this.params.noise = _noise;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].whitenoiseGain.gain.setValueAtTime(_noise / 100, this.context.currentTime);
    }
  }

  set resonance(_resonance) {
    this.params.resonance = _resonance;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].lowPassfilter.Q.setValueAtTime(_resonance, this.context.currentTime);
    }
  }
  set master(_master) {
    this.params.mastergain = _master;
    this._output.gain.setValueAtTime(_master, this.context.currentTime);
  }
  set lowpass(_cutoff) {
    this.params.lowpass = _cutoff;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].lowPassfilter.frequency.setValueAtTime(_cutoff, this.context.currentTime);
    }
  }
  set highpass(_cutoff) {
    this.params.highpass = _cutoff;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].highpassfilter.frequency.setValueAtTime(_cutoff, this.context.currentTime);
    }
  }
  set osc1gain(_gain) {
    this.params.osc1gain = _gain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].gainOsc1.gain.setValueAtTime(_gain / 100, this.context.currentTime);

    }
  }
  set osc2gain(_gain) {
    this.params.osc2gain = _gain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].gainOsc2.gain.setValueAtTime(_gain / 100, this.context.currentTime);
    }
  }
  set osc1pitch(_pitch) {
    this.params.pitch1 = _pitch;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].osc1.frequency.setValueAtTime(this.voices[voice].basefrequency1 * (_pitch), this.context.currentTime);
    }
  }
  set osc2pitch(_pitch) {
    this.params.pitch2 = _pitch;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].osc2.frequency.setValueAtTime(this.voices[voice].basefrequency2 * (_pitch), this.context.currentTime);
    }
  }
  set lforate(_rate) {
    this.params.lforate = _rate;

    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].lfo.frequency.setValueAtTime(_rate, this.context.currentTime);
    }
  }
  set lfoint(_int) {
    this.params.lfoint = _int;

    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].gainLfo.gain.setValueAtTime(_int, this.context.currentTime);
    }
  }

  set osc1shape(_gain) {
    this.params.osc1shape = _gain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].wshape1.curve = this.getDistortionCurve(_gain / 2);
    }
  }

  set osc2shape(_gain) {
    this.params.osc2shape = _gain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].wshape2.curve = this.getDistortionCurve(_gain / 2);
    }
  }

  set time(_time) {

    this.params.time = _time;
    this.ppdelay.delayNodeLeft.delayTime.setValueAtTime(_time, this.context.currentTime);
    this.ppdelay.delayNodeRight.delayTime.setValueAtTime(_time, this.context.currentTime);

  }

  set feedback(_feedback) {
    this.params.feedback = _feedback;
    this.ppdelay.feedbackGainNode.gain.setValueAtTime(_feedback, this.context.currentTime);

  }

  set mix(_mix) {
    if (_mix < this._descriptor.mix.max && _mix > this._descriptor.mix.min) this.params.mix = _mix;
    this.ppdelay.dryGainNode.gain.setValueAtTime(this.getDryLevel(this.params.mix), this.context.currentTime);
    this.ppdelay.wetGainNode.gain.setValueAtTime(this.getWetLevel(this.params.mix), this.context.currentTime);

  }

  set ampattack(_attack) {
    this.params.ampattack = _attack;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.attackTime = _attack;

    }
  }
  set ampdecay(_decay) {
    this.params.ampdecay = _decay;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.decayTime = _decay;
    }
  }
  set ampsustain(_sustain) {
    this.params.ampsustain = _sustain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.sustainLevel = _sustain;
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack

    }
  }
  set amprelease(_release) {
    this.params.amprelease = _release;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.releaseTime = _release;

    }
  }


  set egattack(_attack) {
    this.params.egattack = _attack;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].enveloppeGenerator.attackTime = _attack;
      if (this.voices[voice]) console.log(this.voices[voice].osc2.detune.value);

    }
  }
  set egdecay(_decay) {
    this.params.egdecay = _decay;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].enveloppeGenerator.decayTime = _decay;
      if (this.voices[voice]) console.log(this.voices[voice].osc2.detune.value);

    }
  }
  set egsustain(_sustain) {
    this.params.egsustain = _sustain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].enveloppeGenerator.sustainLevel = _sustain;
      if (this.voices[voice]) console.log(this.voices[voice].osc2.detune.value);


    }
  }
  set egrelease(_release) {
    this.params.egrelease = _release;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].enveloppeGenerator.releaseTime = _release;
      if (this.voices[voice]) console.log(this.voices[voice].osc2.detune.value);


    }
  }


  set osc1octave(_octave) {
    this.params.osc1Octave = _octave;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) {
        this.voices[voice].osc1currentOctave = _octave;
        this.voices[voice].basefrequency1 = 440 * Math.pow(2, ((this.voices[voice].getkey() + 12 * (_octave - 3)) - 69) / 12);
        this.voices[voice].osc1.frequency.setValueAtTime(this.voices[voice].basefrequency1, this.context.currentTime);
      }

    }

  }
  set osc2octave(_octave) {
    this.params.osc2Octave = _octave;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) {
        this.voices[voice].osc2currentOctave = _octave;
        this.voices[voice].basefrequency2 = 440 * Math.pow(2, ((this.voices[voice].getkey() + 12 * (_octave - 3)) - 69) / 12);
        this.voices[voice].osc2.frequency.setValueAtTime(this.voices[voice].basefrequency2, this.context.currentTime);
      }
    }

  }

  set wave1(_sig) {
    switch (_sig) {
      case 2:
        this.params.wave1 = "sawtooth";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) this.voices[voice].osc1.type = "sawtooth";
        }
        break;

      case 1:
        this.params.wave1 = "triangle";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) this.voices[voice].osc1.type = "triangle";
        }
        break;

      case 0:
        this.params.wave1 = "square";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) this.voices[voice].osc1.type = "square";
        }
        break;
    }
  }

  set wave2(_sig) {
    switch (_sig) {
      case 2:
        this.params.wave2 = "sawtooth";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) this.voices[voice].osc2.type = "sawtooth";
        }
        break;

      case 1:
        this.params.wave2 = "triangle";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) this.voices[voice].osc2.type = "triangle";
        }
        break;

      case 0:
        this.params.wave2 = "square";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) this.voices[voice].osc2.type = "square";
        }
        break;
    }
  }


  set lfodest(_sig) {
    switch (_sig) {
      case 2:
        this.params.lfodest = "pitch";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) {
            this.voices[voice].gainLfo.disconnect();
            this.voices[voice].lfodestination1 = this.voices[voice].osc1.frequency;
            this.voices[voice].lfodestination2 = this.voices[voice].osc2.frequency;
            this.voices[voice].gainLfo.connect(this.voices[voice].lfodestination1);
            this.voices[voice].gainLfo.connect(this.voices[voice].lfodestination2);

          }

        }
        break;

      // TODO: how the LFO can change the wshape ?  

      // case 1:
      //   this.params.lfodest = "shape";
      //   for (let voice = 0; voice < this.voices.length; voice++) {
      //     if (this.voices[voice]) {
      //       this.voices[voice].gainLfo.disconnect();
      //       this.voices[voice].wshape1.curve = this.getDistortionCurve(this.voices[voice].lfo.frequency);
      //       this.voices[voice].wshape2.curve = this.getDistortionCurve(this.voices[voice].lfo.frequency);
      //       this.voices[voice].lfodestination1 = this.voices[voice].gainOsc1;
      //       this.voices[voice].lfodestination2 = this.voices[voice].gainOsc2;
      //       this.voices[voice].gainLfo.connect(this.voices[voice].lfodestination2);
      //       this.voices[voice].gainLfo.connect(this.voices[voice].lfodestination1);
      //     }

      //   }
      //   break;

      case 0:
        this.params.lfodest = "cutoff";
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) {
            this.voices[voice].gainLfo.disconnect();
            this.voices[voice].lfodestination1 = this.voices[voice].lowPassfilter.frequency;
            this.voices[voice].gainLfo.connect(this.voices[voice].lfodestination1);
          }

        }
        break;
    }
  }
  set delay(_sig) {
    this.params.status = _sig
  }
  set ringmodulation(_sig) {
    this.params.ringmodulation = _sig;
    switch (_sig) {
      case 0:
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) {
            //this.voices[voice].wshape2.connect(this.gainOsc2);

          }

        }

        break;

      case 1:
        for (let voice = 0; voice < this.voices.length; voice++) {
          if (this.voices[voice]) {
            this.voices[voice].wshape2.disconnect(this.voices[voice].gainOsc2);
            this.voices[voice].osc2.connect(this.voices[voice].ringGain.gain);
            this.voices[voice].ringGain.connect(this.voices[voice].gainOsc2);

          }

        }
        break;
    }
  }


  //---------------------------------------------------- Tool Part -----------------------------------------------

  // Some standard signal processing or coding tools.


  isNumber(arg) {
    return toString.call(arg) === '[object Number]' && arg === +arg;
  }

  getDryLevel(mix) {
    if (!this.isNumber(mix) || mix > 1 || mix < 0)
      return 0;

    if (mix <= 0.5)
      return 1;

    return 1 - ((mix - 0.5) * 2);
  }

  getWetLevel(mix) {
    if (!this.isNumber(mix) || mix > 1 || mix < 0)
      return 0;

    if (mix >= 0.5)
      return 1;

    return 1 - ((0.5 - mix) * 2);
  }
  getDistortionCurve(gain) {
    var sampleRate = this.context.sampleRate;
    var curve = new Float32Array(sampleRate);
    var deg = Math.PI / 180;

    for (var i = 0; i < sampleRate; i++) {
      var x = i * 2 / sampleRate - 1;
      curve[i] = (3 + gain) * x * 20 * deg / (Math.PI + gain * Math.abs(x));
    }
    return curve;
  }

}
//------------------------------------------------Sound Processing ------------------------------------ 

//------------------------------------------------- Voice Class --------------------------------------------
/**
 * This is the heart of the synth. A Voice is the sound created when a key is pressed. it uses
 * - 2  main oscillators ans its waveshappers
 * - 2 filters
 * - ADSR Nodes
 * - One LFO
 * - One white noise
 */
class Voice {
  constructor(ctx, key, parent) {
    this.context = ctx;
    this.parent = parent
    this.key = key;

    this.lfodestination1;
    this.lfodestination2;


    this.buildNode(this.key)
  }

  getkey() {
    return this.key;
  }


  buildNode(key) {

    this.osc1 = this.context.createOscillator();
    this.osc2 = this.context.createOscillator();

    this.osc1.type = this.parent.params.wave1;
    this.osc2.type = this.parent.params.wave2;
    this.osc1currentOctave = this.parent.params.osc1Octave;
    this.osc2currentOctave = this.parent.params.osc2Octave;



    this.basefrequency1 = 440 * Math.pow(2, ((key + 12 * (this.osc1currentOctave - 3)) - 69) / 12);
    this.basefrequency2 = 440 * Math.pow(2, ((key + 12 * (this.osc2currentOctave - 3)) - 69) / 12);
    this.osc1.frequency.setValueAtTime(this.basefrequency1, this.context.currentTime);
    this.osc2.frequency.setValueAtTime(this.basefrequency2, this.context.currentTime);


    // OSC stages
    this.whitenoise = new Noise(this.parent, this.context);
    this.lfo = this.context.createOscillator();

    this.lfo.type = "triangle";

    // Waveshapers stage
    this.wshape1 = this.context.createWaveShaper();
    this.wshape2 = this.context.createWaveShaper();


    // Filter stage
    this.lowPassfilter = this.context.createBiquadFilter();
    this.lowPassfilter.type = "lowpass";
    this.highpassfilter = this.context.createBiquadFilter();
    this.highpassfilter.type = "highpass";


    // gain stage 
    this.gainOsc1 = this.context.createGain();
    this.gainOsc2 = this.context.createGain();
    this.gainLfo = this.context.createGain();
    this.amp = this.context.createGain();
    this.enveloppeGain = this.context.createGain();
    this.whitenoiseGain = this.context.createGain();
    this.ringGain = this.context.createGain();


    //Enveloppe stage

    this.ampEnveloppe = new EnvGen(this.context, this.amp.gain, this.parent);
    this.ampEnveloppe.mode = 'ADSR';
    this.ampEnveloppe.attackTime = this.parent.params.ampattack;
    this.ampEnveloppe.decayTime = this.parent.params.ampdecay;
    this.ampEnveloppe.sustainLevel = this.parent.params.ampsustain;
    this.ampEnveloppe.releaseTime = this.parent.params.amprelease;

    this.enveloppeGenerator = new EnvGen(this.context, this.enveloppeGain.gain, this.parent);
    this.enveloppeGenerator.mode = 'ADSR';
    this.enveloppeGenerator.attackTime = this.parent.params.egattack;
    this.enveloppeGenerator.decayTime = this.parent.params.egdecay;
    this.enveloppeGenerator.sustainLevel = this.parent.params.egsustain;
    this.enveloppeGenerator.releaseTime = this.parent.params.egrelease;


    // merger
    this.oscMerger = this.context.createChannelMerger(3);

    this.osc1.connect(this.wshape1);
    this.osc2.connect(this.wshape2);
    this.wshape1.connect(this.ringGain);
    this.wshape1.connect(this.gainOsc1);
    this.wshape2.connect(this.gainOsc2);
    this.whitenoise.bufferSource.connect(this.whitenoiseGain);
    this.lfo.connect(this.gainLfo);

    //this.enveloppeGain.connect(this.lowPassfilter.frequency);

    //this.nz.bufferSource.start(this.context.currentTime);
    /*this.lowPassfilter.frequency*/

    switch (this.parent.params.lfodest) {
      case 'cutoff':
        this.lfodestination1 = this.lowPassfilter.frequency;
        this.lfodestination2 = null;
        this.gainLfo.connect(this.lfodestination1);
        break;

      // case 'shape':
      //   this.wshape1.curve = this.parent.getDistortionCurve(this.lfo.frequency);
      //   this.wshape2.curve = this.parent.getDistortionCurve(this.lfo.frequency);
      //   this.lfodestination1 = this.gainOsc1;
      //   this.lfodestination2 = this.gainOsc2;
      //   this.gainLfo.connect(this.lfodestination1);
      //   this.gainLfo.connect(this.lfodestination2);
      //   break;

      case 'pitch':
        this.lfodestination1 = this.osc1.frequency;
        this.lfodestination2 = this.osc2.frequency;
        this.gainLfo.connect(this.lfodestination1);
        this.gainLfo.connect(this.lfodestination2);
        break;
    }

    this.gainOsc1.connect(this.oscMerger, 0, 0);
    this.gainOsc1.connect(this.oscMerger, 0, 1);
    this.gainOsc2.connect(this.oscMerger, 0, 0);
    this.gainOsc2.connect(this.oscMerger, 0, 1);
    this.whitenoiseGain.connect(this.oscMerger, 0, 0);
    this.whitenoiseGain.connect(this.oscMerger, 0, 1);


    this.oscMerger.connect(this.lowPassfilter);
    this.lowPassfilter.connect(this.highpassfilter);
    this.highpassfilter.connect(this.amp);
    //this.enveloppeGain.connect(this.osc1.frequency);

    this.whitenoise.bufferSource.start(this.context.currentTime);
    this.osc1.start();
    this.osc2.start();
    this.lfo.start();

  }

}

//------------------------------------------------ White noise Generator ------------------------------------ 


class Noise {
  constructor(parent, ctx) {
    this.parent = parent;
    this.context = ctx;
    this.buildNode();
  }

  buildNode() {
    this.noiseData = new Float32Array(44100 * 5);
    this.noiseBuffer = null;
    for (var i = 0, imax = this.noiseData.length; i < imax; i++) {
      this.noiseData[i] = Math.random() * 2 - 1;
    }

    if (this.noiseBuffer === null) {
      this.noiseBuffer = this.context.createBuffer(1, this.noiseData.length, this.context.sampleRate);
      this.noiseBuffer.getChannelData(0).set(this.noiseData);
    }
    this.bufferSource = this.context.createBufferSource();

    this.bufferSource.buffer = this.noiseBuffer;
    this.bufferSource.loop = true;
  }

}

//----------------------------------------------- Stereo Delay  ------------------------------------------

/**
 * Taken from PingPongDelay audio processor
 */

class Delay {
  constructor(parent, ctx) {
    this.parent = parent;
    this.context = ctx;
    this.buildNode()
  }

  buildNode() {
    this.delayNodeLeft = this.context.createDelay();
    this.delayNodeRight = this.context.createDelay();
    this.dryGainNode = this.context.createGain();
    this.wetGainNode = this.context.createGain();
    this.feedbackGainNode = this.context.createGain();
    this.channelMerger = this.context.createChannelMerger(2);

    this.delayNodeLeft.connect(this.channelMerger, 0, 0);
    this.delayNodeRight.connect(this.channelMerger, 0, 1);
    this.feedbackGainNode.connect(this.delayNodeLeft);
    this.delayNodeRight.connect(this.feedbackGainNode);

    this.delayNodeLeft.connect(this.delayNodeRight);
    // // wet mix

    // // wet out
    this.channelMerger.connect(this.wetGainNode);


    this.wetGainNode.connect(this.parent._output);
    this.dryGainNode.connect(this.parent._output);
  }
}

//------------------------------------------------ Enveloppe generator ------------------------------------ 

// ADSR node from https://github.com/rsimmons/fastidious-envelope-generator
// Refactored in ES6



class EnvGen {
  constructor(audioContext, targetParam) {
    this._audioContext = audioContext;
    this._targetParam = targetParam;
    this.INITIAL_LEVEL = 0;
    this.ATTACK_LEVEL = 1;
    this.MODES = ['AD', 'ASR', 'ADSR'];
    // Default settings
    this._mode = 'ADSR';
    this._attackTime = 1;
    this._decayTime = 1;
    this._sustainLevel = 1;
    this._releaseTime = 1;
    this._targetParam.value = this.INITIAL_LEVEL;

    // In case there was preexisting automation on the target parameter, we reset it here to known state.
    this._targetParam.cancelScheduledValues(0);
    this._targetParam.setValueAtTime(this.INITIAL_LEVEL, 0);

    this._scheduledSegments = [{
      beginTime: 0,
      beginValue: this.INITIAL_LEVEL,
      targetValue: this.INITIAL_LEVEL,
      timeConst: 1, // doesn't matter what this is since beginValue === targetValue
    }];

    // Track info about last gate we received
    this._lastGateTime = audioContext.currentTime;
    this._lastGateState = false;
  }
  // Assert tool
  assert(v) {
    if (!v) {
      throw new Error('Assertion error');
    }
  }

  // Params
  get mode() { return this._mode }
  set mode(value) {
    if (this.MODES.indexOf(value) >= 0) {
      this.gate(false, Math.max(this._lastGateTime, this._audioContext.currentTime));
      this._mode = value;
    }
  }
  get attackTime() { return this._attackTime; }
  set attackTime(value) { if ((typeof (value) === 'number') && !isNaN(value) && (value > 0)) { this._attackTime = value; } }

  get decayTime() { return this._decayTime; }
  set decayTime(value) { if ((typeof (value) === 'number') && !isNaN(value) && (value > 0)) { this._decayTime = value; } }

  get sustainLevel() { return this._sustainLevel; }
  set sustainLevel(value) { if ((typeof (value) === 'number') && !isNaN(value) && (value >= 0) && (value <= 1)) { this._sustainLevel = value; } }


  get releaseTime() { return this._releaseTime; }
  set releaseTime(value) { if ((typeof (value) === 'number') && !isNaN(value) && (value > 0)) { this._releaseTime = value; } }

  _appendSegment(beginTime, beginValue, targetValue, timeConst) {
    this.assert(beginTime >= this._scheduledSegments[this._scheduledSegments.length - 1].beginTime); // sanity check
    // Set an anchor point for new segment to start from
    this._targetParam.setValueAtTime(beginValue, beginTime);
    // Schedule the new segment
    this._targetParam.setTargetAtTime(targetValue, beginTime, timeConst);
    this._scheduledSegments.push({
      beginTime: beginTime,
      beginValue: beginValue,
      targetValue: targetValue,
      timeConst: timeConst,
    });
  }


  // Schedule a segment that starts at the given time, which may be during or before previously scheduled segments
  _scheduleSegmentFromTime(time, targetValue, timeConst) {
    // Find what scheduled segment (if any) would be active at given time
    var activeIdx;
    for (var i = 0; i < this._scheduledSegments.length; i++) {
      if ((time >= this._scheduledSegments[i].beginTime) && ((i === (this._scheduledSegments.length - 1) || (time < this._scheduledSegments[i + 1].beginTime)))) {
        activeIdx = i;
        break;
      }
    }
    this.assert(activeIdx !== undefined); // There must always be some active segment at any (current or future) time
    var activeSeg = this._scheduledSegments[activeIdx];
    // Determine the mid-segment value at the given time
    var interruptValue = activeSeg.targetValue + (activeSeg.beginValue - activeSeg.targetValue) * Math.exp((activeSeg.beginTime - time) / activeSeg.timeConst);
    // Truncate _scheduledSegments array to end at the active segment
    this._scheduledSegments.length = activeIdx + 1;
    // Cancel all segments from the interrupt time onwward
    this._targetParam.cancelScheduledValues(time);
    // Append the new segment from the interrupted point
    this._appendSegment(time, interruptValue, targetValue, timeConst);
  };


  // Schedule a segment that starts when the last previously-scheduled segment reaches the given value threshold
  _scheduleSegmentFromValueThreshold(valueThreshold, targetValue, timeConst) {
    var lastSeg = this._scheduledSegments[this._scheduledSegments.length - 1];
    // Determine the time that the last segment will hit the given value threshold
    var interruptTime = Math.abs(Math.log((lastSeg.targetValue - valueThreshold) / (lastSeg.targetValue - lastSeg.beginValue)) * lastSeg.timeConst) + lastSeg.beginTime;
    // Append the new segment from the interrupt time
    this._appendSegment(interruptTime, valueThreshold, targetValue, timeConst);
  };

  // Cull segments from this._scheduledSegments end before beforeTime 
  _cullScheduledSegments(beforeTime) {
    for (var i = 0; i < (this._scheduledSegments.length - 1); i++) {
      // Because we only track beginTime (not endTime), we need to look one segment ahead
      if (beforeTime < this._scheduledSegments[i + 1].beginTime) {
        break;
      }
    }
    // When we exit the loop, i will be the index of the segment that should be the first one remaining
    this._scheduledSegments = this._scheduledSegments.slice(i);
    this.assert(this._scheduledSegments.length > 0); // sanity check
    this.assert(this._scheduledSegments[0].beginTime <= beforeTime); // sanity check
  };

  gate(on, time) {
    // Note the current AudioContext time
    var ct = this._audioContext.currentTime;
    // Default time parameter to current time
    time = (time === undefined) ? ct : time;
    // Gates can only have times >= the times of previously supplied gates.
    // If we receive a bad one, log a warning and ignore
    if (time < this._lastGateTime) {
      console.warn('Received gate with time earlier than a previous gate');
      return;
    }
    this._lastGateTime = time;
    this._lastGateState = on;
    // Cull scheduled segments that we are tracking that are now in the past
    this._cullScheduledSegments(ct);
    if (on) {
      // Schedule attack
      // To make an attack that reaches maximum level (1) in a finite amount of time,
      //  we aim to exponentially approach a value that is greater than 1, and then
      //  stop the attack when it reaches 1. This is how analog envgens work.
      var ATTACK_LINEARITY = 100 // Make this nearly-linear. We could expose as a parameter later on
      var attackTargetLevel = 1 / (1 - Math.exp(-this._attackTime / ATTACK_LINEARITY));
      this._scheduleSegmentFromTime(time, attackTargetLevel, ATTACK_LINEARITY);
      // Schedule whatever phase that comes after attack (decay or sustain)
      if ((this._mode === 'AD') || (this._mode === 'ADSR')) {
        // Determine target level to which we will decay
        var decayTargetLevel;
        if (this._mode === 'AD') {
          decayTargetLevel = this.INITIAL_LEVEL;
        } else {
          decayTargetLevel = this._sustainLevel;
        }
        // Schedule decay
        this._scheduleSegmentFromValueThreshold(this.ATTACK_LEVEL, decayTargetLevel, this._decayTime);
      } else if (this._mode === 'ASR') {
        // Schedule sustain
        this._scheduleSegmentFromValueThreshold(this.ATTACK_LEVEL, this.ATTACK_LEVEL, 1); // timeConst here doesn't really matter
      } else {
        this.assert(false); // invalid mode
      }
    } else {
      if (this._mode === 'AD') {
        // We ignore gate-off when in AD mode
      } else if ((this._mode === 'ASR') || (this._mode === 'ADSR')) {
        // Schedule release
        this._scheduleSegmentFromTime(time, this.INITIAL_LEVEL, this._releaseTime);
      } else {
        this.assert(false); // invalid mode
      }
    }
  };

  gateOn(time) {
    this.gate(true, time);
  };

  gateOff(time) {
    this.gate(false, time);
  };

}


window.WasabiMinilogue = class WasabiMinilogue extends WebAudioPluginFactory {

  constructor(context, baseUrl) {
    super(context, baseUrl);
  }
}

AudioContext.prototype.createWasabiminilogueCompositeNode =
  OfflineAudioContext.prototype.createWasabiminilogueCompositeNode = function (options) {
    return new Minilogue(this, options);
  };
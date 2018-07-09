/*  ################################## Minilogue emulation ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/

window.Minilogue = class Minilogue extends WebAudioPluginCompositeNode {

  constructor(ctx,URL ,options) {
    /*    ################     API PROPERTIES    ###############   */
    super(ctx,URL, options)
    this.state;
    this.voices = [];
    parent = this;

    // P2 : Json metadata
    this._metadata = {
      "name": "etev-minilogue",
      "version": 1,
      "category": "Synth",
      "type": "Audio",
      "description": "4 voices synth with filter, delay, lfo, ring modulator",
      "thumbnailImage": "https://...",
      "URLs": "https://.../doc",
      "authorInformation": "Guillaume Etevenard, i3s trainee in Nice - Sophia-Antipolis, France"
    }

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
    this.addParam({ name: 'osc2gain', defaultValue: 3, minValue: 1, maxValue: 3 });
    this.addParam({ name: 'osc1shape', defaultValue: 0.5, minValue: 0, maxValue: 50 });
    this.addParam({ name: 'osc2shape', defaultValue: 0.5, minValue: 0, maxValue: 50 });
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








    this.params = {
      lfoint: this._descriptor.lfoint.defaultValue,
      lforate: this._descriptor.lforate.defaultValue,
      highpass: this._descriptor.highpass.defaultValue,
      resonance: this._descriptor.resonance.defaultValue,
      lowpass: this._descriptor.lowpass.defaultValue,
      feedback: this._descriptor.feedback.defaultValue,
      mix: this._descriptor.mix.defaultValue,
      time: this._descriptor.time.defaultValue,
      pitch1: this._descriptor.pitch1.defaultValue,
      pitch2: this._descriptor.pitch2.defaultValue,
      osc1gain: this._descriptor.osc1gain.defaultValue,
      osc2gain: this._descriptor.osc2gain.defaultValue,
      osc1shape: this._descriptor.osc1shape.defaultValue,
      osc2shape: this._descriptor.osc2shape.defaultValue,
      mastergain: this._descriptor.mastergain.defaultValue,
      ampattack: this._descriptor.ampattack.defaultValue,
      ampdecay: this._descriptor.ampdecay.defaultValue,
      ampsustain: this._descriptor.ampsustain.defaultValue,
      amprelease: this._descriptor.amprelease.defaultValue,
      egattack: this._descriptor.egattack.defaultValue,
      egdecay: this._descriptor.egdecay.defaultValue,
      egsustain: this._descriptor.egsustain.defaultValue,
      egrelease: this._descriptor.egrelease.defaultValue,
      osc1Octave: this._descriptor.osc1Octave.defaultValue,
      osc2Octave: this._descriptor.osc2Octave.defaultValue,
      wave1: "sawtooth",
      wave2: "sawtooth",
      lfodest: "cutoff",

      status: "disable"
    }


    // p5 patchnames
    this.setup();
  }

  /*    ################     API METHODS    ###############   */

  // p9 count inputs
  get numberOfInputs() {
    return 0;
  }

  get numberOfOutputs() {
    return 1;
  }
  inputChannelCount() {
    return 1;
  }
  outputChannelCount() {
    return 1
  }
  getParam(key) {
    if (key == "time") {
      this.getTime();
    } else if (key == "feedback") {
      this.getFeedback();
    } else if (key == "mix") {
      this.getMix();
    } else {
      console.log("this parameter isn't used in Wasabi-PingpongDelay");
    }
  }

  setParam(key, value) {
    console.log(key, value);
    try {
      this[key] = (value);
    } catch (error) {

      console.log(error)
    }
  }

  // P7 state
  getState() {
    var tmp = {...this.params}
    return (tmp);
  }

  setState(data) {
    try {

      this.gui.setAttribute('state', JSON.stringify(data));
    } catch (error) {
      console.log("Gui not defined", error)
      try {
        document.querySelector('wasabi-pingpongdelay').setAttribute('state', JSON.stringify(this.params));
      } catch (error) {
        console.log(error);
      }
    }

    Object.keys(data).map(
      (elem, index) => {
        console.log(elem, data[elem]);
        this.setParam(elem, data[elem]);
      }
    )

  }


  onMidi(msg) {
    return msg;
    //web midi api ?
  }

  /*  #########  Personnal code for the web audio graph  #########   */

  setup() {
    console.log("setup");
    this.createIO();
    this.normalize = this.context.createGain();
    this.normalize.connect(this._output);
    this.ppdelay = new Delay(parent, this.context);
    this.gainforAnalyse = this.context.createGain();
    this.gainforAnalyse.gain.value = 3;
    this.analyser = this.context.createAnalyser();
    this.gainforAnalyse.connect(this.analyser);
  }

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
    this.osc2gain = this.params.osc2gain;
    this.osc1gain = this.params.osc1gain;
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

  }



  noteOn(key) {
    that = this;
    if (this.voices[key] == null) {
      this.voices[key] = new Voice(this.context, key, that);
      this.setInitialParamValues();
      this.voices[key].amp.connect(this._output);
      this.voices[key].amp.connect(this.gainforAnalyse);
      this.voices[key].ampEnveloppe.gateOn();
      if (this.params.status == "disable") this.voices[key].amp.connect(this.normalize);
      else if (this.params.status == "enable") {
        this.ppdelay.dryGainNode.gain.value = 0.1;
        this.ppdelay.wetGainNode.gain.value = 1;
        this.voices[key].amp.connect(this.ppdelay.feedbackGainNode);
        this.voices[key].amp.connect(this.ppdelay.dryGainNode);
      }

    }else{
      this.killNote(key);
      this.noteOn(key);
    }
    this.normalizeGain();

  }

  noteOff(key) {
    if (this.voices[key] != null) {
      this.voices[key].ampEnveloppe.gateOff();
      // Shut off the note playing and clear it 
     

    }
  }

  killNote(key){
    console.log("kill"+key)
     this.voices[key].osc1.stop();
      this.voices[key].osc2.stop();
      this.voices[key].lfo.stop();
      delete this.voices[key];
      this.voices[key] = null;
  }

  normalizeGain() {
    this.normalize.gain.setValueAtTime(1 / this.voices.length, this.context.currentTime);
  }


  /*
   * Getter for each param
   */

  get time() {
    return this.params.time;
  }

  get mix() {
    return this.params.mix;
  }
  get feedback() {
    return this.params.feedback;
  }
  /*
   * Setters for each param
   */

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
  set noise(_gain) {
    this.gainNoise.gain.setValueAtTime(_gain, this.context.currentTime);
  }
  set osc1shape(_gain) {
    this.params.osc1shape = _gain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].wshape1.curve = this.getDistortionCurve(this.normalize(_gain, 0, 150));
    }
  }

  set osc2shape(_gain) {
    this.params.osc2shape = _gain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].wshape2.curve = this.getDistortionCurve(this.normalize(_gain, 0, 150));
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
      //       if (this.voices[voice].gainLfo.gain.value < 2500 && this.voices[voice].gainLfo.gain.value > 50) {
      //         this.voices[voice].wshape1.curve = this.getDistortionCurve(this.normalize(this.voices[voice].gainLfo.gain / 50, 0, 150));
      //         this.voices[voice].wshape2.curve = this.getDistortionCurve(this.normalize(this.voices[voice].gainLfo.gain / 50, 0, 150));
      //       }
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



  // tools


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
  normalize(num, floor, ceil) {
    if (!this.isNumber(num) || !this.isNumber(floor) || !this.isNumber(ceil))
      return;

    return ((ceil - floor) * num) / 1 + floor;
  }

}


class Delay {
  constructor(parent, ctx) {
    this.parent = parent;
    this.context = ctx;
    this.buildNode()
  }

  buildNode() {
    // Delay stage (from stereowasabidelay)
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
    this.oscNoise = this.context.createOscillator();
    this.lfo = this.context.createOscillator();


    //this.oscNoise.type = "random";
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
    this.gainNoise = this.context.createGain();
    this.gainLfo = this.context.createGain();
    this.amp = this.context.createGain();
    this.enveloppeGain = this.context.createGain();


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
    this.wshape1.connect(this.gainOsc1);
    this.wshape2.connect(this.gainOsc2);
    this.oscNoise.connect(this.gainNoise);
    this.lfo.connect(this.gainLfo);

    //this.enveloppeGain.connect(this.lowPassfilter.frequency);


    /*this.lowPassfilter.frequency*/

    switch (this.parent.params.lfodest) {
      case 'cutoff':
        this.lfodestination1 = this.lowPassfilter.frequency;
        this.lfodestination2 = null;
        this.gainLfo.connect(this.lfodestination1);
        break;

      case 'shape':
        if (this.gainLfo.gain.value < 2500 && this.gainLfo.gain.value > 50) {
          this.wshape1.curve = this.parent.getDistortionCurve(this.parent.normalize(this.gainLfo.gain / 50, 0, 150));
          this.wshape2.curve = this.parent.getDistortionCurve(this.parent.normalize(this.gainLfo.gain / 50, 0, 150));
        }
        break;

      case 'pitch':
        this.lfodestination1 = this.osc1.frequency;
        this.lfodestination2 = this.osc2.frequency;
        this.gainLfo.connect(this.lfodestination1);
        this.gainLfo.connect(this.lfodestination2);
        break;
    }




    this.gainOsc1.connect(this.oscMerger, 0, 0);
    this.gainOsc2.connect(this.oscMerger, 0, 1);
    this.gainOsc1.connect(this.oscMerger, 0, 1);
    this.gainOsc2.connect(this.oscMerger, 0, 0);
    this.gainNoise.connect(this.oscMerger, 0, 2);

    this.oscMerger.connect(this.lowPassfilter);
    this.lowPassfilter.connect(this.highpassfilter);
    this.highpassfilter.connect(this.amp);
    //this.enveloppeGain.connect(this.osc1.frequency);

    this.osc1.start();
    this.osc2.start();
    this.lfo.start();

  }

}
// ADSR node from https://github.com/rsimmons/fastidious-envelope-generator
function assert(v) {
  if (!v) {
    throw new Error('Assertion error');
  }
}
var INITIAL_LEVEL = 0;
var ATTACK_LEVEL = 1;
function EnvGen(audioContext, targetParam, parent) {
  // Support instantiating w/o new
  if (!(this instanceof EnvGen)) {
    return new EnvGen(audioContext, targetParam);
  }

  this._audioContext = audioContext;
  this._targetParam = targetParam;

  var _this = this;

  Object.defineProperty(this, 'mode', {
    get: function () { return _this._mode; },
    set: function (value) {
      if (_this.MODES.indexOf(value) >= 0) {
        // If we're currently in a 'sustain' state, and we switched into AD mode,
        // we would get stuck in sustain state. So just to be safe, whenever mode
        // is changed we fake a gate-off signal.
        _this.gate(false, Math.max(this._lastGateTime, audioContext.currentTime));

        _this._mode = value;
      }
    }
  });

  Object.defineProperty(this, 'attackTime', {
    get: function () { return _this._attackTime; },
    set: function (value) {
      if ((typeof (value) === 'number') && !isNaN(value) && (value > 0)) {
        _this._attackTime = value;
      }
    }
  });

  Object.defineProperty(this, 'decayTime', {
    get: function () { return _this._decayTime; },
    set: function (value) {
      if ((typeof (value) === 'number') && !isNaN(value) && (value > 0)) {
        _this._decayTime = value;
      }
    }
  });

  Object.defineProperty(this, 'sustainLevel', {
    get: function () { return _this._sustainLevel; },
    set: function (value) {
      if ((typeof (value) === 'number') && !isNaN(value) && (value >= 0) && (value <= 1)) {
        _this._sustainLevel = value;
      }
    }
  });

  Object.defineProperty(this, 'releaseTime', {
    get: function () { return _this._releaseTime; },
    set: function (value) {
      if ((typeof (value) === 'number') && !isNaN(value) && (value > 0)) {
        _this._releaseTime = value;
      }
    }
  });

  // Default settings
  this._mode = 'ADSR';
  this._attackTime = 1;
  this._decayTime = 1;
  this._sustainLevel = 1;
  this._releaseTime = 1;

  this._targetParam.value = INITIAL_LEVEL;

  // In case there was preexisting automation on the target parameter, we reset it here to known state.
  this._targetParam.cancelScheduledValues(0);
  this._targetParam.setValueAtTime(INITIAL_LEVEL, 0);

  // All segments are exponential approaches to target values (setTargetAtTime)
  // Each segment has properties:
  //  beginTime
  //  beginValue
  //  targetValue
  //  timeConst: 1/abs(slope-of-log(value))
  // The _scheduledSegments array is kept in time-order, and always has at least one element.
  this._scheduledSegments = [{
    beginTime: 0,
    beginValue: INITIAL_LEVEL,
    targetValue: INITIAL_LEVEL,
    timeConst: 1, // doesn't matter what this is since beginValue === targetValue
  }];

  // Track info about last gate we received
  this._lastGateTime = audioContext.currentTime;
  this._lastGateState = false;
}

EnvGen.prototype.MODES = ['AD', 'ASR', 'ADSR'];

// Schedule a segment with the target AudioParam, and add it to our internal tracking.
// It must start after our current last segment
EnvGen.prototype._appendSegment = function (beginTime, beginValue, targetValue, timeConst) {
  assert(beginTime >= this._scheduledSegments[this._scheduledSegments.length - 1].beginTime); // sanity check

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
};

// Schedule a segment that starts at the given time, which may be during or before previously scheduled segments
EnvGen.prototype._scheduleSegmentFromTime = function (time, targetValue, timeConst) {
  // Find what scheduled segment (if any) would be active at given time
  var activeIdx;
  for (var i = 0; i < this._scheduledSegments.length; i++) {
    if ((time >= this._scheduledSegments[i].beginTime) && ((i === (this._scheduledSegments.length - 1) || (time < this._scheduledSegments[i + 1].beginTime)))) {
      activeIdx = i;
      break;
    }
  }
  assert(activeIdx !== undefined); // There must always be some active segment at any (current or future) time

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
EnvGen.prototype._scheduleSegmentFromValueThreshold = function (valueThreshold, targetValue, timeConst) {
  var lastSeg = this._scheduledSegments[this._scheduledSegments.length - 1];

  // Determine the time that the last segment will hit the given value threshold
  var interruptTime = Math.abs(Math.log((lastSeg.targetValue - valueThreshold) / (lastSeg.targetValue - lastSeg.beginValue)) * lastSeg.timeConst) + lastSeg.beginTime;

  // Append the new segment from the interrupt time
  this._appendSegment(interruptTime, valueThreshold, targetValue, timeConst);
};

// Cull segments from this._scheduledSegments end before beforeTime 
EnvGen.prototype._cullScheduledSegments = function (beforeTime) {
  for (var i = 0; i < (this._scheduledSegments.length - 1); i++) {
    // Because we only track beginTime (not endTime), we need to look one segment ahead
    if (beforeTime < this._scheduledSegments[i + 1].beginTime) {
      break;
    }
  }
  // When we exit the loop, i will be the index of the segment that should be the first one remaining

  this._scheduledSegments = this._scheduledSegments.slice(i);

  assert(this._scheduledSegments.length > 0); // sanity check
  assert(this._scheduledSegments[0].beginTime <= beforeTime); // sanity check
};

EnvGen.prototype.gate = function (on, time) {
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
        decayTargetLevel = INITIAL_LEVEL;
      } else {
        decayTargetLevel = this._sustainLevel;
      }

      // Schedule decay
      this._scheduleSegmentFromValueThreshold(ATTACK_LEVEL, decayTargetLevel, this._decayTime);
    } else if (this._mode === 'ASR') {
      // Schedule sustain
      this._scheduleSegmentFromValueThreshold(ATTACK_LEVEL, ATTACK_LEVEL, 1); // timeConst here doesn't really matter
    } else {
      assert(false); // invalid mode
    }
  } else {
    if (this._mode === 'AD') {
      // We ignore gate-off when in AD mode
    } else if ((this._mode === 'ASR') || (this._mode === 'ADSR')) {
      // Schedule release
      this._scheduleSegmentFromTime(time, INITIAL_LEVEL, this._releaseTime);
    } else {
      assert(false); // invalid mode
    }
  }
};

EnvGen.prototype.gateOn = function (time) {
  this.gate(true, time);
};

EnvGen.prototype.gateOff = function (time) {
  this.gate(false, time);
};


window.WasabiMinilogue = class WasabiMinilogue extends WebAudioPluginFactory {

  constructor(context, baseUrl) {
    super(context, baseUrl);
  }
}

AudioContext.prototype.createWasabiminilogueCompositeNode =
  OfflineAudioContext.prototype.createWasabiminilogueCompositeNode = function (options) {
    return new Minilogue(this, options);
  };
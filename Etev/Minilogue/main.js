/*  ################################## Minilogue emulation ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/

window.Minilogue = class Minilogue extends WebAudioPluginCompositeNode {

  constructor(ctx, options) {
    /*    ################     API PROPERTIES    ###############   */
    super(ctx, options)
    this.state;
    this.voices = new Array();
    parent = this;
    this.ppdelay = new Delay(parent, this.context);

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
    this.addParam({ name: 'lowpass', defaultValue: 300, minValue: 30, maxValue: 22050 });
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
    this.addParam({ name: 'ampattack', defaultValue: 0.1, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'ampdecay', defaultValue: 0.1, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'ampsustain', defaultValue: 0.1, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'amprelease', defaultValue: 0.1, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'egattack', defaultValue: 0.1, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'egdecay', defaultValue: 0.1, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'egsustain', defaultValue: 0.1, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'egrelease', defaultValue: 0.1, minValue: 0, maxValue: 1 });






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
    return this.params;
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
    this.egattack = this.params.egattack;
    this.egdecay = this.params.egdecay;
    this.egsustain = this.params.egsustain;
    this.egrelease = this.params.egrelease;
  }



  noteOn(key) {
    that = this;
    if (this.voices[key] == null) {
      this.voices[key] = new Voice(this.context, key, that)
      this.setInitialParamValues();
      this.voices[key].amp.connect(this._output);
      if (this.params.status == "disable") this.voices[key].amp.connect(this._output);
      else if (this.params.status == "enable") {
        this.voices[key].amp.connect(this.ppdelay.feedbackGainNode);
        this.voices[key].amp.connect(this.ppdelay.dryGainNode);
      }

    }

  }

  noteOff(key) {
    if (this.voices[key] != null) {
      // Shut off the note playing and clear it 
      this.voices[key].osc1.stop();
      this.voices[key].osc2.stop();
      this.voices[key].lfo.stop();
      delete this.voices[key];
      this.voices[key] = null;

    }
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
      if (this.voices[voice]) this.voices[voice].osc1.frequency.setValueAtTime(this.voices[voice].basefrequency * (_pitch), this.context.currentTime);
    }
  }
  set osc2pitch(_pitch) {
    this.params.pitch2 = _pitch;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].osc2.frequency.setValueAtTime(this.voices[voice].basefrequency * (_pitch), this.context.currentTime);
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

    if (_time < this._descriptor.time.max && _time > this._descriptor.time.min) this.params.time = _time;
    this.ppdelay.delayNodeLeft.delayTime.setValueAtTime(_time, this.context.currentTime);
    this.ppdelay.delayNodeRight.delayTime.setValueAtTime(_time, this.context.currentTime);

  }

  set feedback(_feedback) {
    if (_feedback < this._descriptor.feedback.max && _feedback > this._descriptor.feedback.min) this.params.feedback = _feedback;
    this.ppdelay.feedbackGainNode.gain.setValueAtTime(parseFloat(this.params.feedback, 10), this.context.currentTime);

  }

  set mix(_mix) {
    if (_mix < this._descriptor.mix.max && _mix > this._descriptor.mix.min) this.params.mix = _mix;
    this.ppdelay.dryGainNode.gain.setValueAtTime(this.getDryLevel(this.params.mix), this.context.currentTime);
    this.ppdelay.wetGainNode.gain.setValueAtTime(this.getWetLevel(this.params.mix), this.context.currentTime);

  }

  set ampattack(_attack) {
    this.params.ampattack = _attack;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({
        attack: this.params.ampattack,
        decay: this.params.ampdecay,
        sustain: this.params.ampsustain,
        release: this.params.amprelease
      });
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack
    }
  }
  set ampdecay(_decay) {
    this.params.ampdecay = _decay;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({
        attack: this.params.ampattack,
        decay: this.params.ampdecay,
        sustain: this.params.ampsustain,
        release: this.params.amprelease
      });
    }
  }
  set ampsustain(_sustain) {
    this.params.ampsustain = _sustain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({
        attack: this.params.ampattack,
        decay: this.params.ampdecay,
        sustain: this.params.ampsustain,
        release: this.params.amprelease
      });
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack

    }
  }
  set amprelease(_release) {
    this.params.amprelease = _release;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({
        attack: this.params.ampattack,
        decay: this.params.ampdecay,
        sustain: this.params.ampsustain,
        release: this.params.amprelease
      });
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack

    }
  }
  set egattack(_attack) {
    this.params.egattack = _attack;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({ attack: _attack });
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack
    }
  }
  set egdecay(_decay) {
    this.params.egdecay = _decay;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({ decay: _decay });
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack
    }
  }
  set egsustain(_sustain) {
    this.params.egsustain = _sustain;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({ sustain: _sustain });
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack
    }
  }
  set egrelease(_release) {
    this.params.egrelease = _release;
    for (let voice = 0; voice < this.voices.length; voice++) {
      if (this.voices[voice]) this.voices[voice].ampEnveloppe.update({ release: _release });
      //if (this.voices[voice]) this.voices[voice].ampEnveloppe.attack
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


    // WTFFF pourquoi ça ne baisse pas ???????
    this.feedbackGainNode.gain.setValueAtTime(0, this.context.currentTime)
    this.wetGainNode.gain.setValueAtTime(0, this.context.currentTime)
    this.dryGainNode.gain.setValueAtTime(0, this.context.currentTime)


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

    this.buildNode(key)
  }

  buildNode(key) {
    this.osc1 = this.context.createOscillator();
    this.osc2 = this.context.createOscillator();

    this.osc1.type = "sawtooth";
    this.osc2.type = "square";
    // var note = key % 12;
    //let octave = Math.floor(key / 12);
    this.basefrequency = 440 * Math.pow(2, (key - 69) / 12);
    this.osc1.frequency.setValueAtTime(this.basefrequency, this.context.currentTime);
    this.osc2.frequency.setValueAtTime(this.basefrequency, this.context.currentTime);


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


    //Enveloppe stage
    this.ampEnveloppe = ADSRNode(this.context, {
      attack: this.parent.params.ampattack,
      decay: this.parent.params.ampdecay,
      sustain: this.parent.params.ampsustain,
      release: this.parent.params.amprelease
    });
    this.ampEnveloppe.start();


  

    this.enveloppeGenerator = ADSRNode(this.context, {
      attack: 0.1, // seconds until hitting 1.0
      decay: 0.2, // seconds until hitting sustain value
      sustain: 0.5, // sustain value
      release: 0.8  // seconds until returning back to 0.0
    })

    // gain stage 
    this.gainOsc1 = this.context.createGain();
    this.gainOsc2 = this.context.createGain();
    this.gainNoise = this.context.createGain();
    this.gainLfo = this.context.createGain();
    this.amp = this.context.createGain();

    // merger
    this.oscMerger = this.context.createChannelMerger(3);

    this.osc1.connect(this.wshape1);
    this.osc2.connect(this.wshape2);
    this.wshape1.connect(this.gainOsc1);
    this.wshape2.connect(this.gainOsc2);
    this.oscNoise.connect(this.gainNoise);
    this.lfo.connect(this.gainLfo);


    //mode 1 : cutoff
    // mode 2 : lfo
    // this.gainLfo.connect(this.osc2.detune);
    // this.gainLfo.connect(this.osc1.detune);
    this.gainLfo.connect(this.lowPassfilter.frequency);


    this.gainOsc1.connect(this.oscMerger, 0, 0);
    this.gainOsc2.connect(this.oscMerger, 0, 1);
    this.gainOsc1.connect(this.oscMerger, 0, 1);
    this.gainOsc2.connect(this.oscMerger, 0, 0);
    this.gainNoise.connect(this.oscMerger, 0, 2);

    this.oscMerger.connect(this.lowPassfilter);
    this.lowPassfilter.connect(this.highpassfilter);
    this.highpassfilter.connect(this.amp);
    this.ampEnveloppe.connect(this.lowPassfilter.gain);
    //this.lowPassfilter.connect(this.enveloppeGenerator);--> has to be done by setter

    //this.enveloppeGenerator.connect(this.lfo);--> has to be done by setter


    // on externalise
    // this.amp.connect(this.dryGainNode);
    // this.ampEnveloppe.connect(this.amp);



    this.osc1.start();
    this.osc2.start();
    this.lfo.start();
    this.ampEnveloppe.trigger(2);
    this.ampEnveloppe.release(4);
  }

}


function ADSRNode(ctx, opts) {
  // `ctx` is the AudioContext
  // `opts` is an object in the format:
  // {
  //   base:         <number>, // output     optional    default: 0
  //   attack:       <number>, // seconds    optional    default: 0
  //   attackCurve:  <number>, // bend       optional    default: 0
  //   peak:         <number>, // output     optional    default: 1
  //   hold:         <number>, // seconds    optional    default: 0
  //   decay:        <number>, // seconds    optional    default: 0
  //   decayCurve:   <number>, // bend       optional    default: 0
  //   sustain:      <number>, // output     required
  //   release:      <number>, // seconds    optional    default: 0
  //   releaseCurve: <number>  // bend       optional    default: 0
  // }


  function getNum(opts, key, def) {
    if (opts[key]){  a =  opts[key]; return a;}
    else return def;
  }

  var attack = 0, decay = 0, sustain = 0, sustain_adj = 0, release = 0;
  var base = 0, acurve = 0, peak = 1, hold = 0, dcurve = 0, rcurve = 0;

  function update(opts) {
    base = getNum(opts, 'base', base);
    attack = getNum(opts, 'attack', attack);
    acurve = getNum(opts, 'attackCurve', acurve);
    peak = getNum(opts, 'peak', peak);
    hold = getNum(opts, 'hold', hold);
    decay = getNum(opts, 'decay', decay);
    dcurve = getNum(opts, 'decayCurve', dcurve);
    sustain = getNum(opts, 'sustain', sustain);
    release = getNum(opts, 'release', release);
    rcurve = getNum(opts, 'releaseCurve', rcurve);
    sustain_adj = adjustCurve(dcurve, peak, sustain);
  }





  // extract options
  update(opts);

  // create the node and inject the new methods
  var node = ctx.createConstantSource();
  node.offset.value = base;
  

  // unfortunately, I can't seem to figure out how to use cancelAndHoldAtTime, so I have to have
  // code that calculates the ADSR curve in order to figure out the value at a given time, if an
  // interruption occurs
  //
  // the curve functions (linearRampToValueAtTime and setTargetAtTime) require an *event*
  // preceding the curve in order to calculate the correct start value... inserting the event
  // *should* work with cancelAndHoldAtTime, but it doesn't (or I misunderstand the API).
  //
  // therefore, for the curves to start at the correct location, I need to be able to calculate
  // the entire ADSR curve myself, so that I can correctly interrupt the curve at any moment.
  //
  // these values track the state of the trigger/release moments, in order to calculate the final
  // curve
  var lastTrigger = false;
  var lastRelease = false;

  // small epsilon value to check for divide by zero
  var eps = 0.00001;

  function curveValue(type, startValue, endValue, curTime, maxTime) {
    if (type === 0)
      return startValue + (endValue - startValue) * Math.min(curTime / maxTime, 1);
    // otherwise, exponential
    return endValue + (startValue - endValue) * Math.exp(-curTime * type / maxTime);
  }

  


  function adjustCurve(type, startValue, endValue) {
    // the exponential curve will never hit its target... but we can calculate an adjusted
    // target so that it will miss the adjusted value, but end up hitting the actual target
    if (type === 0)
      return endValue; // linear hits its target, so no worries
    var endExp = Math.exp(-type);
    return (endValue - startValue * endExp) / (1 - endExp);
  }

  function triggeredValue(time) {
    // calculates the actual value of the envelope at a given time, where `time` is the number
    // of seconds after a trigger (but before a release)
    var atktime = lastTrigger.atktime;
    if (time < atktime) {
      return curveValue(acurve, lastTrigger.v,
        adjustCurve(acurve, lastTrigger.v, peak), time, atktime);
    }
    if (time < atktime + hold)
      return peak;
    if (time < atktime + hold + decay)
      return curveValue(dcurve, peak, sustain_adj, time - atktime - hold, decay);
    return sustain;
  }

  function releasedValue(time) {
    // calculates the actual value of the envelope at a given time, where `time` is the number
    // of seconds after a release
    if (time < 0)
      return sustain;
    if (time > lastRelease.reltime)
      return base;
    return curveValue(rcurve, lastRelease.v,
      adjustCurve(rcurve, lastRelease.v, base), time, lastRelease.reltime);
  }

  function curveTo(param, type, value, time, duration) {
    if (type === 0 || duration <= 0)
      param.linearRampToValueAtTime(value, time + duration);
    else // exponential
      param.setTargetAtTime(value, time, duration / type);
  }

  node.trigger = function (when) {
    console.log("i trigger")
    if (typeof when === 'undefined')
      when = this.context.currentTime;

    if (lastTrigger !== false) {
      if (when < lastTrigger.when)
        throw new Error('[ADSRNode] Cannot trigger before future trigger');
      this.release(when);
    }
    var v = base;
    var interruptedLine = false;
    if (lastRelease !== false) {
      var now = when - lastRelease.when;
      v = releasedValue(now);
      // check if a linear release has been interrupted by this attack
      interruptedLine = rcurve === 0 && now >= 0 && now <= lastRelease.reltime;
      lastRelease = false;
    }
    var atktime = attack;
    if (Math.abs(base - peak) > eps)
      atktime = attack * (v - peak) / (base - peak);
    lastTrigger = { when: when, v: v, atktime: atktime };

    this.offset.cancelScheduledValues(when);



    if (interruptedLine)
      this.offset.linearRampToValueAtTime(v, when);
    else
      this.offset.setTargetAtTime(v, when, 0.001);
    curveTo(this.offset, acurve, adjustCurve(acurve, v, peak), when, atktime);
    this.offset.setTargetAtTime(peak, when + atktime, 0.001);
    if (hold > 0)
      this.offset.setTargetAtTime(peak, when + atktime + hold, 0.001);
    curveTo(this.offset, dcurve, sustain_adj, when + atktime + hold, decay);
    this.offset.setTargetAtTime(sustain, when + atktime + hold + decay, 0.001);
    return this;
  };

  node.getOpts = () => {
    return { attack, decay, sustain, sustain_adj, release, base, acurve, peak, hold, dcurve, rcurve };

  }

  node.release = function (when) {
    if (typeof when === 'undefined')
      when = this.context.currentTime;

    if (lastTrigger === false)
      throw new Error('[ADSRNode] Cannot release without a trigger');
    if (when < lastTrigger.when)
      throw new Error('[ADSRNode] Cannot release before the last trigger');
    var tnow = when - lastTrigger.when;
    var v = triggeredValue(tnow);
    var reltime = release;
    if (Math.abs(sustain - base) > eps)
      reltime = release * (v - base) / (sustain - base);
    lastRelease = { when: when, v: v, reltime: reltime };
    var atktime = lastTrigger.atktime;
    // check if a linear attack or a linear decay has been interrupted by this release
    var interruptedLine =
      (acurve === 0 && tnow >= 0 && tnow <= atktime) ||
      (dcurve === 0 && tnow >= atktime + hold && tnow <= atktime + hold + decay);
    lastTrigger = false;

    this.offset.cancelScheduledValues(when);
    node.baseTime = when + reltime;

    if (interruptedLine)
      this.offset.linearRampToValueAtTime(v, when);
    else
      this.offset.setTargetAtTime(v, when, 0.001);
    curveTo(this.offset, rcurve, adjustCurve(rcurve, v, base), when, reltime);
    this.offset.setTargetAtTime(base, when + reltime, 0.001);
    return this;
  };

  node.reset = function () {
    lastTrigger = false;
    lastRelease = false;
    var now = this.context.currentTime;
    this.offset.cancelScheduledValues(now);
    this.offset.setTargetAtTime(base, now, 0.001);
    node.baseTime = now;
    return this;
  };

  node.update = function (opts) {
    update(opts);
    return this.reset();
  };

  node.baseTime = 0;

  return node;
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
/*  ################################## Minilogue emulation ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/

window.Minilogue = class Minilogue extends WebAudioPluginCompositeNode {

  constructor(ctx, options) {
    /*    ################     API PROPERTIES    ###############   */
    super(ctx, options)
    this.state;

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
    this._descriptor = {
      "feedback": {
        "key": "feedback",
        "type": "linear",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.5,
        "unit": "",
        "label": "feedback",
        "flag": ""
      },

      "time": {
        "key": "time",
        "type": "linear",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.5,
        "unit": "ms",
        "label": "time",
        "flag": ""
      },

      "mix": {
        "key": "mix",
        "type": "linear",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.5,
        "unit": "",
        "label": "mix",
        "flag": ""
      }


    }
    // params 
    this.params = {
      "feedback": this._descriptor.feedback.default,
      "mix": this._descriptor.mix.default,
      "time": this._descriptor.time.default,
      "status": "disable"
    }
    // p5 patchnames
    this.setup();
  }

  /*    ################     API METHODS    ###############   */

  // p9 count inputs
  get numberOfInputs() {
    return this.inputs.length;
  }

  get numberOfOuputs() {
    return this.outputs.length;
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
    console.log(key);
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
    this.createNodes();
    this.connectNodes();
    this.setInitialParamValues();
  }

  createIO() {
    this.inputs.push(this._input);
    this.outputs.push(this._output);
  }

  

  createNodes() {
    this.osc1 = this.context.createOscillator();
    this.osc2 = this.context.createOscillator();
    this.osc1v2 = this.context.createOscillator();
    this.osc2v2 = this.context.createOscillator();
    this.osc1.type = "sawtooth";
    this.osc2.type = "square";
    this.osc1v2.type = "sawtooth";
    this.osc2v2.type = "square";
    
    // OSC stages
    this.oscNoise = this.context.createOscillator();
    this.lfo = this.context.createOscillator();

    
    this.oscNoise.type = "random";
    this.lfo.type = "sine";

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
      attack: 0.1, // seconds until hitting 1.0
      decay: 0.2, // seconds until hitting sustain value
      sustain: 0.5, // sustain value
      release: 0.3  // seconds until returning back to 0.0
    });

    this.enveloppeGenerator = ADSRNode(this.context, {
      attack: 0.1, // seconds until hitting 1.0
      decay: 0.2, // seconds until hitting sustain value
      sustain: 0.5, // sustain value
      release: 0.3  // seconds until returning back to 0.0
    })

    // gain stage 
    this.gainOsc1 = this.context.createGain();
    this.gainOsc2 = this.context.createGain();
    this.gainOsc1.gain.setValueAtTime(0,this.context.currentTime);
    this.gainOsc2.gain.setValueAtTime(0,this.context.currentTime);
    this.gainNoise = this.context.createGain();
    this.amp = this.context.createGain();

    // Delay stage (from stereowasabidelay)
    this.delayNodeLeft = this.context.createDelay();
    this.delayNodeRight = this.context.createDelay();
    this.dryGainNode = this.context.createGain();
    this.wetGainNode = this.context.createGain();
    this.feedbackGainNode = this.context.createGain();
    this.channelMerger = this.context.createChannelMerger(2);

    // merger
    this.oscMerger = this.context.createChannelMerger(3);

  }

  connectNodes() {

    this.osc1.connect(this.wshape1);
    this.osc2.connect(this.wshape2);
    this.osc1v2.connect(this.wshape1);
    this.osc2v2.connect(this.wshape2);

    this.wshape1.connect(this.gainOsc1);
    this.wshape2.connect(this.gainOsc2);
    this.oscNoise.connect(this.gainNoise);

    this.gainOsc1.connect(this.oscMerger, 0, 0);
    this.gainOsc2.connect(this.oscMerger, 0, 1);
    this.gainNoise.connect(this.oscMerger, 0, 2);

    this.oscMerger.connect(this.lowPassfilter);
    this.lowPassfilter.connect(this.highpassfilter);
    //this.lowPassfilter.connect(this.ampEnveloppe); --> has to be done by setter
    //this.lowPassfilter.connect(this.enveloppeGenerator);--> has to be done by setter

    //this.enveloppeGenerator.connect(this.lfo);--> has to be done by setter

    // stereo delay parts
    this.highpassfilter.connect(this.amp);
    this.amp.connect(this.dryGainNode);
    this.ampEnveloppe.connect(this.amp);
    // dry mix out
    this.dryGainNode.connect(this._output);

    // the feedback loop
    this.delayNodeLeft.connect(this.channelMerger, 0, 0);
    this.delayNodeRight.connect(this.channelMerger, 0, 1);
    this.feedbackGainNode.connect(this.delayNodeLeft);
    this.delayNodeRight.connect(this.feedbackGainNode);

    this.delayNodeLeft.connect(this.delayNodeRight);
    // wet mix
    this.amp.connect(this.feedbackGainNode);
    // wet out
    this.channelMerger.connect(this.wetGainNode);
    this.wetGainNode.connect(this._output);
    this.osc1.start();
    this.osc2.start();
    // this.oscNoise.start();
  }

  setInitialParamValues() {
    /*
     * set default value for parameters and assign it to the web audio nodes
     */
    this.time = (this.params.time);
    this.feedback = (this.params.feedback);
    this.mix = (this.params.mix);
  }

  noteOn(key){
    let note = key % 12;
    let octave = Math.floor(key / 12);
    this.osc1.frequency.setValueAtTime(Math.pow(2,(note / 12)) * octave * 65.41,this.context.currentTime);
    this.osc2.frequency.setValueAtTime(Math.pow(2,(note / 12)) * octave * 65.41,this.context.currentTime);
    this.osc1v2.frequency.setValueAtTime(Math.pow(2,(note / 12)) * octave * 65.41,this.context.currentTime);
    this.osc2v2.frequency.setValueAtTime(Math.pow(2,(note / 12)) * octave * 65.41,this.context.currentTime);
    this.gainOsc1.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.2);
    this.gainOsc2.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.2);

  }

  noteOff(){
    this.gainOsc1.gain.linearRampToValueAtTime(0, this.context.currentTime + 0.5);
    this.gainOsc2.gain.linearRampToValueAtTime(0, this.context.currentTime + 0.5);
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
    this.lowPassfilter.Q.value = _resonance;
  }
  set master(_master) {
    this._output.gain.setValueAtTime(_master, this.context.currentTime);
  }
  set lowpass(_cutoff) {
    this.lowPassfilter.frequency.value = _cutoff;
  }
  set highpass(_cutoff) {
    this.highpassfilter.frequency.value = _cutoff;
  }
  set osc1gain(_gain) {
    this.gainOsc1.gain.setValueAtTime(_gain / 100, this.context.currentTime);
  }
  set osc2gain(_gain) {
    this.gainOsc2.gain.setValueAtTime(_gain / 100, this.context.currentTime);
  }
  set osc1pitch(_pitch) {
    this.osc1.frequency.setValueAtTime(440 * _pitch, this.context.currentTime);
  }
  set osc2pitch(_pitch) {
    this.osc2.frequency.setValueAtTime(440 * _pitch, this.context.currentTime);
  }
  set lforate(_rate) {
    if (!this.isInRange(_rate, 30, 500))
      return;
    this.lfo.frequency.value = _rate;
  }
  set lfoint(_int) {
    if (!this.isInRange(_int, 0, 1))
      return;
    this.lfo.gain.value = _int;
  }
  set noise(_gain) {
    this.gainNoise.gain.setValueAtTime(_gain, this.context.currentTime);
  }
  set osc1shape(_gain) {
    this.wshape1.curve = this.getDistortionCurve(this.normalize(_gain, 0, 150));
  }
  set osc2shape(_gain) {
    this.wshape2.curve = this.getDistortionCurve(this.normalize(_gain, 0, 150));
  }

  set time(_time) {
    if (_time < this._descriptor.time.range.max && _time > this._descriptor.time.range.min) this.params.time = _time;
    this.delayNodeLeft.delayTime.setValueAtTime(_time, this.context.currentTime);
    this.delayNodeRight.delayTime.setValueAtTime(_time, this.context.currentTime);
  }

  set feedback(_feedback) {
    if (_feedback < this._descriptor.feedback.range.max && _feedback > this._descriptor.feedback.range.min) this.params.feedback = _feedback;
    this.feedbackGainNode.gain.setValueAtTime(parseFloat(this.params.feedback, 10), this.context.currentTime);
  }

  set mix(_mix) {
    if (_mix < this._descriptor.mix.range.max && _mix > this._descriptor.mix.range.min) this.params.mix = _mix;
    this.dryGainNode.gain.setValueAtTime(this.getDryLevel(this.params.mix), this.context.currentTime);
    this.wetGainNode.gain.setValueAtTime(this.getWetLevel(this.params.mix), this.context.currentTime);
  }

  set delay(_sig) {
    if (_sig === "enable") {
      this.amp.disconnect(this._output);
      this.amp.connect(this.feedbackGainNode);
      this.amp.connect(this.dryGainNode);
    }
    else if (_sig === "disable") {
      this.amp.disconnect(this.feedbackGainNode);
      this.amp.disconnect(this.dryGainNode);
      this.amp.connect(this._output);
    }
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
    if (typeof def === 'number' && typeof opts[key] === 'undefined')
      return def;
    if (typeof opts[key] === 'number')
      return opts[key];
    throw new Error('[ADSRNode] Expecting "' + key + '" to be a number');
  }

  var attack = 0, decay = 0, sustain, sustain_adj, release = 0;
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

    if (DEBUG) {
      // simulate curve using triggeredValue (debug purposes)
      for (var i = 0; i < 10; i += 0.01)
        this.offset.setValueAtTime(triggeredValue(i), when + i);
      return this;
    }

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


window.Wasabiminilogue = class Wasabiminilogue extends WebAudioPluginFactory {

  constructor(context, baseUrl) {
    super(context, baseUrl);
  }
}

AudioContext.prototype.createWasabiminilogueCompositeNode =
  OfflineAudioContext.prototype.createWasabiminilogueCompositeNode = function (options) {
    return new Minilogue(this, options);
  };
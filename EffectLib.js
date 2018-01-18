



  /*  ################################## main effect class ########################################  */
  class EffectTemplate {

    constructor(ctx) {
      this.params = null;
      this.context = ctx? ctx : new AudioContext;
    }
    setup() { }
    createNodes() {
      this.inputNode = this.context.createGain();
      this.outputNode = this.context.createGain();
    }
    connectNodes() { }
    getSetupParams() { }
    getName() {
      return this.name;
    }
    getVersion() {
      return this.version;
    }
    getInputNode() {
      return this.inputNode;
    }
    getOutputNode() {
      return this.outputNode;
    }
    getContext(){
      return this.context;
    }
    bypass() {
      this.inputNode.connect(this.outputNode);
    }
    reactivate() {
    }

    /*
    *
    *Tools to build sounds 
    */
    isString(arg) {
      return toString.call(arg) === '[object String]';
    }

    isObject(arg) {
      return toString.call(arg) === '[object Object]';
    }

    isFunction(arg) {
      return toString.call(arg) === '[object Function]';
    }

    isNumber(arg) {
      return toString.call(arg) === '[object Number]' && arg === +arg;
    }

    isArray(arg) {
      return toString.call(arg) === '[object Array]';
    }

    isInRange(arg, min, max) {
      if (!this.isNumber(arg) || !this.isNumber(min) || !this.isNumber(max))
        return false;

      return arg >= min && arg <= max;
    }

    isBool(arg) {
      return typeof (arg) === "boolean";
    }

    isOscillator(audioNode) {
      return (audioNode && audioNode.toString() === "[object OscillatorNode]");
    }

    isAudioBufferSourceNode(audioNode) {
      return (audioNode && audioNode.toString() === "[object AudioBufferSourceNode]");
    }

    // Takes a number from 0 to 1 and normalizes it to fit within range floor to ceiling
    normalize(num, floor, ceil) {
      if (!this.isNumber(num) || !this.isNumber(floor) || !this.isNumber(ceil))
        return;

      return ((ceil - floor) * num) / 1 + floor;
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
  }


  /*  ################################## Delay ########################################@  */

   class PongPingDelay extends EffectTemplate {
    constructor(ctx) {
      super(ctx);
      console.log("delay construction");
      var mix, time, feedback;
    }

    setup() {
      console.log("delay setup");
      super.setup();
      if (this.params == null) this.params = this.getSetupParamsDefault();
      this.createNodes();
      this.connectNodes();
      this.linktoParams();
    }

    createNodes() {
      console.log("here");
      super.createNodes();
      this.delayNodeLeft = this.context.createDelay();
      this.delayNodeRight = this.context.createDelay();
      this.dryGainNode = this.context.createGain();
      this.wetGainNode = this.context.createGain();
      this.feedbackGainNode = this.context.createGain();
      this.channelMerger = this.context.createChannelMerger(2);
    }

    connectNodes() {
      // dry mix
      this.inputNode.connect(this.dryGainNode);
      // dry mix out
      this.dryGainNode.connect(this.outputNode);

      // the feedback loop
      this.delayNodeLeft.connect(this.channelMerger, 0, 0);
      this.delayNodeRight.connect(this.channelMerger, 0, 1);
      this.delayNodeLeft.connect(this.delayNodeRight);
      this.feedbackGainNode.connect(this.delayNodeLeft);
      this.delayNodeRight.connect(this.feedbackGainNode);

      // wet mix
      this.inputNode.connect(this.feedbackGainNode);

      // wet out
      this.channelMerger.connect(this.wetGainNode);
      this.wetGainNode.connect(this.outputNode);
    }
    linktoParams() {
      /*
       * set default value for parameters and assign it to the web audio nodes
       */
      this.setTime(this.params.time.default);
      this.setFeedback(this.params.feedback.default);
      this.setMix(this.params.mix.default);
    }

    getSetupParamsDefault() {
      return {
        "mix": {
          "min": 0,
          "max": 1,
          "default": 0.5,
          "type": "linear",
          "control": "knob"
        },
        "time": {
          "min": 0,
          "max": 1,
          "default": 0.5,
          "type": "linear",
          "control": "knob"
        },
        "feedback": {
          "min": 0,
          "max": 1,
          "default": 0.5,
          "type": "linear",
          "control": "knob"
        }
      }
    }

    /*
    * Update values of params 
    */
    save(_params) {
      this.params = {
        "mix": {
          "min": ((_params.mix.min) ? (_params.mix.min) : this.params.mix.min),
          "max": ((_params.mix.max) ? (this.params.mix.max) : _params.mix.max),
          "default": ((_params.mix.default) ? (this.params.mix.default) : _params.mix.default),
          "type": ((_params.mix.type) ? (this.params.mix.type) : _params.mix.type),
          "control": ((_params.mix.control) ? (this.params.mix.control) : _params.mix.control)
        },
        "time": {
          "min": ((_params.time.min) ? (this.params.time.min) : _params.time.min),
          "max": ((_params.time.max) ? (this.params.time.max) : _params.time.max),
          "default": ((_params.time.default) ? (this.params.time.default) : _params.time.default),
          "type": ((_params.time.type) ? (this.params.time.type) : _params.time.type),
          "control": ((_params.time.control) ? (this.params.time.control) : _params.time.control)
        },
        "feedback": {
          "min": ((_params.feedback.min) ? (this.params.feedback.min) : _params.feedback.min),
          "max": ((_params.feedback.max) ? (this.params.feedback.max) : _params.feedback.max),
          "default": ((_params.feedback.default) ? (this.params.feedback.default) : _params.feedback.default),
          "type": ((_params.feedback.type) ? (this.params.feedback.type) : _params.feedback.type),
          "control": ((_params.feedback.control) ? (this.params.feedback.control) : _params.feedback.control)
        }
      }
      return this.params;
    }

    reactivate() {
      this.connectNodes();
      this.setMix(this.params.mix.default);
      this.setTime(this.params.time.default);
      this.setFeedback(this.params.feedback.default);

    }

    bypass() {
      this.inputNode.disconnect(this.feedbackGainNode);
      this.inputNode.disconnect(this.dryGainNode);
      super.bypass();
    }

  

    /*
    * Setters for each param
    */
    setTime(_time) {
      if (_time < this.params.time.max && _time > this.params.time.min) this.time = _time;
      this.delayNodeLeft.delayTime.value = _time;
      this.delayNodeRight.delayTime.value = _time;
    }

    setFeedback(_feedback) {
      if (_feedback < this.params.feedback.max && _feedback > this.params.feedback.min) this.feedback = _feedback;
      this.feedbackGainNode.gain.value = parseFloat(this.feedback, 10);
    }

    setMix(_mix) {
      if (_mix < this.params.mix.max && _mix > this.params.mix.min) this.mix = _mix;
      this.dryGainNode.gain.value = this.getDryLevel(this.mix);
      this.wetGainNode.gain.value = this.getWetLevel(this.mix);
    }

    getTime(){
      return this.time;
    }

    getMix(){
      return this.mix;
    }
    getFeedback(){
      return this.feedback;
    }

  }

  /*  ################################## Chorus ########################################@  */

  class Chorus extends EffectTemplate {
    constructor(ctx) {
      super(ctx);
      var speed,delay, depth, osc, mix;

    }

    setup() {
      super.setup();
      if (this.params == null) this.params = this.getSetupParamsDefault();
      this.createNodes();
      this.connectNodes();
      this.linktoParams();
    }


    createNodes() {
      super.createNodes();
      this.osc = this.context.createOscillator();
      this.osc.type = 'triangle';
      this.dryGainNode = this.context.createGain();
      this.wetGainNode = this.context.createGain();
      this.channelSplitter = this.context.createChannelSplitter(2);
      this.delayNodeLeft = this.context.createDelay();
      this.delayNodeRight = this.context.createDelay();
      this.scldepth = this.context.createGain();
      this.scrdepth = this.context.createGain();
      this.merger = this.context.createChannelMerger(2);

    }

    connectNodes() {
      this.inputNode.connect(this.channelSplitter);
      this.inputNode.connect(this.dryGainNode);
      this.inputNode.connect(this.wetGainNode);
      this.dryGainNode.connect(this.outputNode);
      this.channelSplitter.connect(this.delayNodeLeft, 0);
      this.channelSplitter.connect(this.delayNodeRight, 1);
      this.osc.connect(this.scldepth);
      this.osc.connect(this.scrdepth);
      this.scldepth.connect(this.delayNodeLeft.delayTime);
      this.scrdepth.connect(this.delayNodeRight.delayTime);
      this.delayNodeLeft.connect(this.merger,0,0);
      this.delayNodeRight.connect(this.merger,0,1);
      this.merger.connect(this.wetGainNode);
      this.wetGainNode.connect(this.outputNode);


    }
    linktoParams() {
      /*
       * set default value for parameters and assign it to the web audio nodes
       */
      this.setMix(this.params.mix.default);
      this.setDelay(this.params.delay.default);
      this.setDepth(this.params.depth.default);
      this.setSpeed(this.params.speed.default);
      this.osc.start(0);
    }

    getSetupParamsDefault() {
      return {
        "delay": {
          "min": 0,
          "max": 1,
          "default": 0.8,
          "type": "linear",
          "control": "knob"
        },
        "depth": {
          "min": 0,
          "max": 0.004,
          "default": 0.0018,
          "type": "linear",
          "control": "knob"
        },
        "mix": {
          "min": 0,
          "max": 1,
          "default": 0.8,
          "type": "linear",
          "control": "knob"
        },
        "speed": {
          "min": 0,
          "max": 8,
          "default": 2.5,
          "type": "linear",
          "control": "knob"
        }
      }
    }


    save(_params) {
      this.params = {
        "mix": {
          "min": ((_params.mix.min) ? (_params.mix.min) : this.params.mix.min),
          "max": ((_params.mix.max) ? (this.params.mix.max) : _params.mix.max),
          "default": ((_params.mix.default) ? (this.params.mix.default) : _params.mix.default),
          "type": ((_params.mix.type) ? (this.params.mix.type) : _params.mix.type),
          "control": ((_params.mix.control) ? (this.params.mix.control) : _params.mix.control)
        },
        "delay": {
          "min": ((_params.delay.min) ? (this.params.delay.min) : _params.delay.min),
          "max": ((_params.delay.max) ? (this.params.delay.max) : _params.delay.max),
          "default": ((_params.delay.default) ? (this.params.delay.default) : _params.delay.default),
          "type": ((_params.delay.type) ? (this.params.delay.type) : _params.delay.type),
          "control": ((_params.delay.control) ? (this.params.delay.control) : _params.delay.control)
        },
        "depth": {
          "min": ((_params.depth.min) ? (this.params.depth.min) : _params.depth.min),
          "max": ((_params.depth.max) ? (this.params.depth.max) : _params.depth.max),
          "default": ((_params.depth.default) ? (this.params.depth.default) : _params.depth.default),
          "type": ((_params.depth.type) ? (this.params.depth.type) : _params.depth.type),
          "control": ((_params.depth.control) ? (this.params.depth.control) : _params.depth.control)
        },
        "speed": {
          "min": ((_params.speed.min) ? (this.params.speed.min) : _params.speed.min),
          "max": ((_params.speed.max) ? (this.params.speed.max) : _params.speed.max),
          "default": ((_params.speed.default) ? (this.params.speed.default) : _params.speed.default),
          "type": ((_params.speed.type) ? (this.params.speed.type) : _params.speed.type),
          "control": ((_params.speed.control) ? (this.params.speed.control) : _params.speed.control)
        }
      }
      return this.params;
    }

    reactivate() {
      this.connectNodes();
      this.setMix(this.params.mix.default);
      this.setDelay(this.params.delay.default);
      this.setDepth(this.params.depth.default);
      this.setSpeed(this.params.speed.default);

    }

    bypass() {
      this.inputNode.disconnect(this.channelSplitter);
      this.inputNode.disconnect(this.dryGainNode);
      this.inputNode.disconnect(this.wetGainNode);
      super.bypass();
    }

  

    /*
    * Setters for each param
    */
    setDelay(_delay) {
      if (_delay < this.params.delay.max && _delay > this.params.delay.min) this.delay = _delay;
      this.delayNodeLeft.delayTime.value = this.delay * 0.05;
      this.delayNodeRight.delayTime.value = this.delay * 0.05;
     // console.log(this.delayNodeRight.delayTime.value);
    }

    setSpeed(_speed) {
      if (_speed < this.params.speed.max && _speed > this.params.speed.min) this.speed = _speed;
      this.osc.frequency.value = this.speed;
    //  console.log(this.osc.frequency.value);
     // console.log(this.scldepth);
    }

    setDepth(_depth) {
      if (_depth < this.params.depth.max && _depth > this.params.depth.min) this.depth = _depth;
      this.scldepth.gain.value = this.depth ;
      this.scrdepth.gain.value = - this.depth;
      console.log(this.depth);
      console.log(this.scldepth.gain.value);
    }
    setMix(_mix) {
      if (_mix < this.params.mix.max && _mix > this.params.mix.min) this.mix = _mix;
      this.dryGainNode.gain.value = this.getDryLevel(this.mix);
      this.wetGainNode.gain.value = this.getWetLevel(this.mix);
    }
 
    getDelay(){
      return this.delay;
    }

    getDepth(){
      return this.depth;
    }
    getSpeed(){
      return this.speed;
    }


  }

   /*  ################################## OVERDRIVE ########################################@  */

   class Overdrive extends EffectTemplate {
    constructor(ctx) {
      super(ctx);
      var preBand,color, drive, postCut, curve;

    }

    setup() {
      super.setup();
      if (this.params == null) this.params = this.getSetupParamsDefault();
      this.curve = new Float32Array(22050);
      this.createNodes();
      this.connectNodes();
      this.linktoParams();
    }


    createNodes() {
      super.createNodes();
      this.dryGainNode = this.context.createGain();
      this.wetGainNode = this.context.createGain();
      this.waveShaper = this.context.createWaveShaper();
      this.bandpass = this.context.createBiquadFilter();
      this.lowpass = this.context.createBiquadFilter();
    }

    connectNodes() {
      this.inputNode.connect(this.bandpass);
      this.bandpass.connect(this.wetGainNode);
      this.bandpass.connect(this.dryGainNode);
      this.wetGainNode.connect(this.waveShaper);
      this.dryGainNode.connect(this.waveShaper);
      this.waveShaper.connect(this.lowpass);
      this.lowpass.connect(this.outputNode);


    }
    linktoParams() {
      /*
       * set default value for parameters and assign it to the web audio nodes
       */
      this.setcolor(this.params.color.default);
      this.setpostCut(this.params.postCut.default);
      this.setdrive(this.params.drive.default);
      this.setpreBand(this.params.preBand.default);
      console.log(this.preBand);
    }

    getSetupParamsDefault() {
      return {
        "preBand": {
          "min": 0,
          "max": 1,
          "default": 0.5,
          "type": "linear",
          "control": "knob"
        },
        "color": {
          "min": 0,
          "max": 22050,
          "default": 800,
          "type": "linear",
          "control": "knob"
        },
        "drive": {
          "min": 0,
          "max": 1,
          "default": 0.5,
          "type": "linear",
          "control": "knob"
        },
        "postCut": {
          "min": 0,
          "max": 22050,
          "default": 3000,
          "type": "linear",
          "control": "knob"
        }
      }
    }


    save(_params) {
      this.params = {
        "preBand": {
          "min": ((_params.preBand.min) ? (_params.preBand.min) : this.params.preBand.min),
          "max": ((_params.preBand.max) ? (this.params.preBand.max) : _params.preBand.max),
          "default": ((_params.preBand.default) ? (this.params.preBand.default) : _params.preBand.default),
          "type": ((_params.preBand.type) ? (this.params.preBand.type) : _params.preBand.type),
          "control": ((_params.preBand.control) ? (this.params.preBand.control) : _params.preBand.control)
        },
        "color": {
          "min": ((_params.color.min) ? (this.params.color.min) : _params.color.min),
          "max": ((_params.color.max) ? (this.params.color.max) : _params.color.max),
          "default": ((_params.color.default) ? (this.params.color.default) : _params.color.default),
          "type": ((_params.color.type) ? (this.params.color.type) : _params.color.type),
          "control": ((_params.color.control) ? (this.params.color.control) : _params.color.control)
        },
        "drive": {
          "min": ((_params.drive.min) ? (this.params.drive.min) : _params.drive.min),
          "max": ((_params.drive.max) ? (this.params.drive.max) : _params.drive.max),
          "default": ((_params.drive.default) ? (this.params.drive.default) : _params.drive.default),
          "type": ((_params.drive.type) ? (this.params.drive.type) : _params.drive.type),
          "control": ((_params.drive.control) ? (this.params.drive.control) : _params.drive.control)
        },
        "postCut": {
          "min": ((_params.postCut.min) ? (this.params.postCut.min) : _params.postCut.min),
          "max": ((_params.postCut.max) ? (this.params.postCut.max) : _params.postCut.max),
          "default": ((_params.postCut.default) ? (this.params.postCut.default) : _params.postCut.default),
          "type": ((_params.postCut.type) ? (this.params.postCut.type) : _params.postCut.type),
          "control": ((_params.postCut.control) ? (this.params.postCut.control) : _params.postCut.control)
        }
      }
      return this.params;
    }

    reactivate() {
      this.connectNodes();
      this.setpreBand(this.params.preBand.default);
      this.setcolor(this.params.color.default);
      this.setdrive(this.params.drive.default);
      this.setpostCut(this.params.postCut.default);

    }

    bypass() {
      this.inputNode.disconnect(this.bandpass);
      super.bypass();
    }

  

    /*
    * Setters for each param
    */


    setpostCut(_postCut) {
      if (_postCut < this.params.postCut.max && _postCut > this.params.postCut.min) this.postCut = _postCut;
      this.lowpass.frequency.setValueAtTime (this.postCut,0);
    }

    setdrive(_drive) {
      if (_drive < this.params.drive.max && _drive > this.params.drive.min) this.drive = _drive;
      for (var i = 0; i< 22050; i++){
        var x = i * 2 / 22050 - 1;
        this.curve[i] = (3 + (this.drive)* 100) * x * 20 * (Math.PI /180) / (Math.PI + (this.drive * 100) * Math.abs(x));
      }
      this.waveShaper.curve = this.curve;
    }
    setpreBand(_preBand) {
      if (_preBand < this.params.preBand.max && _preBand > this.params.preBand.min) this.preBand = _preBand;  
      try {
        this.wetGainNode.gain.setValueAtTime(this.preband,0);
        this.dryGainNode.gain.setValueAtTime(1.0 - this.preBand,0);
      } catch (error) {
        if (error instanceof RangeError){
          alert('provided float non finite');
        }
      }
      
    }

    setcolor(_color) {
      if (_color < this.params.color.max && _color > this.params.color.min) this.color = _color;
      this.bandpass.frequency.setValueAtTime(this.color,0);

    }
 
    getcolor(){
      return this.color;
    }

    getdrive(){
      return this.drive;
    }
    getpostCut(){
      return this.postCut;
    }


  }





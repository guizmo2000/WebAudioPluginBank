/*  ################################## PingPongDelay ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/
var hosts = hosts || {};

hosts.PingPongDelay = class PingPongDelay {

  

  constructor(ctx) {
    this.context = ctx ? ctx : new AudioContext;

    /*    ################     API PROPERTIES    ###############   */

    this.state;
    this.inputs = [];
    this.outputs = [];
    this._gui = document.createElement("wc-pingpongdelay");
    this._gui.plug = this;
    

    // P2 : Json metadata
    this.metadata = {
      "name": "wasabi-PingPongDelay",
      "version": 1,
      "category": "Delay",
      "type": "Audio",
      "description": "Audio stereo delay with feedback, time and mix controls",
      "thumbnailImage": "https://...",
      "URLs": "https://.../doc",
      "authorInformation": "Guillaume Etevenard, i3s trainee in Nice - Sophia-Antipolis, France"
    }

    // P3 : Json descriptor
    this.descriptor = {
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
      "feedback": this.descriptor.feedback.default,
      "mix": this.descriptor.mix.default,
      "time": this.descriptor.time.default
    }
    // p5 patchnames
    this.patchNames = ["patch1"];

    this.setup();
  }

  /*    ################     API METHODS    ###############   */

  // p9 count inputs
  inputChannelCount(){
    return this.inputs.length;
  }
  getMetadata(){
    return this.metadata;
  }

  getDescriptor(){
    return this.descriptor;
  }

  getPatch(index) {
    return this.patchNames[index];
  }
  setPatch(data, index) {
    this.patchNames[index] = data;
  }

  getParam(key) {
    console.log("act");
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
    console.log("act");
    if (key == "time") {
      this.setTime(value);
    } else if (key == "feedback") {
      this.setFeedback(value);
    } else if (key == "mix") {
      this.setMix(value);
    } else {
      console.log("this parameter isn't used in Wasabi-PingpongDelay");
    }
  }

  // P7 state
  getState() {
    return this.state;
  }

  setState(data) {
    this.state = data;
    if (data == "enable") {
      console.log("enable");
      this.connectNodes();
      this.inputNode.disconnect(this.outputNode);
    } else if (data == "disable") {
      console.log("disable");
      this.inputNode.disconnect(this.feedbackGainNode);
      this.inputNode.disconnect(this.dryGainNode);
      this.inputNode.connect(this.outputNode);
    }
  }
  

  onMidi(msg) {
    return msg;
    //web midi api ?
  }

  /*  #########  Personnal code for the web audio graph  #########   */

  setup() {
    console.log("delay setup");
    this.createIO();
    this.createNodes();
    this.connectNodes();
    this.linktoParams();
    this.setState("disable");
  }

  createIO(){
    this.inputNode = this.context.createGain();
    this.outputNode = this.context.createGain();
    this.inputs.push(this.inputNode);
    this.outputs.push(this.outputNode);
  }

  createNodes() {
    
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
     
     this.feedbackGainNode.connect(this.delayNodeLeft);
     this.delayNodeRight.connect(this.feedbackGainNode);

     this.delayNodeLeft.connect(this.delayNodeRight);

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
    this.setTime(this.params.time);
    this.setFeedback(this.params.feedback);
    this.setMix(this.params.mix);
  }


  getInput(index) {
    return this.inputs[index];
  }
  getOutput(index) {
    return this.outputs[index];
  }

  getTime() {
    return this.params.time;
  }

  getMix() {
    return this.params.mix;
  }
  getFeedback() {
    return this.params.feedback;
  }



  // delay tools


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

  /*
    * Setters for each param
    */
  setTime(_time) {
    if (_time < this.descriptor.time.range.max && _time > this.descriptor.time.range.min) this.params.time = _time;
    this.delayNodeLeft.delayTime.setValueAtTime(_time, this.context.currentTime);
    this.delayNodeRight.delayTime.setValueAtTime(_time, this.context.currentTime);
  }

  setFeedback(_feedback) {
    if (_feedback < this.descriptor.feedback.range.max && _feedback > this.descriptor.feedback.range.min) this.params.feedback = _feedback;
    this.feedbackGainNode.gain.setValueAtTime(parseFloat(this.params.feedback, 10), this.context.currentTime);
  }

  setMix(_mix) {
    if (_mix < this.descriptor.mix.range.max && _mix > this.descriptor.mix.range.min) this.params.mix = _mix;
    this.dryGainNode.gain.setValueAtTime(this.getDryLevel(this.params.mix), this.context.currentTime);
    this.wetGainNode.gain.setValueAtTime(this.getWetLevel(this.params.mix), this.context.currentTime);
  }


  connect(audioNode){
    this.getOutput(0).connect(audioNode);
  }

}
/*  ################################## PingPongDelay ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/
window.PingPongDelay = class PingPongDelay extends WebAudioPluginCompositeNode {

  constructor(ctx, options) {
    /*    ################     API PROPERTIES    ###############   */
    super(ctx, options)
    this.state;
  
    this.addParam({name:'feedback', defaultValue: 0.5, minValue: 0, maxValue: 1 });
    this.addParam({name: 'time',defaultValue: 0.5, minValue: 0, maxValue: 1 });
    this.addParam({name: 'mix',defaultValue: 0.5, minValue: 0, maxValue: 1 });

    this.params = {
      "feedback": this._descriptor.feedback.defaultValue,
      "mix": this._descriptor.mix.defaultValue,
      "time": this._descriptor.time.defaultValue,
      "status": "disable"
    }

    this.setup();
  }

  /*    ################     API METHODS    ###############   */
  // p9 count inputs

  // p9 count inputs
  get numberOfInputs(){
    return this.inputs.length;
  }

  get numberOfOutputs(){
    return this.outputs.length;
  }
  inputChannelCount(){
    return 1;
  }
  outputChannelCount(){
    return 1
  }
  getMetadata(){
    return this.metadata;
  }

  getDescriptor(){
    return this._descriptor;
  }

  getPatch(index) {
    return null;
  }
  setPatch(data, index) {
    console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
  }

  getParam(key) {
    try {
      return this.params[key];
    } catch (error) {
      console.warn("this plugin does not implement this param")
    }
  }

  setParam(key, value) {
    console.log(key, value);
    try {
      this[key] = (value);
    } catch (error) {

      console.warn("this plugin does not implement this param")
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
    console.log("delay setup");
    this.createNodes();
    this.connectNodes();
    this.linktoParams();
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
    this._input.connect(this.dryGainNode);
    // dry mix out
    this.dryGainNode.connect(this._output);

    // the feedback loop
    this.delayNodeLeft.connect(this.channelMerger, 0, 0);
    this.delayNodeRight.connect(this.channelMerger, 0, 1);

    this.feedbackGainNode.connect(this.delayNodeLeft);
    this.delayNodeRight.connect(this.feedbackGainNode);

    this.delayNodeLeft.connect(this.delayNodeRight);

    // wet mix
    this._input.connect(this.feedbackGainNode);

    // wet out
    this.channelMerger.connect(this.wetGainNode);
    this.wetGainNode.connect(this._output);
  }

  linktoParams() {
    /*
     * set default value for parameters and assign it to the web audio nodes
     */
    this.time = this.params.time;
    this.feedback = this.params.feedback;
    this.mix = this.params.mix;
  }
  set time(_time) {
    if (_time < this._descriptor.time.maxValue && _time > this._descriptor.time.minValue) this.params.time = _time;
    this.delayNodeLeft.delayTime.setValueAtTime(_time, this.context.currentTime);
    this.delayNodeRight.delayTime.setValueAtTime(_time, this.context.currentTime);
  }

  set feedback(_feedback) {
    if (_feedback < this._descriptor.feedback.maxValue && _feedback > this._descriptor.feedback.minValue) this.params.feedback = _feedback;
    this.feedbackGainNode.gain.setValueAtTime(parseFloat(_feedback, 10), this.context.currentTime);
  }

  set mix(_mix) {
    if (_mix < this._descriptor.mix.maxValue && _mix > this._descriptor.mix.minValue)this.params.mix = _mix;
    this.dryGainNode.gain.setValueAtTime(this.getDryLevel(this.params.mix), this.context.currentTime);
    this.wetGainNode.gain.setValueAtTime(this.getWetLevel(this.params.mix), this.context.currentTime);
  }

  set status(_sig) {
    if (_sig === "enable") {
      this.params.status = "enable";
      this._input.disconnect(this._output);
      this._input.connect(this.feedbackGainNode);
      this._input.connect(this.dryGainNode);
    }
    else if (_sig === "disable") {
      this.params.status = "disable";
      this._input.disconnect(this.feedbackGainNode);
      this._input.disconnect(this.dryGainNode);
      this._input.connect(this._output);
    }
  }



  // delay tools
  /*
      *
      *Tools to build sounds 
      */

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

}


window.WasabiPingPongDelay = class WasabiPingPongDelay extends WebAudioPluginFactory {

  constructor(context, baseUrl) {
    super(context, baseUrl);
  }

}

AudioContext.prototype.createWasabiDelayCompositeNode =
  OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) {
    return new PingPongDelay(this, options);
  };
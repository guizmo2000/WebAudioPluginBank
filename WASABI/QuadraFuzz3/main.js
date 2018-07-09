/*  ################################## Quadrafuzz ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/
window.QuadraFuzz = class QuadraFuzz extends WebAudioPluginCompositeNode {


  constructor(ctx,URL ,options) {
    super(ctx,URL, options)
    /*    ################     API PROPERTIES    ###############   */
    this.state;


    this.addParam({ name: 'lowgain', defaultValue: 0.6, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'midlowgain', defaultValue: 0.8, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'midhighgain', defaultValue: 0.5, minValue: 0, maxValue: 1 });
    this.addParam({ name: 'highgain', defaultValue: 0.5, minValue: 0, maxValue: 1 });

    // P2 : Json metadata
    this.metadata = {
      "name": "wasabi-Quadrafuzz",
      "version": 1,
      "category": "Overdrive",
      "type": "Audio",
      "description": "4 level control fuzz",
      "thumbnailImage": "https://...",
      "URLs": "https://.../doc",
      "authorInformation": "Michel Buffa"
    }

    // params 
    this.params = {
      "lowgain": this._descriptor.lowgain.defaultValue,
      "midlowgain": this._descriptor.midlowgain.defaultValue,
      "midhighgain": this._descriptor.midhighgain.defaultValue,
      "highgain": this._descriptor.highgain.defaultValue,
      "status": "disable"
    }
    // p5 patchnames
    this.patchNames = ["patch1"];

    this.setup();
  }

  /*    ################     API METHODS    ###############   */

  // p9 count inputs

  get numberOfInputs() {
    return this.inputs.length;
  }

  get numberOfOutputs() {
    return this.outputs.length;
  }

  inputChannelCount() {
    return 1;
  }
  outputChannelCount() {
    return 1;
  }
  // getMetadata() {
  //   return this.metadata;
  // }

  getDescriptor() {
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
    try {
      this[key] = value;
    } catch (error) {

      console.warn("this plugin does not implement this param")
    }
  }

  


  onMidi(msg) {
    return msg;
    //web midi api ?
  }

  /*  #########  Personnal code for the web audio graph  #########   */

  setup() {
    //console.log("Quadrafuzz setup");
    this.createNodes();
    this.connectNodes();
    this.linktoParams();
  }


  createNodes() {

    this.dryGainNode = this.context.createGain();
    this.wetGainNode = this.context.createGain();

    this.lowpassLeft = this.context.createBiquadFilter();
    this.lowpassLeft.type = 'lowpass';
    this.lowpassLeft.frequency.value = 147;
    this.lowpassLeft.Q.value = 0.7071;

    this.bandpass1Left = this.context.createBiquadFilter();
    this.bandpass1Left.type = 'bandpass';
    this.bandpass1Left.frequency.value = 587;
    this.bandpass1Left.Q.value = 0.7071;

    this.bandpass2Left = this.context.createBiquadFilter();
    this.bandpass2Left.type = 'bandpass';
    this.bandpass2Left.frequency.value = 2490;
    this.bandpass2Left.Q.value = 0.7071;

    this.highpassLeft = this.context.createBiquadFilter();
    this.highpassLeft.type = 'highpass';
    this.highpassLeft.frequency.value = 4980;
    this.highpassLeft.Q.value = 0.7071;

    this.overdrives = [];
    for (var i = 0; i < 4; i++) {
      this.overdrives[i] = this.context.createWaveShaper();
      this.overdrives[i].curve = this.getDistortionCurve();
    }

  }

  connectNodes() {
    this._input.connect(this.wetGainNode);
    this._input.connect(this.dryGainNode);
    this.dryGainNode.connect(this._output);

    var filters = [this.lowpassLeft, this.bandpass1Left, this.bandpass2Left, this.highpassLeft];
    for (var i = 0; i < filters.length; i++) {
      this.wetGainNode.connect(filters[i]);
      filters[i].connect(this.overdrives[i]);
      this.overdrives[i].connect(this._output);
    }

  }

  linktoParams() {
    /*
     * set default value for parameters and assign it to the web audio nodes
     */
    this.lowgain = this.params.lowgain;
    this.midlowgain = this.params.midlowgain;
    this.midhighgain = this.params.midhighgain;
    this.highgain = this.params.highgain;
  }

  /*
      *
      *Tools to build sounds 
      */


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




  isNumber(arg) {
    return toString.call(arg) === '[object Number]' && arg === +arg;
  }



  isInRange(arg, min, max) {
    if (!this.isNumber(arg) || !this.isNumber(min) || !this.isNumber(max))
      return false;

    return arg >= min && arg <= max;
  }


  // Takes a number from 0 to 1 and normalizes it to fit within range floor to ceiling
  normalize(num, floor, ceil) {
    if (!this.isNumber(num) || !this.isNumber(floor) || !this.isNumber(ceil))
      return;

    return ((ceil - floor) * num) / 1 + floor;
  }

  /*
    * Setters for each param
    *
    * 
    */

  set lowgain(_lowGain) {
    if (!this.isInRange(_lowGain, 0, 1))
      return;
    this.params.lowgain = _lowGain;
    this.overdrives[0].curve = this.getDistortionCurve(this.normalize(_lowGain, 0, 150));
  }

  set midlowgain(_midLowGain) {
    if (!this.isInRange(_midLowGain, 0, 1))
      return;
    this.params.midlowgain = _midLowGain;
    this.overdrives[1].curve = this.getDistortionCurve(this.normalize(_midLowGain, 0, 150));

  }

  set midhighgain(_midHighGain) {
    if (!this.isInRange(_midHighGain, 0, 1))
      return;
    this.params.midhighgain = _midHighGain;
    this.overdrives[2].curve = this.getDistortionCurve(this.normalize(_midHighGain, 0, 150));
  }
  set highgain(_highGain) {
    if (!this.isInRange(_highGain, 0, 1))
      return;
    this.params.highgain = _highGain;
    this.overdrives[3].curve = this.getDistortionCurve(this.normalize(_highGain, 0, 150));
  }

  set status(_sig) {
    if (_sig === "enable") {
      this.params.status = "enable";
      this._input.disconnect(this._output);
      this.connectNodes();

    }
    else if (_sig === "disable") {
      this.params.status = "disable";
      this._input.disconnect(this.dryGainNode);
      this._input.disconnect(this.wetGainNode);
      this._input.connect(this._output);
    }
  }

}


window.WasabiQuadraFuzz = class WasabiQuadraFuzz extends WebAudioPluginFactory {

  constructor(context, baseUrl) {
    super(context, baseUrl);
  }

}
AudioContext.prototype.createWasabiQuadraFuzzCompositeNode =
  OfflineAudioContext.prototype.createWasabiQuadraFuzzCompositeNode = function (options) {
    return new QuadraFuzz(this, options);
  };
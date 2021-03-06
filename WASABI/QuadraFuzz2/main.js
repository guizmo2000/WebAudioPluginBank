/*  ################################## Quadrafuzz ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard
*/
class QuadraFuzz {



  constructor(ctx) {
    this.context = ctx ? ctx : new AudioContext;

    /*    ################     API PROPERTIES    ###############   */

    this.state;
    this.inputs = [];
    this.outputs = [];


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

    // P3 : Json descriptor
    this.descriptor = {
      "lowGain": {
        "key": "lowGain",
        "type": "linear",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.6,
        "unit": "",
        "label": "lowGain",
        "flag": ""
      },

      "midLowGain": {
        "key": "midLowGain",
        "type": "linear",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.8,
        "unit": "",
        "label": "midLowGain",
        "flag": ""
      },

      "midHighGain": {
        "key": "midHighGain",
        "type": "linear",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.5,
        "unit": "",
        "label": "midHighGain",
        "flag": ""
      },

      "highGain": {
        "key": "highGain",
        "type": "linear",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.5,
        "unit": "ms",
        "label": "highGain",
        "flag": ""
      }


    }
    // params 
    this.params = {
      "lowgain": this.descriptor.lowGain.default,
      "midlowgain": this.descriptor.midLowGain.default,
      "midhighgain": this.descriptor.midHighGain.default,
      "highgain": this.descriptor.highGain.default,
      "status": "disabled"
    }
    // p5 patchnames
    this.patchNames = ["patch1"];

    this.setup();
  }

  /*    ################     API METHODS    ###############   */

  // p9 count inputs

  get numberOfInputs(){
    return this.inputs.length;
  }

  get numberOfOutputs(){
    return this.outputs.length;
  }

  inputChannelCount() {
    return 1;
  }
  outputChannelCount(){
    return 1;
  }
  getMetadata() {
    return this.metadata;
  }

  getDescriptor() {
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
    if (key == "lowgain") {
      this.getLowGain();
    } else if (key == "midlowgain") {
      this.getMidLowGain();
    } else if (key == "midhighgain") {
      this.getMidHighGain();
    } else if (key == "highgain") {
      this.getHighGain();
    } else if (key == "status") {
      return this.params.status;
    } else {
      console.log("this parameter isn't used in Wasabi-Quadrafuzz");
    }
  }

  setParam(key, value) {
    if (key == "lowgain") {
      this.setLowGain(value);
    } else if (key == "midlowgain") {
      this.setMidLowGain(value);
    } else if (key == "midhighgain") {
      this.setMidHighGain(value);
    } else if (key == "highgain") {
      this.setHighGain(value);
    } else if (key == "status") {
      try {
        this.setStatus(value);

      } catch (error) {
       // default position is disable for pedals, so trying restore in a disable state throw an error.
       console.log(error,"but this is normal don't worry")
      }
    } else {
      console.log("this parameter isn't used in Wasabi-Quadrafuzz");
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
    console.log("Quadrafuzz setup");
    this.createIO();
    this.createNodes();
    this.connectNodes();
    this.linktoParams();
  }

  createIO() {
    this.inputNode = this.context.createGain();
    this.outputNode = this.context.createGain();
    this.inputs.push(this.inputNode);
    this.outputs.push(this.outputNode);
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
    this.inputNode.connect(this.wetGainNode);
    this.inputNode.connect(this.dryGainNode);
    this.dryGainNode.connect(this.outputNode);

    var filters = [this.lowpassLeft, this.bandpass1Left, this.bandpass2Left, this.highpassLeft];
    for (var i = 0; i < filters.length; i++) {
      this.wetGainNode.connect(filters[i]);
      filters[i].connect(this.overdrives[i]);
      this.overdrives[i].connect(this.outputNode);
    }

  }

  linktoParams() {
    /*
     * set default value for parameters and assign it to the web audio nodes
     */
    this.setLowGain(this.params.lowgain);
    this.setMidLowGain(this.params.midlowgain);
    this.setMidHighGain(this.params.midhighgain);
    this.setHighGain(this.params.highgain);
  }


  getInput(index) {
    return this.inputs[index];
  }
  getOutput(index) {
    return this.outputs[index];
  }

  getLowGain() {
    return this.params.lowGain;
  }

  getMidLowGain() {
    return this.params.midlowgain;
  }
  getMidHighGain() {
    return this.params.midhighgain;
  }
  getHighGain() {
    return this.params.highgain;
  }



  // delay tools


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

  setLowGain(_lowGain) {
    if (!this.isInRange(_lowGain, 0, 1))
      return;
    this.params.lowgain = _lowGain;
    this.overdrives[0].curve = this.getDistortionCurve(this.normalize(_lowGain, 0, 150));
  }

  setMidLowGain(_midLowGain) {
    if (!this.isInRange(_midLowGain, 0, 1))
      return;
    this.params.midlowgain = _midLowGain;
    this.overdrives[1].curve = this.getDistortionCurve(this.normalize(_midLowGain, 0, 150));

  }

  setMidHighGain(_midHighGain) {
    if (!this.isInRange(_midHighGain, 0, 1))
      return;
    this.params.midhighgain = _midHighGain;
    this.overdrives[2].curve = this.getDistortionCurve(this.normalize(_midHighGain, 0, 150));
  }
  setHighGain(_highGain) {
    if (!this.isInRange(_highGain, 0, 1))
      return;
    this.params.highgain = _highGain;
    this.overdrives[3].curve = this.getDistortionCurve(this.normalize(_highGain, 0, 150));
  }

  setStatus(data) {
    this.params.status = data;
    if (data == "enable") {
      console.log("enable");
      this.inputNode.disconnect(this.outputNode);
      this.connectNodes();
    } else if (data == "disable") {
      console.log("disable");
      this.inputNode.disconnect(this.dryGainNode);
      this.inputNode.disconnect(this.wetGainNode);
      this.inputNode.connect(this.outputNode);

    }
  }


  connect(audioNode) {
    this.getOutput(0).connect(audioNode);
  }

  disconnect(audioNode) {
    this.getOutput(0).disconnect(audioNode);
  }

}


var WAPlugin = WAPlugin || {};

WAPlugin.WasabiQuadraFuzz = class WasabiQuadraFuzz {

  constructor(context, baseUrl) {
    this.context = context;
    this.baseUrl = baseUrl;
  }

  load() {
    return new Promise((resolve, reject) => {
      try {
        this.plug = new QuadraFuzz(this.context);
        resolve(this.plug);
      } catch (e) {
        reject(e);
      }
    });
  }

  loadGui() {
    return new Promise((resolve, reject) => {
      this.plug.setParam('status', 'disable');
      try {
        // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
        let url = this.baseUrl + "/main.html";


        if (!this.linkExists(url)) {
          // LINK DOES NOT EXIST, let's add it to the document
          var link = document.createElement('link');
          link.rel = 'import';
          //link.id = 'urlPlugin';
          link.href = url;
          document.head.appendChild(link);



          link.onload = (e) => {
            // the file has been loaded, instanciate GUI
            // and get back the HTML elem
            // HERE WE COULD REMOVE THE HARD CODED NAME
            console.log(this.plug);
            var element = createQuadraFuzzGui(this.plug);
            //element._plug = this.plug;
            resolve(element);
          }
        } else {
          // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
          // so we can create another instance
          console.log(this.plug);
          var element = createQuadraFuzzGui(this.plug);
          //element._plug = this.plug;
          resolve(element);
        }
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  };

  linkExists(url) {
    return document.querySelectorAll(`link[href="${url}"]`).length > 0;

  }


}
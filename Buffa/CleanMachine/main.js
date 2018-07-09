/*  ################################## PingPongDelay ########################################  */

/* ES6 web audio class following the API standard
 * Author : Guillaume Etevenard
 */
window.CleanMachine = class CleanMachine extends WebAudioPluginCompositeNode {

  constructor(ctx, options) {
    /*    ################     API PROPERTIES    ###############   */
    super(ctx, options)

    //this.addParam({name:'feedback', defaultValue: 0.5, minValue: 0, maxValue: 1 });
    //this.addParam({name: 'time',defaultValue: 0.5, minValue: 0, maxValue: 1 });
    //this.addParam({name: 'mix',defaultValue: 0.5, minValue: 0, maxValue: 1 });

    /*this.params = {
      "feedback": this._descriptor.feedback.defaultValue,
      "mix": this._descriptor.mix.defaultValue,
      "time": this._descriptor.time.defaultValue,
      "status": "disable"
    }
*/

    this.reverbImpulses = [{
        name: "Fender Hot Rod",
        url: "assets/impulses/reverb/cardiod-rear-levelled.wav"
      },
      {
        name: "PCM 90 clean plate",
        url: "assets/impulses/reverb/pcm90cleanplate.wav"
      },
      {
        name: "Scala de Milan",
        url: "assets/impulses/reverb/ScalaMilanOperaHall.wav"
      }
    ];
    this.cabinetImpulses = [{
        name: "Vintage Marshall 1",
        url: "assets/impulses/cabinet/Block%20Inside.wav"
      },
      {
        name: "Vox Custom Bright 4x12 M930 Axis 1",
        url: "assets/impulses/cabinet/voxCustomBrightM930OnAxis1.wav"
      },
      {
        name: "Fender Champ, axis",
        url: "assets/impulses/cabinet/FenderChampAxisStereo.wav"
      },
      {
        name: "Marshall 1960, axis",
        url: "assets/impulses/cabinet/Marshall1960.wav"
      }
    ];
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
    return 1
  }
  getMetadata() {
    return this.metadata;
  }

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
    //console.log(key, value);
    try {
      this[key] = (value);
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

    this.createNodes();
    this.connectNodes();
    this.linktoParams();
  }

  createNodes() {
    // Create WebAudio nodes
    this.eq = new Equalizer(this.context);
    this.reverb = new Convolver(this.context, this.URL, this.reverbImpulses, "reverbImpulses");
    this.cabinetSim = new Convolver(this.context, this.URL, this.cabinetImpulses, "cabinetImpulses");
    this.boost = new Boost(this.context);
  }

  connectNodes() {
    /*
    // Connect EQ nodes


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
    */
  }

  linktoParams() {
    /*
     * set default value for parameters and assign it to the web audio nodes
     */

     /*
    this.time = this.params.time;
    this.feedback = this.params.feedback;
    this.mix = this.params.mix;
    */
  }
  /*
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
    if (_mix < this._descriptor.mix.maxValue && _mix > this._descriptor.mix.minValue) this.params.mix = _mix;
    this.dryGainNode.gain.setValueAtTime(this.getDryLevel(this.params.mix), this.context.currentTime);
    this.wetGainNode.gain.setValueAtTime(this.getWetLevel(this.params.mix), this.context.currentTime);
  }

  set status(_sig) {
    if (_sig === "enable") {
      this.params.status = "enable";
      this._input.disconnect(this._output);
      this._input.connect(this.feedbackGainNode);
      this._input.connect(this.dryGainNode);
    } else if (_sig === "disable") {
      this.params.status = "disable";
      this._input.disconnect(this.feedbackGainNode);
      this._input.disconnect(this.dryGainNode);
      this._input.connect(this._output);
    }
  }

*/

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

//----------------- CLASS FOR EQ -------------------
function Equalizer(ctx) {
  var filters = [];

  // Set filters
  [60, 170, 350, 1000, 3500, 10000].forEach(function (freq, i) {
    var eq = ctx.createBiquadFilter();
    eq.frequency.value = freq;
    eq.type = "peaking";
    eq.gain.value = 0;
    filters.push(eq);
  });

  // Connect filters in serie
  //sourceNode.connect(filters[0]);

  for (var i = 0; i < filters.length - 1; i++) {
    filters[i].connect(filters[i + 1]);
  }

  // connect the last filter to the speakers
  //filters[filters.length - 1].connect(ctx.destination);

  function changeGain(sliderVal, nbFilter) {
    // sliderVal in [-30, +30] dB
    var value = parseFloat(sliderVal);
    filters[nbFilter].gain.value = value;

    // update output labels
    //var output = document.querySelector("#gain" + nbFilter);
    //output.value = value + " dB";

    // update sliders
    //var numSlider = nbFilter + 1;
    //var slider = document.querySelector("#EQ" + numSlider + "slider");
    //slider.value = value;

    // refresh amp slider state in the web component GUI
    //var sliderWC = document.querySelector("#slider" + (nbFilter+1));
    // second parameter set to false will not fire an event
    //sliderWC.setValue(parseFloat(sliderVal).toFixed(0), false);
  }

  function setValues(values) {
    values.forEach(function (val, index) {
      changeGain(val, index);
    });
  }

  function getValues() {
    var values = [];
    filters.forEach(function (f, index) {
      values.push(f.gain.value);
    });
    return values;
  }

  return {
    input: filters[0],
    output: filters[filters.length - 1],
    setValues: setValues,
    getValues: getValues,
    changeGain: changeGain
  };
}
//----------------- END OF EQ --------------------------

//----------------- Class for CONVOLVER (Reverb, Cabinet Simulation) --------------
// ---------------- used for both reverb and cabinet simulation -------------------

function Convolver(context, pluginURL, impulses, menuId) {
  var convolverNode, convolverGain, directGain;
  // create source and gain node
  var inputGain = context.createGain();
  var outputGain = context.createGain();
  var decodedImpulse;

  var irDefaultURL = pluginURL + "assets/impulses/reverb/cardiod-rear-levelled.wav";
  var ir1 = pluginURL + "assets/impulses/reverb/pcm90cleanplate.wav";
  var ir2 = pluginURL + "assets/impulses/reverb/ScalaMilanOperaHall.wav";

  var menuIRs;
  var IRs = impulses;

  var currentImpulse = IRs[0];
  var defaultImpulseURL = IRs[0].url;

  convolverNode = context.createConvolver();
  convolverNode.buffer = decodedImpulse;

  convolverGain = context.createGain();
  convolverGain.gain.value = 0;

  directGain = context.createGain();
  directGain.gain.value = 1;

  //buildIRsMenu(menuId);
  buildAudioGraphConvolver();
  setGain(0.2);
  loadImpulseByUrl(defaultImpulseURL);

  // Loads a sample and decode it using ES6 new syntax
  // returns a promise
  function loadSample(audioContext, url) {
    console.log('done');
    return new Promise(function (resolve, reject) {
      fetch(url)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((buffer) => {
          audioContext.decodeAudioData(buffer, (decodedAudioData) => {
            resolve(decodedAudioData);
          });
        });
    });
  }


  function loadImpulseByUrl(url) {
    // Load default impulse
    const samples = Promise.all([loadSample(context, url)]).then(setImpulse);
  }

  function loadImpulseByName(name) {
    if (name === undefined) {
      name = IRs[0].name;
      console.log("loadImpulseByName: name undefined, loading default impulse " + name);
    }

    var url = "none";
    // get url corresponding to name
    for (var i = 0; i < IRs.length; i++) {
      if (IRs[i].name === name) {
        url = IRs[i].url;
        currentImpulse = IRs[i];
        //menuIRs.value = i;
        break;
      }
    }
    if (url === "none") {
      console.log("ERROR loading reverb impulse name = " + name);
    } else {
      console.log("loadImpulseByName loading " + currentImpulse.name);
      loadImpulseByUrl(url);
    }
  }
  /*
    function loadImpulseFromMenu() {
        var url = IRs[menuIRs.value].url;
        currentImpulse = IRs[menuIRs.value];
        console.log("loadImpulseFromMenu loading " + currentImpulse.name);
        loadImpulseByUrl(url);
    }
  */
  function setImpulse(param) {
    // we get here only when the impulse is loaded and decoded
    console.log("impulse loaded and decoded");
    convolverNode.buffer = param[0];
    console.log("convolverNode.buffer set with the new impulse (loaded and decoded");
  }

  function buildAudioGraphConvolver() {
    // direct/dry route source -> directGain -> destination
    inputGain.connect(directGain);
    directGain.connect(outputGain);

    // wet route with convolver: source -> convolver 
    // -> convolverGain -> destination
    inputGain.connect(convolverNode);
    convolverNode.connect(convolverGain);
    convolverGain.connect(outputGain);
  }

  function setGain(value) {
    var v1 = Math.cos(value * Math.PI / 2);
    var v2 = Math.cos((1 - value) * Math.PI / 2);

    directGain.gain.value = v1;
    convolverGain.gain.value = v2;
  }

  function getGain() {
    return 2 * Math.acos(directGain.gain.value) / Math.PI;
  }

  function getName() {
    return currentImpulse.name;
  }

  /*
    function buildIRsMenu(menuId) {
        menuIRs = document.querySelector("#" + menuId);

        IRs.forEach(function (impulse, index) {
            var option = document.createElement("option");
            option.value = index;
            option.text = impulse.name;
            menuIRs.appendChild(option);
        });

        menuIRs.oninput = loadImpulseFromMenu;
    }
    */
  //--------------------------------------
  // API : exposed methods and properties
  // -------------------------------------
  return {
    input: inputGain,
    output: outputGain,
    setGain: setGain,
    getGain: getGain,
    getName: getName,
    loadImpulseByName: loadImpulseByName
  };
}
// ---------------- END OF CONVOLVER -----------------------------------

// ---------------- BOOST ----------------
// Booster, useful to add a "Boost channel"
var Boost = function(context) {
  // Booster not activated by default
  var activated = false;

  var input = context.createGain();
  var inputGain = context.createGain();
  inputGain.gain.value = 0;
  var byPass = context.createGain();
  byPass.gain.value = 1;
  var filter = context.createBiquadFilter();
  filter.frequency.value = 3317;
  var shaper = context.createWaveShaper();
  shaper.curve = makeDistortionCurve(640);
  var outputGain = context.createGain();
  outputGain.gain.value = 2;
  var output = context.createGain();

  // build graph
  input.connect(inputGain);
  inputGain.connect(shaper);
  shaper.connect(filter);
  filter.connect(outputGain);
  outputGain.connect(output);

  // bypass route
  input.connect(byPass);
  byPass.connect(output);

  function isActivated() {
      return activated;
  }

  function onOff(wantedState) {
      if(wantedState === undefined) {
          // do not boost
          if(activated) toggle();
          return;
      }
      var currentState = activated;

      if(wantedState !== currentState) {
          toggle();
      }
  }

  function toggle() {
      if(!activated) {
          byPass.gain.value = 0;
          inputGain.gain.value = 1;
      } else {
          byPass.gain.value = 1;
          inputGain.gain.value = 0;
      }
      activated = !activated;
  }

  function setOversampling(value) {
      shaper.oversample = value;
      console.log("boost set oversampling to " + value);
  }

  function makeDistortionCurve(k) {
      var n_samples = 44100; //65536; //22050;     //44100
      var curve = new Float32Array(n_samples);
      var deg = Math.PI / 180;
      for (var i = 0; i < n_samples; i += 1) {
          var x = i * 2 / n_samples - 1;
          curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
      }
      return curve;
  }
  // API
  return {
      input:input,
      output:output,
      onOff: onOff,
      toggle:toggle,
      isActivated: isActivated,
      setOversampling: setOversampling
  };
};

// ---------------- END OF BOOST ---------


window.WasabiCleanMachine = class WasabiCleanMachine extends WebAudioPluginFactory {

  constructor(context, baseUrl) {
    super(context, baseUrl);
  }
}

AudioContext.prototype.createWasabiCleanMachineCompositeNode =
  OfflineAudioContext.prototype.createWasabiCleanMachineCompositeNode = function (options) {
    return new CleanMachine(this, options);
  };
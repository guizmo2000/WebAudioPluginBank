/*  ################################## Web Audio Plugin ########################################  */

/* ES6 web audio class following the API standard
* 
*/
class PluginName {



  constructor(ctx) {
    this.context = ctx ? ctx : new AudioContext;

    /*    ################     API PROPERTIES    ###############   */

    this.state;
    this.inputs = [];
    this.outputs = [];


    // P2 : Json metadata
    this.metadata = {
     
    }

    // P3 : Json descriptor
    this.descriptor = {
      "param1": {
        "key": "name",
        "type": "linear or log",
        "range": {
          "min": 0,
          "max": 1
        },
        "default": 0.6,
        "unit": "",
        "label": "lowGain",
        "flag": ""
      }
      // Add the other parameters
      // "param2...": {
      //   "key": "midLowGain...",
        


    }
    // p5 patchnames
    this.patchNames = ["patch1","..."];

  }

  /*    ################     API METHODS    ###############   */

  // p9 count inputs
  inputChannelCount() {
    return this.inputs.length;
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
    
  }

  setParam(key, value) {
  }

  // P7 state
  getState() {
  }

  setState(data) {
  }


  onMidi(msg) {
    return msg;
    //web midi api ?
  }

  /*  #########  Personnal code for the web audio graph  #########   */
  /**
   * Here you can set up your personnal methods create your nodes or connect it.
   */

  
}

/**
 * Plugin Factory 
 */

var WAPlugin = WAPlugin || {};

WAPlugin.VendorNamePluginName = class VendornamePluginName {

    constructor(context, baseUrl) {
        this.context = context;
        this.baseUrl = baseUrl;
    }

    load() {
      
        return new Promise((resolve, reject) => {
          // if needed you can use a additionnal asyncrone call to a module (audioworklet.addmodule for example)
          try{
            this.plug = new PluginName(this.context);
            resolve(this.plug);
          } catch (e){
            reject(e);
          }
        });
    }

    loadGui() {
          /**
           * Here is to link your HTML GUI to your plugin (if needed)
           * You can take a look at several example like 
           * WASABI/QuadraFuzz/main.js for pure JS module
           * Oliver-Larkin/ThruZeroFlanger2/main.js for audioworklet example
           */
            
    }

}
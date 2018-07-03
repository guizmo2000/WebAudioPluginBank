

//----- 1 - CompositeAudioNode ----
// has connect/disconnect methods
// A custom composite node can be derived from this prototype.



class CompositeAudioNode {
  get _isCompositeAudioNode() {
    return true;
  }

  constructor(context, options) {
    this.context = context;
    /**
     * 
     * @param {AudioContext} context  
     * @param {JSON} options optional, if you want to set set alternate values from the defaultOptions below
     */
    let defaultValues = options ? options : { numberOfInputs: 1, numberOfOuputs: 1, channelCount: 2, channelCountMode: "Max", channelInterpretation: "speakers" };
    this._numberOfInputs = defaultValues.numberOfInputs;
    this._numberOfOuputs = defaultValues.numberOfOuputs;
    this._channelCount = defaultValues.channelCount;
    this._channelCountMode = defaultValues.channelCountMode;
    this._channelInterpretation = defaultValues.channelInterpretation;

    /** 
     * Initial I/O structur and and I/O  of the composite node
     * 
    */
    this.inputs = [];
    this.outputs = [];
    this._input = this.context.createGain();
    this._output = this.context.createGain();
    this.inputs.push(this._input);
    this.outputs.push(this._output);

  }

  connect() {
    for (var i = 0; i < this.outputs.length; i++) {
      this.outputs[i].connect.apply(this._output, arguments);
    }
  }

  disconnect() {
    this._output.disconnect.apply(this._output, arguments);
  }
}



// (2) Override AudioNode.prototype.connect

AudioNode.prototype._connect = AudioNode.prototype.connect;
var that = this;
AudioNode.prototype.connect = function (that) {
  var args = Array.prototype.slice.call(arguments);
  if (args[0]._isCompositeAudioNode && !args[2] && !args[1]) {
    args[0] = args[0]._input;
    args[1] = that._output;
  }
  else if (args[0]._isCompositeAudioNode) args[0] = args[2];
  this._connect.apply(this, args);
};



// -----------------------
// CREATE THE PLUGIN CLASS
// -----------------------
// THIS DEFINES API properties and methods
// that will be inherited with default values
// part of the WAP SDK
class WebAudioPluginCompositeNode extends CompositeAudioNode {
  constructor(context, options) {
    super(context, options);
    this.context = context ? context : new AudioContext;
    this._descriptor = new Object();
    this.params = new Object();
    // Do stuffs below.
  }
  static get parameterDescriptors() {
    return this._descriptor;
  }

  addParam(param) {
    try {
      this._descriptor = Object.assign({ [param.name]: { minValue: param.minValue, maxValue: param.maxValue, defaultValue: param.defaultValue } }, this._descriptor)
    } catch (error) {
      console.err("The structure given does not match with the AudioParam :{ name:'name',defaultValue: 0.25, minValue: 0, maxValue: 1} Doc : https://webaudio.github.io/web-audio-api/#parameterdescriptors ");
    }
  }

  getDescriptor() { // will be discarded
    return this._descriptor;
  }

  getMetadata() { // does not return the thing
    return fetch(this._metadataFileURL).then(json => {
      return (json);
    })

  }

  setParam(key, value) {
    throw new Error('You have to implement the method setParam!')
  }

  getParam() {
    throw new Error('You have to implement the method getParam!')
  }

  get numberOfInputs() {
    return this._numberOfInputs;
  }
  set numberOfInputs(number) {
    this._numberOfInputs = number;
  }

  get numberOfOuputs() {
    return this._numberOfOuputs;
  }
  set numberOfOuputs(number) {
    this._numberOfOuputs = number;
  }

  inputChannelCount() {
    return 2;
  };
  outputChannelCount() {
    return this._channelCount;
  };

  getPatch(index) { };

  setPatch(data, index) { };

  getParam(key) { };

  // P7 state
  async getState() {
    return new Promise((resolve) => {
      resolve({ ...this.params });
    });

  }

  async setState(data) {
    return new Promise((resolve, reject) => {
      try {
        this.gui.setAttribute('state', JSON.stringify(data));
        resolve(true);
      } catch (error) {
        console.log("Gui not defined", error)
        reject();
      }
    })


    Object.keys(data).map(
      (elem, index) => {
        console.log(elem, data[elem]);
        this.setParam(elem, data[elem]);
      }
    )

  }

    onMidi(msg) { };
  }


class WebAudioPluginFactory {

  /**
   * 
   * @param {AudioContext} context 
   * @param {URI} baseUrl 
   * @param {JSON} options 
   */
  constructor(context, baseUrl, options) {
    this.context = context;
    this.baseUrl = baseUrl;
    this.options = options;
    this.MetadataFileURL = this.baseUrl + "/main.json";
    this.classname;
  }

  fetchPlugin() {
    return new Promise((resolve, reject) => {
      fetch(this.MetadataFileURL)
        .then(responseJSON => {
          return responseJSON.json();
        }).then(metadata => {
          resolve(metadata.name);
        });
    });
  }

  load() {
    return new Promise((resolve, reject) => {
      this.fetchPlugin().then(classname => {
        this.classname = classname;
        try {
          this.plug = new window[classname](this.context, this.options);
          this.plug._metadataFileURL = this.MetadataFileURL;
          resolve(this.plug);
        } catch (e) {
          reject(e);
        }

      })
    });
  }

  loadGui() {
    console.log(this.classname);
    return new Promise((resolve, reject) => {
      try {
        this.plug.setParam('status', 'disable');

      } catch (error) {
        console.log("plugin with no on/ off state")
      }
      try {
        // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
        console.log(this.baseUrl);
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
            var element = window['create'+this.classname.toString()](this.plug);
            resolve(element);
          }
        } else {
          console.log("already exist")
          // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
          // so we can create another instance
          var element = window['create'+this.classname.toString()](this.plug);
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


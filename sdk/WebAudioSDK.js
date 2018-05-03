

//----- 1 - CompositeAudioNode ----
// has connect/disconnect methods
// A custom composite node can be derived from this prototype.

class CompositeAudioNode {  
  get _isCompositeAudioNode () {
    return true;
  }
  
  constructor (context, options) {
    this.context = context;
    this._input = this.context.createGain();
    this._output = this.context.createGain();
  }
  
  connect () {
    this._output.connect.apply(this._output, arguments);
  }
  
  disconnect () {
    this._output.disconnect.apply(this._output, arguments);
  }
}

// (2) Override AudioNode.prototype.connect
AudioNode.prototype._connect = AudioNode.prototype.connect;
AudioNode.prototype.connect = function () {
  var args = Array.prototype.slice.call(arguments);
  if (args[0]._isCompositeAudioNode)
    args[0] = args[0]._input;
  
  this._connect.apply(this, args);
};


// -----------------------
// CREATE THE PLUGIN CLASS
// -----------------------
// THIS DEFINES API properties and methods
// that will be inherited with default values
// part of the WAP SDK
class WebAudioPluginCompositeNode extends CompositeAudioNode {
  constructor (context, options) {
    super(context, options);
    this.context = ctx ? ctx : new AudioContext;

    // Do stuffs below.
  }

  set descriptor(descriptor) {
    this._descriptor = descriptor;
  }
  
  getDescriptor() {
    return this._descriptor;
  }
  
  set metadata(metadata) {
    this._metadata = metadata;
  }
  
  getMetadata() {
    return this._metadata;
  }
  
  set params(params) {
    this._params = params;
  }
  
  get params() {
    return this._params;
  }

  inputChannelCount(){};

  getPatch(index){};

  setPatch(data, index){};

  getParam(key){};

  getState(){};

  setState(data){};

  onMidi(msg){};

  
}

/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard, Jordan Sintes
*/
window.WahPedal = class WahPedal extends WebAudioPluginCompositeNode {

	constructor(ctx, options) {
	  /*    ################     API PROPERTIES    ###############   */
	  super(ctx, options)
	  this.state;
	
		this.addParam({name: 'effect', defaultValue: 50, minValue:0, maxValue: 100});

  
	  this.params = {
		"effect": this._descriptor.effect.defaultValue,
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
	  return this.params;
	}
  
	setState(data) {
	  try {
		this.gui.setAttribute('state', JSON.stringify(data));
	  } catch (error) {
		console.log("Gui not defined", error)
		try {
		  document.querySelector('wasabi-pedalwah').setAttribute('state', JSON.stringify(this.params));
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
		
	  this.dryGainNode = this.context.createGain();
	  this.wetGainNode = this.context.createGain();

	  this.lowPass = this.context.createBiquadFilter();
	  this.lowPass.type = "bandpass";
	  this.lowPass.Q.value = 2;
		
	}
  
	connectNodes() {
	  this._input.connect(this.dryGainNode);
	  this.dryGainNode.connect(this.lowPass);
	  this.lowPass.connect(this.wetGainNode);
		this.wetGainNode.connect(this._output);
		
	}
  
	linktoParams() {
	  /*
	   * set default value for parameters and assign it to the web audio nodes
	   */
		this.effect = this.params.effect;
	}

	set effect(_effect) {
         
		if ((_effect < this._descriptor.effect.maxValue) && (_effect > this._descriptor.effect.minValue))
            this.params.effect = _effect;
            this.lowPass.frequency.setValueAtTime(320+_effect*25, this.context.currentTime);
            console.log(320+_effect*22)
		    this.lowPass.Q.setValueAtTime(2+ _effect/20, this.context.currentTime);
            console.log(2+_effect/20)
	}
  
  
	set status(_sig) {
	  if (_sig === "enable") {
		this.params.status = "enable";
		this._input.disconnect(this._output);
		this._input.connect(this.dryGainNode);
	  }
	  else if (_sig === "disable") {
		this.params.status = "disable";
		this._input.disconnect(this.dryGainNode);
		this._input.connect(this._output);
	  }
	}
  


  }
  
  
  //////////////////////////////////////////////////////////////////////////////////////////

window.WasabiWahPedal = class WasabiWahPedal extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new WahPedal(this, options); };


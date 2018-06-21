/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Guillaume Etevenard, Jordan Sintes
*/
window.WahPedal = class WahPedal extends WebAudioPluginCompositeNode {

	constructor(ctx, options) {
	  /*    ################     API PROPERTIES    ###############   */
	  super(ctx, options)
	  this.state;
	
	  this.addParam({name:'frequency', defaultValue: 600, minValue: 320, maxValue: 2500 });
		this.addParam({name: 'resonance',defaultValue: 4, minValue: 2, maxValue: 7 });
		this.addParam({name: 'effect', defaultValue: 600, minValue:320, maxValue: 2500});

  
	  this.params = {
		"frequency": this._descriptor.frequency.defaultValue,
		"resonance": this._descriptor.resonance.defaultValue,
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
	  this.frequency = this.params.frequency;
		this.resonance = this.params.resonance;
		this.effect = this.params.effect;
	}
	set frequency(_frequency) {
		if ((_frequency < this._descriptor.frequency.maxValue) && (_frequency > this._descriptor.frequency.minValue))
			this.params.frequency = _frequency;
			this.lowPass.frequency.setValueAtTime(_frequency, this.context.currentTime);
	}

	set resonance(_resonance) {
		if ((_resonance < this._descriptor.resonance.maxValue) && (_resonance > this._descriptor.resonance.minValue))
			this.params.resonance = _resonance;
			this.lowPass.Q.setValueAtTime(_resonance, this.context.currentTime);
	}

	set effect(_effect) {
		if ((_effect < this._descriptor.effect.maxValue) && (_effect > this._descriptor.effect.minValue))
			this.params.effect = _effect;
			this.lowPass.frequency.setValueAtTime(_effect, this.context.currentTime);
			if(this.lowPass.frequency.setValueAtTime(_effect, this.context.currentTime) >=320 && (this.lowPass.frequency.setValueAtTime(_effect, this.context.currentTime)) <=1200){
				this.lowPass.Q.setValueAtTime(2, this.context.currentTime);
			}
			else if(this.lowPass.frequency.setValueAtTime(_effect, this.context.currentTime) >=1201 && (this.lowPass.frequency.setValueAtTime(_effect, this.context.currentTime)) <=2000){
				this.lowPass.Q.setValueAtTime(4.5, this.context.currentTime);
			}
			else{
				this.lowPass.Q.setValueAtTime(7, this.context.currentTime);
			}
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
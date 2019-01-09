/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the structure of Pedal Wah Vox V847, more information: https://www.electrosmash.com/vox-v847-analysis
*/
window.Switcher = class Switcher extends WebAudioPluginCompositeNode {
	constructor(ctx, URL, options) {
		super(ctx, URL, options)
		/*    ################     API PROPERTIES    ###############   */

		this.state;
		this.params = {
			outputNumber : 4,
			stateSwitch: [0, 0, 0, 0]
		}

		
		super.setup();
	}

	/*    ################     API METHODS    ###############   */

	getPatch(index) {
		console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
	}
	setPatch(data, index) {
		console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
	}

	get numberOfOutputs(){
		return this.params.outputNumber;
	}

	setParam(key, value) {
		console.log(key, value);
		try {
			this[key] = (value);
		} catch (error) {
			console.log(key, error)
			console.warn("this plugin does not implement this param")
		}
	}

	createNodes() {
		this.dryGainNode = this.context.createGain();
	}

	connectNodes() {
		if(this.params.stateSwitch[0] == 1){
			this._input.connect(this.dryGainNode);
			this.dryGainNode.connect(this._output[0]);
		}
		else if(this.params.stateSwitch[1] == 1){
			this._input.connect(this.dryGainNode);
			this.dryGainNode.connect(this._output[1]);
		}
		else if(this.params.stateSwitch[2] == 1){
			this._input.connect(this.dryGainNode);
			this.dryGainNode.connect(this._output[2]);
		}
		else if(this.params.stateSwitch[3] == 1){
			this._input.connect(this.dryGainNode);
			this.dryGainNode.connect(this._output[3]);
		}
	}

	/*  #########  Personnal code for the web audio graph  #########   */

}


//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiSwitcher = class WasabiSwitcher extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new Switcher(this, options); };


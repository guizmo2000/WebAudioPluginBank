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
		this._numberOfOutputs=4;
		this.params = {
			mode1:-1,
			mode2:-1,
			mode3:-1,
			mode4:-1,
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
    
    get numberOfOutputs() {
		return this._numberOfOutputs;
	}
	set numberOfOutputs(num) {
		this._numberOfOutputs = num;
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
		this.dryGainNodeMode1 = this.context.createGain();
		this.dryGainNodeMode2 = this.context.createGain();
		this.dryGainNodeMode3 = this.context.createGain();
		this.dryGainNodeMode4 = this.context.createGain();
	}

	connectNodes() {
		if(this.params.mode1 === -1 && this.params.mode2 === -1 && this.params.mode3 === -1 && this.params.mode4 === -1){
			this._input.connect(this._output);
		}else{
			this._input.disconnect(this._output);
		}
		
	}

	/*  #########  Personnal code for the web audio graph  #########   */

	
	set mode1(_sig){
		this.params.mode1=_sig;
		if (this.params.mode1=== 1){
			this._input.connect(this.dryGainNodeMode1);
			this.dryGainNodeMode1.connect(this._output);
		}
		else if (this.params.mode1 === 0){
			this.dryGainNodeMode1.disconnect(this._output);
			this._input.disconnect(this.dryGainNodeMode1);
		}
	}

	set mode2(_sig){
		this.params.mode2=_sig;
		if (this.params.mode2=== 1){
			this._input.connect(this.dryGainNodeMode2);
			this.dryGainNodeMode2.connect(this._output);
		}
		else if (this.params.mode2 === 0){
			this.dryGainNodeMode2.disconnect(this._output);
			this._input.disconnect(this.dryGainNodeMode2);
		}
	}

	set mode3(_sig){
		this.params.mode3=_sig;
		if (this.params.mode3=== 1){
			this._input.connect(this.dryGainNodeMode3);
			this.dryGainNodeMode3.connect(this._output);
		}
		else if (this.params.mode3 === 0){
			this.dryGainNodeMode3.disconnect(this._output);
			this._input.disconnect(this.dryGainNodeMode3);
		}
	}

	set mode4(_sig){
		this.params.mode4=_sig;
		if (this.params.mode4=== 1){
			this._input.connect(this.dryGainNodeMode4);
			this.dryGainNodeMode4.connect(this._output);
		}
		else if (this.params.mode4 === 0){
			this.dryGainNodeMode4.disconnect(this._output);
			this._input.disconnect(this.dryGainNodeMode4);
		}
	}
	
}


//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiSwitcher = class WasabiSwitcher extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new Switcher(this, options); };


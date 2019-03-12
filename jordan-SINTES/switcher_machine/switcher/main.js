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
		
		
		for(let i = 1; i< this.numberOfOutputs; i++){
			let numChannel = "output" + this.numberOfOutputs +1;
			this[numChannel]= this.context.createGain();
			this.outputs.push(this[numChannel]);
			this.outputs.forEach(output => {
				output.gain.setValueAtTime(1 / Math.sqrt(this.numberOfOutputs), this.context.currentTime);
			});

		}
		
		console.log(this.outputs);
		
	}

	connectNodes() {
		/*this._input.connect(this.outputs[0]);
		this._input.connect(this.outputs[1]);
		this._input.connect(this.outputs[2]);
		this._input.connect(this.outputs[3]);*/
	}

	/*  #########  Personnal code for the web audio graph  #########   */

	
	set mode1(_sig){
		this.params.mode1=_sig;
		if (this.params.mode1=== 1){
			this._input.connect(this.outputs[0]);
		}
		else if (this.params.mode1 === 0){
			this._input.disconnect(this.outputs[0]);
		}
	}

	set mode2(_sig){
		this.params.mode2=_sig;
		if (this.params.mode2=== 1){
			this._input.connect(this.outputs[1]);
		}
		else if (this.params.mode2 === 0){
			this._input.disconnect(this.outputs[1]);
		}
	}

	set mode3(_sig){
		this.params.mode3=_sig;
		if (this.params.mode3=== 1){
			this._input.connect(this.outputs[2]);
		}
		else if (this.params.mode3 === 0){
			this._input.disconnect(this.outputs[2]);
		}
	}

	set mode4(_sig){
		this.params.mode4=_sig;
		if (this.params.mode4=== 1){
			this._input.connect(this.outputs[3]);
		}
		else if (this.params.mode4 === 0){
			this._input.disconnect(this.outputs[3]);
		}
	}
	
}


//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiSwitcher = class WasabiSwitcher extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new Switcher(this, options); };


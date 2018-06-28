/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the structure of Pedal Wah Vox V847, more information: https://www.electrosmash.com/vox-v847-analysis
*/
window.WahVox = class WahVox extends WebAudioPluginCompositeNode {

	constructor(ctx, options) {
		/*    ################     API PROPERTIES    ###############   */
		super(ctx, options)
		this.state;

		this.addParam({ name: 'effect', defaultValue: 50, minValue: 0, maxValue: 100 });


		this.params = {
			"effect": this._descriptor.effect.defaultValue,
			"status": "disable",
			qMin: 7,
			qMax: 2,
			freqMin: 450,
			freqMax: 1600,
			gain: 18
		}

		this.setup();
	}

	/*    ################     API METHODS    ###############   */
	// p9 count inputs

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
				document.querySelector('wasabi-wahvox').setAttribute('state', JSON.stringify(this.params));
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

		this.bandPass = this.context.createBiquadFilter();
		this.bandPass.type = "bandpass";
		this.bandPass.frequency.value = 750;
		this.bandPass.Q.value = this.map(this.lowPass.frequency.value,this.params.freqMin, this.params.freqMax,this.params.qMin, this.params.qMax);
		this.bandPass.gain.value = this.params.gain;
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

	//To change the amplitude depends on parameter
	map(value, istart, istop, ostart, ostop) {
		return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
	}

	set effect(_effect) {
		/* Effect is between 0-100, but kbob  logarothmic (check question git), the middle position isn't the median value
		*here the logarithmic is applied on frequency but we must change if knob can be logarithmic. Otherwise, using map function
		* freq = this.map(_effect, 0, 100, this.param.min, this.param.max)
		*/
		console.log("effect: "+ _effect)
		if(_effect === 0) _effect = 0.1;
		console.log("effect avant log " + _effect);

		// conversion manuelle en log
		_effect = Math.log(_effect);

		console.log("effect apres log " + _effect);

		// normalisation entre freq min et freqmax
		let freq = this.map(_effect, Math.log(1), Math.log(100), this.params.freqMin, this.params.freqMax);
		//let freq = this.map(_effect, 1, 100, this.params.freqMin, this.params.freqMax);
		console.log("effect apres map " + freq);

		// _effect entre 0 et 1, plus simple à gérer
		this.lowPass.frequency.setValueAtTime(freq, this.context.currentTime);
		var qparam = this.map(freq, this.params.freqMin, this.params.freqMax, this.params.qMin, this.params.qMax);
		this.lowPass.Q.setValueAtTime(qparam, this.context.currentTime);

		console.log("f=" + freq + " q =" + qparam);
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

window.WasabiWahVox = class WasabiWahVox extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new WahVox(this, options); };


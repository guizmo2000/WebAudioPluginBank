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
			"mode": 1,
			"status": "disable",
			"boost": "disable",
			qMin: 7,
			qMax: 2,
			freqMin: 450,
			freqMax: 1600,
			gain: 1,
			gainnotboosted: Math.pow(10, (18 / 20)), // refers to: https://stackoverflow.com/questions/22604500/web-audio-api-working-with-decibels
			gainboosted: Math.pow(10, (24 / 20))
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

	setGaintoDB(gain) {
		Math.pow(10, (gain / 20));
	}

	setup() {
		console.log("delay setup");
		this.createNodes();
		this.setInitalGain();
		this.connectNodes();
		this.linktoParams();
	}


	createNodes() {
		this.dryGainNode = this.context.createGain();
		this.wetGainNode = this.context.createGain();


		this.bandPass = this.context.createBiquadFilter();
		this.bandPass.type = "bandpass";
		this.bandPass.frequency.value = 750;
		this.bandPass.Q.value = this.map(this.bandPass.frequency.value, this.params.freqMin, this.params.freqMax, this.params.qMin, this.params.qMax);
		this.bandPass.gain.value = this.params.gain;
	}

	setInitalGain() {
		this._input.gain.setValueAtTime(this.params.gain, this.context.currentTime);
	}

	connectNodes() {
		this._input.connect(this.dryGainNode);
		this.dryGainNode.connect(this.bandPass);
		this.bandPass.connect(this.wetGainNode);
		this.wetGainNode.connect(this._output);
	}



	linktoParams() {
		/*
		 * set default value for parameters and assign it to the web audio nodes
		 */
		this.effect = this.params.effect;
		this.mode = this.params.mode;
	}

	//To change the amplitude depends on parameter
	map(value, istart, istop, ostart, ostop) {
		return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
	}


	set effect(_effect) {
		if (this.mode === 1) {
			//Logarithmic Mode
			/* Effect is between 0-100, but kbob  logarothmic (check question git), the middle position isn't the median value
			*here the logarithmic is applied on frequency but we must change if knob can be logarithmic. Otherwise, using map function
			*freq = this.map(_effect, 0, 100, this.param.min, this.param.max)
			*/

			if (_effect === 0) _effect = 1;

			// conversion manuelle en log
			_effect = Math.log(_effect);

			// normalisation entre freq min et freqmax
			let freq = this.map(_effect, Math.log(1), Math.log(100), this.params.freqMin, this.params.freqMax);
			//let freq = this.map(_effect, 1, 100, this.params.freqMin, this.params.freqMax);

			// _effect entre 0 et 1, plus simple à gérer
			this.bandPass.frequency.setValueAtTime(freq, this.context.currentTime);
			var qparam = this.map(freq, this.params.freqMin, this.params.freqMax, this.params.qMin, this.params.qMax);
			this.bandPass.Q.setValueAtTime(qparam, this.context.currentTime);

			console.log("f=" + freq + " q =" + qparam);
		}

		else if (this.mode === 2) {
			//Exponential mode (same remark as for the logarithm)
			_effect = _effect / 100;
			// conversion manuelle en log
			_effect = Math.exp(_effect);



			// normalisation entre freq min et freqmax
			let freq = this.map(_effect, Math.exp(0), Math.exp(1), this.params.freqMin, this.params.freqMax);
			//let freq = this.map(_effect, 1, 100, this.params.freqMin, this.params.freqMax);

			// _effect entre 0 et 1, plus simple à gérer
			this.bandPass.frequency.setValueAtTime(freq, this.context.currentTime);
			var qparam = this.map(freq, this.params.freqMin, this.params.freqMax, this.params.qMin, this.params.qMax);
			this.bandPass.Q.setValueAtTime(qparam, this.context.currentTime);

			console.log("f=" + freq + " q =" + qparam);
		}

		else if (this.mode === 3) {
			//Linear mode
			if (_effect === 0) _effect = 1;
			let freq = this.map(_effect, 1, 100, this.params.freqMin, this.params.freqMax);
			this.bandPass.frequency.setValueAtTime(freq, this.context.currentTime);
			var qparam = this.map(freq, this.params.freqMin, this.params.freqMax, this.params.qMin, this.params.qMax);
			this.bandPass.Q.setValueAtTime(qparam, this.context.currentTime);
			console.log("f=" + freq + " q =" + qparam);
		}


	}

	set status(_sig) {
		if (_sig === "enable") {
			this.params.status = "enable";
			this._input.disconnect(this._output);
			this._input.connect(this.dryGainNode);
			if (this.params.boost === "enable") {
				this._input.gain.setValueAtTime(this.params.gainboosted, this.context.currentTime);
			}
			else if (this.params.boost === "disable") {
				this._input.gain.setValueAtTime(this.params.gainnotboosted, this.context.currentTime);
			}
		}
		else if (_sig === "disable") {
			this.params.status = "disable";
			this._input.disconnect(this.dryGainNode);
			this._input.connect(this._output);
			this._input.gain.setValueAtTime(this.params.gain, this.context.currentTime);
		}
	}

	set boost(_sig) {

		if (this.params.status === "enable") {
			if (_sig === "enable") {
				this.params.boost = "enable";
				this._input.gain.setValueAtTime(this.params.gainboosted, this.context.currentTime);
			}
			else if (_sig === "disable") {
				this.params.boost = "disable";
				this._input.gain.setValueAtTime(this.params.gainnotboosted, this.context.currentTime);
			}
		}

		else if (this.params.status === "disable") {
			console.log("Boost aren't avaiable");
			this._input.gain.setValueAtTime(this.params.gain, this.context.currentTime);
		}

	}

	set freqMinMax(_sig) {
		if (_sig === 1){
			this.params.freqMin=250;
			this.params.freqMax=1400;
		}

		else if (_sig === 2){
			this.params.freqMin=350;
			this.params.freqMax=1500;
		}

		else if (_sig === 3){
			this.params.freqMin=450;
			this.params.freqMax=1600;
		}

		else if (_sig === 4){
			this.params.freqMin=550;
			this.params.freqMax=1700;
		}

		else if (_sig === 5){
			this.params.freqMin=650;
			this.params.freqMax=1800;
		}
	}


}


//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiWahVox = class WasabiWahVox extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new WahVox(this, options); };


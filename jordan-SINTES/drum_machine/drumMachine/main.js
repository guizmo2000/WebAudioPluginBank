/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Scheduling web audio with precisions: https://www.html5rocks.com/en/tutorials/audio/scheduling/
*/

window.DrumMachine = class DrumMachine extends WebAudioPluginCompositeNode {
    constructor(ctx, options){
        super(ctx, options)
        this.state;

        this.addParam({ 
            name: 'kickPitchVal', defaultValue: 0.5, minValue: 0, maxValue:1,
            name: 'snarePitchVal', defaultValue: 0.5, minValue: 0, maxValue:1,
            name: 'hihatPitchVal', defaultValue: 0.5, minValue: 0, maxValue:1,
            name: 'tom1PitchVal', defaultValue: 0.5, minValue: 0, maxValue:1,
            name: 'tom2PitchVal', defaultValue: 0.5, minValue: 0, maxValue:1,
            name: 'tom3PitchVal', defaultValue: 0.5, minValue: 0, maxValue:1,
            name: 'swingFactor', defaultValue: 0.5, minValue:0, maxValue:1,
        });

        this.params = {
            effectDry
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

    

}



//////////////////////////////////////////////////////////////////////////////////////////////////

window.WasabiDrumMachine = class WasabiDrumMachine extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioCompletionEvent.prototype.createWasabiDelayCompositeNode = function (options) { return new DrumMachine(this, options); };

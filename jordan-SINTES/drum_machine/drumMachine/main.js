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
			 
        });

        this.params = {
			timeWorker : null,
			lastDrawTime : -1,
			 kNumInstruments : 6,
			 kInitialKitIndex: 10,
			 kMaxSwing: .08,

			 beatReset : {
							 "kitIndex":0,
							 "tempo":100,
							 "swingFactor":0,
							 "kickPitchVal":0.5,
							 "snarePitchVal":0.5,
							 "hihatPitchVal":0.5,
							 "tom1PitchVal":0.5,
							 "tom2PitchVal":0.5,
							 "tom3PitchVal":0.5,
							 "rhythm1":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							 "rhythm2":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							 "rhythm3":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							 "rhythm4":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							 "rhythm5":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							 "rhythm6":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
						},
			beatInitial : {
							"kitIndex":11,
							"tempo":100,
							"swingFactor":0,
							"kickPitchVal":0.46478873239436624,
							"snarePitchVal":0.45070422535211263,
							"hihatPitchVal":0.15492957746478875,
							"tom1PitchVal":0.7183098591549295,
							"tom2PitchVal":0.704225352112676,
							"tom3PitchVal":0.8028169014084507,
							"rhythm1":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							"rhythm2":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							"rhythm3":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							"rhythm4":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							"rhythm5":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
							"rhythm6":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
						},
			theBeat : cloneBeat(beatReset),

			kickPitch : 0,
			snarePitch : 0,
			hihatPitch : 0,
			tom1Pitch : 0,
			tom2Pitch : 0,
			tom3Pitch : 0,

			mouseCapture : null,
			mouseCaptureOffset =0,

			loopLength : 16,
			rhythmIndex : 0,
			kMinTempo : 52,
			kMaxTempo : 180,
			noteTime : 0.0,

			instruments : ['Kick', 'Snare', 'HiHat', 'Tom1', 'Tom2', 'Tom3'],
			volumes : [0, 0.3, 1],
			kitName : [
				"R8",
				"CR78",
				"KPR77",
				"LINN",
				"Kit3",
				"Kit8",
				"Techno",
				"Stark",
				"breakbeat8",
				"breakbeat9",
				"breakbeat13",
				"acoustic-kit",
				"4OP-FM",
				"TheCheebacabra1",
				"TheCheebacabra2"
			],
			kitNamePretty : [
				"Roland R-8",
    			"Roland CR-78",
    			"Korg KPR-77",
    			"LinnDrum",
    			"Kit 3",
    			"Kit 8",
    			"Techno",
    			"Stark",
    			"Breakbeat 8",
    			"Breakbeat 9",
    			"Breakbeat 13",
    			"Acoustic Kit",
    			"4OP-FM",
    			"The Cheebacabra 1",
    			"The Cheebacabra 2"
			],

			decodedFunctions : [
				function (buffer) { this.kickBuffer = buffer; },
				function (buffer) { this.snareBuffer = buffer; },
				function (buffer) { this.hihatBuffer = buffer; },
				function (buffer) { this.tom1 = buffer; },
				function (buffer) { this.tom2 = buffer; },
				function (buffer) { this.tom3 = buffer; }
			],



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

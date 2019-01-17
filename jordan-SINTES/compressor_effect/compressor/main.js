/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the structure of Pedal Wah Vox V847, more information: https://www.electrosmash.com/vox-v847-analysis
*/
window.Compressor = class Compressor extends WebAudioPluginCompositeNode {
	constructor(ctx, URL, options) {
		super(ctx, URL, options)
		/*    ################     API PROPERTIES    ###############   */

		this.state;
		this.params = {
			"status": "disable"
        }
        
        this.addParam({ name: 'threshold', defaultValue: -50, minValue: -100, maxValue: 0 });
        this.addParam({ name: 'ratio', defaultValue: 10, minValue: 1, maxValue: 20 });
        this.addParam({ name: 'attack', defaultValue: 0.5, minValue: 0, maxValue: 1 });
        this.addParam({ name: 'release', defaultValue: 0.5, minValue: 0, maxValue: 1 });

		super.setup();
	}

	/*    ################     API METHODS    ###############   */

	getPatch(index) {
		console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
	}
	setPatch(data, index) {
		console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
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
        this.wetGainNode = this.context.createGain();

        this.compressorNode = this.context.createDynamicsCompressor();
        this.compressorNode.threshold.value=-50;
        this.compressorNode.ratio.value=10;
        this.compressorNode.attack.value=0.5;
        this.compressorNode.release.value=0.5;
	}

	connectNodes() {
        this._input.connect(this.dryGainNode);
        this.dryGainNode.connect(this.compressorNode);
        this.compressorNode.connect(this.wetGainNode);
        this.wetGainNode.connect(this._output);
	}

	/*  #########  Personnal code for the web audio graph  #########   */

    set threshold(_threshold){
        this.params.threshold = _threshold;
        this.compressorNode.threshold.value=_threshold;
    }

    set ratio(_ratio){
        this.params.ratio = _ratio;
        this.compressorNode.ratio.value=_ratio;
    }

    set attack(_attack){
        this.params.attack = _attack;
        this.compressorNode.attack.value=_attack;
    }

    set release(_release){
        this.params.release = _release;
        this.compressorNode.release.value=_release;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiCompressor = class WasabiCompressor extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new Compressor(this, options); };


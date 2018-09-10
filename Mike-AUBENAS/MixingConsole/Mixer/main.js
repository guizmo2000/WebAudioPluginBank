//jslint:disable:one-line no-trailing-spaces

window.Mixer = class Mixer extends WebAudioPluginCompositeNode {
	constructor(ctx, URL, options) {
		super(ctx, URL, options)

		this.state;
		this.urlChannel = "https://wasabi.i3s.unice.fr/WebAudioPluginBank/Mike-AUBENAS/MixingConsole/ChannelMixer";
		parent = this;


		if (options) {
			this.arrayNodeToConnect = options.arrayNodeToConnect ? options.arrayNodeToConnect : 'no nodes';
			this._numberOfInputs = options.numberOfInputs ? options.numberOfInputs : 2;
		} else
			this.arrayNodeToConnect = 'no nodes';

		this._metadata =
			{
				"name": "wasabi-Mixer",
				"version": 1,
				"category": "Mixer",
				"type": "Audio",
				"description": "A channel part of a mixer",
				"thumbnailImage": "https://...",
				"URLs": "https://.../doc",
				"authorInformation": "Mike AUBENAS, i3s intern in Nice - Sophia-Antipolis, France"
			}

		this.addParam({ name: 'gain', defaultValue: 0.5, minValue: 0, maxValue: 1 });
		this.addParam({ name: 'nbcanaux', defaultValue: 2, minValue: 2, maxValue: 6 });
		this.gainMin = 0;
		this.gainMax = 1;
		this.nbcanauxMin = 2;
		this.nbcanauxMax = 5;


		this.getNumberOfChannels();

		this.setup();
	}

	get numberOfInputs() {
		return this._numberOfInputs;
	}
	set numberOfInputs(num) {
		this._numberOfInputs = num;
	}

	get numberOfOutputs() {
		return 1;
	}

	get dynamicParam() {
		return { listento: "numberOfInputs", description: "inputs number increase when pushing '+' on GUI" }
	}

	getNumberOfChannels() {
		if (this.arrayNodeToConnect != 'no nodes')
			return this.arrayNodeToConnect.length;
	}


	setParam(key, value) {
		console.log(key, value);
		try {
			this[key] = (value);
		} catch (error) {

			console.log(error);
		}
	}

	getArrayNodeToConnect() { return this.arrayNodeToConnect; }

	setArrayNodeToConnect(arrayMedia) { this.arrayNodeToConnect = arrayMedia; }


	setup() {
		this.createNode();
	}

	createNode() {
		this.master = this.context.createGain();
		this.master.connect(this._output);
		for (let i = 1; i < this.numberOfInputs; i++) {
			let numchannel = "InputForchannel" + this.inputs.length + 1;
			this[numchannel] = this.context.createGain();
			this.inputs.push(this[numchannel]);
		}

	}


	addChannel() {
		if (this.params.nbcanaux < this.nbcanauxMax) {
			this.params.nbcanaux++;
			let numchannel = "InputForchannel" + this.inputs.length + 1;
			this[numchannel] = this.context.createGain();
			this.inputs.push(this[numchannel]);

			var plugin = new window.WasabiChannelMixer(this.context, this.urlChannel, { "channelNumber": this.inputs.length });

			plugin.load().then((node) => {
				plugin.loadGui().then((elem) => {
					this.gui._root.querySelector('#arrayOfChannels').appendChild(elem);
					this.numberOfInputs++;
					this.gui.setWidth(this.gui.properties.dataWidth.value + elem.properties.dataWidth.value);
					var event = new Event('change');
					// Dispatch it.
					this.gui.dispatchEvent(event);
				});

				this[numchannel].connect(node);
				node.connect(this.master);
				//this.createOverlayableZoneFor("pedalLabel", position);
			});
		}
		else {
			console.log("nb atteint")
		}
	}

	changeMasterGain(value) {
		if ((value >= this.gainMin) && (value <= this.gainMax)) {
			this.params.gain = value;
			this.master.gain.setValueAtTime(parseFloat(value, 10), this.context.currentTime);
		}
	}

	set gain(value) {
		this.params.gain = value;
		this.master.gain.setValueAtTime(value, this.context.currentTime);
	}

	set nbcanaux(nb) {
		console.log("yes");
		this.params.nbcanaux = nb;
		//	let diff = nb - this.numberOfInputs;
		//this.addChannel();
		//this.addChannel();
		// if (diff != 0) {
		// 	(async function loop() {
		// 		for (let j = 0; j < diff; j++) { await parent.addChannel() }
		// 	})();
		// }
	}

}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiMixer = class WasabiMixer extends WebAudioPluginFactory {
	constructor(context, baseUrl, options) {
		super(context, baseUrl, options);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new Mixer(this, baseUrl, options); };
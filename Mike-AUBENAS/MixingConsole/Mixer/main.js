//jslint:disable:one-line no-trailing-spaces

window.Mixer = class Mixer extends WebAudioPluginCompositeNode
{
	constructor(ctx,options)
	{
		super(ctx,options)

		this.state;
		this.inputs = [];
		this.outputs = [];
		this._gui = document.createElement("wc-mixer");
		this._gui.plug = this;

		if(options)
			this.arrayNodeToConnect = options.arrayNodeToConnect ? options.arrayNodeToConnect : 'no nodes';
		else
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

        this.patchNames = ["patch1"];

		this.getNumberOfChannels();

		this.setup();
	}

	getNumberOfChannels()
	{
		if(this.arrayNodeToConnect != 'no nodes')
			return this.arrayNodeToConnect.length;
	}

	getArrayNodeToConnect()
	{ return this.arrayNodeToConnect; }

	setArrayNodeToConnect(arrayMedia)
	{  this.arrayNodeToConnect = arrayMedia; }

	getPatch(index)
	{ return this.patchNames[index]; }

	setPatch(data, index)
	{ this.patchNames[index] = data; }

	getState() { return this.params.status; }

	setState(data)
	{
		this.params.status = data;

		if (data == "enable")
		{
			this.connectNodes();
			this._input.disconnect(this._output);
		}
		else if (data == "disable")
		{
			this._input.disconnect(this.feedbackGainNode);
			this._input.disconnect(this.dryGainNode);
			this._input.connect(this._output);
		}
	}

	onMidi(msg)
	{ return msg; }

	setup()
	{}

	createMaster()
	{
		// TODO
	}

}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiMixer = class WasabiMixer extends WebAudioPluginFactory
{
	constructor(context, baseUrl, options)
	{
		super(context, baseUrl);
		this.options = options;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options)
{ return new Mixer(this, options); };
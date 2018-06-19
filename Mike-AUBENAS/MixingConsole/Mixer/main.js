//jslint:disable:one-line no-trailing-spaces

window.Mixer = class Mixer extends WebAudioPluginCompositeNode
{
	constructor(ctx,options)
	{
		super(ctx,options)

		this.state;
		this.urlChannel = "https://wasabi.i3s.unice.fr/WebAudioPluginBank/Mike-AUBENAS/MixingConsole/ChannelMixer";

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
	{
		this.createNode();
	}

	createNode()
	{
	this.master = this.context.createGain();
	this.master.connect(this._output);
	}


	addChannel()
	{
		let numchannel ="InputForchannel"+this.inputs.length+1;
		this[numchannel] = this.context.createGain();
		this.inputs.push(this[numchannel]);
	
		var plugin = new window.WasabiChannelMixer(this.context, this.urlChannel, {"channelNumber" : this.inputs.length});

		plugin.load().then((node) =>
		{
			plugin.loadGui().then((elem) =>
			{
				this.gui._root.querySelector('#arrayOfChannels').appendChild(elem);
			});

			this[numchannel].connect(node);
			node.connect(this.master);
			//this.createOverlayableZoneFor("pedalLabel", position);
		});
	}

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
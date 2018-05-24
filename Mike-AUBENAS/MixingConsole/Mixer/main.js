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
		
		this.params = 
		{
			"numberOfChannels" : 4
		}

		this.setup();
	}
	
	

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
		this.createIO();
		this.createNodes();
		this.connectNodes();
	}

	createIO()
	{
		// TODO
	}

	createNodes() 
	{
		// TODO
	}

	connectNodes() 
	{
		// TODO
    }

	isNumber(arg)
	{ return toString.call(arg) === '[object Number]' && arg === +arg; }

	getDryLevel(mix) 
	{
		if (!this.isNumber(mix) || mix > 1 || mix < 0)
			return 0;

		if (mix <= 0.5)
			return 1;

		return 1 - ((mix - 0.5) * 2);
	}

	getWetLevel(mix) 
	{
		if (!this.isNumber(mix) || mix > 1 || mix < 0)
			return 0;

		if (mix >= 0.5)
			return 1;

		return 1 - ((0.5 - mix) * 2);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiMixer = class WasabiMixer extends WebAudioPluginFactory 
{
	constructor(context, baseUrl)
	{ super(context,baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) 
{ return new Mixer(this, options); };
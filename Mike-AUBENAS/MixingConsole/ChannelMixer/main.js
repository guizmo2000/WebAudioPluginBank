//jslint:disable:one-line no-trailing-spaces

window.ChannelMixer = class ChannelMixer extends WebAudioPluginCompositeNode 
{
	constructor(ctx,options) 
	{
		super(ctx,options)

		this.state;
		this.inputs = [];
		this.outputs = [];
		this._gui = document.createElement("wc-channelmixer");
		this._gui.plug = this;

		this._metadata = 
		{
			"name": "wasabi-ChannelMixer",
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
			"gain" : 
			{
				"value" : 20,
				"range" :
				{
					"min" : 0,
					"max" : 100
				}
			},
			"pan" :
			{
				"value" : 50,
				"range" :
				{
					"min" : 1,
					"max" : 99
				}
			},
			"status": "disable"
		}

		this.setup();
	}
	
	setInitialParamValues() 
	{
		this.setGain(this.params.gain.value);
		this.setPan(this.params.pan.value);
	}
	
    getGain()
    { return this.params.gain.value; }

    setGain(value)
    {
		if( (value >= this.params.gain.range.min) && (value <= this.params.gain.range.max) )
		{
			this.params.gain.value = value;
			this.gain.gain.setValueAtTime(parseFloat(value, 10), this.context.currentTime);	
		}
    }

    getPan()
    { return this.params.pan;}

    setPan(value)
    {
		value = value -49; // Just beacause the default value is one
		if( (value >= this.params.pan.range.min) && (value <= this.params.pan.range.max) )
		{
			this.params.pan = value;
			this.pan.positionX.setValueAtTime(parseFloat(this.params.pan, 10), this.context.currentTime);	
		}
    }

	inputChannelCount()
	{ return this.inputs.length; }

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
		this.setInitialParamValues();
	}

	createIO()
	{
		this.inputs.push(this._input);
		this.outputs.push(this._output);
	}

	createNodes() 
	{
		this.gain = this.context.createGain();
		this.pan = this.context.createPanner();
		this.analyser = this.context.createAnalyser();
	}

	connectNodes() 
	{
		this._input.connect( this.gain );
		this.gain.connect( this.pan );
		this.pan.connect( this.analyser );
		this.analyser.connect( this._output ); 
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

window.WasabiChannelMixer = class WasabiChannelMixer extends WebAudioPluginFactory 
{
	constructor(context, baseUrl)
	{ super(context,baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) 
{ return new ChannelMixer(this, options); };
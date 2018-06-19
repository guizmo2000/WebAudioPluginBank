//jslint:disable:one-line no-trailing-spaces

window.ChannelMixer = class ChannelMixer extends WebAudioPluginCompositeNode
{
	constructor(ctx, options)
	{
		super(ctx, options)

		this.inputs = [];
		this.outputs = [];

		if(options)
			this.channelNumber = options.channelNumber ? options.channelNumber : 0;
		else
			this.channelNumber = 0;

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
				"value" : 1,
				"range" :
				{
					"min" : 0,
					"max" : 10
				}
			},
			"pan" :
			{
				"value" : 0,
				"range" :
				{
					"min" : -10,
					"max" : 10
				}
			},
			"status": "enable",
		}

		this.state = this.params.status;


		this.setup();
	}
	get numberOfInputs(){
    return this.inputs.length;
  }

  get numberOfOutputs(){
    return this.outputs.length;
  }
  inputChannelCount(){
    return 1;
  }
  outputChannelCount(){
    return 1
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
			this._input.gain.setValueAtTime(parseFloat(value, 10), this.context.currentTime);
		}
	}

	getChannelNumber()
	{ return this.channelNumber; }

	setChannelNumber(value)
	{ this.channelNumber = value; }

    getPan()
    { return this.params.pan; }

    setPan(value)
    {
		if( (value >= this.params.pan.range.min) && (value <= this.params.pan.range.max) )
		{
			this.params.pan.value = value;
			this.pan.pan.setValueAtTime(parseFloat(value / 10), this.context.currentTime);
		}
    }

	inputChannelCount()
	{ return this.inputs.length; }

	getPatch(index)
	{ return this.patchNames[index]; }

	setPatch(data, index)
	{ this.patchNames[index] = data; }

	onMidi(msg)
	{ return msg; }

	getLeftGain()
	{ return this.leftGain; }

	getRightGain()
	{ return this.rightGain; }

	getAudioContext()
	{ return this.context; }

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
		this.pan = this.context.createStereoPanner();

		this.splitter = this.context.createChannelSplitter(2);
		this.merger = this.context.createChannelMerger(2);

		this.leftGain = this.context.createGain();
		this.rightGain = this.context.createGain();
	}

	connectNodes()
	{
		this._input.connect( this.pan );
		this.pan.connect( this.splitter );

		this.splitter.connect( this.leftGain, 0 );
		this.splitter.connect( this.rightGain, 1 );

		this.leftGain.connect( this.merger, 0, 0 );
		this.rightGain.connect( this.merger, 0, 1 );

		this.merger.connect( this._output );
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiChannelMixer = class WasabiChannelMixer extends WebAudioPluginFactory
{
	constructor(context, baseUrl, options)
	{
		super(context,baseUrl);
		this.options = options;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options)
{ return new ChannelMixer(this, options); };
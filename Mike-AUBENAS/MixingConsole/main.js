//jslint:disable:one-line no-trailing-spaces

window.MixingConsole = class MixingConsole extends WebAudioPluginCompositeNode 
{
	constructor(ctx,options) 
	{
		super(ctx,options)

		this.state;
		this.inputs = [];
		this.outputs = [];
		this._gui = document.createElement("wc-MixingConsole");
		this._gui.plug = this;

		this._metadata = 
		{
			"name": "wasabi-MixingConsole",
			"version": 1,
			"category": "", //TODO
			"type": "Audio",
			"description": "Mixing console",
			"thumbnailImage": "https://...",
			"URLs": "https://.../doc",
			"authorInformation": "Mike AUBENAS, i3s intern in Nice - Sophia-Antipolis, France"
		}

		this._descriptor =  //TODO change
		{
			"feedback": 
			{
				"key": "feedback",
				"type": "linear",
				"range": 
				{
					"min": 0,
					"max": 1
				},
				"default": 0.9,
				"unit": "",
				"label": "feedback",
				"flag": ""
			},

			"delay": 
			{
				"key": "delay",
				"type": "linear",
				"range": 
				{
					"min": 0.001,
					"max": 0.02
				},
				"default": 0.003,
				"unit": "ms",
				"label": "delay",
				"flag": ""
			},

			"depth": 
			{
				"key": "depth",
				"type": "linear",
				"range": 
				{
					"min": 0.0005,
					"max": 0.02
				},
				"default": 0.005,
				"unit": "",
				"label": "depth",
				"flag": ""
			},

			"frequency": 
			{
				"key": "frequency",
				"type": "linear",
				"range": 
				{
					"min": 0.05,
					"max": 2
				},
				"default": 0.15,
				"unit": "",
				"label": "frequency",
				"flag": ""
			}
		}

		this.params = 
		{
			"feedback": this._descriptor.feedback.default,
			"delay": this._descriptor.delay.default,
			"depth": this._descriptor.depth.default,
			"frequency": this._descriptor.frequency.default,
			"status": "disabled"
		}

		this.patchNames = ["patch1"];

		this.setup();
	}

	inputChannelCount()
	{ return this.inputs.length; }

	getPatch(index)
	{ return this.patchNames[index]; }

	setPatch(data, index)
	{ this.patchNames[index] = data; }

	getParam(key)   // TODO
	{
		switch(key)
		{
			case "feedback" :
				this.getFeedback();
				break;
			case "delay" :
				this.getDelay();
				break;
			case "depth" :
				this.getDepth();
				break;
			case "frequency" :
				this.getFrequency();
				break;
			default :
				console.log("This parameter isn't used in Wasabi-MixingConsole");
				break;
		}
	}

	setParam(key, value) 
	{
		switch(key)
		{
            // @see : https://goo.gl/QJAsUg
            case (key.match(/gain/) || {}).input :
                const channel = key.replace('gain', '');
                this.setGain(channel, value);
                break;
            case (key.match(/pan/) || {}).input :
                const channel = key.replace('gain', '');
                this.setGain(channel, value);
                break;
			default :
				console.log("This parameter isn't used in Wasabi-MixingConsole");
				break;
		}
	}

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
		this.oscillator.start();

	}

	createIO()
	{
		this.inputs.push(this._input);
		this.outputs.push(this._output);
	}

	createNodes() 
	{
        const numberOfChannels = 4;
        
        for(let i = 0; i <= numberOfChannels; i++)
        {
            
        }
	}

	connectNodes() 
	{
		/* @see : https://github.com/cwilso/Audio-Input-Effects/blob/master/js/effects.js */

		this._input.connect( this.splitter );
		this._input.connect( this.wetGain );

		this.splitter.connect( this.delayLeft, 0 );
		this.splitter.connect( this.delayRight, 1 );

		this.delayLeft.connect( this.feedbackLeft );
		this.delayRight.connect( this.feedbackRight );

		this.feedbackLeft.connect( this.delayRight );
		this.feedbackRight.connect( this.delayLeft );

		this.oscillator.type = 'triangle';
		this.oscillator.connect( this.depthLeft );
		this.oscillator.connect( this.depthRight );

		this.depthLeft.connect( this.delayLeft.delayTime );
		this.depthRight.connect( this.delayRight.delayTime );

		this.delayLeft.connect( this.merger, 0, 0 );
		this.delayRight.connect( this.merger, 0, 1 );

		this.merger.connect( this.wetGain );

		this.wetGain.connect(this.context.destination);
	}

	setInitialParamValues()
	{
		this.setFeedback(this.params.feedback);
		this.setDelay(this.params.delay);
		this.setDepth(this.params.depth);
		this.setFrequency(this.params.frequency);
	}

	/* getFeedback()
	{ return this.params.feedback; }

	getDelay()
	{ return this.params.delay; }

	getDepth()
	{ return this.params.depth; }

	getFrequency()
    { return this.params.frequency; } */

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
    
    setGain(channel, value)
    {
        // TODO
    }

    setPan(channel, value)
    {
        // TODO
    }

	/* setFeedback(_feedback) 
	{
		if ( (_feedback < this._descriptor.feedback.range.max) && (_feedback > this._descriptor.feedback.range.min) ) 
			this.params.feedback = _feedback;

		this.feedbackLeft.gain.setValueAtTime(parseFloat(this.params.feedback, 10), this.context.currentTime);
		this.feedbackRight.gain.setValueAtTime(parseFloat(this.params.feedback, 10), this.context.currentTime);
	}
	
	setDelay(_delay)
	{
		if ( (_delay < this._descriptor.delay.range.max) && (_delay > this._descriptor.delay.range.min) )
			this.params.delay = _delay;

		this.delayLeft.delayTime.setValueAtTime(parseFloat(this.params.delay, 10), this.context.currentTime);
		this.delayRight.delayTime.setValueAtTime(parseFloat(this.params.delay, 10), this.context.currentTime);
	}

	setDepth(_depth) 
	{
		if ( (_depth < this._descriptor.depth.range.max) && (_depth > this._descriptor.depth.range.min) )
			this.params.depth = _depth;

		this.depthLeft.gain.setValueAtTime(parseFloat(this.params.depth, 10), this.context.currentTime);
		this.depthRight.gain.setValueAtTime(- parseFloat(this.params.depth, 10), this.context.currentTime);
	}

	setFrequency(_frequency)
	{
		if ( (_frequency < this._descriptor.frequency.range.max) && (_frequency > this._descriptor.frequency.range.min) )
			this.params.frequency = _frequency;

		this.oscillator.frequency.setValueAtTime(parseFloat(this.params.frequency, 10), this.context.currentTime);
	} */
}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiMixingConsole = class WasabiMixingConsole extends WebAudioPluginFactory 
{
	constructor(context, baseUrl)
	{ super(context,baseUrl); }

	load()
	{ return super.load(); }

	loadGui() 
	{ return super.loadGui(); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) 
{ return new MixingConsole(this, options); };
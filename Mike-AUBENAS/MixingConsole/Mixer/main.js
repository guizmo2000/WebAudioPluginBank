//jslint:disable:one-line no-trailing-spaces

window.Mixer = class Mixer extends WebAudioPluginCompositeNode
{
	constructor(ctx,URL ,options)
	{
		super(ctx,URL,options)

		this.state;
		this.urlChannel = "https://wasabi.i3s.unice.fr/WebAudioPluginBank/Mike-AUBENAS/MixingConsole/ChannelMixer";
		this._numberOfInputs = 2;

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

		this.params =
		{
			"gain":
			{
				"value": 1,
				"range":
				{
					"min": 0,
					"max": 10
				}
			}
		};


		this.getNumberOfChannels();

		this.setup();
	}

	get numberOfInputs() {
    return this._numberOfInputs;
	}
	set numberOfInputs(num) {
    this._numberOfInputs =  num;
	}

	get numberOfOutputs() {
    return 1;
	}
	
	get dynamicParam(){
		return {listento:"numberOfInputs", description:"inputs number increase when pushing '+' on GUI"}
	}

	getNumberOfChannels()
	{
		if(this.arrayNodeToConnect != 'no nodes')
			return this.arrayNodeToConnect.length;
	}


  setParam(key, value) {
    //console.log(key, value);
    try {
      this[key] = (value);
    } catch (error) {

      console.warn("this plugin does not implement this param")
    }
  }

	getArrayNodeToConnect()
	{ return this.arrayNodeToConnect; }

	setArrayNodeToConnect(arrayMedia)
	{  this.arrayNodeToConnect = arrayMedia; }


	

	setup()
	{
		this.createNode();
	}

	createNode()
	{
		this.master = this.context.createGain();
		this.master.connect(this._output);
		for (let i=1;i<this.numberOfInputs;i++){
			let numchannel ="InputForchannel"+this.inputs.length+1;
			this[numchannel] = this.context.createGain();
			this.inputs.push(this[numchannel]);
		}
		
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
				this.numberOfInputs ++;
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

	changeMasterGain(value)
	{
		if ((value >= this.params.gain.range.min) && (value <= this.params.gain.range.max))
		{
			this.params.gain.value = value;
			this.master.gain.setValueAtTime( parseFloat(value, 10), this.context.currentTime );
		}
	}

}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiMixer = class WasabiMixer extends WebAudioPluginFactory
{
	constructor(context, baseUrl, options)
	{
		super(context, baseUrl,options);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options)
{ return new Mixer(this,baseUrl, options); };
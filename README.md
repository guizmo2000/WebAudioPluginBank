# WebAudioPluginBank

This bank is a repository of standardised webaudio plugins.

Some of them implement audioworklets, GUI's are built with web components. I recommand to test it on Chrome.

A plugin is defined by its URL and its metadata

Plugins contain : 
* An audio processor (audioworklet or web audio graph)
* A Web Component GUI

You can either load just the audio processor :

```js
var pluginURL = "yourpluginURL";
var plugin = new window.YourPluginName(ctx, pluginURL);
 plugin.load().then((node) => {
  // Do your stuffs here
  // you can wire the plugin to your I/O or others plugins by using : node.connect(target);
 });
```

Or load it with its GUI 

```js
var pluginURL = "yourpluginURL";
var plugin = new window.YourPluginName(ctx, pluginURL);
 plugin.load().then((node) => {
  // Do your AUDIO stuffs here
  // you can wire the plugin to your I/O or others plugins by using : node.connect(target);
  plugin.loadGui().then((elem) => {
   // Do your UI stuffs here, you can by example append it to a chosen div : chosendiv.appendChild(elem);
  });
 });
```

To go deeper on how it works, you can read the [SDK](https://github.com/guizmo2000/WebAudioPluginBank/blob/master/sdk/WebAudioSDK.js).
Here are some examples :
[Faust compiled reverb](https://wasabi.i3s.unice.fr/WebAudioPluginBank/testers/zitashow1.html)
[Pure JS minilogue](https://wasabi.i3s.unice.fr/WebAudioPluginBank/testers/minishow.html)

All those plugins (and tools) are in constant evolution so some /testers files could contain bugs

## Create your own WAP : 

In this tutorial you'll learn how to create your own WAP, with its GUI, and mate it available.

### Architecture
```
wapName
├──main.js
├──main.html
├──main.json
└──assets
    ├──thumbnail.png
    └──js
        └──externalScript.js

          
```

###  *Metadata* main.json

Must contain at least name, category, vandor & thumbnail to interract correctly with others WAP tools.

```json
  {
    "documentation": "https://github.com/you/thisproject",
    "name": "wapName",
    "thumbnail": "./assets/thumbnail.png",
    "vendor": "you",
    "category":"Overdrive",
    "version": "1.0"
  }
```
Some of our applications fetch this file first and uses those fields to prepare the WAP launch.

 
 ###  *Audio Node(s)*  main.js 

 Define and build the audio graph of your WAP.

**First** you have to create 2 class inherited from the webaudioSDK:

The first class is the actual Audio Node
```js
window.PluginName = class PluginName extends WebAudioPluginCompositeNode {

  constructor(ctx, URL, options) {
    super(ctx, URL, options)
    /*    ################     API PROPERTIES    ###############   */

    this.addParam({ name: 'paramName', defaultValue: 0.6, minValue: 0, maxValue: 1 });
    super.setup();
  }
}
```
It's inherited from a CompositeNode which manages inputs,outputs & params.
Here you just have to add your params as you can see in the snippet and the SDK will build a key-value _**`descriptor`**_ and a _**`params`**_ object which will be useful later. Basically we add a param when the value of an audioparam is made to change (ex : type of an oscillator, frequency of a filter).

If some of yours params don't fit the descriptor you can add it like `Object.assign({ "status": "disable" }, this.params)` in the constructor.

The SDK has some tools like : **descriptor** getter, **numberOfOutputs** getter that you can override if you have features to add. It also make available default I/O called respectively `this._input` and `this._output` that are by default on `this.inputs[Ø]` and `this.outputs[0]` tabs that you can fill with additionnal I/O's. 

Let's jump to the audio graph : you need to implements 2 methods :
```js
    createNodes(){};
    connectNodes(){};
```
You are free to have your own workflow but those method are called by default in the super.setup(); It's also quite clear if your code is shared.

### Example
```js
    createNodes(){
      this.lpfilter = this.context.createBiquadFilter();
      this.lpfilter.type = "lowpass";
    };
    connectNodes(){
      this._input.connect(this.lpfilter);
      this.lpfilter.connect(this._output);
    };
```
Now the params are created and the audio nodes too, you just have to bind it. We rcommand something like that : 

```js
  setParam(key, value) {
    try {
      this[key] = value;
    } catch (error) {
      console.warn("this plugin does not implement this param")
    }
  }

  set myparam(_value){
    // to store the new value
    this.params.myparam = _value;
    // if your param is linked to the filter frequency you can :
    this.lpfilter.frequency.setValueAtTime(_value,this.context.currentTime);

  }
```

We are done with audio processing. Let's create the factory wich will make available our audio node :

```js
window.VendorNamePluginName = class VendorNamePluginName extends WebAudioPluginFactory {

  constructor(context, baseUrl) {
    super(context, baseUrl);
  }

}
```

The class **WebAudioPluginFactory** contains methods to fetch and load your WAP. We encourage you to read it in the webaudioSDK.js file.


 ###  *GUI*  main.html

 The SDK contains a **loadGUI()** method that link the **main.html** file.

 GUI is optionnal for a WAP, but here is how we build our own : 

 **First** define an html/css template

 ```html
<template>
	<style>
    #myelement{
      /* Absolute position*/
    }
  </style>
  <div id="myelement">
     <input type="range" id="cutoff" min="30" max="22000" value="1500"/>
  </div>
<template>
 ``` 
 **Then** clone it in a webcomponent shadowroot.

```js
let myTemp = document.currentScript.ownerDocument.querySelector('template');
	class PluginNameGui extends HTMLElement {
		constructor(plug) {
			super();
			// The audio processor is a field of this GUI
			this._plug = plug;
			// The link is bidirectionnal to be catched by the processor if needed once the module is loaded (for features like presets)
			this._plug.gui = this;
			// bind shadow to the class and clone the template into it
			this._root = this.attachShadow({ mode: 'open' });
			this._root.appendChild(myTemp.content.cloneNode(true));

			this.setUp();
		}
```
**&** bind the GUI with your Audio node setter :

```js
  setUp(){
    this._root.querySelector("#myelement").querySelector("input").addEvenetListener("input", (e)=>{this._plug.setParam("cutoff", e.target.value)})
  }
```

**Last** step is to create a function that build this GUI : 

```js
/**
	 * Gui factory, called from the SDK. 
	 * The name must be create+MyModule
	*/
	createMyPlugin = (plug) => {
		
		let elem = new MyPluginGui(plug);
		return elem;
	}
```

Now the WAP is ready to be tested. Lets create a HTML file and test this minimal code :
```html
<!DOCTYPE html>
<html>

<head>
  <title>Host that loads a plugin with its GUI</title>
</head>
<script src="path/to/WebAudioSDK.js"></script>
<script src="path/to/MyPlugin/main.js"></script>

<body>
    <audio src="mysound.mp3" id="soundSample" controls loop crossorigin></audio>

</body>
<script>
  
  var ctx = new AudioContext();
  var pluginURL = "path/to/MyPlugin";
  var plugin = new window.VendorNamePluginName(ctx, pluginURL);

  var player = document.getElementById("soundSample");
  player.onplay = () => {
    ctx.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  }
  var mediaSource = ctx.createMediaElementSource(player);

  plugin.load().then((node) => {

    plugin.loadGui().then((elem) => {
      document.body.appendChild(elem);
    });
    mediaSource.connect(node);
    node.connect(ctx.destination)
  })
</script>

</html>
```

You can now affect the audioplayer with your WAP! Congrats!

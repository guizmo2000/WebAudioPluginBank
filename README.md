# WebAudioPluginBank

This bank is a repository of standardised webaudio plugins.

Some of them implement audioworklets, web component. I recommand to test it on Chrome.

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

To go deeper on how it works, you can read the SDK.
Here are some examples :
[Faust compiled reverb](https://wasabi.i3s.unice.fr/WebAudioPluginBank/testers/zitashow1.html)
[Pure JS minilogue](https://wasabi.i3s.unice.fr/WebAudioPluginBank/testers/minishow.html)

All those plugins (and tools) are in constant evolution so some /testers files could contain bugs

### More info coming soon

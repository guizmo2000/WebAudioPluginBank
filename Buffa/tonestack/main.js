
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONtonestack() {
	return "{\"name\":\"amp.tonestack\",\"filename\":\"tonestack\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"44\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"filename\":\"tonestack\"},{\"filter.lib/author\":\"Julius O. Smith (jos at ccrma.stanford.edu)\"},{\"filter.lib/copyright\":\"Julius O. Smith III\"},{\"filter.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"filter.lib/license\":\"STK-4.3\"},{\"filter.lib/name\":\"Faust Filter Library\"},{\"filter.lib/reference\":\"https://ccrma.stanford.edu/~jos/filters/\"},{\"filter.lib/version\":\"1.29\"},{\"math.lib/author\":\"GRAME\"},{\"math.lib/copyright\":\"GRAME\"},{\"math.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"math.lib/license\":\"LGPL with exception\"},{\"math.lib/name\":\"Math Library\"},{\"math.lib/version\":\"1.0\"},{\"music.lib/author\":\"GRAME\"},{\"music.lib/copyright\":\"GRAME\"},{\"music.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"music.lib/license\":\"LGPL with exception\"},{\"music.lib/name\":\"Music Library\"},{\"music.lib/version\":\"1.0\"},{\"name\":\"amp.tonestack\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"amp.tonestack\",\"items\":[{\"type\":\"vslider\",\"label\":\"Bass\",\"address\":\"/amp.tonestack/Bass\",\"index\":\"12\",\"meta\":[{\"alias\":\"\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Middle\",\"address\":\"/amp.tonestack/Middle\",\"index\":\"8\",\"meta\":[{\"alias\":\"\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Treble\",\"address\":\"/amp.tonestack/Treble\",\"index\":\"20\",\"meta\":[{\"alias\":\"\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64Codetonestack() { return "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dG9uZXN0YWNrIn0seyJmaWx0ZXIubGliL2F1dGhvciI6Ikp1bGl1cyBPLiBTbWl0aCAoam9zIGF0IGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImZpbHRlci5saWIvY29weXJpZ2h0IjoiSnVsaXVzIE8uIFNtaXRoIElJSSJ9LHsiZmlsdGVyLmxpYi9kZXByZWNhdGVkIjoiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4ifSx7ImZpbHRlci5saWIvbGljZW5zZSI6IlNUSy00LjMifSx7ImZpbHRlci5saWIvbmFtZSI6IkZhdXN0IEZpbHRlciBMaWJyYXJ5In0seyJmaWx0ZXIubGliL3JlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvZmlsdGVycy8ifSx7ImZpbHRlci5saWIvdmVyc2lvbiI6IjEuMjkifSx7Im1hdGgubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRoLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aC5saWIvZGVwcmVjYXRlZCI6IlRoaXMgbGlicmFyeSBpcyBkZXByZWNhdGVkIGFuZCBpcyBub3QgbWFpbnRhaW5lZCBhbnltb3JlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gQXVndXN0IDIwMTcuIn0seyJtYXRoLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aC5saWIvbmFtZSI6Ik1hdGggTGlicmFyeSJ9LHsibWF0aC5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibXVzaWMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtdXNpYy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im11c2ljLmxpYi9kZXByZWNhdGVkIjoiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4ifSx7Im11c2ljLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibXVzaWMubGliL25hbWUiOiJNdXNpYyBMaWJyYXJ5In0seyJtdXNpYy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibmFtZSI6ImFtcC50b25lc3RhY2sifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJhbXAudG9uZXN0YWNrIiwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJCYXNzIiwiYWRkcmVzcyI6Ii9hbXAudG9uZXN0YWNrL0Jhc3MiLCJpbmRleCI6IjEyIiwibWV0YSI6W3siYWxpYXMiOiIifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTWlkZGxlIiwiYWRkcmVzcyI6Ii9hbXAudG9uZXN0YWNrL01pZGRsZSIsImluZGV4IjoiOCIsIm1ldGEiOlt7ImFsaWFzIjoiIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IlRyZWJsZSIsImFkZHJlc3MiOiIvYW1wLnRvbmVzdGFjay9UcmVibGUiLCJpbmRleCI6IjIwIiwibWV0YSI6W3siYWxpYXMiOiIifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017-2018
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class tonestackNode extends AudioWorkletNode {
    
    constructor(context, options) {
        
        var json_object = JSON.parse(getJSONtonestack());
        
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";
       
        super(context, 'tonestack', options);
        
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }
        
        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }
        
        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }
        
        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
            }
        }
        
        this.output_handler = null;
   
        this.json_object = json_object;
        
        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
       
        // Parse UI
        this.parse_ui(this.json_object.ui, this);
        
        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }
    
    // Public API
    
    /**
     *  Returns a full JSON description of the DSP.
     */
    getMetadata()
    {
        return getJSONtonestack();
    }
    
    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParam(path, val)
    {
        //this.port.postMessage({ type:"param", key:path, value:val });
        
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParam(path)
    {
        return this.parameters.get(path).value;
    }
    
    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }
    
    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }
    
    inputChannelCount()
    {
        return parseInt(this.json_object.inputs);
    }
    
    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getDescriptor()
    {
        return this.inputs_items;
    }
    
    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }
    
    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }
    
    /**
     * Generic MIDI message handler.
     */
    onMidi(data)
    {
        this.port.postMessage({ type:"midi", data:data });
    }
    
}


var WAPlugin = WAPlugin || {};

WAPlugin.BuffaTonestack = class BuffaTonestack {

constructor(context, baseUrl) {
    context.resume();
    this.context = context;
    this.baseUrl = baseUrl;
}

load() {
    return new Promise((resolve, reject) => {
        this.context.audioWorklet.addModule(this.baseUrl + "/tonestack-processor.js").then(() => {
            this.plug = new tonestackNode(this.context, {});
            return (this.plug);
        }).then((node) => {
            console.log(node.getMetadata());
            resolve(node);
        }).catch((e) => {
            reject(e);
        });
    });
}

loadGui() {
    return new Promise((resolve, reject) => {
        try {
            // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
            let url = this.baseUrl + "/main.html";

            if (!this.linkExists(url)) {
                // LINK DOES NOT EXIST, let's add it to the document
                var link = document.createElement('link');
                link.rel = 'import';
                //link.id = 'urlPlugin';
                link.href = url;
                document.head.appendChild(link);

                link.onload = (e) => {
                    // the file has been loaded, instanciate GUI
                    // and get back the HTML elem
                    // HERE WE COULD REMOVE THE HARD CODED NAME
                    var element = createToneStackGui(this.plug);
                    //element._plug = this.plug;
                    resolve(element);
                }
            } else {
                // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                // so we can create another instance
                var element = createToneStackGui(this.plug);
                //element._plug = this.plug;
                resolve(element);
            }
        } catch (e) {
            console.log(e);
            reject(e);
        }
    });
};

linkExists(url) {
    return document.querySelectorAll(`link[href="${url}"]`).length > 0;

}


}


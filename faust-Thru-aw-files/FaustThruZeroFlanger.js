
/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONThruZeroFlanger() {
	return "{\"name\":\"Thru Zero Flanger\",\"filename\":\"ThruZeroFlanger\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"67680\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Oli Larkin (contact@olilarkin.co.uk)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Oliver Larkin\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Stereo Thru Zero Flanger - warning can ZERO the sound!\"},{\"filename\":\"ThruZeroFlanger\"},{\"licence\":\"GPL\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Thru Zero Flanger\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Thru Zero Flanger\",\"items\":[{\"type\":\"hslider\",\"label\":\"Delay\",\"address\":\"/Thru_Zero_Flanger/Delay\",\"index\":\"34844\",\"meta\":[{\"OWL\":\"PARAMETER_B\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0.5\",\"max\":\"20\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Depth\",\"address\":\"/Thru_Zero_Flanger/Depth\",\"index\":\"34860\",\"meta\":[{\"OWL\":\"PARAMETER_D\"},{\"unit\":\"%\"}],\"init\":\"20\",\"min\":\"3\",\"max\":\"100\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"L-R Offset\",\"address\":\"/Thru_Zero_Flanger/L-R_Offset\",\"index\":\"67660\",\"meta\":[{\"OWL\":\"PARAMETER_C\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Rate\",\"address\":\"/Thru_Zero_Flanger/Rate\",\"index\":\"34876\",\"meta\":[{\"OWL\":\"PARAMETER_A\"},{\"unit\":\"hz\"}],\"init\":\"0.1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeThruZeroFlanger() { return "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ACABSBsPC4yAgIAAACAAIAFqIAI4AgALC7+MgIAAAQBBAAu4DHsibmFtZSI6IlRocnUgWmVybyBGbGFuZ2VyIiwiZmlsZW5hbWUiOiJUaHJ1WmVyb0ZsYW5nZXIiLCJ2ZXJzaW9uIjoiMi41LjIzIiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiI2NzY4MCIsImlucHV0cyI6IjIiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6Ik9saSBMYXJraW4gKGNvbnRhY3RAb2xpbGFya2luLmNvLnVrKSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6Ik9saXZlciBMYXJraW4ifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJTdGVyZW8gVGhydSBaZXJvIEZsYW5nZXIgLSB3YXJuaW5nIGNhbiBaRVJPIHRoZSBzb3VuZCEifSx7ImZpbGVuYW1lIjoiVGhydVplcm9GbGFuZ2VyIn0seyJsaWNlbmNlIjoiR1BMIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJUaHJ1IFplcm8gRmxhbmdlciJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIwLjEifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJUaHJ1IFplcm8gRmxhbmdlciIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRGVsYXkiLCJhZGRyZXNzIjoiL1RocnVfWmVyb19GbGFuZ2VyL0RlbGF5IiwiaW5kZXgiOiIzNDg0NCIsIm1ldGEiOlt7Ik9XTCI6IlBBUkFNRVRFUl9CIn0seyJ1bml0IjoibXMifV0sImluaXQiOiIxMCIsIm1pbiI6IjAuNSIsIm1heCI6IjIwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJEZXB0aCIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvRGVwdGgiLCJpbmRleCI6IjM0ODYwIiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0QifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiMjAiLCJtaW4iOiIzIiwibWF4IjoiMTAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJMLVIgT2Zmc2V0IiwiYWRkcmVzcyI6Ii9UaHJ1X1plcm9fRmxhbmdlci9MLVJfT2Zmc2V0IiwiaW5kZXgiOiI2NzY2MCIsIm1ldGEiOlt7Ik9XTCI6IlBBUkFNRVRFUl9DIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmF0ZSIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvUmF0ZSIsImluZGV4IjoiMzQ4NzYiLCJtZXRhIjpbeyJPV0wiOiJQQVJBTUVURVJfQSJ9LHsidW5pdCI6Imh6In1dLCJpbml0IjoiMC4xIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017-2018
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

var hosts = hosts || {};
hosts.FaustThruZeroFlanger = class ThruZeroFlanger extends AudioWorkletNode {
    
    constructor(context, options) {
        
        var json_object = JSON.parse(getJSONThruZeroFlanger());
        
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";
       
        super(context, 'ThruZeroFlanger', options);
        
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
    
    getMetadata()
    {
        return getJSONThruZeroFlanger();
    }
    
    setParam(path, val)
    {
        //this.port.postMessage({ type:"param", key:path, value:val });
        
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
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
    
    // TO REMOVE
    inputChannelCount()
    {
        return parseInt(this.json_object.inputs);
    }
    
    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    getDescriptor()
    {
        return this.inputs_items;
    }
    
    /**
     * Controller
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
    
    onMidi(data)
    {
        this.port.postMessage({ type:"midi", data:data });
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }
    
}

// Faust context
var faust = faust || {};

faust.create = function(context, callback)
{
    // Resume audio context each time...
    context.resume();
    
    // The main global scope
    context.audioWorklet.addModule("ThruZeroFlanger-processor.js")
    .then(function () {
         callback(new ThruZeroFlanger(context, {}));
    })
    .catch(function(error) { console.log(error); console.log("Faust ThruZeroFlanger cannot be loaded or compiled"); });
}


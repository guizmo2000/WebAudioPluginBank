
/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONThruZeroFlanger() {
	return "{\"name\":\"Thru Zero Flanger\",\"filename\":\"ThruZeroFlanger\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"67684\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Oli Larkin (contact@olilarkin.co.uk)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Oliver Larkin\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Stereo Thru Zero Flanger - warning can ZERO the sound!\"},{\"filename\":\"ThruZeroFlanger\"},{\"licence\":\"GPL\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Thru Zero Flanger\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Thru Zero Flanger\",\"items\":[{\"type\":\"hslider\",\"label\":\"Delay\",\"address\":\"/Thru_Zero_Flanger/Delay\",\"index\":\"34848\",\"meta\":[{\"OWL\":\"PARAMETER_B\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0.5\",\"max\":\"20\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Depth\",\"address\":\"/Thru_Zero_Flanger/Depth\",\"index\":\"34864\",\"meta\":[{\"OWL\":\"PARAMETER_D\"},{\"unit\":\"%\"}],\"init\":\"20\",\"min\":\"3\",\"max\":\"100\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"L-R Offset\",\"address\":\"/Thru_Zero_Flanger/L-R_Offset\",\"index\":\"67664\",\"meta\":[{\"OWL\":\"PARAMETER_C\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Rate\",\"address\":\"/Thru_Zero_Flanger/Rate\",\"index\":\"34880\",\"meta\":[{\"OWL\":\"PARAMETER_A\"},{\"unit\":\"hz\"}],\"init\":\"0.1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/Thru_Zero_Flanger/bypass\",\"index\":\"2052\"}]}]}";
}
function getBase64CodeThruZeroFlanger() { return "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ADgChBBBAEMAACBBOAKgkAJBAEMAAKBBOAKwkAJBAEPNzMw9OALAkAJBAEMAAAAAOALQkAQLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLmY2AgAABAEEAC5INeyJuYW1lIjoiVGhydSBaZXJvIEZsYW5nZXIiLCJmaWxlbmFtZSI6IlRocnVaZXJvRmxhbmdlciIsInZlcnNpb24iOiIyLjUuMjMiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjY3Njg0IiwiaW5wdXRzIjoiMiIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYXV0aG9yIjoiT2xpIExhcmtpbiAoY29udGFjdEBvbGlsYXJraW4uY28udWspIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiT2xpdmVyIExhcmtpbiJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IlN0ZXJlbyBUaHJ1IFplcm8gRmxhbmdlciAtIHdhcm5pbmcgY2FuIFpFUk8gdGhlIHNvdW5kISJ9LHsiZmlsZW5hbWUiOiJUaHJ1WmVyb0ZsYW5nZXIifSx7ImxpY2VuY2UiOiJHUEwifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlRocnUgWmVybyBGbGFuZ2VyIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjAuMSJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlRocnUgWmVybyBGbGFuZ2VyIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvRGVsYXkiLCJpbmRleCI6IjM0ODQ4IiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0IifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjEwIiwibWluIjoiMC41IiwibWF4IjoiMjAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkRlcHRoIiwiYWRkcmVzcyI6Ii9UaHJ1X1plcm9fRmxhbmdlci9EZXB0aCIsImluZGV4IjoiMzQ4NjQiLCJtZXRhIjpbeyJPV0wiOiJQQVJBTUVURVJfRCJ9LHsidW5pdCI6IiUifV0sImluaXQiOiIyMCIsIm1pbiI6IjMiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkwtUiBPZmZzZXQiLCJhZGRyZXNzIjoiL1RocnVfWmVyb19GbGFuZ2VyL0wtUl9PZmZzZXQiLCJpbmRleCI6IjY3NjY0IiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0MifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSYXRlIiwiYWRkcmVzcyI6Ii9UaHJ1X1plcm9fRmxhbmdlci9SYXRlIiwiaW5kZXgiOiIzNDg4MCIsIm1ldGEiOlt7Ik9XTCI6IlBBUkFNRVRFUl9BIn0seyJ1bml0IjoiaHoifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImNoZWNrYm94IiwibGFiZWwiOiJieXBhc3MiLCJhZGRyZXNzIjoiL1RocnVfWmVyb19GbGFuZ2VyL2J5cGFzcyIsImluZGV4IjoiMjA1MiJ9XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017-2018
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class ThruZeroFlanger extends AudioWorkletNode {
    
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


var WAPlugin = WAPlugin || {};

WAPlugin.FaustThruZeroFlanger = class FaustThruZeroFlanger {

constructor(context, baseUrl) {
    this.context = context;
    this.baseUrl = baseUrl;
}

load() {
    return new Promise((resolve, reject) => {
        console.log("URL : " + (this.baseUrl + "/ThruZeroFlanger-processor.js"));
        this.context.audioWorklet.addModule(this.baseUrl + "/ThruZeroFlanger-processor.js").then(() => {
            this.plug = new ThruZeroFlanger(this.context, {});
            return (this.plug);
        }).then((faust) => {
            resolve(faust);
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
                    var element = createThruZeroFlangerGui(this.plug);
                    //element._plug = this.plug;
                    resolve(element);
                }
            } else {
                // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                // so we can create another instance
                var element = createThruZeroFlangerGui(this.plug);
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


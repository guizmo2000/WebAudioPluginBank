
/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONThruZeroFlanger_bypass() {
	return "{\"name\":\"Thru Zero Flanger\",\"filename\":\"ThruZeroFlanger_bypass\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"198756\",\"inputs\":\"5\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Oli Larkin (contact@olilarkin.co.uk)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Oliver Larkin\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Stereo Thru Zero Flanger - warning can ZERO the sound!\"},{\"filename\":\"ThruZeroFlanger_bypass\"},{\"licence\":\"GPL\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Thru Zero Flanger\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Thru Zero Flanger\",\"items\":[{\"type\":\"hslider\",\"label\":\"Delay\",\"address\":\"/Thru_Zero_Flanger/Delay\",\"index\":\"2072\",\"meta\":[{\"OWL\":\"PARAMETER_B\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0.5\",\"max\":\"20\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Depth\",\"address\":\"/Thru_Zero_Flanger/Depth\",\"index\":\"100400\",\"meta\":[{\"OWL\":\"PARAMETER_D\"},{\"unit\":\"%\"}],\"init\":\"20\",\"min\":\"3\",\"max\":\"100\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"L-R Offset\",\"address\":\"/Thru_Zero_Flanger/L-R_Offset\",\"index\":\"100432\",\"meta\":[{\"OWL\":\"PARAMETER_C\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Rate\",\"address\":\"/Thru_Zero_Flanger/Rate\",\"index\":\"100416\",\"meta\":[{\"OWL\":\"PARAMETER_A\"},{\"unit\":\"hz\"}],\"init\":\"0.1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/Thru_Zero_Flanger/bypass\",\"index\":\"2084\"}]}]}";
}
function getBase64CodeThruZeroFlanger_bypass() { return "AGFzbQEAAAAB1oCAgAAQYAJ/fwBgBH9/f38AYAF9AX1gAn19AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ADf399AAKagICAAAIDZW52BV9leHBmAAIDZW52Bl9mbW9kZgADA4+AgIAADgABBAUGBwgJCgsMDQ4PBYeAgIAAAQCIgICAAAe6gYCAAAwHY29tcHV0ZQADDGdldE51bUlucHV0cwAEDWdldE51bU91dHB1dHMABQ1nZXRQYXJhbVZhbHVlAAYNZ2V0U2FtcGxlUmF0ZQAHBGluaXQACA1pbnN0YW5jZUNsZWFyAAkRaW5zdGFuY2VDb25zdGFudHMACgxpbnN0YW5jZUluaXQACxppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAMDXNldFBhcmFtVmFsdWUADwZtZW1vcnkCAArSlYCAAA6BgoCAAAICfwN9QQAhA0EAKALckAxBf2qyIQRDAAAAOyAElCEFQwAAgDsgBJQhBkEAIQJBACECA0ACQEHckAwgAkECdGpBADYCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQQBBACgC4JAMQQFqNgLckAxBACgC3JAMQX9qsiEEQwAAADsgBJQhBUMAAIA7IASUIQZBACADQQJ0akMAAABAQwAAAAAgBV8gBUMAAAA/X3GyIAZDAAAAv5KUQwAAAD8gBV0gBUMAAIA/X3GyQwAAwD8gBpOUkpQ4AgBBAEEAKALckAw2AuCQDCADQQFqIQMgA0GBBEgEQAwCDAELCwsLvoyAgAACF38bfUEAIQRBACEFQQAhBkEAIQdBACEIQQAhCUMAAAAAIRtDAAAAACEcQwAAAAAhHUMAAAAAIR5DAAAAACEfQwAAAAAhIEEAIQpDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQQAhC0EAIQxBACENQwAAAAAhJUEAIQ5BACEPQQAhEEMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQQAhEUMAAAAAIStDAAAAACEsQQAhEkMAAAAAIS1BACETQQAhFEEAIRVDAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkEAIRZDAAAAACEzQwAAAAAhNEEAIRdDAAAAACE1QQAhGEEAIRlBACEaIAJBAGooAgAhBCACQQRqKAIAIQUgAkEIaigCACEGIAJBDGooAgAhByACQRBqKAIAIQggA0EAaigCACEJQQAqApQQQQAqApgQlCEbQQAqAqQQIRxDAACAPyAckyEdQQAqAqyQBkEAKgKwkAaUIR5BACoCvJAGQQAqAsCQBpQhH0EAKgLMkAZBACoC0JAGlCEgQQAhCgNAAkAgG0EAKgKQEEEAKgKgEJSSISFBACAhQwAAAAAgIbxBgICA/AdxGzgCnBBBACoCjBBBACoCnBCUISIgIo4hIyAjQwAAgD8gIpOSISRBrBBBACgCqBBB/z9xQQJ0aiAEIApqKgIAOAIAICKoIQsgC0EAQQAgC0gbIQxBgSAgDEGBICAMSBshDSAiICOTISVBrJACQQAoAqgQQf8/cUECdGogBSAKaioCADgCACALQQFqIQ4gDkEAQQAgDkgbIQ9BgSAgD0GBICAPSBshECAGIApqKgIAISZBrJAEQQAoAqgQQf8/cUECdGogJjgCACAeQQAqApAQQQAqAriQBpSSISdBACAnQwAAAAAgJ7xBgICA/AdxGzgCtJAGIB9BACoCyJAGIB9BACoCyJAGko6TkiEoQQAgKEMAAAAAICi8QYCAgPwHcRs4AsSQBiAgQQAqApAQQQAqAtiQBpSSISlBACApQwAAAAAgKbxBgICA/AdxGzgC1JAGQwAAAERBACoCxJAGQQAqAtSQBpJDAACAPxABlCEqICqoIRFBACARQQJ0aioCACErQQAqAowQQQAqApwQQQAqArSQBiArICogKo6TQQAgEUEBakECdGoqAgAgK5OUkpRDAACAP5KUlCEsICyoIRIgLI4hLSASQQFqIRMgEkEAQQAgEkgbIRQgE0EAQQAgE0gbIRVBrBBBACgCqBAgDWtB/z9xQQJ0aioCACAklCAlQayQAkEAKAKoECAQa0H/P3FBAnRqKgIAlJJBrJAEQQAoAqgQQYEgIBRBgSAgFEgba0H/P3FBAnRqKgIAIC1DAACAPyAsk5KUICwgLZNBrJAEQQAoAqgQQYEgIBVBgSAgFUgba0H/P3FBAnRqKgIAlJKTIS5B3JAGQQAoAqgQQf8/cUECdGogHSAulDgCACAHIApqKgIAIS9B3JAIQQAoAqgQQf8/cUECdGogHSAvlDgCACAIIApqKgIAITAgHSAwlCExQdyQCkEAKAKoEEH/P3FBAnRqIDE4AgBDAAAAREEAKgLEkAZDAACAPxABlCEyIDKoIRZBACAWQQJ0aioCACEzQQAqAowQQQAqApwQQQAqArSQBiAzIDIgMo6TQQAgFkEBakECdGoqAgAgM5OUkpRDAACAP5KUlCE0IDSoIRcgNI4hNSAXQQFqIRggF0EAQQAgF0gbIRkgGEEAQQAgGEgbIRogCSAKaiAkQdyQBkEAKAKoECANa0H/P3FBAnRqKgIAlCAlQdyQCEEAKAKoECAQa0H/P3FBAnRqKgIAlJIgHCAwIC8gLpKSlJJB3JAKQQAoAqgQQYEgIBlBgSAgGUgba0H/P3FBAnRqKgIAIDVDAACAPyA0k5KUIDQgNZNB3JAKQQAoAqgQQYEgIBpBgSAgGkgba0H/P3FBAnRqKgIAlJKTOAIAQQBBACoCnBA4AqAQQQBBACgCqBBBAWo2AqgQQQBBACoCtJAGOAK4kAZBAEEAKgLEkAY4AsiQBkEAQQAqAtSQBjgC2JAGIApBBGohCiAKQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEFDwuFgICAAABBAQ8Li4CAgAAAIAAgAWoqAgAPC4mAgIAAAEEAKAKEEA8LjoCAgAAAIAAgARACIAAgARALC5SEgIAAAQp/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQEDQAJAQZwQIAFBAnRqQwAAAAA4AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBAEEANgKoEEEAIQIDQAJAQawQIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBgMAASARADAIMAQsLC0EAIQMDQAJAQayQAiADQQJ0akMAAAAAOAIAIANBAWohAyADQYDAAEgEQAwCDAELCwtBACEEA0ACQEGskAQgBEECdGpDAAAAADgCACAEQQFqIQQgBEGAwABIBEAMAgwBCwsLQQAhBQNAAkBBtJAGIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBAkgEQAwCDAELCwtBACEGA0ACQEHEkAYgBkECdGpDAAAAADgCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAQdSQBiAHQQJ0akMAAAAAOAIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBB3JAGIAhBAnRqQwAAAAA4AgAgCEEBaiEIIAhBgMAASARADAIMAQsLC0EAIQkDQAJAQdyQCCAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQYDAAEgEQAwCDAELCwtBACEKA0ACQEHckAogCkECdGpDAAAAADgCACAKQQFqIQogCkGAwABIBEAMAgwBCwsLC5qBgIAAAEEAIAE2AoQQQQBDAIA7SEMAAIA/QQAoAoQQspeWOAKIEEEAQ28SgzpBACoCiBCUOAKMEEEAQwAAAABDAABIQ0EAKgKIEJWTEAA4ApAQQQBDAACAP0EAKgKQEJM4ApQQQQBDCtcjPEEAKgKUEJQ4AqyQBkEAQwAAgD9BACoCiBCVOAK8kAZBAEMAAAA/QQAqApQQlDgCzJAGC5CAgIAAACAAIAEQCiAAEAwgABAJC7yAgIAAAEEAQwAAIEE4ApgQQQBDAAAAADgCpBBBAEMAAKBBOAKwkAZBAEPNzMw9OALAkAZBAEMAAAAAOALQkAYLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLqo2AgAABAEEAC6MNeyJuYW1lIjoiVGhydSBaZXJvIEZsYW5nZXIiLCJmaWxlbmFtZSI6IlRocnVaZXJvRmxhbmdlcl9ieXBhc3MiLCJ2ZXJzaW9uIjoiMi41LjIzIiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiIxOTg3NTYiLCJpbnB1dHMiOiI1Iiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJPbGkgTGFya2luIChjb250YWN0QG9saWxhcmtpbi5jby51aykifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJPbGl2ZXIgTGFya2luIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiU3RlcmVvIFRocnUgWmVybyBGbGFuZ2VyIC0gd2FybmluZyBjYW4gWkVSTyB0aGUgc291bmQhIn0seyJmaWxlbmFtZSI6IlRocnVaZXJvRmxhbmdlcl9ieXBhc3MifSx7ImxpY2VuY2UiOiJHUEwifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlRocnUgWmVybyBGbGFuZ2VyIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjAuMSJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlRocnUgWmVybyBGbGFuZ2VyIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvRGVsYXkiLCJpbmRleCI6IjIwNzIiLCJtZXRhIjpbeyJPV0wiOiJQQVJBTUVURVJfQiJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMTAiLCJtaW4iOiIwLjUiLCJtYXgiOiIyMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRGVwdGgiLCJhZGRyZXNzIjoiL1RocnVfWmVyb19GbGFuZ2VyL0RlcHRoIiwiaW5kZXgiOiIxMDA0MDAiLCJtZXRhIjpbeyJPV0wiOiJQQVJBTUVURVJfRCJ9LHsidW5pdCI6IiUifV0sImluaXQiOiIyMCIsIm1pbiI6IjMiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkwtUiBPZmZzZXQiLCJhZGRyZXNzIjoiL1RocnVfWmVyb19GbGFuZ2VyL0wtUl9PZmZzZXQiLCJpbmRleCI6IjEwMDQzMiIsIm1ldGEiOlt7Ik9XTCI6IlBBUkFNRVRFUl9DIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmF0ZSIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvUmF0ZSIsImluZGV4IjoiMTAwNDE2IiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0EifSx7InVuaXQiOiJoeiJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6ImJ5cGFzcyIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvYnlwYXNzIiwiaW5kZXgiOiIyMDg0In1dfV19MA=="; }

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
        
        var json_object = JSON.parse(getJSONThruZeroFlanger_bypass());
        
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
        return getJSONThruZeroFlanger_bypass();
    }
    
    setParam(path, val)
    {
        // this.port.postMessage({ type:"param", key:path, value:val });
        
         // Needed for sample accurate control
        console.log(this.parameters.get(path));
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
    context.audioWorklet.addModule("ThruZeroFlanger_bypass-processor.js")
    .then(function () {
         callback(new ThruZeroFlanger(context, {}));
    })
    .catch(function(error) { console.log(error); console.log("Faust ThruZeroFlanger_bypass cannot be loaded or compiled"); });
}


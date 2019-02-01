
/*
Code generated with Faust version 2.14.4
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONuntitled() {
	return "{\"name\":\"untitled\",\"filename\":\"untitled\",\"version\":\"2.14.4\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/demos.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/compressors.lib\",\"/usr/local/share/faust/analyzers.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/9D600EEA445210642386C6A6A56DBE306EA343F6/web/wap\"],\"size\":\"92\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"analyzers.lib/name\":\"Faust Analyzer Library\"},{\"analyzers.lib/version\":\"0.0\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"compressors.lib/name\":\"Faust Compressor Effect Library\"},{\"compressors.lib/version\":\"0.0\"},{\"filename\":\"untitled\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"untitled\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"COMPRESSOR\",\"meta\":[{\"tooltip\":\"Reference:   http://en.wikipedia.org/wiki/Dynamic_range_compression\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"Bypass\",\"address\":\"/COMPRESSOR/0x00/Bypass\",\"index\":\"0\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"When this is checked, the compressor   has no effect\"}]},{\"type\":\"hbargraph\",\"label\":\"Compressor Gain\",\"address\":\"/COMPRESSOR/0x00/Compressor_Gain\",\"index\":\"88\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Current gain of  the compressor in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"}]},{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Compression Control\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Ratio\",\"address\":\"/COMPRESSOR/0x00/Compression_Control/Ratio\",\"index\":\"28\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"A compression Ratio of N means that for each N dB increase in input  signal level above Threshold, the output level goes up 1 dB\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"20\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Threshold\",\"address\":\"/COMPRESSOR/0x00/Compression_Control/Threshold\",\"index\":\"52\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"When the signal level exceeds the Threshold (in dB), its level  is compressed according to the Ratio\"},{\"unit\":\"dB\"}],\"init\":\"-30\",\"min\":\"-100\",\"max\":\"10\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Compression Response\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Attack     tooltip: Time constant in ms (1/e smoothing time) for the compression gain  to approach (exponentially) a new lower target level (the compression  `kicking in')]\",\"address\":\"/COMPRESSOR/0x00/Compression_Response/Attack_____tooltip:_Time_constant_in_ms_(1/e_smoothing_time)_for_the_compression_gain__to_approach_(exponentially)_a_new_lower_target_level_(the_compression__`kicking_in')]\",\"index\":\"24\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"unit\":\"ms\"}],\"init\":\"50\",\"min\":\"1\",\"max\":\"1000\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Release\",\"address\":\"/COMPRESSOR/0x00/Compression_Response/Release\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Time constant in ms (1/e smoothing time) for the compression gain  to approach (exponentially) a new higher target level (the compression  'releasing')\"},{\"unit\":\"ms\"}],\"init\":\"500\",\"min\":\"1\",\"max\":\"1000\",\"step\":\"0.1\"}]}]},{\"type\":\"hslider\",\"label\":\"Makeup Gain\",\"address\":\"/COMPRESSOR/Makeup_Gain\",\"index\":\"4\",\"meta\":[{\"5\":\"\"},{\"tooltip\":\"The compressed-signal output level is increased by this amount  (in dB) to make up for the level lost due to compression\"},{\"unit\":\"dB\"}],\"init\":\"40\",\"min\":\"-96\",\"max\":\"96\",\"step\":\"0.1\"}]}]}";
}
function getBase64Codeuntitled() { return "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EAoLvoCAgAAAQQBDAAAAADgCAEEAQwAAIEI4AgRBAEMAAEhCOAIYQQBDAACgQDgCHEEAQwAA+kM4AiBBAEMAAPDBOAI0C42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC++egIAAAQBBAAvoHnsibmFtZSI6InVudGl0bGVkIiwiZmlsZW5hbWUiOiJ1bnRpdGxlZCIsInZlcnNpb24iOiIyLjE0LjQiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbW9zLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9jb21wcmVzc29ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2FuYWx5emVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yb3V0ZXMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvdG1wL3Nlc3Npb25zLzlENjAwRUVBNDQ1MjEwNjQyMzg2QzZBNkE1NkRCRTMwNkVBMzQzRjYvd2ViL3dhcCJdLCJzaXplIjoiOTIiLCJpbnB1dHMiOiIyIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhbmFseXplcnMubGliL25hbWUiOiJGYXVzdCBBbmFseXplciBMaWJyYXJ5In0seyJhbmFseXplcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb21wcmVzc29ycy5saWIvbmFtZSI6IkZhdXN0IENvbXByZXNzb3IgRWZmZWN0IExpYnJhcnkifSx7ImNvbXByZXNzb3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6InVudGl0bGVkIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJ1bnRpdGxlZCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNPTVBSRVNTT1IiLCJtZXRhIjpbeyJ0b29sdGlwIjoiUmVmZXJlbmNlOiAgIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRHluYW1pY19yYW5nZV9jb21wcmVzc2lvbiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImNoZWNrYm94IiwibGFiZWwiOiJCeXBhc3MiLCJhZGRyZXNzIjoiL0NPTVBSRVNTT1IvMHgwMC9CeXBhc3MiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIwIjoiIn0seyJ0b29sdGlwIjoiV2hlbiB0aGlzIGlzIGNoZWNrZWQsIHRoZSBjb21wcmVzc29yICAgaGFzIG5vIGVmZmVjdCJ9XX0seyJ0eXBlIjoiaGJhcmdyYXBoIiwibGFiZWwiOiJDb21wcmVzc29yIEdhaW4iLCJhZGRyZXNzIjoiL0NPTVBSRVNTT1IvMHgwMC9Db21wcmVzc29yX0dhaW4iLCJpbmRleCI6Ijg4IiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IkN1cnJlbnQgZ2FpbiBvZiAgdGhlIGNvbXByZXNzb3IgaW4gZEIifSx7InVuaXQiOiJkQiJ9XSwibWluIjoiLTUwIiwibWF4IjoiMTAifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJDb21wcmVzc2lvbiBDb250cm9sIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSYXRpbyIsImFkZHJlc3MiOiIvQ09NUFJFU1NPUi8weDAwL0NvbXByZXNzaW9uX0NvbnRyb2wvUmF0aW8iLCJpbmRleCI6IjI4IiwibWV0YSI6W3siMCI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQSBjb21wcmVzc2lvbiBSYXRpbyBvZiBOIG1lYW5zIHRoYXQgZm9yIGVhY2ggTiBkQiBpbmNyZWFzZSBpbiBpbnB1dCAgc2lnbmFsIGxldmVsIGFib3ZlIFRocmVzaG9sZCwgdGhlIG91dHB1dCBsZXZlbCBnb2VzIHVwIDEgZEIifV0sImluaXQiOiI1IiwibWluIjoiMSIsIm1heCI6IjIwIiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlRocmVzaG9sZCIsImFkZHJlc3MiOiIvQ09NUFJFU1NPUi8weDAwL0NvbXByZXNzaW9uX0NvbnRyb2wvVGhyZXNob2xkIiwiaW5kZXgiOiI1MiIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IldoZW4gdGhlIHNpZ25hbCBsZXZlbCBleGNlZWRzIHRoZSBUaHJlc2hvbGQgKGluIGRCKSwgaXRzIGxldmVsICBpcyBjb21wcmVzc2VkIGFjY29yZGluZyB0byB0aGUgUmF0aW8ifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6Ii0zMCIsIm1pbiI6Ii0xMDAiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiQ29tcHJlc3Npb24gUmVzcG9uc2UiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkF0dGFjayAgICAgdG9vbHRpcDogVGltZSBjb25zdGFudCBpbiBtcyAoMS9lIHNtb290aGluZyB0aW1lKSBmb3IgdGhlIGNvbXByZXNzaW9uIGdhaW4gIHRvIGFwcHJvYWNoIChleHBvbmVudGlhbGx5KSBhIG5ldyBsb3dlciB0YXJnZXQgbGV2ZWwgKHRoZSBjb21wcmVzc2lvbiAgYGtpY2tpbmcgaW4nKV0iLCJhZGRyZXNzIjoiL0NPTVBSRVNTT1IvMHgwMC9Db21wcmVzc2lvbl9SZXNwb25zZS9BdHRhY2tfX19fX3Rvb2x0aXA6X1RpbWVfY29uc3RhbnRfaW5fbXNfKDEvZV9zbW9vdGhpbmdfdGltZSlfZm9yX3RoZV9jb21wcmVzc2lvbl9nYWluX190b19hcHByb2FjaF8oZXhwb25lbnRpYWxseSlfYV9uZXdfbG93ZXJfdGFyZ2V0X2xldmVsXyh0aGVfY29tcHJlc3Npb25fX2BraWNraW5nX2luJyldIiwiaW5kZXgiOiIyNCIsIm1ldGEiOlt7IjEiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjUwIiwibWluIjoiMSIsIm1heCI6IjEwMDAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmVsZWFzZSIsImFkZHJlc3MiOiIvQ09NUFJFU1NPUi8weDAwL0NvbXByZXNzaW9uX1Jlc3BvbnNlL1JlbGVhc2UiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMiI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlRpbWUgY29uc3RhbnQgaW4gbXMgKDEvZSBzbW9vdGhpbmcgdGltZSkgZm9yIHRoZSBjb21wcmVzc2lvbiBnYWluICB0byBhcHByb2FjaCAoZXhwb25lbnRpYWxseSkgYSBuZXcgaGlnaGVyIHRhcmdldCBsZXZlbCAodGhlIGNvbXByZXNzaW9uICAncmVsZWFzaW5nJykifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjUwMCIsIm1pbiI6IjEiLCJtYXgiOiIxMDAwIiwic3RlcCI6IjAuMSJ9XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNYWtldXAgR2FpbiIsImFkZHJlc3MiOiIvQ09NUFJFU1NPUi9NYWtldXBfR2FpbiIsImluZGV4IjoiNCIsIm1ldGEiOlt7IjUiOiIifSx7InRvb2x0aXAiOiJUaGUgY29tcHJlc3NlZC1zaWduYWwgb3V0cHV0IGxldmVsIGlzIGluY3JlYXNlZCBieSB0aGlzIGFtb3VudCAgKGluIGRCKSB0byBtYWtlIHVwIGZvciB0aGUgbGV2ZWwgbG9zdCBkdWUgdG8gY29tcHJlc3Npb24ifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6IjQwIiwibWluIjoiLTk2IiwibWF4IjoiOTYiLCJzdGVwIjoiMC4xIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class untitledNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {

        var json_object = JSON.parse(getJSONuntitled());

        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'untitled', options);
        this.baseURL = baseURL;
      
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
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push(item.address);
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        this.json_object = json_object;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

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
    getJSON()
    {
        return getJSONuntitled();
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
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

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
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
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, untitledNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var path = this.fPitchwheelLabel[i];
            this.setParamValue(path, Math.pow(2.0, wheel/12.0));
            if (this.output_handler) {
                this.output_handler(path, this.getParamValue(path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
    // Loads a sample and decode it
    static loadAudioSample(context, url)
    {
        return new Promise(function(resolve, reject) {
                           fetch(url)
                           .then((response) => {
                                 return response.arrayBuffer();
                                 })
                           .then((buffer) => {
                                 context.decodeAudioData(buffer, (decodedAudioData) => {
                                                         resolve(decodedAudioData);
                                                         });
                                 });
                           });
    }
    
    
    
    // Loads a sample
    static loadSample(url)
    {
        return new Promise(function(resolve, reject) {
                           fetch(url)
                           .then((response) => {
                                 resolve (response.arrayBuffer());
                                 })
                           });
    }
    
}

// Factory class
window.untitled = class untitled {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	// Resume audio context each time...
    	context.resume();
    	
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        
        this.pathTable = [];
        
        // soundfile items
        this.soundfile_items = [];
    }
    
    // JSON parsing functions
    parse_ui(ui)
    {
        for (var i = 0; i < ui.length; i++) {
            this.parse_group(ui[i]);
        }
    }
    
    parse_group(group)
    {
        if (group.items) {
            this.parse_items(group.items);
        }
    }
    
    parse_items(items)
    {
        for (var i = 0; i < items.length; i++) {
            this.parse_item(items[i]);
        }
    }
    
    parse_item(item)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            this.parse_items(item.items);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            this.soundfile_items.push(item.address);
            this.pathTable[item.address] = parseInt(item.index);
        }
    }
  
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    load()
    {
    	return new Promise((resolve, reject) => {   
            let real_url = (this.baseURL === "") ? "untitled-processor.js" : (this.baseURL + "/untitled-processor.js");
            this.context.audioWorklet.addModule(real_url).then(() => {
            this.node = new untitledNode(this.context, this.baseURL, {});
            this.node.onprocessorerror = () => { console.log('An error from untitled-processor was detected.');}
            return (this.node);
            }).then((node) => {
                resolve(node);
            }).catch((e) => {
                reject(e);
            });
        });
    }
    
    loadGui() 
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let url = this.baseURL + "/main.html";
                if (!this.linkExists(url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createuntitledGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createuntitledGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}

}

// WAP factory
window.Faustuntitled = window.untitled;
    

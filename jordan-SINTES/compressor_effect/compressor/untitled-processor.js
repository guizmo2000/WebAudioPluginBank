
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

// Monophonic Faust DSP
class untitledProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            untitledProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            untitledProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            untitledProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            untitledProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= untitledProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
   
    static get parameterDescriptors() 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        untitledProcessor.parse_ui(JSON.parse(getJSONuntitled()).ui, params, untitledProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONuntitled());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;
        
        this.untitled_instance = new WebAssembly.Instance(untitledProcessor.wasm_module, untitledProcessor.importObject);
  	   	this.factory = this.untitled_instance.exports;
        this.HEAP = this.untitled_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];
        
        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * untitledProcessor.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];
     
        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.loadFile = function (sound_index, sound_ptr, length, sample_rate, channels, buffers)
        {
            /*
             Soundfile layout:
            
                FAUSTFLOAT** fBuffers;
                int fLength;
                int fSampleRate;
                int fChannels;
             
                ===========
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                ===========
            */
            
            var size_of_soundfile = this.ptr_size + (this.integer_size * 3);  // fBuffers, fLength, fSampleRate, fChannels
            
            //console.log("sound_ptr " + sound_ptr);
            //console.log("size_of_soundfile " + size_of_soundfile);
            
            // end of sounfile
            var end_of_soundfile_ptr = sound_ptr + size_of_soundfile;
            
            this.HEAP32[sound_ptr >> 2] = end_of_soundfile_ptr;
            this.HEAP32[(sound_ptr + 4) >> 2] = length;      // fLength
            this.HEAP32[(sound_ptr + 8) >> 2] = sample_rate; // fSampleRate
            this.HEAP32[(sound_ptr + 12) >> 2] = channels;   // fChannels
            
            //console.log("end_of_soundfile_ptr " + end_of_soundfile_ptr);
            
            // Setup soundfile pointers
            var start_of_soundfile_data_ptr = end_of_soundfile_ptr + this.ptr_size * channels;
            
            for (var i = 0; i < channels; i++) {
                this.HEAP32[(end_of_soundfile_ptr + (i * this.ptr_size)) >> 2] = start_of_soundfile_data_ptr + (i * length * this.sample_size);
            }
            
            // Setup soundfile buffer
            for (var i = 0; i < channels; i++) {
                
                // start of sound buffer
                var start_of_buffer_ptr = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                
                // generate a 440 Hz signal
                for (var j = 0; j < length; j++) {
                    this.HEAPF32[(start_of_buffer_ptr + (j * this.sample_size)) >> 2] = 0.8 * Math.sin((j/length)*2*Math.PI);
                }
            }
            
            // Setup fSoundfile fields in the DSP structure
            //console.log("sound_index " + sound_index);
            //console.log("this.pathTable[this.soundfile_items[sound_index]] " + this.pathTable[this.soundfile_items[sound_index]]);
            
            this.HEAP32[this.pathTable[this.soundfile_items[sound_index]] >> 2] = sound_ptr;
            
            /*
            console.log("start_of_soundfile_data_ptr " + start_of_soundfile_data_ptr);
            console.log("length " + length);
            console.log("channels " + channels);
            console.log("this.sample_size " + this.sample_size);
            console.log("END " + (start_of_soundfile_data_ptr + (channels * length * this.sample_size)));
            */
            
            // End of buffer data;
            return start_of_soundfile_data_ptr + (channels * length * this.sample_size);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((untitledProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + untitledProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((untitledProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + untitledProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            untitledProcessor.parse_ui(this.json_object.ui, this, untitledProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * untitledProcessor.buffer_size * this.sample_size);
            
            var sound_ptr1 = this.soundfile_ptr;
            var sound_ptr2 = this.loadFile(0, sound_ptr1, 44100/700, 44100, 2, null);
            var sound_ptr3 = this.loadFile(1, sound_ptr2, 44100/500, 44100, 2, null);
            */
             
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
            return true;
        }
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        /*
        TODO: sample accurate control change is not yet handled
        When no automation occurs, params[i][1] has a length of 1,
        otherwise params[i][1] has a length of 128 with possible control change each sample
    	*/
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, untitledProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals
untitledProcessor.buffer_size = 128;

untitledProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    if (untitledProcessor.wasm_module == undefined) {
        untitledProcessor.wasm_module = new WebAssembly.Module(untitledProcessor.atob(getBase64Codeuntitled()));
        registerProcessor('untitled', untitledProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust untitled cannot be loaded or compiled");
}


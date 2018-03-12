
/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONThruZeroFlanger_bypass() {
	return "{\"name\":\"Thru Zero Flanger\",\"filename\":\"ThruZeroFlanger_bypass\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"198756\",\"inputs\":\"5\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Oli Larkin (contact@olilarkin.co.uk)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Oliver Larkin\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Stereo Thru Zero Flanger - warning can ZERO the sound!\"},{\"filename\":\"ThruZeroFlanger_bypass\"},{\"licence\":\"GPL\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Thru Zero Flanger\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Thru Zero Flanger\",\"items\":[{\"type\":\"hslider\",\"label\":\"Delay\",\"address\":\"/Thru_Zero_Flanger/Delay\",\"index\":\"2072\",\"meta\":[{\"OWL\":\"PARAMETER_B\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0.5\",\"max\":\"20\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Depth\",\"address\":\"/Thru_Zero_Flanger/Depth\",\"index\":\"100400\",\"meta\":[{\"OWL\":\"PARAMETER_D\"},{\"unit\":\"%\"}],\"init\":\"20\",\"min\":\"3\",\"max\":\"100\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"L-R Offset\",\"address\":\"/Thru_Zero_Flanger/L-R_Offset\",\"index\":\"100432\",\"meta\":[{\"OWL\":\"PARAMETER_C\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Rate\",\"address\":\"/Thru_Zero_Flanger/Rate\",\"index\":\"100416\",\"meta\":[{\"OWL\":\"PARAMETER_A\"},{\"unit\":\"hz\"}],\"init\":\"0.1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/Thru_Zero_Flanger/bypass\",\"index\":\"2084\"}]}]}";
}
function getBase64CodeThruZeroFlanger_bypass() { return "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WkVSTyB0aGUgc291bmQhIn0seyJmaWxlbmFtZSI6IlRocnVaZXJvRmxhbmdlcl9ieXBhc3MifSx7ImxpY2VuY2UiOiJHUEwifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlRocnUgWmVybyBGbGFuZ2VyIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjAuMSJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlRocnUgWmVybyBGbGFuZ2VyIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvRGVsYXkiLCJpbmRleCI6IjIwNzIiLCJtZXRhIjpbeyJPV0wiOiJQQVJBTUVURVJfQiJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMTAiLCJtaW4iOiIwLjUiLCJtYXgiOiIyMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRGVwdGgiLCJhZGRyZXNzIjoiL1RocnVfWmVyb19GbGFuZ2VyL0RlcHRoIiwiaW5kZXgiOiIxMDA0MDAiLCJtZXRhIjpbeyJPV0wiOiJQQVJBTUVURVJfRCJ9LHsidW5pdCI6IiUifV0sImluaXQiOiIyMCIsIm1pbiI6IjMiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkwtUiBPZmZzZXQiLCJhZGRyZXNzIjoiL1RocnVfWmVyb19GbGFuZ2VyL0wtUl9PZmZzZXQiLCJpbmRleCI6IjEwMDQzMiIsIm1ldGEiOlt7Ik9XTCI6IlBBUkFNRVRFUl9DIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmF0ZSIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvUmF0ZSIsImluZGV4IjoiMTAwNDE2IiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0EifSx7InVuaXQiOiJoeiJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6ImJ5cGFzcyIsImFkZHJlc3MiOiIvVGhydV9aZXJvX0ZsYW5nZXIvYnlwYXNzIiwiaW5kZXgiOiIyMDg0In1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class ThruZeroFlanger_bypassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ThruZeroFlanger_bypassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ThruZeroFlanger_bypassProcessor.parse_items(group.items, obj, callback);
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
            ThruZeroFlanger_bypassProcessor.parse_items(item.items, obj, callback);
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
            ThruZeroFlanger_bypassProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
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
                nUint24 |= ThruZeroFlanger_bypassProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        ThruZeroFlanger_bypassProcessor.parse_ui(JSON.parse(getJSONThruZeroFlanger_bypass()).ui, params, ThruZeroFlanger_bypassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONThruZeroFlanger_bypass());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = ThruZeroFlanger_bypassProcessor.ThruZeroFlanger_bypass_instance.exports;
        this.HEAP = ThruZeroFlanger_bypassProcessor.ThruZeroFlanger_bypass_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ThruZeroFlanger_bypassProcessor.buffer_size * this.sample_size);

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
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ThruZeroFlanger_bypassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ThruZeroFlanger_bypassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ThruZeroFlanger_bypassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ThruZeroFlanger_bypassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ThruZeroFlanger_bypassProcessor.parse_ui(this.json_object.ui, this, ThruZeroFlanger_bypassProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, ThruZeroFlanger_bypassProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
        }

        this.setParamValue = function (path, val)
        {
            console.log("param");
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, ThruZeroFlanger_bypassProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

ThruZeroFlanger_bypassProcessor.buffer_size = 128;

ThruZeroFlanger_bypassProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(ThruZeroFlanger_bypassProcessor.atob(getBase64CodeThruZeroFlanger_bypass()));
    ThruZeroFlanger_bypassProcessor.ThruZeroFlanger_bypass_instance = new WebAssembly.Instance(wasm_module, ThruZeroFlanger_bypassProcessor.importObject);
    registerProcessor('ThruZeroFlanger_bypass', ThruZeroFlanger_bypassProcessor);
} catch (e) {
    console.log(e); console.log("Faust ThruZeroFlanger_bypass cannot be loaded or compiled");
}


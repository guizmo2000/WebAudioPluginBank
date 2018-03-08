
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
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class ThruZeroFlangerProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ThruZeroFlangerProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ThruZeroFlangerProcessor.parse_items(group.items, obj, callback);
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
            ThruZeroFlangerProcessor.parse_items(item.items, obj, callback);
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
            ThruZeroFlangerProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= ThruZeroFlangerProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        ThruZeroFlangerProcessor.parse_ui(JSON.parse(getJSONThruZeroFlanger()).ui, params, ThruZeroFlangerProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONThruZeroFlanger());

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
        
        this.factory = ThruZeroFlangerProcessor.ThruZeroFlanger_instance.exports;
        this.HEAP = ThruZeroFlangerProcessor.ThruZeroFlanger_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ThruZeroFlangerProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ThruZeroFlangerProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ThruZeroFlangerProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ThruZeroFlangerProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ThruZeroFlangerProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ThruZeroFlangerProcessor.parse_ui(this.json_object.ui, this, ThruZeroFlangerProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, ThruZeroFlangerProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, ThruZeroFlangerProcessor.buffer_size, this.ins, this.outs);
        
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

ThruZeroFlangerProcessor.buffer_size = 128;

ThruZeroFlangerProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(ThruZeroFlangerProcessor.atob(getBase64CodeThruZeroFlanger()));
    ThruZeroFlangerProcessor.ThruZeroFlanger_instance = new WebAssembly.Instance(wasm_module, ThruZeroFlangerProcessor.importObject);
    registerProcessor('ThruZeroFlanger', ThruZeroFlangerProcessor);
} catch (e) {
    console.log(e); console.log("Faust ThruZeroFlanger cannot be loaded or compiled");
}


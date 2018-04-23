
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
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class tonestackProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            tonestackProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            tonestackProcessor.parse_items(group.items, obj, callback);
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
            tonestackProcessor.parse_items(item.items, obj, callback);
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
            tonestackProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= tonestackProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        tonestackProcessor.parse_ui(JSON.parse(getJSONtonestack()).ui, params, tonestackProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONtonestack());

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
        
        this.tonestack_instance = new WebAssembly.Instance(tonestackProcessor.wasm_module, tonestackProcessor.importObject);
  	   	this.factory = this.tonestack_instance.exports;
        this.HEAP = this.tonestack_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * tonestackProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((tonestackProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + tonestackProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((tonestackProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + tonestackProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            tonestackProcessor.parse_ui(this.json_object.ui, this, tonestackProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, tonestackProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, tonestackProcessor.buffer_size, this.ins, this.outs);
        
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

tonestackProcessor.buffer_size = 128;

tonestackProcessor.importObject = {
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
    if (tonestackProcessor.wasm_module == undefined) {
        tonestackProcessor.wasm_module = new WebAssembly.Module(tonestackProcessor.atob(getBase64Codetonestack()));
        registerProcessor('tonestack', tonestackProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust tonestack cannot be loaded or compiled");
}


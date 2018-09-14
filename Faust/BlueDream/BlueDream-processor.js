
/*
Code generated with Faust version 2.8.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBlueDream() {
	return "{\"name\":\"kpp_bluedream\",\"filename\":\"BlueDream\",\"version\":\"2.8.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"276\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Oleg Kapitonov\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"BlueDream\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"GPLv3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"kpp_bluedream\"},{\"version\":\"0.1b\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"kpp_bluedream\",\"items\":[{\"type\":\"vslider\",\"label\":\"bass\",\"address\":\"/kpp_bluedream/bass\",\"index\":\"172\",\"init\":\"-6.9\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/kpp_bluedream/bypass\",\"index\":\"0\"},{\"type\":\"vslider\",\"label\":\"drive\",\"address\":\"/kpp_bluedream/drive\",\"index\":\"12\",\"init\":\"63\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"middle\",\"address\":\"/kpp_bluedream/middle\",\"index\":\"216\",\"init\":\"-3.9\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"treble\",\"address\":\"/kpp_bluedream/treble\",\"index\":\"240\",\"init\":\"0.6\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"voice\",\"address\":\"/kpp_bluedream/voice\",\"index\":\"4\",\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"volume\",\"address\":\"/kpp_bluedream/volume\",\"index\":\"8\",\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeBlueDream() { return "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IEthcGl0b25vdiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoidW50aXRsZWQifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2Vuc2UiOiJHUEx2MyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoia3BwX2JsdWVkcmVhbSJ9LHsidmVyc2lvbiI6IjAuMWIifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJrcHBfYmx1ZWRyZWFtIiwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJiYXNzIiwiYWRkcmVzcyI6Ii9rcHBfYmx1ZWRyZWFtL2Jhc3MiLCJpbmRleCI6IjE3MiIsImluaXQiOiItNi45IiwibWluIjoiLTE1IiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6ImJ5cGFzcyIsImFkZHJlc3MiOiIva3BwX2JsdWVkcmVhbS9ieXBhc3MiLCJpbmRleCI6IjAifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJkcml2ZSIsImFkZHJlc3MiOiIva3BwX2JsdWVkcmVhbS9kcml2ZSIsImluZGV4IjoiMTIiLCJpbml0IjoiNjMiLCJtaW4iOiIwIiwibWF4IjoiMTAwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJtaWRkbGUiLCJhZGRyZXNzIjoiL2twcF9ibHVlZHJlYW0vbWlkZGxlIiwiaW5kZXgiOiIyMTYiLCJpbml0IjoiLTMuOSIsIm1pbiI6Ii0xNSIsIm1heCI6IjE1Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6InRyZWJsZSIsImFkZHJlc3MiOiIva3BwX2JsdWVkcmVhbS90cmVibGUiLCJpbmRleCI6IjI0MCIsImluaXQiOiIwLjYiLCJtaW4iOiItMTUiLCJtYXgiOiIxNSIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJ2b2ljZSIsImFkZHJlc3MiOiIva3BwX2JsdWVkcmVhbS92b2ljZSIsImluZGV4IjoiNCIsImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6InZvbHVtZSIsImFkZHJlc3MiOiIva3BwX2JsdWVkcmVhbS92b2x1bWUiLCJpbmRleCI6IjgiLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class BlueDreamProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BlueDreamProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BlueDreamProcessor.parse_items(group.items, obj, callback);
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
            BlueDreamProcessor.parse_items(item.items, obj, callback);
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
            BlueDreamProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= BlueDreamProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        BlueDreamProcessor.parse_ui(JSON.parse(getJSONBlueDream()).ui, params, BlueDreamProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONBlueDream());

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
        
        this.BlueDream_instance = new WebAssembly.Instance(BlueDreamProcessor.wasm_module, BlueDreamProcessor.importObject);
  	   	this.factory = this.BlueDream_instance.exports;
        this.HEAP = this.BlueDream_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * BlueDreamProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((BlueDreamProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + BlueDreamProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((BlueDreamProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + BlueDreamProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            BlueDreamProcessor.parse_ui(this.json_object.ui, this, BlueDreamProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * BlueDreamProcessor.buffer_size * this.sample_size);
            
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
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, BlueDreamProcessor.buffer_size, this.ins, this.outs);
        
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

BlueDreamProcessor.buffer_size = 128;

BlueDreamProcessor.importObject = {
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
    if (BlueDreamProcessor.wasm_module == undefined) {
        BlueDreamProcessor.wasm_module = new WebAssembly.Module(BlueDreamProcessor.atob(getBase64CodeBlueDream()));
        registerProcessor('BlueDream', BlueDreamProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust BlueDream cannot be loaded or compiled");
}


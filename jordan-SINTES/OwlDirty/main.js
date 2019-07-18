
/*
Code generated with Faust version 2.17.14
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONOwlDirty() {
	return "{\"name\": \"OwlDirty\",\"filename\": \"OwlDirty.dsp\",\"version\": \"2.17.14\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/3C1D4E276DA2C9F406958E7B4956E90104363F67/web/wap\"],\"size\": \"172296\",\"inputs\": \"2\",\"outputs\": \"2\",\"meta\": [ { \"author\": \"Xavier Godart\" },{ \"basics_lib_name\": \"Faust Basic Element Library\" },{ \"basics_lib_version\": \"0.0\" },{ \"compilation_options\": \"-single -scal -I libraries/ -I project/ -lang wasm\" },{ \"copyright\": \"(c) Empirical Noises 2017\" },{ \"delays_lib_name\": \"Faust Delay Library\" },{ \"delays_lib_version\": \"0.1\" },{ \"filename\": \"OwlDirty.dsp\" },{ \"filters_lib_name\": \"Faust Filters Library\" },{ \"filters_lib_version\": \"0.0\" },{ \"library_path\": \"FaustDSP\" },{ \"maths_lib_author\": \"GRAME\" },{ \"maths_lib_copyright\": \"GRAME\" },{ \"maths_lib_license\": \"LGPL with exception\" },{ \"maths_lib_name\": \"Faust Math Library\" },{ \"maths_lib_version\": \"2.1\" },{ \"name\": \"OwlDirty\" },{ \"routes_lib_name\": \"Faust Signal Routing Library\" },{ \"routes_lib_version\": \"0.1\" },{ \"signals_lib_name\": \"Faust Signal Routing Library\" },{ \"signals_lib_version\": \"0.0\" },{ \"version\": \"1.0.0\" }],\"ui\": [ {\"type\": \"vgroup\",\"label\": \"OwlDirty\",\"items\": [ {\"type\": \"hslider\",\"label\": \"DECAY\",\"address\": \"/OwlDirty/DECAY\",\"index\": \"40\",\"meta\": [{ \"OWL\": \"A\" },{ \"style\": \"knob\" }],\"init\": \"0.7\",\"min\": \"0.5\",\"max\": \"1\",\"step\": \"0.01\"},{\"type\": \"hslider\",\"label\": \"DRIVE\",\"address\": \"/OwlDirty/DRIVE\",\"index\": \"36\",\"meta\": [{ \"OWL\": \"C\" },{ \"style\": \"knob\" }],\"init\": \"0\",\"min\": \"0\",\"max\": \"0.7\",\"step\": \"0.1\"},{\"type\": \"hslider\",\"label\": \"MIX\",\"address\": \"/OwlDirty/MIX\",\"index\": \"24\",\"meta\": [{ \"OWL\": \"D\" },{ \"style\": \"knob\" }],\"init\": \"0.75\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.01\"},{\"type\": \"hslider\",\"label\": \"TONE\",\"address\": \"/OwlDirty/TONE\",\"index\": \"32\",\"meta\": [{ \"OWL\": \"B\" },{ \"scale\": \"log\" },{ \"style\": \"knob\" }],\"init\": \"4000\",\"min\": \"900\",\"max\": \"8000\",\"step\": \"0.01\"},{\"type\": \"checkbox\",\"label\": \"bypass\",\"address\": \"/OwlDirty/bypass\",\"index\": \"12\"}]}]}";
}
function getBase64CodeOwlDirty() { return "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ZXIgR29kYXJ0IiB9LHsgImJhc2ljc19saWJfbmFtZSI6ICJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkiIH0seyAiYmFzaWNzX2xpYl92ZXJzaW9uIjogIjAuMCIgfSx7ICJjb21waWxhdGlvbl9vcHRpb25zIjogIi1zaW5nbGUgLXNjYWwgLUkgbGlicmFyaWVzLyAtSSBwcm9qZWN0LyAtbGFuZyB3YXNtIiB9LHsgImNvcHlyaWdodCI6ICIoYykgRW1waXJpY2FsIE5vaXNlcyAyMDE3IiB9LHsgImRlbGF5c19saWJfbmFtZSI6ICJGYXVzdCBEZWxheSBMaWJyYXJ5IiB9LHsgImRlbGF5c19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiZmlsZW5hbWUiOiAiT3dsRGlydHkuZHNwIiB9LHsgImZpbHRlcnNfbGliX25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnNfbGliX3ZlcnNpb24iOiAiMC4wIiB9LHsgImxpYnJhcnlfcGF0aCI6ICJGYXVzdERTUCIgfSx7ICJtYXRoc19saWJfYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRoc19saWJfbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHNfbGliX3ZlcnNpb24iOiAiMi4xIiB9LHsgIm5hbWUiOiAiT3dsRGlydHkiIH0seyAicm91dGVzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAicm91dGVzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJzaWduYWxzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFsc19saWJfdmVyc2lvbiI6ICIwLjAiIH0seyAidmVyc2lvbiI6ICIxLjAuMCIgfV0sInVpIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiT3dsRGlydHkiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJERUNBWSIsImFkZHJlc3MiOiAiL093bERpcnR5L0RFQ0FZIiwiaW5kZXgiOiAiNDAiLCJtZXRhIjogW3sgIk9XTCI6ICJBIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogIjAuNyIsIm1pbiI6ICIwLjUiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiRFJJVkUiLCJhZGRyZXNzIjogIi9Pd2xEaXJ0eS9EUklWRSIsImluZGV4IjogIjM2IiwibWV0YSI6IFt7ICJPV0wiOiAiQyIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIwIiwibWluIjogIjAiLCJtYXgiOiAiMC43Iiwic3RlcCI6ICIwLjEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIk1JWCIsImFkZHJlc3MiOiAiL093bERpcnR5L01JWCIsImluZGV4IjogIjI0IiwibWV0YSI6IFt7ICJPV0wiOiAiRCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIwLjc1IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiVE9ORSIsImFkZHJlc3MiOiAiL093bERpcnR5L1RPTkUiLCJpbmRleCI6ICIzMiIsIm1ldGEiOiBbeyAiT1dMIjogIkIiIH0seyAic2NhbGUiOiAibG9nIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogIjQwMDAiLCJtaW4iOiAiOTAwIiwibWF4IjogIjgwMDAiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAiY2hlY2tib3giLCJsYWJlbCI6ICJieXBhc3MiLCJhZGRyZXNzIjogIi9Pd2xEaXJ0eS9ieXBhc3MiLCJpbmRleCI6ICIxMiJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class OwlDirtyNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'OwlDirty', options);
        
        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);
     
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
        return this.json;
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
                this.setParamValue(path, OwlDirtyNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
    
}

// Factory class
class OwlDirty {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];
    }

    heap2Str(buf)
    {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
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
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                        
                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                        
                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "OwlDirty.wasm" : (this.baseURL + "/OwlDirty.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);
            
            return new Promise((resolve, reject) => {   
            
                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);  
                let options = { wasm_module: dspModule, json: json };
                
                let re = /JSON_STR/g;
                let OwlDirtyProcessorString1 = OwlDirtyProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([OwlDirtyProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new OwlDirtyNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from OwlDirty-processor was detected.');}
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });
            
        } catch (e) {
            this.error(e);
            this.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    	
    }
    
    async loadGui()
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createOwlDirtyGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createOwlDirtyGUI(this.node);
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

// Template string for AudioWorkletProcessor

let OwlDirtyProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class OwlDirtyProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                OwlDirtyProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                OwlDirtyProcessor.parse_items(group.items, obj, callback);
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
                OwlDirtyProcessor.parse_items(item.items, obj, callback);
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
                OwlDirtyProcessor.parse_items(item.items, obj, callback);
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
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            OwlDirtyProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, OwlDirtyProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            
            const importObject = {
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
            
            this.OwlDirty_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
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
            
            this.factory = this.OwlDirty_instance.exports;
            this.HEAP = this.OwlDirty_instance.exports.memory.buffer;
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
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
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
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                OwlDirtyProcessor.parse_ui(this.json_object.ui, this, OwlDirtyProcessor.parse_item2);
                
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
            
            console.log(this);
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
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            var params = Object.entries(parameters);
            for (var i = 0; i < params.length; i++) {
                this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
            }
            
            // Compute
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            
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
    const NUM_FRAMES = 128;
    registerProcessor('OwlDirty', OwlDirtyProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.OwlDirty = OwlDirty;
    window.FaustOwlDirty = OwlDirty;
} else {
    module.exports = { OwlDirty };
}


/*
Code generated with Faust version 2.18.0
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONOscTube() {
	return "{\"name\": \"OscTube\",\"filename\": \"OscTube.dsp\",\"version\": \"2.18.0\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/041DFFCAE31D8BBEB0463DCE30D768B2E14059BD/web/wap\"],\"size\": \"16604\",\"inputs\": \"1\",\"outputs\": \"1\",\"meta\": [ { \"compilation_options\": \"-single -scal -I libraries/ -I project/ -lang wasm\" },{ \"effect_lib_author\": \"Julius O. Smith (jos at ccrma.stanford.edu)\" },{ \"effect_lib_copyright\": \"Julius O. Smith III\" },{ \"effect_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"effect_lib_exciter_author\": \"Priyanka Shekar (pshekar@ccrma.stanford.edu)\" },{ \"effect_lib_exciter_copyright\": \"Copyright (c) 2013 Priyanka Shekar\" },{ \"effect_lib_exciter_license\": \"MIT License (MIT)\" },{ \"effect_lib_exciter_name\": \"Harmonic Exciter\" },{ \"effect_lib_exciter_version\": \"1.0\" },{ \"effect_lib_license\": \"STK-4.3\" },{ \"effect_lib_name\": \"Faust Audio Effect Library\" },{ \"effect_lib_version\": \"1.33\" },{ \"filename\": \"OscTube.dsp\" },{ \"filter_lib_author\": \"Julius O. Smith (jos at ccrma.stanford.edu)\" },{ \"filter_lib_copyright\": \"Julius O. Smith III\" },{ \"filter_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"filter_lib_license\": \"STK-4.3\" },{ \"filter_lib_name\": \"Faust Filter Library\" },{ \"filter_lib_reference\": \"https://ccrma.stanford.edu/~jos/filters/\" },{ \"filter_lib_version\": \"1.29\" },{ \"id\": \"tube2\" },{ \"library_path\": \"FaustDSP\" },{ \"math_lib_author\": \"GRAME\" },{ \"math_lib_copyright\": \"GRAME\" },{ \"math_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"math_lib_license\": \"LGPL with exception\" },{ \"math_lib_name\": \"Math Library\" },{ \"math_lib_version\": \"1.0\" },{ \"maths_lib_author\": \"GRAME\" },{ \"maths_lib_copyright\": \"GRAME\" },{ \"maths_lib_license\": \"LGPL with exception\" },{ \"maths_lib_name\": \"Faust Math Library\" },{ \"maths_lib_version\": \"2.1\" },{ \"maxmsp_lib_author\": \"GRAME\" },{ \"maxmsp_lib_copyright\": \"GRAME\" },{ \"maxmsp_lib_license\": \"LGPL\" },{ \"maxmsp_lib_name\": \"MaxMSP compatibility Library\" },{ \"maxmsp_lib_version\": \"1.1\" },{ \"music_lib_author\": \"GRAME\" },{ \"music_lib_copyright\": \"GRAME\" },{ \"music_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"music_lib_license\": \"LGPL with exception\" },{ \"music_lib_name\": \"Music Library\" },{ \"music_lib_version\": \"1.0\" },{ \"name\": \"OscTube\" }],\"ui\": [ {\"type\": \"vgroup\",\"label\": \"OscTube\",\"items\": [ {\"type\": \"vslider\",\"label\": \"Fuzz\",\"address\": \"/OscTube/Fuzz\",\"index\": \"48\",\"meta\": [{ \"OWL\": \"PARAMETER_A\" },{ \"name\": \"tube\" },{ \"style\": \"knob\" }],\"init\": \"1\",\"min\": \"-3\",\"max\": \"20\",\"step\": \"1\"},{\"type\": \"vslider\",\"label\": \"Resonance\",\"address\": \"/OscTube/Resonance\",\"index\": \"72\",\"meta\": [{ \"OWL\": \"PARAMETER_B\" },{ \"style\": \"knob\" }],\"init\": \"0.5\",\"min\": \"0\",\"max\": \"0.9\",\"step\": \"0.01\"},{\"type\": \"vslider\",\"label\": \"Vibrato\",\"address\": \"/OscTube/Vibrato\",\"index\": \"16524\",\"meta\": [{ \"OWL\": \"PARAMETER_C\" },{ \"style\": \"knob\" }],\"init\": \"1\",\"min\": \"0\",\"max\": \"0.99\",\"step\": \"0.01\"},{\"type\": \"checkbox\",\"label\": \"bypass\",\"address\": \"/OscTube/bypass\",\"index\": \"20\"}]}]}";
}
function getBase64CodeOscTube() { return "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cHJlY2F0ZWQiOiAiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4iIH0seyAiZWZmZWN0X2xpYl9leGNpdGVyX2F1dGhvciI6ICJQcml5YW5rYSBTaGVrYXIgKHBzaGVrYXJAY2NybWEuc3RhbmZvcmQuZWR1KSIgfSx7ICJlZmZlY3RfbGliX2V4Y2l0ZXJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoYykgMjAxMyBQcml5YW5rYSBTaGVrYXIiIH0seyAiZWZmZWN0X2xpYl9leGNpdGVyX2xpY2Vuc2UiOiAiTUlUIExpY2Vuc2UgKE1JVCkiIH0seyAiZWZmZWN0X2xpYl9leGNpdGVyX25hbWUiOiAiSGFybW9uaWMgRXhjaXRlciIgfSx7ICJlZmZlY3RfbGliX2V4Y2l0ZXJfdmVyc2lvbiI6ICIxLjAiIH0seyAiZWZmZWN0X2xpYl9saWNlbnNlIjogIlNUSy00LjMiIH0seyAiZWZmZWN0X2xpYl9uYW1lIjogIkZhdXN0IEF1ZGlvIEVmZmVjdCBMaWJyYXJ5IiB9LHsgImVmZmVjdF9saWJfdmVyc2lvbiI6ICIxLjMzIiB9LHsgImZpbGVuYW1lIjogIk9zY1R1YmUuZHNwIiB9LHsgImZpbHRlcl9saWJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCAoam9zIGF0IGNjcm1hLnN0YW5mb3JkLmVkdSkiIH0seyAiZmlsdGVyX2xpYl9jb3B5cmlnaHQiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJfbGliX2RlcHJlY2F0ZWQiOiAiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4iIH0seyAiZmlsdGVyX2xpYl9saWNlbnNlIjogIlNUSy00LjMiIH0seyAiZmlsdGVyX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlciBMaWJyYXJ5IiB9LHsgImZpbHRlcl9saWJfcmVmZXJlbmNlIjogImh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvZmlsdGVycy8iIH0seyAiZmlsdGVyX2xpYl92ZXJzaW9uIjogIjEuMjkiIH0seyAiaWQiOiAidHViZTIiIH0seyAibGlicmFyeV9wYXRoIjogIkZhdXN0RFNQIiB9LHsgIm1hdGhfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoX2xpYl9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aF9saWJfZGVwcmVjYXRlZCI6ICJUaGlzIGxpYnJhcnkgaXMgZGVwcmVjYXRlZCBhbmQgaXMgbm90IG1haW50YWluZWQgYW55bW9yZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIEF1Z3VzdCAyMDE3LiIgfSx7ICJtYXRoX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aF9saWJfbmFtZSI6ICJNYXRoIExpYnJhcnkiIH0seyAibWF0aF9saWJfdmVyc2lvbiI6ICIxLjAiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuMSIgfSx7ICJtYXhtc3BfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXhtc3BfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXhtc3BfbGliX2xpY2Vuc2UiOiAiTEdQTCIgfSx7ICJtYXhtc3BfbGliX25hbWUiOiAiTWF4TVNQIGNvbXBhdGliaWxpdHkgTGlicmFyeSIgfSx7ICJtYXhtc3BfbGliX3ZlcnNpb24iOiAiMS4xIiB9LHsgIm11c2ljX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibXVzaWNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtdXNpY19saWJfZGVwcmVjYXRlZCI6ICJUaGlzIGxpYnJhcnkgaXMgZGVwcmVjYXRlZCBhbmQgaXMgbm90IG1haW50YWluZWQgYW55bW9yZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIEF1Z3VzdCAyMDE3LiIgfSx7ICJtdXNpY19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm11c2ljX2xpYl9uYW1lIjogIk11c2ljIExpYnJhcnkiIH0seyAibXVzaWNfbGliX3ZlcnNpb24iOiAiMS4wIiB9LHsgIm5hbWUiOiAiT3NjVHViZSIgfV0sInVpIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiT3NjVHViZSIsIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkZ1enoiLCJhZGRyZXNzIjogIi9Pc2NUdWJlL0Z1enoiLCJpbmRleCI6ICI0OCIsIm1ldGEiOiBbeyAiT1dMIjogIlBBUkFNRVRFUl9BIiB9LHsgIm5hbWUiOiAidHViZSIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIxIiwibWluIjogIi0zIiwibWF4IjogIjIwIiwic3RlcCI6ICIxIn0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJSZXNvbmFuY2UiLCJhZGRyZXNzIjogIi9Pc2NUdWJlL1Jlc29uYW5jZSIsImluZGV4IjogIjcyIiwibWV0YSI6IFt7ICJPV0wiOiAiUEFSQU1FVEVSX0IiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMC45Iiwic3RlcCI6ICIwLjAxIn0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJWaWJyYXRvIiwiYWRkcmVzcyI6ICIvT3NjVHViZS9WaWJyYXRvIiwiaW5kZXgiOiAiMTY1MjQiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfQyIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIxIiwibWluIjogIjAiLCJtYXgiOiAiMC45OSIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogImJ5cGFzcyIsImFkZHJlc3MiOiAiL09zY1R1YmUvYnlwYXNzIiwiaW5kZXgiOiAiMjAifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class OscTubeNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'OscTube', options);
        
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
                this.setParamValue(path, OscTubeNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
class OscTube {

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

            let real_url = (this.baseURL === "") ? "OscTube.wasm" : (this.baseURL + "/OscTube.wasm");
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
                let OscTubeProcessorString1 = OscTubeProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([OscTubeProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new OscTubeNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from OscTube-processor was detected.');}
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
                        var element = createOscTubeGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createOscTubeGUI(this.node);
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

let OscTubeProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class OscTubeProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                OscTubeProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                OscTubeProcessor.parse_items(group.items, obj, callback);
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
                OscTubeProcessor.parse_items(item.items, obj, callback);
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
                OscTubeProcessor.parse_items(item.items, obj, callback);
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
            OscTubeProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, OscTubeProcessor.parse_item1);
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
            
            this.OscTube_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.OscTube_instance.exports;
            this.HEAP = this.OscTube_instance.exports.memory.buffer;
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
                OscTubeProcessor.parse_ui(this.json_object.ui, this, OscTubeProcessor.parse_item2);
                
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
    registerProcessor('OscTube', OscTubeProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.OscTube = OscTube;
    window.FaustOscTube = OscTube;
} else {
    module.exports = { OscTube };
}

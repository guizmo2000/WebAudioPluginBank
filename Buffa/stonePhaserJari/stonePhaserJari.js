
/*
Code generated with Faust version 2.18.0
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONstonePhaserJari() {
	return "{\"name\": \"stonePhaserJari\",\"filename\": \"stonePhaserJari.dsp\",\"version\": \"2.18.0\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/569FA506CEA00CA2275258BCA18167D9765EA03A/web/wap\"],\"size\": \"720\",\"inputs\": \"1\",\"outputs\": \"1\",\"meta\": [ { \"author\": \"Jean Pierre Cimalando\" },{ \"basics_lib_name\": \"Faust Basic Element Library\" },{ \"basics_lib_version\": \"0.1\" },{ \"compilation_options\": \"-single -scal -I libraries/ -I project/ -lang wasm\" },{ \"filename\": \"stonePhaserJari.dsp\" },{ \"filters_lib_fir_author\": \"Julius O. Smith III\" },{ \"filters_lib_fir_copyright\": \"Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>\" },{ \"filters_lib_fir_license\": \"MIT-style STK-4.3 license\" },{ \"filters_lib_iir_author\": \"Julius O. Smith III\" },{ \"filters_lib_iir_copyright\": \"Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>\" },{ \"filters_lib_iir_license\": \"MIT-style STK-4.3 license\" },{ \"filters_lib_lowpass0_highpass1\": \"Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>\" },{ \"filters_lib_name\": \"Faust Filters Library\" },{ \"library_path\": \"FaustDSP\" },{ \"license\": \"CC0-1.0\" },{ \"maths_lib_author\": \"GRAME\" },{ \"maths_lib_copyright\": \"GRAME\" },{ \"maths_lib_license\": \"LGPL with exception\" },{ \"maths_lib_name\": \"Faust Math Library\" },{ \"maths_lib_version\": \"2.1\" },{ \"name\": \"stonePhaserJari\" },{ \"oscillators_lib_name\": \"Faust Oscillator Library\" },{ \"oscillators_lib_version\": \"0.0\" },{ \"signals_lib_name\": \"Faust Signal Routing Library\" },{ \"signals_lib_version\": \"0.0\" },{ \"version\": \"1.2.2\" }],\"ui\": [ {\"type\": \"vgroup\",\"label\": \"stonePhaserJari\",\"items\": [ {\"type\": \"checkbox\",\"label\": \"Bypass\",\"address\": \"/stonePhaserJari/Bypass\",\"index\": \"528\",\"meta\": [{ \"0\": \"\" },{ \"symbol\": \"bypass\" }]},{\"type\": \"hslider\",\"label\": \"Color\",\"address\": \"/stonePhaserJari/Color\",\"index\": \"572\",\"meta\": [{ \"1\": \"\" },{ \"boolean\": \"\" },{ \"style\": \"knob\" },{ \"symbol\": \"color\" }],\"init\": \"1\",\"min\": \"0\",\"max\": \"1\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"LFO frequency\",\"address\": \"/stonePhaserJari/LFO_frequency\",\"index\": \"644\",\"meta\": [{ \"2\": \"\" },{ \"scale\": \"log\" },{ \"style\": \"knob\" },{ \"symbol\": \"lfo_frequency\" },{ \"unit\": \"Hz\" }],\"init\": \"0.2\",\"min\": \"0.01\",\"max\": \"5\",\"step\": \"0.01\"},{\"type\": \"hslider\",\"label\": \"Feedback depth\",\"address\": \"/stonePhaserJari/Feedback_depth\",\"index\": \"580\",\"meta\": [{ \"3\": \"\" },{ \"integer\": \"\" },{ \"style\": \"knob\" },{ \"symbol\": \"feedback_depth\" },{ \"unit\": \"%\" }],\"init\": \"75\",\"min\": \"0\",\"max\": \"99\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"Feedback bass cut\",\"address\": \"/stonePhaserJari/Feedback_bass_cut\",\"index\": \"604\",\"meta\": [{ \"4\": \"\" },{ \"abbrev\": \"Fb bass cut\" },{ \"scale\": \"log\" },{ \"style\": \"knob\" },{ \"symbol\": \"feedback_hpf_cutoff\" },{ \"unit\": \"Hz\" }],\"init\": \"500\",\"min\": \"10\",\"max\": \"5000\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"Dry wet mix\",\"address\": \"/stonePhaserJari/Dry_wet_mix\",\"index\": \"540\",\"meta\": [{ \"5\": \"\" },{ \"integer\": \"\" },{ \"style\": \"knob\" },{ \"symbol\": \"mix\" },{ \"unit\": \"%\" }],\"init\": \"50\",\"min\": \"0\",\"max\": \"100\",\"step\": \"1\"}]}]}";
}
function getBase64CodestonePhaserJari() { return "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AAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvamICAAAEAQQAL0xh7Im5hbWUiOiAic3RvbmVQaGFzZXJKYXJpIiwiZmlsZW5hbWUiOiAic3RvbmVQaGFzZXJKYXJpLmRzcCIsInZlcnNpb24iOiAiMi4xOC4wIiwiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLXNjYWwgLWZ0eiAyIiwiaW5jbHVkZV9wYXRobmFtZXMiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvdG1wL3Nlc3Npb25zLzU2OUZBNTA2Q0VBMDBDQTIyNzUyNThCQ0ExODE2N0Q5NzY1RUEwM0Evd2ViL3dhcCJdLCJzaXplIjogIjcyMCIsImlucHV0cyI6ICIxIiwib3V0cHV0cyI6ICIxIiwibWV0YSI6IFsgeyAiYXV0aG9yIjogIkplYW4gUGllcnJlIENpbWFsYW5kbyIgfSx7ICJiYXNpY3NfbGliX25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljc19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiY29tcGlsYXRpb25fb3B0aW9ucyI6ICItc2luZ2xlIC1zY2FsIC1JIGxpYnJhcmllcy8gLUkgcHJvamVjdC8gLWxhbmcgd2FzbSIgfSx7ICJmaWxlbmFtZSI6ICJzdG9uZVBoYXNlckphcmkuZHNwIiB9LHsgImZpbHRlcnNfbGliX2Zpcl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9maXJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX2Zpcl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfaWlyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2lpcl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfaWlyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczEiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAibGlicmFyeV9wYXRoIjogIkZhdXN0RFNQIiB9LHsgImxpY2Vuc2UiOiAiQ0MwLTEuMCIgfSx7ICJtYXRoc19saWJfYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRoc19saWJfbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHNfbGliX3ZlcnNpb24iOiAiMi4xIiB9LHsgIm5hbWUiOiAic3RvbmVQaGFzZXJKYXJpIiB9LHsgIm9zY2lsbGF0b3JzX2xpYl9uYW1lIjogIkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSIgfSx7ICJvc2NpbGxhdG9yc19saWJfdmVyc2lvbiI6ICIwLjAiIH0seyAic2lnbmFsc19saWJfbmFtZSI6ICJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5IiB9LHsgInNpZ25hbHNfbGliX3ZlcnNpb24iOiAiMC4wIiB9LHsgInZlcnNpb24iOiAiMS4yLjIiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogInN0b25lUGhhc2VySmFyaSIsIml0ZW1zIjogWyB7InR5cGUiOiAiY2hlY2tib3giLCJsYWJlbCI6ICJCeXBhc3MiLCJhZGRyZXNzIjogIi9zdG9uZVBoYXNlckphcmkvQnlwYXNzIiwiaW5kZXgiOiAiNTI4IiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzeW1ib2wiOiAiYnlwYXNzIiB9XX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJDb2xvciIsImFkZHJlc3MiOiAiL3N0b25lUGhhc2VySmFyaS9Db2xvciIsImluZGV4IjogIjU3MiIsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAiYm9vbGVhbiI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJzeW1ib2wiOiAiY29sb3IiIH1dLCJpbml0IjogIjEiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIxIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJMRk8gZnJlcXVlbmN5IiwiYWRkcmVzcyI6ICIvc3RvbmVQaGFzZXJKYXJpL0xGT19mcmVxdWVuY3kiLCJpbmRleCI6ICI2NDQiLCJtZXRhIjogW3sgIjIiOiAiIiB9LHsgInNjYWxlIjogImxvZyIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInN5bWJvbCI6ICJsZm9fZnJlcXVlbmN5IiB9LHsgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogIjAuMiIsIm1pbiI6ICIwLjAxIiwibWF4IjogIjUiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkZlZWRiYWNrIGRlcHRoIiwiYWRkcmVzcyI6ICIvc3RvbmVQaGFzZXJKYXJpL0ZlZWRiYWNrX2RlcHRoIiwiaW5kZXgiOiAiNTgwIiwibWV0YSI6IFt7ICIzIjogIiIgfSx7ICJpbnRlZ2VyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInN5bWJvbCI6ICJmZWVkYmFja19kZXB0aCIgfSx7ICJ1bml0IjogIiUiIH1dLCJpbml0IjogIjc1IiwibWluIjogIjAiLCJtYXgiOiAiOTkiLCJzdGVwIjogIjEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkZlZWRiYWNrIGJhc3MgY3V0IiwiYWRkcmVzcyI6ICIvc3RvbmVQaGFzZXJKYXJpL0ZlZWRiYWNrX2Jhc3NfY3V0IiwiaW5kZXgiOiAiNjA0IiwibWV0YSI6IFt7ICI0IjogIiIgfSx7ICJhYmJyZXYiOiAiRmIgYmFzcyBjdXQiIH0seyAic2NhbGUiOiAibG9nIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAic3ltYm9sIjogImZlZWRiYWNrX2hwZl9jdXRvZmYiIH0seyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAiNTAwIiwibWluIjogIjEwIiwibWF4IjogIjUwMDAiLCJzdGVwIjogIjEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkRyeSB3ZXQgbWl4IiwiYWRkcmVzcyI6ICIvc3RvbmVQaGFzZXJKYXJpL0RyeV93ZXRfbWl4IiwiaW5kZXgiOiAiNTQwIiwibWV0YSI6IFt7ICI1IjogIiIgfSx7ICJpbnRlZ2VyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInN5bWJvbCI6ICJtaXgiIH0seyAidW5pdCI6ICIlIiB9XSwiaW5pdCI6ICI1MCIsIm1pbiI6ICIwIiwibWF4IjogIjEwMCIsInN0ZXAiOiAiMSJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class stonePhaserJariNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'stonePhaserJari', options);
        
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
                this.setParamValue(path, stonePhaserJariNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
class stonePhaserJari {

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

            let real_url = (this.baseURL === "") ? "stonePhaserJari.wasm" : (this.baseURL + "/stonePhaserJari.wasm");
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
                let stonePhaserJariProcessorString1 = stonePhaserJariProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([stonePhaserJariProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new stonePhaserJariNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from stonePhaserJari-processor was detected.');}
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
                        var element = createstonePhaserJariGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createstonePhaserJariGUI(this.node);
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

let stonePhaserJariProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class stonePhaserJariProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                stonePhaserJariProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                stonePhaserJariProcessor.parse_items(group.items, obj, callback);
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
                stonePhaserJariProcessor.parse_items(item.items, obj, callback);
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
                stonePhaserJariProcessor.parse_items(item.items, obj, callback);
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
            stonePhaserJariProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, stonePhaserJariProcessor.parse_item1);
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
            
            this.stonePhaserJari_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.stonePhaserJari_instance.exports;
            this.HEAP = this.stonePhaserJari_instance.exports.memory.buffer;
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
                stonePhaserJariProcessor.parse_ui(this.json_object.ui, this, stonePhaserJariProcessor.parse_item2);
                
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
    registerProcessor('stonePhaserJari', stonePhaserJariProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.stonePhaserJari = stonePhaserJari;
    window.FauststonePhaserJari = stonePhaserJari;
} else {
    module.exports = { stonePhaserJari };
}


/*
Code generated with Faust version 2.17.14
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONDistorder() {
	return "{\"name\": \"Distorder\",\"filename\": \"Distorder.dsp\",\"version\": \"2.17.14\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"library_list\": [\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\"],\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/3466D5FE37945552326F1B47E3416E7CF6ABB232/web/wap\"],\"size\": \"272\",\"inputs\": \"2\",\"outputs\": \"2\",\"meta\": [ { \"author\": \"Oleg Kapitonov\" },{ \"basics.lib/name\": \"Faust Basic Element Library\" },{ \"basics.lib/version\": \"0.0\" },{ \"filename\": \"Distorder.dsp\" },{ \"filters.lib/name\": \"Faust Filters Library\" },{ \"filters.lib/version\": \"0.0\" },{ \"license\": \"GPLv3\" },{ \"maths.lib/author\": \"GRAME\" },{ \"maths.lib/copyright\": \"GRAME\" },{ \"maths.lib/license\": \"LGPL with exception\" },{ \"maths.lib/name\": \"Faust Math Library\" },{ \"maths.lib/version\": \"2.1\" },{ \"name\": \"Distorder\" },{ \"version\": \"1.0\" }],\"ui\": [ {\"type\": \"vgroup\",\"label\": \"Distorder\",\"items\": [ {\"type\": \"vslider\",\"label\": \"bass\",\"address\": \"/Distorder/bass\",\"index\": \"156\",\"meta\": [{ \"style\": \"knob\" }],\"init\": \"0\",\"min\": \"-15\",\"max\": \"15\",\"step\": \"0.1\"},{\"type\": \"checkbox\",\"label\": \"bypass\",\"address\": \"/Distorder/bypass\",\"index\": \"0\"},{\"type\": \"vslider\",\"label\": \"drive\",\"address\": \"/Distorder/drive\",\"index\": \"100\",\"meta\": [{ \"style\": \"knob\" }],\"init\": \"63\",\"min\": \"0\",\"max\": \"100\",\"step\": \"0.01\"},{\"type\": \"vslider\",\"label\": \"middle\",\"address\": \"/Distorder/middle\",\"index\": \"180\",\"meta\": [{ \"style\": \"knob\" }],\"init\": \"0\",\"min\": \"-15\",\"max\": \"15\",\"step\": \"0.1\"},{\"type\": \"vslider\",\"label\": \"treble\",\"address\": \"/Distorder/treble\",\"index\": \"204\",\"meta\": [{ \"style\": \"knob\" }],\"init\": \"0\",\"min\": \"-15\",\"max\": \"15\",\"step\": \"0.1\"},{\"type\": \"vslider\",\"label\": \"voice\",\"address\": \"/Distorder/voice\",\"index\": \"68\",\"meta\": [{ \"style\": \"knob\" }],\"init\": \"0.5\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.001\"},{\"type\": \"vslider\",\"label\": \"volume\",\"address\": \"/Distorder/volume\",\"index\": \"4\",\"meta\": [{ \"style\": \"knob\" }],\"init\": \"0.5\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.001\"}]}]}";
}
function getBase64CodeDistorder() { return "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RTM3OTQ1NTUyMzI2RjFCNDdFMzQxNkU3Q0Y2QUJCMjMyL3dlYi93YXAiXSwic2l6ZSI6ICIyNzIiLCJpbnB1dHMiOiAiMiIsIm91dHB1dHMiOiAiMiIsIm1ldGEiOiBbIHsgImF1dGhvciI6ICJPbGVnIEthcGl0b25vdiIgfSx7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiZmlsZW5hbWUiOiAiRGlzdG9yZGVyLmRzcCIgfSx7ICJmaWx0ZXJzLmxpYi9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJmaWx0ZXJzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJsaWNlbnNlIjogIkdQTHYzIiB9LHsgIm1hdGhzLmxpYi9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzLmxpYi9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRocy5saWIvdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJEaXN0b3JkZXIiIH0seyAidmVyc2lvbiI6ICIxLjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIkRpc3RvcmRlciIsIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogImJhc3MiLCJhZGRyZXNzIjogIi9EaXN0b3JkZXIvYmFzcyIsImluZGV4IjogIjE1NiIsIm1ldGEiOiBbeyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAiMCIsIm1pbiI6ICItMTUiLCJtYXgiOiAiMTUiLCJzdGVwIjogIjAuMSJ9LHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogImJ5cGFzcyIsImFkZHJlc3MiOiAiL0Rpc3RvcmRlci9ieXBhc3MiLCJpbmRleCI6ICIwIn0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJkcml2ZSIsImFkZHJlc3MiOiAiL0Rpc3RvcmRlci9kcml2ZSIsImluZGV4IjogIjEwMCIsIm1ldGEiOiBbeyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAiNjMiLCJtaW4iOiAiMCIsIm1heCI6ICIxMDAiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIm1pZGRsZSIsImFkZHJlc3MiOiAiL0Rpc3RvcmRlci9taWRkbGUiLCJpbmRleCI6ICIxODAiLCJtZXRhIjogW3sgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogIjAiLCJtaW4iOiAiLTE1IiwibWF4IjogIjE1Iiwic3RlcCI6ICIwLjEifSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogInRyZWJsZSIsImFkZHJlc3MiOiAiL0Rpc3RvcmRlci90cmVibGUiLCJpbmRleCI6ICIyMDQiLCJtZXRhIjogW3sgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogIjAiLCJtaW4iOiAiLTE1IiwibWF4IjogIjE1Iiwic3RlcCI6ICIwLjEifSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogInZvaWNlIiwiYWRkcmVzcyI6ICIvRGlzdG9yZGVyL3ZvaWNlIiwiaW5kZXgiOiAiNjgiLCJtZXRhIjogW3sgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogIjAuNSIsIm1pbiI6ICIwIiwibWF4IjogIjEiLCJzdGVwIjogIjAuMDAxIn0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJ2b2x1bWUiLCJhZGRyZXNzIjogIi9EaXN0b3JkZXIvdm9sdW1lIiwiaW5kZXgiOiAiNCIsIm1ldGEiOiBbeyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMDEifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class DistorderNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'Distorder', options);
        
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
                this.setParamValue(path, DistorderNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
class Distorder {

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

            let real_url = (this.baseURL === "") ? "Distorder.wasm" : (this.baseURL + "/Distorder.wasm");
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
                let DistorderProcessorString1 = DistorderProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([DistorderProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new DistorderNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from Distorder-processor was detected.');}
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
                        var element = createDistorderGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createDistorderGUI(this.node);
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

let DistorderProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class DistorderProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                DistorderProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                DistorderProcessor.parse_items(group.items, obj, callback);
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
                DistorderProcessor.parse_items(item.items, obj, callback);
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
                DistorderProcessor.parse_items(item.items, obj, callback);
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
            DistorderProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, DistorderProcessor.parse_item1);
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
            
            this.Distorder_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.Distorder_instance.exports;
            this.HEAP = this.Distorder_instance.exports.memory.buffer;
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
                DistorderProcessor.parse_ui(this.json_object.ui, this, DistorderProcessor.parse_item2);
                
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
    registerProcessor('Distorder', DistorderProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.Distorder = Distorder;
    window.FaustDistorder = Distorder;
} else {
    module.exports = { Distorder };
}


/*
Code generated with Faust version 2.18.0
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONFaustEQ() {
	return "{\"name\": \"FaustEQ\",\"filename\": \"FaustEQ.dsp\",\"version\": \"2.18.0\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/8E34BEDF54D92A0B45BE15693D35E0E196AF1604/web/wap\"],\"size\": \"180\",\"inputs\": \"1\",\"outputs\": \"1\",\"meta\": [ { \"analyzers_lib_name\": \"Faust Analyzer Library\" },{ \"analyzers_lib_version\": \"0.0\" },{ \"basics_lib_name\": \"Faust Basic Element Library\" },{ \"basics_lib_version\": \"0.0\" },{ \"compilation_options\": \"-single -scal -I libraries/ -I project/ -lang wasm\" },{ \"filename\": \"FaustEQ.dsp\" },{ \"filters_lib_name\": \"Faust Filters Library\" },{ \"filters_lib_version\": \"0.0\" },{ \"library_path\": \"FaustDSP\" },{ \"maths_lib_author\": \"GRAME\" },{ \"maths_lib_copyright\": \"GRAME\" },{ \"maths_lib_license\": \"LGPL with exception\" },{ \"maths_lib_name\": \"Faust Math Library\" },{ \"maths_lib_version\": \"2.1\" },{ \"name\": \"FaustEQ\" },{ \"signals_lib_name\": \"Faust Signal Routing Library\" },{ \"signals_lib_version\": \"0.0\" }],\"ui\": [ {\"type\": \"vgroup\",\"label\": \"FaustEQ\",\"items\": [ {\"type\": \"hgroup\",\"label\": \"PARAMETRIC EQ SECTIONS\",\"meta\": [{ \"0\": \"\" },{ \"tooltip\": \"See Faust\'s filters.lib   for info and pointers\" }],\"items\": [ {\"type\": \"vgroup\",\"label\": \"Low Shelf\",\"meta\": [{ \"1\": \"\" }],\"items\": [ {\"type\": \"hslider\",\"label\": \"Low Boost|Cut\",\"address\": \"/FaustEQ/PARAMETRIC_EQ_SECTIONS/Low_Shelf/Low_Boost|Cut\",\"index\": \"64\",\"meta\": [{ \"0\": \"\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Amount of low-frequency boost or cut in decibels\" },{ \"unit\": \"dB\" }],\"init\": \"0\",\"min\": \"-40\",\"max\": \"40\",\"step\": \"0.1\"},{\"type\": \"hslider\",\"label\": \"Transition Frequency\",\"address\": \"/FaustEQ/PARAMETRIC_EQ_SECTIONS/Low_Shelf/Transition_Frequency\",\"index\": \"32\",\"meta\": [{ \"1\": \"\" },{ \"scale\": \"log\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Transition-frequency from boost (cut) to unity gain\" },{ \"unit\": \"Hz\" }],\"init\": \"200\",\"min\": \"1\",\"max\": \"5000\",\"step\": \"1\"}]},{\"type\": \"vgroup\",\"label\": \"Peaking Equalizer\",\"meta\": [{ \"2\": \"\" },{ \"tooltip\": \"Parametric Equalizer   sections from filters.lib\" }],\"items\": [ {\"type\": \"hslider\",\"label\": \"Peak Boost|Cut\",\"address\": \"/FaustEQ/PARAMETRIC_EQ_SECTIONS/Peaking_Equalizer/Peak_Boost|Cut\",\"index\": \"104\",\"meta\": [{ \"0\": \"\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Amount of   local boost or cut in decibels\" },{ \"unit\": \"dB\" }],\"init\": \"0\",\"min\": \"-40\",\"max\": \"40\",\"step\": \"0.1\"},{\"type\": \"hslider\",\"label\": \"Peak Frequency\",\"address\": \"/FaustEQ/PARAMETRIC_EQ_SECTIONS/Peaking_Equalizer/Peak_Frequency\",\"index\": \"92\",\"meta\": [{ \"1\": \"\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Peak   Frequency in Piano Key (PK) units (A440 = 49PK)\" },{ \"unit\": \"PK\" }],\"init\": \"49\",\"min\": \"1\",\"max\": \"100\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"Peak Q\",\"address\": \"/FaustEQ/PARAMETRIC_EQ_SECTIONS/Peaking_Equalizer/Peak_Q\",\"index\": \"108\",\"meta\": [{ \"2\": \"\" },{ \"scale\": \"log\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Quality factor   (Q) of the peak = center-frequency/bandwidth\" }],\"init\": \"40\",\"min\": \"1\",\"max\": \"1000\",\"step\": \"0.1\"}]},{\"type\": \"vgroup\",\"label\": \"High Shelf\",\"meta\": [{ \"3\": \"\" },{ \"tooltip\": \"A high shelf provides a boost   or cut above some frequency\" }],\"items\": [ {\"type\": \"hslider\",\"label\": \"High Boost|Cut\",\"address\": \"/FaustEQ/PARAMETRIC_EQ_SECTIONS/High_Shelf/High_Boost|Cut\",\"index\": \"156\",\"meta\": [{ \"0\": \"\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Amount of   high-frequency boost or cut in decibels\" },{ \"unit\": \"dB\" }],\"init\": \"0\",\"min\": \"-40\",\"max\": \"40\",\"step\": \"0.1\"},{\"type\": \"hslider\",\"label\": \"Transition Frequency\",\"address\": \"/FaustEQ/PARAMETRIC_EQ_SECTIONS/High_Shelf/Transition_Frequency\",\"index\": \"28\",\"meta\": [{ \"1\": \"\" },{ \"scale\": \"log\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Transition-frequency from boost (cut) to unity gain\" },{ \"unit\": \"Hz\" }],\"init\": \"8000\",\"min\": \"20\",\"max\": \"10000\",\"step\": \"1\"}]}]},{\"type\": \"checkbox\",\"label\": \"bypass\",\"address\": \"/FaustEQ/bypass\",\"index\": \"12\"}]}]}";
}
function getBase64CodeFaustEQ() { return "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IC1zY2FsIC1mdHogMiIsImluY2x1ZGVfcGF0aG5hbWVzIjogWyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiLCIuIiwiL3RtcC9zZXNzaW9ucy84RTM0QkVERjU0RDkyQTBCNDVCRTE1NjkzRDM1RTBFMTk2QUYxNjA0L3dlYi93YXAiXSwic2l6ZSI6ICIxODAiLCJpbnB1dHMiOiAiMSIsIm91dHB1dHMiOiAiMSIsIm1ldGEiOiBbIHsgImFuYWx5emVyc19saWJfbmFtZSI6ICJGYXVzdCBBbmFseXplciBMaWJyYXJ5IiB9LHsgImFuYWx5emVyc19saWJfdmVyc2lvbiI6ICIwLjAiIH0seyAiYmFzaWNzX2xpYl9uYW1lIjogIkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSIgfSx7ICJiYXNpY3NfbGliX3ZlcnNpb24iOiAiMC4wIiB9LHsgImNvbXBpbGF0aW9uX29wdGlvbnMiOiAiLXNpbmdsZSAtc2NhbCAtSSBsaWJyYXJpZXMvIC1JIHByb2plY3QvIC1sYW5nIHdhc20iIH0seyAiZmlsZW5hbWUiOiAiRmF1c3RFUS5kc3AiIH0seyAiZmlsdGVyc19saWJfbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVyc19saWJfdmVyc2lvbiI6ICIwLjAiIH0seyAibGlicmFyeV9wYXRoIjogIkZhdXN0RFNQIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJGYXVzdEVRIiB9LHsgInNpZ25hbHNfbGliX25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJzaWduYWxzX2xpYl92ZXJzaW9uIjogIjAuMCIgfV0sInVpIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiRmF1c3RFUSIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiUEFSQU1FVFJJQyBFUSBTRUNUSU9OUyIsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAidG9vbHRpcCI6ICJTZWUgRmF1c3QncyBmaWx0ZXJzLmxpYiAgIGZvciBpbmZvIGFuZCBwb2ludGVycyIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiTG93IFNoZWxmIiwibWV0YSI6IFt7ICIxIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkxvdyBCb29zdHxDdXQiLCJhZGRyZXNzIjogIi9GYXVzdEVRL1BBUkFNRVRSSUNfRVFfU0VDVElPTlMvTG93X1NoZWxmL0xvd19Cb29zdHxDdXQiLCJpbmRleCI6ICI2NCIsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIkFtb3VudCBvZiBsb3ctZnJlcXVlbmN5IGJvb3N0IG9yIGN1dCBpbiBkZWNpYmVscyIgfSx7ICJ1bml0IjogImRCIiB9XSwiaW5pdCI6ICIwIiwibWluIjogIi00MCIsIm1heCI6ICI0MCIsInN0ZXAiOiAiMC4xIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJUcmFuc2l0aW9uIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiAiL0ZhdXN0RVEvUEFSQU1FVFJJQ19FUV9TRUNUSU9OUy9Mb3dfU2hlbGYvVHJhbnNpdGlvbl9GcmVxdWVuY3kiLCJpbmRleCI6ICIzMiIsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAic2NhbGUiOiAibG9nIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJUcmFuc2l0aW9uLWZyZXF1ZW5jeSBmcm9tIGJvb3N0IChjdXQpIHRvIHVuaXR5IGdhaW4iIH0seyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAiMjAwIiwibWluIjogIjEiLCJtYXgiOiAiNTAwMCIsInN0ZXAiOiAiMSJ9XX0seyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIlBlYWtpbmcgRXF1YWxpemVyIiwibWV0YSI6IFt7ICIyIjogIiIgfSx7ICJ0b29sdGlwIjogIlBhcmFtZXRyaWMgRXF1YWxpemVyICAgc2VjdGlvbnMgZnJvbSBmaWx0ZXJzLmxpYiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIlBlYWsgQm9vc3R8Q3V0IiwiYWRkcmVzcyI6ICIvRmF1c3RFUS9QQVJBTUVUUklDX0VRX1NFQ1RJT05TL1BlYWtpbmdfRXF1YWxpemVyL1BlYWtfQm9vc3R8Q3V0IiwiaW5kZXgiOiAiMTA0IiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiQW1vdW50IG9mICAgbG9jYWwgYm9vc3Qgb3IgY3V0IGluIGRlY2liZWxzIiB9LHsgInVuaXQiOiAiZEIiIH1dLCJpbml0IjogIjAiLCJtaW4iOiAiLTQwIiwibWF4IjogIjQwIiwic3RlcCI6ICIwLjEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIlBlYWsgRnJlcXVlbmN5IiwiYWRkcmVzcyI6ICIvRmF1c3RFUS9QQVJBTUVUUklDX0VRX1NFQ1RJT05TL1BlYWtpbmdfRXF1YWxpemVyL1BlYWtfRnJlcXVlbmN5IiwiaW5kZXgiOiAiOTIiLCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJQZWFrICAgRnJlcXVlbmN5IGluIFBpYW5vIEtleSAoUEspIHVuaXRzIChBNDQwID0gNDlQSykiIH0seyAidW5pdCI6ICJQSyIgfV0sImluaXQiOiAiNDkiLCJtaW4iOiAiMSIsIm1heCI6ICIxMDAiLCJzdGVwIjogIjEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIlBlYWsgUSIsImFkZHJlc3MiOiAiL0ZhdXN0RVEvUEFSQU1FVFJJQ19FUV9TRUNUSU9OUy9QZWFraW5nX0VxdWFsaXplci9QZWFrX1EiLCJpbmRleCI6ICIxMDgiLCJtZXRhIjogW3sgIjIiOiAiIiB9LHsgInNjYWxlIjogImxvZyIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiUXVhbGl0eSBmYWN0b3IgICAoUSkgb2YgdGhlIHBlYWsgPSBjZW50ZXItZnJlcXVlbmN5L2JhbmR3aWR0aCIgfV0sImluaXQiOiAiNDAiLCJtaW4iOiAiMSIsIm1heCI6ICIxMDAwIiwic3RlcCI6ICIwLjEifV19LHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJIaWdoIFNoZWxmIiwibWV0YSI6IFt7ICIzIjogIiIgfSx7ICJ0b29sdGlwIjogIkEgaGlnaCBzaGVsZiBwcm92aWRlcyBhIGJvb3N0ICAgb3IgY3V0IGFib3ZlIHNvbWUgZnJlcXVlbmN5IiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiSGlnaCBCb29zdHxDdXQiLCJhZGRyZXNzIjogIi9GYXVzdEVRL1BBUkFNRVRSSUNfRVFfU0VDVElPTlMvSGlnaF9TaGVsZi9IaWdoX0Jvb3N0fEN1dCIsImluZGV4IjogIjE1NiIsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIkFtb3VudCBvZiAgIGhpZ2gtZnJlcXVlbmN5IGJvb3N0IG9yIGN1dCBpbiBkZWNpYmVscyIgfSx7ICJ1bml0IjogImRCIiB9XSwiaW5pdCI6ICIwIiwibWluIjogIi00MCIsIm1heCI6ICI0MCIsInN0ZXAiOiAiMC4xIn0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJUcmFuc2l0aW9uIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiAiL0ZhdXN0RVEvUEFSQU1FVFJJQ19FUV9TRUNUSU9OUy9IaWdoX1NoZWxmL1RyYW5zaXRpb25fRnJlcXVlbmN5IiwiaW5kZXgiOiAiMjgiLCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgInNjYWxlIjogImxvZyIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiVHJhbnNpdGlvbi1mcmVxdWVuY3kgZnJvbSBib29zdCAoY3V0KSB0byB1bml0eSBnYWluIiB9LHsgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogIjgwMDAiLCJtaW4iOiAiMjAiLCJtYXgiOiAiMTAwMDAiLCJzdGVwIjogIjEifV19XX0seyJ0eXBlIjogImNoZWNrYm94IiwibGFiZWwiOiAiYnlwYXNzIiwiYWRkcmVzcyI6ICIvRmF1c3RFUS9ieXBhc3MiLCJpbmRleCI6ICIxMiJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class FaustEQNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'FaustEQ', options);
        
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
                this.setParamValue(path, FaustEQNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
class FaustEQ {

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

            let real_url = (this.baseURL === "") ? "FaustEQ.wasm" : (this.baseURL + "/FaustEQ.wasm");
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
                let FaustEQProcessorString1 = FaustEQProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([FaustEQProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new FaustEQNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from FaustEQ-processor was detected.');}
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
                        var element = createFaustEQGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createFaustEQGUI(this.node);
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

let FaustEQProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class FaustEQProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                FaustEQProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                FaustEQProcessor.parse_items(group.items, obj, callback);
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
                FaustEQProcessor.parse_items(item.items, obj, callback);
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
                FaustEQProcessor.parse_items(item.items, obj, callback);
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
            FaustEQProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, FaustEQProcessor.parse_item1);
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
            
            this.FaustEQ_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.FaustEQ_instance.exports;
            this.HEAP = this.FaustEQ_instance.exports.memory.buffer;
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
                FaustEQProcessor.parse_ui(this.json_object.ui, this, FaustEQProcessor.parse_item2);
                
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
    registerProcessor('FaustEQ', FaustEQProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.FaustEQ = FaustEQ;
    window.FaustFaustEQ = FaustEQ;
} else {
    module.exports = { FaustEQ };
}


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

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class BlueDreamNode extends AudioWorkletNode {

    constructor(context, URL, options) {

        var json_object = JSON.parse(getJSONBlueDream());

        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'BlueDream', options);
        this.URL = URL;

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
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
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
            }
        }

        this.output_handler = null;

        this.json_object = json_object;

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
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return getJSONBlueDream();
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            fetch(this.URL + "/main.json").then(responseJSON => {
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
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
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
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, BlueDreamNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var path = this.fPitchwheelLabel[i];
            this.setParamValue(path, Math.pow(2.0, wheel / 12.0));
            if (this.output_handler) {
                this.output_handler(path, this.getParamValue(path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1) - 8192) / 8192.0);
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => {
            resolve(params)
        });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
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
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

    // Loads a sample and decode it
    static loadAudioSample(context, url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then((response) => {
                    return response.arrayBuffer();
                })
                .then((buffer) => {
                    context.decodeAudioData(buffer, (decodedAudioData) => {
                        resolve(decodedAudioData);
                    });
                });
        });
    }



    // Loads a sample
    static loadSample(url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then((response) => {
                    resolve(response.arrayBuffer());
                })
        });
    }

}

// Factory class

window.FaustBlueDream = class FaustBlueDream {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseUrl - the baseUrl of the plugin folder
     */
    constructor(context, baseUrl) {
        // Resume audio context each time...
        context.resume();

        this.context = context;
        this.baseUrl = baseUrl;

        this.pathTable = [];

        // soundfile items
        this.soundfile_items = [];
    }

    // JSON parsing functions
    parse_ui(ui) {
        for (var i = 0; i < ui.length; i++) {
            this.parse_group(ui[i]);
        }
    }

    parse_group(group) {
        if (group.items) {
            this.parse_items(group.items);
        }
    }

    parse_items(items) {
        for (var i = 0; i < items.length; i++) {
            this.parse_item(items[i]);
        }
    }

    parse_item(item) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            this.parse_items(item.items);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            this.soundfile_items.push(item.address);
            this.pathTable[item.address] = parseInt(item.index);
        }
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    load() {
        return new Promise((resolve, reject) => {
            this.context.audioWorklet.addModule(this.baseUrl + "BlueDream-processor.js").then(() => {
                this.node = new BlueDreamNode(this.context, this.baseUrl, {});
                this.node.onprocessorerror = () => { console.log('An error from BlueDream-processor was detected.'); }
                return (this.node);
            }).then((node) => {
                console.log(this.node.getDescriptor());
                resolve(node);
            }).catch((e) => {
                reject(e);
            });
        });
    }

    loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let url = this.baseUrl + "/main.html";

                if (!this.linkExists(url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createBlueDreamGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createBlueDreamGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }

}

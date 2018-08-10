/*  ################################## TUNER ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the the pitch detecotr here: https://webaudiodemos.appspot.com/pitchdetect/index.html
*/
window.TunerMachine = class TunerMachine extends WebAudioPluginCompositeNode {
    constructor(ctx, URL, options) {
        super(ctx, URL, options)
        /*    ################     API PROPERTIES    ###############   */

        this.state;
        this.params = { "status": "disable" }
        super.setup();
    }

    /*    ################     API METHODS    ###############   */
    getPatch(index) {
        console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
    }
    setPatch(data, index) {
        console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
    }

    setParam(key, value) {
        console.log(key, value);
        try {
            this[key] = (value);
        } catch (error) {
            console.warn("this plugin does not implement this param")
        }
    }

    get numberOfOutputs() {
        return 0;
    }

    createNodes() {
        this.dryGainNode = this.context.createGain();
        this.bandPass = this.context.createBiquadFilter();

        this.bandPass.gain.value = 1;
    }

    connectNodes() {
        this._input.connect(this.dryGainNode);
        this.dryGainNode.connect(this.bandPass);
    }

    /*  #########  Personnal code for Tuner  #########   */
    set status(_sig) {
        if (_sig === "enable") {
            this.params.status = "enable";
            console.log("Tuner is on");
            this.toggleLiveInput();
        }

        else if (_sig === "disable") {
            this.params.status = "disable"
            console.log("Tuner is off");
        }
    }

    

    toggleLiveInput() {
        if (isPlaying) {
            //stop playing and return
            sourceNode.stop( 0 );
            sourceNode = null;
            analyser = null;
            isPlaying = false;
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
            window.cancelAnimationFrame( rafID );
        }
        getUserMedia(
            {
                "audio": {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                },
            }, gotStream);
    }

    noteFromPitch( frequency ) {
        var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
        return Math.round( noteNum ) + 69;
    }
    
    frequencyFromNoteNumber( note ) {
        return 440 * Math.pow(2,(note-69)/12);
    }
    
    centsOffFromPitch( frequency, note ) {
        return Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );
    }

}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiTunerMachine = class WasabiTunerMachine extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new TunerMachine(this, options); };
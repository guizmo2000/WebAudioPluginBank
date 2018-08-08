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
            console.log(key, error)
            console.warn("this plugin does not implement this param")
        }
    }

    get numberOfOutputs() {
        return 0;
    }

    /*  #########  Personnal code for Tuner  #########   */
    set status(_sig) {
        if (_sig === "enable") {
            this.params.status = "enable";
            
        }

        else if (_sig === "disable") {
            this.params.status = "disable"
            
        }
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

}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiTunerMachine = class WasabiTunerMachine extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new TunerMachine(this, options); };
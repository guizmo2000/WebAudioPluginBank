/*  ################################## LOOPER ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the the pitch detecotr here: https://webaudiodemos.appspot.com/pitchdetect/index.html
*/
window.LooperMachine = class LooperMachine extends WebAudioPluginCompositeNode {
    constructor(ctx, URL, options) {
        super(ctx, URL, options)
        /*    ################     API PROPERTIES    ###############   */

        this.options = options;
        this.state;
        this.params = { "status": "unavaiable", "mix": 50 }
        super.setup();
        this.mediaRecorder;
        this.audioChunks;
        this.audioBlob;
        this.audioUrl;
        this.audio;
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
            console.warn(key, error);
            console.warn("this plugin does not implement this param")
        }
    }

    createNodes() {
        this.dryGainNode = this.context.createGain();
        this.dryGainNode.gain.value = 1;
    }

    connectNodes() {
        this._input.connect(this.dryGainNode);
        this.dryGainNode.connect(this._output);
    }

    /*  #########  Personnal code for Looper  #########   */

    set status(_status) {

        if (_status === "record") {
            //console.log("Recording...")
            var constraints = {
                audio: {
                    echoCancellation: false,
                    mozNoiseSuppression: false,
                    mozAutoGainControl: false,
                    //deviceId: id ? {exact: id} : undefined
                }
            };
            navigator.mediaDevices.getUserMedia(constraints)
                .then(stream => {
                    this.mediaRecorder = new MediaRecorder(stream);
                    this.mediaRecorder.start();

                    this.audioChunks = [];

                    this.mediaRecorder.addEventListener("dataavailable", event =>{
                        this.audioChunks.push(event.data);
                        this.audioBlob = new Blob(this.audioChunks);
                        this.audioUrl = URL.createObjectURL(this.audioBlob);
                        this.audio = new Audio(this.audioUrl);
                    });

                    this.mediaRecorder.addEventListener("stop", event => {
                        this.audio.play();
                        this.audio.addEventListener("ended", event => {
                            this.audio.currentTime = 2;
                            this.audio.play();
                        })
                        //console.log(this.audioBlob);
                    });

                    setTimeout(() => {
                        this.mediaRecorder.stop();
                        //console.log(this.audioChunks);
                    }, 5000);
                });

        } else if (_status === "play") {
            console.log("I playing...");

        } else if (_status === "stop") {
            console.log("okay stop");

        }
    }

    set mix(_mix) {
        this.params.mix = _mix;
    }

}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiLooperMachine = class WasabiLooperMachine extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new LooperMachine(this, options); };
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
        this.stopRecord;
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

                    if(this.status != "play"){
                        this.stopRecord= setTimeout(() => {
                            this.status="play";
                            //console.log(this.audioChunks);
                        }, 10000);
                    }
                });

        } else if (_status === "play") {
            console.log("I playing...");
            clearTimeout(this.stopRecord);
            this.mediaRecorder.stop();
            this.mediaRecorder.addEventListener("stop", event => {
                this.audio.play();
                
                //Checking the time of song to avoid latency between loop (src: https://stackoverflow.com/questions/7330023/gapless-looping-audio-html5)
                this.audio.addEventListener("timeupdate", function(){
                    let buffer = .44;
                    if(this.currentTime > this.duration - buffer){
                        this.currentTime = 0;
                        this.play();
                    }
                })
                //console.log(this.audioBlob);
            });

        } else if (_status === "stop") {
            //console.log("okay stop");
            this.audio.pause();
            this.audio=null;
            this.audioChunks =[]; 
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
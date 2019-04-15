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
        this.params = {
            "status": "unavailable",
            "stateArm": "unavailable",
        }

        this.addParam({ name: 'mix', defaultValue: 50, minValue: 0, maxValue: 100 });

        //Variable for recording/play sound
        this.mediaRecorder;
        this.audioChunks;
        this.audioBlob;
        this.audioUrl;
        this.audio;
        //this.stopRecord;

        //curretTime to play the loop
        this.currentTime1;
        this.curentTime2;
        
        //Statement
        this.statePlayMusic = false;
        this.ready = false;
        this.musicExist;

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

    set stateArm(_stateArm) {
        if (this.statePlayMusic == true) {
            //console.log("stop music...")
            this.audio.pause()
        }
        if (_stateArm == "preparing") {
            console.log("Patientez...");
            this.context = new AudioContext();
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

                    this.mediaRecorder.addEventListener("dataavailable", event => {
                        this.audioChunks.push(event.data);
                        this.audioBlob = new Blob(this.audioChunks);
                        this.audioUrl = URL.createObjectURL(this.audioBlob);
                        this.audio = new Audio(this.audioUrl);
                    });

                    /*if(this.status != "play"){
                        this.stopRecord= setTimeout(() => {
                            this.status="play";
                            //console.log(this.audioChunks);
                        }, 10000);
                    }*/
                })
        } else if (_stateArm == "available") {
            this.ready = true;
            console.log("Prêt!")
        }
    }
    set status(_status) {
        var parent = this;
        if (this.ready == true) {
            if (_status === "record") {
                this.currentTime1 = Math.round(this.context.currentTime * 1000) / 1000;
                console.log(this.currentTime1);
            }

            else if (_status === "play") {
                this.currentTime2 = Math.round(this.context.currentTime * 1000) / 1000;
                console.log(this.currentTime2);
                let dur = this.currentTime2 - this.currentTime1;
                console.log("durée: " +dur) 
                console.log("I playing...");
                //clearTimeout(this.stopRecord);
                this.mediaRecorder.stop();
                this.statePlayMusic = true;
                this.ready = false;
                this.mediaRecorder.addEventListener("stop", event => {
                    this.audio.play();
                    this.audio.currentTime = this.currentTime1;
                    //Checking the time of song to avoid latency between loop (src: https://stackoverflow.com/questions/7330023/gapless-looping-audio-html5)
                    this.audio.addEventListener("timeupdate", function () {
                        let buffer = .44;
                        if ((this.currentTime * 1000) / 1000 + buffer > parent.currentTime2) {
                            this.currentTime = parent.currentTime1;
                            this.play();
                            let dur2= this.duration - parent.currentTime1
                            console.log(dur2);
                            console.log()
                        }
                    })

                    //console.log(this.audioBlob);
                });

            }
        }
        else if (this.ready == false) {
            console.log("Recorder not ready!")
        }
        if (_status === "stop") {
            //console.log("okay stop");
            this.audio.pause();
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
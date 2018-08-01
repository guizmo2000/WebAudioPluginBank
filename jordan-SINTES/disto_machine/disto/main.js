/* ######################################## Disto #####################################*/
/* ES6 web audio class following the API standard
 * Author : Jordan Sintes
 */

window.DistoMachine = class DistoMachine extends WebAudioPluginCompositeNode {
    constructor(ctx, URL, options) {
        /*    ################     API PROPERTIES    ###############   */
        super(ctx, URL, options)

        this.params = { status: "disable" }

        this.addParam({
            name: 'volume',
            defaultValue: 5,
            minValue: 0,
            maxValue: 10
        });
        this.addParam({
            name: 'master',
            defaultValue: 6,
            minValue: 0,
            maxValue: 10
        });
        this.addParam({
            name: 'drive',
            defaultValue: 0,
            minValue: 0,
            maxValue: 10
        });
        this.addParam({
            name: 'bass',
            defaultValue: 5,
            minValue: 0,
            maxValue: 10
        });
        this.addParam({
            name: 'middle',
            defaultValue: 4,
            minValue: 0,
            maxValue: 10
        });
        this.addParam({
            name: 'treble',
            defaultValue: 3,
            minValue: 0,
            maxValue: 10
        });
        this.addParam({
            name: 'reverb',
            defaultValue: 2,
            minValue: 0,
            maxValue: 10
        });
        this.addParam({
            name: 'presence',
            defaultValue: 5,
            minValue: 0,
            maxValue: 10
        });

        this.reverbImpulses = [{
            name: "Fender Hot Rod",
            url: this.URL + "/assets/impulses/reverb/cardiod-rear-levelled.wav"
        },
        {
            name: "PCM 90 clean plate",
            url: this.URL + "/assets/impulses/reverb/pcm90cleanplate.wav"
        },
        {
            name: "Scala de Milan",
            url: this.URL + "/assets/impulses/reverb/ScalaMilanOperaHall.wav"
        }
        ];
        this.cabinetImpulses = [{
            name: "Vintage Marshall 1",
            url: this.URL + "/assets/impulses/cabinet/Block%20Inside.wav"
        },
        {
            name: "Vox Custom Bright 4x12 M930 Axis 1",
            url: this.URL + "/assets/impulses/cabinet/voxCustomBrightM930OnAxis1.wav"
        },
        {
            name: "Fender Champ, axis",
            url: this.URL + "/assets/impulses/cabinet/FenderChampAxisStereo.wav"
        },
        {
            name: "Marshall 1960, axis",
            url: this.URL + "/assets/impulses/cabinet/Marshall1960.wav"
        }
        ];

        super.setup();
    }

    /*    ################     API METHODS    ###############   */

    getPatch(index) { // patch = preset
        return null;
    }
    setPatch(data, index) {
        console.warn("this module does not implements patches use getState / setState to get an array of current params values ");
        this.amp.setPresetByIndex(this, index);
    }

    getParam(key) {
        try {
            return this.params[key];
        } catch (error) {
            console.warn("this plugin does not implement this param")
        }
    }

    setParam(key, value) {
        //console.log(key, value);
        try {
            this[key] = (value);
        } catch (error) {

            console.warn("this plugin does not implement this param")
        }
    }




    onMidi(msg) {
        return msg;
        //web midi api ?
    }

    /*  #########  Personnal code for the web audio graph  #########   */


    createNodes() {

    }

    connectNodes() {

    }

    set volume(val) {
        this.params.volume = val;
        this.amp.changeOutputGain(val);
    }

    set master(val) {
        this.params.master = val;
        this.amp.changeMasterVolume(val);
    }

    set drive(val) {
        this.params.drive = val;
        this.amp.changeDrive(val);
    }

    set bass(val) {
        this.params.bass = val;
        this.amp.changeBassFilterValue(val);
    }

    set middle(val) {
        this.params.middle = val;
        this.amp.changeMidFilterValue(val);
    }

    set treble(val) {
        this.params.treble = val;
        this.amp.changeTrebleFilterValue(val);
    }

    set reverb(val) {
        this.params.reverb = val;
        this.amp.changeReverbGain(val);
    }

    set presence(val) {
        this.params.presence = val;
        this.amp.changePresenceFilterValue(val);
    }

    set status(_sig) {
        console.log(_sig);
        let bypassOn = (_sig !== "disable");

        this.amp.bypass(bypassOn);
        // cas reactivation ? 
    }
}



window.WasabiDistoMachine = class WasabiDistoMachine extends WebAudioPluginFactory {

    constructor(context, baseUrl, options) {
        super(context, baseUrl, options);
    }
}

AudioContext.prototype.createWasabiDistoMachineCompositeNode =
    OfflineAudioContext.prototype.createWasabiDistoMachineCompositeNode = function (options) {
        console.log(this, options);
        return new DistoMachine(this, options);
    };
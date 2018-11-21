/*  ################################## TUNER ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the the pitch detecotr here: https://webaudiodemos.appspot.com/pitchdetect/index.html
*/
window.TunerMachine = class TunerMachine extends WebAudioPluginCompositeNode {
    constructor(ctx, URL, options) {
        super(ctx, URL, options)
        /*    ################     API PROPERTIES    ###############   */

        this.options = options;
        this.state;
        this.params = { "status": "disable" }
        super.setup();

        this.analyser;
        this.DEBUGCANVAS = null;
        this.mediaStreamSource = null;
        this.rafID = null,
        this.tracks = null;
        this.buflen = 2048;
        this.buf = new Float32Array(this.buflen);
        this.noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        this.MIN_SAMPLES = 0;
        this.GOOD_ENOUGH_CORRELATION = 0.9;

        //for function about mode choice
        this.toneLevel= 0;
        this.gapTone = 0;
        this.frequencyString=[0, 0, 0, 0, 0, 0]
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
        this.analyser = this.context.createAnalyser();
        
        this.dryGainNode.gain.value=3;
        this.analyser.fftSize = 2048;
    }

    connectNodes() {
        this._input.connect(this.dryGainNode);
        this.dryGainNode.connect(this.analyser);
        this.analyser.connect(this._output);
    }

    /*  #########  Personnal code for Tuner  #########   */
    set status(_sig) {
        if (_sig === "enable") {
            this.params.status = "enable";
            this.updatePitch();
            console.log("Tuner is on");
        }

        else if (_sig === "disable") {
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
            window.cancelAnimationFrame(this.rafID);

            this.params.status = "disable"
            console.log("Tuner is off");
        }
    }

    noteFromPitch(frequency) {
        var noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
        return Math.round(noteNum) + 69;
    }

    centsOffFromPitch(frequency, note) {
        return Math.floor(1200 * Math.log(frequency / this.frequencyFromNoteNumber(note)) / Math.log(2));
    }

    frequencyFromNoteNumber(note) {
        return 440 * Math.pow(2, (note - 69) / 12);
    }

    updatePitch(time) {
        var detectorElem = this.gui._root.getElementById("detector");
        var DEBUGCANVAS = this.gui._root.getElementById("waveform");
        if (DEBUGCANVAS) {
            var waveCanvas = DEBUGCANVAS.getContext("2d");
            waveCanvas.strokeStyle = "black";
            waveCanvas.lineWidth = 1;
        }
        var pitchElem = this.gui._root.getElementById("pitch");
        var noteElem = this.gui._root.getElementById("note");
        var detuneElem = this.gui._root.getElementById("detune");
        var detuneAmount = this.gui._root.getElementById("detune_amt");
        this.analyser.getFloatTimeDomainData(this.buf);
        var ac = this.autoCorrelate(this.buf, this.context.sampleRate);


        if (this.gui._root.getElementById("waveform")) {  // This draws the current waveform, useful for debugging
            this.gui._root.waveCanvas.clearRect(0, 0, 512, 256);
            waveCanvas.strokeStyle = "red";
            waveCanvas.beginPath();
            waveCanvas.moveTo(0, 0);
            waveCanvas.lineTo(0, 256);
            waveCanvas.moveTo(128, 0);
            waveCanvas.lineTo(128, 256);
            waveCanvas.moveTo(256, 0);
            waveCanvas.lineTo(256, 256);
            waveCanvas.moveTo(384, 0);
            waveCanvas.lineTo(384, 256);
            waveCanvas.moveTo(512, 0);
            waveCanvas.lineTo(512, 256);
            waveCanvas.stroke();
            waveCanvas.strokeStyle = "black";
            waveCanvas.beginPath();
            waveCanvas.moveTo(0, buf[0]);
            for (var i = 1; i < 512; i++) {
                waveCanvas.lineTo(i, 128 + (buf[i] * 128));
            }
            waveCanvas.stroke();
        }

        if (ac == -1) {
            detectorElem.className = "vague";
            pitchElem.innerText = "--";
            noteElem.innerText = "-";
            detuneElem.className = "";
            detuneAmount.innerText = "--";
        } else {
            detectorElem.className = "confident";
            var pitch = ac;
            pitchElem.innerText = Math.round(pitch);
            var note = this.noteFromPitch(pitch);
            noteElem.innerHTML = this.noteStrings[note % 12];
            var detune = this.centsOffFromPitch(pitch, note);
            if (detune == 0) {
                detuneElem.className = "";
                detuneAmount.innerHTML = "--";
            } else {
                if (detune < 0)
                    detuneElem.className = "flat";
                else
                    detuneElem.className = "sharp";
                detuneAmount.innerHTML = Math.abs(detune);
            }
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = window.webkitRequestAnimationFrame;
        this.rafID = window.requestAnimationFrame(this.updatePitch.bind(this));
    }

   /*autoCorrelate(buf, sampleRate) {
        var MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.
        var GOOD_ENOUGH_CORRELATION = 0.9; // this is the "bar" for how close a correlation needs to be
        var SIZE = buf.length;
        var MAX_SAMPLES = Math.floor(SIZE / 2);
        var best_offset = -1;
        var best_correlation = 0;
        var rms = 0;
        var foundGoodCorrelation = false;
        var correlations = new Array(MAX_SAMPLES);

        for (var i = 0; i < SIZE; i++) {
            var val = buf[i];
            rms += val * val;
        }
        rms = Math.sqrt(rms / SIZE);
        if (rms < 0.01) // not enough signal
            return -1;

        var lastCorrelation = 1;
        for (var offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
            var correlation = 0;

            for (var i = 0; i < MAX_SAMPLES; i++) {
                correlation += Math.abs((buf[i]) - (buf[i + offset]));
            }
            correlation = 1 - (correlation / MAX_SAMPLES);
            correlations[offset] = correlation; // store it, for the tweaking we need to do below.
            if ((correlation > GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
                foundGoodCorrelation = true;
                if (correlation > best_correlation) {
                    best_correlation = correlation;
                    best_offset = offset;
                }
            } else if (foundGoodCorrelation) {
                // short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
                // Now we need to tweak the offset - by interpolating between the values to the left and right of the
                // best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
                // we need to do a curve fit on correlations[] around best_offset in order to better determine precise
                // (anti-aliased) offset.

                // we know best_offset >=1, 
                // since foundGoodCorrelation cannot go to true until the second pass (offset=1), and 
                // we can't drop into this clause until the following pass (else if).
                var shift = (correlations[best_offset + 1] - correlations[best_offset - 1]) / correlations[best_offset];
                return sampleRate / (best_offset + (8 * shift));
            }
            lastCorrelation = correlation;
        }
        if (best_correlation > 0.01) {
            // console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
            return sampleRate / best_offset;
        }
        return -1;
        //	var best_frequency = sampleRate/best_offset;
    }*/

    //Autocorrelation purposed by dalatant, at this link: https://github.com/cwilso/PitchDetect/pull/23/commits/b0d5d28d2803d852dd85d2a1e53c22bcedba4cbf
    autoCorrelate( buf, sampleRate ) {
        // Implements the ACF2+ algorithm
        var SIZE = buf.length;
        var rms = 0;
         for (var i=0;i<SIZE;i++) {
            var val = buf[i];
            rms += val*val;
        }
        rms = Math.sqrt(rms/SIZE);
        if (rms<0.01) // not enough signal
            return -1;
         var r1=0, r2=SIZE-1, thres=0.2;
        for (var i=0; i<SIZE/2; i++)
            if (Math.abs(buf[i])<thres) { r1=i; break; }
        for (var i=1; i<SIZE/2; i++)
            if (Math.abs(buf[SIZE-i])<thres) { r2=SIZE-i; break; }
         buf = buf.slice(r1,r2);
        SIZE = buf.length;
         var c = new Array(SIZE).fill(0);
        for (var i=0; i<SIZE; i++)
            for (var j=0; j<SIZE-i; j++)
                c[i] = c[i] + buf[j]*buf[j+i];
         var d=0; while (c[d]>c[d+1]) d++;
        var maxval=-1, maxpos=-1;
        for (var i=d; i<SIZE; i++) {
            if (c[i] > maxval) {
                maxval = c[i];
                maxpos = i;
            }
        }
        var T0 = maxpos;
         var x1=c[T0-1], x2=c[T0], x3=c[T0+1];
        var a = (x1 + x3 - 2*x2)/2;
        var b = (x3 - x1)/2;
        if (a) T0 = T0 - b/(2*a);
         return sampleRate/T0;
    }

    increaseSemiTone(){
        if(this.toneLevel<2){
            this.toneLevel++;
            this.indicateTone(this.toneLevel);
        }
        console.log("increase semitone level : toneLevel =" + this.toneLevel )
    }

    decreaseSemiTone(){
        if(this.toneLevel>-2){
            this.toneLevel--;
            this.indicateTone(this.toneLevel);
        }
        console.log("decrease semitone level : toneLevel =" + this.toneLevel );
    }

    indicateTone(toneLevel){
        let freq = this.autoCorrelate(this.buf, this.context.sampleRate);
        toneLevel= this.toneLevel;
        switch(toneLevel) {
            case -2:
                this.frequencyString=[73, 98, 131, 139, 220, 294];
                break;
            case -1:
                this.frequencyString=[78, 104, 139, 185, 233, 311];
                break;
            case 0:
                this.frequencyString=[82, 110, 147, 196, 247, 330];
                break;
            case 1:
                this.frequencyString=[87, 117, 156, 208, 262, 349];
                break;
            case 2:
                this.frequencyString=[92, 123, 165, 220, 277, 370];
                break;
        }

        let freqTest= Math.round(freq);
        console.log(freqTest);
        let intMin= 0;
        let intMax= 0;
        let freqMin= freqTest;
        let freqMax= freqTest;
        
        //Tant que la fréquence qu'on lui a attribué ne correspond pas à une valeur du tableau
        while(this.frequencyString.indexOf(freqMin) == -1  && freqMin> 0){
            //On diminue la fréquence de test
            freqMin --;
            //Si la fréquence correspond à une des valeurs du tableau
            if (this.frequencyString.indexOf(freqMin)!= -1){
                //On attribue à l'intervale minimum la note du tableau
                intMin= this.frequencyString[this.frequencyString.indexOf(freqMin)];
                console.log("intMin =" + intMin);
            }
        }

        //Pareil que sur le test du dessus mais cette fois on cherche l'intervalle maximum
        while(this.frequencyString.indexOf(freqMax) == -1 ){ 
            freqMax ++;
            if (this.frequencyString.indexOf(freqMax)!= -1){
                intMax= this.frequencyString[this.frequencyString.indexOf(freqMax)];
                console.log("intMax =" + intMax);
            }
        }

        let middle= (intMin+intMax)/2;
        if(freqTest<middle){
            console.log("Il faut monter");
        }
        else if(freqTest>middle){
            console.log("Il faut descendre");
        }
    }

    
}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiTunerMachine = class WasabiTunerMachine extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new TunerMachine(this, options); };
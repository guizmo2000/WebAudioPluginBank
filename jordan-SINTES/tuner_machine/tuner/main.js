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
        this.toneLevel = 0;
        this.frequencyString = [0, 0, 0, 0, 0, 0]
        this.valueSaved = 0;
        this.wA = null;
        this.hA = null;
        this.hRect = null;
        this.Angle = null
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

        this.dryGainNode.gain.value = 3;
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
        var canvasElem = this.gui._root.getElementById("output");
        var detectorElem = this.gui._root.getElementById("detector");
        var DEBUGCANVAS = this.gui._root.getElementById("waveform");
        if (DEBUGCANVAS) {
            var waveCanvas = DEBUGCANVAS.getContext("2d");
            waveCanvas.strokeStyle = "black";
            waveCanvas.lineWidth = 1;
        }
        
        this.wA = this.gui._root.getElementById("output").offsetWidth;
        this.hA = this.gui._root.getElementById("output").offsetHeight;

        //canvas aiguille
        //le canvas de l'aiguille a été envelé pour le mettre dans le canvas principale

        let outputA = canvasElem.getContext('2d');
       

        //canvas diode
        let canvasdio = this.gui._root.getElementById("diode");
        let outputD = canvasdio.getContext('2d');
        

        //Tuner canvas
        var pitchElem = this.gui._root.getElementById("pitch");
        var noteElem = this.gui._root.getElementById("note");
        var detuneElem = this.gui._root.getElementById("detune");
        var detuneAmount = this.gui._root.getElementById("detune_amt");
        this.analyser.getFloatTimeDomainData(this.buf);
        var ac = this.autoCorrelate(this.buf, this.context.sampleRate);

        var newAngle = this.angle_frequence(ac); //angle modifié en fonction de la freq

        outputA.clearRect(0, 0, this.wA, this.hA); //pour effacer aiguille quand elle bouge(animation)

        this.background(outputA);
        this.inittrait(outputA, newAngle);

        outputD = canvasdio.getContext('2d');
        this.initdiiode(outputD, ac);

        this.drawGain(outputA);


       /* if (this.gui._root.getElementById("waveform")) {  // This draws the current waveform, useful for debugging
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
        }*/

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
            this.Modifdio(outputD, detune, detuneElem.className);
        }
        let freq = Math.round(ac);
        if (this.valueSaved != freq) {
            this.indicateTone(this.toneLevel);
        }


        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = window.webkitRequestAnimationFrame;
        this.rafID = window.requestAnimationFrame(this.updatePitch.bind(this));
    }

    background(ctx) {
        ctx.save();
        /*Modification afin de mettre une partie de l'arc de cercle à sa place*/
        ctx.translate(this.wA / 2, this.hA - 10);

        ctx.strokeStyle = "rgb(255, 0, 0)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -this.hA / 3 - 15);
        ctx.lineTo(0, -this.hA / 3 - 30);
        ctx.stroke();

        var mesure = -50;
        var cnorm;
        this.Angle = 0;
        while (mesure < 40) {

            //	ctx.rotate(Angle);
            cnorm = this.map(mesure, -50, 0, 1, 0.1);
            cnorm = this.mapLinearToLog(cnorm, -0.1, -1, 0.1, 1);
            this.Angle = this.map(cnorm, -1, -0.1, -Math.PI / 4, 0); //angle

            ctx.rotate(this.Angle);

            // Graduation qui suit les cents de façon logarithmique
            ctx.strokeStyle = "rgb(255, 0, 0)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -this.hA / 3 - 15);
            ctx.lineTo(0, -this.hA / 3 - 30);
            ctx.stroke();

            mesure += 10;
        }
        ctx.restore();


        ctx.save();
        /*Modification afin de mettre une l'autre de l'arc de cercle à sa place*/
        ctx.translate(this.wA / 2, this.hA - 10);

        var mesure2 = -50;
        var cnorm2;
        var Angle2 = 0;
        while (mesure2 < 40) {

            //	ctx.rotate(Angle);
            cnorm2 = this.map(mesure2, -50, 0, 1, 0.1);
            cnorm2 = this.mapLinearToLog(cnorm2, -0.1, -1, 0.1, 1);
            Angle2 = this.map(cnorm2, -1, -0.1, Math.PI / 4, 0); //angle

            ctx.rotate(Angle2);

            // Graduation qui suit les cents de façon logarithmique
            ctx.strokeStyle = "rgb(255, 0, 0)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -this.hA / 3 - 15);
            ctx.lineTo(0, -this.hA / 3 - 30);
            ctx.stroke();

            mesure2 += 10;
        }
        ctx.restore();
    }

    // maps a value from [istart, istop] into [ostart, ostop]
    map(value, istart, istop, ostart, ostop) {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }

    // passage echelle linéaire -> echelle logarithmique
    mapLinearToLog(x, istart, istop, ostart, ostop) {
        // sliderValue is in [0, 10] range, adjust to [0, 1500] range  
        var value = x;
        var minp = istart;
        var maxp = istop;

        // The result should be between 10 an 1500
        var minv = Math.log(ostart);
        var maxv = Math.log(ostop);

        // calculate adjustment factor
        var scale = (maxv - minv) / (maxp - minp);

        value = Math.exp(minv + scale * (value - minp));
        // end of logarithmic adjustment
        return value;
    }

    /**************** AIGUILLE Canvas ****************/
    inittrait(ctx, A) // A l'angle défini par angle_fréquence(f)
    {
        ctx.save();
        /*Modification afin de mettre l'aiguille a sa place*/
        ctx.translate(this.wA / 2, this.hA - 10);
        ctx.rotate(A);

        ctx.strokeStyle = "rgb(70, 70, 70)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        /*Modification de la taille de l'aiguille*/
        ctx.lineTo(0, -60);
        ctx.stroke();
        ctx.restore();
    }

    initdiiode(ctx) // ctx context du canvas des diiode
    {
        ctx.fillStyle = "rgb(70, 70, 70)";
        ctx.beginPath();

        ctx.arc(150, 20, 10, 0, 2 * Math.PI);
        ctx.arc(75, 20, 10, 0, 2 * Math.PI);
        ctx.arc(225, 20, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }

    /**************** GAIN Canvas ****************/
    // Fonction qui initialisera le rectangle qui representera le volume du son
    initGain(ctx) {
        ctx.save();
        ctx.fillStyle = "rgb(70, 70, 70)";
        ctx.fillRect(this.wA - 30, 0, 50, this.hA);
        this.hRect = this.hA;
        ctx.restore();
    }
    // Fonction qui dessine le rectangle representant le volume du sons
    drawGain(ctx) {
        ctx.save();
        ctx.clearRect(this.wA - 30, 0, 50, this.hA);
        ctx.fillStyle = "rgb(70, 70, 70)";
        ctx.fillRect(this.wA - 30, 0, 50, this.hA);
        ctx.fillStyle = "rgb(0, 179, 0)";
        ctx.fillRect(this.wA - 30, this.hA, 50, -this.hRect);
        ctx.restore();
    }

    angle_frequence(f) { // variation de l'angle en fonction de la fréquence émise
        var note = this.noteFromPitch(f);
        var cents = this.centsOffFromPitch(f, note);
        var ref_freq = this.frequencyFromNoteNumber(note);
        var cnorm;
        if (f < ref_freq) {
            cnorm = this.map(cents, -50, 0, 1, 0.1);
            cnorm = this.mapLinearToLog(cnorm, 0.1, 1, 0.1, 1);
            this.Angle = this.map(cnorm, 1, 0.1, -Math.PI / 2 + 0.2, 0); //angle
            return this.Angle;
        } else {
            cnorm = this.map(cents, 0, 50, 0.1, 1);
            cnorm = this.mapLinearToLog(cnorm, 0.1, 1, 0.1, 1);
            this.Angle = this.map(cnorm, 0.1, 1, 0, Math.PI / 2 - 0.2); //angle
            return this.Angle;
        }
    }

    Modifdio(ctx,ecart,side) //ecart = l'ecart entre la frequence du son et celle de la note reconnu 
								  //et side contient une chaine de caractère qui va nous servir à savoir de quel côté allumé la diiode
								  //flat: à gauche  sharp:à gauhche  "": au centre  
{
	ctx.save();
	ctx.clearRect(0,0,300,200);
	if(side=="flat"&&ecart<=-5)
	{
		if(ecart>=-15)
		{
			ctx.fillStyle="rgb(0, 150, 0)";
		}
		else if(ecart>=-35)
		{
			ctx.fillStyle="rgb(255, 102, 0)";
		}
		else if(ecart<=-35)
		{
			ctx.fillStyle="rgb(200,0,0)";
		}
		
	}
	else
	{
		ctx.fillStyle="rgb(70, 70, 70)";
	}
	ctx.beginPath();
	
	ctx.arc(75, 20, 10, 0, 2 * Math.PI);
	ctx.fill();
	
	if(side=="sharp"&&ecart>=5)
	{
		if(ecart<=15)
		{
			ctx.fillStyle="rgb(0, 150, 0)";
		}
		else if(ecart<=35)
		{
			ctx.fillStyle="rgb(255, 102, 0)";
		}
		else if(ecart>=35)
		{
			ctx.fillStyle="rgb(200,0,0)";
		}
	}
	else
	{
		ctx.fillStyle="rgb(70, 70, 70)";
	}
	ctx.beginPath();
	ctx.arc(225, 20, 10, 0, 2 * Math.PI);
	ctx.fill();
  	
  	if(ecart <=5 && ecart >=-5)
  	{	
  		ctx.fillStyle="rgb(0, 230, 0)"
  	}
  	else
  	{
  		ctx.fillStyle="rgb(70, 70, 70)";
  	}
	ctx.beginPath();
	ctx.arc(150, 20, 10, 0, 2 * Math.PI);
	ctx.fill();
  	ctx.restore();
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

    /*
     * Autocorrelation purposed by dalatant, at this link: 
     * https://github.com/cwilso/PitchDetect/pull/23/commits/b0d5d28d2803d852dd85d2a1e53c22bcedba4cbf
     */
    autoCorrelate(buf, sampleRate) {
        // Implements the ACF2+ algorithm
        var SIZE = buf.length;
        var rms = 0;
        for (var i = 0; i < SIZE; i++) {
            var val = buf[i];
            rms += val * val;
        }
        rms = Math.sqrt(rms / SIZE);
        if (rms < 0.01) // not enough signal
            return -1;
        var r1 = 0, r2 = SIZE - 1, thres = 0.2;
        for (var i = 0; i < SIZE / 2; i++)
            if (Math.abs(buf[i]) < thres) { r1 = i; break; }
        for (var i = 1; i < SIZE / 2; i++)
            if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }
        buf = buf.slice(r1, r2);
        SIZE = buf.length;
        var c = new Array(SIZE).fill(0);
        for (var i = 0; i < SIZE; i++)
            for (var j = 0; j < SIZE - i; j++)
                c[i] = c[i] + buf[j] * buf[j + i];
        var d = 0; while (c[d] > c[d + 1]) d++;
        var maxval = -1, maxpos = -1;
        for (var i = d; i < SIZE; i++) {
            if (c[i] > maxval) {
                maxval = c[i];
                maxpos = i;
            }
        }
        var T0 = maxpos;
        var x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
        var a = (x1 + x3 - 2 * x2) / 2;
        var b = (x3 - x1) / 2;
        if (a) T0 = T0 - b / (2 * a);
        return sampleRate / T0;
    }

    increaseSemiTone() {
        if (this.toneLevel < 2) {
            this.toneLevel++;
            this.indicateTone(this.toneLevel);
        }
        console.log("increase semitone level : toneLevel =" + this.toneLevel)
    }

    decreaseSemiTone() {
        if (this.toneLevel > -2) {
            this.toneLevel--;
            this.indicateTone(this.toneLevel);
        }
        console.log("decrease semitone level : toneLevel =" + this.toneLevel);
    }

    //Function about indicating the correct note depending of tuning mode
    indicateTone(toneLevel) {
        let freq = this.autoCorrelate(this.buf, this.context.sampleRate);
        toneLevel = this.toneLevel;
        let freqTest = Math.round(freq);
        let intMin = 0;
        let intMax = 0;
        let freqMin = freqTest;
        let freqMax = freqTest;
        var detuneLessMode = this.gui._root.getElementById("lessArrow");
        var detuneMoreMode = this.gui._root.getElementById("moreArrow");


        switch (toneLevel) {
            //Chord Mode, 0 is the standard tuning
            case -2:
                this.frequencyString = [73, 98, 131, 175, 220, 294];
                break;
            case -1:
                this.frequencyString = [78, 104, 139, 185, 233, 311];
                break;
            case 0:
                this.frequencyString = [82, 110, 147, 196, 247, 330];
                break;
            case 1:
                this.frequencyString = [87, 117, 156, 208, 262, 349];
                break;
            case 2:
                this.frequencyString = [92, 123, 165, 220, 277, 370];
                break;
        }

        /*
         *  The goal here is while the frequency isn't close to one of frequency
         *  present in the table, we must to catch on which interval the frequency is present
         *  and after to indicate if the user must to tune more or less depending of the position
         *  in the interval
         */

        //If the frequency catched not corresponding to a frequency in the table and the value between the frequency of the first string and last string
        if (this.frequencyString.indexOf(freqMin) == -1 && freqTest > this.frequencyString[0] && freqTest < this.frequencyString[5]) {
            while (this.frequencyString.indexOf(freqMin) == -1 && freqMin > 0) {

                //We decrease freqMin to find the first value of the interval
                freqMin--;
                //Until we find the first value of the interval
                if (this.frequencyString.indexOf(freqMin) != -1) {
                    intMin = this.frequencyString[this.frequencyString.indexOf(freqMin)];
                }

            }
            //Same test but to find the second value for the interval
            while (this.frequencyString.indexOf(freqMax) == -1) {
                freqMax++;
                if (this.frequencyString.indexOf(freqMax) != -1) {
                    intMax = this.frequencyString[this.frequencyString.indexOf(freqMax)];
                }
            }

            //If the frequency catched is not closed of the exact frequency
            if (freqTest > intMin + 2 || freqTest < intMax - 2) {
                let middle = (intMin + intMax) / 2;
                //if the frequency catched is above of the middle of the interval or under the frequency of the first string
                if (freqTest > middle || freqTest < this.frequencyString[0]) {
                    //If it's closed to the max interval
                    if (freqTest > intMax - 2 && freqTest < intMax + 2) {
                        detuneLessMode.innerHTML = "";
                        detuneMoreMode.innerHTML = "";
                    } else {
                        //Otherwise We told to increase the tuning
                        detuneLessMode.innerHTML = "↑";
                        detuneMoreMode.innerHTML = "";
                    }
                }
                else if (freqTest < middle || freqTest > this.frequencyString[5]) {
                    //Inversing test
                    if (freqTest > intMin - 2 && freqTest < intMin + 2) {
                        detuneLessMode.innerHTML = "";
                        detuneMoreMode.innerHTML = "";
                    } else {
                        detuneMoreMode.innerHTML = "";
                        detuneLessMode.innerHTML = "↓";
                    }
                }
            }
        } else {
            if (freqTest < this.frequencyString[0] - 2 && freqTest > 0) {
                detuneLessMode.innerHTML = "↑";
                detuneMoreMode.innerHTML = "";
            }
            else if (freqTest > this.frequencyString[5] + 2) {
                detuneMoreMode.innerHTML = "";
                detuneLessMode.innerHTML = "↓";
            }
            else {
                detuneMoreMode.innerHTML = "";
                detuneLessMode.innerHTML = "";
            }
        }
        this.valueSaved = freqTest;
    }

    /*
     *TODO: Create function to catch and show the gain of the sound
     */
    showGain() {

    }
}

//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiTunerMachine = class WasabiTunerMachine extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new TunerMachine(this, options); };
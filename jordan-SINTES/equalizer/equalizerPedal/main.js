/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
* Comment: Based on the Equalizer made by M.BUFFA
*/
window.Equalizer = class Equalizer extends WebAudioPluginCompositeNode {
	constructor(ctx, options) {
		super(ctx, options)
		/*    ################     API PROPERTIES    ###############   */

		this.state;

		this.params = {
            filters:[]
            
        }

        this.gridColor = "rgb(235,235,235)";
        this.textColor = "rgb(235, 235, 235)";

        // mouse selection mode
        this.mode = "none";

        this.nyquist = 0.5 * this.context.sampleRate;
        this.noctaves = 11;
        // should be recomputed in case of resize
        
        
       
        

		
		this.setup();
	}

	/*    ################     API METHODS    ###############   */

	get numberOfInputs() {
		return 1;
	}

	get numberOfOutputs() {
		return this.outputs.length;
	}
	inputChannelCount() {
		return 1;
	}
	outputChannelCount() {
		return 1
	}
	getMetadata() {
		return this.metadata;
	}

	getDescriptor() {
		return this._descriptor;
	}

	

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

	// override setup 
	setup() {
		console.log("delay setup");
		this.createNodes();
		this.connectNodes();
		this.linktoParams();
	}

	createNodes() {
        this.addFilter("highpass", 0.00001, 40, 12, "red");

        this.addFilter("lowshelf", 0, 80, 0, "yellow");
        this.addFilter("peaking", 1, 230, 0, "green");
        this.addFilter("peaking", 1, 2500, 0, "turquoise");
        this.addFilter("peaking", 1, 5000, 0, "blue");
        this.addFilter("highshelf", 1, 10000, 0, "violet");

        this.addFilter("lowpass", 0.00001, 18000, 12, "red");

        // connect also to an analyser node
        // Create an analyser node
        this.analyser = this.context.createAnalyser();

        // Try changing for lower values: 512, 256, 128, 64...
        this.analyser.fftSize = 256;
        this.analyser.smoothingTimeConstant = 0.9;
        //this.analyser.minDecibels = -this.dbScale;
        //this.analyser.maxDecibels = this.dbScale;
        this.bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Float32Array(this.bufferLength);

        var analyserRange = this.analyser.maxDecibels - this.analyser.minDecibels;
        // ration between analyser range and our range
        var range = this.dbScale * 2;
        this.dbRatio = range / analyserRange;
        //console.log("arange = " + analyserRange);
        //console.log("range = " + range);
        //console.log("ratio = " + this.dbRatio);

	}

	connectNodes() {
		for (let i = 0; i < this.params.filters.length; i++) {
            let f = this.params.filters[i];

            if (i === 0) {
                // connect inputGain to first filter
                this._input.connect(f);
            } else {
                this.params.filters[i - 1].connect(f);
            }
        }
        // connect last filter to outputGain
        this.params.filters[this.params.filters.length - 1].connect(this._output);
        this._output.connect(this.analyser);
	}

	linktoParams(){
		/*
		 * set default value for parameters and assign it to the web audio nodes
		 */
	};


    /*  #########  Personnal code for the web audio graph  #########   */
    
    addFilter(type, Q, f, g, color) {
        let filter = this.context.createBiquadFilter();

        filter.type = type;
        filter.Q.value = Q;
        filter.frequency.value = f;
        filter.gain.value = g;
        filter.color = color;
        this.params.filters.push(filter);
    }

    dbToY(db) {
        var y = (0.5 * this.height) - this.pixelsPerDb * db;
        return y;
    };

    
	
}

class FilterBank {
    constructor(audioCtx, parent, dbScale) {
        this.audioCtx = audioCtx;
        this.canvasParent = parent;
        this.dbScale = dbScale || 60;
		

        // filters
        this.filters = [];

        // canvas
        this.canvas = document.createElement("canvas");
        // get dimensions, by default the ones from the parent element
        this.canvas.classList.add("graphicEQ");
        this.canvas.width = this.width = 250;
        this.canvas.height = this.height = 250;

        this.ctx = this.canvas.getContext("2d");
        this.canvasParent.appendChild(this.canvas);

        /*
        this.canvas2 = document.createElement("canvas");
        this.canvas2.style.position = "absolute";
        this.canvas2.style.top = 0;
        this.canvas2.style.left = 0;
        this.canvas2.width = this.canvas.width;
        this.canvas2.height = this.canvas.height;
        this.canvas2.style.zIndex = -1;
        //this.canvasParent.appendChild(this.canvas2);
        this.ctx2 = this.canvas2.getContext("2d");*/

        //this.resize(this.width, this.height);

        /*window.addEventListener('resize',
            evt => this.resize(this.canvasParent.clientWidth,
                this.canvasParent.clientHeight));*/


        // global properties
        this.gridColor = "rgb(235,235,235)";
        this.textColor = "rgb(235, 235, 235)";

        // mouse selection mode
        this.mode = "none";

        this.nyquist = 0.5 * this.audioCtx.sampleRate;
        this.noctaves = 11;
        // should be recomputed in case of resize
        this.pixelsPerDb = (0.5 * this.height) / this.dbScale;

        // listeners
        this.canvas.addEventListener("mousemove", this.processMouseMove.bind(this));
        this.canvas.addEventListener("mousedown", this.processMouseDown.bind(this));
        this.canvas.addEventListener("mouseup", this.processMouseUp.bind(this));

        this.initFilters();

        //this.resize(this.canvasParent.clientWidth,
            //this.canvasParent.clientHeight);

        requestAnimationFrame(this.drawFrequencies.bind(this));
    }

    initFilters() {
        this.createStandardFilterbank();

        this.draw();
    }

    /*createStandardFilterbank() {
        // Type, Q, Freq, Gain, Color
        this.addFilter("highpass", 0.00001, 40, 12, "red");

        this.addFilter("lowshelf", 0, 80, 0, "yellow");
        this.addFilter("peaking", 1, 230, 0, "green");
        this.addFilter("peaking", 1, 2500, 0, "turquoise");
        this.addFilter("peaking", 1, 5000, 0, "blue");
        this.addFilter("highshelf", 1, 10000, 0, "violet");

        this.addFilter("lowpass", 0.00001, 18000, 12, "red");

        // Chain filters with two gains before and after
        this.inputGain = this.audioCtx.createGain();
        this.outputGain = this.audioCtx.createGain();

        for (let i = 0; i < this.filters.length; i++) {
            let f = this.filters[i];

            if (i === 0) {
                // connect inputGain to first filter
                this.inputGain.connect(f);
            } else {
                this.filters[i - 1].connect(f);
            }
        }
        // connect last filter to outputGain
        this.filters[this.filters.length - 1].connect(this.outputGain);

        // connect also to an analyser node
        // Create an analyser node
        this.analyser = this.audioCtx.createAnalyser();

        // Try changing for lower values: 512, 256, 128, 64...
        this.analyser.fftSize = 256;
        this.analyser.smoothingTimeConstant = 0.9;
        //this.analyser.minDecibels = -this.dbScale;
        //this.analyser.maxDecibels = this.dbScale;
        this.bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Float32Array(this.bufferLength);

        var analyserRange = this.analyser.maxDecibels - this.analyser.minDecibels;
        // ration between analyser range and our range
        var range = this.dbScale * 2;
        this.dbRatio = range / analyserRange;
        //console.log("arange = " + analyserRange);
        //console.log("range = " + range);
        //console.log("ratio = " + this.dbRatio);

        this.outputGain.connect(this.analyser);
    }*/

    getInput() {
        return this.inputGain;
    }

    getOutput() {
        return this.outputGain;
    }

    drawFrequencies() {
        //clear the canvas
        //this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);

        // Get analyser data
        this.analyser.getFloatFrequencyData(this.dataArray);

        var barWidth = [];
        var barHeight;
        var x = 0;

        for (var i = 0; i < this.bufferLength; i++) {
            // values are all negative
            barHeight = this.dbToY(-this.dataArray[i]);

            barHeight *= this.dbRatio;

            //this.ctx2.fillStyle = 'rgb(' + (barHeight+100) + ',0,0)';
            //this.ctx2.fillStyle = 'red';
            //barWidth[i] = (Math.log(i + 2) - Math.log(i + 1)) * this.canvas2.width / Math.log(this.bufferLength - 80);

            //this.ctx2.fillRect(x, this.canvas2.height - barHeight, barWidth[i], barHeight);
            // 2 is the number of pixels between bars
            x += barWidth[i] + 1;
        }
        // call again the visualize function at 60 frames/s
        requestAnimationFrame(this.drawFrequencies.bind(this));

    }


    drawFrequenciesOld() {
        // NEED TO BE REWRITTEN USING LOG SCALE FOR FREQUENCIES
        // AND ADJUST Db to current scale
        // clear the canvas
        //this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);

        // Or use rgba fill to give a slight blur effect
        //canvasContext.fillStyle = 'rgba(0, 0, 0, 0.5)';
        //canvasContext.fillRect(0, 0, width, height);

        // Get the analyser data
        this.analyser.getByteFrequencyData(this.dataArray);

        var barWidth = [];
        var decibelMin = -60;
        var decibelMax = 60;
        var barHeight;
        var x = 0;
        var HEIGHTRATIO = this.canvas2.height / 140;

        // values go from 0 to 256 and the canvas heigt is 100. Let's rescale
        // before drawing. This is the scale factor
        //var heightScale = this.canvas2.height/128;
        // heightScale /= 2;

        for (var i = 0; i < this.bufferLength; i++) {
            barHeight = (this.dataArray[i]) * HEIGHTRATIO;
            //console.log(barHeight)

            barHeight /= (100 / (decibelMax - decibelMin));

            if (barHeight < 0) barHeight = 0;

            barHeight /= 4;

            //barHeight = this.dataArray[i];


            //this.ctx2.fillStyle = 'rgb(' + (barHeight + 100) + ',0,0)';
            //barHeight *= heightScale;
            //this.ctx2.fillStyle = 'red';
            barWidth[i] = (Math.log(i + 2) - Math.log(i + 1)) * this.canvas2.width / Math.log(this.bufferLength);
            //this.ctx2.fillRect(x, this.canvas2.height-barHeight/2, barWidth[i], barHeight);
            //this.ctx2.fillRect(x, this.canvas2.height - barHeight, barWidth[i], barHeight);
            //console.log("barheight=" + barHeight);
            //this.ctx2.fillRect(0, 0, this.canvas2.width, this.canvas2.height)
            // 2 is the number of pixels between bars
            x += barWidth[i] + 1;
        }

        // call again the visualize function at 60 frames/s
        requestAnimationFrame(this.drawFrequenciesOld.bind(this));

    }

    // -----------------------------
    // Listeners on the canvas
    // -----------------------------

    // call this method if there is a need to resize the freq analyzer
    /*resize(w, h) {
        //console.log("resize");
        let r = this.canvasParent.getBoundingClientRect();
        let rc = this.canvas.getBoundingClientRect();
        this.canvas.width = this.width = this.canvasParent.clientWidth - (r.left + rc.left) / 2;
        this.canvas.height = this.height = this.canvasParent.clientHeight - (r.top + rc.top) / 2;
        this.canvas2.width = this.canvas.width;
        this.canvas2.height = this.canvas.height;
        this.pixelsPerDb = (0.5 * this.height) / this.dbScale;

        this.clearCanvas();
        this.draw();
    }*/
    getMousePos(e) {
        let rect = this.canvas.getBoundingClientRect();
        let mouseX = e.x - rect.left;
        let mouseY = e.y - rect.top;
        return {
            x: mouseX,
            y: mouseY
        }
    }

    processMouseMove(e) {
        this.mousePos = this.getMousePos(e);


        switch (this.mode) {
            case "none":
                // color each control point in red
                this.filters.forEach((f) => {
                    this.drawControlPointAsColoredCircle(f.controlPoint.x, f.controlPoint.y, f.color);
                });

                // if mouse close to a control point color it in green
                if (this.selectedFilter = this.findClosestFilterControlPoint(this.mousePos.x, this.mousePos.y)) {
                    this.drawControlPointAsColoredCircle(this.selectedFilter.controlPoint.x, this.selectedFilter.controlPoint.y, "red");
                }
                break;
            case "dragControlPoint":
                this.dy = (this.clickedY - this.mousePos.y);

                this.changeFilterParameters(this.selectedFilter, this.mousePos.x, this.mousePos.y, this.shiftPressed, this.dy);

                break;
        }

    }

    processMouseDown(e) {
        if (this.selectedFilter) {
            this.selectedFilter.originalQValue = this.selectedFilter.Q.value;
            this.mode = "dragControlPoint";
            this.shiftPressed = (e.shiftKey);
            this.clickedY = this.getMousePos(e).y;
            this.drawTooltip();

            //console.log("mode=START DRAGGING");
        }
    }

    processMouseUp(e) {
        this.mode = "none";
        this.selectedFilter = null;
        this.shiftPressed = false;
        this.dy = 0;
        this.draw();
    }

    /*clearCanvas() {
        // clear canvas
        this.ctx.fillRect(0, 0, this.width, this.height);
    }*/

    // --------------- main methods -------------
    addFilter(type, Q, f, g, color) {
        let filter = this.audioCtx.createBiquadFilter();

        filter.type = type;
        filter.Q.value = Q;
        filter.frequency.value = f;
        filter.gain.value = g;
        filter.color = color;
        this.filters.push(filter);
    }

    draw() {
        let ctx = this.ctx;
        ctx.save();

        ctx.clearRect(0, 0, this.width, this.height);

        this.sumCurveParallel = []; // curves of (x, y) pixels thats sums all filter curves
        this.sumCurveSerie = [];

        for (let x = 0; x < this.width; x++) {
            this.sumCurveParallel[x] = 0;
            this.sumCurveSerie[x] = 0;
        }


        this.filters.forEach((filt) => {
            this.drawFilterCurves(filt);
            // draw control point
            this.drawControlPoint(filt);
        });

        this.drawGrid();

        if (this.filters.length > 0) {
            //this.drawSumOfAllFilterCurveParallel();
            this.drawSumOfAllFilterCurveSerie();
        }

        if (this.mode === "dragControlPoint")
            this.drawTooltip();


        ctx.restore();
    }

    drawTooltip() {
        if (this.mousePos === undefined) return;

        let tooltipWidth = 50, tooltipHeight;
        let displayQ = false, displayGain = false;

        switch (this.selectedFilter.type) {
            case "lowpass":
            case "highpass":
            case "bandpass":
            case "notch":
                displayQ = true;
                displayGain = false;
                tooltipHeight = 44;
                break;
            case "peaking":
                displayQ = true;
                displayGain = true;
                tooltipHeight = 55;
                break;
            case "highshelf":
            case "lowshelf":
                displayQ = false;
                displayGain = true;
                tooltipHeight = 44;
                break;
        }

        let ctx = this.ctx;
        ctx.save();
        if (this.mousePos.x < (this.canvas.width - tooltipWidth))
            ctx.translate(this.mousePos.x, this.mousePos.y);
        else
            ctx.translate(this.mousePos.x - tooltipWidth, this.mousePos.y);

        ctx.fillStyle = "rgba(200, 200, 200, 0.3)";
        ctx.strokeStyle = "rgba(153, 153, 153)";
        ctx.beginPath();
        ctx.rect(10, 0, tooltipWidth, tooltipHeight);
        ctx.fill();
        ctx.stroke()

        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.font = "11px OpenSans, sanserif";

        let xText = 12;
        ctx.fillText(this.selectedFilter.type, 15, xText);
        xText += 13;

        ctx.fillText(this.selectedFilter.frequency.value.toFixed(0) + "Hz", 15, xText);
        xText += 13;

        if (displayGain) {
            ctx.fillText(this.selectedFilter.gain.value.toFixed(0) + "dB/Oct", 15, 38);
            xText += 13;
        }

        if (displayQ)
            ctx.fillText(this.selectedFilter.Q.value.toFixed(3), 15, xText);

        ctx.restore();
    }
    getFontSizeDependingOnWidth() {
        return this.width / 45;
    }
    getFontSizeDependingOnHeight() {
        return this.height / 35;
    }

    drawGrid() {
        let ctx = this.ctx;

        ctx.save();
        let fontSize = this.getFontSizeDependingOnWidth();

        ctx.beginPath();

        ctx.lineWidth = 1;

        ctx.font = "300 " + fontSize + 'px  OpenSans, sans-serif';

        // Draw frequency scale.
        for (let octave = 0; octave <= this.noctaves; octave++) {
            let x = octave * this.width / this.noctaves;

            ctx.strokeStyle = this.gridColor;
            ctx.moveTo(x, 30);
            ctx.lineTo(x, this.height);
            ctx.stroke();

            let f = this.nyquist * Math.pow(2.0, octave - this.noctaves);
            let value = f.toFixed(0);
            let unit = 'Hz';

            if (f > 1000) {
                unit = 'KHz';
                value = (f / 1000).toFixed(1);
            }

            ctx.textAlign = "center";
            ctx.fillStyle = this.textColor;
            ctx.fillText(value + unit, x, 20);
        }

        // Draw 0dB line.
        fontSize = this.getFontSizeDependingOnHeight();
        ctx.font = "300 " + fontSize + 'px  OpenSans, sans-serif';

        ctx.beginPath();
        ctx.moveTo(0, 0.5 * this.height);
        ctx.lineTo(this.width, 0.5 * this.height);
        ctx.stroke();

        // Draw decibel scale.
        let dbIncrement = this.dbScale * 10 / 60;
        for (let db = -this.dbScale; db < this.dbScale; db += dbIncrement) {
            let y = this.dbToY(db);
            ctx.fillStyle = this.textColor;
            ctx.fillText(db.toFixed(0) + "dB", this.width - this.width / 25, y);
            ctx.strokeStyle = this.gridColor;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.width, y);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawFilterCurves(filt) {
        let frequencyHz = new Float32Array(this.canvas.width);
        let magResponse = new Float32Array(this.canvas.width);
        let phaseResponse = new Float32Array(this.canvas.width);
        let ctx = this.ctx;

        ctx.save();
        ctx.globalAlpha = 0.3
        ctx.strokeStyle = "white";
        ctx.fillStyle = filt.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);

        // First get response.
        for (let i = 0; i < this.width; i++) {
            let f = i / this.width;

            // Convert to log frequency scale (octaves).
            f = this.nyquist * Math.pow(2.0, this.noctaves * (f - 1.0));

            frequencyHz[i] = f;
        }
        filt.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        /*
      var magResponseOfFilter = new Float32Array(width);
      filt.getFrequencyResponse(frequencyHz, magResponseOfFilter, phaseResponse);
      // sum it to magResponse
      for(var l = 0; l < width; l++) {
        magResponse[l] = magResponseOfFilter[l];
      }
      */


        // Draw filters curves
        for (let i = 0; i < this.width; i++) {
            let f = magResponse[i];
            let response = magResponse[i];
            let dbResponse = 2 * (10.0 * Math.log(response) / Math.LN10);

            let x = i;
            let y = this.dbToY(dbResponse);

            // curve that sums all filter responses
            this.sumCurveParallel[x] += response;
            this.sumCurveSerie[x] += dbResponse;

            if (i === 0)
                ctx.moveTo(x, y);
            else
                ctx.lineTo(x, y);
        }
        //ctx.lineTo(this.width, this.height);
        ctx.lineTo(this.width, this.height / 2);
        ctx.lineTo(0, this.height / 2);

        ctx.fill();
        //ctx.stroke();

        ctx.restore();
    }

    drawControlPoint(filter) {
        let q = filter.Q.value; // unit = db
        let f = filter.frequency.value;
        let gain = filter.gain.value;

        let x, y;

        x = this.fToX(f);
        switch (filter.type) {
            case "lowpass":
            case "highpass":
                y = this.dbToY(q);
                break;
            case "lowshelf":
            case "highshelf":
                y = this.dbToY(gain / 2);
                break;
            case "peaking":
                y = this.dbToY(gain);
                break;
            case "notch":
            case "bandpass":
                if (q > 0.16) {
                    y = this.dbToY(q);
                }
                break;
        }

        filter.controlPoint = {
            x: x,
            y: y,
        }

        this.drawControlPointAsColoredCircle(x, y, filter.color)
    }

    drawControlPointAsColoredCircle(x, y, color) {
        let ctx = this.ctx;

        ctx.save();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x + 1, y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    drawSumOfAllFilterCurveParallel() {
        // BUGGED SHOULD BE FIXED, WRONG FORMULA... 
        //console.log("draw sum")
        let ctx = this.ctx;

        ctx.save();
        ctx.strokeStyle = "red";
        ctx.beginPath();
        for (let x = 0; x < this.width; x++) {
            //let y = this.dbToY(0) - 
            let response = this.sumCurveParallel[x];
            let dbResponse = 10.0 * Math.log(response) / Math.LN10;
            let y = this.dbToY(dbResponse);

            //drawControlPointAsColoredCircle(x, y, "red");
            if (y !== NaN) {
                if (x === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            //console.log("x = " + x + " y = " + y)
        }
        ctx.stroke();
        ctx.restore();
    }

    drawSumOfAllFilterCurveSerie() {
        //console.log("draw sum")
        let ctx = this.ctx;

        ctx.save();
        ctx.strokeStyle = "white";
        ctx.beginPath();
        for (let x = 0; x < this.width; x++) {
            //let y = this.dbToY(0) - 
            let dbResponse = this.sumCurveSerie[x];
            let y = this.dbToY(dbResponse);

            //drawControlPointAsColoredCircle(x, y, "red");
            if (y !== NaN) {
                if (x === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            //console.log("x = " + x + " y = " + y)
        }
        ctx.stroke();
        ctx.restore();
    }

    getMagResponseSumOfFilters() {
        this.filters.forEach((f) => {
            // f is the current filter
        })

    }

    findClosestFilterControlPoint(x, y) {
        for (let i = 0; i < this.filters.length; i++) {
            let f = this.filters[i];
            let cp = f.controlPoint;
            if (this.distance(x, y, cp.x, cp.y) < 5) {
                // mouse cursor is over a control point
                return f;
            }
        };
        return null;
    }

    changeFilterParameters(filter, x, y, shiftPressed, dy) {
        // x = frequency, y = Db
        let db = this.yToDb(y);
        let f = this.xToF(x);
        //console.log("f = " + f + " db = " + db);

        filter.frequency.value = f;

        switch (filter.type) {
            case "lowpass":
            case "highpass":
                filter.Q.value = db;
                this.draw();
                break;
            case "lowshelf":
            case "highshelf":
                filter.gain.value = 2 * db;
                this.draw();
                break;
            case "peaking":
                if (!shiftPressed)
                    filter.gain.value = db;
                else {
                    filter.Q.value = this.dyToQ(dy);
                }
                this.draw();
                break;
            case "notch":
                if (!shiftPressed)
                    filter.gain.value = db;
                else {
                    filter.Q.value = this.dyToQ(dy);
                }
                this.draw();
                break;
            case "bandpass":
                if (db >= 0.16)
                    filter.Q.value = db;
                this.draw();
                break;
        }
    }
    // -------------
    // utils methods
    // -------------
    // get Q from mouse dy movement
    // dy positive = click and drag down the control point
    // Q must be between 1 and 0
    // dy negative Q will vary between 1 and 15
    dyToQ(dy) {
        let q;
        if (dy < 0) {
            q = this.map(dy, 0, -100, this.selectedFilter.originalQValue, 0.1);
        } else {
            q = this.map(dy, 0, 100, this.selectedFilter.originalQValue, 15);
        }
        return q;
    }

    // distance between two points
    distance(x1, y1, x2, y2) {
        let dx = x1 - x2;
        let dy = y1 - y2;

        return Math.sqrt(dx * dx + dy * dy);
    }

    map(value, istart, istop, ostart, ostop) {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }

    fToX(f) {
        // logarithmic scale
        var logf = Math.log2(f);
        var logmaxf = Math.log2(this.nyquist); // 24Khz for 11 octaves at 48Khz
        var logminf = Math.log2(10);      // min freq value in our graphic
        var x = this.map(logf, logminf, logmaxf, -this.width / 50, this.width);

        return x;
    }

    xToF(x) {
        // x corresponds to a freq in log scale
        // logarithmic scale
        var logmaxf = Math.log2(this.nyquist); // 24Khz for 11 octaves at 48Khz
        var logminf = Math.log2(10);      // min freq value in our graphic
        var flog = this.map(x, -this.width / 50, this.width, logminf, logmaxf);
        return Math.pow(2, flog); // reverse of a log function is 2^logf
    }

    dbToY(db) {
        var y = (0.5 * this.height) - this.pixelsPerDb * db;
        return y;
    };

    yToDb(y) {
        var db = ((0.5 * this.height) - y) / this.pixelsPerDb;
        return db;
    };
}


//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiEqualizer = class WasabiEqualizer extends WebAudioPluginFactory {
	constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new Equalizer(this, options); };


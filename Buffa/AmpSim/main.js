/*  ################################## Ampsim wc ########################################  */

// INITS
var audioPlayer;
var amp, ampView, ampCtrl;
var analyzerAtInput, analyzerAtOutput;
var convolverSlider, convolverCabinetSlider;
var guitarInput;


//------------------------- Presets --------------------------------

// Can be converted to JSON

var preset1 = {"name":"Hard Rock classic 1","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":-5,"gain1":1,"distoName1":"asymetric","K1":"7.8",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"notSoDistorded","K2":"7.8","OG":"7.0","BF":"8.2","MF":"8.2","TF":"3.8","PF":"6.9",
    "EQ":[5,11,-6,-10,7,2],"MV":"7.2","RN":"Fender Hot Rod","RG":"2.0","CN":"Marshall 1960, axis","CG":"9.4"};

var preset2 = {"name":"Clean and Warm","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":1.600000023841858,"gain1":1,"distoName1":"asymetric","K1":"7.8",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"standard","K2":"0.9","OG":"7.0","BF":"6.7","MF":"7.1","TF":"3.2","PF":"6.9",
    "EQ":[10,5,-7,-7,12,0],"MV":"7.2","RN":"Fender Hot Rod","RG":"1.4","CN":"Marshall 1960, axis","CG":"8.8"};

var preset3 = {"name":"Strong and Warm","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":-1,"gain1":1.0299999713897705,"distoName1":"asymetric","K1":"7.8",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"superClean","K2":"7.8","OG":"7.0","BF":"8.2","MF":"6.7","TF":"5.0","PF":"6.9",
    "EQ":[0,0,0,-1,0,1],"MV":"5.9","RN":"Fender Hot Rod","RG":"1.1","CN":"Vox Custom Bright 4x12 M930 Axis 1","CG":"8.0"};

//preset4 = {"name":"Fat sound","boost":true,"LS1Freq":720,"LS1Gain":-5.800000190734863,"LS2Freq":320,"LS2Gain":6.599999904632568,"gain1":0.11999999731779099,"distoName1":"asymetric","K1":"5.4",
//"HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-5.199999809265137,"gain2":1,"distoName2":"standard","K2":"5.4","OG":"3.5","BF":"3.2","MF":"5.0","TF":"5.0","PF":"9.7",
//"EQ":[1,0,-6,-8,-6,-30],"MV":"3.1","RN":"Fender Hot Rod","RG":"0.0","CN":"Marshall 1960, axis","CG":"3.4"};

var preset4 = {"name":"Clean no reverb","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":-6.300000190734863,"gain1":1,"distoName1":"asymetric","K1":"2.1",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"crunch","K2":"2.1","OG":"7.0","BF":"6.7","MF":"5.0","TF":"5.0","PF":"8.9",
    "EQ":[4,12,-8,-8,12,12],"MV":"3.7","RN":"Fender Hot Rod","RG":"0.0","CN":"Marshall 1960, axis","CG":"4.5"};

var preset5 = {"name":"Another Clean Sound","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":-6.300000190734863,"gain1":1,"distoName1":"asymetric","K1":"6.4",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"crunch","K2":"6.4","OG":"7.0","BF":"6.7","MF":"5.0","TF":"5.0","PF":"8.9",
    "EQ":[4,12,-8,-8,12,12],"MV":"3.7","RN":"Fender Hot Rod","RG":"2","CN":"Marshall 1960, axis","CG":"4.5"};

var preset6 = {"name":"Mostly even harmonics","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":-7.5,"gain1":1,"distoName1":"standard","K1":"6.7",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"standard","K2":"6.7","OG":"7.0","BF":"4.3","MF":"2.6","TF":"6.1","PF":"4.2",
    "EQ":[5,12,-5,-10,2,10],"MV":"1.7","RN":"Fender Hot Rod","RG":"0.0","CN":"Vintage Marshall 1","CG":"8.4"};

var preset7 = {"name":"Hard Rock classic 2","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":-10.199999809265137,"gain1":1,"distoName1":"standard","K1":"5.2",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"notSoDistorded","K2":"5.1","OG":"7.0","BF":"8.7","MF":"8.0","TF":"3.8","PF":"9.4",
    "EQ":[12,8,-6,-10,7,2],"MV":"5.5","RN":"Fender Hot Rod","RG":"0.7","CN":"Marshall 1960, axis","CG":"9.2"};

var preset8 = {"name":"SuperClean/Jazz","boost":false,"LS1Freq":720,"LS1Gain":-6,"LS2Freq":320,"LS2Gain":-6.300000190734863,"gain1":1,"distoName1":"crunch","K1":"5.4",
    "HP1Freq":6,"HP1Q":0.707099974155426,"LS3Freq":720,"LS3Gain":-6,"gain2":1,"distoName2":"crunch","K2":"5.4","OG":"7.0","BF":"7.0","MF":"5.1","TF":"5.2","PF":"3.1",
    "EQ":[10,7,0,-10,5,12],"MV":"3.8","RN":"Fender Hot Rod","RG":"1.5","CN":"Marshall 1960, axis","CG":"4.5"};




// -------------------------- Impulses ------------------------------
// Can be converted to JSON

var reverbImpulses = [
  {
      name: "Fender Hot Rod",
      url: "../Buffa/AmpSim/assets/impulses/reverb/cardiod-rear-levelled.wav"
  },
  {
      name: "PCM 90 clean plate",
      url: "../Buffa/AmpSim/assets/impulses/reverb/pcm90cleanplate.wav"
  },
  {
      name: "Scala de Milan",
      url: "../Buffa/AmpSim/assets/impulses/reverb/ScalaMilanOperaHall.wav"
  }
];

var cabinetImpulses = [
  {
      name: "Marshall 1960, axis",
      url: "../Buffa/AmpSim/assets/impulses/cabinet/Marshall1960.wav"
  },    
  {
      name: "Vintage Marshall 1",
      url: "../Buffa/AmpSim/assets/impulses/cabinet/Block%20Inside.wav"
  },
  {
      name: "Vox Custom Bright 4x12 M930 Axis 1",
      url: "../Buffa/AmpSim/assets/impulses/cabinet/voxCustomBrightM930OnAxis1.wav"
  },
  {
      name: "Fender Champ, axis",
      url: "../Buffa/AmpSim/assets/impulses/cabinet/FenderChampAxisStereo.wav"
  }
];



//----------- EQUALIZER ----------- 
function Equalizer(ctx) {
  var filters = [];

  // Set filters
  // Fred: 80 for the low end. 10000 useless, use shelf instead...
  [60, 170, 350, 1000, 3500, 10000].forEach(function (freq, i) {
      var eq = ctx.createBiquadFilter();
      eq.frequency.value = freq;
      eq.type = "peaking";
      eq.gain.value = 0;
      filters.push(eq);
  });

  // Connect filters in serie
  //sourceNode.connect(filters[0]);

  for (var i = 0; i < filters.length - 1; i++) {
      filters[i].connect(filters[i + 1]);
  }

  // Connect the last filter to the speakers
  //filters[filters.length - 1].connect(ctx.destination);

  function changeGainEQ(sliderVal, numFilter) {
      // sliderVal in [-12, +12]
      var value = parseFloat(sliderVal);
      filters[numFilter].gain.value = value;
  }

  function getValues() {
      var values = [];
      filters.forEach(function (f, index) {
          values.push(f.gain.value);
      });
      return values;
  }

  return {
      input: filters[0],
      output: filters[filters.length - 1],
      getValues: getValues,
      changeGainEQ: changeGainEQ
  };
}




// ------- CONVOLVER, used for both reverb and cabinet simulation -------
function Convolver(context, impulses, menuId) {
  var convolverNode, convolverGain, directGain;
  // create source and gain node
  var inputGain = context.createGain();
  var outputGain = context.createGain();
  var decodedImpulse;

  var IRs = impulses;

  var currentImpulse = IRs[0];
  var defaultImpulseURL = IRs[0].url;

  convolverNode = context.createConvolver();
  convolverNode.buffer = decodedImpulse;

  convolverGain = context.createGain();
  convolverGain.gain.value = 0;

  directGain = context.createGain();
  directGain.gain.value = 1;

  buildAudioGraphConvolver();
  setGain(0.2);
  // Necessary ? done in setPreset
  loadImpulseByUrl(defaultImpulseURL);

  function loadImpulseByUrl(url) {
      // Load default impulse
      const samples = Promise.all([loadSample(context,url)]).then(setImpulse);
  }

  function loadImpulseFromMenu(val) {
      var url = IRs[val].url;
      currentImpulse = IRs[val];
      console.log("loadImpulseFromMenu loading " + currentImpulse.name);
      loadImpulseByUrl(url);
  }

  function getImpulseUrlAndIndex(name) {
      var url = "none";
      var impulseIndex;
      // get url corresponding to name
      for (var i = 0; i < IRs.length; i++) {
          if (IRs[i].name === name) {
              url = IRs[i].url;
              currentImpulse = IRs[i];
              impulseIndex = i;
              break;
          }
      }

      return [url, impulseIndex];
  }

  function setImpulse(param) {
   // we get here only when the impulse is loaded and decoded
      console.log("impulse loaded and decoded");
      convolverNode.buffer = param[0];
      console.log("convolverNode.buffer set with the new impulse (loaded and decoded");
  }

  function buildAudioGraphConvolver() {
      // direct/dry route source -> directGain -> destination
      inputGain.connect(directGain);
      directGain.connect(outputGain);

      // wet route with convolver: source -> convolver 
      // -> convolverGain -> destination
      inputGain.connect(convolverNode);
      convolverNode.connect(convolverGain);
      convolverGain.connect(outputGain);
  }

  function setGain(value) {
      var v1 = Math.cos(value * Math.PI / 2);
      var v2 = Math.cos((1 - value) * Math.PI / 2);

      directGain.gain.value = v1;
      convolverGain.gain.value = v2;
  }

  function getGain() {
      return 2 * Math.acos(directGain.gain.value) / Math.PI;
  }

  function getName() {
      return currentImpulse.name;
  }

  //--------------------------------------
  // API : exposed methods and properties
  // -------------------------------------
  return {
      input: inputGain,
      output: outputGain,
      IRs: IRs, 
      setGain: setGain,
      getGain: getGain,
      getName: getName,
      loadImpulseFromMenu: loadImpulseFromMenu,
      loadImpulseByUrl: loadImpulseByUrl,
      getImpulseUrlAndIndex: getImpulseUrlAndIndex
  };
}


//------------------------------------------------------- PREAMP ------------------------------------------------

class PreAmp {

	constructor(context) {
		// Model not used here but can be used to adjust
		// the values according to model/brand

    this.context = context;        
        // To handle distortion
        this.DRAWER_CANVAS_SIZE = 100;
       
        this.wsFactory = new WaveShapers();
        this.currentDistoName = "standard";
        this.currentK = 2; // global K, max of the other two
        this.currentWSCurve = this.wsFactory.distorsionCurves[this.currentDistoName](this.currentK);
        this.k = [2, 2, 2, 2]; // array of k initial values
        this.biasValue = [7.8, 7.8, 7.8, 7.8]; // array of bias initial values
        this.od = [];
        this.distoTypes = ['asymetric', 'standard'];   
		this.bezierPoints = [[{x: 0, y: 100},{x: 50, y: 100},{x: 50, y: 0},{x: 100, y: 0}], [{x: 0, y: 100},{x: 50, y: 100},{x: 50, y: 0},{x: 100, y: 0}]];
        this.angle = 2.1963;
        this.oldAngle = undefined;
        this.initialP1 = {x: 50, y: 100};
        this.initialP2 = {x: 50, y: 0};
        this.previousNode = [];
	}

    createBoost() {
        this.boost = new Boost(this.context);
    }

    createDisto(type) {
        switch (type) {
            case "disto1" :
                // Distorsion 1, here we should use an asymetric function in order to 
                // generate odd harmonics
                this.od[0] = this.context.createWaveShaper();
                this.od[0].curve = this.wsFactory.distorsionCurves[this.distoTypes[0]](0);
                break;
            case "disto2" :
                // Distorsion 2, symetric function to generate even harmonics
                this.od[1] = this.context.createWaveShaper();
                this.od[1].curve = this.wsFactory.distorsionCurves[this.distoTypes[1]](0);
                this.beforeOutputGain = this.od[1];
                break;
        }

    }

    createGain(type) {
        switch (type) {
            case "stage1" :
                this.preampStage1Gain = this.context.createGain();
                this.preampStage1Gain.gain.value = 1.0;
                break;
            case "stage2" :
                this.preampStage2Gain = this.context.createGain();   
                this.preampStage2Gain.gain.value = 1.0;
                break;
        }

    }

    createFilter(type) {  
        switch (type) {
            case "lowshelf1" :
                // Low shelf cut -6db at 720Hz
                this.lowShelf1 = this.context.createBiquadFilter();
                this.lowShelf1.type = "lowshelf";
                this.lowShelf1.frequency.value = 720;
                this.lowShelf1.gain.value = -6;
                break;
            case "lowshelf2" :
                // Low shelf cut variable wired to volume knob
                // if vol = 50%, then filter at -6db, 320Hz
                // shoud go from -4db to -6db for +/- fatness
                this.lowShelf2 = this.context.createBiquadFilter();
                this.lowShelf2.type = "lowshelf";    
                this.lowShelf2.frequency.value = 320;
                this.lowShelf2.gain.value = -5;
                break;
            case "lowshelf3" :
                // lowshelf cut -6db 720Hz
                this.lowShelf3 = this.context.createBiquadFilter();
                this.lowShelf3.type = "lowshelf";    
                this.lowShelf3.frequency.value = 720;
                this.lowShelf3.gain.value = -6;
                break;
            case "highpass1" :
                // HighPass at 7-8 Hz, rectify the signal that got a DC value due
                // to the possible asymetric transfer function
                this.highPass1 = this.context.createBiquadFilter();
                this.highPass1.type = "highpass";    
                this.highPass1.frequency.value = 6;
                this.highPass1.Q.value = 0.7071;
                break;
        }

    }

    //
    // Distortion-related functions
    //

    changeDistorsionValuesPA(sliderValue, numDisto) {
        // sliderValue is in [0, 10] range, adjust to [0, 1500] range  
        var value = 150 * parseFloat(sliderValue);
        var minp = 0;
        var maxp = 1500;

        // The result should be between 10 an 1500
        var minv = Math.log(10);
        var maxv = Math.log(1500);

        // calculate adjustment factor
        var scale = (maxv - minv) / (maxp - minp);

        value = Math.exp(minv + scale * (value - minp));
        // end of logarithmic adjustment

        if (this.distoTypes[numDisto] == "bezier") {
            this.od[numDisto].curve = this.wsFactory.distorsionCurves[this.distoTypes[numDisto]](this.bezierPoints, numDisto);
            this.currentWSCurve = this.od[numDisto].curve;
        } else {
            this.k[numDisto] = value;
            //console.log("k = " + value + " pos = " + logToPos(value));
            //console.log("distoTypes = " + distoTypes[numDisto]);
            this.od[numDisto].curve = this.wsFactory.distorsionCurves[this.distoTypes[numDisto]](this.k[numDisto]); //makeDistortionCurve(k[numDisto]);
            this.currentWSCurve = this.od[numDisto].curve;
            //od[numDisto].curve = makeDistortionCurve(sliderValue);
            //makeDistortionCurve(k[numDisto]);
            //od[numDisto].curve = makeDistortionCurve(sliderValue);
        }

        var maxPosVal1 = Math.max(logToPos(this.k[2]), logToPos(this.k[3]));
        var maxPosVal2 = Math.max(logToPos(this.k[0]), logToPos(this.k[1]));
        var maxPosVal = Math.max(maxPosVal1, maxPosVal2);
        //var maxPosVal = Math.max(logToPos(k[2]), logToPos(k[3]));
        this.currentK = parseFloat(maxPosVal).toFixed(1);

        // redraw curves
        this.drawCurrentDistos();
    }

    // Just update and redraw
    changeBezierValuesPA(sliderValue, numDisto, bezier) {
        this.od[numDisto].curve = this.wsFactory.distorsionCurves[this.distoTypes[numDisto]](this.bezierPoints, numDisto);
        this.currentWSCurve = this.od[numDisto].curve;
        // update bias value of channel
        this.biasValue[numDisto] = sliderValue;
        // update curve bias value
        this.changeBiasPA(sliderValue, numDisto);
        // redraw curves
        this.drawCurrentDistos();
    }

    returnCurve(numCurve) {
       var p0 = this.bezierPoints[numCurve][0];
       var p1 = this.bezierPoints[numCurve][1];
       var p2 = this.bezierPoints[numCurve][2];
       var p3 = this.bezierPoints[numCurve][3];
       var n_samples = 44100;
       var accuracy = 1/n_samples,
       curve = new Float32Array(n_samples),
       index = 0;
       curve[index++] = map(p0.y, 0, 100, -1, 1);
      
      for (var i=0; i<1; i+=accuracy){
        var p = this.bezier(i, p0, p1, p2, p3);
        curve[index++] = map(p.y, 0, 100, -1, 1);
      }
      return curve;
    }

    getLinearPartAngle(numCurve) {
      var curve = this.returnCurve(numCurve);
      console.log("nb points = " + curve.length);
      var midPointIndex = Math.abs(curve.length/2);
      
      for (var i = 0; i < curve.length; i+=100) {
        var p1X = map(i, 0, curve.length, -1, 1);
        var p1Y = curve[i];
        var p2X = map(i+1, 0, curve.length, -1, 1);
        var p2Y = curve[i+1];
      
         //console.log(`P1x = ${p1X} + P1Y = ${p1Y}`);
        //console.log(`P2x = ${p2X} + P2Y = ${p2Y}`);
         
        var dx = p1X - p2X;
        var dy = p1Y - p2Y;
        var angle = Math.atan2(dy, dx);
        
       // console.log(angle + " / " + oldAngle)
        if (this.oldAngle !== undefined) {
            if (angle === this.oldAngle) {
                console.log("angle radians = " + angle + " en deg " + 180*angle/Math.PI);

                return angle;
            }
        }
        this.oldAngle = angle;
      }
      return angle;
    }

    bezier(t, p0, p1, p2, p3){
        var cX = 3 * (p1.x - p0.x),
            bX = 3 * (p2.x - p1.x) - cX,
            aX = p3.x - p0.x - cX - bX;
                
        var cY = 3 * (p1.y - p0.y),
            bY = 3 * (p2.y - p1.y) - cY,
            aY = p3.y - p0.y - cY - bY;
                
        var x = (aX * Math.pow(t, 3)) + 
                  (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
        var y = (aY * Math.pow(t, 3)) + 
                  (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
                
        return {x: x, y: y};
    }

    changeBiasP2(val, numCurve) {
        val = parseFloat(val);
        // On ne déplace que P2 le long de la pente donnée par angle
        // (angle de la partie linéaire)
        var incX = val*Math.cos(this.angle);
        var incY = val*Math.sin(this.angle);
        this.bezierPoints[numCurve][2].x = this.initialP2.x + incX;
        this.bezierPoints[numCurve][2].y = this.initialP2.y + incY; 
    }

    changeBiasP1(val, numCurve) {
        val = parseFloat(val);
        // On ne déplace que P1 le long de la pente donnée par angle
        // (angle de la partie linéaire)
        var incX = val*Math.cos(this.angle);
        var incY = val*Math.sin(this.angle);
        this.bezierPoints[numCurve][1].x = this.initialP1.x - incX;
        this.bezierPoints[numCurve][1].y = this.initialP1.y - incY; 
    }

    changeBiasPA(val, numCurve) {
        val = parseFloat(val);
        var k1 = map(val, 0, 10, 100, 0);
        this.changeBiasX(k1, numCurve);
        var k2 = map(val, 0, 10, 0, 100);
        this.changeBiasY(k2, numCurve);
    }

    changeBiasX(val, numCurve) {
        val = parseFloat(val);
        this.bezierPoints[numCurve][2].y = val;
        this.initialP2.y = val;
    } 

    changeBiasY(val, numCurve) {
        val = parseFloat(val);
        this.bezierPoints[numCurve][1].y = val;
        this.initialP1.y = val;
    }

    // Returns an array of distorsions values in [0, 10] range
    getDistorsionValue(numChannel) {
        var pos = logToPos(this.k[numChannel]);
        return parseFloat(pos).toFixed(1);
    }

    // Returns an array of bias values in [0, 10] range
    getBiasValue(numChannel) {
        var bias = this.biasValue[numChannel];
        return parseFloat(bias).toFixed(1);
    }

    drawCurrentDistos() {
        // draws both the transfer function and a sinusoidal
        // signal transformed, for each distorsion stage
        this.drawDistoCurves(this.distoDrawer1, this.signalDrawer1, this.od[0].curve, 0);
        this.drawDistoCurves(this.distoDrawer2, this.signalDrawer2, this.od[1].curve, 1);
    }

    drawDistoCurves(distoDrawer, signalDrawer, curve, curveNumber) {
        var c = curve;
        distoDrawer.clear();
		// Draw control points and line only for bezier curve.
		if(this.distoTypes[curveNumber] == "bezier") {
			var p1 = this.bezierPoints[curveNumber][1];
			var	p2 = this.bezierPoints[curveNumber][2];
			// bias point
  			var biasPoint = {
				x: (p1.x + p2.x) / 2,
				y: (p1.y + p2.y) / 2,
			}
			distoDrawer.drawControlPoint(biasPoint);
			distoDrawer.drawControlPoint(p1);
			distoDrawer.drawControlPoint(p2);
			//distoDrawer.drawLine(p1, p2);
		}
        drawCurve(distoDrawer, c);

        // draw signal
        signalDrawer.clear();
        signalDrawer.drawAxis();
        signalDrawer.makeCurve(Math.sin, 0, Math.PI * 2);
        signalDrawer.drawCurve('red', 2);

        //signalDrawer.makeCurve(distord, 0, Math.PI*2);
        var cTransformed = this.distord(c);
        drawCurve(signalDrawer, cTransformed);

    }

    distord(c) {
        // return the curve of sin(x) transformed by the current wave shaper
        // function
        // x is in [0, 2*Math.PI]
        // sin(x) in [-1, 1]

        var c2 = new Float32Array(this.DRAWER_CANVAS_SIZE);
        // sin(x) -> ?
        // [-1, 1] -> [0, length -1]

        // 100 is the canvas size.
        var incX = 2 * Math.PI / this.DRAWER_CANVAS_SIZE;
        var x = 0;
        for (var i = 0; i < this.DRAWER_CANVAS_SIZE; i++) {
            var index = map(Math.sin(x), -1, 1, 0, c.length - 1);
            c2[i] = c[Math.round(index)];
            x += incX;
        }
        return c2;
    }

    makeDistortionCurve(k) {
        // compute a new ws curve for current disto name and current k
        this.currentWSCurve = this.wsFactory.distorsionCurves[this.currentDistoName](k);
        return this.currentWSCurve;
    }

    changeDisto1TypePA(name) {
        this.currentDistoName = name;   
        this.distoTypes[0] = name;
    }

    changeDisto2TypePA(name) {
        this.currentDistoName = name;   
        this.distoTypes[1] = name;
    }

    changeDisto1TypeFromPreset(name) {
        this.currentDistoName = name;
        this.distoTypes[0] = this.currentDistoName;
        //changeDrive(currentK);
    }

    changeDisto2TypeFromPreset(name) {
        this.currentDistoName = name;
        this.distoTypes[1] = this.currentDistoName;
        //changeDrive(currentK);
    }

    //
    // Gain-related functions
    //

    changePreampStage1GainValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.preampStage1Gain.gain.value = value;
    }

    changePreampStage2GainValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.preampStage2Gain.gain.value = value;
    }

    //
    // Filter-related functions
    //

    changeLowShelf1FrequencyValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.lowShelf1.frequency.value = value;
        //console.log("Freq value : " + value)
    }

    changeLowShelf1GainValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.lowShelf1.gain.value = value;
        //console.log("Gain value : " + value)
    }

    changeLowShelf2FrequencyValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.lowShelf2.frequency.value = value;
        //console.log("lowshelf 2 freq = " + value);
    }

    changeLowShelf2GainValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.lowShelf2.gain.value = value;
        //console.log("lowshelf 2 gain = " + value);
    }

    changeLowShelf3FrequencyValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.lowShelf3.frequency.value = value;
    }

    changeLowShelf3GainValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.lowShelf3.gain.value = value;
    }

    changeHighPass1FrequencyValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.highPass1.frequency.value = value;
    }

    changeHighPass1QValuePA(sliderVal) {
        var value = parseFloat(sliderVal);
        this.highPass1.Q.value = value;
    }

    //
    // Boost-related functions
    //

    adjustOutputGainIfBoostActivated() {
        //console.log("adjustOutputGainIfBoostActivated: output gain value before = " + amp.output.gain.value)

        if(this.boost.isActivated()) {
            amp.output.gain.value /= 2;
        } else {
            amp.output.gain.value *= 2;
        }
        //console.log("adjustOutputGainIfBoostActivated: output gain value after = " + amp.output.gain.value)
    }

    highlightValues(label,kvalue) {
        label.style.fontWeight="bold";
        label.style.color="blue";
        kvalue.style.fontWeight="bold";
        kvalue.style.color="blue";
    }

    hideValues(label,kvalue) {
        label.style.fontWeight="normal";
        label.style.color="black";
        kvalue.style.fontWeight="normal";
        kvalue.style.color="black";
    }

    //
    // Experimental functions
    //

    addNewLamps(type, num) {
        // Creates a new waveshapper 
        // We store at num + 1 to not interfere with the max drive button algorithm
        this.od[num + 1] = this.context.createWaveShaper();
        // 498 is the empirical value for slider = 7.8
        this.od[num + 1].curve = this.wsFactory.distorsionCurves[type](498.1397311910594);
        this.distoTypes[num + 1] = type;

        // Creates a new highpass
        var highPassNew = this.context.createBiquadFilter();
        highPassNew.type = "highpass";    
        highPassNew.frequency.value = 6;
        highPassNew.Q.value = 0.7071;

        // Creates a new lowshelf
        var lowShelfNew  = this.context.createBiquadFilter();
        lowShelfNew.type = "lowshelf";
        lowShelfNew.frequency.value = 720;
        lowShelfNew.gain.value = -6;

        // Creates a control gain at the end
        var ctrlGain = this.context.createGain();
        ctrlGain.gain.value = 1.0;

        this.addToGraph(this.od[num + 1], highPassNew, lowShelfNew, ctrlGain)
    }

    addToGraph(newWs, newHp, newLs, newG) {
        this.beforeOutputGain.disconnect(amp.outputGain);
        this.beforeOutputGain.connect(newWs);
        newWs.connect(newHp);
        newHp.connect(newLs);
        newLs.connect(newG);
        newG.connect(amp.outputGain);
        this.previousNode.push(this.beforeOutputGain);
        this.beforeOutputGain = newG;
    }

    removeLastLamp(num) {
        var previousDisto = 1;
        // The previous lamp is of index 1 for the first lamp,
        // but num - 1 for the rest because of the initial array
        if (num > 2) {
            previousDisto = num + 1;
        }

        this.previousNode[this.previousNode.length - 1].disconnect(this.od[num+2]);
        this.beforeOutputGain.disconnect(amp.outputGain);
        this.previousNode[this.previousNode.length - 1].connect(amp.outputGain);
        this.beforeOutputGain = this.previousNode[this.previousNode.length - 1];
        this.previousNode.pop();
    }

}

// Booster, useful to add a "Boost channel"
var Boost = function(context) {
    // Booster not activated by default
    var activated = false;

    var input = context.createGain();
    var inputGain = context.createGain();
    inputGain.gain.value = 0;
    var byPass = context.createGain();
    byPass.gain.value = 1;
    var filter = context.createBiquadFilter();
    filter.frequency.value = 3317;
    var shaper = context.createWaveShaper();
    shaper.curve = makeDistortionCurve(640);
    var outputGain = context.createGain();
    outputGain.gain.value = 2;
    var output = context.createGain();

    // build graph
    input.connect(inputGain);
    inputGain.connect(shaper);
    shaper.connect(filter);
    filter.connect(outputGain);
    outputGain.connect(output);

    // bypass route
    input.connect(byPass);
    byPass.connect(output);

    function isActivated() {
        return activated;
    }

    function onOff(wantedState) {
        if(wantedState === undefined) {
            // do not boost
            if(activated) toggle();
            return;
        }
        var currentState = activated;

        if(wantedState !== currentState) {
            toggle();
        }
    }

    function toggle() {
        if(!activated) {
            byPass.gain.value = 0;
            inputGain.gain.value = 1;
        } else {
            byPass.gain.value = 1;
            inputGain.gain.value = 0;
        }
        activated = !activated;
    }

    function setOversampling(value) {
        shaper.oversample = value;
        console.log("boost set oversampling to " + value);
    }

    function makeDistortionCurve(k) {
        var n_samples = 44100; //65536; //22050;     //44100
        var curve = new Float32Array(n_samples);
        var deg = Math.PI / 180;
        for (var i = 0; i < n_samples; i += 1) {
            var x = i * 2 / n_samples - 1;
            curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
        }
        return curve;
    }

    // API
    return {
        input: input,
        output: output,
        onOff: onOff,
        toggle: toggle,
        isActivated: isActivated,
        setOversampling: setOversampling
    };
};


//---------------------------------ToneStack ------------------------------------------------

class ToneStack {

	constructor(context) {
		// Model not used here but can be used to adjust
		// the values according to model/brand
		this.context = context;
	}

	createFilter(type) {
		switch (type) {
			case "bass" :
				this.bassFilter = this.context.createBiquadFilter();
			    this.bassFilter.frequency.value = 100;
			    this.bassFilter.type = "lowshelf";
			    this.bassFilter.Q.value = 0.7071;
				break;
			case "mid" :
			    this.midFilter = this.context.createBiquadFilter();
			    this.midFilter.frequency.value = 1700;
			    this.midFilter.type = "peaking";
			    this.midFilter.Q.value = 0.7071;
				break;
			case "treble" :
				this.trebleFilter = this.context.createBiquadFilter();
				this.trebleFilter.frequency.value = 6500;
				this.trebleFilter.type = "highshelf";
				this.trebleFilter.Q.value = 0.7071; // To check with Lepou
				break;
			case "presence" :
			    this.presenceFilter = this.context.createBiquadFilter();
			    this.presenceFilter.frequency.value = 3900;
			    this.presenceFilter.type = "peaking";
			    this.presenceFilter.Q.value = 0.7071;
				break;
		}

	}

    changeBassFilterValueTS(sliderVal) {
        // sliderVal is in [0, 10]
        var value = parseFloat(sliderVal);
        this.bassFilter.gain.value = (value-10) * 7;
        //console.log("bass gain set to " + this.bassFilter.gain.value);
    }

    changeMidFilterValueTS(sliderVal) {
        // sliderVal is in [0, 10]
        var value = parseFloat(sliderVal);
        this.midFilter.gain.value = (value-5) * 4;
    }

    changeTrebleFilterValueTS(sliderVal) {
        // sliderVal is in [0, 10]
        var value = parseFloat(sliderVal);
        this.trebleFilter.gain.value = (value-10) * 10;
    }

    changePresenceFilterValueTS(sliderVal) {
        // sliderVal is in [0, 10]
        var value = parseFloat(sliderVal);
        this.presenceFilter.gain.value = (value-5) * 2;
    }

}


//------------------------------- UTILS ------------------------------------

// maps a value from [istart, istop] into [ostart, ostop]
function map(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

// utils functions for some waveshapers
function tanh(n) {
  return (Math.exp(n) - Math.exp(-n)) / (Math.exp(n) + Math.exp(-n));
}

function sign(x) {
  if (x === 0) {
      return 1;
  } else {
      return Math.abs(x) / x;
  }
}

function logToPos(logValue) {
  var minp = 0;
  var maxp = 1500;

  // The result should be between 10 an 1500
  var minv = Math.log(10);
  var maxv = Math.log(1500);

  // calculate adjustment factor
  var scale = (maxv - minv) / (maxp - minp);

  return (minp + (Math.log(logValue) - minv) / scale) / 150;
}

// Loads a sample and decode it using ES6 new syntax
// returns a promise
function loadSample(audioContext, url){
        console.log('done');
  return new Promise(function(resolve, reject){
      fetch(url)
      .then((response) => {
          return response.arrayBuffer();
      })
      .then((buffer) =>{
          audioContext.decodeAudioData(buffer, (decodedAudioData) =>{
              resolve(decodedAudioData);
          });
      });
  });
}


//--------------------------------------- Distorsion factory ------------------------------------------

function WaveShapers() {
  var distorsionCurves = {};

  buildDistorsionFactories();

  function buildDistorsionFactories() {
      // all distorsion values in [0, 1500]

      // classic curve from WebAudio specification
      distorsionCurves.standard = function (distorsionValue) {
          var k = distorsionValue;
          var c = classicDistorsion(k);
          return c;
      };

      // classic curve variant from WebAudio specification
      distorsionCurves.standardLower = function (distorsionValue) {
          var k = distorsionValue;
          var c = classicDistorsion2(k);

          //var c1 = scaleCurve(c, 2, 2);
          return c;
      };

      distorsionCurves.smooth = function (distorsionValue) {
          var c = new Float32Array(44100);
          var kTuna = distorsionValue / 1500;
          smooth(kTuna, 44100, c);
          return c;
      };

      distorsionCurves.fuzz = function (distorsionValue) {
          var c = new Float32Array(44100);
          var kTuna = distorsionValue / 1500;
          fuzz(kTuna, 44100, c);
          return c;
      };

      distorsionCurves.clean = function (distorsionValue) {
          var c = new Float32Array(44100);
          var kTuna = distorsionValue / 1500;
          clean(kTuna, 44100, c);
          return c;
      };

      
      distorsionCurves.asymetric = function (distorsionValue) {
          var c = new Float32Array(44100);
          var kTuna = distorsionValue / 1500;
          asymetric(kTuna, 44100, c);
          return c;
      };
      
      // classic curve from WebAudio specification
      distorsionCurves.bezier = function (bezierPoints, numDisto) {
          var c = getBezierCurve(bezierPoints, numDisto);
          return c;
      };


      distorsionCurves.notSoDistorded = function (distorsionValue) {
          var k = distorsionValue / 150;
          var c = notSoDistorded(k);
          return c;
      };

      distorsionCurves.crunch = function (distorsionValue) {
          var k = distorsionValue / 150;
          var c = crunch(k);
          return c;
      };

      distorsionCurves.ClassA = function (distorsionValue) {
          var k = distorsionValue / 150;
          var c = classA(k);
          return c;
      };

      distorsionCurves.superClean = function (distorsionValue) {
          var k = distorsionValue / 150;
          var c = superClean(k);
          return c;
      };

      distorsionCurves.vertical = function (distorsionValue) {
          var k = distorsionValue / 150;
          var c = vertical(k);
          return c;
      };

      distorsionCurves.superFuzz = function (distorsionValue) {
          var k = distorsionValue / 150;
          var c = superFuzz(k);
          return c;
      };

      distorsionCurves.NoisyHiGain = function (distorsionValue) {
          var k = distorsionValue / 10;
          var c = NoisyHiGain(k);
          return c;
      };

      distorsionCurves.HiGainModern = function (distorsionValue) {
          var k = distorsionValue / 2;
          var c = HiGainModern(k);
          return c;
      };
  }
  
  // ----------------------------------
  // ---- wave shaping functions ------
  // ----------------------------------
  // Classic one
  function classicDistorsion(k) {
      var n_samples = 44100,
              curve = new Float32Array(n_samples),
              deg = Math.PI / 180, i = 0, x;

      for (; i < n_samples; ++i) {
          x = i * 2 / n_samples - 1;
          curve[i] = (3 + k) * x * 57 * deg / (Math.PI + k * Math.abs(x));
      }
      return curve;
  }

  function classicDistorsion2(k) {
      var n_samples = 44100,
              curve = new Float32Array(n_samples),
              deg = Math.PI / 180, i = 0, x;

      for (; i < n_samples; ++i) {
          x = i * 2 / n_samples - 1;
          curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
      }
      return curve;
  }

  // Tuna JS 1
  function smooth(amount, n_samples, ws_table) {
      amount = Math.min(amount, 0.9);
      var k = 2 * amount / (1 - amount),
              i, x;
      for (i = 0; i < n_samples; i++) {
          x = i * 2 / n_samples - 1;
          ws_table[i] = (1 + k) * x / (1 + k * Math.abs(x));
      }
  }

  // Tuna JS 3
  function fuzz(amount, n_samples, ws_table) {
      var i, x, y, a = 1 - amount;
      for (i = 0; i < n_samples; i++) {
          x = i * 2 / n_samples - 1;
          y = x < 0 ? -Math.pow(Math.abs(x), a + 0.04) : Math.pow(x, a);
          ws_table[i] = tanh(y * 2);
      }
  }
  // Tuna JS 4
  function clean(amount, n_samples, ws_table) {
      var i, x, y, abx, a = 1 - amount > 0.99 ? 0.99 : 1 - amount;
      for (i = 0; i < n_samples; i++) {
          x = i * 2 / n_samples - 1;
          abx = Math.abs(x);
          if (abx < a)
              y = abx;
          else if (abx > a)
              y = a + (abx - a) / (1 + Math.pow((abx - a) / (1 - a), 2));
          else if (abx > 1)
              y = abx;
          ws_table[i] = sign(x) * y * (1 / ((a + 1) / 2));
      }
  }

  // tuna JS 5
  function asymetric(amount, n_samples, ws_table) {
      var i, x;
      for (i = 0; i < n_samples; i++) {
          x = i * 2 / n_samples - 1;
          if (x < -0.08905) {
              ws_table[i] = (-3 / 4) * (1 - (Math.pow((1 - (Math.abs(x) - 0.032857)), 12)) + (1 / 3) * (Math.abs(x) - 0.032847)) + 0.01;
          } else if (x >= -0.08905 && x < 0.320018) {
              ws_table[i] = (-6.153 * (x * x)) + 3.9375 * x;
          } else {
              ws_table[i] = 0.630035;
          }
      }
  }


  // From GFX, tweaked for most of them...
  function notSoDistorded(a) {
      a = Math.pow(a + 2, 3);
      for (var c = new Float32Array(22050), d = 0; 22050 > d; d += 1) {
          var f = 2 * d / 22050 - 1;
          c[d] = (1 + a) * f / (1 + a * Math.abs(f));
      }
      return c;
  }

  function crunch(a) {
      a = Math.pow(a, 2);
      for (var c = new Float32Array(22050), d = 0; 22050 > d; d += 1) {
          var f = 2 * d / 22050 - 1;
          c[d] = (1 + a) * f / (1 + a * Math.abs(f));
      }
      return c;
  }

  function classA(a) {
      var c = new Float32Array(22050);
      a = 10 + 3 * a;
      for (var d = 0; 22050 > d; d += 1) {
          var e = 2 * d / 22050 - 1;
          c[d] = (1 + a) * e / (1 + a * Math.abs(e));
      }
      return c;
  }

  function superClean(a) {
      a = (a + 6) / 4;
      for (var c = new Float32Array(22050), d = 0; 22050 > d; d += 1) {
          var e = 2 * d / 22050 - 1;
          c[d] = (1 + a) * e / (1 + a * Math.abs(e));
      }
      return c;
  }

  function vertical(a) {
      a = Math.pow(a + 2, 3);
      for (var c = new Float32Array(22050), d = 0; 22050 > d; d += 1) {
          var e = 2 * d / 22050 - 1;
          c[d] = (1 + a) * e / (1 + a * Math.abs(e));
      }
      return c;
  }

  function superFuzz(a) {
      a = Math.pow(a, 3);
      for (var c =
              new Float32Array(22050), d = 0; 22050 > d; d += 1) {
          var e = 2 * d / 22050 - 1;
          c[d] = (1 + a) * e / (1 + a * Math.abs(e));
      }
      return c;
  }

  function NoisyHiGain(a) {
      a /= 153;
      for (var c = new Float32Array(22050), d = 0; 22050 > d; d += 1)
          c[d] = (0 > 2 * d / 22050 - 1 ? -1 : 1) * a;
      return c;
  }


  function HiGainModern(a) {
      a = 1 / (1 + Math.pow(a, 4));
      for (var c = new Float32Array(22050), d = 0; 22050 > d; d += 1) {
          var e = 2 * d / 22050 - 1;
          c[d] = e / (Math.abs(e) + a);
      }
      return c;
  }

  //  - BEZIER FOR ASYMETRIC CURVE...
  // var p0 = {x: 0, y: 100}; //use whatever points you want obviously
  // var p1 = {x: 50, y: 100}; // tan
  // var p2 = {x: 50, y: 0}; // tan
  // var p3 = {x: 100, y: 0};

  function bezier(t, p0, p1, p2, p3){
      var cX = 3 * (p1.x - p0.x),
          bX = 3 * (p2.x - p1.x) - cX,
          aX = p3.x - p0.x - cX - bX;
              
      var cY = 3 * (p1.y - p0.y),
          bY = 3 * (p2.y - p1.y) - cY,
          aY = p3.y - p0.y - cY - bY;
              
      var x = (aX * Math.pow(t, 3)) + 
                (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
      var y = (aY * Math.pow(t, 3)) + 
                (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
              
      return {x: x, y: y};
  } 

  function getBezierCurve(bezierPoints, numCurve) {
   var p0 = amp.preamp.bezierPoints[numCurve][0];
   var p1 = amp.preamp.bezierPoints[numCurve][1];
   var p2 = amp.preamp.bezierPoints[numCurve][2];
   var p3 = amp.preamp.bezierPoints[numCurve][3];
   
     var n_samples = 44100,
     accuracy = 1/n_samples,
     curve = new Float32Array(n_samples),
     index = 0;
    
    curve[index++] = map(p0.y, 0, 100, 1, -1);
    
    // 
    for (var i=0; i<1; i+=accuracy){
      var p = bezier(i, p0, p1, p2, p3);
      curve[index++] = map(p.y, 0, 100, 1, -1);
    }
    
    return curve;
  }  
  // END OF WAVE SHAPING FUNCTIONS


  // API
  return {
      buildDistorsionFactories: buildDistorsionFactories,
      distorsionCurves: distorsionCurves
  };
}




// ----------- AMP ---------------

function Amp(context) {
    var presets = [];

    var preamp = new PreAmp(context);
    var tonestack = new ToneStack(context);
    var powerAmp = new PowerAmp(context);
    var eq = new Equalizer(context);
    var cabinetSim = new Convolver(context, cabinetImpulses);
    var reverb = new Convolver(context, reverbImpulses);

    // Main input and output and bypass
    var input = context.createGain();
    var output = context.createGain();
    var byPass = context.createGain();
    byPass.gain.value = 0;

    // amp input gain towards pream stage
    var inputGain = context.createGain();
    inputGain.gain.value = 1;

    // output gain after preamp stage
    var outputGain = context.createGain();

    // ------------
    // PREAM STAGE
    // ------------

    // Tonestack in serie, cf Lepou's mail  
    /*for (var i = 0; i < 4; i++) {
        loCutFilters[i] = context.createBiquadFilter();
        loCutFilters[i].type = "lowshelf";
        loCutFilters[i].frequency.value = 720;
        loCutFilters[i].gain.value = 3.3;

        hiCutFilters[i] = context.createBiquadFilter();
        hiCutFilters[i].type = "lowpass";
        hiCutFilters[i].frequency.value = 12000;
        hiCutFilters[i].Q.value = 0.7071;

        highShelfBoosts[i] = context.createBiquadFilter();
        highShelfBoosts[i].type = "highshelf";
        highShelfBoosts[i].frequency.value = 12000; // Which values ?
        highShelfBoosts[i].Q.value = 0.7071;        // Which values ?

        od[i] = context.createWaveShaper();
        od[i].curve = makeDistortionCurve(k[i]);
        // Oversampling generates some (small) latency
        //od[i].oversample = '4x';

        // gains
        gainsOds[i] = context.createGain();
        gainsOds[i].gain.value = 1;
    }*/

    // Creates Boost channel for distortion 
    // before preamp, disabled by default
    preamp.createBoost();

    preamp.createFilter("lowshelf1");
    preamp.createFilter("lowshelf2");
    preamp.createFilter("lowshelf3");
    preamp.createFilter("highpass1");

    preamp.createGain("stage1");
    preamp.createGain("stage2");

    preamp.createDisto("disto1");
    preamp.createDisto("disto2");

    // ------------------------------
    // TONESTACK STAGES
    // ------------------------------

    tonestack.createFilter("bass");
    tonestack.createFilter("mid");
    tonestack.createFilter("treble");
    tonestack.createFilter("presence");

    // -----------------------------------
    // POST PROCESSING STAGE (EQ, reverb)
    // -----------------------------------
    //  before EQ, filter highs and lows (Fred Miniere advice)
    var eqhicut = context.createBiquadFilter();
        eqhicut.frequency.value = 10000;
        eqhicut.type = "peaking";
        eqhicut.gain.value = -25;

    var eqlocut = context.createBiquadFilter();
        eqlocut.frequency.value = 60;
        eqlocut.type = "peaking";
        eqlocut.gain.value = -19;

    var bypassEQg = context.createGain();
    bypassEQg.gain.value = 0; // by defaut EQ is in
    var inputEQ = context.createGain();

    // Master volume
    var masterVolume = context.createGain();

    doAllConnections();

    // -------------------
    // END OF AMP STAGES
    // -------------------

    function doAllConnections() {
        // called only after reverb and cabinet sim could load and
        // decode impulses

        // Build web audio graph, set default preset
        buildGraph();
        initPresets();

        console.log("Running");
    }


    function buildGraph() {
        input.connect(inputGain);
        input.connect(byPass);

        // boost is not activated, it's just a sort of disto at 
        // the very beginning of the amp route
        inputGain.connect(preamp.boost.input);
        //inputGain.connect(outputGain);

        // JCM 800 preamp
        preamp.boost.output.connect(preamp.lowShelf1);
        preamp.lowShelf1.connect(preamp.lowShelf2);
        preamp.lowShelf2.connect(preamp.preampStage1Gain);
        preamp.preampStage1Gain.connect(preamp.od[0]);
        preamp.od[0].connect(preamp.highPass1);
        preamp.highPass1.connect(preamp.lowShelf3);
        preamp.lowShelf3.connect(preamp.preampStage2Gain);
        preamp.preampStage2Gain.connect(preamp.od[1])
        preamp.od[1].connect(outputGain);

        // tonestack
        outputGain.connect(tonestack.trebleFilter);
        tonestack.trebleFilter.connect(tonestack.bassFilter);
        tonestack.bassFilter.connect(tonestack.midFilter);
        tonestack.midFilter.connect(tonestack.presenceFilter);

        // lo and hicuts
        tonestack.presenceFilter.connect(eqlocut);
        eqlocut.connect(eqhicut);

        // post process
        eqhicut.connect(inputEQ);

        // bypass eq route
        eqhicut.connect(bypassEQg);
        bypassEQg.connect(masterVolume);

        // normal route
        inputEQ.connect(eq.input);
        eq.output.connect(masterVolume);

        masterVolume.connect(powerAmp.input);
        powerAmp.output.connect(reverb.input);
        //masterVolume.connect(reverb.input);
        reverb.output.connect(cabinetSim.input);
        cabinetSim.output.connect(output);
        //eq.output.connect(output);
        //reverb.output.connect(output);

        // byPass route
        byPass.connect(output);
    }

    function changeGraph(normal) {
        if (normal) {
            // disconnection phase of TS before PA 
            preamp.boost.output.disconnect(tonestack.trebleFilter);
            tonestack.presenceFilter.disconnect(preamp.lowShelf1);
            outputGain.disconnect(eqlocut);
            
            // reconnection phase, PA before TS
            preamp.boost.output.connect(preamp.lowShelf1);
            outputGain.connect(tonestack.trebleFilter);
            tonestack.presenceFilter.connect(eqlocut);
             
        } else {
            // disconnection phase of PA before TS
            preamp.boost.output.disconnect(preamp.lowShelf1);
            outputGain.disconnect(tonestack.trebleFilter);
            tonestack.presenceFilter.disconnect(eqlocut);

            // reconnection phase, TS before PA
            preamp.boost.output.connect(tonestack.trebleFilter);
            tonestack.presenceFilter.connect(preamp.lowShelf1);
            outputGain.connect(eqlocut);   
        }   
    }

    function changeOversamplingAmp(cb) {
        for (var i = 0; i < 2; i++) {
            if(cb.checked) {
                // Oversampling generates some (small) latency
                preamp.od[i].oversample = '4x';
                preamp.boost.setOversampling('4x');
                console.log("set oversampling to 4x");
            } else {
                preamp.od[i].oversample = 'none';
                preamp.boost.setOversampling('none');
                console.log("set oversampling to none");
            }
         }
         // Not sure if this is necessary... My ears can't hear the difference
         // between oversampling=none and 4x ? Maybe we should re-init the
         // waveshaper curves ?
         // changeDistoType1();
         // changeDistoType2();
    }

    // volume aka preamp output volume
    function changeOutputGainAmp(sliderVal) {
        // sliderVal is in [0, 10], adjust to [0, 1]
        var value = parseFloat(sliderVal/10);
        outputGain.gain.value = value;
    }

    // volume aka preamp output volume
    function changeInputGainAmp(sliderVal) {
        // sliderVal is in [0, 10], adjust to [0, 1]
        var value = parseFloat(sliderVal/10);
        inputGain.gain.value = value;
    }

    function changeMasterVolumeAmp(sliderVal) {
        // sliderVal is in [0, 10]
        var value = parseFloat(sliderVal);
        //value = map(value, 0, 10, 0, 1);
        masterVolume.gain.value = value;
    }

    function changeReverbGainAmp(sliderVal) {
        // slider val in [0, 10] , adjust to [0, 1]
        var value = parseFloat(sliderVal) / 10;
        reverb.setGain(value);
    }

    function changeRoomAmp(sliderVal) {
        // slider val in [0, 10] range, adjust to [0, 1]
        console.log('change room');
        var value = parseFloat(sliderVal) / 10;
        cabinetSim.setGain(value);
    }

    function initPresets() {
        // presets are added from the preset repertory
        // here presets are js variables
        presets.push(preset1);
        presets.push(preset2);
        presets.push(preset3);        
        presets.push(preset4);
        presets.push(preset5);
        presets.push(preset6);
        presets.push(preset7);
        presets.push(preset8);
    }

    function bypassAmp(cb) {
        console.log("byPass : " + cb.checked);

        if (cb.checked) {
            // byPass mode
            inputGain.gain.value = 1;
            byPass.gain.value = 0;
        } else {
            // normal amp running mode
            inputGain.gain.value = 0;
            byPass.gain.value = 1;
        }
    }

    function bypassEQAmp(cb) {
        console.log("EQ byPass : " + cb.checked);

        if (cb.checked) {
            // byPass mode
            inputEQ.gain.value = 1;
            bypassEQg.gain.value = 0;
        } else {
            // normal amp running mode
            inputEQ.gain.value = 0;
            bypassEQg.gain.value = 1;
        }
    }

    // API: methods exposed
    return {
        input: input,
        output: output,
        eq: eq,
        reverb: reverb,
        cabinet: cabinetSim,
        tonestack: tonestack,
        preamp: preamp,
        powerAmp:powerAmp,
        master: masterVolume,
        presets: presets,
        
        changeOversamplingAmp: changeOversamplingAmp,
        changeOutputGainAmp: changeOutputGainAmp,
        changeInputGainAmp: changeInputGainAmp,

        changeMasterVolumeAmp: changeMasterVolumeAmp,
        changeReverbGainAmp: changeReverbGainAmp,
        changeRoomAmp: changeRoomAmp,
        bypassAmp: bypassAmp,
        bypassEQAmp: bypassEQAmp,

        outputGain: outputGain,
        changeGraph: changeGraph
    };
}

//------------------------------- AmpController ---------------------------------//

class AmpController {

	constructor(amp, ampViewer) {
		this.amp = amp;
		this.ampViewer = ampViewer;
		this.guitarPluggedIn = false;
		this.presets = amp.presets;
		this.normalBuild = true;
		this.nbLampPairs = 2;
	}

	// ------- Amp related handlers -------

	//
	// Preamp handlers
	//

	// Distortions

    changeDistorsionValues(sliderValue, numDisto) {
		// update processing values
        this.amp.preamp.changeDistorsionValuesPA(sliderValue, numDisto);
        // update view
        this.ampViewer.changeDistoLabels(sliderValue, numDisto);
    }

    // Bezier
    changeBezierValues(sliderValue, numDisto) {
        if (amp.preamp.distoTypes[numDisto] == "bezier") {
	        // update processing values
	        this.amp.preamp.changeBezierValuesPA(sliderValue, numDisto);
	        // update view
	        this.ampViewer.changeBezierLabels(sliderValue, numDisto);
        }
    }

    changeDisto1Type(sliderVal) {
        this.amp.preamp.changeDisto1TypePA(sliderVal);
        this.changeDrive(this.amp.preamp.currentK);
    }

    
    changeDisto1FromPreset(name) {
        this.amp.preamp.changeDisto1TypeFromPreset(name);
        this.ampViewer.updateDisto1Name(name);
    }

    changeDisto2Type(sliderVal) {
        this.amp.preamp.changeDisto2TypePA(sliderVal);
        this.changeDrive(this.amp.preamp.currentK);
    }

    changeDisto2FromPreset(name) {
        this.amp.preamp.changeDisto2TypeFromPreset(name);
        this.ampViewer.updateDisto2Name(name);
    }

    changeDrive(sliderValue) {
      // sliderValue in [0,10]
      // We can imagine having some "profiles here" -> generate
      // different K values from one single sliderValue for the
      // drive.
      // other values i.e [0.5, 0.5, 0.8, 1] -> less distorsion
      // on bass frequencies and top high frequency
      
      for(var i = 0; i < 2; i++) {
            this.changeDistorsionValues(sliderValue, i);
      }
    }

    changePowerAmpDistoType(sliderVal) {
        this.amp.powerAmp.changeDistoType(sliderVal);
        console.log("changin disto type = " + sliderVal)
        this.ampViewer.drawCurrentPowerAmpDistoCurve(this.amp.powerAmp.ws.curve);
    }

    changePopwerAmpNegativeGainValue(val) {
        this.amp.powerAmp.changeNegativeGainValue(val);
        this.ampViewer.changePowerAmpNegativeGainLabel(val);
    }

    changePowerAmpPresenceFreqValue(val) {
        this.amp.powerAmp.changePresenceFreqValue(val);
        this.ampViewer.changePowerAmpFreqValueLabel(val);
    }

    changePowerAmpPresenceGainRangeValue(val) {
        this.amp.powerAmp.changePresenceGainRange(val);
        this.ampViewer.changePowerAmpPresenceGainRangeValueLabel(val);       
    }

    changePowerAmpK(val) {
        this.amp.powerAmp.changeK(val);
        this.ampViewer.changePowerAmpDistoLabel(val);
        this.ampViewer.drawCurrentPowerAmpDistoCurve(this.amp.powerAmp.ws.curve);
    }

    togglePoweAmpBypass() {
        this.amp.powerAmp.toggleBypass();
        this.ampViewer.changePowerAmpStatus(this.amp.powerAmp.getBypassStatus());
    }


    setCurveHandlers() {
    	// Change distortion on mouse move in Canvas distoDrawer 1
        var canvas1, flag1, rect1, label1, kValue1, bias1label, bias1value, angle1, shift1, newK1;
        canvas1 = document.querySelector('#distoDrawerCanvas1');
        label1 = document.querySelector('#k1label');
        bias1label = document.querySelector('#bias1label');
        bias1value = document.querySelector('#bias0');
        kValue1 = document.querySelector('#k0');
        rect1 = canvas1.getBoundingClientRect();
        canvas1.addEventListener('mousedown', (evt) => {
            //console.log("Curve1 editing starting")
            let initKVal = this.amp.preamp.getDistorsionValue(0);
            let initBiasVal = this.amp.preamp.getBiasValue(0);
            let initMouseVal = ((evt.clientX  - rect1.left) / 10).toFixed(1);
            flag1 = 1;

            document.addEventListener('mousemove', mouseMove1, false);
            document.addEventListener('mouseup', mouseUp1, false);

            function mouseMove1(evt) {
                if (flag1 > 0) {
                    // Set bias or k value for starting newK.
                    if (amp.preamp.distoTypes[0] == "bezier") {
                        shift1 = ((evt.clientX  - rect1.left) / 10).toFixed(1) - initMouseVal;
                        newK1 = parseFloat(initBiasVal) + parseFloat(shift1);
                    } else {
                        shift1 = ((evt.clientX  - rect1.left) / 10).toFixed(1) - initMouseVal;
                        newK1 = parseFloat(initKVal) + parseFloat(shift1);
                    }

                    // Define newK
                    if (newK1 < 0) {
                        newK1 = 0;
                    } else if (newK1 > 10) {
                        newK1 = 10;
                    }

                    // Bezier or other curve
                    if (amp.preamp.distoTypes[0] == "bezier") {
                        var pos = evt.clientX - canvas1.offsetLeft - rect1.left;
                        if (pos<50) {
                            //amp.preamp.changeBiasP2(Math.min(100,100-(pos*2)));
                            //amp.preamp.changeBiasP1(0);
                        } else {
                            //amp.preamp.changeBiasP1(Math.min(100,(pos*2)-100));
                            //amp.preamp.changeBiasP2(0);
                        }

                        amp.preamp.changeBiasPA(newK1, 0);
                        ampCtrl.changeBezierValues(newK1, 0, 0);
                        amp.preamp.highlightValues(bias1label, bias1value);
                    } else {
                        amp.preamp.highlightValues(label1, kValue1);
                        ampCtrl.changeDistorsionValues(newK1, 0);
                    }
                }
            }

            function mouseUp1() {
                //console.log("Curve1 editing finished")
                flag1 = 0;
                if (amp.preamp.distoTypes[0] == "bezier") {
                    amp.preamp.hideValues(bias1label, bias1value);
                } else {
                    amp.preamp.hideValues(label1, kValue1);
                }
                document.removeEventListener('mousemove', mouseMove1, false);
                document.removeEventListener('mouseup', mouseUp1, false);
            }

        }, false);

        // Change distortion on mouse move in Canvas distoDrawer 2
        var canvas2, flag2, rect2, label2, kValue2, bias2label, bias2value, angle2, shift2, newK2;
        canvas2 = document.querySelector('#distoDrawerCanvas2');
        label2 = document.querySelector('#k2label');
        bias2label = document.querySelector('#bias2label');
        bias2value = document.querySelector('#bias1');
        kValue2 = document.querySelector('#k1');
        rect2 = canvas2.getBoundingClientRect();

        canvas2.addEventListener('mousedown', (evt) => {
            //console.log("Curve2 editing starting")
            let initKVal = this.amp.preamp.getDistorsionValue(1);
            let initMouseVal = ((evt.clientX  - rect2.left) / 10).toFixed(1);
            let initBiasVal = this.amp.preamp.getBiasValue(1);
            flag2 = 1;

            document.addEventListener('mousemove', mouseMove2, false);
            document.addEventListener('mouseup', mouseUp2, false);

            function mouseMove2(evt) {
                if (flag2 > 0) {
                    // Set bias or k value for starting newK.
                    if (amp.preamp.distoTypes[0] == "bezier") {
                        shift2 = ((evt.clientX  - rect2.left) / 10).toFixed(1) - initMouseVal;
                        newK2 = parseFloat(initBiasVal) + parseFloat(shift2);
                    } else {
                        shift2 = ((evt.clientX  - rect2.left) / 10).toFixed(1) - initMouseVal;
                        newK2 = parseFloat(initKVal) + parseFloat(shift2);
                    }

                    // Define newK
                    if (newK2 < 0) {
                        newK2 = 0;
                    } else if (newK2 > 10) {
                        newK2 = 10;
                    }

                    // Bezier or other curve
                    if (amp.preamp.distoTypes[1] == "bezier") {
                        var pos = evt.clientX - canvas2.offsetLeft - rect2.left;
                        if (pos<50) {
                            //amp.preamp.changeBiasP2(Math.min(100,100-(pos*2)));
                            //amp.preamp.changeBiasP1(0);
                        } else {
                            //amp.preamp.changeBiasP1(Math.min(100,(pos*2)-100));
                            //amp.preamp.changeBiasP2(0);
                        }

                        amp.preamp.changeBiasPA(newK2, 1);
                        ampCtrl.changeBezierValues(newK2, 1, 0);
                        amp.preamp.highlightValues(bias2label, bias2value);
                    } else {
                        amp.preamp.highlightValues(label2, kValue2);
                        ampCtrl.changeDistorsionValues(newK2, 1);
                    }
                }
            }

            function mouseUp2() {
                //console.log("Curve2 editing finished")
                flag2 = 0;
                if (amp.preamp.distoTypes[1] == "bezier") {
                    amp.preamp.hideValues(bias2label, bias2value);
                } else {
                    amp.preamp.hideValues(label2, kValue2);
                }
                document.removeEventListener('mousemove', mouseMove2, false);
                document.removeEventListener('mouseup', mouseUp2, false);
            }
        }, false);
	}

	// Gains

    changePreampStage1GainValue(sliderVal) {
        this.amp.preamp.changePreampStage1GainValuePA(sliderVal);
        this.ampViewer.changePreampStage1GainValuePA(sliderVal);
    }

    changePreampStage2GainValue(sliderVal) {
        this.amp.preamp.changePreampStage2GainValuePA(sliderVal);
        this.ampViewer.changePreampStage2GainValuePA(sliderVal);
    }

	// Filters

	changeLowShelf1FrequencyValue(sliderVal) {
        this.amp.preamp.changeLowShelf1FrequencyValuePA(sliderVal);
        this.ampViewer.changeLowShelf1FrequencyValuePA(sliderVal);
    }

    changeLowShelf1GainValue(sliderVal) {
        this.amp.preamp.changeLowShelf1GainValuePA(sliderVal);
		this.ampViewer.changeLowShelf1GainValuePA(sliderVal);
    }

    changeLowShelf2FrequencyValue(sliderVal) {
        this.amp.preamp.changeLowShelf2FrequencyValuePA(sliderVal);
        this.ampViewer.changeLowShelf2FrequencyValuePA(sliderVal);
    }

    changeLowShelf2GainValue(sliderVal) {
        this.amp.preamp.changeLowShelf2GainValuePA(sliderVal);
        this.ampViewer.changeLowShelf2GainValuePA(sliderVal);
    }

    changeLowShelf3FrequencyValue(sliderVal) {
        this.amp.preamp.changeLowShelf3FrequencyValuePA(sliderVal);
        this.ampViewer.changeLowShelf3FrequencyValuePA(sliderVal);
    }

    changeLowShelf3GainValue(sliderVal) {
        this.amp.preamp.changeLowShelf3GainValuePA(sliderVal);
		this.ampViewer.changeLowShelf3GainValuePA(sliderVal);
    }

    changeHighPass1FrequencyValue(sliderVal) {
        this.amp.preamp.changeHighPass1FrequencyValuePA(sliderVal);
        this.ampViewer.changeHighPass1FrequencyValuePA(sliderVal);
    }

    changeHighPass1QValue(sliderVal) {
        this.amp.preamp.changeHighPass1QValuePA(sliderVal);
        this.ampViewer.changeHighPass1QValuePA(sliderVal);
    }

	//
	// Tonestack handlers
	//

	changeBassFilterValue(sliderVal) {
        this.amp.tonestack.changeBassFilterValueTS(sliderVal);
		this.ampViewer.changeBassFilterValueTS(sliderVal);
    }

    changeMidFilterValue(sliderVal) {
        this.amp.tonestack.changeMidFilterValueTS(sliderVal);
        this.ampViewer.changeMidFilterValueTS(sliderVal);
    }

    changeTrebleFilterValue(sliderVal) {
        this.amp.tonestack.changeTrebleFilterValueTS(sliderVal);
        this.ampViewer.changeTrebleFilterValueTS(sliderVal);
    }

    /*
    changePresenceFilterValue(sliderVal) {
        this.amp.tonestack.changePresenceFilterValueTS(sliderVal);
        this.ampViewer.changePresenceFilterValueTS(sliderVal);
    }
*/

//
// Power Amp handlers
//

changePresenceFilterGainValue(sliderVal) {
    this.amp.powerAmp.changePresenceFilterGainValue(sliderVal);
    this.ampViewer.changePresenceFilterValueTS(sliderVal);
}

changeBoostGainValue(sliderVal) {
    this.amp.powerAmp.changeBoostGainValue(sliderVal);
}
    //
    // Amp handlers
    //

    // volume aka preamp output volume
	changeOutputGain(sliderVal) {
        this.amp.changeOutputGainAmp(sliderVal);
        this.ampViewer.changeOutputGainAmp(sliderVal);
    }

    changeInputGain(sliderVal) {
        this.amp.changeInputGainAmp(sliderVal);
        this.ampViewer.changeInputGainAmp(sliderVal);
    }

    changeMasterVolume(sliderVal) {
        this.amp.changeMasterVolumeAmp(sliderVal);
        this.ampViewer.changeMasterVolumeAmp(sliderVal);
    }

    changeReverbGain(sliderVal) {
        this.amp.changeReverbGainAmp(sliderVal);
        this.ampViewer.changeReverbGainAmp(sliderVal);
    }

    changeRoom(sliderVal) {
        this.amp.changeRoomAmp(sliderVal);
        this.ampViewer.changeRoomAmp(sliderVal);
    }

    //
    // Preset handlers
    //

    setDefaultPreset() {
		this.setValuesFromPreset(this.presets[0]);
	}

	setPreset() {
		this.setValuesFromPreset(this.presets[this.ampViewer.menuPresets.value]);
	}

	setValuesFromPreset(p) {
        if (p.distoName1 === undefined) {
            p.distoName1 = "standard";
        }

	    if (p.distoName2 === undefined) {
            p.distoName2 = "standard";
        }

        if(p.boost === undefined) p.boost = false;
        this.changeBoost(p.boost);

        // Stage 1

        this.changeLowShelf1FrequencyValue(p.LS1Freq);
        this.changeLowShelf1GainValue(p.LS1Gain);
        this.changeLowShelf2FrequencyValue(p.LS2Freq);
        this.changeLowShelf2GainValue(p.LS2Gain);
        this.changePreampStage1GainValue(p.gain1);
        this.changeDisto1FromPreset(p.distoName1);
        this.changeDistorsionValues(p.K1, 0);

        // Stage 2

        //this.changeHighPass1FrequencyValue(p.HP1Freq)
        //this.changeHighPass1QValue(p.HP1Q)
        this.changeLowShelf3FrequencyValue(p.LS3Freq);
        this.changeLowShelf3GainValue(p.LS3Gain);
        this.changePreampStage2GainValue(p.gain2);
		this.changeDisto2FromPreset(p.distoName2);
        this.changeDistorsionValues(p.K2, 1);

        this.changeOutputGain(p.OG);

        this.changeBassFilterValue(p.BF);
        this.changeMidFilterValue(p.MF);
        this.changeTrebleFilterValue(p.TF);
        this.changePresenceFilterGainValue(p.PF);

        this.changeMasterVolume(p.MV);

        this.changeReverbGain(p.RG);
        this.changeReverbImpulseFromPreset(p.RN);

        this.changeRoom(p.CG);
        this.changeCabinetImpulseFromPreset(p.CN);

        this.changeEQValues(p.EQ);
	}

	// Equalizer handlers

    changeEQValues(values) {
        values.forEach((val, index) => {
            this.changeGain(val, index);
        });
    }

	changeGain(sliderVal, numFilter) {
        this.amp.eq.changeGainEQ(sliderVal, numFilter);
        this.ampViewer.updateEQSlider(sliderVal, numFilter);        
    }

    // Convolver handlers

    changeReverbImpulse(val) {
    	this.amp.reverb.loadImpulseFromMenu(val);
    }

    changeReverbImpulseFromPreset(name) {
       if (name === undefined) {
            name = this.amp.reverb.IRs[0].name;
            console.log("loadImpulseByName: name undefined, loading default impulse " + name);
        }

        let result = this.amp.reverb.getImpulseUrlAndIndex(name);

        if (result[0] === "none") {
            console.log("ERROR loading reverb impulse name = " + name);
        } else {
            console.log("loadImpulseByName loading " + name);
        	this.amp.reverb.loadImpulseByUrl(result[0]);
        	this.ampViewer.updateReverbName(result[1]);
        }
    }

    changeCabinetImpulse(val) {
    	this.amp.cabinet.loadImpulseFromMenu(val);
    }

    changeCabinetImpulseFromPreset(name) {
       if (name === undefined) {
            name = this.amp.cabinet.IRs[0].name;
            console.log("loadImpulseByName: name undefined, loading default impulse " + name);
        }

        let result = this.amp.cabinet.getImpulseUrlAndIndex(name);

        if (result[0] === "none") {
            console.log("ERROR loading cabinet impulse name = " + name);
        } else {
            console.log("loadImpulseByName loading " + name);
        	this.amp.cabinet.loadImpulseByUrl(result[0]);
        	this.ampViewer.updateCabinetName(result[1]);
        }
    }

	// Boost handler

   	changeOversampling(cb) {
    	this.amp.changeOversamplingAmp(cb);
    }

    boostOnOff(cb) {  
        // called when we click the switch on the GUI      
        this.amp.preamp.boost.toggle();
        this.amp.preamp.adjustOutputGainIfBoostActivated();
        this.ampViewer.updateBoostLedButtonState(this.amp.preamp.boost.isActivated());
    }

    changeBoost(state) {

        if(this.amp.preamp.boost.isActivated() !== state) {
            // we need to adjust the output gain
            console.log("changeBoost: we change boost state");
            this.amp.preamp.boost.onOff(state);
            this.amp.preamp.adjustOutputGainIfBoostActivated();
            this.ampViewer.updateBoostLedButtonState(this.amp.preamp.boost.isActivated());
        } else {
            console.log("changeBoost: we do not change boost state");
        }
        console.log("changeBoost, boost after: " + this.amp.preamp.boost.isActivated());
    }

    // Bypass handlers

    bypass(cb) {
        this.amp.bypassAmp(cb);
        this.ampViewer.bypassAmp(cb);
    }

    bypassEQ(cb) {
    	this.amp.bypassEQAmp(cb);
    	this.ampViewer.bypassEQAmp(cb);
    }

	//
	// Input handler
	//

	toggleGuitarInput(event) {
	    if(!this.guitarPluggedIn) {
	        guitarInput.connect(this.amp.input);
	        this.changeOutputGainValue(5);
	        this.ampViewer.setButton("ACTIVATED");
	    } else {
	        guitarInput.disconnect();
	        this.ampViewer.setButton("NOT ACTIVATED");
	    }
	    this.guitarPluggedIn = !this.guitarPluggedIn;
	}

	changeDemoSample(val) {
	    console.log(val);
	    audioPlayer.src = demoSampleURLs[val];
	    audioPlayer.play();
	}

	//
	// Other handlers
	//

	printCurrentAmpValues() {
        var currentPresetValue = {
            name: 'current',
            
            boost: this.amp.preamp.boost.isActivated(),

            LS1Freq: this.amp.preamp.lowShelf1.frequency.value,
            LS1Gain: this.amp.preamp.lowShelf1.gain.value,
            LS2Freq: this.amp.preamp.lowShelf2.frequency.value,
            LS2Gain: this.amp.preamp.lowShelf2.gain.value,
            gain1: this.amp.preamp.preampStage1Gain.gain.value,
            distoName1 : this.ampViewer.menuDisto1.value,
            K1: this.amp.preamp.getDistorsionValue(0),
            HP1Freq: this.amp.preamp.highPass1.frequency.value,
            HP1Q: this.amp.preamp.highPass1.Q.value,

            LS3Freq: this.amp.preamp.lowShelf3.frequency.value,
            LS3Gain: this.amp.preamp.lowShelf3.gain.value,
            gain2: this.amp.preamp.preampStage2Gain.gain.value,
            distoName2 : this.ampViewer.menuDisto2.value,
            K2: this.amp.preamp.getDistorsionValue(1),

            OG: (this.amp.output.gain.value*10).toFixed(1),
            BF: ((this.amp.tonestack.bassFilter.gain.value / 7) + 10).toFixed(1), // bassFilter.gain.value = (value-5) * 3;
            MF: ((this.amp.tonestack.midFilter.gain.value / 4) + 5).toFixed(1), // midFilter.gain.value = (value-5) * 2;
            TF: ((this.amp.tonestack.trebleFilter.gain.value / 10) + 10).toFixed(1), // trebleFilter.gain.value = (value-5) * 5;
            PF: ((this.amp.tonestack.presenceFilter.gain.value / 2) + 5).toFixed(1), // presenceFilter.gain.value = (value-5) * 2;
            EQ: this.amp.eq.getValues(),
            MV: this.amp.master.gain.value.toFixed(1),
            RN: this.amp.reverb.getName(),
            RG: (this.amp.reverb.getGain()*10).toFixed(1),
            CN: this.amp.cabinet.getName(),
            CG: (this.amp.cabinet.getGain()*10).toFixed(1)
       };

       console.log(JSON.stringify(currentPresetValue));
    }

	changeInputGainValue(sliderVal) {
        this.amp.input.gain.value = parseFloat(sliderVal);
    }

    changeOutputGainValue(sliderVal) {
        this.amp.output.gain.value = parseFloat(sliderVal)/10;
        //console.log("changeOutputGainValue value = " + output.gain.value);
    }

    // ------- Webpage related handlers -------

    controlsInfoDisplay() {
    	this.ampViewer.changeInfoDisplay();
    }

    eqDisplay() {
    	this.ampViewer.changeEqDisplay();
    }

    settingsDisplay() {
    	this.ampViewer.changeSettingsDisplay();
    }

    // ------- Experimentation handlers -------

    switchPATS() {
    	this.normalBuild = !this.normalBuild;

    	this.amp.changeGraph(this.normalBuild);

    	this.ampViewer.switchPATS(this.normalBuild);
    }

    addPreampLamps() {
    	var type = document.querySelector("#distorsionMenu3");

    	this.nbLampPairs++;

    	this.amp.preamp.addNewLamps(type.value, this.nbLampPairs);

    	this.ampViewer.updateLamps(this.nbLampPairs);
    }

    changeExtraDistos(e) {
    	// Finds the number of the slider
    	var distoNum = e.target.id.match(/^\d+|\d+\b|\d+(?=\w)/g)[0];
    	ampCtrl.changeDistorsionValues(e.target.value, parseFloat(distoNum) + 1);
    }

    removeLastLamp(e) {
    	this.nbLampPairs--;

    	this.amp.preamp.removeLastLamp(this.nbLampPairs);

    	this.ampViewer.removeLastLamp(this.nbLampPairs);
    }

}


//--------------------------------- Filter 

//window.onload = init;
//var bank;
//var ctx = new AudioContext();

//function init() {
//var player = document.getElementById("player");
//var mediaSource = ctx.createMediaElementSource(player);

//bank = new FilterBank(ctx, document.querySelector("#DivFilterBank"));

//mediaSource.connect(bank.getInput());
//bank.getOutput().connect(ctx.destination);
//}

class FilterBank {
  constructor(audioCtx, parent, dbScale) {
      this.audioCtx = audioCtx;
      this.canvasParent = parent;
      this.dbScale = dbScale || 60;


      // filters
      this.filters = [];


      this.presets = [];
      this.createDefaultPresets();






      // global properties
      this.gridColor = "rgb(100,100,100)";
      this.textColor = "rgb(153, 153, 153)";

      // mouse selection mode
      this.mode = "none";

      this.nyquist = 0.5 * this.audioCtx.sampleRate;
      this.noctaves = 11;
      // should be recomputer in case of resize
      this.pixelsPerDb = (0.5 * this.height) / this.dbScale;

  

      this.initFilters();



  }

  // PRESETS
  createDefaultPresets() {
      this.presets.push("clean", [{"type":"highpass","freq":40,"Q":0.000009999999747378752,"gain":12,"color":"red"},{"type":"lowshelf","freq":78.48050689697266,"Q":0,"gain":-1.4166666269302368,"color":"yellow"},{"type":"peaking","freq":230,"Q":1,"gain":0,"color":"green"},{"type":"peaking","freq":2000,"Q":1,"gain":2.880000114440918,"color":"turquoise"},{"type":"peaking","freq":4000,"Q":1,"gain":2.880000114440918,"color":"pink"},{"type":"highshelf","freq":10000,"Q":1,"gain":0,"color":"violet"},{"type":"lowpass","freq":18000,"Q":0.000009999999747378752,"gain":12,"color":"red"}]);
  }

  //-------
  initFilters() {
      this.createStandardFilterbank();
  }

  createStandardFilterbank() {
      // Type, Q, Freq, Gain, Color
      this.addFilter("highpass", 0.00001, 40, 12, "red");

      this.addFilter("lowshelf", 0, 80, 0, "yellow");
      this.addFilter("peaking", 1, 230, 0, "green");
      this.peaking1 = this.addFilter("peaking", 1, 2000, 0, "turquoise");
      this.peaking2 = this.addFilter("peaking", 1, 4000, 0, "pink");
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
      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);

      this.outputGain.connect(this.analyser);
  }

  adjustPresence(val) {
      this.peaking1.gain.value = val;
      this.peaking2.gain.value = val;
      this.draw();
  }

  getCurrentSettings() {
      var settings = [];

      this.filters.forEach((f) => {
          var setting = {};
          setting.type = f.type;
          setting.freq = f.frequency.value;
          setting.Q = f.Q.value;
          setting.gain = f.gain.value;
          setting.color = f.color;
          settings.push(setting);
      });
      return settings;
  }

  getCurrentSettingsJSON() {
      var settings = this.getCurrentSettings();
      return JSON.stringify(settings);
  }

  setSettings(settings) {
      this.filters = [];

      settings.forEach((s) => {
          this.addFilter(s.type, s.Q, s.freq, s.gain, s.color);
      });

      this.draw();
  }

  getInput() {
      return this.inputGain;
  }

  getOutput() {
      return this.outputGain;
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

  

  // --------------- main methods -------------
  addFilter(type, Q, f, g, color) {
      let filter = this.audioCtx.createBiquadFilter();

      filter.type = type;
      filter.Q.value = Q;
      filter.frequency.value = f;
      filter.gain.value = g;
      filter.color = color;
      this.filters.push(filter);

      return filter;
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
      let dbIncrement = this.dbScale*10/60;
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

      if (window.debugEQ)
          console.log(this.getCurrentSettingsJSON());
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


//----------------------------------- Power Amp -----------------------------------
function PowerAmp(ctx) {
  var bypass = false;

  var wsFactory = ctx.createWaveShaper();

  var masterVolume = ctx.createGain();
  var boostGain = ctx.createGain();
  boostGain.gain.value = 2;
  
  var ws = ctx.createWaveShaper();
  var k = getRealKFrom_1_10_range(8);
  var wsFactory = new WaveShapers();
  var currentDistoName = "clean";
  ws.curve = wsFactory.distorsionCurves[currentDistoName](k);
   
  /*
  var presenceFilter = ctx.createBiquadFilter();
  presenceFilter.frequency.value = 3900;
  presenceFilter.type = "peaking";
  presenceFilter.Q.value = 0.7071; // To check with Lepou
*/

  var presenceGainRange = 4; // from -4db to +4db

  //var presenceFilter2 = new PresenceFilter2(ctx);

  var presenceFilter3 = new PresenceFilter3(ctx);
  
  // Delay but it will not be possible to set a delay value less
  // than a sample quantum (128 or 512 samples ?)
  var delay = ctx.createDelay();
  delay.delayTime.value = 128/ctx.sampleRate; // to adjust
  
  // negative gain
  var negativeGain = ctx.createGain();
  negativeGain.gain.value = -0.4; // to adjust
  
  // output gain
  var outputGain = ctx.createGain();
  
  // dry/wet gains
  var dryGain = ctx.createGain();
  dryGain.gain.value = 0;
  var wetGain = ctx.createGain();
  wetGain.gain.value = 1;
  var adjustmentGain = ctx.createGain();
  adjustmentGain.gain.value = 1;

  // lo and gi cut at the end, corresponds to output tranny (transformateur)
  var eqhicut = ctx.createBiquadFilter();
      eqhicut.frequency.value = 10000;
      eqhicut.type = "peaking";
      eqhicut.gain.value = -24;

  var eqlocut = ctx.createBiquadFilter();
      eqlocut.frequency.value = 60;
      eqlocut.type = "peaking";
      eqlocut.gain.value = -18;

  //var buildgraph = function() {
      /*
    masterVolume.connect(wetGain).connect(adjustmentGain).connect(ws).connect(presenceFilter).connect(negativeGain);
    negativeGain.connect(ws); // feedback loop
    presenceFilter.connect(eqhicut).connect(eqlocut).connect(outputGain); // direct route from presence filter

    // bypass route
    masterVolume.connect(dryGain).connect(outputGain);
  //
*/

masterVolume.connect(wetGain).connect(adjustmentGain).connect(ws).connect(presenceFilter3.input);
presenceFilter3.output.connect(negativeGain).connect(delay).connect(ws); // feedback loop
//ws.connect(eqhicut).connect(eqlocut).connect(outputGain);

//presenceFilter3.output.connect(eqhicut).connect(eqlocut).connect(outputGain); // direct route from presence filter

// bypass route
masterVolume.connect(dryGain).connect(eqhicut).connect(eqlocut).connect(outputGain);
presenceFilter3.output.connect(boostGain).connect(eqhicut); 
/*
masterVolume.connect(wetGain).connect(adjustmentGain).connect(ws).connect(lowpass).connect(outputGain);
ws.connect(hipass).connect(hipassgain).connect(outputGain);
*/
// bypass route
//masterVolume.connect(dryGain).connect(outputGain);

  function toggleBypass() {
      if(!bypass) {
          dryGain.gain.value = 1;
          wetGain.gain.value = 0;
          //eqlocut.disconnect(outputGain);
      } else {
          dryGain.gain.value = 0;
          wetGain.gain.value = 1;
          //eqlocut.connect(outputGain);
      }
      bypass = !bypass;
  }

  function getBypassStatus() {
      return bypass;
  }

  function changeBoostGainValue(val) {
      boostGain.gain.value = val;     
  }

  function changePresenceFilterGainValue(sliderVal) {
      // sliderVal is in [0, 10], gain will vary between -8 and + 8 for a presenceGainRange = 4, for example
      var value = parseFloat(sliderVal);
      var adjustedValue = map(value, 0, 10, -presenceGainRange, presenceGainRange);

      //presenceFilter.gain.value = adjustedValue;
      //console.log("poweramp : presence new value = " + presenceFilter.gain.value);
      //hipassgain.gain.value = value;
      //presenceFilter2.changeGainValue(value);
      // TO DO ! THINK ABOUT WHAT THE PRESENCE KNOB WOULD ADJUST IN CASE OF FILTER BANK
      console.log("presence changee " + adjustedValue);
      presenceFilter3.adjustPresence(adjustedValue);
  }

  function changePresenceFreqValue(sliderVal) {
      var value = parseFloat(sliderVal);
      presenceFilter.frequency.value = value
      console.log("poweramp : presence new freq value = " + presenceFilter.frequency.value);
  }

  function changePresenceGainRange(sliderVal) {
      var value = parseFloat(sliderVal);
      presenceGainRange = value
      console.log("poweramp : presence gain range = +=" + presenceGainRange + " dB");
  }


  function changeNegativeGainValue(sliderVal) {
      var value = parseFloat(sliderVal);
      negativeGain.gain.value = sliderVal;
  }

  function changeDistoType(type) {
      currentDistoName = type;
      ws.curve = wsFactory.distorsionCurves[type](k);
      console.log("power amp, transfer function = " + type);
  }

  
  function changeK(sliderValue) {
      // sliderValue is in [0, 10] range, adjust to [0, 1500] range  
  
      k = getRealKFrom_1_10_range(sliderValue);
      console.log("change K current disto name = " + currentDistoName);
      ws.curve = wsFactory.distorsionCurves[currentDistoName](k);

      console.log("power amp k = " + k);
   }

   function getRealKFrom_1_10_range(val) {
      var value = 150 * parseFloat(val);
      var minp = 0;
      var maxp = 1500;

      // The result should be between 10 an 1500
      var minv = Math.log(10);
      var maxv = Math.log(1500);

      // calculate adjustment factor
      var scale = (maxv - minv) / (maxp - minp);

      value = Math.exp(minv + scale * (value - minp));
      // end of logarithmic adjustment
      return value;
   }

  // API
  return {
    input: masterVolume,
    output: outputGain,
    masterVolume: masterVolume,
    ws: ws,
    k:k,
    delay: delay,
    negativeGain: negativeGain,
    toggleBypass:toggleBypass,
    getBypassStatus: getBypassStatus,
    changeBoostGainValue:changeBoostGainValue,
    changePresenceFilterGainValue: changePresenceFilterGainValue,
    changeNegativeGainValue : changeNegativeGainValue,
    changePresenceFreqValue:changePresenceFreqValue,
    changePresenceGainRange: changePresenceGainRange,
    changeDistoType:changeDistoType,
    changeK:changeK
  }
}

function PresenceFilter2(ctx) {
    var input = ctx.createGain();

  var lowpass  = ctx.createBiquadFilter();
  lowpass.frequency.value = 2000;
  lowpass.type = "lowpass";
  lowpass.Q.value = 0.7071;

  var hipass  = ctx.createBiquadFilter();
  hipass.frequency.value = 3000;
  hipass.type = "highpass";
  hipass.Q.value = 0.7071;
  var hipassgain = ctx.createGain();
  hipassgain.gain.value = -0.3;

  var output = ctx.createGain();

  input.connect(lowpass).connect(output);
  input.connect(hipass).connect(hipassgain).connect(output);

  function changeGainValue(val) {
  val = map(val, 0, 10, 0, 2);        
  hipassgain.gain.value = -val;
  }

  return {
      input:input,
      output:output,
      changeGainValue:changeGainValue
  }
}

function PresenceFilter3(ctx) {
  // filter bank/GrahicEQ from -10dB to +10dB
  var bank = new FilterBank(ctx, document.querySelector("#divFilterBank"), 8);

  function adjustPresence(val) {
      bank.adjustPresence(val);
  }

  // API
  return {
      input:bank.getInput(),
      output:bank.getOutput(),
      adjustPresence:adjustPresence
  }
}

//------------------------------------ AmpViewer --------------------------------

class AmpViewer {

  constructor(amp) {
      this.amp = amp;
      // Distortion menus
      this.menuDisto1 = document.querySelector("#distorsionMenu1");
      this.menuDisto2 = document.querySelector("#distorsionMenu2");
      this.menuDisto3 = document.querySelector("#distorsionMenu3");
      this.menuDisto4 = document.querySelector("#distorsionMenu4");
      this.menuPresets = document.querySelector("#QFPresetMenu2");
      this.menuReverb = document.querySelector("#reverbImpulses");
      this.menuCabinet = document.querySelector("#cabinetImpulses");
      this.controlsInfoBtn = document.querySelector("#controlsInfoBtn");
      this.controlsInfo = document.querySelector("#controlsInfo");
      this.equalizerBtn = document.querySelector("#equalizerToggle");
      this.equalizer = document.querySelector("#eqContainer");
      this.settingsBtn = document.querySelector("#settingsToggle");
      this.settings = document.querySelector("#settingsContainer");
      this.display = document.querySelector("#switchDisplay");
      this.addLamp = document.querySelector("#addLamp");
      this.removeLamp = document.querySelector("#removeLamp");
      this.lampNum = document.querySelector("#lampNum");
      this.advSettings = document.querySelector("#advSettings");
      this.powerAmpStatus = document.querySelector("#powerAmpStatus");
      this.graphicEQParent = document.querySelector("#divFilterBank");
  }

  // ------- Amp related handlers -------

  // 
  // View modifications
  //

  // View change for distortions
  changeDistoLabels(sliderValue, numDisto) {
      if (numDisto > 1) {
          numDisto = numDisto - 2;
      }

      // update output labels
      var output = document.querySelector("#k" + numDisto);
      output.value = parseFloat(sliderValue).toFixed(1);

      // update sliders
      var numSlider = numDisto + 1;
      var slider = document.querySelector("#K" + numSlider + "slider");
      slider.value = parseFloat(sliderValue).toFixed(1);

      var knob = document.querySelector("#Knob3");
      knob.setValue(this.amp.preamp.currentK, false);
  }

  drawCurrentPowerAmpDistoCurve(curve) {
      this.distoDrawerPowerAmp.clear();
      drawCurve(this.distoDrawerPowerAmp, curve);
  }

  changePowerAmpDistoLabel(sliderValue) {
      var output = document.querySelector("#kPA");
      output.value = parseFloat(sliderValue).toFixed(1);
  }

  changePowerAmpNegativeGainLabel(sliderValue) {
      var output = document.querySelector("#PaNegativeGainValue");
      output.value = parseFloat(sliderValue).toFixed(1);
  }

  changePowerAmpStatus(bypass) {
      this.powerAmpStatus.innerHTML = "Power Amp : " + ((bypass) ? "Off" : "On");
  }

  changePowerAmpFreqValueLabel(sliderValue) {
      var output = document.querySelector("#PaPresenceFreqSliderValue");
      output.value = parseFloat(sliderValue) + " Hz"
  }

  changePowerAmpPresenceGainRangeValueLabel(sliderValue) {
      var output = document.querySelector("#PaPresenceGainRangeValue");
      output.value = "+-" + parseFloat(sliderValue) + " Db"
  }

  // View change for bezier curves
  changeBezierLabels(sliderValue, numDisto) {
      // update output labels
      var output = document.querySelector("#bias" + numDisto);
      output.value = parseFloat(sliderValue).toFixed(1);

      // update sliders
      var numSlider = numDisto + 1;
      var slider = document.querySelector("#bias" + numSlider + "slider");
      slider.value = parseFloat(sliderValue).toFixed(1);
  }

  // View change for preamp gains

  changePreampStage1GainValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#preampStage1Gain");
      output.value = parseFloat(sliderVal).toFixed(2);

      // refresh slider state
      var slider = document.querySelector("#preampStage1GainSlider");
      slider.value = parseFloat(sliderVal).toFixed(2);
  }

  changePreampStage2GainValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#preampStage2Gain");
      output.value = parseFloat(sliderVal).toFixed(2);

      // refresh slider state
      var slider = document.querySelector("#preampStage2GainSlider");
      slider.value = parseFloat(sliderVal).toFixed(2);
  }

  // View change for preamp filters

  changeLowShelf1FrequencyValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#lowShelf1Freq");
      output.value = parseFloat(sliderVal).toFixed(1) + " Hz";

      // refresh slider state
      var slider = document.querySelector("#lowShelf1FreqSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  changeLowShelf1GainValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#lowShelf1Gain");
      output.value = parseFloat(sliderVal).toFixed(1) + " dB";

      // refresh slider state
      var slider = document.querySelector("#lowShelf1GainSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  changeLowShelf2FrequencyValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#lowShelf2Freq");
      output.value = parseFloat(sliderVal).toFixed(1) + " Hz";

      // refresh slider state
      var slider = document.querySelector("#lowShelf2FreqSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  changeLowShelf2GainValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#lowShelf2Gain");
      output.value = parseFloat(sliderVal).toFixed(1) + " dB";

      // refresh slider state
      var slider = document.querySelector("#lowShelf2GainSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  changeLowShelf3FrequencyValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#lowShelf3Freq");
      output.value = parseFloat(sliderVal).toFixed(1) + " Hz";

      // refresh slider state
      var slider = document.querySelector("#lowShelf3FreqSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  changeLowShelf3GainValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#lowShelf3Gain");
      output.value = parseFloat(sliderVal).toFixed(1) + " dB";

      // refresh slider state
      var slider = document.querySelector("#lowShelf3GainSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  changeHighPass1FrequencyValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#highPass1Freq");
      output.value = parseFloat(sliderVal).toFixed(1) + " Hz";

      // refresh slider state
      var slider = document.querySelector("#highPass1FreqSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  changeHighPass1QValuePA(sliderVal) {
      // update output labels
      var output = document.querySelector("#highPass1Q");
      output.value = parseFloat(sliderVal).toFixed(4);

      // refresh slider state
      var slider = document.querySelector("#highPass1QSlider");
      slider.value = parseFloat(sliderVal).toFixed(4);
  }

  // View change for tonestack

  changeBassFilterValueTS(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob4");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  changeMidFilterValueTS(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob5");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  changeTrebleFilterValueTS(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob6");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  changePresenceFilterValueTS(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob8");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  // View change for amp

  changeOutputGainAmp(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob1");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  changeInputGainAmp(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob1");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  changeMasterVolumeAmp(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob2");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  changeReverbGainAmp(sliderVal) {
      // refresh knob state
      var knob = document.querySelector("#Knob7");
      knob.setValue(parseFloat(sliderVal).toFixed(1), false);
  }

  changeRoomAmp(sliderVal) {
      // update output labels
      var output = document.querySelector("#cabinetGainOutput");
      output.value = parseFloat(sliderVal).toFixed(1);

      // refresh slider state
      var slider = document.querySelector("#convolverCabinetSlider");
      slider.value = parseFloat(sliderVal).toFixed(1);
  }

  // View changes for equalizer

  updateEQSlider(sliderVal, nbFilter) {
      // refresh amp slider state in the web component GUI
      var sliderWC = document.querySelector("#slider" + (nbFilter + 1));
      // second parameter set to false will not fire an event
      sliderWC.setValue(parseFloat(sliderVal).toFixed(0), false);
  }

  // View changes for boost

  updateBoostLedButtonState(activated) {
      // update buttons states
      var boostSwitch = document.querySelector("#toggleBoost");

      if (this.amp.preamp.boost.isActivated()) {
          boostSwitch.setValue(1, false);
      } else {
          boostSwitch.setValue(0, false);
      }
  }

  // View changes for bypass

  bypassAmp(cb) {
      // update buttons states
      var led = document.querySelector("#led");

      //onOffButton.checked = cb.checked;
      var onOffSwitch = document.querySelector("#switch1");
      if (cb.checked) {
          onOffSwitch.setValue(0, false);
          led.setValue(1, false);
      } else {
          onOffSwitch.setValue(1, false);
          led.setValue(0, false);
      }
  }

  bypassEQAmp(cb) {
      // update buttons states
      var led = document.querySelector("#led");

      //onOffButton.checked = cb.checked;
      var eqOnOffSwitch = document.querySelector("#switch2");
      if (cb.checked) {
          eqOnOffSwitch.setValue(0, false);
      } else {
          eqOnOffSwitch.setValue(1, false);
      }
  }

  // View changes for guitar input

  setButton(status) {
      var button = document.querySelector("#toggleGuitarIn");

      if (status == "ACTIVATED") {
          button.innerHTML = "Guitar input: <span style='color:green;'>ACTIVATED</span>, click to toggle on/off!";
          button.classList.remove("pulse");
      } else if (status == "NOT ACTIVATED") {
          button.innerHTML = "Guitar input: <span style='color:red;'>NOT ACTIVATED</span>, click to toggle on/off!";
          button.classList.add("pulse");
      }
  }

  //
  // Create graphic EQ for power amp
  //
  createGraphicEQ(ctx) {
      this.graphicEQ = new FilterBank(ctx, this.graphicEQParent);
  }

  //
  // Display preset menu
  //

  createPresetMenu() {
      this.amp.presets.forEach((p, index) => {
          var option = document.createElement("option");
          option.value = index;
          option.text = p.name;
          this.menuPresets.appendChild(option);
      });
  }

  //
  // Display convolver menus
  //

  createIRMenus() {
      this.buildMenuReverb();
      this.buildMenuCabinet();
  }

  buildMenuReverb(type) {
      this.amp.reverb.IRs.forEach((impulse, index) => {
          var option = document.createElement("option");
          option.value = index;
          option.text = impulse.name;
          this.menuReverb.appendChild(option);
      });
  }

  buildMenuCabinet(type) {
      this.amp.cabinet.IRs.forEach((impulse, index) => {
          var option = document.createElement("option");
          option.value = index;
          option.text = impulse.name;
          this.menuCabinet.appendChild(option);
      });
  }

  updateReverbName(index) {
      this.menuReverb.selectedIndex = index;
  }

  updateCabinetName(index) {
      this.menuCabinet.selectedIndex = index;
  }

  //
  // Display disto menus
  //

  createDistoMenus() {
      this.buildDistoMenu1();
      this.buildDistoMenu2();
      if (this.menuDisto3 != undefined) {
          this.buildDistoMenu3();
      }
      if (this.menuDisto4 != undefined) {
          this.buildDistoMenu4();
      }
  }

  // Build a drop down menu with all distorsion names
  buildDistoMenu1() {
      for (var p in this.amp.preamp.wsFactory.distorsionCurves) {
          var option = document.createElement("option");
          option.value = p;
          option.text = p;
          this.menuDisto1.appendChild(option);
      }
  }

  // Build a drop down menu with all distorsion names
  buildDistoMenu2() {
      for (var p in this.amp.preamp.wsFactory.distorsionCurves) {
          var option = document.createElement("option");
          option.value = p;
          option.text = p;
          this.menuDisto2.appendChild(option);
      }
  }

  // Build a drop down menu with all distorsion names
  buildDistoMenu3() {
      for (var p in this.amp.preamp.wsFactory.distorsionCurves) {
          if (p != "bezier") {
              var option = document.createElement("option");
              option.value = p;
              option.text = p;
              this.menuDisto3.appendChild(option);
          }
      }
  }
  // Build a drop down menu with all distorsion names
  buildDistoMenu4() {
      for (var p in this.amp.preamp.wsFactory.distorsionCurves) {
          if (p != "bezier") {
              var option = document.createElement("option");
              option.value = p;
              option.text = p;
              this.menuDisto4.appendChild(option);
          }
      }
      this.menuDisto4.selectedIndex = 4;
  }

  updateDisto1Name(name) {
      this.menuDisto1.value = name;
  }

  updateDisto2Name(name) {
      this.menuDisto2.value = name;
  }

  //
  // Display live sound signal I/O
  //

  initCurveVisualisations() {
      // Signal visualisation
      var inputVisualization = new Visualization();
      var outputVisualization = new Visualization();

      inputVisualization.configure("inputSignalCanvas", analyzerAtInput);
      outputVisualization.configure("outputSignalCanvas", analyzerAtOutput);

      // start updating the visualizations
      requestAnimationFrame(visualize);

      function visualize() {
          inputVisualization.update();
          outputVisualization.update();

          requestAnimationFrame(visualize);
      }
  }

  // ------- Webpage related handlers -------

  changeInfoDisplay() {
      if (this.controlsInfo.style.display == "none") {
          this.controlsInfo.setAttribute('style', 'display:block;');
          window.scrollTo(0, document.body.scrollHeight);
          this.controlsInfoBtn.innerHTML = "Hide Controls"
      } else {
          this.controlsInfo.setAttribute('style', 'display:none;');
          this.controlsInfoBtn.innerHTML = "Display Controls"
      }
  }

  changeEqDisplay() {
      if (this.equalizer.style.display == "none") {
          this.equalizer.setAttribute('style', 'display:block;');
          this.equalizerBtn.innerHTML = "Hide Equalizer"
      } else {
          this.equalizer.setAttribute('style', 'display:none;');
          this.equalizerBtn.innerHTML = "Display Equalizer"
      }
  }

  changeSettingsDisplay() {
      if (this.settings.style.display == "none") {
          this.settings.setAttribute('style', 'display:block;');
          this.settingsBtn.innerHTML = "Hide extra settings"
      } else {
          this.settings.setAttribute('style', 'display:none;');
          this.settingsBtn.innerHTML = "Display extra settings"
      }
  }

  // ------- Experimentation handlers -------

  switchPATS(normal) {
      if (normal) {
          this.display.innerHTML = "<u>Preamp position : before Tonestack</u>";
      } else {
          this.display.innerHTML = "<u>Preamp position : after Tonestack</u>";
      }
  }

  updateLamps(num) {
      // Updates div with lamp number
      this.lampNum.innerHTML = "<u>Preamp : " + num + " WS (Pairs of lamps)</u>"

      // Adds a slider and its description to control the distortion of the new lamp
      var newDiv = document.createElement('div');
      newDiv.className = "controls";
      this.advSettings.appendChild(newDiv);

      var newLabel = document.createElement('label');
      newLabel.id = "k" + num + "label";
      newLabel.innerHTML = "K" + num;
      newDiv.appendChild(newLabel);

      var newSlider = document.createElement('input');
      newSlider.id = "K" + num + "slider";
      newSlider.type = 'range';
      newSlider.min = 0;
      newSlider.max = 10;
      newSlider.value = 7.8;
      newSlider.step = 0.1;
      newSlider.oninput = ampCtrl.changeExtraDistos;
      newSlider.style.marginRight = "5px";
      newDiv.appendChild(newSlider);

      var newOutput = document.createElement('output');
      newOutput.id = "k" + (num - 1);
      newOutput.value = 7.8;
      newDiv.appendChild(newOutput);

      this.updateButtonState(num);
  }

  removeLastLamp(num) {
      // Updates div with lamp number
      this.lampNum.innerHTML = "<u>Preamp : " + num + " WS (Pairs of lamps)</u>"

      this.advSettings.removeChild(this.advSettings.lastChild);

      this.updateButtonState(num);
  }

  updateButtonState(num) {
      if (num == 5) {
          this.addLamp.disabled = true;
      } else {
          this.addLamp.disabled = false;
      }

      if (num == 2) {
          this.removeLamp.disabled = true;
      } else {
          this.removeLamp.disabled = false;
      }
  }

}




//------------------------------------ Factory --------------------------------

var WAPlugin = WAPlugin || {};

WAPlugin.BuffaAmpSim = class BuffaAmpSim {

    constructor(context, baseUrl) {
        this.context = context;
        this.baseUrl = baseUrl;
    }

    load() {
        return new Promise((resolve, reject) => {
          try{
            this.plug = new Amp(this.context);
            resolve(this.plug);
          } catch (e){
            reject(e);
          }
        });
    }

    loadGui() {
        return new Promise((resolve, reject) => {
          try{
            this.view = new AmpViewer(this.plug)
            this.contoller = new AmpController(this.plug,this.view);

            this.view.createPresetMenu();
            // create impulses menu
            this.view.createIRMenus();
            //ampView.createGraphicEQ(context);
            this.contoller.changePowerAmpDistoType("clean");
            // set default preset
            this.contoller.setDefaultPreset();

            resolve(this.plug, this.controller, this.view);
          } catch (e){
            reject(e);
          }
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let url = this.baseUrl + "/main.html";
                

                if (!this.linkExists(url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    //link.id = 'urlPlugin';
                    link.href = url;
                    document.head.appendChild(link);


                  
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        console.log(this.plug);
                        var element = createAmpGui(this.plug,this.contoller,this.view);
                        //element._plug = this.plug;
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    console.log(this.plug);
                    var element = createAmpGui(this.plug,this.contoller,this.view);
                    //element._plug = this.plug;
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
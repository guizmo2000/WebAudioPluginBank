/*  ################################## WAH ########################################  */

/* ES6 web audio class following the API standard
* Author : Jordan Sintes
*/
window.Pedalboard = class Pedalboard extends WebAudioPluginCompositeNode {
    constructor(ctx, options) {
        super(ctx, options)
        /*    ################     API PROPERTIES    ###############   */

        this.state;

        this.params = {
            state:"disabled"
        }
        // mouse selection mode
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

    }

    connectNodes() {
        this._input.connect(this._output);
        if(this.params.state == "enabled"){
            this._input.disconnect(this._output);
        }
        else if(this.params.state == "disabled"){
            this._input.connect(this._output);
        }
    }

    linktoParams() {
		/*
		 * set default value for parameters and assign it to the web audio nodes
		 */
    };


    /*  #########  Personnal code for the web audio graph  #########   */

    
}


//////////////////////////////////////////////////////////////////////////////////////////

window.WasabiPedalboard = class WasabiPedalboard extends WebAudioPluginFactory {
    constructor(context, baseUrl) { super(context, baseUrl); }
}

//////////////////////////////////////////////////////////////////////////////////////////

AudioContext.prototype.createWasabiDelayCompositeNode = OfflineAudioContext.prototype.createWasabiDelayCompositeNode = function (options) { return new Pedalboard(this, options); };


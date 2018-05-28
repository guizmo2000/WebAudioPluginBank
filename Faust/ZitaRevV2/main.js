
/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONzitaRev() {
	return "{\"name\":\"zitaRev\",\"filename\":\"zitaRev\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"959064\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"JOS, Revised by RM\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Example GUI for zita_rev1_stereo (mostly following the Linux zita-rev1 GUI).\"},{\"filename\":\"zitaRev\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"zitaRev\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"zitaRev\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Zita_Rev1\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"~ ZITA REV1 FEEDBACK DELAY NETWORK (FDN) & SCHROEDER  ALLPASS-COMB REVERBERATOR (8x8). See Faust's reverbs.lib for documentation and  references\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Input\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"In Delay\",\"address\":\"/zitaRev/Zita_Rev1/Input/In_Delay\",\"index\":\"196720\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Delay in ms   before reverberation begins\"},{\"unit\":\"ms\"}],\"init\":\"60\",\"min\":\"20\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Decay Times in Bands (see tooltips)\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"LF X\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/LF_X\",\"index\":\"76\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Crossover frequency (Hz) separating low and middle frequencies\"},{\"unit\":\"Hz\"}],\"init\":\"200\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Low RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Low_RT60\",\"index\":\"68\",\"meta\":[{\"2\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"Mid RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Mid_RT60\",\"index\":\"56\",\"meta\":[{\"3\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"2\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"HF Damping\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/HF_Damping\",\"index\":\"64\",\"meta\":[{\"4\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency (Hz) at which the high-frequency T60 is half the middle-band's T60\"},{\"unit\":\"Hz\"}],\"init\":\"6000\",\"min\":\"1500\",\"max\":\"23520\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 1\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq1 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Freq\",\"index\":\"958996\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"Hz\"}],\"init\":\"315\",\"min\":\"40\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq1 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Level\",\"index\":\"959000\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 2\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq2 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Freq\",\"index\":\"40\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"Hz\"}],\"init\":\"1500\",\"min\":\"160\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq2 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Level\",\"index\":\"44\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Output\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Dry/Wet Mix\",\"address\":\"/zitaRev/Zita_Rev1/Output/Dry/Wet_Mix\",\"index\":\"959028\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"-1 = dry, 1 = wet\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Level\",\"address\":\"/zitaRev/Zita_Rev1/Output/Level\",\"index\":\"24\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Output scale   factor\"},{\"unit\":\"dB\"}],\"init\":\"-20\",\"min\":\"-70\",\"max\":\"40\",\"step\":\"0.1\"}]}]},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/zitaRev/bypass\",\"index\":\"12\"}]}]}";
}
function getBase64CodezitaRev() { return "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ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJ6aXRhUmV2In0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJ6aXRhUmV2IiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlppdGFfUmV2MSIsIm1ldGEiOlt7IjAiOiIifSx7InRvb2x0aXAiOiJ+IFpJVEEgUkVWMSBGRUVEQkFDSyBERUxBWSBORVRXT1JLIChGRE4pICYgU0NIUk9FREVSICBBTExQQVNTLUNPTUIgUkVWRVJCRVJBVE9SICg4eDgpLiBTZWUgRmF1c3QncyByZXZlcmJzLmxpYiBmb3IgZG9jdW1lbnRhdGlvbiBhbmQgIHJlZmVyZW5jZXMifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnB1dCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiSW4gRGVsYXkiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0lucHV0L0luX0RlbGF5IiwiaW5kZXgiOiIxOTY3MjAiLCJtZXRhIjpbeyIxIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJEZWxheSBpbiBtcyAgIGJlZm9yZSByZXZlcmJlcmF0aW9uIGJlZ2lucyJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiNjAiLCJtaW4iOiIyMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkRlY2F5IFRpbWVzIGluIEJhbmRzIChzZWUgdG9vbHRpcHMpIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJMRiBYIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9MRl9YIiwiaW5kZXgiOiI3NiIsIm1ldGEiOlt7IjEiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDcm9zc292ZXIgZnJlcXVlbmN5IChIeikgc2VwYXJhdGluZyBsb3cgYW5kIG1pZGRsZSBmcmVxdWVuY2llcyJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMjAwIiwibWluIjoiNTAiLCJtYXgiOiIxMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJMb3cgUlQ2MCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTG93X1JUNjAiLCJpbmRleCI6IjY4IiwibWV0YSI6W3siMiI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbG93LWZyZXF1ZW5jeSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjMiLCJtaW4iOiIxIiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJNaWQgUlQ2MCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTWlkX1JUNjAiLCJpbmRleCI6IjU2IiwibWV0YSI6W3siMyI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbWlkZGxlIGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMiIsIm1pbiI6IjEiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkhGIERhbXBpbmciLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0RlY2F5X1RpbWVzX2luX0JhbmRzXyhzZWVfdG9vbHRpcHMpL0hGX0RhbXBpbmciLCJpbmRleCI6IjY0IiwibWV0YSI6W3siNCI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkZyZXF1ZW5jeSAoSHopIGF0IHdoaWNoIHRoZSBoaWdoLWZyZXF1ZW5jeSBUNjAgaXMgaGFsZiB0aGUgbWlkZGxlLWJhbmQncyBUNjAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjYwMDAiLCJtaW4iOiIxNTAwIiwibWF4IjoiMjM1MjAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSTSBQZWFraW5nIEVxdWFsaXplciAxIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFcTEgRnJlcSIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMS9FcTFfRnJlcSIsImluZGV4IjoiOTU4OTk2IiwibWV0YSI6W3siMSI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNlbnRlci1mcmVxdWVuY3kgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAxIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMTUiLCJtaW4iOiI0MCIsIm1heCI6IjI1MDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMSBMZXZlbCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMS9FcTFfTGV2ZWwiLCJpbmRleCI6Ijk1OTAwMCIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlBlYWsgbGV2ZWwgICBpbiBkQiBvZiBzZWNvbmQtb3JkZXIgUmVnYWxpYS1NaXRyYSBwZWFraW5nIGVxdWFsaXplciBzZWN0aW9uIDEifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMTUiLCJtYXgiOiIxNSIsInN0ZXAiOiIwLjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUk0gUGVha2luZyBFcXVhbGl6ZXIgMiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXEyIEZyZXEiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL1JNX1BlYWtpbmdfRXF1YWxpemVyXzIvRXEyX0ZyZXEiLCJpbmRleCI6IjQwIiwibWV0YSI6W3siMSI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNlbnRlci1mcmVxdWVuY3kgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAyIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIxNTAwIiwibWluIjoiMTYwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMiBMZXZlbCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMi9FcTJfTGV2ZWwiLCJpbmRleCI6IjQ0IiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUGVhayBsZXZlbCAgIGluIGRCIG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMiJ9LHsidW5pdCI6ImRCIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xNSIsIm1heCI6IjE1Iiwic3RlcCI6IjAuMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPdXRwdXQiLCJtZXRhIjpbeyI1IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRyeS9XZXQgTWl4IiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9PdXRwdXQvRHJ5L1dldF9NaXgiLCJpbmRleCI6Ijk1OTAyOCIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Ii0xID0gZHJ5LCAxID0gd2V0In1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTGV2ZWwiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL091dHB1dC9MZXZlbCIsImluZGV4IjoiMjQiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJPdXRwdXQgc2NhbGUgICBmYWN0b3IifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6Ii0yMCIsIm1pbiI6Ii03MCIsIm1heCI6IjQwIiwic3RlcCI6IjAuMSJ9XX1dfSx7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiYnlwYXNzIiwiYWRkcmVzcyI6Ii96aXRhUmV2L2J5cGFzcyIsImluZGV4IjoiMTIifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017-2018
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class zitaRev extends AudioWorkletNode {
    
    constructor(context, options) {
        
        var json_object = JSON.parse(getJSONzitaRev());
        
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";
       
        super(context, 'zitaRev', options);
        
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }
        
        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }
        
        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }
        
        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
            }
        }
        
        this.output_handler = null;
   
        this.json_object = json_object;
        
        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
       
        // Parse UI
        this.parse_ui(this.json_object.ui, this);
        
        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    getMetadata()
    {
        return getJSONzitaRev();
    }
    
    setParam(path, val)
    {
        //this.port.postMessage({ type:"param", key:path, value:val });
        
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    getParam(path)
    {
        return this.parameters.get(path).value;
    }
    
    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }
    
    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }
    
    // TO REMOVE
    inputChannelCount()
    {
        return parseInt(this.json_object.inputs);
    }
    
    outputChannelCount()
    {
        return parseInt(this.json_object.outputs);
    }
    
    getDescriptor()
    {
        return this.inputs_items;
    }
    
    /**
     * Controller
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }
    
    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }
    
    onMidi(data)
    {
        this.port.postMessage({ type:"midi", data:data });
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }
    
}

// Faust context
var faust = faust || {};

faust.create = function(context, callback)
{
    // Resume audio context each time...
    context.resume();
    
    // The main global scope
    context.audioWorklet.addModule("zitaRev-processor.js")
    .then(function () {
         callback(new zitaRev(context, {}));
    })
    .catch(function(error) { console.log(error); console.log("Faust zitaRev cannot be loaded or compiled"); });
}

var WAPlugin = WAPlugin || {};

WAPlugin.FaustZitaRev = class FaustZitaRev {

    constructor(context, baseUrl) {
        this.context = context;
        this.baseUrl = baseUrl;
    }

    load() {
        return new Promise((resolve, reject) => {
            console.log("URL : " + (this.baseUrl + "/zitaRev-processor.js"));
            this.context.audioWorklet.addModule(this.baseUrl + "/zitaRev-processor.js").then(() => {
                this.plug = new zitaRev(this.context, {});
                return (this.plug);
            }).then((faust) => {
                resolve(faust);
            }).catch((e) => {
                reject(e);
            });
        });
    }

    loadGui() {
        return new Promise((resolve, reject) => {
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
                        var element = createFaustZitaRevGUI(this.plug);
                        //element._plug = this.plug;
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createFaustZitaRevGUI(this.plug);
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





/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONzitaRev() {
    return "{\"name\":\"zitaRev\",\"filename\":\"zitaRev\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"959064\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"JOS, Revised by RM\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Example GUI for zita_rev1_stereo (mostly following the Linux zita-rev1 GUI).\"},{\"filename\":\"zitaRev\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"zitaRev\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"zitaRev\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Zita_Rev1\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"~ ZITA REV1 FEEDBACK DELAY NETWORK (FDN) & SCHROEDER  ALLPASS-COMB REVERBERATOR (8x8). See Faust's reverbs.lib for documentation and  references\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Input\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"In Delay\",\"address\":\"/zitaRev/Zita_Rev1/Input/In_Delay\",\"index\":\"196740\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Delay in ms   before reverberation begins\"},{\"unit\":\"ms\"}],\"init\":\"60\",\"min\":\"20\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Decay Times in Bands (see tooltips)\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"LF X\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/LF_X\",\"index\":\"96\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Crossover frequency (Hz) separating low and middle frequencies\"},{\"unit\":\"Hz\"}],\"init\":\"200\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Low RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Low_RT60\",\"index\":\"88\",\"meta\":[{\"2\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"Mid RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Mid_RT60\",\"index\":\"76\",\"meta\":[{\"3\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"2\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"HF Damping\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/HF_Damping\",\"index\":\"84\",\"meta\":[{\"4\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency (Hz) at which the high-frequency T60 is half the middle-band's T60\"},{\"unit\":\"Hz\"}],\"init\":\"6000\",\"min\":\"1500\",\"max\":\"23520\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 1\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq1 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Freq\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"Hz\"}],\"init\":\"315\",\"min\":\"40\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq1 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Level\",\"index\":\"64\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 2\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq2 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Freq\",\"index\":\"52\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"Hz\"}],\"init\":\"1500\",\"min\":\"160\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq2 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Level\",\"index\":\"56\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Output\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Dry/Wet Mix\",\"address\":\"/zitaRev/Zita_Rev1/Output/Dry/Wet_Mix\",\"index\":\"36\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"-1 = dry, 1 = wet\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Level\",\"address\":\"/zitaRev/Zita_Rev1/Output/Level\",\"index\":\"24\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Output scale   factor\"},{\"unit\":\"dB\"}],\"init\":\"10\",\"min\":\"-70\",\"max\":\"40\",\"step\":\"0.1\"}]}]},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/zitaRev/bypass\",\"index\":\"12\"}]}]}";
}
function getBase64CodezitaRev() { return "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ZXYifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6InppdGFSZXYifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6InppdGFSZXYiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiWml0YV9SZXYxIiwibWV0YSI6W3siMCI6IiJ9LHsidG9vbHRpcCI6In4gWklUQSBSRVYxIEZFRURCQUNLIERFTEFZIE5FVFdPUksgKEZETikgJiBTQ0hST0VERVIgIEFMTFBBU1MtQ09NQiBSRVZFUkJFUkFUT1IgKDh4OCkuIFNlZSBGYXVzdCdzIHJldmVyYnMubGliIGZvciBkb2N1bWVudGF0aW9uIGFuZCAgcmVmZXJlbmNlcyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IklucHV0IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJJbiBEZWxheSIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvSW5wdXQvSW5fRGVsYXkiLCJpbmRleCI6IjE5Njc0MCIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkRlbGF5IGluIG1zICAgYmVmb3JlIHJldmVyYmVyYXRpb24gYmVnaW5zIn0seyJ1bml0IjoibXMifV0sImluaXQiOiI2MCIsIm1pbiI6IjIwIiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRGVjYXkgVGltZXMgaW4gQmFuZHMgKHNlZSB0b29sdGlwcykiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkxGIFgiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0RlY2F5X1RpbWVzX2luX0JhbmRzXyhzZWVfdG9vbHRpcHMpL0xGX1giLCJpbmRleCI6Ijk2IiwibWV0YSI6W3siMSI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNyb3Nzb3ZlciBmcmVxdWVuY3kgKEh6KSBzZXBhcmF0aW5nIGxvdyBhbmQgbWlkZGxlIGZyZXF1ZW5jaWVzIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIyMDAiLCJtaW4iOiI1MCIsIm1heCI6IjEwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkxvdyBSVDYwIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9Mb3dfUlQ2MCIsImluZGV4IjoiODgiLCJtZXRhIjpbeyIyIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBsb3ctZnJlcXVlbmN5IGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMyIsIm1pbiI6IjEiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik1pZCBSVDYwIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9NaWRfUlQ2MCIsImluZGV4IjoiNzYiLCJtZXRhIjpbeyIzIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBtaWRkbGUgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIyIiwibWluIjoiMSIsIm1heCI6IjgiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiSEYgRGFtcGluZyIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvSEZfRGFtcGluZyIsImluZGV4IjoiODQiLCJtZXRhIjpbeyI0IjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRnJlcXVlbmN5IChIeikgYXQgd2hpY2ggdGhlIGhpZ2gtZnJlcXVlbmN5IFQ2MCBpcyBoYWxmIHRoZSBtaWRkbGUtYmFuZCdzIFQ2MCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNjAwMCIsIm1pbiI6IjE1MDAiLCJtYXgiOiIyMzUyMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJNIFBlYWtpbmcgRXF1YWxpemVyIDEiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMSBGcmVxIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9STV9QZWFraW5nX0VxdWFsaXplcl8xL0VxMV9GcmVxIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjEiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDZW50ZXItZnJlcXVlbmN5IG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzE1IiwibWluIjoiNDAiLCJtYXgiOiIyNTAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFcTEgTGV2ZWwiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL1JNX1BlYWtpbmdfRXF1YWxpemVyXzEvRXExX0xldmVsIiwiaW5kZXgiOiI2NCIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlBlYWsgbGV2ZWwgICBpbiBkQiBvZiBzZWNvbmQtb3JkZXIgUmVnYWxpYS1NaXRyYSBwZWFraW5nIGVxdWFsaXplciBzZWN0aW9uIDEifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMTUiLCJtYXgiOiIxNSIsInN0ZXAiOiIwLjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUk0gUGVha2luZyBFcXVhbGl6ZXIgMiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXEyIEZyZXEiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL1JNX1BlYWtpbmdfRXF1YWxpemVyXzIvRXEyX0ZyZXEiLCJpbmRleCI6IjUyIiwibWV0YSI6W3siMSI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNlbnRlci1mcmVxdWVuY3kgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAyIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIxNTAwIiwibWluIjoiMTYwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMiBMZXZlbCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMi9FcTJfTGV2ZWwiLCJpbmRleCI6IjU2IiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUGVhayBsZXZlbCAgIGluIGRCIG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMiJ9LHsidW5pdCI6ImRCIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xNSIsIm1heCI6IjE1Iiwic3RlcCI6IjAuMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPdXRwdXQiLCJtZXRhIjpbeyI1IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRyeS9XZXQgTWl4IiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9PdXRwdXQvRHJ5L1dldF9NaXgiLCJpbmRleCI6IjM2IiwibWV0YSI6W3siMSI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiLTEgPSBkcnksIDEgPSB3ZXQifV0sImluaXQiOiIwIiwibWluIjoiLTEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJMZXZlbCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvT3V0cHV0L0xldmVsIiwiaW5kZXgiOiIyNCIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Ik91dHB1dCBzY2FsZSAgIGZhY3RvciJ9LHsidW5pdCI6ImRCIn1dLCJpbml0IjoiLTIwIiwibWluIjoiLTcwIiwibWF4IjoiNDAiLCJzdGVwIjoiMC4xIn1dfV19LHsidHlwZSI6ImNoZWNrYm94IiwibGFiZWwiOiJieXBhc3MiLCJhZGRyZXNzIjoiL3ppdGFSZXYvYnlwYXNzIiwiaW5kZXgiOiIxMiJ9XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017-2018
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

//  var hosts = hosts || {}; //hosts.FaustZitaRev = 
//  hosts.FaustZitaRev = 

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
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
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

        this.setPatch("init");
    }

    getMetadata() {
        return getJSONzitaRev();
    }

    setParam(path, val) {
        //this.port.postMessage({ type:"param", key:path, value:val });

        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    // TO REMOVE
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    getDescriptor() {
        return this.inputs_items;
    }

    /**
     * Controller
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel) {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }

    onMidi(data) {
        this.port.postMessage({ type: "midi", data: data });
    }

    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }
    /*
    *Guillaume : method which should evolve into setPatch(patch) where param is the name of a json file 
    * créer des états : parcourir input_items au lieu de faire tout ça 
    */
    setPatch(patch) {
        var controlTypes = [];
        var controls = [];

        var listeTypeControl = this.json_object.ui[0].items[0].items;
        listeTypeControl.forEach(element => {
            controlTypes.push(element);
        });

        for (var i = 0; i < controlTypes.length; i++) {
            for (var j = 0; j < controlTypes[i].items.length; j++) {
                controls.push(controlTypes[i].items[j]);
            }
        }


        if (patch === "init") {
            controls.forEach(item => {
                this.setParam(item.address, item.init);
            });
        } else {
            console.log("not implemented yet");
        }

    }

}

// Faust context
var faust = faust || {};

faust.create = function (context, callback) {
    // Resume audio context each time...
    context.resume();

    // The main global scope
    context.audioWorklet.addModule("zitaRev-processor.js")
        .then(function () {
            callback(new zitaRev(context, {}));
        })
        .catch(function (error) { console.log(error); console.log("Faust zitaRev cannot be loaded or compiled"); });
}

var WAPlugin = Plugin || {};

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
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.id = 'urlPlugin';
                    link.href = url;
                    document.head.appendChild(link);

                    link.onload = (e) => {
                        var element = createFaustZitaRevGUI(this.plug);
                        //element._plug = this.plug;
                        resolve(element);
                    }
                }  else {
                    console.log("LINK EXISTS!");
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


/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONzitaRev() {
	return "{\"name\":\"zitaRev\",\"filename\":\"zitaRev\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"959064\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"JOS, Revised by RM\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Example GUI for zita_rev1_stereo (mostly following the Linux zita-rev1 GUI).\"},{\"filename\":\"zitaRev\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"zitaRev\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"zitaRev\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Zita_Rev1\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"~ ZITA REV1 FEEDBACK DELAY NETWORK (FDN) & SCHROEDER  ALLPASS-COMB REVERBERATOR (8x8). See Faust's reverbs.lib for documentation and  references\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Input\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"In Delay\",\"address\":\"/zitaRev/Zita_Rev1/Input/In_Delay\",\"index\":\"262276\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Delay in ms   before reverberation begins\"},{\"unit\":\"ms\"}],\"init\":\"60\",\"min\":\"20\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Decay Times in Bands (see tooltips)\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"LF X\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/LF_X\",\"index\":\"65636\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Crossover frequency (Hz) separating low and middle frequencies\"},{\"unit\":\"Hz\"}],\"init\":\"200\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Low RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Low_RT60\",\"index\":\"65628\",\"meta\":[{\"2\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"Mid RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Mid_RT60\",\"index\":\"65616\",\"meta\":[{\"3\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"2\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"HF Damping\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/HF_Damping\",\"index\":\"65624\",\"meta\":[{\"4\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency (Hz) at which the high-frequency T60 is half the middle-band's T60\"},{\"unit\":\"Hz\"}],\"init\":\"6000\",\"min\":\"1500\",\"max\":\"23520\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 1\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq1 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Freq\",\"index\":\"65600\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"Hz\"}],\"init\":\"315\",\"min\":\"40\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq1 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Level\",\"index\":\"65604\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 2\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq2 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Freq\",\"index\":\"65592\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"Hz\"}],\"init\":\"1500\",\"min\":\"160\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq2 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Level\",\"index\":\"65596\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Output\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Dry/Wet Mix\",\"address\":\"/zitaRev/Zita_Rev1/Output/Dry/Wet_Mix\",\"index\":\"65576\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"-1 = dry, 1 = wet\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Level\",\"address\":\"/zitaRev/Zita_Rev1/Output/Level\",\"index\":\"24\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Output scale   factor\"},{\"unit\":\"dB\"}],\"init\":\"-20\",\"min\":\"-70\",\"max\":\"40\",\"step\":\"0.1\"}]}]},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/zitaRev/bypass\",\"index\":\"12\"}]}]}";
}
function getBase64CodezitaRev() { return "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c2NyaXB0aW9uIjoiRXhhbXBsZSBHVUkgZm9yIHppdGFfcmV2MV9zdGVyZW8gKG1vc3RseSBmb2xsb3dpbmcgdGhlIExpbnV4IHppdGEtcmV2MSBHVUkpLiJ9LHsiZmlsZW5hbWUiOiJ6aXRhUmV2In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJ6aXRhUmV2In0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJ6aXRhUmV2IiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlppdGFfUmV2MSIsIm1ldGEiOlt7IjAiOiIifSx7InRvb2x0aXAiOiJ+IFpJVEEgUkVWMSBGRUVEQkFDSyBERUxBWSBORVRXT1JLIChGRE4pICYgU0NIUk9FREVSICBBTExQQVNTLUNPTUIgUkVWRVJCRVJBVE9SICg4eDgpLiBTZWUgRmF1c3QncyByZXZlcmJzLmxpYiBmb3IgZG9jdW1lbnRhdGlvbiBhbmQgIHJlZmVyZW5jZXMifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnB1dCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiSW4gRGVsYXkiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0lucHV0L0luX0RlbGF5IiwiaW5kZXgiOiIyNjIyNzYiLCJtZXRhIjpbeyIxIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJEZWxheSBpbiBtcyAgIGJlZm9yZSByZXZlcmJlcmF0aW9uIGJlZ2lucyJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiNjAiLCJtaW4iOiIyMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkRlY2F5IFRpbWVzIGluIEJhbmRzIChzZWUgdG9vbHRpcHMpIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJMRiBYIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9MRl9YIiwiaW5kZXgiOiI2NTYzNiIsIm1ldGEiOlt7IjEiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDcm9zc292ZXIgZnJlcXVlbmN5IChIeikgc2VwYXJhdGluZyBsb3cgYW5kIG1pZGRsZSBmcmVxdWVuY2llcyJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMjAwIiwibWluIjoiNTAiLCJtYXgiOiIxMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJMb3cgUlQ2MCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTG93X1JUNjAiLCJpbmRleCI6IjY1NjI4IiwibWV0YSI6W3siMiI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbG93LWZyZXF1ZW5jeSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjMiLCJtaW4iOiIxIiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJNaWQgUlQ2MCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTWlkX1JUNjAiLCJpbmRleCI6IjY1NjE2IiwibWV0YSI6W3siMyI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbWlkZGxlIGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMiIsIm1pbiI6IjEiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkhGIERhbXBpbmciLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0RlY2F5X1RpbWVzX2luX0JhbmRzXyhzZWVfdG9vbHRpcHMpL0hGX0RhbXBpbmciLCJpbmRleCI6IjY1NjI0IiwibWV0YSI6W3siNCI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkZyZXF1ZW5jeSAoSHopIGF0IHdoaWNoIHRoZSBoaWdoLWZyZXF1ZW5jeSBUNjAgaXMgaGFsZiB0aGUgbWlkZGxlLWJhbmQncyBUNjAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjYwMDAiLCJtaW4iOiIxNTAwIiwibWF4IjoiMjM1MjAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSTSBQZWFraW5nIEVxdWFsaXplciAxIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFcTEgRnJlcSIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMS9FcTFfRnJlcSIsImluZGV4IjoiNjU2MDAiLCJtZXRhIjpbeyIxIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ2VudGVyLWZyZXF1ZW5jeSBvZiBzZWNvbmQtb3JkZXIgUmVnYWxpYS1NaXRyYSBwZWFraW5nIGVxdWFsaXplciBzZWN0aW9uIDEifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMxNSIsIm1pbiI6IjQwIiwibWF4IjoiMjUwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXExIExldmVsIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9STV9QZWFraW5nX0VxdWFsaXplcl8xL0VxMV9MZXZlbCIsImluZGV4IjoiNjU2MDQiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJQZWFrIGxldmVsICAgaW4gZEIgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAxIn0seyJ1bml0IjoiZEIifV0sImluaXQiOiIwIiwibWluIjoiLTE1IiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJNIFBlYWtpbmcgRXF1YWxpemVyIDIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMiBGcmVxIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9STV9QZWFraW5nX0VxdWFsaXplcl8yL0VxMl9GcmVxIiwiaW5kZXgiOiI2NTU5MiIsIm1ldGEiOlt7IjEiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDZW50ZXItZnJlcXVlbmN5IG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMTUwMCIsIm1pbiI6IjE2MCIsIm1heCI6IjEwMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFcTIgTGV2ZWwiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL1JNX1BlYWtpbmdfRXF1YWxpemVyXzIvRXEyX0xldmVsIiwiaW5kZXgiOiI2NTU5NiIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlBlYWsgbGV2ZWwgICBpbiBkQiBvZiBzZWNvbmQtb3JkZXIgUmVnYWxpYS1NaXRyYSBwZWFraW5nIGVxdWFsaXplciBzZWN0aW9uIDIifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMTUiLCJtYXgiOiIxNSIsInN0ZXAiOiIwLjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3V0cHV0IiwibWV0YSI6W3siNSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEcnkvV2V0IE1peCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvT3V0cHV0L0RyeS9XZXRfTWl4IiwiaW5kZXgiOiI2NTU3NiIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Ii0xID0gZHJ5LCAxID0gd2V0In1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTGV2ZWwiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL091dHB1dC9MZXZlbCIsImluZGV4IjoiMjQiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJPdXRwdXQgc2NhbGUgICBmYWN0b3IifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6Ii0yMCIsIm1pbiI6Ii03MCIsIm1heCI6IjQwIiwic3RlcCI6IjAuMSJ9XX1dfSx7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiYnlwYXNzIiwiYWRkcmVzcyI6Ii96aXRhUmV2L2J5cGFzcyIsImluZGV4IjoiMTIifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class zitaRevProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            zitaRevProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            zitaRevProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            zitaRevProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            zitaRevProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
        }
    }
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= zitaRevProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        zitaRevProcessor.parse_ui(JSON.parse(getJSONzitaRev()).ui, params, zitaRevProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONzitaRev());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = zitaRevProcessor.zitaRev_instance.exports;
        this.HEAP = zitaRevProcessor.zitaRev_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * zitaRevProcessor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((zitaRevProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + zitaRevProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((zitaRevProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + zitaRevProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            zitaRevProcessor.parse_ui(this.json_object.ui, this, zitaRevProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, zitaRevProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, zitaRevProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

zitaRevProcessor.buffer_size = 128;

zitaRevProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    let wasm_module = new WebAssembly.Module(zitaRevProcessor.atob(getBase64CodezitaRev()));
    zitaRevProcessor.zitaRev_instance = new WebAssembly.Instance(wasm_module, zitaRevProcessor.importObject);
    registerProcessor('zitaRev', zitaRevProcessor);
} catch (e) {
    console.log(e); console.log("Faust zitaRev cannot be loaded or compiled");
}


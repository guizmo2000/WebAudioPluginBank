
/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONzitaRev_bypass() {
	return "{\"name\":\"zitaRev\",\"filename\":\"zitaRev_bypass\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"959052\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"JOS, Revised by RM\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Example GUI for zita_rev1_stereo (mostly following the Linux zita-rev1 GUI).\"},{\"filename\":\"zitaRev_bypass\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"zitaRev\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"zitaRev\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Zita_Rev1\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"~ ZITA REV1 FEEDBACK DELAY NETWORK (FDN) & SCHROEDER  ALLPASS-COMB REVERBERATOR (8x8). See Faust's reverbs.lib for documentation and  references\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Input\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"In Delay\",\"address\":\"/zitaRev/Zita_Rev1/Input/In_Delay\",\"index\":\"196728\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Delay in ms   before reverberation begins\"},{\"unit\":\"ms\"}],\"init\":\"60\",\"min\":\"20\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Decay Times in Bands (see tooltips)\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"LF X\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/LF_X\",\"index\":\"84\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Crossover frequency (Hz) separating low and middle frequencies\"},{\"unit\":\"Hz\"}],\"init\":\"200\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Low RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Low_RT60\",\"index\":\"76\",\"meta\":[{\"2\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"Mid RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Mid_RT60\",\"index\":\"72\",\"meta\":[{\"3\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"2\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"HF Damping\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/HF_Damping\",\"index\":\"60\",\"meta\":[{\"4\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency (Hz) at which the high-frequency T60 is half the middle-band's T60\"},{\"unit\":\"Hz\"}],\"init\":\"6000\",\"min\":\"1500\",\"max\":\"23520\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 1\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq1 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Freq\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"Hz\"}],\"init\":\"315\",\"min\":\"40\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq1 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Level\",\"index\":\"52\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 2\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq2 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Freq\",\"index\":\"40\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"Hz\"}],\"init\":\"1500\",\"min\":\"160\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq2 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Level\",\"index\":\"44\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Output\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Dry/Wet Mix\",\"address\":\"/zitaRev/Zita_Rev1/Output/Dry/Wet_Mix\",\"index\":\"16\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"-1 = dry, 1 = wet\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Level\",\"address\":\"/zitaRev/Zita_Rev1/Output/Level\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Output scale   factor\"},{\"unit\":\"dB\"}],\"init\":\"-20\",\"min\":\"-70\",\"max\":\"40\",\"step\":\"0.1\"}]}]},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/zitaRev/bypass\",\"index\":\"12\"}]}]}";
}
function getBase64CodezitaRev_bypass() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0CsYCAgAAEA2VudgVfY29zZgACA2VudgVfZXhwZgADA2VudgVfcG93ZgAPA2VudgVfdGFuZgARA4+AgIAADgABBAUGBwgJCgsMDQ4QBYeAgIAAAQCggICAAAe6gYCAAAwHY29tcHV0ZQAFDGdldE51bUlucHV0cwAGDWdldE51bU91dHB1dHMABw1nZXRQYXJhbVZhbHVlAAgNZ2V0U2FtcGxlUmF0ZQAJBGluaXQACg1pbnN0YW5jZUNsZWFyAAsRaW5zdGFuY2VDb25zdGFudHMADAxpbnN0YW5jZUluaXQADRppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAODXNldFBhcmFtVmFsdWUAEQZtZW1vcnkCAAqC4YCAAA6CgICAAAALir6AgAACBn+xAX1BACEEQQAhBUEAIQZBACEHQwAAAAAhCkMAAAAAIQtDAAAAACEMQwAAAAAhDUMAAAAAIQ5DAAAAACEPQwAAAAAhEEMAAAAAIRFDAAAAACESQwAAAAAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEMAAAAAIR1DAAAAACEeQwAAAAAhH0MAAAAAISBDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUEAIQhDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQwAAAAAhMEMAAAAAITFDAAAAACEyQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdDAAAAACE4QwAAAAAhOUMAAAAAITpDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVDAAAAACFWQwAAAAAhV0MAAAAAIVhDAAAAACFZQwAAAAAhWkMAAAAAIVtDAAAAACFcQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQwAAAAAhY0MAAAAAIWRDAAAAACFlQwAAAAAhZkEAIQlDAAAAACFnQwAAAAAhaEMAAAAAIWlDAAAAACFqQwAAAAAha0MAAAAAIWxDAAAAACFtQwAAAAAhbkMAAAAAIW9DAAAAACFwQwAAAAAhcUMAAAAAIXJDAAAAACFzQwAAAAAhdEMAAAAAIXVDAAAAACF2QwAAAAAhd0MAAAAAIXhDAAAAACF5QwAAAAAhekMAAAAAIXtDAAAAACF8QwAAAAAhfUMAAAAAIX5DAAAAACF/QwAAAAAhgAFDAAAAACGBAUMAAAAAIYIBQwAAAAAhgwFDAAAAACGEAUMAAAAAIYUBQwAAAAAhhgFDAAAAACGHAUMAAAAAIYgBQwAAAAAhiQFDAAAAACGKAUMAAAAAIYsBQwAAAAAhjAFDAAAAACGNAUMAAAAAIY4BQwAAAAAhjwFDAAAAACGQAUMAAAAAIZEBQwAAAAAhkgFDAAAAACGTAUMAAAAAIZQBQwAAAAAhlQFDAAAAACGWAUMAAAAAIZcBQwAAAAAhmAFDAAAAACGZAUMAAAAAIZoBQwAAAAAhmwFDAAAAACGcAUMAAAAAIZ0BQwAAAAAhngFDAAAAACGfAUMAAAAAIaABQwAAAAAhoQFDAAAAACGiAUMAAAAAIaMBQwAAAAAhpAFDAAAAACGlAUMAAAAAIaYBQwAAAAAhpwFDAAAAACGoAUMAAAAAIakBQwAAAAAhqgFDAAAAACGrAUMAAAAAIawBQwAAAAAhrQFDAAAAACGuAUMAAAAAIa8BQwAAAAAhsAFDAAAAACGxAUMAAAAAIbIBQwAAAAAhswFDAAAAACG0AUMAAAAAIbUBQwAAAAAhtgFDAAAAACG3AUMAAAAAIbgBQwAAAAAhuQFDAAAAACG6ASACQQBqKAIAIQQgAkEEaigCACEFIANBAGooAgAhBiADQQRqKAIAIQdDbxKDOkMAACBBQ83MTD1BACoCAJQQApQhCkEAKgIMIQtDAACAPyALkyEMQ28SgzpBACoCEJQhDUEAKgIoIQ5DAAAgQUPNzEw9QQAqAiyUEAIhD0EAKgIkIA5DAAAAACAPl5GVlCEQQwAAgD8gEJMgEEMAAIA/kpUhEUEAKgIwIRJDAAAgQUPNzEw9QQAqAjSUEAIhE0EAKgIkIBJDAAAAACATl5GVlCEUQwAAgD8gFJMgFEMAAIA/kpUhFUEAKgI4QQAqAjyUEAAhFkEAKgJIIRdBACoCRCAXlRABIRggGEMAAABAEAIhGUMAAIA/IBYgGZSTIRpDAACAPyAZkyEbIBogG5UhHEMAAAAAIBpDAAAAQBACIBtDAAAAQBAClUMAAIC/kpeRIR0gHCAdkyEeIBggHUMAAIA/IByTkpQhH0EAKgJMISBBACoCRCAglRABIBiVQwAAgL+SISFDAACAP0EAKgJQQQAqAlSUEAOVISIgIkMAAIA/kiEjQwAAAABDAACAPyAikyAjlZMhJEMAAIA/ICOVISVDAAAARkMAAAAAQQAqAvSADEEAKgL4gAyUl5aoIQhBACoCjMEMIBeVEAEhJiAmQwAAAEAQAiEnQwAAgD8gFiAnlJMhKEMAAIA/ICeTISlDAAAAACAoQwAAAEAQAiApQwAAAEAQApVDAACAv5KXkSEqICggKZUhKyAmICpDAACAPyArk5KUISxBACoCjMEMICCVEAEgJpVDAACAv5IhLSArICqTIS5BACoCuMEVIBeVEAEhLyAvQwAAAEAQAiEwQwAAgD8gFiAwlJMhMUMAAIA/IDCTITIgMSAylSEzQwAAAAAgMUMAAABAEAIgMkMAAABAEAKVQwAAgL+Sl5EhNCAzIDSTITUgLyA0QwAAgD8gM5OSlCE2QQAqArjBFSAglRABIC+VQwAAgL+SITdBACoC5MEaIBeVEAEhOCA4QwAAAEAQAiE5QwAAgD8gFiA5lJMhOkMAAIA/IDmTITsgOiA7lSE8QwAAAAAgOkMAAABAEAIgO0MAAABAEAKVQwAAgL+Sl5EhPSA8ID2TIT4gOCA9QwAAgD8gPJOSlCE/QQAqAuTBGiAglRABIDiVQwAAgL+SIUBBACoCkMIjIBeVEAEhQSBBQwAAAEAQAiFCQwAAgD8gFiBClJMhQ0MAAIA/IEKTIUQgQyBElSFFQwAAAAAgQ0MAAABAEAIgREMAAABAEAKVQwAAgL+Sl5EhRiBFIEaTIUcgQSBGQwAAgD8gRZOSlCFIQQAqApDCIyAglRABIEGVQwAAgL+SIUlBACoCvIIsIBeVEAEhSiBKQwAAAEAQAiFLQwAAgD8gFiBLlJMhTEMAAIA/IEuTIU0gTCBNlSFOQwAAAAAgTEMAAABAEAIgTUMAAABAEAKVQwAAgL+Sl5EhTyBOIE+TIVAgSiBPQwAAgD8gTpOSlCFRQQAqAryCLCAglRABIEqVQwAAgL+SIVJBACoC6IIxIBeVEAEhUyBTQwAAAEAQAiFUQwAAgD8gFiBUlJMhVUMAAIA/IFSTIVYgVSBWlSFXQwAAAAAgVUMAAABAEAIgVkMAAABAEAKVQwAAgL+Sl5EhWCBXIFiTIVkgUyBYQwAAgD8gV5OSlCFaQQAqAuiCMSAglRABIFOVQwAAgL+SIVtBACoClIM2IBeVEAEhXCBcQwAAAEAQAiFdQwAAgD8gFiBdlJMhXkMAAIA/IF2TIV8gXiBflSFgQwAAAAAgXkMAAABAEAIgX0MAAABAEAKVQwAAgL+Sl5EhYSBgIGGTIWIgXCBhQwAAgD8gYJOSlCFjQQAqApSDNiAglRABIFyVQwAAgL+SIWRDAAAAAEEAKgIkIBKUEACTIBVDAACAP5KUIWVDAAAAAEEAKgIkIA6UEACTIBFDAACAP5KUIWZBACEJA0ACQCAKQ3e+fz9BACoCCJSSIWdBACBnQwAAAAAgZ7xBgICA/AdxGzgCBCAEIAlqKgIAIWggDUN3vn8/QQAqAhiUkiFpQQAgaUMAAAAAIGm8QYCAgPwHcRs4AhRBACoCFEMAAIA/kiFqICRBACoCXJQgJUEAKgKUxDpBACoCmMQ6kpSSIWtBACBrQwAAAAAga7xBgICA/AdxGzgCWCAeQQAqAmSUIB9BACoClMQ6ICFBACoCWJSSlJIhbEEAIGxDAAAAACBsvEGAgID8B3EbOAJgQewAQQAoAmhB//8BcUECdGpD8wS1PkEAKgJglEMI5TwekjgCACAFIAlqKgIAIW1B9IAIQQAoAmhB//8AcUECdGogDCBtlDgCAEOamZk+QfSACEEAKAJoIAhrQf//AHFBAnRqKgIAlCFuQ5qZGT9BACoChMEMlEHsAEEAKAJoQQAoAvCACGtB//8BcUECdGoqAgCSIG6TIW9B/IAMQQAoAmhB/w9xQQJ0aiBvOAIAQfyADEEAKAJoQQAoAvzADGtB/w9xQQJ0aioCACFwQQAgcEMAAAAAIHC8QYCAgPwHcRs4AoDBDEMAAAAAQ5qZGT8gb5STIXEgcUMAAAAAIHG8QYCAgPwHcRshciAkQQAqApTBDJQgJUEAKgLowzpBACoC5MM6kpSSIXNBACBzQwAAAAAgc7xBgICA/AdxGzgCkMEMICwgLUEAKgKQwQyUQQAqAuTDOpKUIC5BACoCnMEMlJIhdEEAIHRDAAAAACB0vEGAgID8B3EbOAKYwQxBoMEMQQAoAmhB//8BcUECdGpD8wS1PkEAKgKYwQyUQwjlPB6SOAIAQ5qZGT9BACoCsMEVlEGgwQxBACgCaEEAKAKkwRRrQf//AXFBAnRqKgIAkiBukyF1QajBFEEAKAJoQf8fcUECdGogdTgCAEGowRRBACgCaEEAKAKowRVrQf8fcUECdGoqAgAhdkEAIHZDAAAAACB2vEGAgID8B3EbOAKswRVDAAAAAEOamRk/IHWUkyF3IHdDAAAAACB3vEGAgID8B3EbIXggJEEAKgLAwRWUICVBACoC/MM6QQAqAoDEOpKUkiF5QQAgeUMAAAAAIHm8QYCAgPwHcRs4ArzBFSA1QQAqAsjBFZQgNkEAKgL8wzogN0EAKgK8wRWUkpSSIXpBACB6QwAAAAAgerxBgICA/AdxGzgCxMEVQczBFUEAKAJoQf//AHFBAnRqQ/MEtT5BACoCxMEVlEMI5TwekjgCAEHMwRVBACgCaEEAKALQwRlrQf//AHFBAnRqKgIAIG5DmpkZP0EAKgLcwRqUkpIhe0HUwRlBACgCaEH/H3FBAnRqIHs4AgBB1MEZQQAoAmhBACgC1MEaa0H/H3FBAnRqKgIAIXxBACB8QwAAAAAgfLxBgICA/AdxGzgC2MEaQwAAAABDmpkZPyB7lJMhfSB9QwAAAAAgfbxBgICA/AdxGyF+ICRBACoC7MEalCAlQQAqAszDOkEAKgLQwzqSlJIhf0EAIH9DAAAAACB/vEGAgID8B3EbOALowRogPkEAKgL0wRqUID9BACoCzMM6IEBBACoC6MEalJKUkiGAAUEAIIABQwAAAAAggAG8QYCAgPwHcRs4AvDBGkH4wRpBACgCaEH//wFxQQJ0akPzBLU+QQAqAvDBGpRDCOU8HpI4AgAgbkOamRk/QQAqAojCI5RB+MEaQQAoAmhBACgC/MEia0H//wFxQQJ0aioCAJKSIYEBQYDCIkEAKAJoQf8fcUECdGoggQE4AgBBgMIiQQAoAmhBACgCgMIja0H/H3FBAnRqKgIAIYIBQQAgggFDAAAAACCCAbxBgICA/AdxGzgChMIjQwAAAABDmpkZPyCBAZSTIYMBIIMBQwAAAAAggwG8QYCAgPwHcRshhAEgJEEAKgKYwiOUICVBACoCiMQ6QQAqAozEOpKUkiGFAUEAIIUBQwAAAAAghQG8QYCAgPwHcRs4ApTCIyBHQQAqAqDCI5QgSEEAKgKIxDogSUEAKgKUwiOUkpSSIYYBQQAghgFDAAAAACCGAbxBgICA/AdxGzgCnMIjQaTCI0EAKAJoQf//AHFBAnRqQ/MEtT5BACoCnMIjlEMI5TwekjgCAEGswidBACgCaEH//wBxQQJ0aiAMIGiUOAIAQ5qZmT5BrMInQQAoAmggCGtB//8AcUECdGoqAgCUIYcBQaTCI0EAKAJoQQAoAqjCJ2tB//8AcUECdGoqAgAghwFDmpkZP0EAKgK0giyUkpMhiAFBrMIrQQAoAmhB/w9xQQJ0aiCIATgCAEGswitBACgCaEEAKAKsgixrQf8PcUECdGoqAgAhiQFBACCJAUMAAAAAIIkBvEGAgID8B3EbOAKwgixDmpkZPyCIAZQhigEgigFDAAAAACCKAbxBgICA/AdxGyGLASAkQQAqAsSCLJQgJUEAKgLYwzpBACoC3MM6kpSSIYwBQQAgjAFDAAAAACCMAbxBgICA/AdxGzgCwIIsIFBBACoCzIIslCBRQQAqAtjDOiBSQQAqAsCCLJSSlJIhjQFBACCNAUMAAAAAII0BvEGAgID8B3EbOALIgixB0IIsQQAoAmhB//8AcUECdGpD8wS1PkEAKgLIgiyUQwjlPB6SOAIAQdCCLEEAKAJoQQAoAtSCMGtB//8AcUECdGoqAgAghwFDmpkZP0EAKgLggjGUkpMhjgFB2IIwQQAoAmhB/x9xQQJ0aiCOATgCAEHYgjBBACgCaEEAKALYgjFrQf8fcUECdGoqAgAhjwFBACCPAUMAAAAAII8BvEGAgID8B3EbOALcgjFDmpkZPyCOAZQhkAEgkAFDAAAAACCQAbxBgICA/AdxGyGRASAkQQAqAvCCMZQgJUEAKgLwwzpBACoC9MM6kpSSIZIBQQAgkgFDAAAAACCSAbxBgICA/AdxGzgC7IIxIFlBACoC+IIxlCBaQQAqAvDDOiBbQQAqAuyCMZSSlJIhkwFBACCTAUMAAAAAIJMBvEGAgID8B3EbOAL0gjFB/IIxQQAoAmhB//8AcUECdGpD8wS1PkEAKgL0gjGUQwjlPB6SOAIAIIcBQfyCMUEAKAJoQQAoAoCDNWtB//8AcUECdGoqAgCSQ5qZGT9BACoCjIM2lJMhlAFBhIM1QQAoAmhB/x9xQQJ0aiCUATgCAEGEgzVBACgCaEEAKAKEgzZrQf8fcUECdGoqAgAhlQFBACCVAUMAAAAAIJUBvEGAgID8B3EbOAKIgzZDmpkZPyCUAZQhlgEglgFDAAAAACCWAbxBgICA/AdxGyGXASAkQQAqApyDNpQgJUEAKgLAwzpBACoCxMM6kpSSIZgBQQAgmAFDAAAAACCYAbxBgICA/AdxGzgCmIM2IGJBACoCpIM2lCBjQQAqAsDDOiBkQQAqApiDNpSSlJIhmQFBACCZAUMAAAAAIJkBvEGAgID8B3EbOAKggzZBqIM2QQAoAmhB//8AcUECdGpD8wS1PkEAKgKggzaUQwjlPB6SOAIAQaiDNkEAKAJoQQAoAqyDOmtB//8AcUECdGoqAgAghwGSQ5qZGT9BACoCuMM6lJMhmgFBsIM6QQAoAmhB/w9xQQJ0aiCaATgCAEGwgzpBACgCaEEAKAKwwzprQf8PcUECdGoqAgAhmwFBACCbAUMAAAAAIJsBvEGAgID8B3EbOAK0wzpDmpkZPyCaAZQhnAEgnAFDAAAAACCcAbxBgICA/AdxGyGdASB+IHiSIZ4BIHIgngGSIZ8BQQAqAoTBDEEAKgKwwRVBACoC3MEaQQAqAojCI0EAKgK0gixBACoC4IIxIJEBIJcBIJ0BIIQBIIsBQQAqAoyDNkEAKgK4wzognwGSkpKSkpKSkpKSkpKSIaABQQAgoAFDAAAAACCgAbxBgICA/AdxGzgCvMM6QQAqArSCLEEAKgLggjEgkQEglwEgnQEgiwFBACoCuMM6QQAqAoyDNpKSkpKSkpJBACoChMEMQQAqArDBFUEAKgLcwRpBACoCiMIjIIQBIJ8BkpKSkpKTIaEBQQAgoQFDAAAAACChAbxBgICA/AdxGzgCyMM6IHggcpIhogFBACoC3MEaQQAqAojCIyCXASCdASCEAUEAKgKMgzYgfkEAKgK4wzqSkpKSkpKSQQAqAoTBDEEAKgKwwRVBACoCtIIsQQAqAuCCMSCRASCLASCiAZKSkpKSkpMhowFBACCjAUMAAAAAIKMBvEGAgID8B3EbOALUwzpBACoChMEMQQAqArDBFSCXASCdAUEAKgKMgzZBACoCuMM6IKIBkpKSkpKSQQAqAtzBGkEAKgKIwiNBACoCtIIsQQAqAuCCMSCRASCEASB+IIsBkpKSkpKSkpMhpAFBACCkAUMAAAAAIKQBvEGAgID8B3EbOALgwzogfiBykiGlAUEAKgKwwRVBACoCiMIjQQAqAuCCMSCRASCdASCEASB4QQAqArjDOpKSkpKSkpJBACoChMEMQQAqAtzBGkEAKgK0giwglwEgiwFBACoCjIM2IKUBkpKSkpKSkyGmAUEAIKYBQwAAAAAgpgG8QYCAgPwHcRs4AuzDOkEAKgK4wzogpQGSIJ0BkiCRAZJBACoC4IIxkkEAKgLcwRqSQQAqAoTBDJIghAEgiwEgeEEAKgKMgzaSkpIglwGSQQAqArSCLJJBACoCiMIjkkEAKgKwwRWSkyGnAUEAIKcBQwAAAAAgpwG8QYCAgPwHcRs4AvjDOiCEASCLASByQQAqArjDOpKSkiCdAZJBACoCtIIskkEAKgKIwiOSQQAqAoTBDJJBACoCjIM2IJ4BkiCXAZIgkQGSQQAqAuCCMZJBACoC3MEakkEAKgKwwRWSkyGoAUEAIKgBQwAAAAAgqAG8QYCAgPwHcRs4AoTEOiCLAUEAKgK4wzogngGSkiCdAZJBACoCtIIskkEAKgLcwRqSQQAqArDBFZIghAEgckEAKgKMgzaSkiCXAZIgkQGSQQAqAuCCMZJBACoCiMIjkkEAKgKEwQySkyGpAUEAIKkBQwAAAAAgqQG8QYCAgPwHcRs4ApDEOkOkcL0+QQAqAsjDOkEAKgLUwzqSlCGqASBlQQAqAqDEOpQhqwEgqgEgqwEgFUEAKgKkxDqUkpMhrAFBACCsAUMAAAAAIKwBvEGAgID8B3EbOAKcxDogFUEAKgKcxDqUIa0BQwAAAD8grQFBACoCpMQ6IKoBIKsBkpKSIBMgrQEgqwFBACoCpMQ6kpIgqgGTlJKUIa4BIGZBACoCrMQ6lCGvASCuASCvASARQQAqArDEOpSSkyGwAUEAILABQwAAAAAgsAG8QYCAgPwHcRs4AqjEOiARQQAqAqjEOpQhsQFDAACAP0MAAAA/IGqUkyGyASAGIAlqQwAAAD9BACoCBCAMIGggapSUILEBQQAqArDEOiCuASCvAZKSkiAPILEBIK8BQQAqArDEOpKSIK4Bk5SSILIBlJKUlCALIGiUkjgCAEOkcL0+QQAqAsjDOkEAKgLUwzqTlCGzASBlQQAqArjEOpQhtAEgswEgtAEgFUEAKgK8xDqUkpMhtQFBACC1AUMAAAAAILUBvEGAgID8B3EbOAK0xDogFUEAKgK0xDqUIbYBQwAAAD8gtgFBACoCvMQ6ILMBILQBkpKSIBMgtgEgtAFBACoCvMQ6kpIgswGTlJKUIbcBIGZBACoCxMQ6lCG4ASC3ASC4ASARQQAqAsjEOpSSkyG5AUEAILkBQwAAAAAguQG8QYCAgPwHcRs4AsDEOiARQQAqAsDEOpQhugEgByAJakMAAAA/QQAqAgQgugFBACoCyMQ6ILcBILgBkpKSIA8gugEguAFBACoCyMQ6kpIgtwGTlJIgsgGUIAwgbSBqlJSSlJQgCyBtlJI4AgBBAEEAKgIEOAIIQQBBACoCFDgCGEEAQQAqAlg4AlxBAEEAKgJgOAJkQQBBACgCaEEBajYCaEEAQQAqAoDBDDgChMEMQQBBACoCkMEMOAKUwQxBAEEAKgKYwQw4ApzBDEEAQQAqAqzBFTgCsMEVQQBBACoCvMEVOALAwRVBAEEAKgLEwRU4AsjBFUEAQQAqAtjBGjgC3MEaQQBBACoC6MEaOALswRpBAEEAKgLwwRo4AvTBGkEAQQAqAoTCIzgCiMIjQQBBACoClMIjOAKYwiNBAEEAKgKcwiM4AqDCI0EAQQAqArCCLDgCtIIsQQBBACoCwIIsOALEgixBAEEAKgLIgiw4AsyCLEEAQQAqAtyCMTgC4IIxQQBBACoC7IIxOALwgjFBAEEAKgL0gjE4AviCMUEAQQAqAoiDNjgCjIM2QQBBACoCmIM2OAKcgzZBAEEAKgKggzY4AqSDNkEAQQAqArTDOjgCuMM6QQBBACoCwMM6OALEwzpBAEEAKgK8wzo4AsDDOkEAQQAqAszDOjgC0MM6QQBBACoCyMM6OALMwzpBAEEAKgLYwzo4AtzDOkEAQQAqAtTDOjgC2MM6QQBBACoC5MM6OALowzpBAEEAKgLgwzo4AuTDOkEAQQAqAvDDOjgC9MM6QQBBACoC7MM6OALwwzpBAEEAKgL8wzo4AoDEOkEAQQAqAvjDOjgC/MM6QQBBACoCiMQ6OAKMxDpBAEEAKgKExDo4AojEOkEAQQAqApTEOjgCmMQ6QQBBACoCkMQ6OAKUxDpBAEEAKgKgxDo4AqTEOkEAQQAqApzEOjgCoMQ6QQBBACoCrMQ6OAKwxDpBAEEAKgKoxDo4AqzEOkEAQQAqArjEOjgCvMQ6QQBBACoCtMQ6OAK4xDpBAEEAKgLExDo4AsjEOkEAQQAqAsDEOjgCxMQ6IAlBBGohCSAJQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEECDwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIcDwuOgICAAAAgACABEAQgACABEA0LyJaAgAABOH9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAIQEDQAJAQQQgAUECdGpDAAAAADgCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQRQgAkECdGpDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQdgAIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHgACAEQQJ0akMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQBBADYCaEEAIQUDQAJAQewAIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBgIACSARADAIMAQsLC0EAIQYDQAJAQfSACCAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQYCAAUgEQAwCDAELCwtBACEHA0ACQEH8gAwgB0ECdGpDAAAAADgCACAHQQFqIQcgB0GAEEgEQAwCDAELCwtBACEIA0ACQEGAwQwgCEECdGpDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQZDBDCAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQQJIBEAMAgwBCwsLQQAhCgNAAkBBmMEMIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQEGgwQwgC0ECdGpDAAAAADgCACALQQFqIQsgC0GAgAJIBEAMAgwBCwsLQQAhDANAAkBBqMEUIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBgCBIBEAMAgwBCwsLQQAhDQNAAkBBrMEVIA1BAnRqQwAAAAA4AgAgDUEBaiENIA1BAkgEQAwCDAELCwtBACEOA0ACQEG8wRUgDkECdGpDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQcTBFSAPQQJ0akMAAAAAOAIAIA9BAWohDyAPQQJIBEAMAgwBCwsLQQAhEANAAkBBzMEVIBBBAnRqQwAAAAA4AgAgEEEBaiEQIBBBgIABSARADAIMAQsLC0EAIREDQAJAQdTBGSARQQJ0akMAAAAAOAIAIBFBAWohESARQYAgSARADAIMAQsLC0EAIRIDQAJAQdjBGiASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBB6MEaIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQEHwwRogFEECdGpDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAQfjBGiAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQYCAAkgEQAwCDAELCwtBACEWA0ACQEGAwiIgFkECdGpDAAAAADgCACAWQQFqIRYgFkGAIEgEQAwCDAELCwtBACEXA0ACQEGEwiMgF0ECdGpDAAAAADgCACAXQQFqIRcgF0ECSARADAIMAQsLC0EAIRgDQAJAQZTCIyAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQQJIBEAMAgwBCwsLQQAhGQNAAkBBnMIjIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBAkgEQAwCDAELCwtBACEaA0ACQEGkwiMgGkECdGpDAAAAADgCACAaQQFqIRogGkGAgAFIBEAMAgwBCwsLQQAhGwNAAkBBrMInIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBgIABSARADAIMAQsLC0EAIRwDQAJAQazCKyAcQQJ0akMAAAAAOAIAIBxBAWohHCAcQYAQSARADAIMAQsLC0EAIR0DQAJAQbCCLCAdQQJ0akMAAAAAOAIAIB1BAWohHSAdQQJIBEAMAgwBCwsLQQAhHgNAAkBBwIIsIB5BAnRqQwAAAAA4AgAgHkEBaiEeIB5BAkgEQAwCDAELCwtBACEfA0ACQEHIgiwgH0ECdGpDAAAAADgCACAfQQFqIR8gH0ECSARADAIMAQsLC0EAISADQAJAQdCCLCAgQQJ0akMAAAAAOAIAICBBAWohICAgQYCAAUgEQAwCDAELCwtBACEhA0ACQEHYgjAgIUECdGpDAAAAADgCACAhQQFqISEgIUGAIEgEQAwCDAELCwtBACEiA0ACQEHcgjEgIkECdGpDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAQeyCMSAjQQJ0akMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkBB9IIxICRBAnRqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQEH8gjEgJUECdGpDAAAAADgCACAlQQFqISUgJUGAgAFIBEAMAgwBCwsLQQAhJgNAAkBBhIM1ICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBgCBIBEAMAgwBCwsLQQAhJwNAAkBBiIM2ICdBAnRqQwAAAAA4AgAgJ0EBaiEnICdBAkgEQAwCDAELCwtBACEoA0ACQEGYgzYgKEECdGpDAAAAADgCACAoQQFqISggKEECSARADAIMAQsLC0EAISkDQAJAQaCDNiApQQJ0akMAAAAAOAIAIClBAWohKSApQQJIBEAMAgwBCwsLQQAhKgNAAkBBqIM2ICpBAnRqQwAAAAA4AgAgKkEBaiEqICpBgIABSARADAIMAQsLC0EAISsDQAJAQbCDOiArQQJ0akMAAAAAOAIAICtBAWohKyArQYAQSARADAIMAQsLC0EAISwDQAJAQbTDOiAsQQJ0akMAAAAAOAIAICxBAWohLCAsQQJIBEAMAgwBCwsLQQAhLQNAAkBBvMM6IC1BAnRqQwAAAAA4AgAgLUEBaiEtIC1BA0gEQAwCDAELCwtBACEuA0ACQEHIwzogLkECdGpDAAAAADgCACAuQQFqIS4gLkEDSARADAIMAQsLC0EAIS8DQAJAQdTDOiAvQQJ0akMAAAAAOAIAIC9BAWohLyAvQQNIBEAMAgwBCwsLQQAhMANAAkBB4MM6IDBBAnRqQwAAAAA4AgAgMEEBaiEwIDBBA0gEQAwCDAELCwtBACExA0ACQEHswzogMUECdGpDAAAAADgCACAxQQFqITEgMUEDSARADAIMAQsLC0EAITIDQAJAQfjDOiAyQQJ0akMAAAAAOAIAIDJBAWohMiAyQQNIBEAMAgwBCwsLQQAhMwNAAkBBhMQ6IDNBAnRqQwAAAAA4AgAgM0EBaiEzIDNBA0gEQAwCDAELCwtBACE0A0ACQEGQxDogNEECdGpDAAAAADgCACA0QQFqITQgNEEDSARADAIMAQsLC0EAITUDQAJAQZzEOiA1QQJ0akMAAAAAOAIAIDVBAWohNSA1QQNIBEAMAgwBCwsLQQAhNgNAAkBBqMQ6IDZBAnRqQwAAAAA4AgAgNkEBaiE2IDZBA0gEQAwCDAELCwtBACE3A0ACQEG0xDogN0ECdGpDAAAAADgCACA3QQFqITcgN0EDSARADAIMAQsLC0EAITgDQAJAQcDEOiA4QQJ0akMAAAAAOAIAIDhBAWohOCA4QQNIBEAMAgwBCwsLC4qKgIAAAEEAIAE2AhxBAEMAgDtIQwAAgD9BACgCHLKXljgCIEEAQ9sPyUBBACoCIJU4AiRBAEPbD8lAQQAqAiCVOAI4QQBDUkVhPkEAKgIglEMAAAA/ko44AkBBAEMAAAAAQ1UM3UBBACoCQJSTQQAqAiCVOAJEQQBD2w9JQEEAKgIglTgCUEEAQ9annDxBACoCIJRDAAAAP5KOOALsgAhBAEMAAIBGQwAAAABBACoCQEEAKgLsgAiTl5aoNgLwgAhBAENvEoM6QQAqAiCUOAL0gAxBAEMAAIBEQwAAAABBACoC7IAIQwAAgL+Sl5aoNgL8wAxBAEM4h4M+QQAqAiCUQwAAAD+SjjgCiMEMQQBDAAAAAENVDN1AQQAqAojBDJSTQQAqAiCVOAKMwQxBAEN16d88QQAqAiCUQwAAAD+SjjgCoMEUQQBDAACARkMAAAAAQQAqAojBDEEAKgKgwRSTl5aoNgKkwRRBAEMAAABFQwAAAABBACoCoMEUQwAAgL+Sl5aoNgKowRVBAEMU60Q+QQAqAiCUQwAAAD+SjjgCtMEVQQBDAAAAAENVDN1AQQAqArTBFZSTQQAqAiCVOAK4wRVBAEOu8+88QQAqAiCUQwAAAD+SjjgCzMEZQQBDAAAARkMAAAAAQQAqArTBFUEAKgLMwRmTl5aoNgLQwRlBAEMAAABFQwAAAABBACoCzMEZQwAAgL+Sl5aoNgLUwRpBAEM3cFc+QQAqAiCUQwAAAD+SjjgC4MEaQQBDAAAAAENVDN1AQQAqAuDBGpSTQQAqAiCVOALkwRpBAEONDsg8QQAqAiCUQwAAAD+SjjgC+MEiQQBDAACARkMAAAAAQQAqAuDBGkEAKgL4wSKTl5aoNgL8wSJBAEMAAABFQwAAAABBACoC+MEiQwAAgL+Sl5aoNgKAwiNBAEMAAAA+QQAqAiCUQwAAAD+SjjgCjMIjQQBDAAAAAENVDN1AQQAqAozCI5STQQAqAiCVOAKQwiNBAEPxflw8QQAqAiCUQwAAAD+SjjgCpMInQQBDAAAARkMAAAAAQQAqAozCI0EAKgKkwieTl5aoNgKowidBAEMAAIBEQwAAAABBACoCpMInQwAAgL+Sl5aoNgKsgixBAEO05wI+QQAqAiCUQwAAAD+SjjgCuIIsQQBDAAAAAENVDN1AQQAqAriCLJSTQQAqAiCVOAK8gixBAEMycwE9QQAqAiCUQwAAAD+SjjgC0IIwQQBDAAAARkMAAAAAQQAqAriCLEEAKgLQgjCTl5aoNgLUgjBBAEMAAABFQwAAAABBACoC0IIwQwAAgL+Sl5aoNgLYgjFBAEP35zI+QQAqAiCUQwAAAD+SjjgC5IIxQQBDAAAAAENVDN1AQQAqAuSCMZSTQQAqAiCVOALogjFBAEMrobs8QQAqAiCUQwAAAD+SjjgC/II1QQBDAAAARkMAAAAAQQAqAuSCMUEAKgL8gjWTl5aoNgKAgzVBAEMAAABFQwAAAABBACoC/II1QwAAgL+Sl5aoNgKEgzZBAEPZzRw+QQAqAiCUQwAAAD+SjjgCkIM2QQBDAAAAAENVDN1AQQAqApCDNpSTQQAqAiCVOAKUgzZBAEOorKY8QQAqAiCUQwAAAD+SjjgCqIM6QQBDAAAARkMAAAAAQQAqApCDNkEAKgKogzqTl5aoNgKsgzpBAEMAAIBEQwAAAABBACoCqIM6QwAAgL+Sl5aoNgKwwzoLkICAgAAAIAAgARAMIAAQDiAAEAsL/ICAgAAAQQBDAACgwTgCAEEAQwAAAAA4AgxBAEMAAAAAOAIQQQBDAIC7RDgCKEEAQwAAAAA4AixBAEMAgJ1DOAIwQQBDAAAAADgCNEEAQwCAu0U4AjxBAEMAAABAOAJIQQBDAABAQDgCTEEAQwAASEM4AlRBAEMAAHBCOAL4gAwLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLsKaAgAABAEEAC6kmeyJuYW1lIjoieml0YVJldiIsImZpbGVuYW1lIjoieml0YVJldl9ieXBhc3MiLCJ2ZXJzaW9uIjoiMi41LjIzIiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiI5NTkwNTIiLCJpbnB1dHMiOiIyIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJKT1MsIFJldmlzZWQgYnkgUk0ifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiRXhhbXBsZSBHVUkgZm9yIHppdGFfcmV2MV9zdGVyZW8gKG1vc3RseSBmb2xsb3dpbmcgdGhlIExpbnV4IHppdGEtcmV2MSBHVUkpLiJ9LHsiZmlsZW5hbWUiOiJ6aXRhUmV2X2J5cGFzcyJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoieml0YVJldiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoieml0YVJldiIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJaaXRhX1JldjEiLCJtZXRhIjpbeyIwIjoiIn0seyJ0b29sdGlwIjoifiBaSVRBIFJFVjEgRkVFREJBQ0sgREVMQVkgTkVUV09SSyAoRkROKSAmIFNDSFJPRURFUiAgQUxMUEFTUy1DT01CIFJFVkVSQkVSQVRPUiAoOHg4KS4gU2VlIEZhdXN0J3MgcmV2ZXJicy5saWIgZm9yIGRvY3VtZW50YXRpb24gYW5kICByZWZlcmVuY2VzIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5wdXQiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkluIERlbGF5IiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9JbnB1dC9Jbl9EZWxheSIsImluZGV4IjoiMTk2NzI4IiwibWV0YSI6W3siMSI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRGVsYXkgaW4gbXMgICBiZWZvcmUgcmV2ZXJiZXJhdGlvbiBiZWdpbnMifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjYwIiwibWluIjoiMjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJEZWNheSBUaW1lcyBpbiBCYW5kcyAoc2VlIHRvb2x0aXBzKSIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTEYgWCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTEZfWCIsImluZGV4IjoiODQiLCJtZXRhIjpbeyIxIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ3Jvc3NvdmVyIGZyZXF1ZW5jeSAoSHopIHNlcGFyYXRpbmcgbG93IGFuZCBtaWRkbGUgZnJlcXVlbmNpZXMifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjIwMCIsIm1pbiI6IjUwIiwibWF4IjoiMTAwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTG93IFJUNjAiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0RlY2F5X1RpbWVzX2luX0JhbmRzXyhzZWVfdG9vbHRpcHMpL0xvd19SVDYwIiwiaW5kZXgiOiI3NiIsIm1ldGEiOlt7IjIiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIGxvdy1mcmVxdWVuY3kgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIzIiwibWluIjoiMSIsIm1heCI6IjgiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTWlkIFJUNjAiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0RlY2F5X1RpbWVzX2luX0JhbmRzXyhzZWVfdG9vbHRpcHMpL01pZF9SVDYwIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjMiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIG1pZGRsZSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjIiLCJtaW4iOiIxIiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJIRiBEYW1waW5nIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9IRl9EYW1waW5nIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjQiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJGcmVxdWVuY3kgKEh6KSBhdCB3aGljaCB0aGUgaGlnaC1mcmVxdWVuY3kgVDYwIGlzIGhhbGYgdGhlIG1pZGRsZS1iYW5kJ3MgVDYwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI2MDAwIiwibWluIjoiMTUwMCIsIm1heCI6IjIzNTIwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUk0gUGVha2luZyBFcXVhbGl6ZXIgMSIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXExIEZyZXEiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL1JNX1BlYWtpbmdfRXF1YWxpemVyXzEvRXExX0ZyZXEiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siMSI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNlbnRlci1mcmVxdWVuY3kgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAxIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMTUiLCJtaW4iOiI0MCIsIm1heCI6IjI1MDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMSBMZXZlbCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMS9FcTFfTGV2ZWwiLCJpbmRleCI6IjUyIiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUGVhayBsZXZlbCAgIGluIGRCIG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMSJ9LHsidW5pdCI6ImRCIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xNSIsIm1heCI6IjE1Iiwic3RlcCI6IjAuMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSTSBQZWFraW5nIEVxdWFsaXplciAyIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFcTIgRnJlcSIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMi9FcTJfRnJlcSIsImluZGV4IjoiNDAiLCJtZXRhIjpbeyIxIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ2VudGVyLWZyZXF1ZW5jeSBvZiBzZWNvbmQtb3JkZXIgUmVnYWxpYS1NaXRyYSBwZWFraW5nIGVxdWFsaXplciBzZWN0aW9uIDIifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjE1MDAiLCJtaW4iOiIxNjAiLCJtYXgiOiIxMDAwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXEyIExldmVsIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9STV9QZWFraW5nX0VxdWFsaXplcl8yL0VxMl9MZXZlbCIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJQZWFrIGxldmVsICAgaW4gZEIgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAyIn0seyJ1bml0IjoiZEIifV0sImluaXQiOiIwIiwibWluIjoiLTE1IiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik91dHB1dCIsIm1ldGEiOlt7IjUiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRHJ5L1dldCBNaXgiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL091dHB1dC9EcnkvV2V0X01peCIsImluZGV4IjoiMTYiLCJtZXRhIjpbeyIxIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiItMSA9IGRyeSwgMSA9IHdldCJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkxldmVsIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9PdXRwdXQvTGV2ZWwiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJPdXRwdXQgc2NhbGUgICBmYWN0b3IifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6Ii0yMCIsIm1pbiI6Ii03MCIsIm1heCI6IjQwIiwic3RlcCI6IjAuMSJ9XX1dfSx7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiYnlwYXNzIiwiYWRkcmVzcyI6Ii96aXRhUmV2L2J5cGFzcyIsImluZGV4IjoiMTIifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class zitaRev_bypassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            zitaRev_bypassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            zitaRev_bypassProcessor.parse_items(group.items, obj, callback);
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
            zitaRev_bypassProcessor.parse_items(item.items, obj, callback);
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
            zitaRev_bypassProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= zitaRev_bypassProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        zitaRev_bypassProcessor.parse_ui(JSON.parse(getJSONzitaRev_bypass()).ui, params, zitaRev_bypassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONzitaRev_bypass());

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
        
        this.factory = zitaRev_bypassProcessor.zitaRev_bypass_instance.exports;
        this.HEAP = zitaRev_bypassProcessor.zitaRev_bypass_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        console.log(this.HEAP);
        console.log("coucou");
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * zitaRev_bypassProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((zitaRev_bypassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + zitaRev_bypassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((zitaRev_bypassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + zitaRev_bypassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            zitaRev_bypassProcessor.parse_ui(this.json_object.ui, this, zitaRev_bypassProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, zitaRev_bypassProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, zitaRev_bypassProcessor.buffer_size, this.ins, this.outs);
        
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

zitaRev_bypassProcessor.buffer_size = 128;

zitaRev_bypassProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(zitaRev_bypassProcessor.atob(getBase64CodezitaRev_bypass()));
    zitaRev_bypassProcessor.zitaRev_bypass_instance = new WebAssembly.Instance(wasm_module, zitaRev_bypassProcessor.importObject);
    registerProcessor('zitaRev_bypass', zitaRev_bypassProcessor);
} catch (e) {
    console.log(e); console.log("Faust zitaRev_bypass cannot be loaded or compiled");
}


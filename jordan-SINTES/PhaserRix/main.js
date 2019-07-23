
/*
Code generated with Faust version 2.18.0
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONPhaserRix() {
    return "{\"name\": \"PhaserRix\",\"filename\": \"PhaserRix.dsp\",\"version\": \"2.18.0\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/607F8B012B2D811A0EE28AC27BEE6A36C6845C70/web/wap\"],\"size\": \"208\",\"inputs\": \"2\",\"outputs\": \"2\",\"meta\": [ { \"category\": \"Modulation\" },{ \"compilation_options\": \"-single -scal -I libraries/ -I project/ -lang wasm\" },{ \"effect_lib_author\": \"Julius O. Smith (jos at ccrma.stanford.edu)\" },{ \"effect_lib_copyright\": \"Julius O. Smith III\" },{ \"effect_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"effect_lib_exciter_author\": \"Priyanka Shekar (pshekar@ccrma.stanford.edu)\" },{ \"effect_lib_exciter_copyright\": \"Copyright (c) 2013 Priyanka Shekar\" },{ \"effect_lib_exciter_license\": \"MIT License (MIT)\" },{ \"effect_lib_exciter_name\": \"Harmonic Exciter\" },{ \"effect_lib_exciter_version\": \"1.0\" },{ \"effect_lib_license\": \"STK-4.3\" },{ \"effect_lib_name\": \"Faust Audio Effect Library\" },{ \"effect_lib_version\": \"1.33\" },{ \"filename\": \"PhaserRix.dsp\" },{ \"filter_lib_author\": \"Julius O. Smith (jos at ccrma.stanford.edu)\" },{ \"filter_lib_copyright\": \"Julius O. Smith III\" },{ \"filter_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"filter_lib_license\": \"STK-4.3\" },{ \"filter_lib_name\": \"Faust Filter Library\" },{ \"filter_lib_reference\": \"https://ccrma.stanford.edu/~jos/filters/\" },{ \"filter_lib_version\": \"1.29\" },{ \"id\": \"phaser\" },{ \"library_path\": \"FaustDSP\" },{ \"math_lib_author\": \"GRAME\" },{ \"math_lib_copyright\": \"GRAME\" },{ \"math_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"math_lib_license\": \"LGPL with exception\" },{ \"math_lib_name\": \"Math Library\" },{ \"math_lib_version\": \"1.0\" },{ \"maths_lib_author\": \"GRAME\" },{ \"maths_lib_copyright\": \"GRAME\" },{ \"maths_lib_license\": \"LGPL with exception\" },{ \"maths_lib_name\": \"Faust Math Library\" },{ \"maths_lib_version\": \"2.1\" },{ \"music_lib_author\": \"GRAME\" },{ \"music_lib_copyright\": \"GRAME\" },{ \"music_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"music_lib_license\": \"LGPL with exception\" },{ \"music_lib_name\": \"Music Library\" },{ \"music_lib_version\": \"1.0\" },{ \"name\": \"PhaserRix\" },{ \"oscillator_lib_author\": \"Julius O. Smith (jos at ccrma.stanford.edu)\" },{ \"oscillator_lib_copyright\": \"Julius O. Smith III\" },{ \"oscillator_lib_deprecated\": \"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\" },{ \"oscillator_lib_license\": \"STK-4.3\" },{ \"oscillator_lib_name\": \"Faust Oscillator Library\" },{ \"oscillator_lib_version\": \"1.11\" }],\"ui\": [ {\"type\": \"vgroup\",\"label\": \"PhaserRix\",\"items\": [ {\"type\": \"hslider\",\"label\": \"Depth\",\"address\": \"/PhaserRix/Depth\",\"index\": \"40\",\"meta\": [{ \"OWL\": \"PARAMETER_B\" },{ \"style\": \"knob\" }],\"init\": \"1\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.01\"},{\"type\": \"hslider\",\"label\": \"Feedback Gain\",\"address\": \"/PhaserRix/Feedback_Gain\",\"index\": \"52\",\"meta\": [{ \"OWL\": \"PARAMETER_C\" },{ \"style\": \"knob\" }],\"init\": \"0\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.01\"},{\"type\": \"hslider\",\"label\": \"MaxNotch1Freq\",\"address\": \"/PhaserRix/MaxNotch1Freq\",\"index\": \"68\",\"meta\": [{ \"style\": \"knob\" },{ \"unit\": \"Hz\" }],\"init\": \"800\",\"min\": \"20\",\"max\": \"10000\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"MinNotch1Freq\",\"address\": \"/PhaserRix/MinNotch1Freq\",\"index\": \"64\",\"meta\": [{ \"style\": \"knob\" },{ \"unit\": \"Hz\" }],\"init\": \"100\",\"min\": \"20\",\"max\": \"5000\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"Notch Width\",\"address\": \"/PhaserRix/Notch_Width\",\"index\": \"48\",\"meta\": [{ \"OWL\": \"PARAMETER_D\" },{ \"style\": \"knob\" },{ \"unit\": \"Hz\" }],\"init\": \"1000\",\"min\": \"10\",\"max\": \"5000\",\"step\": \"1\"},{\"type\": \"hslider\",\"label\": \"NotchFreq\",\"address\": \"/PhaserRix/NotchFreq\",\"index\": \"56\",\"meta\": [{ \"style\": \"knob\" }],\"init\": \"1.5\",\"min\": \"1.1\",\"max\": \"4\",\"step\": \"0.01\"},{\"type\": \"hslider\",\"label\": \"Speed\",\"address\": \"/PhaserRix/Speed\",\"index\": \"72\",\"meta\": [{ \"OWL\": \"PARAMETER_A\" },{ \"style\": \"knob\" },{ \"unit\": \"Hz\" }],\"init\": \"0.5\",\"min\": \"0.001\",\"max\": \"20\",\"step\": \"0.01\"},{\"type\": \"checkbox\",\"label\": \"VibratoMode\",\"address\": \"/PhaserRix/VibratoMode\",\"index\": \"36\",\"meta\": [{ \"enum\": \"direct | vibrato\" }]},{\"type\": \"checkbox\",\"label\": \"bypass\",\"address\": \"/PhaserRix/bypass\",\"index\": \"20\"},{\"type\": \"checkbox\",\"label\": \"invert\",\"address\": \"/PhaserRix/invert\",\"index\": \"148\",\"meta\": [{ \"enum\": \"linear|invert\" }]},{\"type\": \"hslider\",\"label\": \"level\",\"address\": \"/PhaserRix/level\",\"index\": \"32\",\"meta\": [{ \"style\": \"knob\" },{ \"unit\": \"dB\" }],\"init\": \"0\",\"min\": \"-60\",\"max\": \"10\",\"step\": \"0.1\"}]}]}";
}
function getBase64CodePhaserRix() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0CsYCAgAAEA2VudgVfY29zZgACA2VudgVfZXhwZgADA2VudgVfcG93ZgAPA2VudgVfc2luZgARA4+AgIAADgABBAUGBwgJCgsMDQ4QBYyAgIAAAQGEgICAAOyHgIAAB7qBgIAADAdjb21wdXRlAAUMZ2V0TnVtSW5wdXRzAAYNZ2V0TnVtT3V0cHV0cwAHDWdldFBhcmFtVmFsdWUACA1nZXRTYW1wbGVSYXRlAAkEaW5pdAAKDWluc3RhbmNlQ2xlYXIACxFpbnN0YW5jZUNvbnN0YW50cwAMDGluc3RhbmNlSW5pdAANGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA4Nc2V0UGFyYW1WYWx1ZQARBm1lbW9yeQIACr2XgIAADoKAgIAAAAuXj4CAAAIFfzF9QQAhBEEAIQVBACEGQQAhB0MAAAAAIQlDAAAAACEKQwAAAAAhC0MAAAAAIQxDAAAAACENQwAAAAAhDkMAAAAAIQ9DAAAAACEQQwAAAAAhEUMAAAAAIRJDAAAAACETQwAAAAAhFEMAAAAAIRVDAAAAACEWQwAAAAAhF0MAAAAAIRhDAAAAACEZQwAAAAAhGkMAAAAAIRtBACEIQwAAAAAhHEMAAAAAIR1DAAAAACEeQwAAAAAhH0MAAAAAISBDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQwAAAAAhK0MAAAAAISxDAAAAACEtQwAAAAAhLkMAAAAAIS9DAAAAACEwQwAAAAAhMUMAAAAAITJDAAAAACEzQwAAAAAhNEMAAAAAITVDAAAAACE2QwAAAAAhN0MAAAAAIThDAAAAACE5IAJBAGooAgAhBCACQQRqKAIAIQUgA0EAaigCACEGIANBBGooAgAhB0EAKgIUIQlDAAAgQUPNzEw9QQAqAiCUEAIhCkMAAAA/QwAAAEBBACoCKEEAKgIkqBuUIQtDAACAPyALkyEMQQAqAixDAAAAAEPbD0lAQQAqAjCUk5QQASENIA1DAAAAQBACIQ5DAAAAAEMAAABAIA2UkyEPQQAqAjQhEEEAKgI4IRFBACoCQCESQQAqAjwgEpQhE0MAAAA/QwAAAABBACoCPCASIBJBACoCRJeTlJOUIRRBACoCPEEAKgJIlCEVIBUQAyEWIBUQACEXIBFDAAAAQBACIRggEUMAAEBAEAIhGSARQwAAgEAQAiEaQwAAgL8gC5QgC0EAKgKUAagbIRtBACEIA0ACQCAEIAhqKgIAIRxBAEEBNgIMQQAqAghBACoCHJIhHUEAKgIcQQAqAgiTIR4gHSAeIAkgHiAJXhsgHSAJXRshH0EAIB9DAAAAACAfvEGAgID8B3EbOAIYQwAAgD9BACoCGJMhICAcICCUISEgFkEAKgJYlCAXQQAqAlCUkiEiQQAgIkMAAAAAICK8QYCAgPwHcRs4AkxBAUEAKAIQa7IgF0EAKgJYlJIgFkEAKgJQlJMhI0EAICNDAAAAACAjvEGAgID8B3EbOAJUIBMgFEMAAIA/QQAqAkyTlJIhJEEAKgJgIBEgJJQQAJQhJSAKICGUIBBBACoCkAGUkiAPICWUIA5BACoCZJSSkyEmQQAgJkMAAAAAICa8QYCAgPwHcRs4AlxBACoCbCAYICSUEACUIScgDyAlICeTlEEAKgJkIA5BACoCXEEAKgJwk5SSkiEoQQAgKEMAAAAAICi8QYCAgPwHcRs4AmhBACoCeCAZICSUEACUISkgDyAnICmTlEEAKgJwIA5BACoCaEEAKgJ8k5SSkiEqQQAgKkMAAAAAICq8QYCAgPwHcRs4AnRBACoChAEgGiAklBAAlCErIA8gKSArk5RBACoCfCAOQQAqAnRBACoCiAGTlJKSISxBACAsQwAAAAAgLLxBgICA/AdxGzgCgAEgDkEAKgKAAZQgDyArlEEAKgKIAZKSIS1BACAtQwAAAAAgLbxBgICA/AdxGzgCjAEgBiAIaiAcQQAqAhiUICAgCiAhIAyUlEEAKgKMASAblJKUkjgCACAFIAhqKgIAIS4gLiAglCEvIBMgFEMAAIA/QQAqAlSTlJIhMEEAKgKcASARIDCUEACUITEgCiAvlCAQQQAqAswBlJIgDyAxlCAOQQAqAqABlJKTITJBACAyQwAAAAAgMrxBgICA/AdxGzgCmAFBACoCqAEgGCAwlBAAlCEzIA8gMSAzk5RBACoCoAEgDkEAKgKYAUEAKgKsAZOUkpIhNEEAIDRDAAAAACA0vEGAgID8B3EbOAKkAUEAKgK0ASAZIDCUEACUITUgDyAzIDWTlEEAKgKsASAOQQAqAqQBQQAqArgBk5SSkiE2QQAgNkMAAAAAIDa8QYCAgPwHcRs4ArABQQAqAsABIBogMJQQAJQhNyAPIDUgN5OUQQAqArgBIA5BACoCsAFBACoCxAGTlJKSIThBACA4QwAAAAAgOLxBgICA/AdxGzgCvAEgDkEAKgK8AZQgDyA3lEEAKgLEAZKSITlBACA5QwAAAAAgObxBgICA/AdxGzgCyAEgByAIaiAuQQAqAhiUICAgCiAvIAyUlEEAKgLIASAblJKUkjgCAEEAQQAoAgw2AhBBAEEAKgIYOAIcQQBBACoCTDgCUEEAQQAqAlQ4AlhBAEEAKgJgOAJkQQBBACoCXDgCYEEAQQAqAmw4AnBBAEEAKgJoOAJsQQBBACoCeDgCfEEAQQAqAnQ4AnhBAEEAKgKEATgCiAFBAEEAKgKAATgChAFBAEEAKgKMATgCkAFBAEEAKgKcATgCoAFBAEEAKgKYATgCnAFBAEEAKgKoATgCrAFBAEEAKgKkATgCqAFBAEEAKgK0ATgCuAFBAEEAKgKwATgCtAFBAEEAKgLAATgCxAFBAEEAKgK8ATgCwAFBAEEAKgLIATgCzAEgCEEEaiEIIAhBBCABbEgEQAwCDAELCwsLhYCAgAAAQQIPC4WAgIAAAEECDwuLgICAAAAgACABaioCAA8LiICAgAAAQQAoAgAPC46AgIAAACAAIAEQBCAAIAEQDQu7hYCAAAEOf0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhAQNAAkBBDCABQQJ0akEANgIAIAFBAWohASABQQJIBEAMAgwBCwsLQQAhAgNAAkBBGCACQQJ0akMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBzAAgA0ECdGpDAAAAADgCACADQQFqIQMgA0ECSARADAIMAQsLC0EAIQQDQAJAQdQAIARBAnRqQwAAAAA4AgAgBEEBaiEEIARBAkgEQAwCDAELCwtBACEFA0ACQEHcACAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQNIBEAMAgwBCwsLQQAhBgNAAkBB6AAgBkECdGpDAAAAADgCACAGQQFqIQYgBkEDSARADAIMAQsLC0EAIQcDQAJAQfQAIAdBAnRqQwAAAAA4AgAgB0EBaiEHIAdBA0gEQAwCDAELCwtBACEIA0ACQEGAASAIQQJ0akMAAAAAOAIAIAhBAWohCCAIQQNIBEAMAgwBCwsLQQAhCQNAAkBBjAEgCUECdGpDAAAAADgCACAJQQFqIQkgCUECSARADAIMAQsLC0EAIQoDQAJAQZgBIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBA0gEQAwCDAELCwtBACELA0ACQEGkASALQQJ0akMAAAAAOAIAIAtBAWohCyALQQNIBEAMAgwBCwsLQQAhDANAAkBBsAEgDEECdGpDAAAAADgCACAMQQFqIQwgDEEDSARADAIMAQsLC0EAIQ0DQAJAQbwBIA1BAnRqQwAAAAA4AgAgDUEBaiENIA1BA0gEQAwCDAELCwtBACEOA0ACQEHIASAOQQJ0akMAAAAAOAIAIA5BAWohDiAOQQJIBEAMAgwBCwsLC9CAgIAAAEEAIAE2AgBBAEMAgDtIQwAAgD9BACgCALKXljgCBEEAQwAAIEFBACoCBJU4AghBAEMAAIA/QQAqAgSVOAIsQQBD2w/JQEEAKgIElTgCPAuQgICAAAAgACABEAwgABAOIAAQCwvxgICAAABBAEMAAAAAOAIUQQBDAAAAADgCIEEAQwAAAAA4AiRBAEMAAIA/OAIoQQBDAAB6RDgCMEEAQwAAAAA4AjRBAEMAAMA/OAI4QQBDAADIQjgCQEEAQwAASEQ4AkRBAEMAAAA/OAJIQQBDAAAAADgClAELjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLtaWAgAABAEEAC64leyJuYW1lIjogIlBoYXNlclJpeCIsImZpbGVuYW1lIjogIlBoYXNlclJpeC5kc3AiLCJ2ZXJzaW9uIjogIjIuMTguMCIsImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1zY2FsIC1mdHogMiIsImluY2x1ZGVfcGF0aG5hbWVzIjogWyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiLCIuIiwiL3RtcC9zZXNzaW9ucy82MDdGOEIwMTJCMkQ4MTFBMEVFMjhBQzI3QkVFNkEzNkM2ODQ1QzcwL3dlYi93YXAiXSwic2l6ZSI6ICIyMDgiLCJpbnB1dHMiOiAiMiIsIm91dHB1dHMiOiAiMiIsIm1ldGEiOiBbIHsgImNhdGVnb3J5IjogIk1vZHVsYXRpb24iIH0seyAiY29tcGlsYXRpb25fb3B0aW9ucyI6ICItc2luZ2xlIC1zY2FsIC1JIGxpYnJhcmllcy8gLUkgcHJvamVjdC8gLWxhbmcgd2FzbSIgfSx7ICJlZmZlY3RfbGliX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggKGpvcyBhdCBjY3JtYS5zdGFuZm9yZC5lZHUpIiB9LHsgImVmZmVjdF9saWJfY29weXJpZ2h0IjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZWZmZWN0X2xpYl9kZXByZWNhdGVkIjogIlRoaXMgbGlicmFyeSBpcyBkZXByZWNhdGVkIGFuZCBpcyBub3QgbWFpbnRhaW5lZCBhbnltb3JlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gQXVndXN0IDIwMTcuIiB9LHsgImVmZmVjdF9saWJfZXhjaXRlcl9hdXRob3IiOiAiUHJpeWFua2EgU2hla2FyIChwc2hla2FyQGNjcm1hLnN0YW5mb3JkLmVkdSkiIH0seyAiZWZmZWN0X2xpYl9leGNpdGVyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKGMpIDIwMTMgUHJpeWFua2EgU2hla2FyIiB9LHsgImVmZmVjdF9saWJfZXhjaXRlcl9saWNlbnNlIjogIk1JVCBMaWNlbnNlIChNSVQpIiB9LHsgImVmZmVjdF9saWJfZXhjaXRlcl9uYW1lIjogIkhhcm1vbmljIEV4Y2l0ZXIiIH0seyAiZWZmZWN0X2xpYl9leGNpdGVyX3ZlcnNpb24iOiAiMS4wIiB9LHsgImVmZmVjdF9saWJfbGljZW5zZSI6ICJTVEstNC4zIiB9LHsgImVmZmVjdF9saWJfbmFtZSI6ICJGYXVzdCBBdWRpbyBFZmZlY3QgTGlicmFyeSIgfSx7ICJlZmZlY3RfbGliX3ZlcnNpb24iOiAiMS4zMyIgfSx7ICJmaWxlbmFtZSI6ICJQaGFzZXJSaXguZHNwIiB9LHsgImZpbHRlcl9saWJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCAoam9zIGF0IGNjcm1hLnN0YW5mb3JkLmVkdSkiIH0seyAiZmlsdGVyX2xpYl9jb3B5cmlnaHQiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJfbGliX2RlcHJlY2F0ZWQiOiAiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4iIH0seyAiZmlsdGVyX2xpYl9saWNlbnNlIjogIlNUSy00LjMiIH0seyAiZmlsdGVyX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlciBMaWJyYXJ5IiB9LHsgImZpbHRlcl9saWJfcmVmZXJlbmNlIjogImh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvZmlsdGVycy8iIH0seyAiZmlsdGVyX2xpYl92ZXJzaW9uIjogIjEuMjkiIH0seyAiaWQiOiAicGhhc2VyIiB9LHsgImxpYnJhcnlfcGF0aCI6ICJGYXVzdERTUCIgfSx7ICJtYXRoX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aF9saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhfbGliX2RlcHJlY2F0ZWQiOiAiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4iIH0seyAibWF0aF9saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhfbGliX25hbWUiOiAiTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhfbGliX3ZlcnNpb24iOiAiMS4wIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjEiIH0seyAibXVzaWNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtdXNpY19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm11c2ljX2xpYl9kZXByZWNhdGVkIjogIlRoaXMgbGlicmFyeSBpcyBkZXByZWNhdGVkIGFuZCBpcyBub3QgbWFpbnRhaW5lZCBhbnltb3JlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gQXVndXN0IDIwMTcuIiB9LHsgIm11c2ljX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibXVzaWNfbGliX25hbWUiOiAiTXVzaWMgTGlicmFyeSIgfSx7ICJtdXNpY19saWJfdmVyc2lvbiI6ICIxLjAiIH0seyAibmFtZSI6ICJQaGFzZXJSaXgiIH0seyAib3NjaWxsYXRvcl9saWJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCAoam9zIGF0IGNjcm1hLnN0YW5mb3JkLmVkdSkiIH0seyAib3NjaWxsYXRvcl9saWJfY29weXJpZ2h0IjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAib3NjaWxsYXRvcl9saWJfZGVwcmVjYXRlZCI6ICJUaGlzIGxpYnJhcnkgaXMgZGVwcmVjYXRlZCBhbmQgaXMgbm90IG1haW50YWluZWQgYW55bW9yZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIEF1Z3VzdCAyMDE3LiIgfSx7ICJvc2NpbGxhdG9yX2xpYl9saWNlbnNlIjogIlNUSy00LjMiIH0seyAib3NjaWxsYXRvcl9saWJfbmFtZSI6ICJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkiIH0seyAib3NjaWxsYXRvcl9saWJfdmVyc2lvbiI6ICIxLjExIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJQaGFzZXJSaXgiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJEZXB0aCIsImFkZHJlc3MiOiAiL1BoYXNlclJpeC9EZXB0aCIsImluZGV4IjogIjQwIiwibWV0YSI6IFt7ICJPV0wiOiAiUEFSQU1FVEVSX0IiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAiMSIsIm1pbiI6ICIwIiwibWF4IjogIjEiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkZlZWRiYWNrIEdhaW4iLCJhZGRyZXNzIjogIi9QaGFzZXJSaXgvRmVlZGJhY2tfR2FpbiIsImluZGV4IjogIjUyIiwibWV0YSI6IFt7ICJPV0wiOiAiUEFSQU1FVEVSX0MiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAiMCIsIm1pbiI6ICIwIiwibWF4IjogIjEiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIk1heE5vdGNoMUZyZXEiLCJhZGRyZXNzIjogIi9QaGFzZXJSaXgvTWF4Tm90Y2gxRnJlcSIsImluZGV4IjogIjY4IiwibWV0YSI6IFt7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogIjgwMCIsIm1pbiI6ICIyMCIsIm1heCI6ICIxMDAwMCIsInN0ZXAiOiAiMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiTWluTm90Y2gxRnJlcSIsImFkZHJlc3MiOiAiL1BoYXNlclJpeC9NaW5Ob3RjaDFGcmVxIiwiaW5kZXgiOiAiNjQiLCJtZXRhIjogW3sgInN0eWxlIjogImtub2IiIH0seyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAiMTAwIiwibWluIjogIjIwIiwibWF4IjogIjUwMDAiLCJzdGVwIjogIjEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIk5vdGNoIFdpZHRoIiwiYWRkcmVzcyI6ICIvUGhhc2VyUml4L05vdGNoX1dpZHRoIiwiaW5kZXgiOiAiNDgiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfRCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogIjEwMDAiLCJtaW4iOiAiMTAiLCJtYXgiOiAiNTAwMCIsInN0ZXAiOiAiMSJ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiTm90Y2hGcmVxIiwiYWRkcmVzcyI6ICIvUGhhc2VyUml4L05vdGNoRnJlcSIsImluZGV4IjogIjU2IiwibWV0YSI6IFt7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6ICIxLjUiLCJtaW4iOiAiMS4xIiwibWF4IjogIjQiLCJzdGVwIjogIjAuMDEifSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIlNwZWVkIiwiYWRkcmVzcyI6ICIvUGhhc2VyUml4L1NwZWVkIiwiaW5kZXgiOiAiNzIiLCJtZXRhIjogW3sgIk9XTCI6ICJQQVJBTUVURVJfQSIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogIjAuNSIsIm1pbiI6ICIwLjAwMSIsIm1heCI6ICIyMCIsInN0ZXAiOiAiMC4wMSJ9LHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogIlZpYnJhdG9Nb2RlIiwiYWRkcmVzcyI6ICIvUGhhc2VyUml4L1ZpYnJhdG9Nb2RlIiwiaW5kZXgiOiAiMzYiLCJtZXRhIjogW3sgImVudW0iOiAiZGlyZWN0IHwgdmlicmF0byIgfV19LHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogImJ5cGFzcyIsImFkZHJlc3MiOiAiL1BoYXNlclJpeC9ieXBhc3MiLCJpbmRleCI6ICIyMCJ9LHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogImludmVydCIsImFkZHJlc3MiOiAiL1BoYXNlclJpeC9pbnZlcnQiLCJpbmRleCI6ICIxNDgiLCJtZXRhIjogW3sgImVudW0iOiAibGluZWFyfGludmVydCIgfV19LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAibGV2ZWwiLCJhZGRyZXNzIjogIi9QaGFzZXJSaXgvbGV2ZWwiLCJpbmRleCI6ICIzMiIsIm1ldGEiOiBbeyAic3R5bGUiOiAia25vYiIgfSx7ICJ1bml0IjogImRCIiB9XSwiaW5pdCI6ICIwIiwibWluIjogIi02MCIsIm1heCI6ICIxMCIsInN0ZXAiOiAiMC4xIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class PhaserRixNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'PhaserRix', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

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
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push(item.address);
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);

        //debugger to know parameters of the pedal

        var entries = this.parameters.entries()
        for (var [key, value] of entries) {
            console.log(key + ' = ' + value);
        }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
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

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, PhaserRixNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var path = this.fPitchwheelLabel[i];
            this.setParamValue(path, Math.pow(2.0, wheel / 12.0));
            if (this.output_handler) {
                this.output_handler(path, this.getParamValue(path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1) - 8192) / 8192.0);
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class PhaserRix {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
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
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "PhaserRix.wasm" : (this.baseURL + "/PhaserRix.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            return new Promise((resolve, reject) => {

                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);
                let options = { wasm_module: dspModule, json: json };

                let re = /JSON_STR/g;
                let PhaserRixProcessorString1 = PhaserRixProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([PhaserRixProcessorString1], { type: 'text/javascript' }));

                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new PhaserRixNode(this.context, this.baseURL,
                        {
                            numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                            numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                            channelCount: Math.max(1, parseInt(json_object.inputs)),
                            outputChannelCount: [parseInt(json_object.outputs)],
                            channelCountMode: "explicit",
                            channelInterpretation: "speakers",
                            processorOptions: options
                        });
                    this.node.onprocessorerror = () => { console.log('An error from PhaserRix-processor was detected.'); }
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });

        } catch (e) {
            this.error(e);
            this.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }

    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createPhaserRixGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createPhaserRixGUI(this.node);
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

// Template string for AudioWorkletProcessor

let PhaserRixProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class PhaserRixProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                PhaserRixProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                PhaserRixProcessor.parse_items(group.items, obj, callback);
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
                PhaserRixProcessor.parse_items(item.items, obj, callback);
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
                PhaserRixProcessor.parse_items(item.items, obj, callback);
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
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            PhaserRixProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, PhaserRixProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            
            const importObject = {
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
            
            this.PhaserRix_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.PhaserRix_instance.exports;
            this.HEAP = this.PhaserRix_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

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
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
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
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                PhaserRixProcessor.parse_ui(this.json_object.ui, this, PhaserRixProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
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
            
            console.log(this);
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            var params = Object.entries(parameters);
            for (var i = 0; i < params.length; i++) {
                this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
            }
            
            // Compute
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return true;
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    registerProcessor('PhaserRix', PhaserRixProcessor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.PhaserRix = PhaserRix;
    window.FaustPhaserRix = PhaserRix;
} else {
    module.exports = { PhaserRix };
}

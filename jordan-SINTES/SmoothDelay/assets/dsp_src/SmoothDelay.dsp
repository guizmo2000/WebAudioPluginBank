declare name 	"SmoothDelay";
declare author 	"Yann Orlarey";
declare copyright "Grame";
declare version "1.0";
declare license "STK-4.3";

//--------------------------process----------------------------
//
// 	A stereo smooth delay with a feedback control
//  
//	This example shows how to use sdelay, a delay that doesn't
//  click and doesn't transpose when the delay time is changed
//-------------------------------------------------------------

import("stdfaust.lib");


// Simple bypass mecanism

// Bypass an effect (fx:n->n). Once bypassed the effect is replaced by par(i,n,_). 
// Bypassed effects can be chained.
// Example: _,_ : bypass(checkbox("bypass reverb"), freeverb) : _,_

bypass_fx(b, fx) = par(i, inputs(fx), _) <: ((block_on(b, fx):fx), block_off(b, fx)) :> par(i, outputs(fx), _)
with {
	block_on(b, fx) = par(i, inputs(fx), _*(1-b));
	block_off(b, fx) = par(i, inputs(fx), _*b);
};

// Bypass an effect (fx:n->n) with 's' samples crossfades. Once bypassed the  
// effect is replaced by par(i,n,_). Bypassed effects can be chained.
// Example: _,_ : bypass_fx_fade(checkbox("bypass reverb"), ma.SR/10, freeverb) : _,_

bypass_fade(b, s, fx) = par(i, inputs(fx), _) 
					<: (par(i, inputs(fx), *(1-xb)) : fx : par(i, outputs(fx), *(1-xb)))
					,  par(i, inputs(fx), *(xb))
					:> par(i, outputs(fx), _)
with {
	xb = ramp(s, b);
	ramp(n) = \(y,x).(if (y+1.0/n < x, y+1.0/n, if(y-1.0/n > x, y-1.0/n, x))) ~ _;
	if (c,t,e) = select2(c,e,t);
};

// Bypass an effect (fx:n->n) with crossfades expressed in seconds.

bypass_fade_sec(b, d, fx) = bypass_fx_fade(b, ba.sec2samp(d), fx);


smoothdelay =  (+ :de.sdelay(N, interp, dtime)) ~ *(fback)
	with 
	{ 
		s = 0.999; // smoothing parameter (one-fi.pole fi.pole location)
		N	= int(2^17); 
		dtime	= hslider("Delay[unit:ms][style:knob][OWL:PARAMETER_A]", 1, 0.0001, 500, 0.1)*ma.SR/1000.0 : si.smooth(s);
		fback 	= hslider("Feedback[style:knob][OWL:PARAMETER_B]",0,0,100,0.1)/100.0;
		interp 	= hslider("Interpolation[unit:ms][style:knob][OWL:PARAMETER_C]",10,1,100,0.1)*ma.SR/1000.0;

	};
	
dry     = 1 - hslider("Dry/Wet[style:knob][OWL:PARAMETER_D]", 0.3333, 0, 1, 0.025);
wet     = 1 - dry + hslider("Super Wet[style:knob][OWL:PARAMETER_E]", 0.0, 0, 0.5, 0.025);
		
SmoothDelay = _<:*(dry),(*(wet) : smoothdelay ) :>_;

process = bypass_fade(checkbox("bypass"), ma.SR/10, SmoothDelay);
	

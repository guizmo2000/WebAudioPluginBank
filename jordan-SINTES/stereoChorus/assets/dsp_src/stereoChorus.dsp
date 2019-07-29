/* Stereo chorus. */
declare name "chorus";
declare description "stereo chorus effect";
declare author "Albert Graef";
declare version "1.1";
import("stdfaust.lib");
level   = hslider("level [style: knob]", 0.5, 0, 1, 0.01);
freq    = hslider("freq [style: knob]", 3, 0, 10, 0.01);
// Both must be filtered to avoid artefact when changing the values
dtime   = hslider("delay [style: knob]", 0.025, 0, 0.2, 0.001) : si.smooth(0.9999);
depth   = hslider("depth [style: knob]", 0.02, 0, 0.5, 0.001) : si.smooth(0.9999);
tblosc(n, f, freq, mod) = (1-d)*rdtable(n, wave, i&(n-1)) + d*rdtable(n, wave, (i+1)&(n-1))
with {
    wave = ba.time*(2*ma.PI)/n : f;
    phase = freq/ma.SR : (+ : ma.decimal) ~ _;
    modphase = ma.decimal(phase + mod/(2*ma.PI))*n;
    i = int(floor(modphase));
    d = ma.decimal(modphase);
};
chorus(dtime, freq, depth, phase, x) = x+level*de.fdelay(1<<16, t, x)
with {
    t = ma.SR*dtime/2*(1+depth*tblosc(1<<16, sin, freq, phase));
};
stereoChorus = (left, right)
with {
    left  = chorus(dtime,freq,depth,0);
    right = chorus(dtime,freq,depth,ma.PI/2);
};
process = ba.bypass_fade( ma.SR/10, checkbox("bypass"), stereoChorus);
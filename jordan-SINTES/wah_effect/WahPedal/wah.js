function createWah(a) {
    var c = {
        input: ["LeftMiddle"],
        output: ["RightMiddle"],
        deletable: !0,
        "class": "wah",
        connections: [],
        position: {
            top: 100,
            left: 200
        },
        pots: {
            freq: {
                name: "Frequency",
                id: "freq",
                tab: 0,
                midi: !0,
                val: 600,
                min: 320,
                max: 2500,
                step: 1
            },
            reso: {
                name: "Resonance",
                id: "reso",
                tab: 0,
                val: 4,
                min: 2,
                max: 7,
                step: 0.01
            }
        },
        switchers: {
            bypass: {
                name: "Bypass",
                id: "bypass",
                tab: 0,
                midi: !0,
                val: !1
            }
        },
        selects: {}
    };
    "undefined" !== typeof a && (a = merge_options(c, a));
    Nodes[a.id] = {};
    var b = Nodes[a.id];
    b.input = context.createGain();
    b.output = context.createGain();
    b.dryGain = context.createGain();
    b.wetGain = context.createGain();
    b.bypass = context.createGain();
    b.bypass.gain.value = 0;
    b.peak = context.createBiquadFilter();
    b.peak.type = "peaking";
    b.peak.Q.value = 3;
    b.peak.gain = 20;
    b.low = context.createBiquadFilter();
    b.low.type = "bandpass";
    b.low.Q.value = 2;
    
    a.node.params.reso = function(a) {
        b.peak.Q.value = a;
        b.low.Q.value = a
    };a.node = {};
    a.node.params = {};
    a.node.params.freq = function(a) {
        b.peak.frequency.value = a;
        b.low.frequency.value = a
    };
    a.node.params.bypass = function(a) {
        a ? (b.bypass.gain.value =
            1, b.dryGain.gain.value = 0) : (b.bypass.gain.value = 0, b.dryGain.gain.value = 1)
    };
    b.input.connect(b.dryGain);
    b.dryGain.connect(b.low);
    b.low.connect(b.wetGain);
    b.wetGain.connect(b.output);
    b.input.connect(b.bypass);
    b.bypass.connect(b.output);
    setCustomVals(a.node, a);
    return a;
 }

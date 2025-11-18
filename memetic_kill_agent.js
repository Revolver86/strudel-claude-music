// MEMETIC KILL AGENT
// Digital Black Metal - Information Warfare
// 190 BPM - B Locrian Mode
// SCP Foundation Concept: Ideas as Weapons

// B Locrian scale: B C D E F G A (1 b2 b3 4 b5 b6 b7)
const bLocrian = "b2 c3 d3 e3 f3 g3 a3";
const bLocrianLow = "b1 c2 d2 e2 f2 g2 a2";
const bLocrianHigh = "b3 c4 d4 e4 f4 g4 a4";

setcps(190/60);

stack(
  // ═══════════════════════════════════════════════════════════
  // SECTION 1: HARSH NOISE INTRO - THREAT DETECTED (10 seconds)
  // ═══════════════════════════════════════════════════════════
  timeCat(
    [0.53, stack(
      // Harsh noise burst - digital weapons fire
      note("<b1 [~ b1] b1 ~>*16")
        .sound("square")
        .lpf(sine.range(200, 8000).slow(0.3))
        .gain(1.2)
        .coarse(3)
        .shape(0.9)
        .distort(1)
        .room(0.1)
        .pan(perlin.range(0, 1)),

      // Distorted kick hits - establishing hostile intent
      s("bd:2*8")
        .gain(1.3)
        .distort(0.9)
        .shape(0.8)
        .coarse(5)
        .lpf(300)
    )],

    // ═══════════════════════════════════════════════════════════
    // SECTION 2: FIRST VERSE - ENGAGEMENT (maximum intensity)
    // ═══════════════════════════════════════════════════════════
    [1.6, stack(
      // LAYER 1: Main tremolo riff in B Locrian (bit-crushed digital weapon)
      note("<b2 f2 c3 e2>*16")
        .sound("square")
        .gain(0.8)
        .coarse(5)
        .shape(0.9)
        .lpf(3500)
        .hpf(200)
        .distort(0.8)
        .pan(0.3)
        .room(0.05),

      // LAYER 2: Harmony riff (minor third up: D Locrian approximation)
      note("<d3 a2 e3 g3>*16")
        .sound("square")
        .gain(0.7)
        .coarse(5)
        .shape(0.9)
        .lpf(4000)
        .hpf(250)
        .distort(0.8)
        .pan(0.7)
        .room(0.05),

      // LAYER 3: Dissonant tritone layer (cutting through)
      note("<f3 b2 f#3 a#3>*8")
        .sound("square")
        .gain(0.6)
        .coarse(6)
        .shape(0.95)
        .lpf(5000)
        .hpf(800)
        .distort(0.9)
        .pan(0.5),

      // BLAST BEATS - inhuman precision
      stack(
        // Kick - constant 16ths
        s("bd:5*16")
          .gain(1.1)
          .shape(0.5)
          .lpf(150)
          .coarse(4),

        // Snare - on 2 and 4 with fills
        s("~ sd:3 ~ sd:3")
          .gain(1.0)
          .coarse(5)
          .distort(0.7)
          .hpf(400),

        // Hi-hat - relentless 16ths
        s("hh:8*16")
          .gain(0.7)
          .hpf(8000)
          .pan(perlin.range(0.4, 0.6).fast(4))
      )
    )],

    // ═══════════════════════════════════════════════════════════
    // SECTION 3: BREAKDOWN - RELOAD (8 bars = 0.8 time units)
    // ═══════════════════════════════════════════════════════════
    [0.8, stack(
      // Precise 16th note hi-hat pattern
      s("hh:8*16")
        .gain(0.9)
        .hpf(9000)
        .pan(0.5)
        .room(0),

      // Ominous two-note bass pulse
      note("<b1 f1>*2")
        .sound("square")
        .gain(1.2)
        .lpf(180)
        .shape(0.95)
        .coarse(8)
        .distort(1)
        .room(0.2),

      // Subtle threat building
      note("b1*8")
        .sound("square")
        .gain(0.3)
        .lpf(100)
        .coarse(10)
    )],

    // ═══════════════════════════════════════════════════════════
    // SECTION 4: SECOND VERSE - SUPPRESSION (evolved, harder)
    // ═══════════════════════════════════════════════════════════
    [1.6, stack(
      // Main riff with palm-muted chugging sections
      note("<[b2 b2 b2 b2]*4 [f2*16] [c3*16] [e2 e2 e2 e2]*4>")
        .sound("square")
        .gain(0.85)
        .coarse(5)
        .shape(0.9)
        .lpf(n("<2000 4000 3500 2500>").slow(2))
        .hpf(150)
        .distort(0.85)
        .pan(0.25),

      // Tremolo bursts
      note("<b2 f2 c3 e2>*16")
        .sound("sawtooth")
        .gain(0.6)
        .coarse(6)
        .lpf(4500)
        .pan(0.75),

      // PIERCING 8-BIT LEAD - alarm/siren cutting through
      note("<b4 a4 g4 f4 e4 d4 c4 b3>*2")
        .sound("square")
        .gain(0.7)
        .coarse(2)
        .lpf(12000)
        .hpf(2000)
        .room(0.3)
        .pan(sine.range(0.2, 0.8).fast(4)),

      // Enhanced blast beats
      stack(
        s("bd:5*16").gain(1.2).shape(0.6).lpf(140).coarse(4),
        s("~ sd:3 ~ sd:3").gain(1.1).coarse(5).distort(0.8),
        s("hh:8*16").gain(0.8).hpf(8500).pan(perlin.range(0.3, 0.7).fast(6))
      )
    )],

    // ═══════════════════════════════════════════════════════════
    // SECTION 5: BRIDGE - OVERWHELMING FORCE (full chaos)
    // ═══════════════════════════════════════════════════════════
    [1.2, stack(
      // LEFT EAR: Standard blast (kick-snare-kick-snare pattern)
      stack(
        s("bd:5*8").gain(1.0).pan(0).lpf(150),
        s("~ sd:3*4").gain(0.9).pan(0).hpf(400)
      ),

      // RIGHT EAR: Bomb blast (snare on EVERY hit)
      stack(
        s("bd:5*8").gain(1.0).pan(1).lpf(150),
        s("sd:3*8").gain(0.95).pan(1).hpf(400).coarse(6)
      ),

      // STACCATO GUITAR STABS - rapid-fire, not tremolo
      note("<b2!4 ~!2 f2!4 ~!2 c3!4 ~!2 e2!4 ~!2>")
        .sound("square")
        .gain(0.95)
        .coarse(4)
        .shape(0.95)
        .lpf(3000)
        .distort(0.9)
        .pan(0.5),

      // Additional chaos layer
      note("<[b3 f3 c4]*8 [e3 a3 d4]*8>")
        .sound("square")
        .gain(0.5)
        .coarse(7)
        .lpf(6000)
        .hpf(1000)
        .pan(perlin.range(0, 1).fast(8)),

      // Relentless hi-hats across stereo field
      s("hh:8*16")
        .gain(0.75)
        .hpf(9000)
        .pan(saw.range(0, 1))
    )],

    // ═══════════════════════════════════════════════════════════
    // SECTION 6: CLIMAX - TARGET DESTROYED (devastating groove)
    // ═══════════════════════════════════════════════════════════
    [2.0, stack(
      // DRIVING 16TH NOTE KICK PATTERN (Meshuggah-style groove)
      s("bd:5*16")
        .gain(1.3)
        .shape(0.7)
        .lpf(130)
        .coarse(3)
        .distort(0.5),

      // SNARE ON 2 AND 4 (headbang groove)
      s("~ sd:3 ~ sd:3")
        .gain(1.2)
        .coarse(4)
        .distort(0.8)
        .hpf(500),

      // RHYTHMIC MAIN RIFF (groove-based but aggressive)
      note("<b2!4 b1!4 f2!4 c3!4>")
        .sound("square")
        .gain(0.9)
        .coarse(5)
        .shape(0.95)
        .lpf(2500)
        .distort(0.9)
        .pan(0.3),

      // LAYER ALL PREVIOUS MELODIC IDEAS (information overload)
      // Tremolo layer
      note("<b2 f2 c3 e2>*16")
        .sound("square")
        .gain(0.6)
        .coarse(6)
        .lpf(3500)
        .pan(0.7),

      // 8-bit siren
      note("<b4 a4 g4 f4>*4")
        .sound("square")
        .gain(0.65)
        .coarse(2)
        .lpf(10000)
        .hpf(2000)
        .pan(0.5),

      // Harmony riff
      note("<d3 a2 e3 g3>*8")
        .sound("square")
        .gain(0.5)
        .coarse(6)
        .lpf(4000)
        .pan(0.65),

      // Tritone dissonance
      note("<f3 b2 f#3>*4")
        .sound("square")
        .gain(0.55)
        .coarse(7)
        .lpf(5000)
        .hpf(800)
        .pan(sine.range(0.3, 0.7).fast(2)),

      // Machine-gun hi-hats
      s("hh:8*16")
        .gain(0.8)
        .hpf(8000)
        .pan(perlin.range(0.4, 0.6).fast(3))
    )],

    // ABRUPT TERMINATION - transmission cut mid-phrase
    [0, silence]
  )
)
// Global harsh digital processing
.coarse(3)
.distort(0.6)
.shape(0.7)
.room(0.15)
.size(0.8)
.orbit(0)

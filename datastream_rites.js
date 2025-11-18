// DATASTREAM RITES
// Ritual Industrial Black Metal - 155 BPM, D Phrygian Dominant
// Theme: Techno-shamanism, ancient ceremony through digital means

// D Phrygian Dominant scale (D Eb F# G A Bb C)
// Root D = d3, intervals: 0 1 3 4 5 6 7 (semitones from D)
const dphrygdom = (octave) => [0,1,3,4,5,6,7].map(x => `d${octave}`.freq * Math.pow(2, x/12))

// === INTRO: Hypnotic Polyrhythmic Percussion + Bass Drone (45 seconds) ===
// Euclidean patterns: 5/8, 7/8, 3/4 creating polyrhythmic texture
const intro_perc1 = s("bd:5")
  .euclidean(5, 8)
  .gain(0.8)
  .lpf(800)
  .room(0.4)
  .distort(0.3)

const intro_perc2 = s("cp:2")
  .euclidean(7, 8)
  .gain(0.6)
  .hpf(1200)
  .delay(0.2)
  .delaytime(0.125)

const intro_perc3 = s("hh:7")
  .euclidean(3, 4)
  .gain(0.5)
  .lpf(3000)
  .crush(6)

const intro_bass_drone = note("<d1 d1 d1 d1>")
  .s("sawtooth")
  .gain(0.7)
  .lpf(200)
  .cutoff(sine.range(150, 250).slow(8))
  .room(0.6)
  .sustain(4)

const intro = stack(
  intro_perc1,
  intro_perc2,
  intro_perc3,
  intro_bass_drone
).slow(2) // Make it more spacious and hypnotic

// === MAIN VERSE: Blast Beats + Call-Response Tremolo Guitars ===
// Tight mid-tempo blast section with ascending/descending riffs
const verse_blast = s("[bd:0*4, sd:3*2, hh:0*8]")
  .gain(0.9)
  .crush(4)
  .distort(0.4)

// First tremolo: ascending D Phrygian Dominant
const verse_guitar1 = note("<[d3 eb3 f#3 g3] [g3 a3 bb3 c4] [c4 d4 eb4 f#4] [f#4 g4 a4 bb4]>")
  .s("sawtooth")
  .gain(0.6)
  .lpf(2000)
  .distort(0.6)
  .room(0.3)
  .sustain(0.1)
  .fast(4) // Tremolo picking speed

// Second tremolo: descending chromatic answer
const verse_guitar2 = note("<[bb4 a4 ab4 g4] [g4 f#4 f4 e4] [e4 eb4 d4 db4] [db4 c4 b3 bb3]>")
  .s("sawtooth")
  .gain(0.6)
  .lpf(2000)
  .distort(0.6)
  .room(0.3)
  .sustain(0.1)
  .fast(4)
  .late(0.5) // Call and response timing

// Industrial metallic percussion (ritualistic)
const verse_industrial = s("[metal:0 ~ metal:2 ~]*2")
  .gain(0.7)
  .crush(3)
  .hpf(800)
  .delay(0.3)
  .delaytime(0.375)

const verse = stack(
  verse_blast,
  verse_guitar1,
  verse_guitar2,
  verse_industrial,
  intro_bass_drone.gain(0.5) // Keep bass foundation
)

// === BREAKDOWN 1: Bass + Three-Note Sine Mantra (8 bars) ===
// Hypnotic tension-building minimalism
const breakdown_bass = note("d1")
  .s("sawtooth")
  .gain(0.8)
  .lpf(300)
  .sustain(0.5)

const breakdown_mantra = note("<d4 f#4 a4>")
  .s("sine")
  .gain(0.4)
  .room(0.7)
  .delay(0.5)
  .delaytime(0.5)
  .slow(2) // Hypnotic repetition

const breakdown1 = stack(
  breakdown_bass,
  breakdown_mantra
)

// === VERSE 2: Evolved Riffs + Triplet Lead + Bit-Crushed Choir ===
// Adding rhythmic complexity and texture
const verse2_triplet_lead = note("<[g4 a4 bb4]*3 [bb4 c5 d5]*3 [d5 eb5 f#5]*3 [f#5 g5 a5]*3>")
  .s("triangle")
  .gain(0.5)
  .lpf(3000)
  .distort(0.5)
  .room(0.4)
  .sustain(0.08)

// Bit-crushed choir texture (stacked detuned square waves)
const verse2_choir = note("<d4 eb4 f#4 g4>")
  .s("square")
  .gain(0.3)
  .stack(
    note("<d4 eb4 f#4 g4>").s("square").gain(0.3).note.add(0.1),
    note("<d4 eb4 f#4 g4>").s("square").gain(0.3).note.add(-0.1),
    note("<d4 eb4 f#4 g4>").s("square").gain(0.3).note.add(0.2)
  )
  .crush(5)
  .lpf(1500)
  .room(0.8)
  .slow(4)

const verse2 = stack(
  verse_blast,
  verse_guitar1,
  verse_guitar2,
  verse_industrial,
  verse2_triplet_lead,
  verse2_choir,
  intro_bass_drone.gain(0.5)
)

// === BRIDGE: Progressive Layer Building ===
// Same 2-bar pattern, adding layers every 2 bars
const bridge_base = note("<[d3 ~ eb3 f#3] [g3 a3 ~ bb3]>")
  .s("sawtooth")
  .gain(0.7)
  .lpf(2500)
  .distort(0.7)

const bridge_perc_extra = s("bd:0*2, cp:1*2")
  .gain(0.8)
  .crush(4)

const bridge_harmony = note("<[d4 ~ eb4 f#4] [g4 a4 ~ bb4]>")
  .s("triangle")
  .gain(0.5)
  .lpf(3000)

const bridge_subbass = note("<d1 d1>")
  .s("sine")
  .gain(1.0)
  .lpf(150)

const bridge_noise = s("~ ~ white:0 ~")
  .gain(0.6)
  .lpf(sine.range(2000, 8000))
  .hpf(1000)

// Progressive stacking - layers added every 2 bars
const bridge = timeCat(
  [0.125, stack(bridge_base, verse_blast)], // Bars 1-2
  [0.125, stack(bridge_base, verse_blast, bridge_perc_extra)], // Bars 3-4
  [0.125, stack(bridge_base, verse_blast, bridge_perc_extra, bridge_harmony)], // Bars 5-6
  [0.125, stack(bridge_base, verse_blast, bridge_perc_extra, bridge_harmony, bridge_subbass)], // Bars 7-8
  [0.125, stack(bridge_base, verse_blast, bridge_perc_extra, bridge_harmony, bridge_subbass, bridge_noise)] // Bars 9-10+
)

// === CLIMAX: Transcendent Ascending Riff (12 bars) ===
// All elements locked into driving rhythm
const climax_riff = note("<[d3 eb3 f#3 g3 a3 bb3 c4 d4] [d4 eb4 f#4 g4 a4 bb4 c5 d5]>")
  .s("sawtooth")
  .gain(0.8)
  .lpf(3000)
  .distort(0.8)
  .room(0.3)
  .sustain(0.1)
  .fast(2)

const climax_blast_heavy = s("[bd:0*4, sd:3*4, hh:0*8]")
  .gain(1.0)
  .crush(4)
  .distort(0.5)

const climax = stack(
  climax_riff,
  climax_blast_heavy,
  bridge_harmony.gain(0.6),
  bridge_subbass.gain(1.1),
  verse2_choir.gain(0.4),
  verse_industrial.gain(0.8)
).slow(1.5) // Hold the peak

// === OUTRO: Tempo Slowdown 155->80 BPM (16 bars) ===
// Ritual complete, trance ending
// Gradual slowdown effect by increasing slow() factor progressively
const outro_riff = note("<d3 eb3 f#3 g3>")
  .s("sawtooth")
  .gain(0.7)
  .lpf(2000)
  .distort(0.8)
  .sustain(1)

const outro_final = note("d3")
  .s("sawtooth")
  .stack(
    note("d3").s("square"),
    note("d2").s("sine")
  )
  .gain(0.9)
  .lpf(1500)
  .crush(6) // Expose digital artifacts
  .distort(0.9)
  .room(0.9)
  .sustain(8)

// Simulate slowdown with increasing slow() values
const outro = timeCat(
  [0.0625, stack(outro_riff, verse_blast.gain(0.6)).slow(1)], // Starting tempo
  [0.0625, stack(outro_riff, verse_blast.gain(0.5)).slow(1.1)],
  [0.0625, stack(outro_riff, verse_blast.gain(0.4)).slow(1.2)],
  [0.0625, stack(outro_riff, verse_blast.gain(0.3)).slow(1.35)],
  [0.0625, stack(outro_riff, verse_blast.gain(0.25)).slow(1.5)],
  [0.0625, stack(outro_riff, verse_blast.gain(0.2)).slow(1.7)],
  [0.0625, stack(outro_riff).slow(1.9)], // Drums fade out
  [0.0625, stack(outro_riff).slow(2.2)],
  [0.25, outro_final] // Final sustained chord
)

// === FULL ARRANGEMENT ===
$: timeCat(
  [0.15, intro],           // ~45 seconds intro
  [0.10, verse],           // Main verse
  [0.08, breakdown1],      // 8 bars breakdown
  [0.12, verse2],          // Evolved verse
  [0.10, bridge],          // Progressive bridge
  [0.15, climax],          // 12 bars climactic peak
  [0.20, outro]            // 16 bars slowdown outro
).cpm(155)

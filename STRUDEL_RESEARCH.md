# Complete Strudel.cc Research Documentation

## Table of Contents
1. [Overview](#overview)
2. [Core Concepts](#core-concepts)
3. [Mini-Notation Syntax](#mini-notation-syntax)
4. [Sound & Synthesis](#sound--synthesis)
5. [Effects & Audio Processing](#effects--audio-processing)
6. [Pattern Manipulation](#pattern-manipulation)
7. [Pattern Combination](#pattern-combination)
8. [Timing & Tempo](#timing--tempo)
9. [Random & Generative Functions](#random--generative-functions)
10. [Advanced Techniques](#advanced-techniques)
11. [Integration & Output](#integration--output)
12. [Code Examples](#code-examples)

---

## Overview

**Strudel** is a web-based live coding environment for creating algorithmic music directly in your browser. It is an official port of the TidalCycles pattern language from Haskell to JavaScript, created by Alex McLean and Felix Roos in 2022.

### Key Features
- **Browser-based**: No installation required, runs entirely in the browser
- **Pattern-based**: Music is created through repeating patterns over cycles
- **Real-time**: Code changes take effect immediately during playback
- **Standalone**: Built-in Web Audio synthesis (superdough synth)
- **Extensible**: Supports MIDI, OSC, SuperDirt integration

### Official Resources
- **Website**: https://strudel.cc
- **Repository**: https://codeberg.org/uzu/strudel (moved from GitHub in 2025)
- **REPL**: https://strudel.cc/ (interactive coding environment)
- **Documentation**: https://strudel.cc/workshop/getting-started/

---

## Core Concepts

### Cycles
Strudel works with **cycles** as the fundamental unit of time. By default:
- 1 cycle = ~1.78 seconds
- Default tempo: 0.5625 cycles per second (CPS)
- Patterns repeat over cycles

### Patterns
Patterns are "values in time" - they represent behaviors that change over time. Patterns can contain:
- Sound samples
- Musical notes
- Parameter values
- Functions that transform other patterns

### Functions & Chaining
Everything in Strudel is a function. Functions are chained together using the dot (`.`) notation:

```javascript
note("c a f e")
  .sound("piano")
  .room(0.5)
  .delay(0.3)
```

### Basic Workflow (REPL)
1. Write code describing a pattern
2. Press **Ctrl+Enter** (or **Cmd+Enter** on Mac) to evaluate
3. Pattern plays in a loop
4. Modify code while it's playing for live coding
5. Press **Ctrl+.** (dot) to stop

---

## Mini-Notation Syntax

Strudel uses a compact **mini-notation** for expressing rhythmic patterns within strings.

### Basic Sequencing

**Space-separated values** - play sequentially:
```javascript
sound("bd sd bd sd")  // bass drum, snare, bass drum, snare
```

### Rests

**Tilde `~`** - represents silence:
```javascript
sound("bd ~ sd ~")  // bass, silence, snare, silence
```

### Speed Modification

**Asterisk `*`** - repeat/multiply events:
```javascript
sound("bd*4")     // play bass drum 4 times per cycle
sound("hh*8")     // 8 hi-hats per cycle
```

**Division `/`** - slow down events:
```javascript
sound("bd/2")     // bass drum every 2 cycles
```

### Elongation

**At symbol `@`** - make events longer:
```javascript
sound("bd@2 sd")  // bass drum lasts twice as long
```

### Sub-sequences

**Square brackets `[]`** - create sub-divisions:
```javascript
sound("bd [sd sd]")     // bd on beat 1, two sds on beat 2
sound("[bd sd]*2")      // entire pattern twice as fast
```

### Layering (Chords)

**Comma `,`** - play sounds simultaneously:
```javascript
sound("bd, hh*4, ~ sd")  // kick + hats + snare layered
```

### Alternation

**Angle brackets `<>`** - alternate between values each cycle:
```javascript
sound("bd <sd hh cp>")  // changes every cycle
note("<c e g>")         // different note each cycle
```

### Euclidean Rhythms

**Parentheses `(steps, pulses, rotation)`** - generate Euclidean rhythms:
```javascript
sound("bd(3,8)")      // 3 kicks distributed over 8 steps
sound("bd(5,8,2)")    // 5 kicks over 8 steps, rotated 2
```

Euclidean rhythms distribute beats as evenly as possible and appear in music worldwide.

---

## Sound & Synthesis

### The `sound()` Function

The `s()` or `sound()` function specifies which instrument or sample to play:

```javascript
sound("bd hh sd oh")  // drum sounds
s("piano")            // can use shorthand s()
```

### Common Drum Samples
- `bd` - bass drum
- `sd` - snare drum
- `hh` - hi-hat (closed)
- `oh` - open hi-hat
- `cp` - clap
- `rim` - rimshot
- `lt/mt/ht` - low/mid/high tom
- `rd` - ride cymbal
- `cr` - crash cymbal

### Sample Banks

Use `.bank()` to change drum machine character:
```javascript
sound("bd hh sd oh").bank("RolandTR909")
```

**Available Banks:**
- RolandTR909 (house/techno)
- RolandTR808 (hip-hop/electronic)
- RolandTR505
- RolandTR707
- RolandCompurhythm1000

### Sample Selection with `n()`

Many samples have multiple variations. Use `n()` to select specific ones:

```javascript
s("bd").n("<0 1 2 3>")    // cycle through 4 bass drum samples
s("hh:2")                 // alternative colon notation
```

### The `note()` Function

The `note()` function sets pitch for synths or repitches samples:

```javascript
note("c a f e")           // note names
note("c4 e4 g4")          // with octave numbers
note("0 4 7")             // MIDI numbers (semitones)
note("48 52 55")          // absolute MIDI note numbers
```

### Built-in Synthesizers

Specify waveform with `sound()`:

**Basic Waveforms:**
```javascript
note("c e g").sound("sawtooth")
note("c e g").sound("sine")
note("c e g").sound("square")
note("c e g").sound("triangle")
```

**Noise:**
```javascript
sound("white")   // white noise
sound("pink")    // pink noise (softer)
sound("brown")   // brown noise (even softer)
```

### FM Synthesis

Apply frequency modulation with `fm()`:
```javascript
note("c e g")
  .sound("sawtooth")
  .fm(2)           // FM amount
  .fmi(1)          // FM intensity
```

### Wavetable Synthesis

Over 1000 wavetables are available:
```javascript
note("c2*8")
  .s("wt_dbass")
  .n(run(8))      // cycle through wavetable variations
```

### Vibrato

Add vibrato to oscillators:
```javascript
note("c3")
  .sound("sine")
  .vibrato(4)      // vibrato rate
  .vibmod(0.3)     // vibrato depth
```

---

## Effects & Audio Processing

### Amplitude Envelope (ADSR)

Control the volume envelope:
```javascript
note("c3 e3 g3")
  .sound("sawtooth")
  .attack(0.1)      // fade in time
  .decay(0.1)       // decay time
  .sustain(0.5)     // sustain level (0-1)
  .release(0.3)     // fade out time
```

**Shorthand:**
```javascript
.adsr("0.1:0.1:0.5:0.3")
```

### Filters

**Low-pass filter** - removes high frequencies:
```javascript
.lpf(1000)       // cutoff frequency
.lpq(3)          // resonance (Q factor)
.lpenv(-3)       // filter envelope depth
.lpa(0.1)        // filter envelope attack
```

**High-pass filter** - removes low frequencies:
```javascript
.hpf(500)
.hpq(2)
```

**Band-pass filter**:
```javascript
.bpf(1000)
.bpq(10)
```

### Delay

Add echo/delay effect:
```javascript
.delay(0.5)              // delay amount (0-1)
.delaytime(0.25)         // delay time in cycles
.delayfeedback(0.8)      // feedback amount
```

**Shorthand:**
```javascript
.delay("0.5:0.25:0.8")   // amount:time:feedback
```

### Reverb

Add spatial reverb:
```javascript
.room(0.8)       // reverb amount
.rsize(4)        // room size
```

**Shorthand:**
```javascript
.room("0.8:4")
```

### Distortion & Waveshaping

**Shape** - waveshaping distortion:
```javascript
.shape(0.5)      // amount 0-10
```

**Distort** - standard distortion:
```javascript
.distort(0.3)
```

### Bit Crushing & Sample Rate Reduction

**Crush** - bit depth reduction:
```javascript
.crush(4)        // bit depth
```

**Coarse** - sample rate reduction:
```javascript
.coarse(16)      // sample rate divisor
```

### Volume Control

**Gain** - exponential volume:
```javascript
.gain(0.8)       // 0 to 1 (can go higher but may clip)
```

**Velocity** - additional gain multiplier:
```javascript
.velocity(0.6)   // multiplied with gain
```

### Panning

**Pan** - stereo positioning:
```javascript
.pan(0)          // hard left
.pan(0.5)        // center
.pan(1)          // hard right
```

### Speed

**Speed** - playback speed/direction:
```javascript
.speed(1)        // normal
.speed(2)        // double speed
.speed(-1)       // reverse
```

---

## Pattern Manipulation

### Time Modifiers

**Slow** - slow down pattern:
```javascript
note("c d e f").slow(2)      // takes 2 cycles instead of 1
```

**Fast** - speed up pattern:
```javascript
note("c d e f").fast(2)      // plays twice in 1 cycle
```

**Hurry** - speed up with pitch shift:
```javascript
note("c d e f").hurry(2)
```

### Conditional Modifiers

**Every** - apply transformation every N cycles:
```javascript
sound("bd sd bd sd")
  .every(4, x => x.fast(2))   // double speed every 4th cycle
```

**When** - apply when condition is true:
```javascript
sound("bd sd")
  .when(0.25, x => x.gain(1.5))
```

**Sometimes** - randomly apply (50% chance):
```javascript
sound("hh*8").sometimes(x => x.speed(2))
```

**Often** - apply 75% of the time:
```javascript
sound("bd sd").often(x => x.rev())
```

**Rarely** - apply 10% of the time:
```javascript
sound("bd*4").rarely(x => x.fast(2))
```

**SometimesBy** - custom probability:
```javascript
sound("hh*8").sometimesBy(0.3, x => x.gain(1.5))
```

### Pattern Transformations

**Rev** - reverse pattern:
```javascript
note("c d e f").rev()
```

**Palindrome** - forward then backward:
```javascript
note("c d e f").palindrome()  // same as .every(2, rev)
```

**Jux** - apply to right channel only:
```javascript
note("c e g").jux(rev)        // stereo effect
```

**Iter** - rotate pattern subdivision each cycle:
```javascript
sound("bd sd cp hh").iter(4)
```

**Ply** - repeat each event:
```javascript
note("c e g").ply(3)          // each note plays 3 times
```

### Degradation

**Degrade** - randomly remove 50% of events:
```javascript
sound("hh*8").degrade()
```

**DegradeBy** - custom removal probability:
```javascript
sound("hh*8").degradeBy(0.3)  // remove 70% of events
```

### Timing Adjustments

**Early** - shift pattern earlier in time:
```javascript
sound("bd sd").early(0.1)
```

**Late** - shift pattern later in time:
```javascript
sound("hh*8").late(0.05)
```

**Swing** - add swing groove:
```javascript
sound("hh*8").swing(0.1)      // swing amount
```

---

## Pattern Combination

### Stack

Play patterns simultaneously (layering):
```javascript
stack(
  sound("bd*4"),
  sound("hh*8").gain(0.5),
  note("c a f e").sound("piano")
)
```

### Cat (slowcat)

Concatenate patterns sequentially (one per cycle):
```javascript
cat(
  sound("bd sd bd sd"),
  sound("cp*4"),
  note("c e g c5").sound("piano")
)
```

### Sequence (fastcat, seq)

Concatenate patterns within one cycle:
```javascript
sequence(
  sound("bd*4"),
  sound("cp*2"),
  sound("hh*8")
)
```

### TimeCat (also called `stepcat`)

Concatenate with custom durations proportionally to steps per cycle:
```javascript
timeCat(
  [3, sound("bd sd")],  // 3 steps
  [1, sound("cp*4")]    // 1 step
)
// Equivalent to: sound("bd sd@3 cp*4")
```

**Note:** While similar to `arrange()`, `timeCat()` can behave unexpectedly when patterns span multiple cycles with different lengths. Use `arrange()` for song structures instead.

### Arrange

Arrange patterns over multiple cycles (PRIMARY TOOL FOR LONG-FORM COMPOSITION):
```javascript
arrange(
  [4, sound("bd sd")],
  [2, sound("cp*4")],
  [4, note("c e g").sound("piano")]
)
```

**Important:** `arrange()` uses `timeCat()` internally but works differently to ensure nothing is shuffled or sped up incorrectly. This makes it the preferred function for complete song structures.

**Complete song example with sections:**
```javascript
setcps(130/60/4)  // 130 BPM

// Define reusable sections using const
const intro = sound("bd ~ ~ ~").gain(0.8)
const verse = sound("bd*4, [~ sd]*2, hh*8")
const chorus = sound("bd*4, sd*2, hh*16").gain(1.2)
const breakdown = note("c e g").sound("sine").slow(2)
const outro = sound("bd ~ ~ ~").degradeBy(0.5)

// Arrange into full song structure
arrange(
  [4, intro],      // 4 cycles intro
  [8, verse],      // 8 cycles verse
  [8, chorus],     // 8 cycles chorus
  [4, breakdown],  // 4 cycles breakdown
  [8, verse],      // 8 cycles verse (repeat)
  [8, chorus],     // 8 cycles chorus (repeat)
  [4, outro]       // 4 cycles outro
)
```

### Struct

Apply rhythmic structure from one pattern to another:
```javascript
sound("bd sd").struct("<x ~ x x> <x x ~>")
```

### Mask

Filter pattern events:
```javascript
note("c d e f g a b c5")
  .mask("<1 0 1 0>")
```

### Off

Create delayed/offset copy:
```javascript
note("c e g")
  .off(1/8, x => x.add(7))   // echo up an octave
```

### Layer

Layer multiple transformations:
```javascript
note("c e g")
  .layer(
    x => x.sound("sine"),
    x => x.sound("square").add(12)
  )
```

---

## Timing & Tempo

### Setting Tempo

**CPS** (Cycles Per Second):
```javascript
setcps(0.5)      // 0.5 cycles per second (default: 0.5625)
```

**CPM** (Cycles Per Minute):
```javascript
setcpm(90)       // 90 cycles per minute
```

**BPM Conversion**:
```javascript
// For 130 BPM house music:
setcps(130/60/4)  // BPM / 60 seconds / 4 beats per cycle
```

**Pattern-level tempo:**
```javascript
sound("bd sd").cpm(130)
```

---

## Random & Generative Functions

### Choose

Pick random value from list:
```javascript
note(choose([0, 2, 4, 7]))
```

### Rand

Random continuous values (0-1):
```javascript
note("c e g").gain(rand)
```

### Irand

Random integers:
```javascript
note("c e g").n(irand(8))  // random 0-7
```

### Perlin Noise

Continuous smooth random values:
```javascript
note("c*8")
  .sound("sine")
  .lpf(perlin.range(200, 2000))
```

---

## Advanced Techniques

### Signals & Modulation

**Sine wave modulation:**
```javascript
note("c*8")
  .sound("sawtooth")
  .lpf(sine.range(100, 2000).slow(4))
```

**Saw wave:**
```javascript
.gain(saw.range(0.3, 1))
```

**Square wave:**
```javascript
.pan(square.range(0, 1))
```

**Triangle wave:**
```javascript
.lpf(tri.range(500, 3000))
```

### Range Mapping

Scale values to different ranges:
```javascript
sine.range(100, 2000)       // map 0-1 to 100-2000
perlin.range(0.3, 0.8)      // map to custom range
```

**Range2** for bipolar signals (-1 to 1):
```javascript
sine.range2(100, 2000)
```

### Arithmetic Operations

**Add** - add to pattern values:
```javascript
note("0 2 4").add("<0 3 5>")  // transpose
```

**Sub** - subtract from values:
```javascript
note("0 2 4").sub(12)  // down an octave
```

**Mul** - multiply values:
```javascript
note("0 2 4").mul(2)
```

**Div** - divide values:
```javascript
note("0 2 4").div(2)
```

### Scales

Work with musical scales:
```javascript
note("0 2 4 6").scale("C:minor")
note("0 1 2 3").scale("D:major")
note("0 2 4").scale("C:dorian")
```

Available scale types: major, minor, dorian, phrygian, lydian, mixolydian, locrian, chromatic, and many more.

### Chords

Generate chord voicings:
```javascript
note("<C^7 A7 Dm7 G7>").voicing()
```

Chord symbols: `C` (major), `Cm` (minor), `C7` (dominant 7th), `C^7` (major 7th), `Cm7` (minor 7th), etc.

---

## Integration & Output

### MIDI Output

Send to external MIDI devices:
```javascript
note("c e g")
  .velocity(0.8)
  .midi('IAC Driver')     // specify MIDI device name
```

**MIDI Control Change:**
```javascript
ccv("0.5*8")
  .ccn(74)               // CC number
  .midi('My Synth')
```

**MIDI Clock:**
```javascript
midicmd("clock*48,<start stop>/2")
  .midi('IAC Driver')
```

### OSC Output

Send to SuperCollider or other OSC software:
```javascript
note("c e g")
  .sound("superpiano")
  .osc()
```

### SuperDirt Integration

Strudel can connect to SuperDirt (requires installation):
```javascript
note("c a f e")
  .sound("superpiano")
  .orbit(0)
  .osc()
```

---

## Code Examples

### Example 1: Basic House Beat
```javascript
stack(
  sound("bd*4").bank("RolandTR909"),
  sound("[~ cp]*2").bank("RolandTR909"),
  sound("hh*8").gain(0.4).bank("RolandTR909"),
  sound("~ ~ oh ~").bank("RolandTR909")
)
```

### Example 2: Bassline with Filter
```javascript
note("c2 ~ c2 ~ eb2 ~ g1 ~")
  .sound("sawtooth")
  .lpf(500)
  .lpq(5)
  .delay(0.5)
  .delaytime(0.25)
```

### Example 3: Euclidean Pattern
```javascript
sound("bd(5,8), sd(3,8,2), hh(7,8)")
  .bank("RolandTR808")
```

### Example 4: Modulated Synth
```javascript
note("c*16")
  .sound("square")
  .lpf(sine.range(200, 2000).slow(4))
  .gain(0.5)
  .room(0.5)
```

### Example 5: Generative Arpeggio
```javascript
note("0 2 4 7".add(choose([0, 12, -12])))
  .scale("C:minor")
  .sound("sawtooth")
  .lpf(2000)
  .adsr("0.01:0.1:0.3:0.2")
  .every(4, x => x.rev())
  .fast(2)
```

### Example 6: Techno Pattern
```javascript
stack(
  sound("bd*4")
    .gain("1 0.8 0.9 0.7"),
  sound("~ sd ~ sd")
    .delay(0.3),
  sound("hh(7,8)")
    .gain(0.3)
    .pan(rand),
  note("c1 ~ c1 ~ c2 ~ c1 ~")
    .sound("sawtooth")
    .lpf(sine.range(400, 1200).slow(8))
    .gain(0.6)
).cpm(130)
```

### Example 7: Ambient Texture
```javascript
stack(
  note("c2 eb2 g2 bb2".slow(4))
    .sound("sine")
    .room(0.9)
    .gain(0.4),
  note("c3 eb3 g3 bb3".slow(3))
    .sound("triangle")
    .lpf(perlin.range(400, 2000))
    .room(0.7)
    .gain(0.3)
    .pan(sine.slow(8))
)
```

### Example 8: Using Every and Sometimes
```javascript
sound("bd sd bd sd")
  .bank("RolandTR909")
  .every(4, x => x.fast(2))
  .sometimes(x => x.stut(3, 0.5, 1/16))
```

### Example 9: Off for Echoes
```javascript
note("c e g c5")
  .sound("piano")
  .off(1/8, x => x.add(7).gain(0.5))
  .off(1/4, x => x.add(12).gain(0.3))
```

### Example 10: Complex Rhythm
```javascript
sound("[bd*2 bd] [~ [sd sd]] [bd bd*3] [~ sd]")
  .bank("RolandTR808")
  .speed("<1 0.8 1.2 0.9>")
```

---

## Keyboard Shortcuts (REPL)

- **Ctrl+Enter** / **Cmd+Enter** - Evaluate code
- **Ctrl+.** (dot) - Stop playback
- **Ctrl+/** / **Cmd+/** - Toggle comment
- Click **Shuffle icon** - Load random example

---

## Important Notes

### Project Status (2025)
- Repository moved from GitHub to **Codeberg** in June 2025
- Active development continues
- Latest versions: 1.1.0 "Bananensplit", 1.1.1
- Desktop app available with improved MIDI/OSC support

### Pattern-Based Thinking
Unlike traditional sequencers that work with sequential note lists, Strudel works with **patterns over cycles**. This allows for:
- Algorithmic composition
- Euclidean rhythms
- Polyrhythms and polymeters
- Generative structures
- Live manipulation

### Resources for Learning
1. **Official Tutorial**: https://strudel.cc/workshop/getting-started/
2. **Function Reference**: https://strudel.cc/functions/intro/
3. **Blog**: https://strudel.cc/blog/
4. **GitHub Examples**: https://github.com/terryds/awesome-strudel
5. **Tidal Club Forum**: https://club.tidalcycles.org/

---

## Sample Code Template for Quick Start

```javascript
// Basic template for live coding in Strudel

// Set tempo (optional)
setcps(130/60/4)  // 130 BPM

// Main pattern
stack(
  // Drums
  sound("bd*4")
    .bank("RolandTR909")
    .gain("1 0.8 0.9 0.7"),

  sound("[~ sd]*2")
    .bank("RolandTR909"),

  sound("hh*8")
    .gain(0.3)
    .bank("RolandTR909"),

  // Bass
  note("c2 ~ eb2 ~ g2 ~ c1 ~")
    .sound("sawtooth")
    .lpf(800)
    .lpq(5)
    .gain(0.7),

  // Melody
  note("0 2 4 7".scale("C:minor"))
    .sound("triangle")
    .lpf(2000)
    .room(0.5)
    .gain(0.4)
    .every(4, x => x.rev())
)
```

---

---

## Long-Form Composition & Song Structure

### Key Concepts for Multi-Section Songs

Creating complete compositions with distinct sections (intro, verse, chorus, breakdown, outro) requires understanding several techniques:

#### 1. Using `arrange()` for Complete Songs

`arrange()` is the primary tool for sequencing patterns over multiple cycles. It ensures proper timing without unexpected shuffling or speed changes.

**Song Structure Pattern:**
```javascript
setcps(BPM/60/4)  // Set tempo

// Define sections with const
const intro = ...
const verse = ...
const chorus = ...

// Arrange into song
arrange(
  [cycles, section1],
  [cycles, section2],
  ...
)
```

**Calculating Cycles:**
- Formula: `(BPM × duration_seconds) / 240`
- Example: 160 BPM × 120 seconds / 240 = 80 cycles for 2 minutes
- At 160 BPM: 1 cycle ≈ 1.5 seconds

#### 2. Section Variation with Angle Brackets `<>`

Use alternation to create sections that evolve over cycles:

```javascript
stack(
  // Drums build intensity over 8 cycles
  sound("bd*<4 4 4 4 8 8 16 4>")
    .gain("<0.8 0.9 1.0 1.1 1.2 1.2 1.3 0.6>"),

  // Lead appears only in certain cycles (sections)
  note("<~ [0 2 4]*8 ~ [0 2 4 7]*16 ~ ~ ~ ~>")
    .sound("square"),

  // Different effects per section
  sound("hh*8")
    .crush("<5 5 4 4 3 3 2 5>")
)
```

This technique is powerful for:
- Progressive intensity buildup
- Instrument entrances/exits
- Parameter automation over sections
- Creating verse/chorus distinctions

#### 3. Modular Composition with `const`

Define reusable musical sections:

```javascript
const drums = sound("bd*4, [~ sd]*2, hh*8")
const bass = note("c2 ~ eb2 ~ g2 ~ c1 ~").sound("sawtooth").lpf(800)
const lead = note("0 2 4 7".scale("C:minor")).sound("square")

// Combine sections
const verse = stack(drums, bass)
const chorus = stack(drums, bass, lead).gain(1.2)
```

#### 4. Advanced Techniques

**DJ-Style Mixing:**
While not yet fully implemented, the community is working on automated transitions between patterns with:
- Configurable play duration
- Fade duration
- Pattern crossfading

**Layered Thinking for Long-Form:**
1. Individual patterns (basic building blocks)
2. Patterns of patterns (sections)
3. Sequences of patterns (song structure)
4. Real-time editing at any level

**Conditional Pattern Inclusion:**
```javascript
// Use alternation to "mute" sections
const maybeLead = note("<~ ~ [c e g]*8 [c e g]*8>").sound("sine")

// Or use degradeBy for sparse sections
const sparseDrums = sound("bd*4").degradeBy("<0 0 0.5 0.8>")
```

#### 5. Best Practices

1. **Comment your sections clearly:**
   ```javascript
   // === INTRO (0:00-0:15) ===
   // === VERSE 1 (0:15-0:37) ===
   ```

2. **Plan cycle counts:**
   - Calculate total cycles needed
   - Allocate to intro/verse/chorus/etc.
   - Consider musical phrasing (4, 8, 16 cycle sections)

3. **Use consistent tempo:**
   ```javascript
   setcps(BPM/60/4)  // Set once at the top
   ```

4. **Test sections individually:**
   ```javascript
   // Test just the chorus
   chorus

   // Then test full arrangement
   arrange([4, intro], [8, chorus])
   ```

5. **Use stack() for simultaneous evolution:**
   ```javascript
   stack(
     evolvingDrums,
     evolvingBass,
     evolvingLead
   )
   ```

### Comparison: arrange() vs timeCat() vs cat()

| Function | Duration | Use Case | Behavior |
|----------|----------|----------|----------|
| `arrange([n, p])` | n cycles | Complete songs | Stable timing, no shuffling |
| `timeCat([n, p])` | n steps | Within-cycle | Can shuffle multi-cycle patterns |
| `cat(p1, p2)` | 1 cycle each | Sequential sections | Simple alternation |
| `sequence(p1, p2)` | Split 1 cycle | Fast changes | Within-cycle splitting |

### Example: 2-Minute Song Structure

```javascript
setcps(160/60/4)  // 160 BPM = ~1.5 sec/cycle

// 120 seconds / 1.5 = 80 cycles total
// Structure: Intro(8) + Verse(16) + Breakdown(8) + Verse(16) + Climax(24) + Outro(8)

const intro = sound("bd ~ ~ ~").gain(0.6)
const verse = stack(
  sound("bd*4").crush(4),
  note("[0 1 6]*8").scale("c:phrygian").sound("square")
)
const breakdown = note("[-12 -11]*4").sound("sine").slow(2)
const climax = verse.gain(1.3).crush(2)
const outro = intro.degradeBy(0.7)

arrange(
  [8, intro],
  [16, verse],
  [8, breakdown],
  [16, verse],
  [24, climax],
  [8, outro]
)
// Total: 8+16+8+16+24+8 = 80 cycles ✓
```

---

## Conclusion

Strudel.cc is a powerful, accessible platform for algorithmic music composition and live coding. Its pattern-based approach, combined with mini-notation syntax and extensive synthesis/effects capabilities, makes it suitable for:

- Live performances (algorave)
- Electronic music production
- Generative composition
- Music education
- Rapid prototyping of musical ideas
- **Complete song composition with multi-section structures**

The browser-based nature means you can start coding music immediately at https://strudel.cc without any installation or configuration.

Happy live coding! 🎵✨

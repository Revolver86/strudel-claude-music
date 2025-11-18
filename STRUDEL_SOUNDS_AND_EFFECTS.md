# Strudel Sounds and Effects Reference

A comprehensive guide to all available sounds, samples, effects, and synthesis capabilities in Strudel - the web-based live coding environment for algorithmic music patterns.

## Table of Contents

1. [Sample Libraries](#sample-libraries)
2. [Drum Machines](#drum-machines)
3. [Synthesizers & Waveforms](#synthesizers--waveforms)
4. [Audio Effects](#audio-effects)
5. [Pattern Functions](#pattern-functions)
6. [Time Modifiers](#time-modifiers)
7. [Mini Notation](#mini-notation)
8. [How to Access Sounds](#how-to-access-sounds)

---

## Sample Libraries

Strudel loads several default sample libraries, providing instant access to a wide variety of sounds.

### Default Sample Libraries

- **tidal-drum-machines** - Comprehensive collection of classic drum machine samples
- **Dirt-Samples** - Subset of samples from the TidalCycles Dirt-Samples repository
- **Piano** - Salamander Grand Piano V3 (CC-BY, created by Alexander Holm)
  - Yamaha C5 recorded with two AKG c414 microphones
  - 48kHz 24bit, 16 velocity layers
- **VCSL** - Versilian Community Sample Library (CC0)
  - Lightweight yet high-quality keyboard instruments
  - Pianos, harpsichords, celestas, and other keyboard sounds
- **EmuSP12** - E-mu SP-12 drum machine samples
- **Mridangam** - Ancient Indian rhythmic instrument samples (CC-BY-SA)
  - Main percussion instrument in South Indian classical music (Carnatic)

### Common Default Drum Sounds

When using drum sounds without specifying a bank:
- `bd` - Bass drum
- `sd` - Snare drum
- `hh` - Hi-hat (closed)
- `oh` - Open hi-hat
- `cp` - Clap/handclap
- `lt` - Low tom
- `mt` - Mid tom
- `ht` - High tom

---

## Drum Machines

Strudel uses the comprehensive **tidal-drum-machines** library. Samples are prefixed with drum machine names.

### Classic Drum Machines Available

- **RolandTR808** - Legendary drum machine for hip-hop and electronic music
  - Examples: `RolandTR808_bd`, `RolandTR808_sd`, `RolandTR808_hh`
- **RolandTR909** - Famous drum machine for house and techno
  - 11 percussion voices
  - Bass drum, snare, toms, rimshot, clap, crash/ride cymbals, hi-hat
  - Examples: `RolandTR909_bd`, `RolandTR909_hh(4)` (4 variations available)
- **RolandCR78** - Early Roland rhythm composer
- **LinndrumlmLM2** - Classic Linn drum machine
- **Casio** models (e.g., RZ-1)
- **EKO Computerhythm**
- **Akai** models
- **EmuSP12** - E-mu SP-12 sampler

### Using Drum Machines

```javascript
// Use the bank function to change drum machine
s("bd sd hh cp").bank("RolandTR909")

// Or use full names directly
s("RolandTR808_bd RolandTR808_sd")
```

### Viewing Available Samples

In the Strudel REPL:
1. Open the **Sounds** tab
2. Navigate to **drum-machines**
3. Numbers after sample names indicate variations available
   - Example: `RolandTR909_hh(4)` means 4 hi-hat variations

---

## Synthesizers & Waveforms

Strudel includes **superdough**, a fully-featured synthesis engine based on SuperDirt.

### Basic Waveforms

Available via `.sound()` or `.s()`:

- `sine` - Pure sine wave (fundamental tone)
- `sawtooth` - Rich, bright harmonic content
- `square` - Hollow, clarinet-like sound
- `triangle` - Default waveform, softer than sawtooth

```javascript
// Using different waveforms
note("c2 eb2 g2 g1").sound("<sawtooth square triangle sine>")
```

**Note:** If you specify a `note()` without a `sound()`, the default is `triangle`!

### Noise Generators

- `white` - White noise (equal energy across frequencies)
- `pink` - Pink noise (equal energy per octave)
- `brown` - Brown noise (deeper, rumbling)

```javascript
// Using noise
sound("white pink brown").density(0.5)
```

### Advanced Synthesis

#### Wavetable Synthesis

- **AKWF** - Adventure Kid Waveforms (1000+ wavetables)
- Cycle-based waveforms with loop points for smooth playback
- Classic but highly effective synthesis technique

#### FM Synthesis

- Frequency Modulation synthesis
- Changes frequency of basic waveforms rapidly to alter timbre
- Create complex, metallic, or bell-like tones

```javascript
// FM synthesis example
note("c3 e3 g3")
  .sound("sine")
  .fmh(2)        // FM harmonic ratio
  .fmi(5)        // FM intensity
```

#### ZZFX Synthesizer

Integrated lightweight synthesizer with extensive sound design parameters:
- Envelope controls (attack, decay, sustain, release)
- Waveshaping
- Pitch sliding
- Noise mixing
- FM modulation (`zmod`)
- Bit crushing (`zcrush`)
- Delay effects

```javascript
// ZZFX with tremolo
sound("z_").note("c3")
  .tremolo(8)    // LFO volume modulation
  .zcrush(0.5)   // Bit crushing
```

### Synthesizer Features

- **Granular synthesis** - Performant sampler with granular capabilities
- **Vibrato** - Built-in pitch modulation
- **Multichannel audio** - Support for multi-speaker setups
- **Lazy loading** - Audio samples load only when first triggered (saves resources)

---

## Audio Effects

Strudel implements many of SuperDirt's effects using the Web Audio API.

### Filters

#### Low-Pass Filter (lpf)
Allows low frequencies to pass, cuts high frequencies.

```javascript
s("bd sd hh cp").lpf(1000)
```

- **Frequency range:** 0 - 20000 Hz
- Often combined with `cutoff` parameter

#### High-Pass Filter (hpf)
Allows high frequencies to pass, cuts low frequencies.

```javascript
s("bd sd hh cp").hpf(500)
```

- **Frequency range:** 0 - 20000 Hz

#### Band-Pass Filter (bp/bandpass)
Only allows a frequency band to pass, cuts surrounding frequencies.

```javascript
s("bd sd").bandpass(2000)
```

- Parameters: `bandf` (frequency), `bandq` (resonance)

#### Vowel Filter
Formant filter that makes sounds resemble vowels.

```javascript
s("bd sd").vowel("<a e i o u>")
```

**Available vowels:**
- `a`, `e`, `i`, `o`, `u`
- `ae`, `aa`, `oe`, `ue`
- `y`, `uh`, `un`, `en`, `an`, `on`

Corresponds to IPA: [a] [e] [i] [o] [u] [æ] [ɑ] [ø] [y] [ɯ] [ʌ] [œ̃] [ɛ̃] [ɑ̃] [ɔ̃]

### Filter Parameters

- **cutoff** - Frequency at which the filter starts working
- **resonance** (q-value) - Controls filter resonance/emphasis
  - Higher values = more aggressive sound
  - Creates peaks at cutoff frequency

```javascript
s("sawtooth").note("c2")
  .cutoff("<1000 2000 4000>")
  .resonance(20)
```

### Dynamics

#### Compressor
Dynamic range compression with full parameter control.

```javascript
s("bd sd hh").compressor()
```

**Parameters:**
- `threshold` - Level above which compression begins
- `ratio` - Amount of compression applied
- `knee` - Smoothness of compression transition
- `attack` - How quickly compression engages
- `release` - How quickly compression disengages

### Spatial Effects

#### Pan
Positions sound in stereo field.

```javascript
s("bd sd hh cp").pan("<0 0.25 0.5 0.75 1>")
```

- **Range:** 0 (left) to 1 (right)
- Also works with multichannel setups (circular panning)

#### Spread
Stereo width effects, often combined with panning patterns.

#### Jux
Creates stereo effects by applying a function only to the right channel.

```javascript
s("bd sd hh cp").jux(rev)
```

- **juxBy** - Adjustable stereo width
  - 0 = mono
  - 1 = full stereo

### Time-Based Effects

#### Delay
Echo/delay effect.

```javascript
s("bd sd hh cp").delay(0.5)
```

**Parameters:**
- `delay` - Wet/dry mix amount
- `delaytime` - Delay time in seconds
- `delayfb` (delayfeedback) - Amount of feedback/repeats

#### Reverb
Simulates acoustic space.

```javascript
s("bd sd").room(0.8)
```

**Parameters:**
- `room` - Reverb amount/wet level
- `size` - Room size (optional, separated by `:`)

```javascript
s("bd sd").room("0.8:2")  // room amount : size
```

- Improved **convolution reverb** available

### Modulation Effects

#### Phaser
Sweeping notch filter effect.

```javascript
s("bd sd hh").phaser()
```

#### Leslie
Rotary speaker simulation (like a Leslie speaker cabinet).

```javascript
s("sawtooth").note("c3 eb3 g3").leslie()
```

#### Tremolo
Volume modulation (LFO amplitude).

```javascript
s("sawtooth").note("c3").tremolo(8)
```

- Parameter: Rate of tremolo in Hz

#### LFO
Low Frequency Oscillator for various modulation.

```javascript
s("sawtooth").lfo(2)
```

### Distortion & Saturation

#### Distort
Normal distortion/overdrive.

```javascript
s("bd sd").distort(0.5)
```

#### Shape
Waveshape distortion.

```javascript
s("sawtooth").note("c2").shape(5)
```

- Most useful values: 0 - 10 (depends on source gain)

#### Crush
Bit crushing - reduces bit depth.

```javascript
s("bd sd hh cp").crush(4)
```

- **Range:** 1 (drastic reduction) to 16 (minimal reduction)

#### Coarse
Fake resampling - lowers sample rate.

```javascript
s("bd sd hh cp").coarse(8)
```

### Other Effects

#### Gain
Controls overall gain/volume exponentially.

```javascript
s("bd sd hh cp").gain(0.8)
```

#### Post
Post-gain adjustment after effects.

```javascript
s("bd sd").post(1.2)
```

#### Accelerate
Pitch/speed change over duration of sample.

```javascript
s("bd").accelerate(2)
```

#### Comb
Comb filter effect.

```javascript
s("hh").comb(0.5)
```

### Orbits

Orbits are global parameter contexts for patterns. Patterns on the same orbit share global effects.

```javascript
s("bd sd").orbit(0)
s("hh cp").orbit(1)
```

- Each orbit has independent delay/reverb settings
- Useful for organizing complex arrangements

---

## Pattern Functions

Functions for combining and transforming patterns.

### Pattern Combination

#### stack
Plays given patterns simultaneously.

```javascript
stack("g3", "b3", ["e4", "d4"]).note()
```

#### cat
Sequences patterns one after another.

```javascript
cat("bd sd", "hh cp", "bd bd sd hh")
```

#### layer
Combines patterns (similar to stack but with different timing behavior).

```javascript
layer("bd*4", "hh*8", "sd:2 ~ sd:2 ~")
```

### Value Modification

#### add
Adds numerical values to pattern.

```javascript
note("0 2 4 7").add(12)  // Transpose up an octave
```

#### sub
Subtracts values.

```javascript
note("12 14 16 19").sub(12)  // Transpose down
```

#### mul
Multiplies values.

```javascript
gain(0.5).mul(2)  // Double the gain
```

#### div
Divides values.

```javascript
cutoff(4000).div(2)  // Halve the cutoff
```

---

## Time Modifiers

Functions that modify pattern timing and structure.

### Speed Control

#### fast
Speeds up pattern by given factor.

```javascript
s("bd sd hh cp").fast(2)  // Twice as fast
```

- Mini notation: `*`
- Example: `s("bd*2 sd*4")`

#### slow
Slows down pattern over given cycles.

```javascript
s("bd sd hh cp").slow(2)  // Twice as slow
```

- Mini notation: `/`
- Example: `s("bd/2 sd/4")`

### Repetition & Iteration

#### iter
Divides pattern into subdivisions, increments starting point each cycle.

```javascript
s("bd sd hh cp").iter(4)
```

- Pattern wraps after last subdivision

#### iterBack
Like iter but plays subdivisions in reverse order.

```javascript
s("bd sd hh cp").iterBack(4)
```

### Direction

#### rev
Plays pattern backwards.

```javascript
s("bd sd hh cp").rev()
```

#### palindrome
Alternates between forward and backward each cycle.

```javascript
s("bd sd hh cp").palindrome()
```

- Equivalent to `every(2, rev)`

### Conditional Transformations

#### every
Applies transformation every N cycles.

```javascript
s("bd sd hh cp").every(4, rev)
```

#### sometimes
Applies transformation 50% of the time randomly.

```javascript
s("bd sd hh cp").sometimes(rev)
```

#### sometimesBy
Applies transformation with specified probability.

```javascript
s("bd sd hh cp").sometimesBy(0.3, distort(0.5))
```

- Parameter: 0.0 - 1.0 (percentage chance)

### Randomness

#### degradeBy
Randomly removes events from pattern.

```javascript
s("bd sd hh cp").degradeBy(0.5)
```

- Mini notation: `?`
- Parameter: 0.0 - 1.0 (percentage chance of removal)

---

## Mini Notation

Strudel uses powerful mini notation for compact pattern writing.

### Basic Syntax

```javascript
// Sequence sounds in order
s("bd sd hh cp")

// Parallel patterns (simultaneously)
s("[bd sd] [hh cp oh]")

// Subdivision
s("bd [sd sd] hh cp")  // sd plays twice as fast

// Rests
s("bd ~ hh ~")  // ~ is silence
```

### Operators

| Symbol | Function | Example | Description |
|--------|----------|---------|-------------|
| `*` | fast | `bd*2` | Repeat/speed up by factor |
| `/` | slow | `bd/2` | Slow down by factor |
| `?` | degradeBy | `bd?` | Randomly skip (50% chance) |
| `!` | replicate | `bd!4` | Replicate sound N times |
| `<>` | alternate | `<bd sd>` | Alternate each cycle |
| `[]` | polyrhythm | `[bd sd hh]` | Group/subdivide |
| `{}` | polymeter | `{bd sd hh, cp}` | Different lengths |
| `,` | stack | `bd, hh*4` | Play simultaneously |
| `|` | choice | `bd|sd|hh` | Random choice |
| `_` | elongate | `bd_` | Hold/sustain |

### Advanced Notation

#### Euclidean Rhythms

```javascript
s("bd(3,8)")  // 3 beats distributed over 8 steps
s("hh(5,8,2)")  // 5 beats over 8 steps, offset by 2
```

#### Modifiers in Mini Notation

```javascript
// Combination of operators
s("bd*2 sd? hh*4 <cp oh>")

// Nested structures
s("bd [[sd sd] hh] cp")

// With effects
s("bd sd hh cp").fast("<1 2 4>")
```

---

## How to Access Sounds

### In the Strudel REPL

1. Open **Strudel REPL** at https://strudel.cc
2. Click the **Sounds** tab
3. Browse available sample banks:
   - **Drum machines** - View all drum machine samples with variation counts
   - **Piano** - Salamander piano samples
   - **VCSL** - Keyboard instruments
   - **Other** - Additional sample libraries

### Loading Custom Samples

```javascript
// Load samples from URL
samples({
  mysamples: "https://example.com/samples/strudel.json"
})

// Use custom samples
s("mysamples:0 mysamples:1")
```

### Sample Lazy Loading

- Sample maps load immediately
- Audio files load only when first triggered
- First play may be delayed/silent
- Subsequent plays are instant

### GitHub Integration

```javascript
// Load samples from GitHub repository
samples('github:username/repo/samples')
```

---

## Tips & Best Practices

### Performance

- Use `orbit()` to organize independent effect chains
- Limit simultaneous patterns to avoid CPU overload
- Consider using synths instead of heavy sample libraries when possible

### Sound Design

- Combine multiple effects for complex textures
```javascript
s("sawtooth").note("c2")
  .lpf(1000).resonance(10)
  .room(0.5).delay(0.3)
  .distort(0.2)
```

- Use `jux` for instant stereo width
```javascript
s("bd sd hh cp").jux(rev).jux(fast(2))
```

### Pattern Complexity

- Start simple, build complexity gradually
- Use `stack()` to layer independent patterns
- Combine time modifiers for intricate rhythms
```javascript
s("bd sd hh cp")
  .fast("<1 2 4 8>")
  .every(4, rev)
  .sometimes(degradeBy(0.5))
```

### Exploration

- Browse the Sounds tab regularly for new samples
- Experiment with mini notation combinations
- Try random effects with `sometimes()` for happy accidents

---

## Resources

- **Official Documentation:** https://strudel.cc/learn/
- **REPL/Editor:** https://strudel.cc/
- **Samples Documentation:** https://strudel.cc/learn/samples/
- **Effects Documentation:** https://strudel.cc/learn/effects/
- **Synths Documentation:** https://strudel.cc/learn/synths/
- **JavaScript API:** https://strudel.cc/functions/intro/

---

## Credits

Strudel is a web-based implementation of TidalCycles in JavaScript, created by Felix Roos and contributors.

### Sample Library Credits

- **Salamander Piano** - Alexander Holm (CC-BY)
- **VCSL** - Versilian Studios (CC0)
- **Mridangam** - (CC-BY-SA)
- **Tidal Drum Machines** - Community contributions

### Audio Engine

**superdough** - Strudel's audio engine, based on SuperDirt (the TidalCycles audio engine)

---

*Last Updated: 2025*

*This reference is based on Strudel's current implementation and may evolve as the project develops. For the most up-to-date information, visit the official Strudel documentation.*

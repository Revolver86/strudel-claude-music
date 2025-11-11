# Strudel Claude Music - Live Coding Performance System

**A comprehensive Strudel.cc music production framework optimized for unique, performable compositions with verified syntax and anti-stock-music theory.**

Created by Claude for efficient, creative music production with complete documentation to eliminate debugging time in future sessions.

---

## 🎯 Project Purpose

This repository contains:
1. **Comprehensive Strudel documentation** - 150+ functions, verified syntax, edge cases
2. **Anti-stock-music theory guide** - Techniques for creating genuinely unique compositions
3. **4 performance-ready demos** - Interactive, playable compositions with sliders, mouse control, and mute capabilities
4. **Verified syntax fixes** - Critical corrections to prevent common errors
5. **Complete workflow guide** - From live coding to Suno polishing

**Goal**: Enable rapid creation of unique, performable electronic music that avoids generic progressions and maximizes creative output per session.

---

## 📚 Documentation

### Core References (Read These First!)

#### 1. **STRUDEL_RESEARCH.md**
Foundational guide covering:
- Core concepts & pattern basics
- Mini-notation syntax reference
- Sound & synthesis fundamentals
- Standard effects & audio processing
- Pattern manipulation techniques
- Timing & tempo control
- Comprehensive examples

#### 2. **STRUDEL_ADVANCED_RESEARCH.md** ⚠️ **CRITICAL**
Deep dive with 150+ functions and verified syntax:
- **CRITICAL FIXES** documented at top (vowel vs formant, euclid rotation)
- Advanced sample manipulation (loopAt, chop, slice, striate)
- Sample overlap control (legato, cut, choke)
- Extended audio effects (vowel filter, djf, duck, orbit system)
- Advanced signal generators (bipolar signals, phasor, cosine)
- Pattern timing functions (compress, squeeze, hurry, swingBy)
- Jazz harmony with ireal dictionary (638+ voicings)
- MIDI control (CC, program change, midicmd)
- Sample loading (GitHub, Freesound, local)
- Visualization tools (pianoroll, scope, punchcard, spiral)
- Granular synthesis techniques
- **Edge cases & gotchas** - 10 critical errors to avoid
- Algorave performance techniques

#### 3. **MUSIC_THEORY_CREATIVITY.md** 🎼
Anti-stock-music bible for unique compositions:
- **What to NEVER use**: I-V-vi-IV and other overused progressions
- **What to USE**: 40+ unique harmonic techniques
- 12+ exotic scales (whole tone, octatonic, harmonic major, etc.)
- Odd time signatures & polyrhythms
- Chromatic movement patterns
- Dissonant interval usage
- Non-functional harmony (quartal, modal interchange)
- Advanced concepts (neo-Riemannian, serialism, spectral)
- Composition checklist for uniqueness
- Creativity prompts when stuck
- Complete scale/interval quick reference

---

## 🎵 Interactive Demos

### Demo 01: Reality Glitch
**Advanced features showcase with slider control**

Features:
- ireal jazz voicings (638 professional chord voicings)
- Vowel filter for talking bass
- Granular synthesis with chop/striate
- Signal modulation (sine2, saw2, phasor)
- 20+ tweakable parameters with sliders
- Inline piano roll visualizations
- 140 BPM glitchy electronica

Purpose: Demonstrate advanced Strudel capabilities

### Demo 02: Switch Angel
**Slider-driven trance performance demo**

Features:
- 11 real-time controllable sliders
- TB-303 style acid bassline with .lpenv() envelope control
- .ftype('ladder') for authentic acid filter
- .duck() for sidechain pumping (trance aesthetic)
- Inline ._pianoroll() visualizations
- Supersaw pads with detuned layers
- 138 BPM trance arrangement

Purpose: Interactive performance with slider automation

### Demo 03: Quantum Ritual
**Genuinely unique composition with exotic harmony**

Features:
- **7/8 time signature** (not 4/4!)
- Quartal harmony (stacked 4ths, not triads)
- Whole tone scale (ambiguous, floating)
- Octatonic arpeggios (perpetual tension)
- Harmonic major pads (exotic)
- Chromatic bass (not functional I-IV-V)
- Tritone jumps (maximum dissonance)
- Euclidean rhythms with prime numbers (5, 7, 11, 13)
- Polyrhythms (3 against 7, 5 against 7)
- 11 interactive sliders

Purpose: Anti-stock-music showcase - impossible to sound generic

### Demo 04: Memetic Descent ⭐ **FULLY PLAYABLE**
**Live performance-ready with mute/solo control**

Features:
- **15 independent layers** using `$:` syntax
- **Each layer mutable** with `_` prefix
- **Mouse control**: mousex/mousey for real-time parameter control
- **20 sliders** for all key parameters
- **Complete performance guide**: 3-minute song structure included
- Phrygian dominant, whole tone, octatonic scales
- Chromatic bass, quartal chords, tritone hits
- Euclidean & prime number rhythms
- Suggested intro/build/drop/breakdown/climax/outro structure

Purpose: "Play" the song without coding - mute/unmute layers, move mouse, adjust sliders

---

## 🎮 Live Performance Features

### Mute/Solo Control
```javascript
$: sound("bd*4")    // Kick - PLAYING
_$: sound("hh*8")   // Hats - MUTED (underscore prefix)
$: sound("~ sd ~")  // Snare - PLAYING
```

**During performance:**
1. Remove `_` to unmute a layer
2. Press Ctrl+Enter to update
3. Layer comes in live!

### Mouse Control (No Coding!)
```javascript
.lpf(mousex.range(200, 5000))    // Mouse X = filter brightness
.gain(mousey.range(0, 1))         // Mouse Y = volume
```

Move mouse around screen for real-time expression!

### Slider Control
```javascript
.lpf(slider(500, 100, 2000))     // Drag slider to control filter
.gain(slider(0.7, 0, 1.5))        // Drag to control volume
```

### MIDI Controller Support
```javascript
let controller = await midin('Your Controller Name')
.lpf(controller(54).range(200, 5000))  // Hardware knob control
```

### Pattern Switching
```javascript
arrange(
  [4, sound("bd*4")],              // 4 cycles intro
  [8, sound("bd*4, hh*8")],        // 8 cycles full
)
```

---

## ⚠️ Critical Syntax Fixes

**MUST KNOW before writing any Strudel code:**

### 1. Vowel Filter Function
```javascript
// ❌ WRONG - Causes error
.formant("<a e i o u>")

// ✅ CORRECT
.vowel("<a e i o u>")
```

**Error message**: `note(...).sound(...).formant is not a function`

**Why confusing**: It IS a formant filter, but Strudel names it `.vowel()`

### 2. Euclid Rotation Parameter
```javascript
// ❌ WRONG - Causes error
.euclid(3, 7, 2)

// ✅ CORRECT - Use .early() for rotation
.euclid(3, 7).early(0.14)

// ✅ CORRECT - Or use mini-notation
sound("cp(3,7,2)")
```

**Error message**: `.euclid() expects 2 inputs but got 3`

**Why confusing**: Mini-notation supports 3 parameters, function form doesn't

---

## 🚀 Quick Start

### 1. Load a Demo
1. Go to https://strudel.cc
2. Open any `.strudel` file from this repo
3. Copy all contents
4. Paste into Strudel REPL
5. Press **Ctrl+Enter** to play
6. Press **Ctrl+.** to stop

### 2. For Live Performance (Memetic Descent)
1. Most layers start muted (`_$:` prefix)
2. Remove `_` from a layer to unmute it
3. Press Ctrl+Enter after each change
4. Move mouse for dynamic control
5. Drag sliders to adjust parameters
6. Record your performance!

### 3. Basic Controls
- **Ctrl+Enter**: Update/play pattern
- **Ctrl+.**: Stop everything
- **Ctrl+/**: Toggle comment
- `hush()`: Mute all patterns
- `all(x => x.room(0.5))`: Apply effect to all patterns

---

## 🎼 Music Theory Approach

### ❌ What We AVOID:
- I-V-vi-IV and other overused progressions
- Natural minor / C major without variation
- Standard 4/4 with kick on 1&3, snare on 2&4
- Predictable drop patterns
- Generic EDM structures

### ✅ What We USE:
- **Quartal harmony**: Stacked 4ths (C-F-Bb-Eb)
- **Exotic scales**: Whole tone, octatonic, harmonic major, Phrygian dominant
- **Chromatic movement**: Semitone bass lines
- **Odd time signatures**: 5/4, 7/8, 11/8
- **Euclidean rhythms**: Algorithmic patterns (5/8, 7/12, 11/16)
- **Polyrhythms**: 3 against 7, 5 against 8
- **Dissonant intervals**: Tritones, minor 2nds, major 7ths
- **Non-functional harmony**: No traditional cadences

**Result**: Compositions that sound nothing like stock music when processed through Suno

---

## 🎬 Production Workflow

### 1. Live Coding Session
- Load demo in Strudel.cc
- Experiment with mute/unmute combinations
- Adjust sliders for variation
- Move mouse for dynamic expression
- Record audio output

### 2. Multiple Takes
- Record 5-10 passes focusing on:
  - Different layer combinations
  - Different slider positions
  - Different mouse movements
  - Different energy levels (intro vs climax)

### 3. Editing
- Import all recordings into DAW
- Edit best moments from each take
- Create transitions between sections
- Export final instrumental

### 4. Suno Integration
- Upload edited instrumental to Suno
- Add vocals using lyrics (see TECHNOMAGI_LYRICS.txt)
- Polish/master
- Final track complete!

---

## 📝 Included Lyrics

### Technomagi vs Egregores (Year 3000)
Cyberpunk narrative about technomagi fighting memetic demons in the year 3000.

**Themes**: Neural interfaces, digital shamanism, memetic warfare, ego death, uploading consciousness, techno-mysticism

**Use**: Copy/paste into Suno along with your Strudel recordings

---

## 🛠️ Technical Details

### Verified Working Functions
All demos use only verified syntax:
- `.vowel()` for formant filtering ✅
- `.euclid(n, m)` with `.early()` for rotation ✅
- `.slider()` for interactive control ✅
- `mousex`/`mousey` for mouse control ✅
- `$:` syntax for mutable patterns ✅
- `.duck()` for sidechaining ✅
- `.lpenv()` for acid envelopes ✅
- `.chop()`, `.striate()` for granular ✅

### Audio Effects Available (Browser, No SuperDirt)
- Filters: lpf, hpf, bpf + resonance (lpq, hpq, bpq)
- Distortion: shape, distort, crush, coarse
- Spatial: pan, delay, room, phaser
- Modulation: vowel, tremolo, vibrato
- Envelope: attack, decay, sustain, release
- Sample: loopAt, chop, slice, speed, cut, legato

### Performance Optimizations
- Use different orbits for different effect contexts
- Lower grain counts (chop) for CPU efficiency
- Use degradeBy() to thin dense patterns
- Desktop app for better performance than browser

---

## 🎯 For Future Claude Instances

**Read these FIRST before writing any code:**
1. STRUDEL_ADVANCED_RESEARCH.md - Critical fixes at top
2. MUSIC_THEORY_CREATIVITY.md - Anti-stock-music techniques
3. Check existing demos for working examples

**Common Mistakes to Avoid:**
1. Using `.formant()` instead of `.vowel()`
2. Using `.euclid(n, m, rotation)` instead of `.euclid(n, m).early()`
3. Using I-V-vi-IV or other cliché progressions
4. Same orbit for patterns with different effect needs
5. High resonance (lpq/bpq) without gain reduction

**Quick Reference:**
- Mute pattern: Add `_` before `$:`
- Mouse control: `mousex`, `mousey`
- Sliders: `slider(default, min, max)`
- Stop all: `hush()` or Ctrl+.
- Update live: Ctrl+Enter

---

## 📊 Project Stats

- **4 interactive demos** with different purposes
- **150+ documented functions** with verified syntax
- **40+ unique music theory techniques**
- **12+ exotic scales** for anti-stock-music
- **20+ sliders** in performance demos
- **15 mutable layers** in Memetic Descent
- **10 critical gotchas** documented and solved
- **2 critical syntax fixes** preventing errors

---

## 🎵 Legacy Compositions (Original Harsh Experimental)

The repository also includes 7 original harsh experimental compositions:
- Digital Blasphemy, Corrupted Terminal, Void Transmission
- Data Rot, Screaming Silicon, Entropy Ritual
- Transmission From The Void (full 2-minute song)

These embrace harsh black metal, lo-fi industrial, and 8-bit demoscene aesthetics with extreme bit crushing, sample rate destruction, and structural chaos.

---

## 💡 Philosophy

**This project rejects:**
- Debugging time wasted on undocumented syntax
- Generic stock music progressions
- Predictable structures and clichés
- Trial-and-error learning

**This project embraces:**
- Comprehensive documentation for efficiency
- Genuinely unique harmonic/rhythmic approaches
- Interactive, performable compositions
- Rapid iteration and creative output
- Future-Claude-friendly knowledge base

---

## 🚀 Getting Started Checklist

- [ ] Read STRUDEL_ADVANCED_RESEARCH.md critical fixes section
- [ ] Skim MUSIC_THEORY_CREATIVITY.md for composition ideas
- [ ] Try Demo 04 (Memetic Descent) - fully playable
- [ ] Experiment with muting/unmuting layers
- [ ] Record a performance pass
- [ ] Check out other demos for different techniques
- [ ] Create your own composition using anti-stock-music theory!

---

## 📄 License

All code, documentation, and compositions released into the public domain. Use, modify, perform, record, and distribute freely.

---

## 🔗 Resources

- **Strudel REPL**: https://strudel.cc
- **Strudel Docs**: https://strudel.cc/learn/
- **TidalCycles Forum**: https://club.tidalcycles.org/
- **This Repository**: Complete knowledge base for efficient music production

---

**Created by Claude for rapid, unique, performable music production.**

*Technomagi approved.* ⚡🎵✨

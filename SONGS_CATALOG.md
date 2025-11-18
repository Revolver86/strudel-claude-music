# Complete Songs Catalog

**Repository:** Strudel Claude Music - Harsh Experimental Compositions
**Total Compositions:** 8
**Platform:** [Strudel.cc](https://strudel.cc) - Browser-based live coding environment
**Language:** JavaScript/TidalCycles pattern notation

---

## Quick Navigation

All song files are located in the root directory:
- `composition_01_digital_blasphemy.strudel`
- `composition_02_corrupted_terminal.strudel`
- `composition_03_void_transmission.strudel`
- `composition_04_data_rot.strudel`
- `composition_05_screaming_silicon.strudel`
- `composition_06_entropy_ritual.strudel`
- `composition_07_transmission_from_the_void.strudel`
- `composition_08_quantum_decay.strudel`

---

## Documentation Files

1. **README.md** - Main project overview, quick start guide, and aesthetic philosophy
2. **STRUDEL_RESEARCH.md** - Complete technical reference for Strudel.cc syntax and features
3. **SONGS_CATALOG.md** - This file - comprehensive index of all compositions

---

## Composition 01: Digital Blasphemy
**File:** `composition_01_digital_blasphemy.strudel`
**Tempo:** 180 BPM
**Duration:** ~72 lines
**Style:** Fast, aggressive black metal meets 8-bit industrial

**Description:**
Relentless blast beats collide with 8-bit demoscene leads in Locrian mode. Features Euclidean rhythm patterns, glitched tremolo picking, and industrial noise percussion. The foundation of the harsh experimental aesthetic.

**Key Techniques:**
- Euclidean rhythms for blast beats (e.g., `"bd(<3 7>,<8 16>)"`)
- Locrian mode for maximum dissonance
- Square wave leads with glitch effects
- Heavy waveshaping and bit crushing
- Random degradation patterns

**Key Layers:**
- Blast beat foundation (Euclidean)
- Snare patterns (Euclidean 5-7-3-11)
- 8-bit demoscene lead
- Black metal tremolo
- Industrial noise percussion
- Lo-fi bass drone
- Chaotic glitch layer

---

## Composition 02: Corrupted Terminal
**File:** `composition_02_corrupted_terminal.strudel`
**Tempo:** 200 BPM (fastest non-chaos tempo)
**Duration:** ~71 lines
**Style:** Relentless glitched 8-bit meets industrial void

**Description:**
Maximum speed and chaos. Broken, scrambled kick patterns fight against demoscene-style synthesis. Extreme bit crushing creates harsh digital artifacts. Every element is degraded and stuttering.

**Key Techniques:**
- Extreme degradation (`.degradeBy(0.7)`)
- Heavy bit crushing (`.crush(2)`)
- Stutter effects (`.stut()`)
- Random pattern selection
- Sub-bass distortion layers

**Key Layers:**
- Broken scrambled kicks
- Industrial metal percussion
- Demoscene chaotic lead
- Harsh digital artifacts
- Sub-bass distortion
- Extreme glitch stutter

---

## Composition 03: Void Transmission
**File:** `composition_03_void_transmission.strudel`
**Tempo:** 150 BPM (slower, heavier)
**Duration:** ~80 lines
**Style:** Slower, more oppressive atmosphere

**Description:**
Slows the pace to create a crushing, oppressive atmosphere. Sparse industrial hits with long delay tails. Heavy lo-fi processing on all elements. Focus on weight and space rather than speed.

**Key Techniques:**
- Long delay effects (`.delay(0.5).delayfeedback(0.8)`)
- Extreme distortion (`.distort(2)`)
- Sparse rhythmic patterns
- Deep sub-bass drones
- Harsh noise washes

**Key Layers:**
- Crushing distorted kicks
- Sparse industrial hits
- 8-bit dissonant drones
- Black metal tremolo (lo-fi)
- Harsh noise wash
- Deep sub-bass

---

## Composition 04: Data Rot
**File:** `composition_04_data_rot.strudel`
**Tempo:** 220 BPM (fastest tempo)
**Duration:** ~74 lines
**Style:** Maximum glitch chaos - digital decomposition

**Description:**
The fastest and most chaotic composition. Everything is unstable and glitched. Heavy use of random parameters creates unpredictable digital decomposition. Pure sonic entropy.

**Key Techniques:**
- Random parameter modulation (`rand`, `irand`)
- Maximum degradation (`.degradeBy(0.9)`)
- Unstable patterns
- Extreme bit reduction (`.crush(1)`)
- Pure noise chaos

**Key Layers:**
- Unstable glitched blast beats
- Chaotic degraded patterns
- Broken 8-bit leads
- Random digital artifacts
- Distorted sub frequencies
- Noise chaos with stuttering

---

## Composition 05: Screaming Silicon
**File:** `composition_05_screaming_silicon.strudel`
**Tempo:** 165 BPM (mid-tempo)
**Duration:** ~90 lines
**Style:** Distorted "vocal" textures meets harsh electronics

**Description:**
Simulates harsh vocals through extreme synthesis techniques. Formant filtering and harsh waveshaping create "screaming" textures. Mid-tempo allows more focus on textural elements.

**Key Techniques:**
- Formant filtering for vocal simulation
- Extreme waveshaping (`.shape(20)`)
- Bandpass sweeps
- Heavy distortion layers
- 8-bit dissonant harmonies

**Key Layers:**
- Mid-tempo brutal foundation
- "Screaming" synth (formant filtered)
- Simulated black metal vocals
- 8-bit dissonant harmony
- Industrial rhythm elements
- Crushing sub-bass

---

## Composition 06: Entropy Ritual
**File:** `composition_06_entropy_ritual.strudel`
**Tempo:** 170 BPM (with unstable tempo variation)
**Duration:** ~103 lines (second longest)
**Style:** Complete avant-garde outsider chaos

**Description:**
The most experimental composition. Features polyrhythms, polymeters, unstable tempo, and complete structural breakdown. Multiple competing layers fight for dominance. Maximum entropy.

**Key Techniques:**
- Polyrhythmic patterns (multiple time signatures)
- Polymeter layering
- Tempo instability
- Atonal synthesis
- Multi-layer chaos
- Random glitch hits

**Key Layers:**
- Chaotic polyrhythmic patterns
- Atonal 8-bit madness
- Competing tremolo layers
- Fighting bass frequencies
- Multi-layer noise chaos
- Random industrial glitch
- Maximum structural breakdown

---

## Composition 07: Transmission From The Void
**File:** `composition_07_transmission_from_the_void.strudel`
**Tempo:** 160 BPM
**Duration:** ~116 lines (LONGEST - full song structure)
**Style:** Complete occult ritual with full song structure
**Special:** First complete song with sections and arrangement

**Description:**
A full 2-minute composition with proper song structure using `arrange()`. Seven distinct sections create a narrative arc from ritual beginning through possession to banishment. Features 11 evolving layers with progressive intensity.

**Song Structure (32 cycles = ~2 minutes):**
1. **Intro (0:00-0:15)** - Ritual beginning with ceremonial drums
2. **Verse 1 (0:15-0:37)** - The summoning with blast beats
3. **Breakdown 1 (0:37-0:52)** - Possessed whispers
4. **Verse 2 (0:52-1:15)** - Full possession with intensified chaos
5. **Breakdown 2 (1:15-1:30)** - The void speaks
6. **Climax (1:30-1:45)** - Complete possession
7. **Outro (1:45-2:00)** - Banishment/decay

**Key Techniques:**
- `arrange()` for song structure
- Modular section composition with `const`
- Progressive intensity buildup
- Evolving pattern complexity
- Narrative arc through sound design

**Key Layers (11 distinct):**
- Blast beat foundation (evolving)
- Snare patterns (building complexity)
- Hi-hats (intensity progression)
- 8-bit possessed lead (Phrygian mode)
- Black metal tremolo (glitched)
- Cursed sub-bass (evolving)
- Schizophrenic 8-bit voices
- Industrial noise layers
- Paranoid whispers (sine waves)
- Alien drones (breakdowns)
- Glitched apparitions
- Subsonic destruction

---

## Composition 08: Quantum Decay
**File:** `composition_08_quantum_decay.strudel`
**Tempo:** 145 BPM
**Duration:** ~157 lines
**Style:** The gradual decoherence of digital consciousness

**Description:**
Structure evolves from order to chaos through quantum uncertainty. Uses Fibonacci sequences and golden ratio patterns that progressively decay. Features microtonal elements and mathematical progression from stability to entropy.

**Key Techniques:**
- Fibonacci polyrhythms (3, 5, 8, 13, 21, 34)
- Golden ratio snare patterns
- Progressive degradation across all parameters
- Microtonal interference patterns
- Quantum superposition glitches
- Mathematical progression from order to chaos

**Key Layers (13 distinct):**
- Fibonacci polyrhythm kicks (collapsing structure)
- Golden ratio snare patterns
- Quantum harmonic lead (probability wave collapse)
- Whole tone floating textures (cosmic uncertainty)
- Microtonal interference patterns
- Sub-bass modulation (quantum tunneling)
- Hi-frequency particle decay
- Chromatic instability (observer effect)
- White noise (entropy increase)
- Superposition glitches (wavefunction collapse)
- Deep space resonance (Planck-scale vibrations)
- Quantum foam (pink noise fluctuations)
- Hawking radiation (high frequency decay)

**Mathematical Concepts:**
- Fibonacci sequence in rhythm patterns
- Golden ratio timing relationships
- Progressive parameter decay (8→7→6→5→4→3→2→1)
- Exponential complexity increase (x2, x4, x8, x16, x32, x64)
- Microtonal beating (0.995, 1.005 speed variations)

---

## Common Technical Elements Across All Compositions

### Synthesis Methods
- **Waveforms:** Sawtooth, square, triangle, sine
- **Sample-based:** Drum samples (bd, sd, hh, cp)
- **Noise:** White, pink, brown noise for texture

### Effects Processing
- **Bit crushing:** `.crush(1-8)` - lower = harsher
- **Sample rate reduction:** `.coarse(8-64)` - higher = more degraded
- **Waveshaping:** `.shape(5-30)` - higher = more distortion
- **Filters:** `.lpf()`, `.hpf()`, `.bpf()` with resonance (`.lpq()`, `.bpq()`)
- **Delay:** `.delay()` with `.delayfeedback()` for echoes
- **Reverb:** `.room()` with `.size()` for space
- **Distortion:** `.distort()` for saturation

### Pattern Techniques
- **Euclidean rhythms:** `sound("bd(<3 7>,<8 16>)")` - mathematically distributed hits
- **Mini-notation:** `"<a b c>"` for alternation, `"[a b c]*2"` for subdivision
- **Degradation:** `.degradeBy(0.5)` - randomly removes 50% of events
- **Conditional application:** `.sometimes()`, `.often()`, `.rarely()`
- **Stutter effects:** `.stut(times, decay, delay)`
- **Speed modulation:** `.fast()`, `.slow()`

### Randomization & Modulation
- **Random values:** `rand` (0-1), `irand(n)` (0 to n-1)
- **Perlin noise:** `perlin` for smooth organic variation
- **Waveform LFOs:** `sine`, `saw`, `square` for modulation
- **Range mapping:** `rand.range(min, max)`

### Musical Scales Used
- **Locrian:** Maximum dissonance (composition 01)
- **Phrygian:** Dark, exotic (composition 07)
- **Minor:** Traditional minor tonality (composition 08)
- **Lydian:** Bright, floating quality (composition 08)
- **Chromatic/Atonal:** No scale, pure dissonance (compositions 04, 06)

---

## Tempo Overview

| BPM | Composition |
|-----|-------------|
| 145 | 08: Quantum Decay (measured decay) |
| 150 | 03: Void Transmission (slower, heavier) |
| 165 | 05: Screaming Silicon (mid-tempo) |
| 160 | 07: Transmission From The Void (full song) |
| 170 | 06: Entropy Ritual (unstable tempo) |
| 180 | 01: Digital Blasphemy (fast, aggressive) |
| 200 | 02: Corrupted Terminal (fastest non-chaos) |
| 220 | 04: Data Rot (maximum speed) |

---

## Aesthetic Evolution

1. **Compositions 1-4:** Establishing the harsh aesthetic - speed, aggression, digital chaos
2. **Composition 5:** Adding textural elements - vocal synthesis
3. **Composition 6:** Complete experimental chaos - structural breakdown
4. **Composition 7:** First narrative structure - full song with sections
5. **Composition 8:** Mathematical progression - order to entropy

---

## How to Use These Compositions

### Basic Usage
1. Go to [https://strudel.cc](https://strudel.cc)
2. Open any `.strudel` file in this repository
3. Copy the entire contents
4. Paste into the Strudel REPL
5. Press `Ctrl+Enter` to play
6. Press `Ctrl+.` (period) to stop

### Customization Ideas
- Increase tempo: Change `setcps()` value
- More chaos: Increase `.degradeBy()` values
- Harsher sound: Lower `.crush()` values (1-2)
- More glitches: Add `.sometimes(x => x.fast(4))`
- Different scales: Change `.scale("c:locrian")` to other modes
- Random variations: Replace fixed values with `rand` or `irand()`

### Performance Tips
- These are CPU-intensive - close other browser tabs
- Start with lower compositions (1-4) if experiencing performance issues
- Reduce number of layers by commenting out sections with `//`
- Lower `.fast()` multipliers to reduce event density

---

## File Statistics

| Composition | Lines | Bytes | Layers | Complexity |
|-------------|-------|-------|--------|------------|
| 01: Digital Blasphemy | 72 | 1,827 | 7 | ⚡⚡⚡ |
| 02: Corrupted Terminal | 71 | 1,760 | 6 | ⚡⚡⚡⚡ |
| 03: Void Transmission | 80 | 1,922 | 6 | ⚡⚡⚡ |
| 04: Data Rot | 74 | 2,171 | 6 | ⚡⚡⚡⚡⚡ |
| 05: Screaming Silicon | 90 | 2,002 | 6 | ⚡⚡⚡⚡ |
| 06: Entropy Ritual | 103 | 2,745 | 7 | ⚡⚡⚡⚡⚡ |
| 07: Transmission From The Void | 116 | 3,659 | 11 | ⚡⚡⚡⚡ |
| 08: Quantum Decay | 157 | 4,500+ | 13 | ⚡⚡⚡⚡⚡ |

**Total:** 763+ lines of code across 8 compositions

---

## Version History

- **Composition 01-06:** Initial harsh experimental patterns
- **Composition 07:** First full song with `arrange()` structure
- **Composition 08:** Added mathematical/quantum concepts with Fibonacci and golden ratio

---

## Related Documentation

- **Main README:** Overview and quick start → `README.md`
- **Technical Reference:** Strudel.cc syntax guide → `STRUDEL_RESEARCH.md`
- **This Catalog:** Complete song index → `SONGS_CATALOG.md`

---

**Note for Future Claude Instances:**
All 8 compositions are in the root directory. No subdirectories. All files use `.strudel` extension. Read all three documentation files (README.md, STRUDEL_RESEARCH.md, SONGS_CATALOG.md) to understand the complete project. Every composition is fully functional and can be run immediately at strudel.cc.

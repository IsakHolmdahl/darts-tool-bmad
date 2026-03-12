---
stepsCompleted: [1, 2]
lastStep: 2
workflowStatus: 'in_progress'
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/planning-artifacts/research/market-darts-counter-competitive-analysis-2026-03-06.md
designDecisions:
  - Single-page app with no modals
  - Shadcn component library
  - Sticky header + scrollable history + fixed input (3-zone layout)
  - Both players see checkout paths when ≤170
  - Text input for score (native keyboard)
  - Interactive dartboard toggle (default OFF)
  - Side-by-side throw history columns
wireframes:
  - Landing/Setup Screen
  - Active Game Screen (Desktop)
  - Active Game Screen (Mobile)
---

# UX Design Specification - darts-tool-bmad

**Author:** Isak
**Date:** 2026-03-12

---

<!-- UX design content will be appended sequentially through collaborative workflow steps -->

## Design Decisions & Wireframes

**Session Date:** 2026-03-12  
**Participants:** Isak (Product Owner), Sally (UX Designer), Maya (Design Thinking Maestro), John (Product Manager)

---

### Core Design Philosophy

**Single-Page Application with No Modals**
- Clean, distraction-free interface
- Immersive game mode where non-essential UI vanishes during play
- Shadcn component library for consistency and accessibility

**Design Principles:**
1. **Total Focus:** When playing, only the game matters
2. **Contextual Visibility:** Show information when relevant, hide when not
3. **Zero Friction:** No accounts, no complex navigation, instant play
4. **Strategic Transparency:** Both players see checkout paths (tactical advantage)

---

### Screen Layouts

#### 1. Landing/Setup Screen

```
┌─────────────────────────────────────────────────────────────┐
│  [LOGO: Darts Counter]                              ⚙️     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    ┌───────────┐                            │
│                    │           │                            │
│                    │  🎯       │   <- Large dartboard       │
│                    │  DART     │      (visual only)         │
│                    │  BOARD    │                            │
│                    │           │                            │
│                    └───────────┘                            │
│                                                             │
│              [ Create New Game ]                            │
│                                                             │
│              ── OR ──                                       │
│                                                             │
│              [ Join Game ]                                  │
│                                                             │
│              Room Code: [______]  [ → ]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
    ↑ Hover here (desktop) to reveal menu indicator
```

**Key Elements:**
- Dartboard dominates visually (sets the tone immediately)
- Two clear paths: Create or Join
- Room code input for joining existing games
- Settings icon top-right for preferences (not game-related)

---

#### 2. Active Game Screen - Desktop

```
┌─────────────────────────────────────────────────────────────┐
│  FIXED HEADER (Always visible)                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  ┌──────────────┐        ┌──────────────┐          │   │
│  │  │              │        │              │          │   │
│  │  │    2 4 0     │        │    1 6 0     │          │   │  <- BIG SCORES
│  │  │   ━━━━━━━━   │        │   ━━━━━━━━   │          │   │     (always visible)
│  │  │              │        │              │          │   │
│  │  │   [ YOU ]    │        │   [ MIKE ]   │          │   │
│  │  │              │        │ Checkout:    │          │   │  <- Shows when
│  │  │              │        │ T20,T20,D20  │          │   │     score ≤ 170
│  │  └──────────────┘        └──────────────┘          │   │
│  │                                                     │   │
│  │         ⭐ Mike to throw                           │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SCROLLABLE HISTORY                                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ▲                                                  │   │
│  │                                                     │   │
│  │  YOU                    │  MIKE                     │   │
│  │  ─────────────────────  │  ─────────────────────    │   │
│  │                                                     │   │
│  │  🎯🎯🎯  T20+T20+T20    │  🎯🎯🎯  T19+19+D16      │   │
│  │  = 180  →  321          │  = 121  →  380            │   │
│  │                                                     │   │
│  │  🎯🎯🎯  T20+5+20       │  🎯🎯🎯  T20+T20+20      │   │
│  │  = 65   →  256          │  = 140  →  240            │   │  <- Scrolls!
│  │                                                     │   │
│  │  🎯🎯🎯  T20+T14+D8     │  🎯🎯🎯  T20+T19+5       │   │
│  │  = 76   →  180          │  = 103  →  122            │   │
│  │                                                     │   │
│  │  🎯🎯○  T20+T20...      │                           │   │
│  │                                                     │   │
│  │                                                  ▼  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  INPUT AREA (Always visible)                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │              ┌───────────┐                         │   │
│  │              │  🎯       │                         │   │  <- DARTBOARD
│  │              │  DART     │                         │   │     (toggle for
│  │              │  BOARD    │                         │   │      interactive)
│  │              └───────────┘                         │   │
│  │                                                     │   │
│  │        Enter Score: [________________]  [ENTER]    │   │  <- TEXT INPUT
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

#### 3. Active Game Screen - Mobile

```
┌──────────────────────────┐
│  STICKY HEADER           │
│  ┌────┐    ┌────┐       │
│  │240 │    │160 │       │  <- ALWAYS VISIBLE
│  │YOU │    │MIKE│       │
│  └────┘    └────┘       │
│            Checkout:     │  <- Shows when ≤170
│            T20,T20,D20   │
│  ⭐ Mike to throw        │
├──────────────────────────┤
│                          │
│  SCROLLABLE HISTORY      │
│  ┌────────────────────┐ │
│  │  ▲                 │ │
│  │                    │ │
│  │  YOU    │  MIKE    │ │
│  │  ─────  │  ─────   │ │
│  │         │          │ │
│  │  🎯🎯🎯  │  🎯🎯🎯   │ │
│  │  180    │  121     │ │
│  │  → 321  │  → 380   │ │
│  │         │          │ │
│  │  🎯🎯🎯  │  🎯🎯🎯   │ │  <- Scrolls!
│  │  65     │  140     │ │
│  │  → 256  │  → 225   │ │
│  │         │          │ │
│  │  🎯🎯○  │          │ │
│  │  ...    │          │ │
│  │       ▼  │          │ │
│  └────────────────────┘ │
├──────────────────────────┤
│  INPUT AREA              │
│  (ALWAYS VISIBLE)        │
│                          │
│  ┌───────────┐          │
│  │  DART     │          │  <- DARTBOARD
│  │  BOARD    │          │
│  └───────────┘          │
│                          │
│  Score: [______]  [→]    │  <- Opens number keyboard
│                          │
└──────────────────────────┘
```

---

### Navigation & Menu

**Desktop:**
- Left edge hover → ghost indicator appears (0.3s delay)
- Click to open Shadcn Sheet component (slides from left)
- Menu width: ~300px
- Background: slight overlay (game still visible)
- Close: Click outside or X button

**Mobile:**
- Hamburger icon top-right
- Opens Shadcn Sheet from right (85% width or full)
- Same content as desktop

**Menu Contents:**
- 📊 Statistics (leg, averages, checkout %)
- 🎮 Game Settings
  - ☑️ Interactive Dartboard (toggle, default OFF)
  - ☐ Sound Effects
  - ☑️ Voice Announcer
- 👥 Players (list + add player)
- 💾 Export CSV
- ❌ End Game

---

### Interaction Patterns

**Score Entry:**
- Text input field with `type="number"`
- Desktop: Physical keyboard
- Mobile: Opens native number keyboard
- Submit: Enter key or button

**Dartboard:**
- Visual representation always shown
- Interactive mode toggle in menu (default OFF)
- When ON: Tap segments to score
- When OFF: Purely visual

**Checkout Display:**
- Shows for both players when score ≤ 170
- Hidden when checkout not possible (score > 170)
- Format: "Checkout: T20, T20, D20"

**Turn Counter:**
- Each row in history = 1 turn (3 darts)
- Shows: 3 dart icons + throw breakdown + score + new total
- Current turn shows partial progress: 🎯🎯○

**Scroll Behavior:**
- Header (scores) sticky at top
- History scrollable in middle section
- Input area (dartboard + field) fixed at bottom
- No full-page scrolling needed

---

### Responsive Breakpoints

**Desktop (>1024px):**
- Full 3-column layout possible
- Scores side-by-side large
- History wide with both columns visible
- Dartboard medium size

**Tablet (768px - 1024px):**
- Scores remain side-by-side
- History slightly narrower
- Compact dartboard

**Mobile (<768px):**
- Stacked vertical layout
- Scores prominent at top
- History scrollable section
- Dartboard smaller, input at bottom

---

### Accessibility Considerations

- All interactive elements minimum 44px touch target
- High contrast for scores (primary information)
- Clear visual hierarchy
- Keyboard navigation support
- Screen reader labels for dartboard segments (when interactive)
- Focus indicators visible

---

### Technical Notes

**Components (Shadcn):**
- Sheet (for menu)
- Input (for score entry)
- Button (various actions)
- Toggle (for interactive dartboard)
- ScrollArea (for history)

**State Management:**
- Current scores (both players)
- Throw history array
- Current turn/dart counter
- Menu open/closed
- Interactive dartboard mode
- Game state (setup, active, finished)

**Performance:**
- Virtual scrolling for long history lists
- Debounced score input
- Optimistic UI updates



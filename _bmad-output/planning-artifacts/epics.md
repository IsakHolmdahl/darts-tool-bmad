---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'step-04-final-validation']
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
mvpEpics:
  - Epic 1: Core Game Foundation
  - Epic 2: Multiplayer Experience
  - Epic 3: Solo Play with AI
  - Epic 4: Professional Tools
  - Epic 5: Data Management
totalStories: 30
totalFRs: 55
---

# darts-tool-bmad - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for darts-tool-bmad, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**Game Management (FR1-FR7):**
- FR1: Players can create a new game without creating an account
- FR2: Players can select game mode (501 or 301)
- FR3: Players can configure number of players (1-4)
- FR4: Players can configure player names
- FR5: Players can start a game with "Game on!" announcement
- FR6: Players can reset a game to initial state
- FR7: Players can end a game early

**Room & Multiplayer (FR8-FR14):**
- FR8: Host can generate a unique room code for multiplayer games
- FR9: Host can share room via copyable URL
- FR10: Players can join a room by entering room code
- FR11: Players can join a room by clicking shared URL
- FR12: Multiple players can join the same room from different devices
- FR13: Players see real-time updates when others join or leave
- FR14: Room remains active as long as at least one player is connected

**Score Entry & Tracking (FR15-FR22):**
- FR15: Players can enter scores manually via numeric input
- FR16: System validates score entry (valid dart combinations)
- FR17: System calculates remaining score automatically
- FR18: System detects bust (score < 0 without double) and resets turn
- FR19: System tracks darts thrown per turn (1st, 2nd, 3rd)
- FR20: System tracks total darts thrown per player
- FR21: Players can edit previous throw scores (trust-based)
- FR22: System maintains turn order (player rotation)

**Game Logic & Rules (FR23-FR28):**
- FR23: System enforces double-out rule (must finish on double)
- FR24: System detects leg/match completion
- FR25: System announces winner with "Game shot" and player name
- FR26: System handles sudden death scenarios (max darts reached)
- FR27: System validates checkout attempts (valid double combinations)
- FR28: System handles ties in sudden death (continue until winner)

**AI Opponent (FR29-FR33):**
- FR29: Solo players can play against AI opponent
- FR30: Players can select AI difficulty level (Beginner, Amateur)
- FR31: AI automatically throws darts with appropriate delays
- FR32: AI scoring follows probabilistic model based on difficulty
- FR33: AI respects turn order and game rules

**Checkout Suggestions (FR34-FR37):**
- FR34: System displays checkout suggestion for remaining score
- FR35: System shows primary checkout path
- FR36: System shows alternative checkout paths (2-3 options)
- FR37: Checkout suggestions update in real-time as score changes

**Voice Announcer (FR38-FR43):**
- FR38: System plays voice announcements for scores (0-180)
- FR39: System plays "Game on!" at match start
- FR40: System plays "Game shot" with winner name at match end
- FR41: System plays special announcement for 180 scores
- FR42: Voice plays automatically on score entry (default ON)
- FR43: Players can toggle voice announcer ON/OFF

**Statistics & Feedback (FR44-FR49):**
- FR44: System displays current player score prominently
- FR45: System displays turn score (sum of 3 darts)
- FR46: System calculates and displays player average (per turn)
- FR47: System tracks highest score per player (session)
- FR48: System tracks number of 180s per player (session)
- FR49: System displays checkout percentage (successful checkouts)

**Data Export (FR50-FR52):**
- FR50: Players can export game results to CSV format
- FR51: CSV includes player names, scores, statistics
- FR52: Export captures complete game history

**Responsive Design (FR53-FR56):**
- FR53: Application displays optimized layout for desktop (≥1024px)
- FR54: Application displays functional layout for mobile (<768px)
- FR55: Touch-friendly score entry on mobile devices
- FR56: Application supports browser zoom without layout breakage

### Non-Functional Requirements

**Performance:**
- NFR1: First Contentful Paint (FCP) < 1.5s (Lighthouse)
- NFR2: Largest Contentful Paint (LCP) < 2.5s (Lighthouse)
- NFR3: Time to Interactive (TTI) < 3.0s (Lighthouse)
- NFR4: Total Blocking Time (TBT) < 200ms (Lighthouse)
- NFR5: Cumulative Layout Shift (CLS) < 0.1 (Lighthouse)
- NFR6: Lighthouse Performance Score > 90 (Overall)
- NFR7: WebSocket Connection < 500ms (Initial room join)
- NFR8: Score Sync Latency < 100ms (Opponent sees update)
- NFR9: Voice Announcement Latency < 500ms (Atmosphere quality)
- NFR10: PartyKit Edge Latency ~50ms (Global Cloudflare)
- NFR11: Checkout Calculation < 100ms (Instant feedback)

**Security:**
- NFR12: All data transmitted over HTTPS (TLS 1.3)
- NFR13: No persistent storage of user data (session-only design)
- NFR14: No PII collection or storage
- NFR15: Room codes are 6-character alphanumeric (62^6 combinations)
- NFR16: Rooms expire after 24 hours of inactivity
- NFR17: ElevenLabs API key stored server-side (not exposed to client)
- NFR18: Rate limiting on voice generation to prevent abuse

**Scalability:**
- NFR19: Support 100 concurrent rooms (MVP)
- NFR20: Support 1,000 concurrent rooms (Growth)
- NFR21: No degradation in sync performance up to capacity

**Reliability:**
- NFR22: PartyKit Uptime > 99.5%
- NFR23: Frontend Uptime > 99.9% (Vercel SLA)
- NFR24: Graceful degradation if PartyKit disconnects (reconnect automatically)
- NFR25: Silent fail if ElevenLabs unavailable (pre-cached clips play)
- NFR26: Game state is authoritative server-side (PartyKit Room.storage)
- NFR27: Client state reconciles with server on reconnection
- NFR28: No data loss on browser refresh (session storage for recovery)

**Accessibility:**
- NFR29: Keyboard Navigation - All core functions accessible via keyboard
- NFR30: Focus Indicators - Visible focus states for all interactive elements
- NFR31: Color Contrast - WCAG AA (4.5:1) for text
- NFR32: Touch Targets - Minimum 44x44px on mobile
- NFR33: Screen Reader - Basic ARIA labels for main elements

**Browser Support:**
- NFR34: Chrome / Chrome Mobile (Latest 2 versions) - Full Support
- NFR35: Firefox (Latest 2 versions) - Full Support
- NFR36: Safari / iOS Safari (Latest 2 versions) - Full Support
- NFR37: Edge (Latest 2 versions) - Full Support
- NFR38: WebSocket support required (PartyKit)
- NFR39: Web Audio API required (voice playback)
- NFR40: LocalStorage required (user preferences)
- NFR41: ES2020+ JavaScript required

### Additional Requirements

**From Architecture Document:**

**Technical Stack Requirements:**
- Starter Template: create-next-app with TypeScript, Tailwind CSS, Next.js 16 App Router
- Frontend: React 19 with Server Components for initial load
- Language: TypeScript (strict mode enabled)
- Real-time: PartyKit WebSocket server for multiplayer state sync
- Voice: ElevenLabs API for TTS announcements (fallback to pre-cached clips)
- State: Zustand for client state, PartyKit Room.storage for game state
- Styling: Tailwind CSS (utility-first)
- Build Tool: Turbopack (fast dev HMR)

**Data Architecture:**
- Game State Storage: PartyKit Room State only (in-memory, no persistent database)
- State Expiration: 24 hours of inactivity
- Checkout Suggestions: Pre-built lookup table (Record<number, string[]>) - all scores 2-170
- Voice Clip Strategy: 181 MP3 files (scores 0-180) generated at build time, served via CDN

**Authentication & Security:**
- Authentication Method: Room code as shared secret (6-character alphanumeric in URL path)
- Security Model: Anyone with code can join (trust-based philosophy)
- Room Code Format: Example `/room/ABC123`

**Communication Patterns:**
- Real-time Protocol: WebSocket via PartyKit
- Message Protocol: Standardized JSON with type, payload, timestamp, playerId
- Message Types: THROW_DART, GAME_STATE, PLAYER_JOINED, PLAYER_LEFT, GAME_STARTED, GAME_ENDED, ANNOUNCE, ERROR
- Communication Flow: Client → PartyKit Server → Validation → State Update → Broadcast → All Clients

**Project Structure:**
- Feature-based organization: app/, components/, lib/, party/, stores/, types/, data/
- Naming Conventions: PascalCase for components, camelCase for hooks/utils, UPPER_SNAKE_CASE for constants
- File Organization: Co-locate tests with components

**State Management (Zustand):**
- One store per domain (game, ui, voice)
- Actions must be pure functions (no side effects)
- Side effects in components or custom hooks
- Use selectors to prevent unnecessary re-renders

**Error Handling:**
- Use custom error classes (GameError) with codes
- Error codes are UPPER_SNAKE_CASE
- User-facing messages in components, not errors
- Log errors server-side (PartyKit), display in UI

**Deployment:**
- Frontend: Vercel (Next.js hosting, CDN, edge caching)
- WebSocket: PartyKit (Cloudflare Edge, ~50ms global latency)
- Voice Assets: Vercel CDN (pre-generated MP3 files)
- Voice API: ElevenLabs (dynamic TTS for player names only)

**From UX Design Document:**

**Design Philosophy:**
- Single-Page Application with No Modals
- Clean, distraction-free interface
- Immersive game mode where non-essential UI vanishes during play
- Shadcn component library for consistency and accessibility

**Layout Requirements:**
- Sticky header (scores always visible)
- Scrollable history section (throw history)
- Fixed input area at bottom (dartboard + score entry)
- 3-zone layout: Header | History | Input

**Key UX Patterns:**
- Both players see checkout paths when score ≤170
- Text input for score entry (native number keyboard on mobile)
- Interactive dartboard toggle (default OFF)
- Side-by-side throw history columns for multiplayer
- Turn counter: Each row = 1 turn (3 darts), shows partial progress (🎯🎯○)

**Navigation & Menu:**
- Desktop: Left edge hover → ghost indicator → Shadcn Sheet slides from left (~300px)
- Mobile: Hamburger icon → Shadcn Sheet from right
- Menu Contents: Statistics, Game Settings, Players, Export CSV, End Game

**Responsive Breakpoints:**
- Desktop (>1024px): Full 3-column layout, large scores, wide history
- Tablet (768px - 1024px): Side-by-side scores, narrower history
- Mobile (<768px): Stacked vertical layout, prominent scores, scrollable history

**Components (Shadcn):**
- Sheet (for menu)
- Input (for score entry)
- Button (various actions)
- Toggle (for interactive dartboard)
- ScrollArea (for history)

**Accessibility:**
- Minimum 44px touch targets
- High contrast for scores
- Clear visual hierarchy
- Keyboard navigation support
- Focus indicators visible
- Screen reader labels for dartboard segments (when interactive)

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 1 | Players can create a new game without creating an account |
| FR2 | Epic 1 | Players can select game mode (501 or 301) |
| FR3 | Epic 1 | Players can configure number of players (1-4) |
| FR4 | Epic 1 | Players can configure player names |
| FR5 | Epic 1 | Players can start a game with "Game on!" announcement |
| FR6 | Epic 5 | Players can reset a game to initial state |
| FR7 | Epic 5 | Players can end a game early |
| FR8 | Epic 2 | Host can generate a unique room code for multiplayer games |
| FR9 | Epic 2 | Host can share room via copyable URL |
| FR10 | Epic 2 | Players can join a room by entering room code |
| FR11 | Epic 2 | Players can join a room by clicking shared URL |
| FR12 | Epic 2 | Multiple players can join the same room from different devices |
| FR13 | Epic 2 | Players see real-time updates when others join or leave |
| FR14 | Epic 2 | Room remains active as long as at least one player is connected |
| FR15 | Epic 1 | Players can enter scores manually via numeric input |
| FR16 | Epic 1 | System validates score entry (valid dart combinations) |
| FR17 | Epic 1 | System calculates remaining score automatically |
| FR18 | Epic 1 | System detects bust (score < 0 without double) and resets turn |
| FR19 | Epic 1 | System tracks darts thrown per turn (1st, 2nd, 3rd) |
| FR20 | Epic 1 | System tracks total darts thrown per player |
| FR21 | Epic 1 | Players can edit previous throw scores (trust-based) |
| FR22 | Epic 1 | System maintains turn order (player rotation) |
| FR23 | Epic 1 | System enforces double-out rule (must finish on double) |
| FR24 | Epic 1 | System detects leg/match completion |
| FR25 | Epic 1 | System announces winner with "Game shot" and player name |
| FR26 | Epic 1 | System handles sudden death scenarios (max darts reached) |
| FR27 | Epic 1 | System validates checkout attempts (valid double combinations) |
| FR28 | Epic 1 | System handles ties in sudden death (continue until winner) |
| FR29 | Epic 3 | Solo players can play against AI opponent |
| FR30 | Epic 3 | Players can select AI difficulty level (Beginner, Amateur) |
| FR31 | Epic 3 | AI automatically throws darts with appropriate delays |
| FR32 | Epic 3 | AI scoring follows probabilistic model based on difficulty |
| FR33 | Epic 3 | AI respects turn order and game rules |
| FR34 | Epic 4 | System displays checkout suggestion for remaining score |
| FR35 | Epic 4 | System shows primary checkout path |
| FR36 | Epic 4 | System shows alternative checkout paths (2-3 options) |
| FR37 | Epic 4 | Checkout suggestions update in real-time as score changes |
| FR38 | Epic 4 | System plays voice announcements for scores (0-180) |
| FR39 | Epic 4 | System plays "Game on!" at match start |
| FR40 | Epic 4 | System plays "Game shot" with winner name at match end |
| FR41 | Epic 4 | System plays special announcement for 180 scores |
| FR42 | Epic 4 | Voice plays automatically on score entry (default ON) |
| FR43 | Epic 4 | Players can toggle voice announcer ON/OFF |
| FR44 | Epic 4 | System displays current player score prominently |
| FR45 | Epic 4 | System displays turn score (sum of 3 darts) |
| FR46 | Epic 4 | System calculates and displays player average (per turn) |
| FR47 | Epic 4 | System tracks highest score per player (session) |
| FR48 | Epic 4 | System tracks number of 180s per player (session) |
| FR49 | Epic 4 | System displays checkout percentage (successful checkouts) |
| FR50 | Epic 5 | Players can export game results to CSV format |
| FR51 | Epic 5 | CSV includes player names, scores, statistics |
| FR52 | Epic 5 | Export captures complete game history |
| FR53 | Cross-cutting | Application displays optimized layout for desktop (≥1024px) |
| FR54 | Cross-cutting | Application displays functional layout for mobile (<768px) |
| FR55 | Cross-cutting | Touch-friendly score entry on mobile devices |
| FR56 | Cross-cutting | Application supports browser zoom without layout breakage |

**Coverage Summary:** All 56 Functional Requirements mapped to epics ✓

## Epic List

### Epic 1: Core Game Foundation
**Goal:** Players can create and play complete 501/301 darts games with proper scoring, validation, and game logic

**User Outcome:** Players can create games without accounts, enter scores manually, and play complete matches with authentic darts rules including bust detection, turn management, and double-out completion.

**FRs covered:** FR1-5, FR15-28 (22 FRs)
- Game creation and configuration (FR1-5)
- Score entry, validation, and tracking (FR15-22)
- Game logic: double-out, completion, sudden death (FR23-28)

**Technical Notes:**
- Implements core game state management (Zustand)
- Score validation and calculation logic
- Turn order and player rotation
- Responsive design foundation (cross-cutting)

---

### Epic 2: Multiplayer Experience
**Goal:** Players can create rooms, invite friends via codes/URLs, and play together in real-time from different devices

**User Outcome:** Players can instantly create rooms, share via room codes or URLs, and play remote multiplayer games with real-time score synchronization.

**FRs covered:** FR8-14 (7 FRs)
- Room code generation and sharing (FR8-9)
- Room joining via code or URL (FR10-11)
- Multi-device real-time synchronization (FR12-14)

**Technical Notes:**
- PartyKit WebSocket server implementation
- Room lifecycle management (24hr expiry)
- Real-time state synchronization
- Authoritative server pattern

**Dependency:** Requires Epic 1 (Core Game) to function

---

### Epic 3: Solo Play with AI
**Goal:** Solo players can practice against AI opponents with adjustable difficulty levels

**User Outcome:** Solo players can practice and improve their game against AI opponents with Beginner and Amateur difficulty levels that simulate realistic scoring patterns.

**FRs covered:** FR29-33 (5 FRs)
- AI opponent selection and difficulty (FR29-30)
- AI automatic throwing with delays (FR31)
- Probabilistic scoring models (FR32)
- AI respects game rules (FR33)

**Technical Notes:**
- AI difficulty algorithms (probabilistic models)
- Turn simulation with realistic delays
- Statistical scoring profiles per difficulty

**Dependency:** Requires Epic 1 (Core Game) to function

---

### Epic 4: Professional Tools
**Goal:** Players experience tournament-quality features including voice announcer, checkout suggestions, and session statistics

**User Outcome:** Players enjoy an authentic darts atmosphere with premium voice announcements, helpful checkout suggestions, and comprehensive session statistics.

**FRs covered:** FR34-43, FR44-49 (16 FRs)
- Checkout suggestions with alternatives (FR34-37)
- Voice announcer integration (FR38-43)
- Session statistics and tracking (FR44-49)

**Technical Notes:**
- Pre-generated voice clips (181 MP3s: 0-180)
- Pre-built checkout lookup table (scores 2-170)
- ElevenLabs API for player name announcements
- Statistics calculation and display

**Enhancement:** Adds value to all game modes (solo, local, multiplayer)

---

### Epic 5: Data Management
**Goal:** Players can export game data and manage game sessions

**User Outcome:** Players can save their game history to CSV, reset games, and end sessions while maintaining data portability.

**FRs covered:** FR6-7, FR50-52 (5 FRs)
- Game reset and early termination (FR6-7)
- CSV export functionality (FR50-52)

**Technical Notes:**
- CSV generation with game history
- Client-side export (no server storage)
- Session data formatting

**Utility:** Supports all game modes for data portability

---

## Epic Summary

| Epic | Title | FR Count | MVP Priority | Dependencies |
|------|-------|----------|--------------|--------------|
| 1 | Core Game Foundation | 22 | P0 | None (foundation) |
| 2 | Multiplayer Experience | 7 | P0 | Epic 1 |
| 3 | Solo Play with AI | 5 | P0 | Epic 1 |
| 4 | Professional Tools | 16 | P0 | Epic 1 |
| 5 | Data Management | 5 | P1 | Epic 1 |
| **Total** | | **55 FRs** | | |

*Note: FR53-56 (Responsive Design) are cross-cutting and implemented across all epics*

<!-- Epics and stories will be added in subsequent steps -->

---

## Epic 1: Core Game Foundation

### Epic Goal
Players can create and play complete 501/301 darts games with proper scoring, validation, and game logic

---

### Story 1.0: Initialize Project from Starter Template

**As a** developer,  
**I want** to initialize the project using the specified starter template,  
**So that** the foundation is set up correctly with all required dependencies.

**Acceptance Criteria:**

**Given** the Architecture specifies create-next-app  
**When** I run the initialization command  
**Then** the project is created with:
- Next.js 16 with App Router
- TypeScript (strict mode)
- Tailwind CSS
- ESLint
- src/ directory structure
- Turbopack
- @/* import alias

**Given** the project is initialized  
**When** I install additional dependencies  
**Then** the following are added:
- partykit and partysocket (WebSocket server)
- zustand (state management)
- Testing libraries (vitest, @testing-library/react, @playwright/test)

**Given** the project structure is created  
**When** I review the directory layout  
**Then** it matches the Architecture document structure:
- src/app/ (Next.js routing)
- src/components/ (React components)
- src/lib/ (utilities and logic)
- src/party/ (PartyKit server)
- src/stores/ (Zustand stores)
- src/types/ (TypeScript definitions)
- public/audio/ (voice clips directory)

**Technical Notes:**
- Initialization command: `npx create-next-app@latest darts-tool-bmad --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"`
- This story must be completed before any other development can begin
- Creates the foundation for all subsequent stories

**FRs Implemented:** Foundation setup (prerequisite for all other stories)

---

### Story 1.1: Create New Game

**As a** player,  
**I want** to create a new game without creating an account,  
**So that** I can start playing immediately with zero friction.

**Acceptance Criteria:**

**Given** I am on the landing page  
**When** I click "Create New Game"  
**Then** a new game session is created  
**And** I am taken to the game configuration screen

**Given** I am configuring a new game  
**When** I select the game mode  
**Then** I can choose between 501 or 301

**FRs Implemented:** FR1, FR2

---

### Story 1.2: Configure Players

**As a** player,  
**I want** to configure the number of players and their names,  
**So that** I can set up a game for 1-4 players with custom names.

**Acceptance Criteria:**

**Given** I am on the game configuration screen  
**When** I view the player configuration section  
**Then** I can select between 1-4 players

**Given** I have selected the number of players  
**When** I enter names for each player  
**Then** each player has a unique name (or defaults like "Player 1", "Player 2")

**Given** I have configured all players  
**When** I click "Start Game"  
**Then** the game initializes with the configured players  
**And** each player starts with the selected game mode score (501 or 301)

**FRs Implemented:** FR3, FR4, FR5

---

### Story 1.3: Enter and Validate Scores

**As a** player,  
**I want** to enter my dart scores manually and have them validated,  
**So that** only valid dart combinations are accepted and my remaining score is calculated automatically.

**Acceptance Criteria:**

**Given** it is my turn to throw  
**When** I enter a score via the numeric input field  
**Then** the system validates the score is a valid dart combination (0-180)

**Given** I enter an invalid score (e.g., 181, negative, or non-numeric)  
**When** I submit the score  
**Then** I see an error message indicating the score is invalid  
**And** the score is not recorded

**Given** I enter a valid score  
**When** the score is accepted  
**Then** my remaining score is calculated and displayed  
**And** the system tracks that I have thrown 1 dart

**Given** I have thrown 3 darts  
**When** I enter the third score  
**Then** my turn automatically ends  
**And** play passes to the next player

**FRs Implemented:** FR15, FR16, FR17, FR19

---

### Story 1.4: Handle Bust Detection

**As a** player,  
**I want** the system to detect when I bust (score goes below 0),  
**So that** my turn is reset and I do not lose the game unfairly.

**Acceptance Criteria:**

**Given** I am throwing darts during my turn  
**When** a dart score would cause my remaining score to go below 0  
**Then** the system detects a "bust"  
**And** my turn ends immediately  
**And** my score reverts to what it was at the start of the turn  
**And** no darts from the bust turn count toward my total

**Given** I bust on my first dart  
**When** the bust is detected  
**Then** the remaining two darts for that turn are forfeited

**FRs Implemented:** FR18

---

### Story 1.5: Track Darts and Turn Order

**As a** player,  
**I want** the system to track darts thrown and maintain proper turn order,  
**So that** I know how many darts I have thrown and whose turn it is.

**Acceptance Criteria:**

**Given** I am playing a game  
**When** I throw darts  
**Then** the system tracks the total number of darts thrown per player

**Given** multiple players are in the game  
**When** a player's turn ends (after 3 darts or bust)  
**Then** play automatically rotates to the next player in sequence

**Given** it is a player's turn  
**When** I view the game screen  
**Then** the current player's name is prominently displayed  
**And** I can see which player is currently throwing

**Given** all players have thrown in sequence  
**When** the last player finishes their turn  
**Then** play rotates back to the first player (round-robin)

**FRs Implemented:** FR20, FR22

---

### Story 1.6: Edit Previous Scores

**As a** player,  
**I want** to edit previous throw scores (trust-based),  
**So that** we can correct mistakes without starting over.

**Acceptance Criteria:**

**Given** scores have been entered in the current game  
**When** I view the throw history  
**Then** I can see a list of all previous throws with edit options

**Given** I click on a previous throw to edit  
**When** I enter a new valid score  
**Then** the score is updated  
**And** all subsequent scores are recalculated automatically  
**And** the remaining scores are updated for all affected players

**Given** an edited score would cause a bust situation  
**When** I save the edit  
**Then** the bust rules are applied  
**And** the game state adjusts accordingly

**Technical Note:** This implements the gentleman's sport trust-based philosophy

**FRs Implemented:** FR21

---

### Story 1.7: Enforce Double-Out Rule

**As a** player,  
**I want** the system to enforce the double-out rule,  
**So that** I must finish the game by hitting a double, just like in professional darts.

**Acceptance Criteria:**

**Given** I have 50 or fewer points remaining  
**When** I attempt to finish the game  
**Then** I must hit a double to win (e.g., D20, D10, D16, etc.)

**Given** my remaining score is 1  
**When** I throw any score  
**Then** it is automatically a bust (cannot finish on 1 with a double)

**Given** I have exactly 2 points remaining  
**When** I hit D1 (double 1)  
**Then** I win the game

**Given** I attempt to finish without hitting a double  
**When** the score is entered  
**Then** my turn continues (or busts if score goes below 0)  
**And** the game does not end

**FRs Implemented:** FR23, FR27

---

### Story 1.8: Detect Game Completion

**As a** player,  
**I want** the system to detect when a player wins the game,  
**So that** the match ends properly and we know who won.

**Acceptance Criteria:**

**Given** a player hits a valid double to reach exactly 0  
**When** the score is validated  
**Then** the game detects leg/match completion  
**And** the game ends  
**And** the winner is announced

**Given** the game has ended  
**When** I view the screen  
**Then** I see "Game Shot!" or similar winner announcement  
**And** the winner's name is displayed  
**And** final scores are shown

**Given** the game has ended  
**When** the winner is announced  
**Then** I have options to: play again, reset, or end the session

**FRs Implemented:** FR24, FR25

---

### Story 1.9: Handle Sudden Death

**As a** player,  
**I want** the system to handle sudden death scenarios when maximum darts are reached,  
**So that** games do not go on indefinitely and ties are resolved.

**Acceptance Criteria:**

**Given** a maximum dart limit is configured (e.g., 20 turns per player)  
**When** all players reach the maximum dart count  
**Then** sudden death is triggered

**Given** sudden death is active  
**When** players continue throwing  
**Then** each player gets 1 dart per turn (not 3)  
**And** play continues until someone wins

**Given** multiple players reach 0 on the same dart in sudden death  
**When** the tie occurs  
**Then** play continues until one player wins and the others do not

**Given** sudden death resolves with a winner  
**When** the winner is determined  
**Then** the game ends with the standard game completion flow

**FRs Implemented:** FR26, FR28

---

**Epic 1 Summary:** 10 stories created covering all 22 FRs (FR1-5, FR15-28)

---

## Epic 2: Multiplayer Experience

### Epic Goal
Players can create rooms, invite friends via codes/URLs, and play together in real-time from different devices

---

### Story 2.1: Generate Room Code

**As a** host player,  
**I want** to generate a unique room code for multiplayer games,  
**So that** my friends can join my game session.

**Acceptance Criteria:**

**Given** I am creating a multiplayer game  
**When** I select multiplayer mode  
**Then** the system generates a unique 6-character alphanumeric room code (e.g., "DART42")

**Given** a room code has been generated  
**When** I view the game screen  
**Then** the room code is prominently displayed  
**And** I can copy it to my clipboard

**Given** a room exists  
**When** 24 hours pass with no activity  
**Then** the room automatically expires and is cleaned up

**FRs Implemented:** FR8, FR14 (partial - room lifecycle)

---

### Story 2.2: Share Room via URL

**As a** host player,  
**I want** to share the room via a copyable URL,  
**So that** I can easily invite friends through any messaging platform.

**Acceptance Criteria:**

**Given** a room has been created  
**When** I view the game screen  
**Then** a shareable URL is displayed (e.g., "dartscounter.app/room/DART42")

**Given** I want to share the room  
**When** I click the "Copy Link" button  
**Then** the full URL is copied to my clipboard  
**And** I see a confirmation message

**Given** I share the URL with a friend  
**When** they receive it  
**Then** they can click it to join the game directly

**FRs Implemented:** FR9

---

### Story 2.3: Join Room by Code

**As a** player,  
**I want** to join a room by entering a room code,  
**So that** I can join games even without the direct link.

**Acceptance Criteria:**

**Given** I am on the landing page  
**When** I click "Join Game"  
**Then** I see a room code input field

**Given** I enter a valid room code  
**When** I submit the code  
**Then** I am connected to the room  
**And** I can see the current game state  
**And** I am added as a player

**Given** I enter an invalid or expired room code  
**When** I submit the code  
**Then** I see an error message ("Room not found" or "Room expired")

**Given** the room is full (4 players max)  
**When** I try to join  
**Then** I see a message indicating the room is full

**FRs Implemented:** FR10

---

### Story 2.4: Join Room by URL

**As a** player,  
**I want** to join a room by clicking a shared URL,  
**So that** I can join instantly without manual code entry.

**Acceptance Criteria:**

**Given** I click a shared room URL (e.g., "dartscounter.app/room/DART42")  
**When** the page loads  
**Then** I am automatically connected to the room  
**And** I see the current game state  
**And** I am added as a player

**Given** the room code in the URL is invalid  
**When** I access the URL  
**Then** I see an error page with "Room not found"  
**And** I have an option to create a new game

**Given** the room is full  
**When** I access the URL  
**Then** I see a message indicating the room is full  
**And** I am offered the option to spectate or create a new game

**FRs Implemented:** FR11

---

### Story 2.5: Multi-Device Real-Time Synchronization

**As a** player in a multiplayer game,  
**I want** multiple players to join from different devices and see real-time updates,  
**So that** we can play together remotely with synchronized game state.

**Acceptance Criteria:**

**Given** multiple players are in the same room from different devices  
**When** one player enters a score  
**Then** all other players see the score update within 100ms

**Given** a player joins the room  
**When** they connect  
**Then** they see the current game state immediately  
**And** existing players see a notification that someone joined

**Given** a player disconnects  
**When** they leave the room  
**Then** remaining players see a notification  
**And** the game continues (if at least one player remains)

**Given** a player disconnects accidentally  
**When** they reconnect within a short period  
**Then** they rejoin with their previous game state intact

**Given** the game is in progress  
**When** multiple players are throwing  
**Then** turn order is synchronized across all devices  
**And** there are no conflicts or race conditions

**Technical Notes:**
- Uses PartyKit WebSocket for real-time sync
- Implements authoritative server pattern
- Client-side prediction for optimistic UI

**FRs Implemented:** FR12, FR13, FR14

---

**Epic 2 Summary:** 5 stories created covering all 7 FRs (FR8-14)

---

## Epic 3: Solo Play with AI

### Epic Goal
Solo players can practice against AI opponents with adjustable difficulty levels

---

### Story 3.1: Select AI Difficulty

**As a** solo player,  
**I want** to select AI difficulty levels (Beginner or Amateur),  
**So that** I can practice against an opponent matched to my skill level.

**Acceptance Criteria:**

**Given** I am configuring a single-player game  
**When** I choose to play against AI  
**Then** I can select the AI difficulty level

**Given** I am selecting AI difficulty  
**When** I view the options  
**Then** I see at least two levels: "Beginner" and "Amateur"  
**And** each level has a description of the AI's skill level

**Given** I select "Beginner" AI  
**When** the game starts  
**Then** the AI uses a lower scoring probability model  
**And** the AI makes more frequent low scores

**Given** I select "Amateur" AI  
**When** the game starts  
**Then** the AI uses a moderate scoring probability model  
**And** the AI occasionally hits high scores (T20s, etc.)

**FRs Implemented:** FR29, FR30

---

### Story 3.2: AI Automatic Throwing

**As a** solo player against AI,  
**I want** the AI to automatically throw darts with realistic delays,  
**So that** the game feels like playing against a real opponent.

**Acceptance Criteria:**

**Given** it is the AI's turn  
**When** the AI starts throwing  
**Then** there is a realistic delay before each dart (e.g., 2-4 seconds)

**Given** the AI is throwing  
**When** it throws 3 darts  
**Then** the AI completes its turn  
**And** play passes back to me

**Given** the AI is throwing  
**When** scores are entered  
**Then** the AI follows the same score entry and validation rules as human players

**Given** the AI busts  
**When** it throws a score that would go below 0  
**Then** the bust is detected  
**And** the AI's turn ends with score reset (same as human players)

**Technical Notes:**
- AI throws should feel natural, not instantaneous
- Delays can vary slightly to simulate realistic play

**FRs Implemented:** FR31, FR33

---

### Story 3.3: AI Probabilistic Scoring

**As a** solo player,  
**I want** the AI to follow probabilistic scoring models based on difficulty,  
**So that** the AI plays at the appropriate skill level consistently.

**Acceptance Criteria:**

**Given** "Beginner" AI is playing  
**When** it calculates a throw score  
**Then** the score follows a probability distribution favoring lower scores (e.g., mean ~30-40 per dart)

**Given** "Amateur" AI is playing  
**When** it calculates a throw score  
**Then** the score follows a probability distribution with moderate consistency (e.g., mean ~40-50 per dart)

**Given** any AI difficulty  
**When** the AI needs to checkout (finish the game)  
**Then** the AI attempts valid double combinations  
**And** the success rate depends on difficulty level

**Given** the AI has a checkout suggestion displayed  
**When** it throws for the finish  
**Then** it attempts to follow the suggestion path with success probability based on difficulty

**Technical Notes:**
- Use statistical models (e.g., normal distribution around mean with variance)
- Higher difficulties have higher means and lower variance
- Include occasional "big misses" and occasional "perfect throws" for realism

**FRs Implemented:** FR32

---

**Epic 3 Summary:** 3 stories created covering all 5 FRs (FR29-33)

---

## Epic 4: Professional Tools

### Epic Goal
Players experience tournament-quality features including voice announcer, checkout suggestions, and session statistics

---

### Story 4.1: Display Checkout Suggestions

**As a** player,  
**I want** the system to display checkout suggestions when my score is 170 or less,  
**So that** I can see the best way to finish the game.

**Acceptance Criteria:**

**Given** my remaining score is 170 or less  
**When** I view the game screen  
**Then** a checkout suggestion is displayed  
**And** it shows the primary checkout path (e.g., "T20, T20, D20")

**Given** my remaining score allows multiple checkout options  
**When** I view the checkout suggestion  
**Then** I see 2-3 alternative checkout paths (e.g., primary + 2 alternatives)

**Given** my score changes during my turn  
**When** the score updates  
**Then** the checkout suggestion updates in real-time (< 100ms)  
**And** reflects the new remaining score

**Given** checkout suggestions are displayed  
**When** both players are in the game  
**Then** both players can see each other's checkout paths (strategic transparency)

**Technical Notes:**
- Uses pre-built checkout lookup table (scores 2-170)
- Lookup is O(1) for instant response
- Checkout table stored in `data/checkout-table.ts`

**FRs Implemented:** FR34, FR35, FR36, FR37

---

### Story 4.2: Voice Announcer for Scores

**As a** player,  
**I want** the system to play voice announcements for scores (0-180),  
**So that** I get authentic darts atmosphere with every throw.

**Acceptance Criteria:**

**Given** voice announcer is enabled (default ON)  
**When** a player enters a score  
**Then** a voice clip plays announcing the score within 500ms

**Given** I score 180  
**When** the score is entered  
**Then** a special "ONE HUNDRED AND EIGHTYYYYYY!" announcement plays  
**And** it has distinct emphasis compared to other scores

**Given** a score is entered  
**When** the voice clip plays  
**Then** it uses pre-generated MP3 files (scores 0-180)  
**And** the audio plays from the local CDN (no API call needed)

**Given** multiple scores are entered in quick succession  
**When** audio is playing  
**Then** new announcements queue or interrupt appropriately  
**And** audio does not overlap in a jarring way

**Given** I have voice announcer enabled  
**When** I am playing on mobile  
**Then** audio respects my device's volume and mute settings

**FRs Implemented:** FR38, FR41, FR42 (partial)

---

### Story 4.3: Voice Announcer for Game Events

**As a** player,  
**I want** the system to play announcements for game start and end,  
**So that** I get professional tournament atmosphere for key moments.

**Acceptance Criteria:**

**Given** a game is starting  
**When** the first throw is about to begin  
**Then** "Game on!" announcement plays

**Given** a player wins the game  
**When** the winning dart is entered  
**Then** "Game shot!" announcement plays  
**And** it includes the winner's name (e.g., "Game shot, Marcus!")

**Given** a player's name is announced  
**When** the name is spoken  
**Then** it uses ElevenLabs API for dynamic TTS (since names are dynamic)  
**And** has fallback to text if API is unavailable

**Given** voice announcer is enabled  
**When** game events occur  
**Then** all announcements play automatically without user interaction

**FRs Implemented:** FR39, FR40

---

### Story 4.4: Toggle Voice Announcer

**As a** player,  
**I want** to toggle the voice announcer ON or OFF,  
**So that** I can control the audio experience based on my environment.

**Acceptance Criteria:**

**Given** I am in a game  
**When** I open the game settings menu  
**Then** I see a "Voice Announcer" toggle option

**Given** voice announcer is currently ON  
**When** I toggle it OFF  
**Then** voice announcements stop playing  
**And** my preference is saved for future games

**Given** voice announcer is currently OFF  
**When** I toggle it ON  
**Then** voice announcements resume  
**And** my preference is saved for future games

**Given** I have set my voice preference  
**When** I close and reopen the browser  
**Then** my preference persists (stored in LocalStorage)

**Given** multiple players are in the game  
**When** one player toggles voice OFF  
**Then** it only affects that player's audio (per-player setting)

**FRs Implemented:** FR42, FR43

---

### Story 4.5: Display Current Score

**As a** player,  
**I want** to see my current score displayed prominently,  
**So that** I always know how many points I need to win.

**Acceptance Criteria:**

**Given** I am playing a game  
**When** I view the game screen  
**Then** my current remaining score is displayed prominently  
**And** it updates in real-time as I throw darts

**Given** I am viewing on desktop  
**When** I see my score  
**Then** it is displayed in a large, readable format  
**And** it is visible in the sticky header area

**Given** I am viewing on mobile  
**When** I see my score  
**Then** it is prominently displayed at the top  
**And** it remains visible while scrolling through history

**Given** the score updates  
**When** a new score is entered  
**Then** the display updates immediately (< 100ms)  
**And** shows the new remaining score

**FRs Implemented:** FR44

---

### Story 4.6: Display Turn Score

**As a** player,  
**I want** to see my turn score (sum of 3 darts),  
**So that** I know how many points I scored in the current turn.

**Acceptance Criteria:**

**Given** I am throwing darts during my turn  
**When** I enter each dart score  
**Then** I see a running total of my turn score  
**And** it shows the sum of darts thrown so far (1st, 2nd, 3rd)

**Given** I have thrown 3 darts  
**When** my turn ends  
**Then** the final turn score is displayed  
**And** it is added to the throw history

**Given** I bust during my turn  
**When** the bust is detected  
**Then** my turn score shows as "Bust" or "0"  
**And** my remaining score reverts to the pre-turn value

**Given** I view the throw history  
**When** I look at previous turns  
**Then** each turn shows the sum of the 3 darts thrown  
**And** displays it alongside the remaining score after that turn

**FRs Implemented:** FR45

---

### Story 4.7: Calculate and Display Player Average

**As a** player,  
**I want** the system to calculate and display my average score per turn,  
**So that** I can track my performance during the session.

**Acceptance Criteria:**

**Given** I have thrown at least one turn  
**When** I view the game screen or menu  
**Then** I see my current average (total points scored ÷ number of turns)

**Given** I continue playing  
**When** I complete each turn  
**Then** my average updates automatically  
**And** reflects all turns thrown in the session

**Given** I view the statistics in the menu  
**When** I open the stats panel  
**Then** I see my average displayed to 1 decimal place (e.g., "Average: 45.3")

**Given** multiple players are in the game  
**When** I view statistics  
**Then** I can see each player's individual average

**Calculation Formula:** Average = Total Points Scored / Total Turns Thrown

**FRs Implemented:** FR46

---

### Story 4.8: Track Session Statistics

**As a** player,  
**I want** the system to track my highest score and number of 180s during the session,  
**So that** I can see my achievements and best performances.

**Acceptance Criteria:**

**Given** I am playing a game  
**When** I complete a turn  
**Then** the system tracks my highest turn score for the session

**Given** I hit a 180 (three T20s in one turn)  
**When** the score is entered  
**Then** a 180 counter increments  
**And** the achievement is highlighted in the statistics

**Given** I view the statistics in the menu  
**When** I open the stats panel  
**Then** I see:  
**And** - Highest turn score (e.g., "Best: 180")  
**And** - Number of 180s hit (e.g., "180s: 2")

**Given** multiple players are in the game  
**When** I view statistics  
**Then** I can see each player's individual best score and 180 count

**Given** the game ends  
**When** I view final statistics  
**Then** all session stats are displayed for review

**FRs Implemented:** FR47, FR48

---

### Story 4.9: Calculate Checkout Percentage

**As a** player,  
**I want** the system to display my checkout percentage (successful checkouts),  
**So that** I can track my finishing accuracy.

**Acceptance Criteria:**

**Given** I have attempted to checkout (finish the game) at least once  
**When** I view statistics  
**Then** I see my checkout percentage

**Given** I successfully checkout (hit the winning double)  
**When** the checkout occurs  
**Then** the successful checkout counter increments

**Given** I attempt to checkout but miss  
**When** the miss occurs (score remains > 0 or bust)  
**Then** the checkout attempt counter increments  
**And** the miss is recorded

**Given** I view checkout statistics  
**When** I look at the percentage  
**Then** it displays as: (Successful Checkouts / Total Checkout Attempts) × 100  
**And** shows as a percentage (e.g., "Checkout %: 67%")

**Given** I have not attempted any checkouts  
**When** I view statistics  
**Then** checkout percentage shows as "N/A" or "0%"

**Formula:** Checkout % = (Successful Checkouts / Total Checkout Attempts) × 100

**FRs Implemented:** FR49

---

**Epic 4 Summary:** 9 stories created covering all 16 FRs (FR34-49)

---

## Epic 5: Data Management

### Epic Goal
Players can export game data and manage game sessions

---

### Story 5.1: Reset Game

**As a** player,  
**I want** to reset a game to its initial state,  
**So that** we can start over without creating a new room.

**Acceptance Criteria:**

**Given** a game is in progress or completed  
**When** I access the game menu  
**Then** I see a "Reset Game" option

**Given** I click "Reset Game"  
**When** the action is triggered  
**Then** a confirmation dialog appears ("Are you sure? This will reset all scores.")

**Given** I confirm the reset  
**When** the reset executes  
**Then** all scores revert to the starting value (501 or 301)  
**And** turn order resets to Player 1  
**And** throw history is cleared  
**And** session statistics are reset

**Given** I reset the game  
**When** playing in multiplayer mode  
**Then** all connected players see the game reset  
**And** their screens update automatically

**FRs Implemented:** FR6

---

### Story 5.2: End Game Early

**As a** player,  
**I want** to end a game before completion,  
**So that** we can stop playing if needed without waiting for a winner.

**Acceptance Criteria:**

**Given** a game is in progress  
**When** I access the game menu  
**Then** I see an "End Game" option

**Given** I click "End Game"  
**When** the action is triggered  
**Then** a confirmation dialog appears ("Are you sure you want to end this game?")

**Given** I confirm ending the game  
**When** the game ends  
**Then** the game is marked as terminated early  
**And** no winner is declared  
**And** I see options to: view statistics, export data, or start new game

**Given** I end the game early  
**When** playing in multiplayer mode  
**Then** all connected players see the game end  
**And** their screens show the game terminated status

**Given** a game ends early  
**When** the room remains active  
**Then** players can still access the menu and export data  
**And** players can start a new game in the same room

**FRs Implemented:** FR7

---

### Story 5.3: Export Game to CSV

**As a** player,  
**I want** to export game results to CSV format,  
**So that** I can save my game history and statistics for my records.

**Acceptance Criteria:**

**Given** a game is in progress or completed  
**When** I access the game menu  
**Then** I see an "Export to CSV" option

**Given** I click "Export to CSV"  
**When** the export is triggered  
**Then** a CSV file is generated with complete game data

**Given** the CSV is generated  
**When** I review the contents  
**Then** it includes:  
**And** - Game metadata (date, time, game mode)  
**And** - Player names and final scores  
**And** - Complete throw history (turn by turn, dart by dart)  
**And** - Session statistics (averages, 180s, checkout %, etc.)

**Given** the CSV is ready  
**When** the export completes  
**Then** the file downloads automatically to my device  
**And** uses a filename like "darts-game-2026-03-12-room-DART42.csv"

**Given** multiple players are in the game  
**When** any player exports  
**Then** the export includes all players' data  
**And** reflects the complete game state

**Given** I play multiple games in one session  
**When** I export  
**Then** I can choose to export current game only or all games in session

**Technical Notes:**
- CSV generation is client-side (no server storage)
- Uses standard CSV format with headers
- Date/time in ISO format for consistency

**FRs Implemented:** FR50, FR51, FR52

---

**Epic 5 Summary:** 3 stories created covering all 5 FRs (FR6-7, FR50-52)

---

## Document Summary

### All Epics and Stories Complete

| Epic | Title | Stories | FRs Covered | Status |
|------|-------|---------|-------------|--------|
| 1 | Core Game Foundation | 10 stories | FR1-5, FR15-28 (22 FRs) | ✓ Complete |
| 2 | Multiplayer Experience | 5 stories | FR8-14 (7 FRs) | ✓ Complete |
| 3 | Solo Play with AI | 3 stories | FR29-33 (5 FRs) | ✓ Complete |
| 4 | Professional Tools | 9 stories | FR34-49 (16 FRs) | ✓ Complete |
| 5 | Data Management | 3 stories | FR6-7, FR50-52 (5 FRs) | ✓ Complete |
| **Total** | **5 Epics** | **30 Stories** | **55 FRs** | ✓ **All Complete** |

*Note: FR53-56 (Responsive Design) are cross-cutting NFRs implemented across all stories*

### Story Count by Epic
- Epic 1: 10 stories (foundation, largest epic)
- Epic 2: 5 stories (multiplayer features)
- Epic 3: 3 stories (AI opponent)
- Epic 4: 9 stories (voice, checkout, stats)
- Epic 5: 3 stories (data export and session management)

**Total: 30 implementation-ready stories**


---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain-skipped', 'step-06-innovation-skipped', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
workflowStatus: 'complete'
completionDate: '2026-03-11'
inputDocuments:
  - brainstorming-session-2026-02-24.md
  - market-darts-counter-competitive-analysis-2026-03-06.md
  - technical-darts-counter-webapp-tech-stack-research-2026-03-06.md
workflowType: 'prd'
documentCounts:
  briefs: 0
  research: 2
  brainstorming: 1
  projectDocs: 0
classification:
  projectType: web_app
  domain: general
  complexity: low-medium
  projectContext: greenfield
---

# Product Requirements Document - darts-tool-bmad

**Author:** Isak
**Date:** 2026-03-06

## Executive Summary

**Darts Counter Web Application** — A frictionless, real-time multiplayer darts scoring platform that delivers professional tournament atmosphere without the complexity of account-based social platforms.

### Problem & Opportunity

Current darts counter solutions occupy two extremes: barebone scorers lacking atmosphere, or feature-heavy social platforms requiring accounts and bloated with unnecessary complexity. The target user — casual tournament organizers, friends playing remotely, and solo practitioners — lacks a "goldilocks" option: professional features with zero-friction access.

This product fills that gap by combining authentic darts atmosphere (premium voice announcer, checkout suggestions, tournament formats) with instant-play simplicity (no accounts, room codes, CSV export).

### Target Users

| User Segment | Primary Need |
|--------------|--------------|
| **Casual Players** | Quick games with friends, local or remote, no setup friction |
| **Tournament Organizers** | Simple bracket management, remote opponent support, CSV export |
| **Solo Practitioners** | Meaningful practice vs AI opponents with skill-based difficulty |
| **Darts Enthusiasts** | Authentic atmosphere — voice announcer, checkout suggestions, real game structure |

### What Makes This Special

| Differentiator | Competitive Advantage |
|----------------|----------------------|
| **Zero-Friction Entry** | No accounts, no login. Load page → generate room code → play. Viral sharing via URL. |
| **ElevenLabs Premium Voice** | Authentic English darts announcer ("ONE HUNDRED AND EIGHTYYYYYY!"). No competitor offers this. |
| **Pro Player AI Variants** | Simulate Phil Taylor, Michael van Gerwen, etc. with real statistical profiles. Transforms solo practice into meaningful match simulation. |
| **Trust-Based Philosophy** | Gentleman's sport design — collaborative score editing, no permission systems, no anti-cheat overhead. |
| **Session-Only Privacy** | No cloud accounts, no persistent PII. Statistics live in-session, exportable to CSV for user control. |
| **PartyKit Real-Time Sync** | Modern edge infrastructure (~50ms global latency). Room codes for instant multiplayer. Remote tournament capability. |

### Core Insight

**Professional darts atmosphere doesn't require platform complexity.** By pre-generating voice clips, using room-code authentication instead of accounts, and embracing trust-based score editing, this product delivers a premium experience with minimal infrastructure overhead.

### Design Philosophy

- **Simplicity First** — Zero accounts, instant play, minimal UI
- **Trust Over Control** — Gentleman's sport, collaborative editing, no anti-cheat
- **Authentic Experience** — English announcer, real tournament atmosphere
- **Pragmatic Architecture** — PartyKit edge deployment, CSV persistence, pre-cached audio
- **Focused Value** — Professional features without feature bloat

## Project Classification

| Attribute | Value | Rationale |
|-----------|-------|-----------|
| **Project Type** | Web App (SPA) | Browser-based application with real-time WebSocket communication, PWA potential |
| **Domain** | General / Sports Utility | Darts scoring tool — not a video game, no regulatory requirements |
| **Complexity** | Low-Medium | No compliance concerns, but real-time sync + AI logic + voice integration |
| **Project Context** | Greenfield | New product built from scratch, no legacy constraints |

## Success Criteria

### User Success

**The "Aha!" Moments:**

| Moment | User Experience | Success Indicator |
|--------|-----------------|-------------------|
| **First Play** | Load page → generate room → playing within 10 seconds | Time-to-first-throw < 10s (no login, no tutorial) |
| **First Voice** | Hear "ONE HUNDRED AND EIGHTYYYYYY!" | Voice plays within 500ms of score entry |
| **First Multiplayer** | Share URL with friend, they join instantly | Room join < 2s from link click |
| **First Checkout** | See checkout suggestion, hit the double | Checkout suggestion displayed in < 100ms |
| **First AI Match** | Beat beginner AI, feel challenged by pro AI | AI difficulty feels appropriate to player skill |

**User Completion Scenarios:**
- Complete a full 501 match (local or multiplayer)
- Successfully finish a tournament bracket
- Export game statistics to CSV
- Win a match against a Pro Player AI variant

**Emotional Success:**
- **Delight** — Voice announcer creates authentic atmosphere
- **Relief** — No account creation, no friction
- **Empowerment** — Checkout suggestions help players improve
- **Connection** — Remote play with friends feels seamless

### Business Success

**3-Month Success (Post-Launch):**
- 500+ unique room codes generated
- 100+ multiplayer games completed
- 50+ tournament brackets created
- Average session duration > 15 minutes

**12-Month Success:**
- 5,000+ unique room codes generated
- 1,000+ multiplayer games completed
- Viral coefficient > 1.0 (users sharing room links)
- Featured in darts community forums/social media

**Key Business Metrics:**

| Metric | Target | Rationale |
|--------|--------|-----------|
| **Room Code Generation** | 500+ in 3 months | Indicates product-market fit |
| **Multiplayer Completion Rate** | > 70% of started games | Indicates UX quality |
| **Return Users** | > 30% play again within 7 days | Indicates stickiness |
| **Room Link Shares** | Track via URL parameters | Viral growth indicator |

### Technical Success

**Performance Requirements:**

| Metric | Target | Criticality |
|--------|--------|-------------|
| First Contentful Paint | < 1.5s | High — First impression |
| Time to Interactive | < 3s | High — Frictionless entry |
| WebSocket Latency | < 100ms | Critical — Real-time sync |
| Voice Announcement Latency | < 500ms | High — Atmosphere quality |
| Lighthouse Score | > 90 | Medium — Overall quality |

**Reliability Requirements:**

| Metric | Target | Rationale |
|--------|--------|-----------|
| PartyKit Uptime | > 99.5% | Multiplayer must work |
| Voice API Fallback | Pre-cached clips | ElevenLabs outage = silent fail |
| Browser Support | Chrome, Firefox, Safari, Edge | Modern browsers only |
| Mobile Responsiveness | Core scoring works on mobile | Desktop-first, mobile-functional |

**Quality Requirements:**
- Test coverage > 80% (unit + integration)
- Zero critical bugs in scoring logic
- TypeScript strict mode enabled
- All WebSocket messages typed

### Measurable Outcomes

| Category | Metric | MVP Target | Growth Target |
|----------|--------|------------|---------------|
| **Acquisition** | Room codes generated | 100/month | 500/month |
| **Activation** | Games completed per user | ≥1 | ≥3 |
| **Retention** | 7-day return rate | 20% | 40% |
| **Referral** | Room links shared | 10% of games | 25% of games |
| **Performance** | Time-to-first-throw | < 10s | < 5s |
| **Quality** | Voice latency | < 500ms | < 300ms |

## Product Scope

### MVP - Minimum Viable Product

**Must Have (Launch Blockers):**

| Feature | Rationale |
|---------|-----------|
| 501/301 game modes with double-out | Core product functionality |
| Manual score entry | Essential input method |
| Real-time multiplayer via room codes | Primary differentiator |
| AI opponent (beginner/amateur levels) | Solo play capability |
| Voice announcer (ElevenLabs) | Premium atmosphere |
| Checkout suggestions | Professional tool value |
| Bust/sudden death logic | Complete game rules |
| Basic statistics (session-only) | Player feedback |
| CSV export | Data portability |

**MVP Scope Boundaries:**
- Single device can host multiple local players
- 1v1 and 2v2 (alternating turns) supported
- Single match format (no legs/sets complexity in MVP)
- Pre-generated voice clips for scores 0-180
- No interactive dartboard UI (manual entry only)

### Growth Features (Post-MVP)

**Competitive Enhancements:**

| Feature | Rationale |
|---------|-----------|
| Pro Player AI variants (Phil Taylor, MVG, etc.) | Unique differentiator |
| Tournament bracket system | Tournament organizer value |
| Legs/sets match formats | Professional game structure |
| Interactive dartboard UI (desktop) | Alternative input method |
| Spectator mode | Streaming/watching capability |
| Practice mode (Checkout Challenge) | Solo improvement |
| Per-player announcer toggle | Personalization |
| Multiple score display layouts | Desktop customization |
| Session performance tracking | Player improvement feedback |

### Vision (Future)

**Dream Features:**

| Feature | Rationale |
|---------|-----------|
| Cricket game mode | Alternative darts format |
| Mobile app (PWA or native) | Broader reach |
| Player accounts (optional) | Persistent stats across sessions |
| Leaderboards | Competitive community |
| Replay/sharing | Viral content |
| Voice cloning (custom announcer) | Premium personalization |

## User Journeys

### Journey 1: Marcus — Casual Player (Remote Multiplayer)

**The Story:**

Marcus is a 32-year-old software developer in London. His friend Dave moved to Manchester for work six months ago. They used to play darts at the pub every Thursday. Now they're both busy, miles apart, and their darts games have completely stopped.

**Opening Scene:**

It's Thursday evening. Marcus is scrolling his phone, thinking about the old days. He remembers they used to keep score on a napkin. Dave texts: "Miss our darts nights, mate." Marcus decides to find a way to play remotely.

**Rising Action:**

1. **Discovery** — Marcus searches "darts counter online" and finds the app. He clicks the link.
2. **Zero Friction** — No login screen. No "create account." Just a big button: "Create Game." He clicks it.
3. **Room Code** — A 6-character code appears: `DART42`. A shareable link is generated automatically.
4. **Invitation** — Marcus texts Dave: "dartscounter.app/room/DART42 — join me"
5. **Dave Joins** — Dave clicks the link. He's in. No account. No setup. They're both staring at a scoreboard.
6. **Game Start** — Marcus selects "501, 1v1." Dave's name appears. "Game on!" echoes from Marcus's speakers.

**Climax:**

They play. Marcus throws T20, T20, T20. "ONE HUNDRED AND EIGHTYYYYYY!" booms from his laptop. He grins. This feels real. Dave laughs on the phone: "Did you actually hit that?" The checkout suggestion appears: "T19, D16." Marcus hits it. "Game shot, Marcus!" The voice announcer celebrates.

**Resolution:**

They've found their Thursday night again. No accounts. No subscriptions. Just darts. Marcus bookmarks the page. Next week, they'll invite two more friends for 2v2.

**Requirements Revealed:**
- Instant room creation (< 2 clicks)
- Shareable room codes and URLs
- Real-time score sync
- Voice announcer integration
- Checkout suggestions
- Mobile-responsive (Dave played on phone)

---

### Journey 2: Priya — Tournament Organizer

**The Story:**

Priya organizes the annual charity darts tournament for her company. 16 players. Single elimination. Last year, she managed it on a whiteboard. It was chaos — erased scores, disputed matches, no record of who played whom.

**Opening Scene:**

It's two weeks before the tournament. Priya is stressed. She needs a system that handles brackets, tracks scores, and lets opponents play even if they're in different offices (the London vs Manchester rivalry is legendary).

**Rising Action:**

1. **Tournament Setup** — Priya opens the app. She sees "Create Tournament." She clicks.
2. **Bracket Configuration** — She enters 16 player names, selects "Single Elimination." The bracket generates automatically.
3. **Room Assignment** — Each match gets its own room code. Priya emails participants their match codes.
4. **Remote Play** — London vs Manchester Round 1. Sarah (London) and James (Manchester) click their codes. They're connected. No account needed.
5. **Score Validation** — James wins 3-1. The score is recorded. Priya sees the result in real-time on the bracket.
6. **Progression** — The bracket updates. Round 2 room codes unlock automatically.

**Climax:**

The final. CEO vs CFO. Everyone watches. Priya shares the spectator link. 50 people click. They see the live scoreboard, hear the announcer. "Game shot, Richardson!" The CEO wins. Confetti appears. The crowd cheers (on Zoom).

**Resolution:**

Priya exports the bracket to CSV. Complete record. No disputes. The charity raised £2,000. Next year will be even bigger. She saves the CSV.

**Requirements Revealed:**
- Tournament bracket generation
- Automatic room code assignment per match
- Real-time bracket updates
- Spectator mode (view-only)
- CSV export for records
- Remote opponent support

---

### Journey 3: Tom — Solo Practitioner (vs AI)

**The Story:**

Tom is 45, a darts enthusiast who plays at home alone. He wants to improve his game before the local pub tournament next month. Pen-and-paper scoring is tedious. Playing against himself doesn't create match pressure.

**Opening Scene:**

It's Tuesday night. Tom has his dartboard set up in the garage. He wants to practice, but he needs an opponent who creates real pressure. He opens the app.

**Rising Action:**

1. **Solo Mode** — Tom sees "Play vs AI." He clicks.
2. **AI Selection** — He chooses "Amateur" level. A virtual opponent appears: "AI Player."
3. **Match Start** — "Game on!" Tom throws first. 60. The AI responds. 85. It's competitive.
4. **Improvement** — Tom sees his average (22.3). The checkout suggestions help him learn: "For 104, try T18, D25."
5. **Progression** — After winning, Tom tries "Pro" level. The AI destroys him. He realizes how much he needs to improve.

**Climax:**

Tom unlocks "Pro Player AI." He selects "Phil Taylor AI." The match begins. The AI's scoring is relentless. T20 after T20. Tom feels real pressure. He loses 3-0. But he learns.

**Resolution:**

Tom practices every night. His average climbs to 28.1. At the pub tournament, he reaches the semi-finals. He credits the AI practice. He opens the app to celebrate — and plays another match.

**Requirements Revealed:**
- AI opponent with difficulty levels
- Pro Player AI variants (Phil Taylor, MVG, etc.)
- Checkout suggestions
- Session statistics (average, checkout %)
- Practice-focused UX

---

### Journey 4: Sarah — Darts Enthusiast (Authentic Experience)

**The Story:**

Sarah is 28, a competitive darts player who takes the game seriously. She watches PDC tournaments on TV. She loves the atmosphere — the crowd, the announcer, the tension. She wants that feeling when she plays at home.

**Opening Scene:**

Sarah is hosting a darts night with her league friends. They're serious players. They want proper scoring, proper atmosphere. No janky apps.

**Rising Action:**

1. **Setup** — Sarah opens the app on her TV (via laptop HDMI). Big screen. Everyone can see.
2. **Professional Feel** — The scoreboard is clean. No ads. No clutter. Just scores and checkout suggestions.
3. **Atmosphere** — First 180. "ONE HUNDRED AND EIGHTYYYYYY!" booms through the speakers. Her friends nod. "That's proper."
4. **Checkout Drama** — Sarah needs D16 for the match. The suggestion shows. She hits it. "Game shot, Sarah!" Confetti. Her friends cheer.

**Climax:**

The final leg. Sarah vs her rival, Jen. Both on double. The announcer builds tension. Jen misses. Sarah steps up. D10. She hits. "Game shot!" The voice celebrates. This feels like a real tournament.

**Resolution:**

Sarah's league night is now a weekly event. They use the app every time. The voice announcer, the checkout suggestions, the clean UI — it's professional quality without the social platform baggage. Sarah recommends it to everyone.

**Requirements Revealed:**
- TV/large display optimization
- Premium voice announcer
- Clean, professional UI
- Checkout suggestions (primary + alternatives)
- Confetti celebration
- Desktop-first design

---

### Journey 5: James — Mobile User (Edge Case)

**The Story:**

James is at a pub with friends. Someone suggests darts. James pulls out his phone to keep score. He doesn't have his laptop. He needs the app to work on mobile.

**Opening Scene:**

James opens the app on his iPhone. The screen is small. He's worried it'll be cramped.

**Rising Action:**

1. **Mobile Load** — The page loads fast (< 3s). The UI adapts to mobile. Big buttons. Clear scores.
2. **Quick Game** — James taps "Create Game." Room code appears. His friend joins on their phone.
3. **Score Entry** — James taps the score buttons. +60. +45. +26. Easy. No tiny dartboard to click.
4. **Core Features** — Checkout suggestions visible. Voice announcer plays (he turns it off — pub is loud).

**Climax:**

The game works. James finishes the match. His friend wins. They play again. The mobile experience is functional, not frustrating.

**Resolution:**

James bookmarks the app on his home screen. It's now his go-to pub darts scorer. He didn't need to download anything from the App Store.

**Requirements Revealed:**
- Mobile-responsive design
- Touch-friendly score entry
- Fast mobile load time
- Voice toggle (on/off)
- PWA potential (home screen)

---

### Journey Requirements Summary

| Journey | Key Capabilities Revealed |
|---------|---------------------------|
| **Marcus (Remote Multiplayer)** | Room codes, real-time sync, voice announcer, checkout suggestions |
| **Priya (Tournament Organizer)** | Bracket generation, match room assignment, spectator mode, CSV export |
| **Tom (Solo Practitioner)** | AI difficulty levels, Pro Player AI, session statistics, practice UX |
| **Sarah (Enthusiast)** | TV display, premium voice, clean UI, confetti, desktop-first |
| **James (Mobile)** | Mobile responsive, touch entry, voice toggle, fast load |

**Cross-Journey Requirements:**
- Zero-friction entry (no accounts)
- Room code sharing (viral growth)
- Voice announcer (differentiator)
- Checkout suggestions (professional tool)
- Real-time sync (PartyKit)
- Session statistics (feedback)
- CSV export (data portability)

## Web App Specific Requirements

### Project-Type Overview

**Application Type:** Single Page Application (SPA) built with Next.js 16 App Router

**Architecture Pattern:**
- **Frontend:** React 19 with Server Components for initial load
- **Real-time:** PartyKit WebSocket server for multiplayer state sync
- **Voice:** ElevenLabs API for TTS announcements
- **State:** Zustand for client state, PartyKit Room.storage for game state

**Key Characteristics:**
- Zero-friction entry (no authentication)
- Real-time multiplayer via room codes
- Desktop-first, mobile-functional
- Session-only data (no persistent database)

### Browser Matrix

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| **Chrome** | Latest 2 versions | ✅ Full | Primary target |
| **Firefox** | Latest 2 versions | ✅ Full | Full support |
| **Safari** | Latest 2 versions | ✅ Full | Full support (iOS/macOS) |
| **Edge** | Latest 2 versions | ✅ Full | Chromium-based |
| **IE11** | — | ❌ Not supported | Modern browsers only |
| **Mobile Safari** | iOS 15+ | ⚠️ Functional | Mobile-responsive |
| **Chrome Mobile** | Android 10+ | ⚠️ Functional | Mobile-responsive |

**Browser Features Required:**
- WebSocket support (PartyKit)
- Web Audio API (voice playback)
- LocalStorage (user preferences)
- ES2020+ JavaScript

### Responsive Design

**Design Philosophy:** Desktop-first with mobile fallback

| Breakpoint | Width | Experience |
|------------|-------|------------|
| **Desktop** | ≥1024px | Full experience — large scoreboard, checkout suggestions visible |
| **Tablet** | 768px-1023px | Optimized layout — condensed scoreboard |
| **Mobile** | <768px | Functional — essential scoring, voice toggle, touch-friendly buttons |

**Responsive Features:**

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Interactive Dartboard | ✅ Optional toggle | ❌ Hidden (too small) |
| Checkout Suggestions | ✅ Full display | ✅ Condensed |
| Voice Announcer | ✅ Default ON | ✅ Toggle (pub noise) |
| Score Entry | ✅ Keyboard + click | ✅ Touch buttons |
| Multiple Layouts | ✅ Customizable | ❌ Single layout |

**MVP Approach:**
- Mobile: Single optimized layout
- Desktop: Multiple preset layouts (future: customizable)

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **First Contentful Paint** | < 1.5s | Lighthouse |
| **Largest Contentful Paint** | < 2.5s | Lighthouse |
| **Time to Interactive** | < 3.0s | Lighthouse |
| **First Input Delay** | < 100ms | Lighthouse |
| **Cumulative Layout Shift** | < 0.1 | Lighthouse |
| **Lighthouse Score** | > 90 | Overall |

**Real-Time Performance:**

| Metric | Target | Notes |
|--------|--------|-------|
| WebSocket Connection | < 500ms | Initial room join |
| Score Sync Latency | < 100ms | Opponent sees update |
| Voice Announcement | < 500ms | From score entry to audio |
| PartyKit Edge Latency | ~50ms | Global (Cloudflare) |

**Performance Strategies:**
- Pre-generate 181 voice clips (0-180) for instant playback
- Code splitting for game components
- React Server Components for initial page
- PartyKit edge deployment for WebSocket

### SEO Strategy

**SEO Priority:** Low — Viral growth model, not search-driven

**Rationale:**
- No accounts → No user profiles to index
- Room codes → Dynamic URLs not meant for search
- Word-of-mouth → Primary growth channel
- Direct links → Users share room URLs directly

**Minimal SEO Requirements:**

| Element | Approach |
|---------|----------|
| **Meta Title** | "Darts Counter — Real-time Multiplayer Scoring" |
| **Meta Description** | Brief description for link previews |
| **Open Graph** | Basic tags for social sharing |
| **Robots.txt** | Allow landing page, block room URLs |
| **Sitemap** | Not needed for MVP |

**Future SEO (Post-MVP):**
- Landing page optimization
- Tournament result pages (if public)
- Blog/content for darts community

### Accessibility Level

**Target:** Basic accessibility (not WCAG-compliant for MVP)

**Rationale:**
- Low-complexity domain — no regulatory requirements
- Turn-based game — timing not critical
- Visual feedback primary — darts is inherently visual

**Accessibility Features:**

| Feature | Support | Notes |
|---------|---------|-------|
| **Keyboard Navigation** | ✅ Basic | Tab through score entry |
| **Screen Reader** | ⚠️ Partial | Score announcements via voice |
| **Color Contrast** | ✅ High | Score numbers clearly visible |
| **Text Sizing** | ✅ Responsive | Browser zoom supported |
| **Alt Text** | ✅ Basic | Dartboard image (if used) |

**MVP Scope:**
- Basic keyboard navigation
- High contrast scoreboard
- Voice announcements provide audio feedback
- Mobile-friendly touch targets

**Post-MVP Enhancements:**
- Full keyboard-only gameplay
- ARIA labels for all interactive elements
- WCAG 2.1 AA compliance review

### Technical Architecture Considerations

**Frontend Architecture:**

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js 16 App Router                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  Landing    │  │   Game      │  │   Tournament        │ │
│  │  Page (SSR) │  │   Room      │  │   Bracket           │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│                           │                                 │
│                    ┌──────▼──────┐                         │
│                    │   Zustand   │                         │
│                    │   (State)   │                         │
│                    └──────┬──────┘                         │
└───────────────────────────┼─────────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              │                           │
       ┌──────▼──────┐            ┌──────▼──────┐
       │  PartyKit   │            │ ElevenLabs  │
       │ (WebSocket) │            │   (Voice)   │
       └─────────────┘            └─────────────┘
```

**Deployment Architecture:**

| Component | Platform | Notes |
|-----------|----------|-------|
| **Frontend** | Vercel | Next.js native support |
| **WebSocket** | PartyKit (Cloudflare) | Edge deployment |
| **Voice API** | ElevenLabs | External service |
| **CDN** | Cloudflare | Built into PartyKit |

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — Validate that users prefer premium atmosphere + zero friction over existing solutions

**MVP Goal:** Ship a complete 501/301 game experience that demonstrates the core value proposition (voice announcer, room codes, checkout suggestions) without feature bloat

**Resource Requirements:**
- **Minimum Team:** 1-2 full-stack developers (Next.js + PartyKit knowledge)
- **Timeline:** 4-6 weeks for MVP
- **Key Skills:** React/TypeScript, PartyKit WebSocket, ElevenLabs integration

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
1. **Marcus** — Remote multiplayer with friend via room code
2. **Tom** — Solo practice vs AI (beginner/amateur)
3. **James** — Mobile pub darts (responsive essential scoring)

**Must-Have Capabilities:**

| Capability | MVP Implementation | Rationale |
|------------|-------------------|-----------|
| **Game Modes** | 501/301 with double-out | Core functionality |
| **Score Entry** | Manual entry only | Essential for MVP; dartboard UI deferred |
| **Multiplayer** | Room codes (1v1, 2v2) | Primary differentiator |
| **AI Opponent** | Beginner + Amateur levels | Solo play capability |
| **Voice Announcer** | Pre-generated clips (0-180) | Premium atmosphere |
| **Checkout Suggestions** | Primary + 2 alternatives | Professional tool value |
| **Game Logic** | Bust detection, sudden death | Complete game rules |
| **Statistics** | Session-only (current game) | Player feedback |
| **CSV Export** | Single game export | Data portability promise |

**MVP Exclusions (Deferred to Growth):**
- ❌ Interactive dartboard UI (complex, not essential)
- ❌ Tournament bracket system (advanced user type)
- ❌ Pro Player AI variants (nice-to-have differentiator)
- ❌ Legs/sets match formats (complexity)
- ❌ Spectator mode (advanced feature)
- ❌ Multiple layout options (desktop customization)

### Post-MVP Features

**Phase 2: Growth (Months 3-6)**

| Feature | Priority | Rationale |
|---------|----------|-----------|
| **Pro Player AI** | High | Unique differentiator — Phil Taylor, MVG variants |
| **Interactive Dartboard** | High | Alternative input method (desktop) |
| **Tournament Bracket** | Medium | Enables Priya's journey |
| **Legs/Sets Formats** | Medium | Professional tournament structure |
| **Spectator Mode** | Medium | Streaming/watching capability |
| **Practice Mode** | Medium | Checkout Challenge for improvement |
| **Session Performance Tracking** | Low | Statistics beyond single game |
| **Per-Player Voice Toggle** | Low | Personalization |

**Phase 3: Expansion (Months 6-12)**

| Feature | Vision Level |
|---------|--------------|
| **Cricket Game Mode** | Alternative format |
| **PWA/Mobile App** | Broader reach |
| **Optional Accounts** | Persistent stats |
| **Leaderboards** | Community competitive |
| **Replay/Sharing** | Viral content |
| **Custom Voice Cloning** | Premium personalization |

### Risk Mitigation Strategy

**Technical Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **PartyKit Complexity** | Medium | High | Start with local state, add PartyKit incrementally |
| **Voice Latency** | Medium | Medium | Pre-generate clips; use ElevenLabs only for names |
| **AI Logic Bugs** | Low | High | Extensive unit testing for scoring logic |
| **Real-Time Sync Issues** | Medium | High | Authoritative server pattern; client prediction |

**Market Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Users Prefer Existing Apps** | Medium | High | Focus on voice + zero friction differentiation |
| **No Viral Growth** | Medium | Medium | Track room link shares; iterate on sharing UX |
| **Voice Announcer Annoying** | Low | Medium | Per-player toggle; default ON |

**Resource Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Scope Creep** | High | High | Strict MVP boundaries; defer non-essentials |
| **Developer Bandwidth** | Medium | High | All features in MVP are achievable solo |
| **ElevenLabs Costs** | Low | Medium | Pre-generated clips reduce API calls |

## Functional Requirements

### Game Management

- **FR1:** Players can create a new game without creating an account
- **FR2:** Players can select game mode (501 or 301)
- **FR3:** Players can configure number of players (1-4)
- **FR4:** Players can configure player names
- **FR5:** Players can start a game with "Game on!" announcement
- **FR6:** Players can reset a game to initial state
- **FR7:** Players can end a game early

### Room & Multiplayer

- **FR8:** Host can generate a unique room code for multiplayer games
- **FR9:** Host can share room via copyable URL
- **FR10:** Players can join a room by entering room code
- **FR11:** Players can join a room by clicking shared URL
- **FR12:** Multiple players can join the same room from different devices
- **FR13:** Players see real-time updates when others join or leave
- **FR14:** Room remains active as long as at least one player is connected

### Score Entry & Tracking

- **FR15:** Players can enter scores manually via numeric input
- **FR16:** System validates score entry (valid dart combinations)
- **FR17:** System calculates remaining score automatically
- **FR18:** System detects bust (score < 0 without double) and resets turn
- **FR19:** System tracks darts thrown per turn (1st, 2nd, 3rd)
- **FR20:** System tracks total darts thrown per player
- **FR21:** Players can edit previous throw scores (trust-based)
- **FR22:** System maintains turn order (player rotation)

### Game Logic & Rules

- **FR23:** System enforces double-out rule (must finish on double)
- **FR24:** System detects leg/match completion
- **FR25:** System announces winner with "Game shot" and player name
- **FR26:** System handles sudden death scenarios (max darts reached)
- **FR27:** System validates checkout attempts (valid double combinations)
- **FR28:** System handles ties in sudden death (continue until winner)

### AI Opponent

- **FR29:** Solo players can play against AI opponent
- **FR30:** Players can select AI difficulty level (Beginner, Amateur)
- **FR31:** AI automatically throws darts with appropriate delays
- **FR32:** AI scoring follows probabilistic model based on difficulty
- **FR33:** AI respects turn order and game rules

### Checkout Suggestions

- **FR34:** System displays checkout suggestion for remaining score
- **FR35:** System shows primary checkout path
- **FR36:** System shows alternative checkout paths (2-3 options)
- **FR37:** Checkout suggestions update in real-time as score changes

### Voice Announcer

- **FR38:** System plays voice announcements for scores (0-180)
- **FR39:** System plays "Game on!" at match start
- **FR40:** System plays "Game shot" with winner name at match end
- **FR41:** System plays special announcement for 180 scores
- **FR42:** Voice plays automatically on score entry (default ON)
- **FR43:** Players can toggle voice announcer ON/OFF

### Statistics & Feedback

- **FR44:** System displays current player score prominently
- **FR45:** System displays turn score (sum of 3 darts)
- **FR46:** System calculates and displays player average (per turn)
- **FR47:** System tracks highest score per player (session)
- **FR48:** System tracks number of 180s per player (session)
- **FR49:** System displays checkout percentage (successful checkouts)

### Data Export

- **FR50:** Players can export game results to CSV format
- **FR51:** CSV includes player names, scores, statistics
- **FR52:** Export captures complete game history

### Responsive Design

- **FR53:** Application displays optimized layout for desktop (≥1024px)
- **FR54:** Application displays functional layout for mobile (<768px)
- **FR55:** Touch-friendly score entry on mobile devices
- **FR56:** Application supports browser zoom without layout breakage

## Non-Functional Requirements

### Performance

**Page Load Performance:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint (FCP) | < 1.5s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | Lighthouse |
| Time to Interactive (TTI) | < 3.0s | Lighthouse |
| Total Blocking Time (TBT) | < 200ms | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Lighthouse Performance Score | > 90 | Overall |

**Real-Time Performance:**

| Metric | Target | Rationale |
|--------|--------|-----------|
| WebSocket Connection | < 500ms | Initial room join |
| Score Sync Latency | < 100ms | Opponent sees update |
| Voice Announcement Latency | < 500ms | Atmosphere quality |
| PartyKit Edge Latency | ~50ms | Global (Cloudflare) |
| Checkout Calculation | < 100ms | Instant feedback |

**Concurrent User Support:**
- Support 100 concurrent rooms (MVP)
- Support 1,000 concurrent rooms (Growth)
- No degradation in sync performance up to capacity

### Security

**Data Protection:**
- All data transmitted over HTTPS (TLS 1.3)
- No persistent storage of user data (session-only design)
- No PII collection or storage

**Room Security:**
- Room codes are 6-character alphanumeric (62^6 combinations)
- Rooms expire after 24 hours of inactivity
- No authentication required (zero-friction philosophy)

**API Security:**
- ElevenLabs API key stored server-side (not exposed to client)
- Rate limiting on voice generation to prevent abuse

### Scalability

**Growth Projections:**

| Phase | Concurrent Rooms | Strategy |
|-------|------------------|----------|
| MVP Launch | 100 | Single PartyKit deployment |
| Growth (3 mo) | 500 | Monitor, add capacity |
| Scale (12 mo) | 1,000+ | PartyKit auto-scaling |

**Scalability Constraints:**
- No database scaling concerns (session-only, no persistence)
- PartyKit handles WebSocket scaling automatically
- Voice clips pre-generated (reduces API load)

### Accessibility

**Basic Accessibility (MVP):**

| Feature | Requirement | Priority |
|---------|-------------|----------|
| Keyboard Navigation | All core functions accessible via keyboard | Medium |
| Focus Indicators | Visible focus states for all interactive elements | Medium |
| Color Contrast | WCAG AA (4.5:1) for text | High |
| Touch Targets | Minimum 44x44px on mobile | High |
| Screen Reader | Basic ARIA labels for main elements | Low |

**Excluded (Post-MVP):**
- Full WCAG 2.1 AA compliance
- Screen reader optimization for complex interactions
- High contrast mode

### Reliability

**Availability:**

| Metric | Target | Rationale |
|--------|--------|-----------|
| PartyKit Uptime | > 99.5% | Multiplayer core |
| Frontend Uptime | > 99.9% | Vercel SLA |
| Voice API Fallback | Pre-cached clips | ElevenLabs outage tolerance |

**Error Handling:**
- Graceful degradation if PartyKit disconnects (reconnect automatically)
- Silent fail if ElevenLabs unavailable (pre-cached clips play)
- Client-side validation prevents invalid score entries
- Clear error messages for network issues

**Data Integrity:**
- Game state is authoritative server-side (PartyKit Room.storage)
- Client state reconciles with server on reconnection
- No data loss on browser refresh (session storage for recovery)

### Browser Support

**Supported Browsers (Latest 2 versions):**
- Chrome / Chrome Mobile
- Firefox
- Safari / iOS Safari
- Edge

**Required Features:**
- WebSocket (PartyKit)
- Web Audio API (voice playback)
- LocalStorage (user preferences)
- ES2020+ JavaScript

**Not Supported:**
- Internet Explorer 11
- Browsers without WebSocket support

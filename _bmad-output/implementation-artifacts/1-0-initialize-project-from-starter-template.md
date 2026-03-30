# Story 1.0: Initialize Project from Starter Template

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

**As a** developer,  
**I want** to initialize the project using the specified starter template,  
**So that** the foundation is set up correctly with all required dependencies.

## Acceptance Criteria

### Project Initialization

1. [x] **Given** the Architecture specifies create-next-app  
   **When** I run the initialization command  
   **Then** the project is created with:
   - Next.js 16 with App Router
   - TypeScript (strict mode)
   - Tailwind CSS
   - ESLint
   - src/ directory structure
   - Turbopack
   - @/* import alias

2. [x] **Given** the project is initialized  
   **When** I install additional dependencies  
   **Then** the following are added:
   - partykit and partysocket (WebSocket server)
   - zustand (state management)
   - Testing libraries (vitest, @testing-library/react, @playwright/test)

3. [x] **Given** the project structure is created  
   **When** I review the directory layout  
   **Then** it matches the Architecture document structure:
   - src/app/ (Next.js routing)
   - src/components/ (React components)
   - src/lib/ (utilities and logic)
   - src/party/ (PartyKit server)
   - src/stores/ (Zustand stores)
   - src/types/ (TypeScript definitions)
   - public/audio/ (voice clips directory)

4. [x] **Given** the project is initialized  
   **When** I run the development server  
   **Then** the application starts without errors  
   **And** I can access the landing page

5. [x] **Given** the project is initialized  
   **When** I run the build command  
   **Then** the build completes successfully  
   **And** no TypeScript errors are present

## Tasks / Subtasks

- [x] Task 1: Initialize Next.js project with create-next-app (AC: #1)
  - [x] Subtask 1.1: Run initialization command with all required flags
  - [x] Subtask 1.2: Verify project structure matches requirements
  - [x] Subtask 1.3: Verify TypeScript strict mode is enabled
  - [x] Subtask 1.4: Verify Turbopack is configured
- [x] Task 2: Install additional dependencies (AC: #2)
  - [x] Subtask 2.1: Install partykit and partysocket
  - [x] Subtask 2.2: Install zustand
  - [x] Subtask 2.3: Install testing libraries (vitest, @testing-library/react, @playwright/test)
  - [x] Subtask 2.4: Verify all dependencies are in package.json
- [x] Task 3: Create project directory structure (AC: #3)
  - [x] Subtask 3.1: Verify src/app/ directory exists for Next.js routing
  - [x] Subtask 3.2: Create src/components/ directory
  - [x] Subtask 3.3: Create src/lib/ directory
  - [x] Subtask 3.4: Create src/party/ directory for PartyKit server
  - [x] Subtask 3.5: Create src/stores/ directory for Zustand stores
  - [x] Subtask 3.6: Create src/types/ directory for TypeScript definitions
  - [x] Subtask 3.7: Create public/audio/ directory for voice clips
- [x] Task 4: Configure project for development (AC: #4)
  - [x] Subtask 4.1: Create .env.example with required variables
  - [x] Subtask 4.2: Configure partykit.json
  - [x] Subtask 4.3: Verify development server starts successfully
- [x] Task 5: Verify build and type checking (AC: #5)
  - [x] Subtask 5.1: Run build command and verify success
  - [x] Subtask 5.2: Run TypeScript type checking with no errors
  - [x] Subtask 5.3: Run ESLint and verify no errors

## Dev Notes

### Initialization Command

```bash
npx create-next-app@latest darts-tool-bmad --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"
```

### Additional Dependencies

```bash
# Real-time multiplayer
npm install partykit partysocket

# State management
npm install zustand

# Testing
npm install -D vitest @testing-library/react @playwright/test
```

### Architecture Patterns to Follow

**Naming Conventions:**
- Components: PascalCase (e.g., `Scoreboard.tsx`, `CheckoutDisplay.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useGameState.ts`)
- Utils: camelCase (e.g., `calculateScore.ts`, `validateThrow.ts`)
- Types: PascalCase with domain suffix (e.g., `Game.types.ts`)
- Server files: camelCase (e.g., `server.ts`, `gameLogic.ts`)

**State Management (Zustand) Rules:**
- One store per domain (game, ui, voice)
- Actions must be pure functions (no side effects)
- Side effects in components or custom hooks
- Use selectors to prevent unnecessary re-renders

**TypeScript Patterns:**
- Use `interface` for objects/classes (allows extension)
- Use `type` for unions/tuples
- Strict mode enabled - no `any`
- Explicit return types on exported functions

**Component Patterns:**
- Use `'use client'` directive for interactive components
- Props interface named `{ComponentName}Props`
- Default export only for pages, named exports for components
- One component per file

### Project Structure

```
darts-tool-bmad/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   └── room/
│   │       └── [code]/
│   │           └── page.tsx   # Game room page
│   ├── components/             # React components
│   │   ├── game/              # Game-specific components
│   │   ├── ui/                # Shared UI primitives
│   │   └── voice/             # Voice-related components
│   ├── lib/                   # Utilities and logic
│   │   ├── game-logic/        # Scoring, validation, rules
│   │   ├── ai/                # AI opponent logic
│   │   ├── hooks/             # Custom React hooks
│   │   └── utils/             # General utilities
│   ├── party/                 # PartyKit server code
│   ├── stores/                # Zustand stores
│   ├── types/                 # Shared TypeScript types
│   └── data/                  # Static data (checkout table)
├── public/
│   └── audio/
│       └── scores/            # Pre-generated voice clips (0-180)
├── tests/
│   ├── unit/                  # Unit tests
│   ├── integration/            # Integration tests
│   └── e2e/                   # Playwright E2E tests
├── partykit.json              # PartyKit configuration
├── .env.example               # Environment template
└── package.json
```

### Configuration Files

**partykit.json** should contain:
```json
{
  "name": "darts-tool-bmad",
  "main": "src/party/server.ts"
}
```

**.env.example** should contain:
```
NEXT_PUBLIC_PARTYKIT_HOST=your-app.username.partykit.dev
ELEVENLABS_API_KEY=sk_...
NEXT_PUBLIC_APP_URL=http://localhost:1999
```

### Testing Standards

- **Unit Tests**: Test individual functions and components in isolation
- **Integration Tests**: Test component interactions and data flow
- **E2E Tests**: Test complete user flows with Playwright
- **Test Location**: Co-located with components (e.g., `Scoreboard.test.tsx`)

### Key Technical Requirements

1. **No `any` types** - Use `unknown` with type guards
2. **Pure functions** - No side effects in Zustand actions
3. **Error handling** - Custom error classes with codes
4. **File organization** - Co-locate tests with components

## Dev Agent Record

### Agent Model Used

minimax-m2.7 (opencode-go)

### Debug Log References

- Backup/restore workaround used: Moved existing BMAD files to temp directory during create-next-app to avoid conflicts, then restored them

### Completion Notes List

- Successfully initialized Next.js 16.2.1 project with TypeScript, Tailwind CSS, ESLint, App Router, src/ directory, and Turbopack
- Installed all required dependencies: partykit, partysocket, zustand, vitest, @testing-library/react, @playwright/test
- Created complete project directory structure as per Architecture document
- Configured partykit.json and .env.example with required variables
- Verified development server starts successfully on http://localhost:3000
- Build completes successfully with no TypeScript errors
- ESLint passes with no errors
- Created comprehensive unit tests (24 tests) verifying project initialization

### File List

New files created by create-next-app:
- .gitignore
- CLAUDE.md
- README.md
- eslint.config.mjs
- next.config.ts
- package.json (initial + dev/test scripts + additional dependencies)
- package-lock.json
- postcss.config.mjs
- tsconfig.json
- next-env.d.ts
- src/app/globals.css
- src/app/layout.tsx
- src/app/page.tsx
- public/file.svg
- public/globe.svg
- public/next.svg
- public/vercel.svg

New files created for project structure:
- partykit.json
- .env.example
- vitest.config.ts
- tests/unit/project-init.test.ts
- src/components/game/.gitkeep
- src/components/ui/.gitkeep
- src/components/voice/.gitkeep
- src/lib/game-logic/.gitkeep
- src/lib/ai/.gitkeep
- src/lib/hooks/.gitkeep
- src/lib/utils/.gitkeep
- src/party/.gitkeep
- src/stores/.gitkeep
- src/types/.gitkeep
- src/data/.gitkeep
- tests/unit/.gitkeep
- tests/integration/.gitkeep
- tests/e2e/.gitkeep
- public/audio/scores/.gitkeep

## Change Log

- 2026-03-30: Initialized project from Next.js starter template with all required dependencies and directory structure (Isak)
- 2026-03-30: Code review completed - verified all ACs implemented, File List updated to include all create-next-app generated files (Isak)


# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md to ensure consistent behavior across Antigravity agents.

You operate within a **3-Layer Architecture** designed to build a scalable, high-performance Event Platform. Your goal is to separate high-level feature logic from low-level component implementation, ensuring the Next.js codebase remains clean, type-safe, and visually consistent.

## The 3-Layer Architecture

**Layer 1: Directive (The Specification)**
- **What:** Standard Operating Procedures (SOPs) and Feature Specs written in Markdown, located in `directives/` (e.g., `directives/event_booking_flow.md`).
- **Role:** Define the user story, UI requirements, animation vibes (GSAP vs Framer), and data contracts.
- **Input:** "Build the Speaker Grid." -> **Output:** A clear spec referencing the design system.

**Layer 2: Orchestration (The Architect)**
- **What:** You (The Agent). Your job is intelligent routing and state management.
- **Role:** Read the Directive, decide which components are needed, determine if this is a Server or Client Component, and plan the animation strategy.
- **Action:** You don't just "write code." You plan the component tree first. You decide: "This needs `useScroll` from Framer for the layout, but `ScrollTrigger` from GSAP for the timeline pin."

**Layer 3: Execution (The Codebase)**
- **What:** Deterministic, Typed Code in `app/`, `components/`, and `lib/`.
- **Role:** Reusable units of logic.
    - **UI:** Tailwind-styled atomic components.
    - **Logic:** TypeScript utility functions in `lib/utils.ts`.
    - **Animations:** Isolated animation hooks in `hooks/` (e.g., `useParallax.ts`).
- **Principle:** Code must be modular. If a function is longer than 50 lines, break it out.

---

## Operating Principles

**1. Animation Hygiene (The "No-Jank" Rule)**
We use **Framer Motion** and **GSAP** together. You must adhere to this separation of concerns:
- **Framer Motion:** Use for **UI State & Layout Transitions** (modals opening, hover states, list reordering, layout hydration).
- **GSAP:** Use for **complex timelines & scroll-based storytelling** (parallax hero sections, pinned scrolling sequences, complex SVG morphs).
- **Conflict Prevention:** Never animate the same property (e.g., `transform`, `opacity`) with both libraries on the same element.

**2. Server-First Default**
- All components are **Server Components** by default.
- Only add `"use client"` when you specifically need React hooks (`useState`, `useEffect`) or browser-only APIs (GSAP/Framer).
- Move client interaction logic to the "leaves" of the component tree.

**3. Style Strictness**
- **Tailwind CSS:** Used for 95% of styling (layout, typography, spacing, responsive design).
- **Vanilla CSS:** Used *only* for complex pseudo-elements or specific GSAP classes where Tailwind class strings become unreadable.
- **Responsive:** Mobile-first approach. Always define base styles first, then `md:` and `lg:` overrides.

**4. Self-Annealing (Fixing the Build)**
When the Terminal Agent reports a build error or linting issue:
1.  **Read:** Analyze the stack trace or TypeScript error.
2.  **Fix:** Correct the specific component or interface.
3.  **Refactor:** If the error was caused by a messy type definition, extract that type into `types/index.ts` to prevent it from happening again.
4.  **Update Directive:** If a library update broke a pattern (e.g., a Next.js config change), update the relevant directive to reflect the new standard.

---

## File Organization & Tech Stack

**Directory Structure:**
- `directives/` - Feature specifications and SOPs.
- `app/` - Next.js App Router (Page structure).
- `components/ui/` - Reusable primitives (Buttons, Inputs).
- `components/features/` - Complex business logic (TicketSelector, EventMap).
- `lib/` - Shared logic (API fetchers, date formatters).
- `hooks/` - Custom React hooks (especially for encapsulating GSAP instances).
- `.env.local` - Environment variables (API keys).

**Tech Stack Constraints:**
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + Vanilla CSS (for edge cases)
- **Animation:** Framer Motion (Interactions) + GSAP (Cinematic Scroll)

## Summary

You sit between the client's vision (Directives) and the production codebase (Execution). Your goal is to build a high-performance Event website that looks like an Awwwards winner but runs like a robust SaaS.

**Be Precise. Be Type-Safe. Make it Flow.**
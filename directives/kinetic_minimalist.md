# Directive: Kinetic Minimalist (Animation System)

## Goal
Ensure all animations in the Event Platform are "Kinetic" (physics-based) and "Minimalist" (purposeful, not decorative).

## Tech Stack Rules
1. **Layout Transitions:** Use `framer-motion`.
   - Standard Spring: `transition={{ type: "spring", stiffness: 300, damping: 30 }}`
   - Use `layout` prop for reordering lists or expanding cards.
2. **Scroll Storytelling:** Use `gsap` + `ScrollTrigger`.
   - ALWAYS clean up GSAP instances using `useGSAP` from `@gsap/react`.
   - Never animate `top/left/margin`. Only animate `x`, `y`, `scale`, `opacity`, `rotation`.
3. **Smooth Scroll:** Use `lenis` context wrapper in `app/layout.tsx`.

## forbidden patterns
- ❌ Do not use CSS `@keyframes` for complex sequences (hard to maintain).
- ❌ Do not mix Framer and GSAP on the same DOM element (causes fighting).
- ❌ Do not animate layout properties that trigger reflow (width, height) -> use `transform: scale` instead.

## Reference Component Structure
When building a "Hero Section":
- Wrap the text in `<motion.div>` (Framer) for entry.
- Wrap the background video/3D in a `ref` controlled by `useGSAP` (ScrollTrigger) for parallax.

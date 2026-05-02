# Directive: Media Showcase (Portfolio & Gallery Logic)

## Goal
Build a "Netflix-grade" viewing experience for the agency's creative work (360 Spin, Video Editing, Motion Graphics).
The gallery must be immersive, support mixed media (Video + Photo), and load instantly even on mobile data.

## Core UX Principles
1.  **"Hover to Play" (The Instagram Rule):**
    - Video thumbnails for "360 Spin" and "Motion Graphics" must be static images by default.
    - On hover (desktop) or viewport entry (mobile), they should autoplay a low-res muted loop.
    - Click opens the full-res version in a Lightbox.
2.  **Before/After Comparison:**
    - For "Video Editing" and "Photo Printing" (Retouching), use a draggable Slider Component.
    - User drags a handle to reveal the "Color Graded" version vs "Raw Footage".
3.  **Masonry Layout:**
    - Do not use a strict grid. Use a masonry layout to accommodate vertical (Mobile/TikTok) and horizontal (Cinema) aspect ratios seamlessly.

## Tech Stack Implementation
1.  **Video Optimization:**
    - Use `<video>` tags with `playsInline`, `muted`, `loop`, and `poster` attributes.
    - STRICT: All autoplay videos must be < 2MB (WebM format preferred).
2.  **Image Handling:**
    - Use `next/image` for all static assets.
    - Implement "Blur-up" placeholders (`placeholder="blur"`) for perceived performance.
3.  **Animations (Framer Motion):**
    - **Lightbox:** Use `layoutId` (Shared Element Transition) to seamlessly expand a clicked thumbnail into the full-screen modal.

## Component Requirements
- **`MediaGrid`:** A responsive masonry container that accepts an array of `{ type: 'video' | 'image', src, poster, aspectRatio }`.
- **`ComparisonSlider`:** A custom component using vanilla CSS `clip-path` or a wrapper div width approach (controlled by a React state slider) to show Before vs After.
- **`SpinViewer`:** A specialized player for 360 booth content that loops seamlessly and allows "scrubbing" by dragging left/right.

## Forbidden Patterns
- ❌ **Auto-playing Audio:** Never play sound without user interaction.
- ❌ **Heavy YouTube Embeds:** Do not embed standard YouTube iframes in the main grid (too slow). Use a custom thumbnail that loads the iframe only *after* clicking.
- ❌ **CLS (Layout Shift):** Always reserve the aspect-ratio space for media before it loads to prevent the layout from jumping.

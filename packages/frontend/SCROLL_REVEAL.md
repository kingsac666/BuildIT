# Scroll Reveal Animations

This document explains how scroll-reveal animations are implemented and how to use them in the frontend.

## What Was Added
- `useScrollReveal` hook: Observes elements and adds a class when they enter the viewport.
- `scroll-reveal.css`: Defines reveal transitions and delay helpers.
- `Layout` hook wiring: Runs the observer globally for pages rendered in the layout.
- `Home` page: Uses `data-reveal` and `reveal` classes to trigger animations.

## Files Involved
- `packages/frontend/src/hooks/useScrollReveal.js`
- `packages/frontend/src/scroll-reveal.css`
- `packages/frontend/src/components/layout/Layout.jsx`
- `packages/frontend/src/pages/Home.jsx`
- `packages/frontend/src/main.jsx` (imports `scroll-reveal.css`)

## How It Works
1. Add the `data-reveal` attribute to any element you want to animate.
2. Add the `reveal` class to apply the base animation styles.
3. When the element enters the viewport, the hook adds the `is-visible` class.
4. The transition moves the element up slightly and fades it in.
5. If the user prefers reduced motion, the animation is disabled and content shows immediately.

## Basic Usage
```jsx
<section className="reveal" data-reveal>
  <h2>My Section</h2>
  <p>Content that fades in on scroll.</p>
</section>
```

## Staggered Delays (Optional)
Use one of the delay helpers to stagger multiple items.
Available classes: `reveal-delay-100` through `reveal-delay-500`.

```jsx
<div className="reveal reveal-delay-200" data-reveal>
  <h3>Card Title</h3>
  <p>Card content.</p>
</div>
```

## Customization
Update `packages/frontend/src/scroll-reveal.css` to change:
- Duration: `transition: ... 600ms ...`
- Offset: `transform: translateY(16px)`
- Ease: `ease` curve in the transition
- Delays: update the `reveal-delay-*` classes

## Adding Reveal to Other Pages
To add scroll reveal to another page:
1. Add `className="reveal"` and `data-reveal` to elements you want animated.
2. Optionally add a delay class for staggered effects.

Example:
```jsx
<div className="reveal reveal-delay-300" data-reveal>
  <h3>Feature</h3>
  <p>Some text.</p>
</div>
```

## Notes
- The observer runs once per element and unobserves after it becomes visible.
- The hook is wired in `Layout.jsx`, so it applies across all pages.

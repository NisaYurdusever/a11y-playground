# Comparison Notes: Custom ARIA Components vs. Radix / shadcn/ui

This review highlights architectural differences between our hand-crafted W3C APG implementations and `shadcn/ui` (built on Radix Primitives).

## Concrete Gaps Identified

### 1. Robust Portal Management & Body Scroll Locking (Dialog)
* **Our Implementation:** Renders inline inside the parent DOM tree with a fixed overlay. Body scroll is not locked, which allows background scrolling while the modal is open.
* **shadcn/ui (Radix):** Renders into a `Portal` (`document.body`) to prevent parent CSS clipping (`overflow: hidden` or `z-index` stacking context traps). It removes background scroll with `react-remove-scroll` and marks background content as `aria-hidden` using `aria-hidden` helpers.

### 2. Edge Cases in Focus Trapping & Virtual Screen Readers
* **Our Implementation:** Relies on querySelector for basic focusable tags and monitors Tab / Shift+Tab. It can fail if dynamic elements mount inside the dialog, or if focus jumps via assistive technology gestures.
* **shadcn/ui (Radix FocusScope):** Uses dedicated focus-guard elements outside the container to catch focus before it escapes, supports automatic autofocus prioritization (`autoFocus` prop), and handles unmount focus restoration reliably even if the initial trigger node was unmounted.

### 3. Screen Reader Live Announcements & Transition States (Disclosure & Tabs)
* **Our Implementation:** Drops content abruptly from the DOM on close (`if (!isOpen) return null`).
* **shadcn/ui:** Keeps layout mounted during exit animations with CSS data attributes (`data-state="open|closed"`), ensuring screen readers complete state readouts before unmounting.
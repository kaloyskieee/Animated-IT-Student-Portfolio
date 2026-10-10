---
name: Preview screenshot behavior
description: Static full-page screenshots do not trigger viewport-based scroll reveals below the initial viewport.
---

When reviewing this app with a full-page screenshot, remember that the capture does not scroll through the page to trigger `IntersectionObserver`-based reveal animations. Sections below the initial viewport can therefore appear blank in the static capture even though they reveal as the visitor scrolls.

**Why:** The preview screenshot captures the page without interacting or scrolling, so viewport-triggered sections remain in their pre-reveal state.

**How to apply:** Confirm the initial viewport and inspect the reveal logic before treating a blank full-page capture as missing content; verify section content through the code or an actual scroll.

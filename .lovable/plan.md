# Pieces of Story on My Journey

## What will change
- Add a new editorial photo composition beneath the My Journey introduction and Featured Highlights.
- Provide 12 manually editable entries with empty image/content fields and individually defined positions, sizes, aspect ratios, and rotations.
- Open each photo slot in an accessible story viewer with image, optional details, close control, and previous/next navigation.
- Recompose the collection for phones with large, staggered photo slots and no title overlap.
- Preserve all existing Journey sections and visual identity.

## Technical details
- Implement a reusable `PiecesOfStory.tsx` using the existing Button and Dialog components.
- Keep the 12-entry data array in that component for direct source editing.
- Add scoped, token-based styles in `src/styles.css`; no route or dependency changes.
- Verify TypeScript/build output and inspect desktop and mobile layouts in the preview.
# Image Gallery (Masonry)

A minimal React + Vite + Tailwind CSS demo that renders a masonry-style gallery. The varied card heights encourage computer vision models (e.g., ViT) to attend to vertical flow instead of strict row structure.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Notes
- Masonry uses CSS multi-column layout (`columns-1 sm:columns-2 md:columns-3`) with `break-inside-avoid` on cards.
- Dummy colored blocks stand in for images; swap with actual assets as needed.

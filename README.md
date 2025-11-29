Flowbit AOI Creation App

A single-page application built with React, TypeScript, Vite, Leaflet, and Tailwind CSS.
Implements AOI (Area of Interest) creation using interactive markers, WMS imagery, and persistent local storage.

Developed as part of the Flowbit Frontend Engineer Internship Assignment.

🌍 Features

Interactive Leaflet map (OSM + NRW DOP WMS)

Click-to-add markers

"Add Marker" quick action button

Persistent features using localStorage

Sidebar to view and clear saved markers

Clean, responsive UI with Tailwind CSS

Playwright E2E tests

Fully client-side, no backend

🗺 Map Library Choice — Leaflet

Why Leaflet?

Simple, familiar API

Native WMS support

Lightweight bundle size

Smooth interactions, fast rendering

Strong ecosystem + community

Alternatives considered:

MapLibre → Great for vector tiles but heavy for this use-case

OpenLayers → Powerful but complex + larger bundle

Mapbox GL → Licensing constraints + unnecessary for simple AOIs

Leaflet offered the best balance of performance, simplicity, and WMS compatibility.

🏛 Architecture Overview
src/
  components/
    MapView.tsx      // Map logic, WMS layer, marker rendering
    Sidebar.tsx      // AOI list and clear functionality
  App.tsx            // App-level state + localStorage persistence
  main.tsx           // Entry point
  styles.css         // Tailwind + Leaflet styles


Decisions:

Kept components small and focused

Used local state (global store unnecessary for simple AOIs)

LocalStorage used for persistence

UI intentionally kept clean and minimal

⚡ Performance Considerations

For scaling to thousands of points/polygons:

Use marker clustering (Supercluster / Leaflet.markercluster)

Use canvas or WebGL rendering layers

Debounce pan/zoom events

Lazy-load features based on map bounds

Offload heavy operations to Web Workers

Switch to vector tiles if required

Current scope is intentionally lightweight.

🧪 Testing Strategy

Included:

App loads

Map renders

Clicking map stores marker in localStorage

Would add with more time:

Component-level tests (Sidebar, MapView)

Snapshot tests

WMS tile-load mocking

Keyboard navigation + accessibility tests

🎯 Tradeoffs

WMS kept simple for readability

Limited to point markers (polygons optional scope)

No global state manager (not needed here)

No full error boundary system (out of scope)

All tradeoffs made intentionally for clarity and submission requirements.

🔧 Production Readiness

To ship this to production:

Add CORS-safe WMS proxy

Add ESLint + Prettier + CI pipeline

Add error handling for failed tile loads

Improve accessibility labels

Add environment variables for WMS URLs

Expand test coverage

⏱ Time Breakdown

Project setup — 30 min

Map + WMS integration — 1 hr

UI & styling — 45 min

LocalStorage + state — 30 min

Testing — 30 min

Documentation — 20 min

▶ Run Locally
npm install
npx playwright install --with-deps   # optional
npm run dev


Open: http://localhost:5173

📬 Contact

If you'd like more details, feel free to reach out.

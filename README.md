Flowbit AOI Creation App

A single-page application built with React, TypeScript, Vite, Leaflet, and Tailwind CSS.
Implements interactive AOI (Area of Interest) creation using markers and WMS imagery.

This project is part of the Flowbit Frontend Engineer Internship Assignment.

🌍 Features

Interactive Leaflet map (OSM + NRW DOP WMS)

Click-to-add markers

“Add Marker” quick action

Persistent AOIs via localStorage

Sidebar to view and clear saved points

Clean, responsive UI (Tailwind)

Playwright E2E tests

Fully client-side implementation

🗺 Map Library Choice — Leaflet

Why Leaflet?

Simple, familiar API

Native WMS support

Lightweight bundle size

Smooth interaction + fast rendering

Stable ecosystem

Alternatives:

Library	Why Not Used
MapLibre	Heavier, suited for vector tiles
OpenLayers	Powerful but more complex & larger
Mapbox GL	License restrictions, overkill for AOIs

Leaflet was the most practical fit for this assignment.

🏛 Architecture Overview
src/
  components/
    MapView.tsx      # Map logic + WMS + markers
    Sidebar.tsx      # AOI list + clear button
  App.tsx            # Global state + persistence
  main.tsx           # Entry point
  styles.css         # Styles + Tailwind


Design Principles:

Small, focused components

State lifted where required

LocalStorage for persistence

Clean, minimal UI

⚡ Performance Considerations

Scalable design for future requirement of thousands of points:

Marker clustering (Supercluster / Leaflet.markercluster)

Canvas or WebGL rendering layers

Lazy-load based on viewport

Debounced map interactions

Web Workers for heavy operations

Vector tiles if scale increases significantly

🧪 Testing Strategy

Included:

App loads successfully

Map renders

Clicking map stores marker in localStorage

With more time:

Component-level unit tests

Snapshot tests

Mock tile loading (WMS)

A11Y testing (keyboard navigation, roles)

🎯 Tradeoffs

Kept WMS integration simple for readability

Limited to point markers (polygons optional)

No global state libraries (overkill for this scope)

Minimal UI animations to keep code clean

🔧 Production Readiness

Would add before going live:

CORS-safe WMS proxy

ESLint + Prettier with CI enforcement

Error boundaries around map loading

Accessibility labels + keyboard focus rings

Environment variables for WMS URLs

Expanded test coverage

⏱ Time Breakdown

Setup — 30 min

Map + WMS integration — 1 hr

UI & styling — 45 min

State + persistence — 30 min

Testing — 30 min

Documentation — 20 min

▶ Run Locally
npm install
npx playwright install --with-deps   # optional
npm run dev


Open: http://localhost:5173

📬 Contact

Feel free to reach out for more details.

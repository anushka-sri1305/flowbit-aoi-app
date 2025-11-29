# 🚀 Flowbit AOI Creation App

A single-page application built with **React**, **TypeScript**, **Vite**, **Leaflet**, and **Tailwind CSS**.  
Implements interactive AOI (Area of Interest) creation using markers and WMS imagery.

This project is part of the **Flowbit Frontend Engineer Internship Assignment**.

---

## 🌍 Features

- Interactive Leaflet map (OSM + NRW DOP WMS)
- Click-to-add markers  
- “Add Marker” quick action  
- Persistent AOIs via localStorage  
- Sidebar to view and clear saved points  
- Clean, responsive UI (Tailwind)  
- Playwright E2E tests  
- Fully client-side implementation  

---

## 🗺️ Map Library Choice — Leaflet

### **Why Leaflet?**

- Simple, familiar API  
- Native WMS support  
- Lightweight bundle size  
- Smooth interaction + fast rendering  
- Stable ecosystem  

### **Alternatives Considered**

| Library     | Why Not Used                             |
|-------------|-------------------------------------------|
| MapLibre    | Heavier, suited for vector tiles          |
| OpenLayers  | Powerful but more complex & larger        |
| Mapbox GL   | License restrictions, overkill for AOIs   |

Leaflet was the most practical fit for this assignment.

---

## 🏛 Architecture Overview

### **Design Principles**

- Small, focused components  
- State lifted where required  
- LocalStorage for persistence  
- Clean, minimal UI  

---

## ⚡ Performance Considerations

Scalable design for large datasets (1,000+ AOIs):

- Marker clustering (Supercluster / Leaflet.markercluster)  
- Canvas or WebGL rendering layers  
- Lazy-load based on viewport  
- Debounced map interactions  
- Web Workers for heavy operations  
- Vector tiles for huge datasets  

---

## 🧪 Testing Strategy

### **Included**

- App loads successfully  
- Map renders  
- Clicking map stores marker in localStorage  

### **Given more time**

- Component-level unit tests  
- Snapshot tests  
- Mock tile loading (WMS)  
- Accessibility (A11Y) tests  

---

## 🎯 Tradeoffs

- Simple WMS integration for readability  
- Limited to point markers (polygons optional scope)  
- No global state libraries (not needed)  
- Minimal animations to keep UI clean  

---

## 🔧 Production Readiness

Before deployment:

- Add CORS-safe WMS proxy  
- Add ESLint + Prettier + CI enforcement  
- Add error boundaries for tile/map load issues  
- Add accessibility roles & keyboard focus rings  
- Move config to environment variables  
- Expand test coverage  

---

## ⏱ Time Breakdown

- Setup — 30 min  
- Map + WMS integration — 1 hr  
- UI & styling — 45 min  
- State + persistence — 30 min  
- Testing — 30 min  
- Documentation — 20 min  

---

## ▶ Run Locally

```sh
npm install
npx playwright install --with-deps   # optional
npm run dev
---
```
Open the app at:
👉 http://localhost:5173
---

## 📬 Contact

Feel free to reach out for more details.

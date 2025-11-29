import React from 'react'

export default function Sidebar({
  features,
  onClear
}: {
  features: any[]
  onClear: () => void
}) {
  return (
    <aside className="w-80 p-6 glass rounded-r-xl shadow-lg">
      <h1 className="text-3xl font-bold text-slate-800">AOI Manager</h1>
      <p className="text-sm text-slate-500 mt-2">Save points by clicking the map or using <span className="font-medium">Add Marker</span>.</p>

      <div className="mt-5 space-y-3">
        <button id="clear-btn" onClick={onClear}
          className="w-full py-2 rounded-lg bg-red-600 text-white font-semibold shadow">Clear All</button>
        <div className="p-3 rounded bg-white/60 border">
          <h2 className="text-sm font-medium text-slate-700">Saved Features</h2>
          <ul className="mt-2 space-y-2 max-h-56 overflow-auto">
            {features.length === 0 && <li className="text-slate-400">No features yet</li>}
            {features.map((f, i) => (
              <li key={i} className="p-2 rounded border bg-white">
                <div className="text-sm font-medium text-slate-700">{f.type}</div>
                <div className="text-xs text-slate-500">{f.lat.toFixed(5)}, {f.lng.toFixed(5)}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-6 text-xs text-slate-400">Built with React • Leaflet • WMS</footer>
    </aside>
  )
}

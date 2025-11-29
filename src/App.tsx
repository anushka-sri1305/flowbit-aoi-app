import React, { useState } from 'react'
import MapView from './components/MapView'
import Sidebar from './components/Sidebar'

export default function App() {
  const [features, setFeatures] = useState<any[]>(() => {
    try {
      const raw = localStorage.getItem('aoi_features')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  const addFeature = (f: any) => {
    const next = [...features, f]
    setFeatures(next)
    localStorage.setItem('aoi_features', JSON.stringify(next))
  }

  const clearFeatures = () => {
    setFeatures([])
    localStorage.removeItem('aoi_features')
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-brand-50 to-white">
      <Sidebar features={features} onClear={clearFeatures} />
      <main className="flex-1 relative">
        <MapView features={features} onAddFeature={addFeature} />
      </main>
    </div>
  )
}

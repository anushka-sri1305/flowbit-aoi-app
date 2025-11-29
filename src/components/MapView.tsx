import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  iconSize: [25, 41]
})

function WMSLayer({ url, layers }: { url: string; layers: string }) {
  const map = useMap()
  const layerRef = useRef<L.TileLayer.WMS | null>(null)

  useEffect(() => {
    const wms = L.tileLayer.wms(url, {
      layers,
      format: 'image/png',
      transparent: true,
      version: '1.1.1'
    })
    layerRef.current = wms
    wms.addTo(map)
    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current)
      }
    }
  }, [map, url, layers])

  return null
}

export default function MapView({
  features,
  onAddFeature
}: {
  features: any[]
  onAddFeature: (f: any) => void
}) {
  const [showWms, setShowWms] = useState(true)
  const center: [number, number] = [51.337, 7.446]
  const mapRef = useRef<L.Map | null>(null)

  return (
    <div className="h-screen relative">
      <div className="absolute z-30 right-6 top-6 flex gap-2">
        <button id="add-marker-btn" className="px-3 py-2 bg-white rounded shadow"
          onClick={() => {
            const map = mapRef.current
            if (map) {
              const c = map.getCenter()
              onAddFeature({ type: 'Point', lat: c.lat + 0.0002, lng: c.lng + 0.0002, created: Date.now() })
            }
          }}>Add Marker</button>
        <button id="toggle-wms" className="px-3 py-2 bg-white rounded shadow"
          onClick={() => setShowWms(s => !s)}>{showWms ? 'Hide WMS' : 'Show WMS'}</button>
      </div>

      <MapContainer
        center={center}
        zoom={13}
        className="w-full h-full"
        ref={(mapInstance) => {
          if (mapInstance) {
            mapRef.current = mapInstance
            ;(window as any)._leaflet_map_instance = mapInstance
          }
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {showWms && (
          <WMSLayer url="https://www.wms.nrw.de/geobasis/wms_nw_dop" layers="dop" />
        )}

        <MapClickHandler onAdd={onAddFeature} />

        {features.map((f, i) => (
          <Marker key={i} position={[f.lat, f.lng]} icon={markerIcon}>
            <Popup>
              <div className="w-40">
                <strong>{f.type}</strong>
                <div className="text-xs text-gray-600">{new Date(f.created).toLocaleString()}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

function MapClickHandler({ onAdd }: { onAdd: (f: any) => void }) {
  const map = useMap()
  useEffect(() => {
    function onMapClick(e: L.LeafletMouseEvent) {
      onAdd({ type: 'Point', lat: e.latlng.lat, lng: e.latlng.lng, created: Date.now() })
    }
    map.on('click', onMapClick)
    return () => {
      map.off('click', onMapClick)
    }
  }, [map, onAdd])
  return null
}

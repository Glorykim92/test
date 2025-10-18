import React, { useEffect, useState, useMemo } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { LatLngBounds } from 'leaflet'
import { useShapefileLoader } from '../hooks/useShapefileLoader'
import 'leaflet/dist/leaflet.css'

const MapViewer: React.FC = () => {
  const { geoJsonData, loading, error } = useShapefileLoader('/line.shp')
  const [mapBounds, setMapBounds] = useState<LatLngBounds | null>(null)

  // Memoize the GeoJSON style to prevent unnecessary re-renders
  const geoJsonStyle = useMemo(() => ({
    color: '#3388ff',
    weight: 3,
    opacity: 0.8
  }), [])

  useEffect(() => {
    if (geoJsonData && geoJsonData.features.length > 0) {
      // Calculate bounds from the data for optimal viewport
      const bounds = new LatLngBounds([])
      geoJsonData.features.forEach(feature => {
        if (feature.geometry.type === 'LineString') {
          feature.geometry.coordinates.forEach(coord => {
            bounds.extend([coord[1], coord[0]])
          })
        }
      })
      setMapBounds(bounds)
    }
  }, [geoJsonData])

  if (loading) {
    return <div className="map-loading">Loading shapefile data...</div>
  }

  if (error) {
    return <div className="map-error">Error loading shapefile: {error}</div>
  }

  return (
    <div className="map-container">
      <MapContainer
        style={{ height: '500px', width: '100%' }}
        bounds={mapBounds || undefined}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={geoJsonStyle}
          />
        )}
      </MapContainer>
    </div>
  )
}

export default MapViewer
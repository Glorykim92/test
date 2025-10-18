import { useState, useEffect } from 'react'
import shp from 'shpjs'

interface GeoJSONFeature {
  type: 'Feature'
  geometry: {
    type: string
    coordinates: number[][] | number[][][]
  }
  properties: Record<string, any>
}

interface GeoJSONData {
  type: 'FeatureCollection'
  features: GeoJSONFeature[]
}

export const useShapefileLoader = (shapefilePath: string) => {
  const [geoJsonData, setGeoJsonData] = useState<GeoJSONData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadShapefile = async () => {
      try {
        setLoading(true)
        setError(null)

        // Use fetch with proper error handling
        const response = await fetch(shapefilePath)
        if (!response.ok) {
          throw new Error(`Failed to fetch shapefile: ${response.statusText}`)
        }

        const arrayBuffer = await response.arrayBuffer()
        const geojson = await shp(arrayBuffer)
        
        setGeoJsonData(geojson)
      } catch (err) {
        console.error('Error loading shapefile:', err)
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (shapefilePath) {
      loadShapefile()
    }
  }, [shapefilePath])

  return { geoJsonData, loading, error }
}
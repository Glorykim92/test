import React, { Suspense, lazy } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load the map component for better initial load performance
const MapViewer = lazy(() => import('./components/MapViewer'))

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Geospatial Data Viewer</h1>
        <p>Performance-optimized shapefile visualization</p>
      </header>
      
      <main className="app-main">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <MapViewer />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default App
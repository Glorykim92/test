# Geospatial Performance App

A performance-optimized web application for visualizing geospatial data (shapefiles) with modern web technologies.

## Performance Optimizations Implemented

### 🚀 Bundle Optimization
- **Vite** for fast development and optimized production builds
- **Code splitting** with manual chunks for vendor libraries
- **Tree shaking** to eliminate unused code
- **Terser minification** with console/debugger removal in production

### 📦 Asset Optimization
- **Lazy loading** of map components
- **Dynamic imports** for better initial load times
- **Service Worker** with Workbox for caching strategies
- **Image caching** with 30-day expiration

### 🎯 Runtime Performance
- **React.memo** and **useMemo** for preventing unnecessary re-renders
- **Error boundaries** for graceful error handling
- **Suspense** for better loading states
- **Performance monitoring** built-in

### 🌐 Network Optimization
- **DNS prefetching** for map tiles
- **Preconnect** hints for external resources
- **Critical CSS** inlined in HTML
- **Progressive Web App** capabilities

### 📱 User Experience
- **Responsive design** with mobile-first approach
- **Loading spinners** and error states
- **Optimized map rendering** with will-change CSS
- **Smooth animations** with CSS transforms

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Analyze bundle size
npm run analyze

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ErrorBoundary.tsx
│   ├── LoadingSpinner.tsx
│   └── MapViewer.tsx
├── hooks/              # Custom React hooks
│   └── useShapefileLoader.ts
├── utils/              # Utility functions
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles

public/
├── line.shp            # Your shapefile data
├── index.html          # HTML template
└── manifest.json       # PWA manifest
```

## Performance Features

### Bundle Analysis
Run `npm run analyze` to see detailed bundle composition and identify optimization opportunities.

### Caching Strategy
- **Static assets**: Cached with service worker
- **Map tiles**: Browser cache + service worker
- **API responses**: Runtime caching with Workbox

### Code Splitting
- **Vendor chunk**: React, React-DOM
- **Leaflet chunk**: Map libraries
- **Utils chunk**: Utility libraries
- **Dynamic imports**: Lazy-loaded components

### Monitoring
Built-in performance monitoring logs:
- Page load time
- Component render times
- Network request timing

## Browser Support
- Modern browsers with ES2020 support
- Progressive enhancement for older browsers
- Service Worker support for caching

## Contributing
This setup provides a solid foundation for performance-optimized geospatial applications. Feel free to extend with additional features while maintaining the performance optimizations.
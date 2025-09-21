// Interactive map component
interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  markers: Array<{
    id: string;
    lat: number;
    lng: number;
    title: string;
    type: 'gi-product' | 'activity' | 'location';
  }>;
  onMarkerClick?: (markerId: string) => void;
}

export default function InteractiveMap({ center, zoom, markers, onMarkerClick }: MapProps) {
  return (
    <div className="interactive-map">
      <div className="map-container">
        {/* Map implementation would go here */}
        <p>Interactive Map (Center: {center.lat}, {center.lng})</p>
        <div className="markers">
          {markers.map((marker) => (
            <div 
              key={marker.id} 
              className={`marker marker-${marker.type}`}
              onClick={() => onMarkerClick?.(marker.id)}
            >
              {marker.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

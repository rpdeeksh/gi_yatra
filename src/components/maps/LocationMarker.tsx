// Location marker component
interface LocationMarkerProps {
  lat: number;
  lng: number;
  title: string;
  type: 'gi-product' | 'activity' | 'location';
  isActive?: boolean;
  onClick?: () => void;
}

export default function LocationMarker({ 
  lat, 
  lng, 
  title, 
  type, 
  isActive = false, 
  onClick 
}: LocationMarkerProps) {
  const getMarkerIcon = () => {
    switch (type) {
      case 'gi-product':
        return '🏺';
      case 'activity':
        return '🎯';
      case 'location':
        return '📍';
      default:
        return '📍';
    }
  };

  return (
    <div 
      className={`location-marker ${type} ${isActive ? 'active' : ''}`}
      onClick={onClick}
      title={title}
    >
      <span className="marker-icon">{getMarkerIcon()}</span>
      <span className="marker-title">{title}</span>
    </div>
  );
}

// Activity card component
interface ActivityCardProps {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  type: 'visit' | 'workshop' | 'meal' | 'transport' | 'shopping';
  giProducts?: string[];
}

export default function ActivityCard({ 
  id, 
  time, 
  title, 
  description, 
  location, 
  duration, 
  type, 
  giProducts = [] 
}: ActivityCardProps) {
  return (
    <div className={`activity-card activity-${type}`}>
      <div className="activity-time">
        <span>{time}</span>
        <small>{duration}</small>
      </div>
      <div className="activity-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="activity-location">
          <span>📍 {location}</span>
        </div>
        {giProducts.length > 0 && (
          <div className="gi-products">
            <strong>Featured GI Products:</strong>
            <ul>
              {giProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

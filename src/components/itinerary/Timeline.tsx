import React from 'react';
import DayCard from './DayCard';
import SummaryStats from './SummaryStats';

interface TimelineProps {
  itinerary: {
    days: any[];
    totalDays: number;
    totalCost: number;
    totalDistance: string;
    giProducts: number;
    uniqueExperiences: number;
    culturalSites: number;
    artisanWorkshops: number;
  };
}

const ItineraryTimeline: React.FC<TimelineProps> = ({ itinerary }) => {
  return (
    <div className="itinerary-scroll">
      <div className="scroll-header">
        <h2>Your Cultural Journey</h2>
        <div className="scroll-decoration">
          <div className="mandala-pattern"></div>
        </div>
      </div>
      
      <div className="timeline">
        {itinerary.days.map((day, index) => (
          <DayCard 
            key={index} 
            day={day} 
            dayNumber={index + 1}
          />
        ))}
      </div>
      
      <div className="journey-summary">
        <SummaryStats itinerary={itinerary} />
      </div>
    </div>
  );
};

export default ItineraryTimeline;
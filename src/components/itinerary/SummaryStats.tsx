"use client";

import React from 'react';
import { MapPin, Clock, DollarSign, Users, Star, Camera } from 'lucide-react';

interface SummaryStatsProps {
  itinerary: {
    totalDays: number;
    totalCost: number;
    totalDistance: string;
    giProducts: number;
    uniqueExperiences: number;
    culturalSites: number;
    artisanWorkshops: number;
  };
}

const SummaryStats: React.FC<SummaryStatsProps> = ({ itinerary }) => {
  const stats = [
    {
      icon: <Clock className="stat-icon" />,
      label: "Journey Duration",
      value: `${itinerary.totalDays} Days`,
      color: "saffron"
    },
    {
      icon: <DollarSign className="stat-icon" />,
      label: "Estimated Cost",
      value: `₹${itinerary.totalCost?.toLocaleString() || 'N/A'}`,
      color: "emerald"
    },
    {
      icon: <MapPin className="stat-icon" />,
      label: "Total Distance",
      value: itinerary.totalDistance || "250 km",
      color: "royal-blue"
    },
    {
      icon: <Star className="stat-icon" />,
      label: "GI Products",
      value: `${itinerary.giProducts || 8} Discoveries`,
      color: "heritage-gold"
    },
    {
      icon: <Users className="stat-icon" />,
      label: "Artisan Workshops",
      value: `${itinerary.artisanWorkshops || 3} Sessions`,
      color: "terracotta"
    },
    {
      icon: <Camera className="stat-icon" />,
      label: "Cultural Sites",
      value: `${itinerary.culturalSites || 12} Locations`,
      color: "peacock-blue"
    }
  ];

  return (
    <div className="journey-summary-scroll">
      <div className="summary-header">
        <h3 className="summary-title">Your Cultural Expedition Summary</h3>
        <div className="header-decoration">
          <div className="lotus-symbol">🪷</div>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon-container">
              {stat.icon}
            </div>
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            <div className="stat-pattern"></div>
          </div>
        ))}
      </div>

      <div className="journey-highlights">
        <h4>Cultural Experiences Included</h4>
        <div className="experience-tags">
          <span className="experience-tag">🎭 Traditional Performances</span>
          <span className="experience-tag">🏺 Pottery Workshops</span>
          <span className="experience-tag">🧵 Textile Weaving</span>
          <span className="experience-tag">🍛 Authentic Cuisine</span>
          <span className="experience-tag">🏛️ Heritage Sites</span>
          <span className="experience-tag">🎨 Local Art Forms</span>
        </div>
      </div>

      <div className="impact-section">
        <div className="impact-card">
          <h4>Supporting Local Communities</h4>
          <p>Your journey directly supports local artisans, preserves traditional crafts, and promotes sustainable cultural tourism.</p>
          <div className="impact-stats">
            <div className="impact-item">
              <strong>15+</strong>
              <span>Local Artisans Supported</span>
            </div>
            <div className="impact-item">
              <strong>₹{Math.round((itinerary.totalCost || 5000) * 0.7).toLocaleString()}</strong>
              <span>Direct Community Contribution</span>
            </div>
          </div>
        </div>
      </div>

      <div className="summary-footer">
        <div className="scroll-decoration">
          <div className="mandala-border"></div>
        </div>
        <p className="journey-blessing">
          "May your journey be filled with the colors of culture and the warmth of heritage"
        </p>
      </div>
    </div>
  );
};

export default SummaryStats;

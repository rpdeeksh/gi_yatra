"use client";

import React, { useState } from 'react';
import { MapPin, Clock, Star, Users, Camera } from 'lucide-react';

// Enhanced Day card component with folklore styling
interface DayCardProps {
  day: {
    date: string;
    title: string;
    activities: any[];
    highlights: string[];
    estimatedCost: number;
    travelTime: string;
  };
  dayNumber: number;
}

export default function DayCard({ day, dayNumber }: DayCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="day-scroll-card">
      {/* Decorative Day Number */}
      <div className="day-medallion">
        <div className="medallion-inner">
          <span className="day-number">{dayNumber}</span>
          <div className="medallion-pattern"></div>
        </div>
      </div>

      {/* Day Header */}
      <div className="day-header">
        <div className="date-banner">
          <h3 className="day-title">{day.title}</h3>
          <p className="day-date">{new Date(day.date).toLocaleDateString('en-IN', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          })}</p>
        </div>
        
        <div className="day-stats">
          <div className="stat-item">
            <Clock size={16} />
            <span>{day.travelTime}</span>
          </div>
          <div className="stat-item">
            <Star size={16} />
            <span>₹{day.estimatedCost?.toLocaleString() || 'N/A'}</span>
          </div>
        </div>
      </div>

      {/* Highlights Preview */}
      <div className="highlights-preview">
        <h4>Today's Cultural Highlights</h4>
        <div className="highlights-grid">
          {day.highlights?.slice(0, 3).map((highlight, index) => (
            <div key={index} className="highlight-badge">
              <span>{highlight}</span>
            </div>
          ))}
          {day.highlights?.length > 3 && (
            <div className="highlight-badge more">
              +{day.highlights.length - 3} more
            </div>
          )}
        </div>
      </div>

      {/* Activities Preview */}
      <div className="activities-section">
        <div className="activities-header">
          <h4>Journey Timeline ({day.activities?.length || 0} stops)</h4>
          <button 
            className="expand-toggle folklore-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Collapse' : 'View Details'}
          </button>
        </div>

        <div className={`activities-preview ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? (
            day.activities?.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-time">{activity.time || '10:00 AM'}</div>
                <div className="activity-content">
                  <h5>{activity.title || 'Cultural Experience'}</h5>
                  <p>{activity.description || 'Explore local heritage'}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="activity-summary">
              <span>🎭 Cultural visits • 🏺 Craft workshops • 🍛 Local cuisine</span>
            </div>
          )}
        </div>
      </div>

      {/* Cultural Story Section */}
      <div className="cultural-narrative">
        <div className="narrative-icon">🏺</div>
        <p className="narrative-text">
          "Experience the rich heritage of {day.title} through authentic encounters with local artisans and traditional crafts..."
        </p>
      </div>

      {/* Decorative Bottom Border */}
      <div className="day-footer">
        <div className="paisley-pattern"></div>
      </div>
    </div>
  );
}

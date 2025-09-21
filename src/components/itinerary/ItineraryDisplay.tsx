"use client";

import React from 'react';
import { MapPin, Calendar, Clock, Users, Star } from 'lucide-react';

interface ItineraryDisplayProps {
  itinerary: any;
  district: string;
  travelDates: string;
}

export default function ItineraryDisplay({ itinerary, district, travelDates }: ItineraryDisplayProps) {
  if (!itinerary) return null;

  // Handle different response formats from backend
  const displayData = typeof itinerary === 'string' ? { description: itinerary } : itinerary;

  return (
    <div className="itinerary-display">
      <div className="itinerary-header">
        <h2 className="itinerary-title">Your Cultural Journey to {district}</h2>
        <div className="journey-meta">
          <div className="meta-item">
            <Calendar size={18} />
            <span>{travelDates}</span>
          </div>
          <div className="meta-item">
            <MapPin size={18} />
            <span>{district}, Karnataka</span>
          </div>
        </div>
      </div>

      <div className="itinerary-content">
        {displayData.description && (
          <div className="itinerary-section">
            <h3>Journey Overview</h3>
            <p className="journey-description">{displayData.description}</p>
          </div>
        )}

        {displayData.days && Array.isArray(displayData.days) && (
          <div className="itinerary-section">
            <h3>Day-wise Itinerary</h3>
            <div className="days-container">
              {displayData.days.map((day: any, index: number) => (
                <div key={index} className="day-card">
                  <div className="day-header">
                    <h4>Day {index + 1}</h4>
                    {day.theme && <span className="day-theme">{day.theme}</span>}
                  </div>
                  <div className="day-content">
                    {day.activities && Array.isArray(day.activities) ? (
                      <div className="activities-list">
                        {day.activities.map((activity: any, actIndex: number) => (
                          <div key={actIndex} className="activity-item">
                            <div className="activity-time">
                              <Clock size={14} />
                              <span>{activity.time || `Activity ${actIndex + 1}`}</span>
                            </div>
                            <div className="activity-details">
                              <h5>{activity.title || activity.name}</h5>
                              <p>{activity.description}</p>
                              {activity.location && (
                                <div className="activity-location">
                                  <MapPin size={12} />
                                  <span>{activity.location}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>{day.description || day}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {displayData.gi_products && Array.isArray(displayData.gi_products) && (
          <div className="itinerary-section">
            <h3>Featured GI Products</h3>
            <div className="gi-products-list">
              {displayData.gi_products.map((product: any, index: number) => (
                <div key={index} className="gi-product-item">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  {product.workshop && (
                    <div className="workshop-info">
                      <Users size={14} />
                      <span>Workshop available</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {displayData.recommendations && (
          <div className="itinerary-section">
            <h3>Recommendations</h3>
            <div className="recommendations-list">
              {Array.isArray(displayData.recommendations) ? (
                displayData.recommendations.map((rec: any, index: number) => (
                  <div key={index} className="recommendation-item">
                    <Star size={16} />
                    <span>{typeof rec === 'string' ? rec : rec.text}</span>
                  </div>
                ))
              ) : (
                <p>{displayData.recommendations}</p>
              )}
            </div>
          </div>
        )}

        {displayData.estimated_cost && (
          <div className="itinerary-section">
            <h3>Estimated Cost</h3>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span className="cost-label">Total Estimated Cost:</span>
                <span className="cost-value">₹{displayData.estimated_cost}</span>
              </div>
            </div>
          </div>
        )}

        {/* Fallback for any other format */}
        {!displayData.description && !displayData.days && !displayData.gi_products && (
          <div className="itinerary-section">
            <h3>Generated Itinerary</h3>
            <div className="raw-content">
              <pre>{JSON.stringify(itinerary, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>

      <div className="itinerary-actions">
        <button className="action-btn primary">Save Itinerary</button>
        <button className="action-btn secondary">Share Journey</button>
        <button className="action-btn secondary">Download PDF</button>
      </div>
    </div>
  );
}

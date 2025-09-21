"use client";

import React from 'react';
import { Award, Calendar, Users, TrendingUp, MapPin, Star } from 'lucide-react';

interface ExpandedDetailsProps {
  product: {
    certification?: string;
    yearRegistered?: number;
    significance?: string;
    techniques?: string[];
    economicImpact?: string;
    culturalImportance?: string;
    seasonality?: string;
    artisanCommunities?: string[];
    exportMarkets?: string[];
    awards?: string[];
  };
}

const ExpandedDetails: React.FC<ExpandedDetailsProps> = ({ product }) => {
  return (
    <div className="expanded-details">
      {/* Certification and Registration */}
      {product.certification && (
        <div className="detail-section">
          <div className="detail-header">
            <Award size={18} />
            <h4>GI Certification</h4>
          </div>
          <p>{product.certification}</p>
          {product.yearRegistered && (
            <span className="registration-year">
              <Calendar size={14} />
              Registered in {product.yearRegistered}
            </span>
          )}
        </div>
      )}

      {/* Cultural Significance */}
      {product.significance && (
        <div className="detail-section">
          <div className="detail-header">
            <Star size={18} />
            <h4>Cultural Significance</h4>
          </div>
          <p>{product.significance}</p>
        </div>
      )}

      {/* Traditional Techniques */}
      {product.techniques && product.techniques.length > 0 && (
        <div className="detail-section">
          <div className="detail-header">
            <Users size={18} />
            <h4>Traditional Techniques</h4>
          </div>
          <ul className="technique-list">
            {product.techniques.map((technique, index) => (
              <li key={index}>{technique}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Economic Impact */}
      {product.economicImpact && (
        <div className="detail-section">
          <div className="detail-header">
            <TrendingUp size={18} />
            <h4>Economic Impact</h4>
          </div>
          <p>{product.economicImpact}</p>
        </div>
      )}

      {/* Artisan Communities */}
      {product.artisanCommunities && product.artisanCommunities.length > 0 && (
        <div className="detail-section">
          <div className="detail-header">
            <Users size={18} />
            <h4>Artisan Communities</h4>
          </div>
          <div className="community-tags">
            {product.artisanCommunities.map((community, index) => (
              <span key={index} className="community-tag">{community}</span>
            ))}
          </div>
        </div>
      )}

      {/* Export Markets */}
      {product.exportMarkets && product.exportMarkets.length > 0 && (
        <div className="detail-section">
          <div className="detail-header">
            <MapPin size={18} />
            <h4>Export Markets</h4>
          </div>
          <div className="market-tags">
            {product.exportMarkets.map((market, index) => (
              <span key={index} className="market-tag">{market}</span>
            ))}
          </div>
        </div>
      )}

      {/* Awards and Recognition */}
      {product.awards && product.awards.length > 0 && (
        <div className="detail-section">
          <div className="detail-header">
            <Award size={18} />
            <h4>Awards & Recognition</h4>
          </div>
          <ul className="award-list">
            {product.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Seasonality */}
      {product.seasonality && (
        <div className="detail-section">
          <div className="detail-header">
            <Calendar size={18} />
            <h4>Best Time to Experience</h4>
          </div>
          <p>{product.seasonality}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandedDetails;

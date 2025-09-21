"use client";

import React from 'react';
import { MapPin, TrendingUp, Users } from 'lucide-react';
import StatBadge from '../ui/StatBadge';
import ExpandedDetails from './ExpandedDetails';
import { GIProduct } from '../../utils/giProductsData';

interface GICardProps {
  product: GIProduct;
  onExpand?: (productId: string) => void;
  isExpanded?: boolean;
}

const GICard: React.FC<GICardProps> = ({ product, onExpand, isExpanded }) => {
  return (
    <div className="folklore-card group">
      {/* Decorative border patterns */}
      <div className="border-pattern">
        <div className="pattern-line"></div>
      </div>
      
      {/* Image with overlay */}
      <div className="image-container">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="image-placeholder">
            <span className="placeholder-icon">🏺</span>
            <span className="placeholder-text">{product.name}</span>
          </div>
        )}
        <div className="cultural-overlay">
          <span className="heritage-badge">{product.heritage}</span>
        </div>
      </div>
      
      {/* Content with stats */}
      <div className="card-content">
        <h3 className="product-title">{product.name}</h3>
        <div className="location-info">
          <MapPin size={16} />
          <span>{product.district}, Karnataka</span>
        </div>
        
        <div className="cultural-story">
          <p>"{product.story}"</p>
        </div>
        
        <div className="stats-grid">
          {product.exportValue && (
            <StatBadge 
              icon={<TrendingUp />} 
              label="Export Value" 
              value={product.exportValue} 
            />
          )}
          {product.artisans && (
            <StatBadge 
              icon={<Users />} 
              label="Artisans" 
              value={product.artisans} 
            />
          )}
        </div>
        
        {isExpanded && (
          <ExpandedDetails product={product} />
        )}
      </div>
    </div>
  );
};

export default GICard;
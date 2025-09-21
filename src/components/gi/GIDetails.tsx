"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Award, Users, TrendingUp, Star } from 'lucide-react';
import { GIProduct } from '../../utils/giProductsData';
import StatBadge from '../ui/StatBadge';
import ExpandedDetails from './ExpandedDetails';
import Loading from '../common/Loading';

interface GIDetailsProps {
  productId: string;
  product?: GIProduct;
}

export default function GIDetails({ productId, product: initialProduct }: GIDetailsProps) {
  const [product, setProduct] = useState<GIProduct | null>(initialProduct || null);
  const [loading, setLoading] = useState(!initialProduct);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!initialProduct && productId) {
      fetchProductDetails();
    }
  }, [productId, initialProduct]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // TODO: Replace with actual API call when backend is ready
      // const response = await apiService.getGIProductById(productId);
      // setProduct(response.data);
      
      // For now, simulate API call
      setTimeout(() => {
        setLoading(false);
        // This would come from the API
      }, 1000);
      
    } catch (err) {
      console.error('Error fetching product details:', err);
      setError('Failed to load product details');
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h3>Error Loading Product</h3>
          <p>{error}</p>
          <button onClick={fetchProductDetails} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h3>Product Not Found</h3>
          <p>The requested GI product could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gi-details-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="hero-content">
            <div className="product-info">
              <div className="product-header">
                <span className="heritage-badge">{product.heritage}</span>
                <h1 className="product-title">{product.name}</h1>
                <div className="product-meta">
                  <div className="location-info">
                    <MapPin size={18} />
                    <span>{product.district}, Karnataka</span>
                  </div>
                  <div className="category-info">
                    <Star size={18} />
                    <span>{product.category}</span>
                  </div>
                  {product.yearRegistered && (
                    <div className="registration-info">
                      <Calendar size={18} />
                      <span>GI Registered: {product.yearRegistered}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="product-description">
                <p>{product.description}</p>
              </div>

              <div className="product-story">
                <h3>Heritage Story</h3>
                <p>"{product.story}"</p>
              </div>

              {/* Stats Grid */}
              <div className="stats-section">
                <h3>Key Statistics</h3>
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
                  {product.isGiTagged && (
                    <StatBadge 
                      icon={<Award />} 
                      label="Status" 
                      value="GI Tagged" 
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="product-visual">
              {product.image ? (
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
              ) : (
                <div className="product-placeholder">
                  <span className="placeholder-icon">🏺</span>
                  <span className="placeholder-text">{product.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="product-details">
        <div className="container">
          <ExpandedDetails product={product} />
        </div>
      </section>
    </div>
  );
}

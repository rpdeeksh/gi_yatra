"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu, X, Search, Map, Compass } from 'lucide-react';
import { karnatakaGIProducts, getDistinctDistricts } from '../utils/giProductsData';
import { useBackendData } from '../hooks/useBackendData';

// Featured products for homepage
const featuredGIProducts = karnatakaGIProducts.slice(0, 6);
const totalDistricts = getDistinctDistricts().length;

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchDestination, setSearchDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const router = useRouter();
  const { districts } = useBackendData();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create search params
    const params = new URLSearchParams();
    if (searchDestination) params.set('destination', searchDestination);
    if (startDate) params.set('startDate', startDate);
    if (endDate) params.set('endDate', endDate);
    
    // Navigate to search page with params
    router.push(`/search?${params.toString()}`);
  };

  const handleQuickOption = (duration: string) => {
    const params = new URLSearchParams();
    params.set('duration', duration);
    if (searchDestination) params.set('destination', searchDestination);
    
    router.push(`/search?${params.toString()}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-page">
      {/* Hero Section with Navigation */}
      <section className="hero-section">
        {/* Navigation Header */}
        <header className="hero-navigation">
          <div className="container">
            <div className="nav-content">
              {/* Logo */}
              <Link href="/" className="hero-logo">
                <Image
                  src="/icons/logo.png"
                  alt="GI Yatra Logo"
                  width={50}
                  height={50}
                  className="logo-image"
                  priority
                />
                <div className="logo-text">
                  <span className="logo-main">GI Yatra</span>
                  <span className="logo-tagline">Heritage Journey</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="desktop-nav">
                <Link href="/explorer" className="nav-link">
                  <Compass size={18} />
                  <span>Explore GI</span>
                </Link>
                <Link href="/search" className="nav-link">
                  <Search size={18} />
                  <span>Search</span>
                </Link>
                <Link href="/itinerary/sample" className="nav-link">
                  <Map size={18} />
                  <span>My Journey</span>
                </Link>
              </nav>

              {/* CTA Button */}
              <div className="nav-cta">
                <Link href="/search" className="cta-button">
                  Plan Journey
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="mobile-nav">
                <Link href="/explorer" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  <Compass size={20} />
                  <span>Explore GI Products</span>
                </Link>
                <Link href="/search" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  <Search size={20} />
                  <span>Search & Plan</span>
                </Link>
                <Link href="/itinerary/sample" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  <Map size={20} />
                  <span>My Journey</span>
                </Link>
                <div className="mobile-cta">
                  <Link href="/search" className="mobile-cta-button" onClick={() => setIsMenuOpen(false)}>
                    Start Your Cultural Journey
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="hero-background">
          <div className="mandala-overlay"></div>
          <div className="paisley-pattern"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-main">GI Yatra</span>
              <span className="title-subtitle">Discover India through its GI Treasures</span>
            </h1>
            <p className="hero-description">
              Embark on a cultural journey through India's Geographical Indication treasures. 
              Experience authentic crafts, taste traditional flavors, and connect with the artisans 
              who keep our heritage alive.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-icon">⭐</span>
                <span className="stat-number">{karnatakaGIProducts.length}+</span>
                <span className="stat-label">GI Products</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">👥</span>
                <span className="stat-number">2L+</span>
                <span className="stat-label">Artisans</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🌍</span>
                <span className="stat-number">{totalDistricts}</span>
                <span className="stat-label">Districts</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="cultural-illustration">
              <div className="illustration-frame">
                <div className="pottery-icon">🏺</div>
                <div className="textile-icon">🧵</div>
                <div className="craft-icon">🎨</div>
                <div className="spice-icon">🌶️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Planner Section */}
      <section className="search-planner-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heritage-heading">Plan Your Cultural Journey</h2>
            <p>Discover GI treasures and create personalized itineraries</p>
          </div>
          
          <div className="search-container">
            <form className="cultural-search-form" onSubmit={handleSearchSubmit}>
              <div className="form-header">
                <h2>Plan Your Cultural Journey</h2>
                <p>Discover GI treasures along your path</p>
              </div>
              
              <div className="search-inputs">
                <div className="input-group">
                  <label>📍 Destination</label>
                  <input 
                    type="text" 
                    placeholder="Enter location in Karnataka" 
                    value={searchDestination}
                    onChange={(e) => setSearchDestination(e.target.value)}
                    list="districts-list"
                  />
                  <datalist id="districts-list">
                    {districts.map(district => (
                      <option key={district} value={district} />
                    ))}
                  </datalist>
                </div>
                
                <div className="input-group">
                  <label>📅 Travel Dates</label>
                  <div className="date-inputs">
                    <input 
                      type="date" 
                      placeholder="From" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input 
                      type="date" 
                      placeholder="To" 
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="quick-options">
                  <button type="button" className="quick-btn" onClick={() => handleQuickOption('1-day')}>1-Day Journey</button>
                  <button type="button" className="quick-btn" onClick={() => handleQuickOption('2-day')}>2-Day Experience</button>
                  <button type="button" className="quick-btn" onClick={() => handleQuickOption('weekend')}>Weekend Trip</button>
                </div>
                
                <button type="submit" className="generate-btn">
                  Generate My Cultural Journey ✨
                </button>
              </div>
            </form>
            
            <div className="search-features">
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <h3>Smart Location</h3>
                <p>Auto-detect or manually select your destination in Karnataka</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📅</span>
                <h3>Flexible Dates</h3>
                <p>Choose custom dates or quick 1-day/2-day itinerary options</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <h3>AI-Powered</h3>
                <p>Generate personalized itineraries based on your interests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured GI Products */}
      <section className="featured-gi-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heritage-heading">Featured GI Treasures</h2>
            <p>Discover the stories behind Karnataka's most celebrated products</p>
          </div>
          
          <div className="gi-showcase">
            {featuredGIProducts.map((product) => (
              <div key={product.id} className="folklore-card group">
                {/* Decorative border patterns */}
                <div className="border-pattern">
                  <div className="pattern-line"></div>
                </div>
                
                {/* Image with overlay */}
                <div className="image-container">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">🏺</span>
                    <span className="placeholder-text">{product.name}</span>
                  </div>
                  <div className="cultural-overlay">
                    <span className="heritage-badge">{product.heritage}</span>
                  </div>
                </div>
                
                {/* Content with stats */}
                <div className="card-content">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="location-info">
                    <span>📍</span>
                    <span>{product.district}, Karnataka</span>
                  </div>
                  
                  <div className="cultural-story">
                    <p>"{product.story}"</p>
                  </div>
                  
                  <div className="stats-grid">
                    {product.exportValue && (
                      <div className="stat-badge">
                        <span className="stat-icon">📈</span>
                        <div>
                          <span className="stat-label">Export Value</span>
                          <span className="stat-value">{product.exportValue}</span>
                        </div>
                      </div>
                    )}
                    {product.artisans && (
                      <div className="stat-badge">
                        <span className="stat-icon">👥</span>
                        <div>
                          <span className="stat-label">Artisans</span>
                          <span className="stat-value">{product.artisans}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="showcase-footer">
            <Link href="/explorer" className="explore-all-btn">
              Explore All GI Products
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heritage-heading">Your Cultural Journey in 3 Steps</h2>
            <p>Experience India's heritage through curated cultural expeditions</p>
          </div>
          
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">
                <span>1</span>
                <div className="step-decoration"></div>
              </div>
              <div className="step-content">
                <h3>Search & Discover</h3>
                <p>Enter your destination and travel dates. Our AI will find the best GI products and cultural experiences in your area.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">
                <span>2</span>
                <div className="step-decoration"></div>
              </div>
              <div className="step-content">
                <h3>Customize Your Itinerary</h3>
                <p>Review your personalized itinerary featuring authentic workshops, heritage sites, and local artisan meetings.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">
                <span>3</span>
                <div className="step-decoration"></div>
              </div>
              <div className="step-content">
                <h3>Embark on Your Journey</h3>
                <p>Follow your cultural map, meet artisans, participate in workshops, and collect stories of heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-content">
            <div className="impact-text">
              <h2 className="heritage-heading">Supporting Cultural Heritage</h2>
              <p>Every journey you take helps preserve traditional crafts and supports local artisan communities.</p>
              
              <div className="impact-stats">
                <div className="impact-item">
                  <strong>₹50L+</strong>
                  <span>Direct community contribution</span>
                </div>
                <div className="impact-item">
                  <strong>2,500+</strong>
                  <span>Artisans supported</span>
                </div>
                <div className="impact-item">
                  <strong>15+</strong>
                  <span>Traditional crafts preserved</span>
                </div>
              </div>
            </div>
            
            <div className="impact-visual">
              <div className="artisan-circle">
                <div className="artisan-icon">👨‍🎨</div>
                <div className="craft-icons">
                  <span>🏺</span>
                  <span>🧵</span>
                  <span>🎭</span>
                  <span>🖼️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

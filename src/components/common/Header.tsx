"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, Map, Compass } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="folklore-header">
      <div className="header-background">
        <div className="mandala-pattern"></div>
      </div>
      
      <div className="container">
        <div className="header-content">
          {/* Logo Section */}
          <Link href="/" className="logo-section">
            <div className="logo-container">
              <Image
                src="/icons/logo.png"
                alt="GI Yatra Logo"
                width={40}
                height={40}
                className="logo-image"
                priority
              />
              <div className="logo-text">
                <span className="logo-main">GI Yatra</span>
                <span className="logo-tagline">Heritage Journey</span>
              </div>
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
          <div className="header-cta">
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
  );
}

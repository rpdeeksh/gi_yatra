"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="folklore-footer">
      <div className="footer-background">
        <div className="paisley-pattern"></div>
      </div>
      
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image
                src="/icons/logo.png"
                alt="GI Yatra Logo"
                width={50}
                height={50}
                className="footer-logo-image"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">GI Yatra</span>
                <span className="footer-brand-tagline">Discover India's Heritage</span>
              </div>
            </Link>
            <p className="footer-description">
              Embark on cultural journeys through India's Geographical Indication treasures. 
              Connect with artisans, experience authentic crafts, and preserve our heritage.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><Link href="/explorer">GI Products</Link></li>
              <li><Link href="/search">Search & Plan</Link></li>
              <li><Link href="/itinerary/sample">Sample Journeys</Link></li>
              <li><Link href="/gi/textiles">Textiles</Link></li>
              <li><Link href="/gi/handicrafts">Handicrafts</Link></li>
              <li><Link href="/gi/agricultural">Agricultural</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/about">About GI Yatra</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/artisans">For Artisans</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@giyatra.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 80 1234 5678</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
            <div className="newsletter">
              <h4>Heritage Newsletter</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 GI Yatra. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

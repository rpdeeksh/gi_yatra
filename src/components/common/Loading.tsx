"use client";

import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <Image
            src="/icons/logo.png"
            alt="GI Yatra Logo"
            width={80}
            height={80}
            className="loading-logo-image"
          />
          <div className="spinner-heritage"></div>
        </div>
        <div className="loading-text">
          <h3>GI Yatra</h3>
          <p>Discovering heritage treasures...</p>
        </div>
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
      <div className="loading-background">
        <div className="mandala-pattern"></div>
        <div className="paisley-pattern"></div>
      </div>
    </div>
  );
}

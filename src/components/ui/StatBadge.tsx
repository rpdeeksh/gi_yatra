"use client";

import React from 'react';

interface StatBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  className?: string;
}

const StatBadge: React.FC<StatBadgeProps> = ({ icon, label, value, className = '' }) => {
  return (
    <div className={`stat-badge ${className}`}>
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-content">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
};

export default StatBadge;

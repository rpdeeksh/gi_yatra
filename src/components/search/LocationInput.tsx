"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ 
  value, 
  onChange, 
  placeholder = "Enter location in Karnataka",
  className = '' 
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sample Karnataka locations for autocomplete
  const karnatakaLocations = [
    'Bengaluru', 'Mysuru', 'Hampi', 'Coorg (Kodagu)', 'Mangalore', 'Udupi',
    'Chikmagalur', 'Hassan', 'Shivamogga', 'Davangere', 'Hospet', 'Badami',
    'Bijapur', 'Belgaum', 'Hubli', 'Dharwad', 'Gulbarga', 'Raichur',
    'Chitradurga', 'Tumkur', 'Mandya', 'Kolar', 'Banashankari', 'Sringeri'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    
    if (inputValue.length > 0) {
      const filtered = karnatakaLocations.filter(location =>
        location.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    // Delay hiding suggestions to allow clicking
    setTimeout(() => setShowSuggestions(false), 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`location-input-container ${className}`}>
      <label className="input-label">
        <MapPin size={18} />
        Destination
      </label>
      
      <div className="location-input-wrapper" ref={inputRef}>
        <div className="input-with-icon">
          <Search size={20} className="input-icon" />
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => value.length > 0 && setShowSuggestions(true)}
            placeholder={placeholder}
            className="location-input"
            autoComplete="off"
          />
        </div>
        
        {showSuggestions && suggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <MapPin size={16} />
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInput;

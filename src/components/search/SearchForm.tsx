"use client";

import React, { useState } from 'react';
import LocationInput from './LocationInput';
import { Calendar, Clock } from 'lucide-react';

interface SearchFormProps {
  onSubmit: (formData: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    location: '',
    fromDate: '',
    toDate: '',
    duration: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return (
    <form className="cultural-search-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Plan Your Cultural Journey</h2>
        <p>Discover GI treasures along your path</p>
      </div>
      
      <LocationInput 
        value={formData.location}
        onChange={(value) => setFormData({...formData, location: value})}
      />
      
      {/* Date Range Picker */}
      <div className="date-range-container">
        <label className="input-label">
          <Calendar size={18} />
          Travel Dates
        </label>
        <div className="date-inputs">
          <input 
            type="date" 
            value={formData.fromDate}
            onChange={(e) => setFormData({...formData, fromDate: e.target.value})}
            placeholder="From" 
            className="date-input"
          />
          <input 
            type="date" 
            value={formData.toDate}
            onChange={(e) => setFormData({...formData, toDate: e.target.value})}
            placeholder="To" 
            className="date-input"
          />
        </div>
      </div>
      
      {/* Quick Options */}
      <div className="quick-options-container">
        <label className="input-label">
          <Clock size={18} />
          Quick Options
        </label>
        <div className="quick-options">
          {['1-Day Journey', '2-Day Experience', 'Weekend Trip'].map((option) => (
            <button 
              key={option}
              type="button"
              className={`quick-btn ${formData.duration === option ? 'active' : ''}`}
              onClick={() => setFormData({...formData, duration: option})}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      <button type="submit" className="generate-btn">
        Generate My Cultural Journey ✨
      </button>
    </form>
  );
};

export default SearchForm;
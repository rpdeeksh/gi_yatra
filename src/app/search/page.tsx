"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, MapPin, Search, Loader, AlertCircle, ChevronDown, X, Plus } from 'lucide-react';
import { useBackendData } from '../../hooks/useBackendData';
import { BackendGIProduct, DistrictInfo } from '../../utils/types';
import ItineraryDisplay from '../../components/itinerary/ItineraryDisplay';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const {
    districts,
    loading: districtsLoading,
    error: backendError,
    getDistrictInfo,
    generateItinerary,
    loadingDistrict,
    districtInfo,
    generatingItinerary
  } = useBackendData();

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<BackendGIProduct[]>([]);
  const [itineraryNotes, setItineraryNotes] = useState('');
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [districtSearch, setDistrictSearch] = useState('');
  const [generatedItinerary, setGeneratedItinerary] = useState(null);

  // Handle URL parameters from homepage
  useEffect(() => {
    const destination = searchParams.get('destination');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const duration = searchParams.get('duration');

    if (destination) {
      setSelectedDistrict(destination);
      setDistrictSearch(destination);
    }

    if (startDate && endDate) {
      setTravelDates(`${startDate} to ${endDate}`);
    } else if (duration) {
      setTravelDates(`${duration} trip`);
    }
  }, [searchParams]);

  // Filter districts based on search
  const filteredDistricts = districts.filter(district =>
    district.toLowerCase().includes(districtSearch.toLowerCase())
  );

  // Fetch district info when district is selected
  useEffect(() => {
    if (selectedDistrict) {
      getDistrictInfo(selectedDistrict);
      setShowProductSelector(true);
    }
  }, [selectedDistrict, getDistrictInfo]);

  const handleDistrictSelect = (district: string) => {
    setSelectedDistrict(district);
    setDistrictSearch(district);
    setShowDistrictDropdown(false);
    setSelectedProducts([]);
  };

  const handleProductToggle = (product: BackendGIProduct) => {
    setSelectedProducts(prev => {
      const exists = prev.find(p => p.name === product.name);
      if (exists) {
        return prev.filter(p => p.name !== product.name);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleGenerateItinerary = async () => {
    if (!selectedDistrict || !travelDates || selectedProducts.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const request = {
        district: selectedDistrict,
        travel_dates: travelDates,
        gi_products: selectedProducts,
        itinerary_notes: itineraryNotes
      };

      const result = await generateItinerary(request);
      setGeneratedItinerary(result);
    } catch (error) {
      console.error('Failed to generate itinerary:', error);
    }
  };

  return (
    <div className="search-page">
      <div className="container">
        {/* Header */}
        <div className="search-header">
          <h1 className="heritage-heading">Plan Your Cultural Journey</h1>
          <p>Create a personalized itinerary featuring Karnataka's GI treasures</p>
        </div>

        <div className="search-content">
          {/* Planning Form */}
          <div className="planning-form">
            <div className="form-card">
              <h2>Journey Details</h2>
              
              {/* District Selection */}
              <div className="form-group">
                <label className="form-label">
                  <MapPin size={18} />
                  Select District *
                </label>
                <div className="district-selector">
                  <div 
                    className="district-input"
                    onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
                  >
                    <input
                      type="text"
                      placeholder="Choose a district in Karnataka"
                      value={districtSearch}
                      onChange={(e) => setDistrictSearch(e.target.value)}
                      onFocus={() => setShowDistrictDropdown(true)}
                    />
                    <ChevronDown className={`dropdown-icon ${showDistrictDropdown ? 'open' : ''}`} />
                  </div>
                  
                  {showDistrictDropdown && (
                    <div className="district-dropdown">
                      {districtsLoading ? (
                        <div className="dropdown-loading">
                          <Loader className="spinner" />
                          <span>Loading districts...</span>
                        </div>
                      ) : filteredDistricts.length > 0 ? (
                        filteredDistricts.map(district => (
                          <div
                            key={district}
                            className={`district-option ${selectedDistrict === district ? 'selected' : ''}`}
                            onClick={() => handleDistrictSelect(district)}
                          >
                            {district}
                          </div>
                        ))
                      ) : (
                        <div className="no-results">No districts found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Travel Dates */}
              <div className="form-group">
                <label className="form-label">
                  <Calendar size={18} />
                  Travel Dates *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Dec 15-20, 2024 or Weekend trip"
                  value={travelDates}
                  onChange={(e) => setTravelDates(e.target.value)}
                  className="date-input"
                />
              </div>

              {/* GI Products Selection */}
              {selectedDistrict && (
                <div className="form-group">
                  <label className="form-label">
                    <Search size={18} />
                    Select GI Products *
                  </label>
                  
                  {loadingDistrict ? (
                    <div className="loading-products">
                      <Loader className="spinner" />
                      <span>Loading GI products for {selectedDistrict}...</span>
                    </div>
                  ) : districtInfo?.gi_products ? (
                    <div className="products-selector">
                      <div className="products-grid">
                        {districtInfo.gi_products.map((product, index) => (
                          <div
                            key={`${product.name}-${index}`}
                            className={`product-card ${selectedProducts.find(p => p.name === product.name) ? 'selected' : ''}`}
                            onClick={() => handleProductToggle(product)}
                          >
                            <div className="product-content">
                              <h4>{product.name}</h4>
                              <p>{product.description}</p>
                            </div>
                            <div className="product-selector">
                              {selectedProducts.find(p => p.name === product.name) ? (
                                <div className="selected-indicator">✓</div>
                              ) : (
                                <Plus size={16} />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {selectedProducts.length > 0 && (
                        <div className="selected-products">
                          <h4>Selected Products ({selectedProducts.length})</h4>
                          <div className="selected-list">
                            {selectedProducts.map((product, index) => (
                              <div key={`selected-${product.name}-${index}`} className="selected-item">
                                <span>{product.name}</span>
                                <button
                                  onClick={() => handleProductToggle(product)}
                                  className="remove-btn"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="no-products">
                      <AlertCircle size={20} />
                      <span>No GI products found for this district</span>
                    </div>
                  )}
                </div>
              )}

              {/* Additional Notes */}
              <div className="form-group">
                <label className="form-label">Additional Notes (Optional)</label>
                <textarea
                  placeholder="Any specific preferences, interests, or requirements for your journey..."
                  value={itineraryNotes}
                  onChange={(e) => setItineraryNotes(e.target.value)}
                  className="notes-textarea"
                  rows={3}
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateItinerary}
                disabled={!selectedDistrict || !travelDates || selectedProducts.length === 0 || generatingItinerary}
                className="generate-btn"
              >
                {generatingItinerary ? (
                  <>
                    <Loader className="spinner" />
                    Generating Your Journey...
                  </>
                ) : (
                  'Generate Cultural Itinerary ✨'
                )}
              </button>

              {/* Error Display */}
              {backendError && (
                <div className="error-message">
                  <AlertCircle size={18} />
                  <span>{backendError}</span>
                </div>
              )}
            </div>
          </div>

          {/* Generated Itinerary */}
          {generatedItinerary && (
            <ItineraryDisplay 
              itinerary={generatedItinerary}
              district={selectedDistrict}
              travelDates={travelDates}
            />
          )}
        </div>
      </div>
    </div>
  );
}

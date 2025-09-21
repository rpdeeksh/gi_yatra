"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, MapPin, Grid, List, Loader, AlertCircle } from 'lucide-react';
import { karnatakaGIProducts, getDistinctDistricts, getDistinctCategories, getDistinctTypes, searchProducts } from '../../utils/giProductsData';
import { useBackendData } from '../../hooks/useBackendData';
import GICard from '../../components/gi/GICard';

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [backendProducts, setBackendProducts] = useState<any[]>([]);
  const [showBackendData, setShowBackendData] = useState(false);

  const { 
    districts: backendDistricts, 
    loading: districtsLoading, 
    error: backendError,
    getDistrictInfo,
    loadingDistrict,
    districtInfo
  } = useBackendData();

  const districts = getDistinctDistricts();
  const categories = getDistinctCategories();
  const types = getDistinctTypes();

  // Fetch backend data when district is selected for backend view
  useEffect(() => {
    if (showBackendData && selectedDistrict) {
      getDistrictInfo(selectedDistrict).then(info => {
        if (info) {
          setBackendProducts(info.gi_products || []);
        }
      });
    }
  }, [showBackendData, selectedDistrict, getDistrictInfo]);

  const filteredProducts = useMemo(() => {
    if (showBackendData) {
      return backendProducts.filter(product => {
        if (searchQuery) {
          return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 product.description.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
      });
    }

    let products = karnatakaGIProducts;

    // Apply search filter
    if (searchQuery) {
      products = searchProducts(searchQuery);
    }

    // Apply district filter
    if (selectedDistrict) {
      products = products.filter(product => 
        product.district.toLowerCase() === selectedDistrict.toLowerCase()
      );
    }

    // Apply category filter
    if (selectedCategory) {
      products = products.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply type filter
    if (selectedType) {
      products = products.filter(product => product.type === selectedType);
    }

    return products;
  }, [searchQuery, selectedDistrict, selectedCategory, selectedType, showBackendData, backendProducts]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('');
    setSelectedCategory('');
    setSelectedType('');
    setBackendProducts([]);
  };

  const handleDataSourceToggle = () => {
    setShowBackendData(!showBackendData);
    setSelectedDistrict('');
    setBackendProducts([]);
  };

  return (
    <div className="explorer-page">
      {/* Page Header */}
      <section className="explorer-header">
        <div className="container">
          <div className="header-content">
            <h1 className="heritage-heading">Explore Karnataka's GI Treasures</h1>
            <p className="header-description">
              Discover {showBackendData ? 'live backend' : karnatakaGIProducts.length} authentic Geographical Indication products 
              from across Karnataka, each telling a unique story of heritage and craftsmanship.
            </p>
            
            {/* Data Source Toggle */}
            <div className="data-source-toggle">
              <button 
                className={`toggle-btn ${!showBackendData ? 'active' : ''}`}
                onClick={() => setShowBackendData(false)}
              >
                📚 Local Data ({karnatakaGIProducts.length} products)
              </button>
              <button 
                className={`toggle-btn ${showBackendData ? 'active' : ''}`}
                onClick={handleDataSourceToggle}
              >
                🌐 Backend API ({backendDistricts.length} districts)
              </button>
            </div>

            {/* Backend Status */}
            {backendError && (
              <div className="backend-status error">
                <AlertCircle size={18} />
                <span>Backend Error: {backendError}</span>
              </div>
            )}
            
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{showBackendData ? backendDistricts.length : districts.length}</span>
                <span className="stat-label">Districts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{showBackendData ? '?' : categories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{showBackendData ? backendProducts.length : karnatakaGIProducts.length}</span>
                <span className="stat-label">GI Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-filters-section">
        <div className="container">
          <div className="search-filters-container">
            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-input-wrapper">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search GI products, districts, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="filter-controls">
              <button 
                className={`filter-toggle ${showFilters ? 'active' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                Filters
              </button>
              
              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="filter-panel">
              <div className="filter-row">
                <div className="filter-group">
                  <label>District</label>
                  <select 
                    value={selectedDistrict} 
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Districts</option>
                    {(showBackendData ? backendDistricts : districts).map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  {districtsLoading && showBackendData && (
                    <div className="filter-loading">
                      <Loader size={14} className="spinner" />
                    </div>
                  )}
                </div>

                {!showBackendData && (
                  <>
                    <div className="filter-group">
                      <label>Category</label>
                      <select 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="filter-select"
                      >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div className="filter-group">
                      <label>Type</label>
                      <select 
                        value={selectedType} 
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="filter-select"
                      >
                        <option value="">All Types</option>
                        {types.map(type => (
                          <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <button onClick={clearFilters} className="clear-filters-btn">
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="results-summary">
            <span className="results-count">
              Showing {filteredProducts.length} of {showBackendData ? backendProducts.length : karnatakaGIProducts.length} products
              {showBackendData && selectedDistrict && ` from ${selectedDistrict}`}
            </span>
            
            {loadingDistrict && showBackendData && (
              <div className="loading-indicator">
                <Loader size={16} className="spinner" />
                <span>Loading products for {loadingDistrict}...</span>
              </div>
            )}
            
            {(searchQuery || selectedDistrict || selectedCategory || selectedType) && (
              <div className="active-filters">
                {searchQuery && (
                  <span className="filter-tag">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery('')}>×</button>
                  </span>
                )}
                {selectedDistrict && (
                  <span className="filter-tag">
                    District: {selectedDistrict}
                    <button onClick={() => setSelectedDistrict('')}>×</button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="filter-tag">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('')}>×</button>
                  </span>
                )}
                {selectedType && (
                  <span className="filter-tag">
                    Type: {selectedType}
                    <button onClick={() => setSelectedType('')}>×</button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="products-section">
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className={`products-container ${viewMode}`}>
              {showBackendData ? (
                // Render backend products
                filteredProducts.map((product, index) => (
                  <div key={`backend-${product.name}-${index}`} className="backend-product-card folklore-card">
                    <div className="card-content">
                      <h3 className="product-title">{product.name}</h3>
                      <div className="location-info">
                        <span>📍</span>
                        <span>{selectedDistrict}, Karnataka</span>
                      </div>
                      <div className="cultural-story">
                        <p>"{product.description}"</p>
                      </div>
                      <div className="backend-badge">
                        <span>🌐 Live Data</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Render local products with full GICard component
                filteredProducts.map(product => (
                  <GICard 
                    key={product.id} 
                    product={product} 
                    onExpand={(id) => console.log('Expand product:', id)}
                  />
                ))
              )}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-content">
                <MapPin size={48} className="no-results-icon" />
                <h3>No products found</h3>
                <p>Try adjusting your search criteria or clearing filters</p>
                <button onClick={clearFilters} className="clear-filters-btn">
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Districts Overview */}
      <section className="districts-overview">
        <div className="container">
          <h2 className="heritage-heading">Explore by Districts</h2>
          <div className="districts-grid">
            {districts.map(district => {
              const districtProducts = karnatakaGIProducts.filter(p => p.district === district);
              return (
                <div 
                  key={district} 
                  className="district-card"
                  onClick={() => setSelectedDistrict(district)}
                >
                  <h3>{district}</h3>
                  <span className="product-count">{districtProducts.length} products</span>
                  <div className="district-products">
                    {districtProducts.slice(0, 3).map(product => (
                      <span key={product.id} className="product-name">
                        {product.name}
                      </span>
                    ))}
                    {districtProducts.length > 3 && (
                      <span className="more-count">
                        +{districtProducts.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// Application constants
export const APP_CONFIG = {
  NAME: 'GI Yatra',
  VERSION: '1.0.0',
  DESCRIPTION: 'Discover India\'s Geographical Indication products through immersive cultural journeys',
  AUTHOR: 'GI Yatra Team',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api'
};

export const API_ENDPOINTS = {
  GI_PRODUCTS: '/gi-products',
  ITINERARY: '/itinerary',
  LOCATION: '/location',
  USER: '/user',
  SEARCH: '/search'
};

export const GI_CATEGORIES = [
  'Textiles',
  'Handicrafts',
  'Food Products',
  'Agricultural Products',
  'Manufactured Goods',
  'Natural Goods'
];

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
  'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
  'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry',
  'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Lakshadweep', 'Andaman and Nicobar Islands'
];

export const TRAVEL_PREFERENCES = {
  BUDGET: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
  },
  TRAVEL_STYLE: {
    SOLO: 'solo',
    FAMILY: 'family',
    GROUP: 'group'
  },
  INTERESTS: [
    'Cultural Heritage',
    'Traditional Crafts',
    'Local Cuisine',
    'Historical Sites',
    'Natural Beauty',
    'Shopping',
    'Photography',
    'Adventure',
    'Spiritual',
    'Rural Tourism'
  ]
};

export const ACTIVITY_TYPES = {
  VISIT: 'visit',
  WORKSHOP: 'workshop',
  MEAL: 'meal',
  TRANSPORT: 'transport',
  SHOPPING: 'shopping'
};

export const MAP_CONFIG = {
  DEFAULT_CENTER: {
    lat: 20.5937,
    lng: 78.9629
  },
  DEFAULT_ZOOM: 6,
  MIN_ZOOM: 4,
  MAX_ZOOM: 18
};

export const BREAKPOINTS = {
  MOBILE: '768px',
  TABLET: '1024px',
  DESKTOP: '1280px'
};

export const COLORS = {
  PRIMARY: '#2563eb',
  SECONDARY: '#64748b',
  SUCCESS: '#22c55e',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#3b82f6'
};

export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  GI_PRODUCT: '/gi',
  ITINERARY: '/itinerary',
  EXPLORER: '/explorer'
};

export const LOCAL_STORAGE_KEYS = {
  USER_PREFERENCES: 'gi_yatra_user_preferences',
  SEARCH_HISTORY: 'gi_yatra_search_history',
  SAVED_ITINERARIES: 'gi_yatra_saved_itineraries'
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  API_ERROR: 'Something went wrong. Please try again.',
  LOCATION_ERROR: 'Unable to access location. Please enable location services.',
  VALIDATION_ERROR: 'Please check your input and try again.'
};

"use client";

import { useState, useEffect, useCallback } from 'react';
import { apiService } from '../services/apiService';

// Define the types based on your backend response
interface GIProduct {
  name: string;
  description: string;
}

interface DistrictInfo {
  district: string;
  gi_products: GIProduct[];
}

interface ItineraryGenerationRequest {
  destination: string;
  travel_dates: string;
}

interface UseBackendDataReturn {
  districts: string[];
  loading: boolean;
  error: string | null;
  getDistrictInfo: (districtName: string) => Promise<DistrictInfo | null>;
  generateItinerary: (request: ItineraryGenerationRequest) => Promise<any>;
  loadingDistrict: string | null;
  districtInfo: DistrictInfo | null;
  generatingItinerary: boolean;
}

// Global state to prevent multiple requests
let globalDistrictsState = {
  districts: [
    'Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Mandya', 'Hassan', 'Tumakuru',
    'Ramanagara', 'Chikkaballapur', 'Kolar', 'Chitradurga', 'Davanagere', 'Shivamogga',
    'Udupi', 'Dakshina Kannada', 'Uttara Kannada', 'Haveri', 'Dharwad', 'Belagavi',
    'Bagalkot', 'Vijayapura', 'Bidar', 'Kalaburagi', 'Raichur', 'Koppal', 'Ballari',
    'Vijayanagara', 'Chamarajanagar', 'Kodagu', 'Chikkamagaluru', 'Yadgir'
  ],
  loading: false,
  error: null as string | null,
  fetched: false
};

// Global district info cache
const districtInfoCache = new Map<string, DistrictInfo>();

// Global subscribers for state updates
const subscribers = new Set<() => void>();

const notifySubscribers = () => {
  subscribers.forEach(callback => callback());
};

// Singleton fetch function
let fetchDistrictsPromise: Promise<void> | null = null;

const fetchDistrictsOnce = async (): Promise<void> => {
  if (fetchDistrictsPromise) {
    return fetchDistrictsPromise;
  }

  if (globalDistrictsState.fetched) {
    return Promise.resolve();
  }

  fetchDistrictsPromise = (async () => {
    try {
      globalDistrictsState.loading = true;
      globalDistrictsState.error = null;
      notifySubscribers();

      console.log('Fetching districts from backend (singleton)...');
      
      const response = await apiService.getDistricts();
      
      console.log('Districts response:', response);
      
      if (response.success && response.data) {
        const fetchedDistricts = Array.isArray(response.data) ? response.data : [];
        console.log('Setting districts:', fetchedDistricts);
        
        if (fetchedDistricts.length > 0) {
          globalDistrictsState.districts = fetchedDistricts;
        } else {
          console.log('Backend returned empty districts, keeping fallback data');
        }
      } else {
        throw new Error(response.message || 'Failed to fetch districts');
      }
      
      globalDistrictsState.fetched = true;
    } catch (err) {
      console.error('Error fetching districts:', err);
      globalDistrictsState.error = err instanceof Error ? err.message : 'Failed to fetch districts';
      console.log('Using fallback districts due to error');
    } finally {
      globalDistrictsState.loading = false;
      notifySubscribers();
      fetchDistrictsPromise = null;
    }
  })();

  return fetchDistrictsPromise;
};

export function useBackendData(): UseBackendDataReturn {
  const [, forceUpdate] = useState({});
  const [loadingDistrict, setLoadingDistrict] = useState<string | null>(null);
  const [districtInfo, setDistrictInfo] = useState<DistrictInfo | null>(null);
  const [generatingItinerary, setGeneratingItinerary] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  // Force re-render when global state changes
  const triggerUpdate = useCallback(() => {
    forceUpdate({});
  }, []);

  // Subscribe to global state changes
  useEffect(() => {
    subscribers.add(triggerUpdate);
    
    // Fetch districts only once globally
    if (!globalDistrictsState.fetched && !fetchDistrictsPromise) {
      fetchDistrictsOnce();
    }
    
    return () => {
      subscribers.delete(triggerUpdate);
    };
  }, [triggerUpdate]);

  const getDistrictInfo = async (districtName: string): Promise<DistrictInfo | null> => {
    try {
      // Check cache first
      const cacheKey = districtName.toLowerCase();
      if (districtInfoCache.has(cacheKey)) {
        const cachedInfo = districtInfoCache.get(cacheKey)!;
        setDistrictInfo(cachedInfo);
        return cachedInfo;
      }

      setLoadingDistrict(districtName);
      setLocalError(null);
      
      console.log(`Fetching info for district: ${districtName}`);
      
      const response = await apiService.getDistrictInfo(cacheKey);
      
      console.log(`District ${districtName} response:`, response);
      
      if (response.success && response.data) {
        const info = response.data as DistrictInfo;
        
        // Cache the result
        districtInfoCache.set(cacheKey, info);
        
        setDistrictInfo(info);
        return info;
      } else {
        throw new Error(response.message || 'Failed to fetch district info');
      }
    } catch (err) {
      console.error(`Error fetching info for district ${districtName}:`, err);
      setLocalError(err instanceof Error ? err.message : 'Failed to fetch district info');
      return null;
    } finally {
      setLoadingDistrict(null);
    }
  };

  const generateItinerary = async (request: ItineraryGenerationRequest) => {
    try {
      setGeneratingItinerary(true);
      setLocalError(null);
      
      console.log('Generating itinerary with request:', request);
      
      const response = await apiService.generateItineraryFromBackend(request);
      
      console.log('Itinerary response:', response);
      
      if (response.success) {
        return response.data;
      } else {
        throw new Error(response.message || 'Failed to generate itinerary');
      }
    } catch (err) {
      console.error('Error generating itinerary:', err);
      setLocalError(err instanceof Error ? err.message : 'Failed to generate itinerary');
      throw err;
    } finally {
      setGeneratingItinerary(false);
    }
  };

  return {
    districts: globalDistrictsState.districts,
    loading: globalDistrictsState.loading,
    error: globalDistrictsState.error || localError,
    getDistrictInfo,
    generateItinerary,
    loadingDistrict,
    districtInfo,
    generatingItinerary
  };
}

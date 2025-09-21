"use client";

import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import { BackendGIProduct, DistrictInfo, ItineraryGenerationRequest } from '../utils/types';

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

export function useBackendData(): UseBackendDataReturn {
  const [districts, setDistricts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingDistrict, setLoadingDistrict] = useState<string | null>(null);
  const [districtInfo, setDistrictInfo] = useState<DistrictInfo | null>(null);
  const [generatingItinerary, setGeneratingItinerary] = useState(false);

  // Fetch districts on mount
  useEffect(() => {
    fetchDistricts();
  }, []);

  const fetchDistricts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getDistricts();
      
      if (response.success && response.data) {
        // Assuming the backend returns an array of district names
        setDistricts(Array.isArray(response.data) ? response.data : []);
      } else {
        throw new Error(response.message || 'Failed to fetch districts');
      }
    } catch (err) {
      console.error('Error fetching districts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch districts');
      // Fallback to local data if backend fails
      setDistricts([
        'Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Mandya', 'Hassan', 'Tumakuru',
        'Ramanagara', 'Chikkaballapur', 'Kolar', 'Chitradurga', 'Davanagere', 'Shivamogga',
        'Udupi', 'Dakshina Kannada', 'Uttara Kannada', 'Haveri', 'Dharwad', 'Belagavi',
        'Bagalkot', 'Vijayapura', 'Bidar', 'Kalaburagi', 'Raichur', 'Koppal', 'Ballari',
        'Vijayanagara', 'Chamarajanagar', 'Kodagu', 'Chikkamagaluru', 'Yadgir'
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getDistrictInfo = async (districtName: string): Promise<DistrictInfo | null> => {
    try {
      setLoadingDistrict(districtName);
      setError(null);
      
      const response = await apiService.getDistrictInfo(districtName);
      
      if (response.success && response.data) {
        const info = response.data as DistrictInfo;
        setDistrictInfo(info);
        return info;
      } else {
        throw new Error(response.message || 'Failed to fetch district info');
      }
    } catch (err) {
      console.error(`Error fetching info for district ${districtName}:`, err);
      setError(err instanceof Error ? err.message : 'Failed to fetch district info');
      return null;
    } finally {
      setLoadingDistrict(null);
    }
  };

  const generateItinerary = async (request: ItineraryGenerationRequest) => {
    try {
      setGeneratingItinerary(true);
      setError(null);
      
      const response = await apiService.generateItineraryFromBackend(request);
      
      if (response.success) {
        return response.data;
      } else {
        throw new Error(response.message || 'Failed to generate itinerary');
      }
    } catch (err) {
      console.error('Error generating itinerary:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate itinerary');
      throw err;
    } finally {
      setGeneratingItinerary(false);
    }
  };

  return {
    districts,
    loading,
    error,
    getDistrictInfo,
    generateItinerary,
    loadingDistrict,
    districtInfo,
    generatingItinerary
  };
}

// Custom hook for location management
import { useState, useEffect } from 'react';

interface Location {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

interface UseLocationReturn {
  currentLocation: Location | null;
  loading: boolean;
  error: string | null;
  getCurrentLocation: () => Promise<void>;
  searchLocation: (query: string) => Promise<Location[]>;
  getLocationDetails: (lat: number, lng: number) => Promise<Location>;
}

export function useLocation(): UseLocationReturn {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser');
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const location: Location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      setCurrentLocation(location);
    } catch (err) {
      setError('Failed to get current location');
    } finally {
      setLoading(false);
    }
  };

  const searchLocation = async (query: string): Promise<Location[]> => {
    try {
      // Geocoding API call would go here
      return [];
    } catch (err) {
      throw new Error('Failed to search location');
    }
  };

  const getLocationDetails = async (lat: number, lng: number): Promise<Location> => {
    try {
      // Reverse geocoding API call would go here
      return { lat, lng };
    } catch (err) {
      throw new Error('Failed to get location details');
    }
  };

  return {
    currentLocation,
    loading,
    error,
    getCurrentLocation,
    searchLocation,
    getLocationDetails
  };
}

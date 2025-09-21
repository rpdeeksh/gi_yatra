// Custom hook for itinerary management
import { useState, useEffect } from 'react';

interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  type: 'visit' | 'workshop' | 'meal' | 'transport' | 'shopping';
  giProducts?: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

interface Itinerary {
  id: string;
  title: string;
  description: string;
  duration: number;
  days: ItineraryDay[];
  totalCost?: number;
  preferences: {
    interests: string[];
    budget: 'low' | 'medium' | 'high';
    travelStyle: 'solo' | 'family' | 'group';
  };
}

interface UseItineraryReturn {
  itinerary: Itinerary | null;
  loading: boolean;
  error: string | null;
  generateItinerary: (preferences: any) => Promise<void>;
  saveItinerary: (itinerary: Itinerary) => Promise<void>;
  getItineraryById: (id: string) => Promise<void>;
  updateActivity: (dayIndex: number, activityId: string, updates: Partial<Activity>) => void;
  addActivity: (dayIndex: number, activity: Activity) => void;
  removeActivity: (dayIndex: number, activityId: string) => void;
}

export function useItinerary(): UseItineraryReturn {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateItinerary = async (preferences: any) => {
    setLoading(true);
    setError(null);

    try {
      // AI-powered itinerary generation API call would go here
      const generatedItinerary: Itinerary = {
        id: `itinerary-${Date.now()}`,
        title: 'Generated GI Yatra',
        description: 'Your personalized GI exploration journey',
        duration: preferences.duration || 3,
        days: [],
        preferences
      };

      setItinerary(generatedItinerary);
    } catch (err) {
      setError('Failed to generate itinerary');
    } finally {
      setLoading(false);
    }
  };

  const saveItinerary = async (itinerary: Itinerary) => {
    try {
      // Save to backend API
      console.log('Saving itinerary:', itinerary);
    } catch (err) {
      throw new Error('Failed to save itinerary');
    }
  };

  const getItineraryById = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      // Fetch itinerary by ID from API
      setItinerary(null);
    } catch (err) {
      setError('Failed to fetch itinerary');
    } finally {
      setLoading(false);
    }
  };

  const updateActivity = (dayIndex: number, activityId: string, updates: Partial<Activity>) => {
    if (!itinerary) return;

    const updatedItinerary = { ...itinerary };
    const day = updatedItinerary.days[dayIndex];
    if (day) {
      const activityIndex = day.activities.findIndex(a => a.id === activityId);
      if (activityIndex !== -1) {
        day.activities[activityIndex] = { ...day.activities[activityIndex], ...updates };
        setItinerary(updatedItinerary);
      }
    }
  };

  const addActivity = (dayIndex: number, activity: Activity) => {
    if (!itinerary) return;

    const updatedItinerary = { ...itinerary };
    const day = updatedItinerary.days[dayIndex];
    if (day) {
      day.activities.push(activity);
      setItinerary(updatedItinerary);
    }
  };

  const removeActivity = (dayIndex: number, activityId: string) => {
    if (!itinerary) return;

    const updatedItinerary = { ...itinerary };
    const day = updatedItinerary.days[dayIndex];
    if (day) {
      day.activities = day.activities.filter(a => a.id !== activityId);
      setItinerary(updatedItinerary);
    }
  };

  return {
    itinerary,
    loading,
    error,
    generateItinerary,
    saveItinerary,
    getItineraryById,
    updateActivity,
    addActivity,
    removeActivity
  };
}

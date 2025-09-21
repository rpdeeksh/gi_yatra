// API service for backend communication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://gis-backend-email.onrender.com';

interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Log API request for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('API Request:', { url, method: options.method || 'GET' });
    }
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          url,
          error: errorText
        });
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      
      // Log successful response in development
      if (process.env.NODE_ENV === 'development') {
        console.log('API Response:', { url, data });
      }
      
      // FIXED: Handle raw JSON responses from your backend
      // If the response already has success/data structure, use it
      // Otherwise, wrap the raw data in the expected format
      if (data.hasOwnProperty('success') && data.hasOwnProperty('data')) {
        return data;
      } else {
        // Wrap raw backend response in expected format
        return {
          success: true,
          data: data,
          message: 'Success'
        };
      }
    } catch (error) {
      console.error('API request failed:', { url, error });
      throw error;
    }
  }

  // GI Products API
  async getGIProducts(params?: {
    search?: string;
    location?: string;
    category?: string;
    limit?: number;
    offset?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const endpoint = `/gi-products${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.request(endpoint);
  }

  async getGIProductById(id: string) {
    return this.request(`/gi-products/${id}`);
  }

  async searchGIProducts(query: string, filters?: any) {
    return this.request('/gi-products/search', {
      method: 'POST',
      body: JSON.stringify({ query, filters }),
    });
  }

  // Itinerary API
  async generateItinerary(preferences: any) {
    return this.request('/itinerary/generate', {
      method: 'POST',
      body: JSON.stringify(preferences),
    });
  }

  async saveItinerary(itinerary: any) {
    return this.request('/itinerary', {
      method: 'POST',
      body: JSON.stringify(itinerary),
    });
  }

  async getItinerary(id: string) {
    return this.request(`/itinerary/${id}`);
  }

  async updateItinerary(id: string, updates: any) {
    return this.request(`/itinerary/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  // Location API
  async geocodeLocation(address: string) {
    return this.request('/location/geocode', {
      method: 'POST',
      body: JSON.stringify({ address }),
    });
  }

  async reverseGeocode(lat: number, lng: number) {
    return this.request('/location/reverse-geocode', {
      method: 'POST',
      body: JSON.stringify({ lat, lng }),
    });
  }

  // User preferences API
  async saveUserPreferences(preferences: any) {
    return this.request('/user/preferences', {
      method: 'POST',
      body: JSON.stringify(preferences),
    });
  }

  async getUserPreferences() {
    return this.request('/user/preferences');
  }

  // Backend API Integration
  async getDistricts() {
    return this.request('/districts');
  }

  async getDistrictInfo(districtName: string) {
    return this.request(`/district/${districtName}`);
  }

  // FIXED: Updated to match your curl command structure
  async generateItineraryFromBackend(data: {
    destination: string;
    travel_dates: string;
  }) {
    return this.request('/generate-itinerary', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();
export default apiService;

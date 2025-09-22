// TypeScript type definitions
export interface GIProduct {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  location: string;
  state: string;
  district?: string;
  category: GICategory;
  subcategory?: string;
  images: string[];
  thumbnailImage: string;
  history: string;
  significance: string;
  coordinates: Coordinates;
  registrationNumber?: string;
  registrationDate?: string;
  applicant?: string;
  specifications?: Record<string, any>;
  relatedProducts?: string[];
  workshops?: Workshop[];
  suppliers?: Supplier[];
  seasonality?: string;
  priceRange?: PriceRange;
  ratings?: Ratings;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  maxParticipants: number;
  location: Location;
  contact: ContactInfo;
  availableDates: string[];
}

export interface Supplier {
  id: string;
  name: string;
  contact: ContactInfo;
  location: Location;
  products: string[];
  verified: boolean;
  rating: number;
}

export interface ContactInfo {
  name: string;
  phone?: string;
  email?: string;
  website?: string;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
  unit?: string;
}

export interface Ratings {
  average: number;
  count: number;
  breakdown: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

export type GICategory = 
  | 'textiles'
  | 'handicrafts'
  | 'food-products'
  | 'agricultural-products'
  | 'manufactured-goods'
  | 'natural-goods';

export type TravelBudget = 'low' | 'medium' | 'high';
export type TravelStyle = 'solo' | 'family' | 'group';
export type ActivityType = 'visit' | 'workshop' | 'meal' | 'transport' | 'shopping';

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: Location;
  duration: string;
  type: ActivityType;
  giProducts?: string[];
  cost?: number;
  bookingRequired?: boolean;
  contact?: ContactInfo;
  notes?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  description?: string;
  activities: Activity[];
  estimatedCost?: number;
  travelTime?: string;
  accommodation?: Accommodation;
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'homestay' | 'guesthouse' | 'resort';
  location: Location;
  pricePerNight: number;
  rating: number;
  amenities: string[];
  contact: ContactInfo;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  duration: number;
  startDate?: string;
  endDate?: string;
  days: ItineraryDay[];
  totalCost?: number;
  estimatedCost?: PriceRange;
  preferences: TravelPreferences;
  route?: RouteInfo;
  participants?: number;
  status: 'draft' | 'confirmed' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface TravelPreferences {
  interests: string[];
  budget: TravelBudget;
  travelStyle: TravelStyle;
  duration: number;
  startLocation?: Location;
  preferredStates?: string[];
  categories?: GICategory[];
  accessibility?: AccessibilityRequirements;
  dietary?: DietaryRestrictions;
}

export interface AccessibilityRequirements {
  wheelchairAccess: boolean;
  visualImpairment: boolean;
  hearingImpairment: boolean;
  mobilityIssues: boolean;
  other?: string;
}

export interface DietaryRestrictions {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  allergies: string[];
  other?: string;
}

export interface RouteInfo {
  totalDistance: string;
  estimatedTravelTime: string;
  transportModes: TransportMode[];
  waypoints: Location[];
}

export interface TransportMode {
  type: 'car' | 'train' | 'bus' | 'flight' | 'boat';
  from: Location;
  to: Location;
  duration: string;
  cost?: number;
  bookingInfo?: string;
}

export interface SearchFilters {
  category?: GICategory[];
  state?: string[];
  priceRange?: PriceRange;
  rating?: number;
  hasWorkshops?: boolean;
  coordinates?: Coordinates;
  radius?: number;
}

export interface SearchResult {
  products: GIProduct[];
  total: number;
  page: number;
  limit: number;
  filters: SearchFilters;
}

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  title: string;
  type: 'gi-product' | 'activity' | 'location' | 'accommodation';
  data?: any;
  icon?: string;
}

export interface MapBounds {
  southwest: Coordinates;
  northeast: Coordinates;
}

export interface UserPreferences {
  favoriteCategories: GICategory[];
  visitedStates: string[];
  savedProducts: string[];
  savedItineraries: string[];
  travelPreferences: TravelPreferences;
  language: string;
  currency: string;
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  newProducts: boolean;
  itineraryUpdates: boolean;
  workshopReminders: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  error?: string;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    hasMore?: boolean;
  };
}

export interface ErrorInfo {
  message: string;
  code?: string;
  field?: string;
  details?: any;
}

// Component prop types
export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[]>;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  helpText?: string;
}

// Event types
export interface SearchEvent {
  query: string;
  filters: SearchFilters;
  timestamp: Date;
}

export interface ItineraryEvent {
  type: 'created' | 'updated' | 'shared' | 'completed';
  itineraryId: string;
  userId?: string;
  timestamp: Date;
  data?: any;
}

// Backend API Types
export interface BackendGIProduct {
  name: string;
  description: string;
}

export interface DistrictInfo {
  district: string;
  gi_products: BackendGIProduct[];
}

export interface ItineraryGenerationRequest {
  district: string;
  travel_dates: string;
  gi_products: BackendGIProduct[];
  itinerary_notes?: string;
}

export interface BackendItineraryRequest {
  district: string;
  travel_dates: string;
  gi_products: BackendGIProduct[];
  itinerary_notes?: string;
}

export interface ItineraryGenerationResponse {
  success: boolean;
  data: any; // This will depend on what the backend returns
  message?: string;
}

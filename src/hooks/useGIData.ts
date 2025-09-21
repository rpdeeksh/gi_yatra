// Custom hook for GI data management
import { useState, useEffect } from 'react';

interface GIProduct {
  id: string;
  title: string;
  description: string;
  location: string;
  state: string;
  category: string;
  images: string[];
  history: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface UseGIDataReturn {
  products: GIProduct[];
  loading: boolean;
  error: string | null;
  searchProducts: (query: string, filters?: any) => void;
  getProductById: (id: string) => GIProduct | undefined;
  getProductsByLocation: (location: string) => GIProduct[];
}

export function useGIData(): UseGIDataReturn {
  const [products, setProducts] = useState<GIProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // API call would go here
      setProducts([]);
      setError(null);
    } catch (err) {
      setError('Failed to fetch GI products');
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (query: string, filters?: any) => {
    setLoading(true);
    try {
      // Search API call would go here
      setProducts([]);
      setError(null);
    } catch (err) {
      setError('Failed to search GI products');
    } finally {
      setLoading(false);
    }
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getProductsByLocation = (location: string) => {
    return products.filter(product => 
      product.location.toLowerCase().includes(location.toLowerCase()) ||
      product.state.toLowerCase().includes(location.toLowerCase())
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    searchProducts,
    getProductById,
    getProductsByLocation
  };
}

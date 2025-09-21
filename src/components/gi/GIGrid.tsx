// GI grid component
import GICard from './GICard';
import { GIProduct } from '../../utils/giProductsData';

interface GIGridProps {
  products: GIProduct[];
  onProductExpand?: (productId: string) => void;
  expandedProducts?: string[];
}

export default function GIGrid({ products, onProductExpand, expandedProducts = [] }: GIGridProps) {
  return (
    <div className="gi-grid">
      {products.map((product) => (
        <GICard
          key={product.id}
          product={product}
          onExpand={onProductExpand}
          isExpanded={expandedProducts.includes(product.id)}
        />
      ))}
    </div>
  );
}

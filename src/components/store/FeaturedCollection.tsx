import { Product, PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';

interface FeaturedCollectionProps {
  onNavigateToProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const FeaturedCollection = ({ onNavigateToProduct, onAddToCart }: FeaturedCollectionProps) => (
  <section id="collection" className="py-24 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">The Collection</h2>
        <div className="w-24 h-0.5 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {PRODUCTS.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onNavigate={onNavigateToProduct}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCollection;

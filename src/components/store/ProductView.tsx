import { useState, useEffect } from 'react';
import { ChevronRight, AlertCircle, Eye, Truck, Shield } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductViewProps {
  product: Product | null;
  navigateToHome: () => void;
  addToCart: (product: Product) => void;
}

const ProductView = ({ product, navigateToHome, addToCart }: ProductViewProps) => {
  const [viewers, setViewers] = useState(14);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.max(8, Math.min(42, prev + change));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center text-muted-foreground text-sm mb-8 space-x-2">
          <button onClick={navigateToHome} className="hover:text-foreground transition-colors">
            Home
          </button>
          <ChevronRight size={14} />
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-900 border border-border relative group">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 uppercase tracking-widest font-bold">
                Best Seller
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* Urgency Header */}
            <div className="flex items-center space-x-4 mb-4 text-xs font-medium">
              <div className="flex items-center text-destructive bg-destructive/10 px-2 py-1 rounded border border-destructive/20">
                <AlertCircle size={14} className="mr-1.5" />
                <span>Low Stock: Only 4 Left</span>
              </div>
              <div className="flex items-center text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 animate-pulse-subtle">
                <Eye size={14} className="mr-1.5" />
                <span>{viewers} people viewing</span>
              </div>
            </div>

            <p className="text-primary uppercase tracking-widest text-sm mb-2">{product.category} Collection</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{product.name}</h1>
            <p className="text-2xl text-foreground mb-6 font-light">
              ${product.price} 
              {product.oldPrice && (
                <span className="ml-4 text-muted-foreground line-through text-lg">${product.oldPrice}</span>
              )}
            </p>

            <div className="h-px bg-border w-full mb-6"></div>

            {/* Trust Box */}
            <div className="bg-neutral-900/50 border border-border p-4 rounded-lg mb-8">
              <div className="flex items-start mb-3">
                <Truck size={18} className="text-primary mr-3 mt-0.5 shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">Free Worldwide Shipping</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Direct from artisan. Estimated delivery: 7-12 Business Days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield size={18} className="text-primary mr-3 mt-0.5 shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">Vantage Guarantee</p>
                  <p className="text-muted-foreground text-xs mt-0.5">30-Day Money Back. No questions asked.</p>
                </div>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-8">{product.description}</p>

            {/* Color Selector */}
            <div className="mb-8">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Select Finish</p>
              <div className="flex space-x-3">
                {product.colors.map((color, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedColor(idx)}
                    className={`px-4 py-2 border ${
                      idx === selectedColor 
                        ? 'border-primary text-primary' 
                        : 'border-neutral-700 text-muted-foreground hover:border-neutral-500'
                    } text-sm transition-colors`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm hover:bg-gold-dark transition-all duration-300 shadow-gold"
              >
                Add to Cart - ${product.price}
              </button>
            </div>

            {/* Checkout Badges */}
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-3">Guaranteed Safe Checkout</p>
              <div className="flex justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
                <div className="h-6 w-10 bg-foreground/10 rounded flex items-center justify-center text-xs font-bold text-foreground">VISA</div>
                <div className="h-6 w-10 bg-foreground/10 rounded flex items-center justify-center text-xs font-bold text-foreground">MC</div>
                <div className="h-6 w-10 bg-foreground/10 rounded flex items-center justify-center text-xs font-bold text-foreground">AMEX</div>
                <div className="h-6 w-10 bg-foreground/10 rounded flex items-center justify-center text-xs font-bold text-foreground">PAYPAL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-20 border-t border-border pt-12">
          <h3 className="text-2xl font-serif text-foreground mb-8">Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-neutral-900 border border-border">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Case Size</p>
              <p className="text-foreground">{product.specs.case}</p>
            </div>
            <div className="p-4 bg-neutral-900 border border-border">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Material</p>
              <p className="text-foreground text-sm">{product.specs.material}</p>
            </div>
            <div className="p-4 bg-neutral-900 border border-border">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Strap</p>
              <p className="text-foreground text-sm">{product.specs.strap}</p>
            </div>
            <div className="p-4 bg-neutral-900 border border-border">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Water Resistance</p>
              <p className="text-foreground">{product.specs.water}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

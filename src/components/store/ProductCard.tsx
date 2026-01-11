import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onNavigate: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onNavigate, onAddToCart }: ProductCardProps) => (
  <div className="group cursor-pointer">
    <div 
      className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-4"
      onClick={() => onNavigate(product)}
    >
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-300"></div>
      {product.oldPrice && (
        <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
          Sale
        </div>
      )}
      
      {/* Quick Add Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="w-full bg-foreground text-background py-3 uppercase text-xs tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Quick Add
        </button>
      </div>
    </div>
    
    <div className="text-center">
      <p className="text-primary text-xs uppercase tracking-widest mb-1">{product.category}</p>
      <h3 className="text-foreground font-serif text-lg group-hover:text-gold-light transition-colors">
        {product.name}
      </h3>
      <div className="flex justify-center items-center gap-3 mt-1">
        <p className="text-foreground">${product.price.toLocaleString()}</p>
        {product.oldPrice && (
          <p className="text-muted-foreground line-through text-sm">${product.oldPrice}</p>
        )}
      </div>
    </div>
  </div>
);

export default ProductCard;

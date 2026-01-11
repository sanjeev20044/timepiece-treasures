import { X, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';

interface CartDrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  cart: Product[];
  removeFromCart: (index: number) => void;
}

const CartDrawer = ({ isOpen, setIsOpen, cart, removeFromCart }: CartDrawerProps) => {
  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 z-50 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-neutral-900 z-50 transform transition-transform duration-500 ease-in-out border-l border-border ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border flex justify-between items-center bg-neutral-900">
            <h2 className="text-xl font-serif text-foreground">Your Cart</h2>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                <ShoppingBag size={48} className="mb-4 opacity-50" />
                <p>Your cart is empty.</p>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="mt-4 text-primary underline text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-neutral-800" />
                  <div className="flex-1">
                    <h3 className="text-foreground font-serif">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary">${item.price}</span>
                      <button 
                        onClick={() => removeFromCart(index)} 
                        className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-border bg-neutral-900">
            <div className="flex justify-between text-foreground text-lg font-serif mb-6">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <button 
              className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
              disabled={cart.length === 0}
              onClick={() => alert("Proceeding to simulated checkout...")}
            >
              Checkout Securely
            </button>
            <div className="flex justify-center space-x-2 mt-4 opacity-50">
              <div className="w-8 h-5 bg-foreground rounded flex items-center justify-center text-[8px] font-bold text-background">VISA</div>
              <div className="w-8 h-5 bg-foreground rounded flex items-center justify-center text-[8px] font-bold text-background">MC</div>
              <div className="w-8 h-5 bg-foreground rounded flex items-center justify-center text-[8px] font-bold text-background">AMEX</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

import { Menu, ShoppingBag } from 'lucide-react';
import { BRAND_NAME } from '@/data/products';

interface NavbarProps {
  scrolled: boolean;
  view: string;
  cartCount: number;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  setIsCartOpen: (open: boolean) => void;
  navigateToHome: () => void;
}

const Navbar = ({
  scrolled,
  view,
  cartCount,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsCartOpen,
  navigateToHome
}: NavbarProps) => {
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 top-8 ${
      scrolled || view !== 'home' 
        ? 'bg-neutral-950/95 backdrop-blur-md py-3 shadow-lg border-b border-border' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <button 
          onClick={navigateToHome} 
          className="text-2xl md:text-3xl font-serif tracking-widest font-bold text-foreground hover:text-primary transition-colors"
        >
          {BRAND_NAME}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-neutral-400">
          <button onClick={navigateToHome} className="hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('collection')} className="hover:text-primary transition-colors">
            Men
          </button>
          <button onClick={() => scrollToSection('collection')} className="hover:text-primary transition-colors">
            Women
          </button>
          <button onClick={() => scrollToSection('story')} className="hover:text-primary transition-colors">
            Our Story
          </button>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-6">
          <button 
            className="relative text-foreground hover:text-primary transition-colors" 
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-b border-border p-6 md:hidden flex flex-col space-y-4 text-center z-50">
          <button onClick={navigateToHome} className="text-foreground uppercase tracking-widest">
            Home
          </button>
          <button onClick={() => scrollToSection('collection')} className="text-foreground uppercase tracking-widest">
            Collection
          </button>
          <button onClick={() => scrollToSection('story')} className="text-foreground uppercase tracking-widest">
            Story
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

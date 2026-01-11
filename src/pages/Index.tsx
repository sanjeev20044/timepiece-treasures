import { useState, useEffect } from 'react';
import { Product } from '@/data/products';
import AnnouncementBar from '@/components/store/AnnouncementBar';
import Navbar from '@/components/store/Navbar';
import Hero from '@/components/store/Hero';
import FeaturedCollection from '@/components/store/FeaturedCollection';
import BrandStory from '@/components/store/BrandStory';
import TrustBadges from '@/components/store/TrustBadges';
import SocialProof from '@/components/store/SocialProof';
import Footer from '@/components/store/Footer';
import CartDrawer from '@/components/store/CartDrawer';
import Notification from '@/components/store/Notification';
import ProductView from '@/components/store/ProductView';

const Index = () => {
  const [view, setView] = useState<'home' | 'product'>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setNotification({ show: true, message: `Added ${product.name} to cart` });
    setTimeout(() => setNotification({ show: false, message: '' }), 3000);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const navigateToProduct = (product: Product) => {
    setActiveProduct(product);
    setView('product');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background font-sans pt-8">
      <AnnouncementBar />
      <Navbar
        scrolled={scrolled}
        view={view}
        cartCount={cart.length}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsCartOpen={setIsCartOpen}
        navigateToHome={navigateToHome}
      />
      <CartDrawer
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
      />
      <Notification message={notification.message} show={notification.show} />

      {view === 'home' ? (
        <div className="animate-fade-in">
          <Hero />
          <FeaturedCollection 
            onNavigateToProduct={navigateToProduct} 
            onAddToCart={addToCart} 
          />
          <BrandStory />
          <TrustBadges />
          <SocialProof />
        </div>
      ) : (
        <div className="animate-fade-in">
          <ProductView 
            product={activeProduct} 
            navigateToHome={navigateToHome}
            addToCart={addToCart}
          />
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;

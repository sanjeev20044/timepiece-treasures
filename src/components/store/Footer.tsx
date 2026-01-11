import { Instagram, Facebook, Twitter, ArrowRight, Package } from 'lucide-react';
import { BRAND_NAME } from '@/data/products';

const Footer = () => (
  <footer className="bg-neutral-900 pt-20 pb-10 border-t border-gold-dark/20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div>
        <h3 className="text-2xl font-serif text-foreground mb-6 tracking-widest">{BRAND_NAME}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Defining moments with precision and power. 
          Luxury is not just a price tag, it is a lifestyle.
        </p>
        <div className="flex space-x-4 text-muted-foreground">
          <Instagram size={20} className="hover:text-primary cursor-pointer transition-colors" />
          <Facebook size={20} className="hover:text-primary cursor-pointer transition-colors" />
          <Twitter size={20} className="hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>

      <div>
        <h4 className="text-foreground uppercase tracking-widest text-sm mb-6 font-bold">Shop</h4>
        <ul className="space-y-3 text-muted-foreground text-sm">
          <li className="hover:text-primary cursor-pointer transition-colors">Men's Collection</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Women's Collection</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Limited Editions</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Accessories</li>
        </ul>
      </div>

      <div>
        <h4 className="text-foreground uppercase tracking-widest text-sm mb-6 font-bold">Support</h4>
        <ul className="space-y-3 text-muted-foreground text-sm">
          <li className="hover:text-primary cursor-pointer transition-colors">Contact Concierge</li>
          <li className="hover:text-primary cursor-pointer transition-colors flex items-center">
            <Package size={14} className="mr-2" /> Track Order
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors">Shipping & Returns</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Warranty</li>
        </ul>
      </div>

      <div>
        <h4 className="text-foreground uppercase tracking-widest text-sm mb-6 font-bold">Newsletter</h4>
        <p className="text-muted-foreground text-sm mb-4">Join the inner circle.</p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="bg-neutral-800 text-foreground px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary text-sm"
          />
          <button className="bg-primary text-primary-foreground px-4 hover:bg-gold-dark transition-colors">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-xs">
      <p>&copy; 2024 {BRAND_NAME}. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <span>VISA</span>
        <span>MASTERCARD</span>
        <span>PAYPAL</span>
        <span>UPI</span>
      </div>
    </div>
  </footer>
);

export default Footer;

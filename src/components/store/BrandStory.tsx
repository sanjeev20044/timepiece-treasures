import { Award, Shield, Globe } from 'lucide-react';

const BrandStory = () => (
  <section id="story" className="py-24 bg-neutral-900 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-800/20 to-transparent pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1 relative">
        <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4"></div>
        <img 
          src="https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=1000&auto=format&fit=crop" 
          alt="Watch Craftsmanship" 
          className="w-full h-auto relative z-10 filter grayscale contrast-125"
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-4xl font-serif text-foreground mb-6">Crafted Beyond Time</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 font-light text-lg">
          VANTAGE watches are designed for those who value precision, presence, and quiet dominance. Each piece blends modern engineering with timeless elegance. We don't just sell watches; we curate a legacy.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center text-neutral-300">
            <Award className="text-primary mr-4" size={20} />
            Swiss-inspired movement precision.
          </li>
          <li className="flex items-center text-neutral-300">
            <Shield className="text-primary mr-4" size={20} />
            Sapphire crystal for scratch resistance.
          </li>
          <li className="flex items-center text-neutral-300">
            <Globe className="text-primary mr-4" size={20} />
            Worldwide concierge shipping.
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <img 
            src="https://api.dicebear.com/7.x/initials/svg?seed=JV&backgroundColor=b45309" 
            className="w-10 h-10 rounded-full" 
            alt="Founder Signature"
          />
          <div>
            <p className="text-foreground text-sm font-serif">Jonathan Vantage</p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider">Founder</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BrandStory;

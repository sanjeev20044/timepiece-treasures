import { Award, Clock, Shield, Globe } from 'lucide-react';

const TrustBadges = () => (
  <div className="py-24 bg-background px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-4 text-primary">
          <Award size={24} />
        </div>
        <h4 className="text-foreground font-serif mb-2">Premium Materials</h4>
        <p className="text-muted-foreground text-sm">Only the finest steel and crystal.</p>
      </div>
      <div>
        <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-4 text-primary">
          <Clock size={24} />
        </div>
        <h4 className="text-foreground font-serif mb-2">Precision Movement</h4>
        <p className="text-muted-foreground text-sm">Swiss-engineered accuracy.</p>
      </div>
      <div>
        <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-4 text-primary">
          <Shield size={24} />
        </div>
        <h4 className="text-foreground font-serif mb-2">Lifetime Warranty</h4>
        <p className="text-muted-foreground text-sm">We stand by our craftsmanship.</p>
      </div>
      <div>
        <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-4 text-primary">
          <Globe size={24} />
        </div>
        <h4 className="text-foreground font-serif mb-2">Global Shipping</h4>
        <p className="text-muted-foreground text-sm">Secure delivery worldwide.</p>
      </div>
    </div>
  </div>
);

export default TrustBadges;

import { Star } from 'lucide-react';
import { REVIEWS } from '@/data/products';

const SocialProof = () => (
  <section className="py-20 bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-foreground font-serif text-3xl mb-12">Clientèle Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map(review => (
          <div key={review.id} className="bg-neutral-900 p-8 border border-border relative">
            <div className="flex text-primary mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-neutral-300 italic mb-6">"{review.text}"</p>
            <p className="text-foreground font-serif text-sm">— {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;

import { Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrandHeader from '../components/BrandHeader';
import ReplaceableImage from '../components/ReplaceableImage';
import { content } from '../content/gu';

export default function HomePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <BrandHeader size="large" className="mb-6" />
        
        <div className="mb-8 flex justify-center">
          <ReplaceableImage
            src="/assets/generated/hero-sewing-illustration.dim_1400x800.png"
            alt={content.home.heroImageAlt}
            className="w-full max-w-2xl h-auto"
          />
        </div>

        <p className="text-lg sm:text-xl text-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          {content.home.description}
        </p>

        <div className="bg-white rounded-lg p-6 border border-border mb-8 inline-block">
          <div className="flex items-center justify-center gap-2 text-foreground mb-2">
            <Clock className="w-5 h-5 text-brand-red" />
            <span className="font-semibold text-lg">{content.home.workingHoursLabel}</span>
          </div>
          <p className="text-xl font-bold text-brand-red">{content.home.workingHours}</p>
        </div>

        <div>
          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <a href={`tel:${content.phoneNumber}`} className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {content.home.callNowButton}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

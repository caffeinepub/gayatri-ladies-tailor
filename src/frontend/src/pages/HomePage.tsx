import { Phone, Clock, CheckCircle } from 'lucide-react';
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
            alt={content.home.heroImageAlt}
            className="w-full max-w-2xl h-auto min-h-[300px]"
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

      {/* Important Note Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg p-8 border-2 border-brand-red shadow-md">
          <h3 className="text-2xl font-bold text-brand-red text-center mb-6">
            {content.home.importantNoteTitle}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">{content.home.importantNote1}</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">{content.home.importantNote2}</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">{content.home.importantNote3}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReplaceableImage from '../components/ReplaceableImage';
import { content } from '../content/gu';

export default function ContactPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-red text-center mb-8">
          {content.contact.title}
        </h2>

        <div className="bg-white rounded-lg p-8 border border-border max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <ReplaceableImage
              alt={content.contact.imageAlt}
              className="w-32 h-32 object-contain"
            />
          </div>

          <div className="space-y-6">
            {/* Mobile Number */}
            <div className="text-center pb-6 border-b border-border">
              <div className="flex items-center justify-center gap-2 text-foreground mb-2">
                <Phone className="w-5 h-5 text-brand-red" />
                <span className="font-semibold text-lg">{content.contact.mobileLabel}</span>
              </div>
              <a
                href={`tel:${content.phoneNumber}`}
                className="text-2xl font-bold text-brand-red hover:underline"
              >
                {content.phoneNumber}
              </a>
            </div>

            {/* Address */}
            <div className="text-center pb-6 border-b border-border">
              <div className="flex items-center justify-center gap-2 text-foreground mb-3">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span className="font-semibold text-lg">{content.contact.addressLabel}</span>
              </div>
              <div className="text-foreground text-base leading-relaxed">
                <p>{content.contact.addressLine1}</p>
                <p>{content.contact.addressLine2}</p>
                <p>{content.contact.addressLine3}</p>
                <p>{content.contact.addressLine4}</p>
                <p className="font-semibold">{content.contact.addressLine5}</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="text-center pb-6 border-b border-border">
              <div className="flex items-center justify-center gap-2 text-foreground mb-2">
                <Clock className="w-5 h-5 text-brand-red" />
                <span className="font-semibold text-lg">{content.contact.workingHoursLabel}</span>
              </div>
              <p className="text-xl font-bold text-brand-red">{content.contact.workingHours}</p>
            </div>

            {/* Call to Action */}
            <div className="pt-2 text-center">
              <p className="text-lg text-foreground mb-6">{content.contact.cta}</p>
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <a href={`tel:${content.phoneNumber}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {content.contact.callButton}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { content } from '../content/gu';

export default function ServicesPage() {
  const services = [
    { title: content.services.ladiesBlouse },
    { title: content.services.navratriChaniyaCholi },
    { title: content.services.fancyWesternDress },
    { title: content.services.gentsKurta },
    { title: content.services.kidsKurta },
    { title: content.services.sareeLace },
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-red text-center mb-8">
          {content.services.title}
        </h2>

        {/* Important Note Section */}
        <div className="bg-white rounded-lg p-8 border-2 border-brand-red shadow-md mb-8">
          <h3 className="text-2xl font-bold text-brand-red text-center mb-6">
            {content.services.importantNoteTitle}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">{content.services.importantNote1}</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">{content.services.importantNote2}</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">{content.services.importantNote3}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

import ServiceCard from '../components/ServiceCard';
import { content } from '../content/gu';

export default function ServicesPage() {
  const services = [
    {
      title: content.services.normalBlouse,
      iconSrc: '/assets/generated/service-icon-blouse.dim_256x256.png',
    },
    {
      title: content.services.fancyBlouse,
      iconSrc: '/assets/generated/service-icon-fancy-blouse.dim_256x256.png',
    },
    {
      title: content.services.chaniyaCholi,
      iconSrc: '/assets/generated/service-icon-chaniya-choli.dim_256x256.png',
    },
    {
      title: content.services.dressDesigning,
      iconSrc: '/assets/generated/service-icon-dress-design.dim_256x256.png',
    },
    {
      title: content.services.westernDress,
      iconSrc: '/assets/generated/service-icon-western-dress.dim_256x256.png',
    },
    {
      title: content.services.customStitching,
      iconSrc: '/assets/generated/service-icon-custom-stitching.dim_256x256.png',
    },
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-red text-center mb-8">
          {content.services.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} iconSrc={service.iconSrc} />
          ))}
        </div>
      </section>
    </div>
  );
}

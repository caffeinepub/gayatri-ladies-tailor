import ReplaceableImage from '../components/ReplaceableImage';
import { content } from '../content/gu';

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-red text-center mb-8">
          {content.about.title}
        </h2>

        <div className="bg-white rounded-lg p-8 border border-border mb-8">
          <div className="flex justify-center mb-6">
            <ReplaceableImage
              src="/assets/generated/about-tailoring-tools.dim_800x600.png"
              alt={content.about.imageAlt}
              className="w-full max-w-md h-auto"
            />
          </div>

          <div className="space-y-4 text-foreground text-lg leading-relaxed">
            <p>{content.about.paragraph1}</p>
            <p>{content.about.paragraph2}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-foreground">
              <span className="font-semibold">{content.about.ownerLabel}</span> {content.about.ownerName}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

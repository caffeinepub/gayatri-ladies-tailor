import ReplaceableImage from './ReplaceableImage';

interface ServiceCardProps {
  title: string;
}

export default function ServiceCard({ title }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center gap-4">
        <ReplaceableImage
          alt={title}
          className="w-20 h-20 object-contain"
        />
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
    </div>
  );
}

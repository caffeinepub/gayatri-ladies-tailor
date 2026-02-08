interface ReplaceableImageProps {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}

export default function ReplaceableImage({ src, alt, className = '', label = 'બદલી શકાય તેવું' }: ReplaceableImageProps) {
  return (
    <div className="relative inline-block">
      <img src={src} alt={alt} className={`rounded-lg ${className}`} />
      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
        {label}
      </span>
    </div>
  );
}

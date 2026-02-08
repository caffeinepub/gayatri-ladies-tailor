import { content } from '../content/gu';

interface BrandHeaderProps {
  className?: string;
  size?: 'default' | 'large';
}

export default function BrandHeader({ className = '', size = 'default' }: BrandHeaderProps) {
  const sizeClasses = size === 'large' ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-2xl sm:text-3xl';

  return (
    <h1 className={`font-brand text-brand-red font-bold ${sizeClasses} ${className}`}>
      {content.brandName}
    </h1>
  );
}

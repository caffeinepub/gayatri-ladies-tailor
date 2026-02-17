import { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface ReplaceableImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function ReplaceableImage({ src, alt, className = '' }: ReplaceableImageProps) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (imageSrc) {
    return (
      <div className="relative inline-block group">
        <img src={imageSrc} alt={alt} className={`rounded-lg ${className}`} />
        <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center rounded-lg">
          <div className="text-white text-center">
            <Upload className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm font-medium">છબી બદલો</span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    );
  }

  return (
    <label className={`image-upload-placeholder ${className}`}>
      <div className="image-upload-content">
        <ImageIcon className="w-12 h-12 text-muted-foreground mb-3" />
        <span className="text-sm font-medium text-foreground">છબી અપલોડ કરો</span>
        <span className="text-xs text-muted-foreground mt-1">ક્લિક કરો અને છબી પસંદ કરો</span>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </label>
  );
}

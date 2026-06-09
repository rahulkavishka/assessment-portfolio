import React from 'react';

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: 'left' | 'right' | 'none';
  className?: string;
  children?: React.ReactNode;
}

export const Polaroid: React.FC<PolaroidProps> = ({ 
  src, 
  alt, 
  caption, 
  rotation = 'none', 
  className = '',
  children
}) => {
  const rotationClass = 
    rotation === 'left' ? '-rotate-2' : 
    rotation === 'right' ? 'rotate-2' : '';

  return (
    <div className={`relative bg-white p-3 pb-8 sm:p-4 sm:pb-12 shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:rotate-0 transition-all duration-300 z-10 ${rotationClass} ${className}`}>
      {children}
      <img src={src} alt={alt} className="w-full h-auto object-cover border border-gray-100/50" />
      {caption && (
        <p className="mt-3 text-center font-handwriting text-2xl text-scrapbook-ink/80">
          {caption}
        </p>
      )}
    </div>
  );
};

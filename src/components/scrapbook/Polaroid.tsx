import React from 'react';

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: 'left' | 'right' | 'none';
  variant?: 'default' | 'stacked';
  className?: string;
  children?: React.ReactNode;
}

export const Polaroid: React.FC<PolaroidProps> = ({ 
  src, 
  alt, 
  caption, 
  rotation = 'none', 
  variant = 'default',
  className = '',
  children
}) => {
  const rotationClass = 
    rotation === 'left' ? '-rotate-2' : 
    rotation === 'right' ? 'rotate-2' : '';

  return (
    <div className={`relative group ${rotationClass} ${className}`} style={{ perspective: '1000px' }}>
      
      {/* Stacked background elements */}
      {variant === 'stacked' && (
        <>
          <div className="absolute inset-0 bg-[#fdfbf7] p-3 pb-8 sm:p-4 sm:pb-12 shadow-lg border border-gray-200 transform rotate-6 scale-95 origin-bottom-right z-0"
               style={{ backgroundImage: 'url("/cream-paper.png")' }}></div>
          <div className="absolute inset-0 bg-[#f8f5ee] p-3 pb-8 sm:p-4 sm:pb-12 shadow-md border border-gray-200 transform -rotate-3 scale-95 origin-bottom-left -z-10"
               style={{ backgroundImage: 'url("/cream-paper.png")' }}></div>
        </>
      )}

      {/* Main Polaroid */}
      <div 
        className="relative bg-[#faf8f5] p-3 pb-5 sm:p-4 sm:pb-7 shadow-xl border border-gray-100 transition-transform duration-500 z-10 group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_scale(1.02)] group-hover:shadow-2xl"
        style={{ 
          transformStyle: 'preserve-3d',
          backgroundImage: 'url("/cream-paper.png")' 
        }}
      >
        <div className="relative border border-gray-200/50 bg-gray-100 overflow-hidden shadow-inner">
          <div className="absolute inset-0 opacity-10 pointer-events-none z-10 mix-blend-overlay" style={{ backgroundImage: 'url("/stucco.png")' }}></div>
          <img src={src} alt={alt} className="w-full h-auto object-cover relative z-0" />
        </div>

        {caption && (
          <p className="mt-4 text-center font-handwriting text-3xl text-scrapbook-ink/80 transform translate-z-10">
            {caption}
          </p>
        )}

        {children}
      </div>
    </div>
  );
};

import React from 'react';

interface StickyNoteProps {
  title?: string;
  children: React.ReactNode;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'tan';
  rotation?: 'left' | 'right' | 'none';
  className?: string;
}

export const StickyNote: React.FC<StickyNoteProps> = ({ 
  title, 
  children, 
  color = 'yellow', 
  rotation = 'right',
  className = '' 
}) => {
  const colorMap = {
    yellow: 'bg-[#fef9c3] border-[#fde047]',
    pink: 'bg-[#fce7f3] border-[#f9a8d4]',
    blue: 'bg-[#e0f2fe] border-[#7dd3fc]',
    green: 'bg-[#dcfce3] border-[#86efac]',
    tan: 'bg-scrapbook-paperDark border-scrapbook-tan',
  };

  const rotationClass = rotation === 'left' ? '-rotate-2' : rotation === 'right' ? 'rotate-2' : '';

  return (
    <div className={`relative p-6 sm:p-8 shadow-md border-t-8 transition-transform hover:scale-[1.02] z-10 ${colorMap[color]} ${rotationClass} ${className}`}>
      {title && (
        <h4 className="font-handwriting text-3xl mb-3 text-scrapbook-ink">{title}</h4>
      )}
      <div className="font-serif text-scrapbook-ink/90 text-[15px] sm:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
};

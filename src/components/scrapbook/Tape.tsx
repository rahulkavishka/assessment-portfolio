import React from 'react';

interface TapeProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Tape: React.FC<TapeProps> = ({ className = '', variant = 'light' }) => {
  const bgClass = variant === 'light' 
    ? 'bg-[#eadecc]/95 border-white/20' // Opaque masking tape color
    : 'bg-[#2b221d]/95 border-black/30';

  return (
    <div 
      className={`absolute w-28 h-8 drop-shadow-md border z-50 ${bgClass} ${className}`} 
      style={{ 
        clipPath: 'polygon(2% 10%, 98% 5%, 96% 95%, 4% 90%)',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")'
      }}
    ></div>
  );
};

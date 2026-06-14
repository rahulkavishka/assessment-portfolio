import React from 'react';

interface StampProps {
  text: string;
  className?: string;
  rotation?: string;
  color?: 'red' | 'blue' | 'black';
}

export const Stamp: React.FC<StampProps> = ({ text, className = '', rotation = '-rotate-12', color = 'red' }) => {
  const colorMap = {
    red: 'border-red-600 text-red-600',
    blue: 'border-blue-600 text-blue-600',
    black: 'border-black text-black',
  };

  return (
    <div 
      className={`absolute z-40 inline-block pointer-events-none transform ${rotation} ${className}`}
      style={{
        maskImage: 'url("/grunge-wall.png")',
        WebkitMaskImage: 'url("/grunge-wall.png")'
      }}
    >
      <div className={`border-[3px] rounded-md px-3 py-1 bg-transparent opacity-80 ${colorMap[color]}`}>
        <span className="font-serif font-black uppercase tracking-[0.2em] text-xl whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
};

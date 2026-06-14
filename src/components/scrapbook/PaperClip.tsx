import React from 'react';

interface PaperClipProps {
  className?: string;
  variant?: 'silver' | 'gold';
}

export const PaperClip: React.FC<PaperClipProps> = ({ className = '', variant = 'silver' }) => {
  const color1 = variant === 'silver' ? '#e5e7eb' : '#fcd34d';
  const color2 = variant === 'silver' ? '#9ca3af' : '#d97706';

  return (
    <div 
      className={`absolute z-50 w-6 h-16 drop-shadow-md pointer-events-none ${className}`}
    >
      <svg viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path 
          d="M20 5 L20 85 C20 95, 35 95, 35 85 L35 15 C35 5, 5 5, 5 15 L5 70 C5 78, 15 78, 15 70 L15 25" 
          stroke={`url(#clipGrad-${variant})`} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <defs>
          <linearGradient id={`clipGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="50%" stopColor={color2} />
            <stop offset="100%" stopColor={color1} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

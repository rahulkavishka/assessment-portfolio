import React from 'react';

interface SectionDividerProps {
  variant?: 'wavy' | 'scissors' | 'dots';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'wavy', className = '' }) => {
  return (
    <div className={`w-full relative flex items-center justify-center py-8 opacity-70 ${className}`}>
      {variant === 'wavy' && (
        <svg className="w-full h-6 text-scrapbook-tan/50" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" fill="transparent" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      )}

      {variant === 'dots' && (
        <div className="w-full flex justify-between px-10 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-scrapbook-tan/30"></div>
          ))}
        </div>
      )}

      {variant === 'scissors' && (
        <div className="w-full flex items-center gap-4">
          <div className="flex-1 h-0 border-t border-dashed border-scrapbook-tan/50"></div>
          <svg className="w-6 h-6 text-scrapbook-tan/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
          </svg>
          <div className="flex-1 h-0 border-t border-dashed border-scrapbook-tan/50"></div>
        </div>
      )}
    </div>
  );
};

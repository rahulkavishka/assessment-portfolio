import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon, className = '' }) => {
  return (
    <div className={`relative group inline-block mb-10 ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-scrapbook-accent transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="font-handwriting text-4xl sm:text-5xl text-scrapbook-ink transform rotate-1 transition-transform group-hover:rotate-0 relative z-10">
          {title}
        </h3>
      </div>
      
      {/* Hand-drawn SVG squiggle underline */}
      <svg 
        className="absolute -bottom-3 left-0 w-full h-4 text-scrapbook-tan/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        viewBox="0 0 100 10" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0 5 Q 25 0, 50 5 T 100 5" 
          fill="transparent" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="animate-pulse"
        />
      </svg>
      
      {/* Default static underline */}
      <div className="absolute -bottom-1 left-0 w-full h-1 bg-scrapbook-tan/20 rounded-full group-hover:opacity-0 transition-opacity duration-300"></div>
    </div>
  );
};

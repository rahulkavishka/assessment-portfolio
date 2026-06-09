import React from 'react';

interface TornEdgeProps {
  className?: string;
  fill?: string;
  position?: 'top' | 'bottom';
}

export const TornEdge: React.FC<TornEdgeProps> = ({ 
  className = '', 
  fill = '%231c1815', // Default to scrapbook-bg (dark brown) URL encoded
  position = 'top'
}) => {
  // A randomized jagged path for a torn paper effect
  const svgData = `data:image/svg+xml,%3Csvg viewBox='0 0 1000 40' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L0,40 L1000,40 L1000,0 C980,15 950,5 920,25 C890,5 860,20 830,10 C800,25 770,5 740,20 C710,5 680,25 650,10 C620,30 590,5 560,20 C530,5 500,25 470,10 C440,25 410,5 380,20 C350,5 320,25 290,10 C260,20 230,5 200,25 C170,10 140,30 110,5 C80,25 50,10 20,20 C10,10 5,15 0,0 Z' fill='${fill}'/%3E%3C/svg%3E`;

  return (
    <div 
      className={`w-full h-8 sm:h-12 w-[100%] absolute left-0 right-0 z-20 pointer-events-none ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'} ${className}`}
      style={{
        backgroundImage: `url("${svgData}")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

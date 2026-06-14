import React from 'react';
import { Tape } from './Tape';
import { PaperClip } from './PaperClip';
import { Stamp } from './Stamp';

interface StickyNoteProps {
  title?: string;
  children: React.ReactNode;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'tan';
  rotation?: 'left' | 'right' | 'none';
  variant?: 'default' | 'pinned' | 'folded';
  className?: string;
}

export const StickyNote: React.FC<StickyNoteProps> = ({ 
  title, 
  children, 
  color = 'yellow', 
  rotation = 'right',
  variant = 'default',
  className = '' 
}) => {
  const colorMap = {
    yellow: { bg: 'bg-[#fef9c3]', border: 'border-[#fde047]', fold: 'linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)' },
    pink: { bg: 'bg-[#fce7f3]', border: 'border-[#f9a8d4]', fold: 'linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)' },
    blue: { bg: 'bg-[#e0f2fe]', border: 'border-[#7dd3fc]', fold: 'linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)' },
    green: { bg: 'bg-[#dcfce3]', border: 'border-[#86efac]', fold: 'linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)' },
    tan: { bg: 'bg-scrapbook-paperDark', border: 'border-scrapbook-tan', fold: 'linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2) 100%)' },
  };

  const rotationClass = rotation === 'left' ? '-rotate-2' : rotation === 'right' ? 'rotate-2' : '';
  const currentColors = colorMap[color];

  // Separate decorators (like Tape, PaperClip, Stamp) from content children
  const decorators: React.ReactNode[] = [];
  const content: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const type = child.type as any;
      const isDecorator = 
        type === Tape || 
        type === PaperClip || 
        type === Stamp || 
        (type && (type.name === 'Tape' || type.displayName === 'Tape' || type.name === 'PaperClip' || type.displayName === 'PaperClip' || type.name === 'Stamp' || type.displayName === 'Stamp')) ||
        (child.props && typeof (child.props as any).className === 'string' && ((child.props as any).className.includes('absolute') || (child.props as any).className.includes('-top-')));
      
      if (isDecorator) {
        decorators.push(child);
      } else {
        content.push(child);
      }
    } else {
      content.push(child);
    }
  });

  return (
    <div 
      className={`relative p-6 sm:p-8 shadow-md border-t-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:rotate-0 z-10 ${currentColors.bg} ${currentColors.border} ${rotationClass} ${className}`}
      style={{
        backgroundImage: 'url("/cream-paper.png")',
        clipPath: variant === 'folded' ? 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)' : 'none'
      }}
    >
      {/* Absolute decorators are placed relative to the card's root boundaries */}
      {decorators}

      {/* Folded Corner Effect */}
      {variant === 'folded' && (
        <div 
          className="absolute bottom-0 right-0 w-[24px] h-[24px] drop-shadow-md z-20 pointer-events-none"
          style={{ background: currentColors.fold }}
        ></div>
      )}

      {/* Pinned Effect */}
      {variant === 'pinned' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-md border-2 border-red-700 z-30">
          <div className="absolute inset-1 rounded-full bg-red-400 opacity-50"></div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-400 -z-10"></div>
        </div>
      )}

      <div className="relative z-10">
        {title && (
          <h4 className="font-handwriting text-3xl mb-3 text-scrapbook-ink">{title}</h4>
        )}
        <div className="font-serif text-scrapbook-ink/90 text-[15px] sm:text-base leading-relaxed space-y-3">
          {content}
        </div>
      </div>
    </div>
  );
};

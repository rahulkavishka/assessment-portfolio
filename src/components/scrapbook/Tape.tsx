import React from 'react';

interface TapeProps {
  className?: string;
  variant?: 'light' | 'dark' | 'rose' | 'sage' | 'gold' | 'washi-dots' | 'washi-stripes';
}

export const Tape: React.FC<TapeProps> = ({ className = '', variant = 'light' }) => {
  let bgClass = '';
  let customStyle: React.CSSProperties = {
    clipPath: 'polygon(1% 8%, 98% 4%, 96% 94%, 3% 92%)',
    backgroundImage: 'url("/cream-paper.png")',
  };

  switch (variant) {
    case 'light':
      bgClass = 'bg-[#eadecc]/80 backdrop-blur-sm border-white/20';
      break;
    case 'dark':
      bgClass = 'bg-[#2b221d]/80 backdrop-blur-sm border-black/30';
      break;
    case 'rose':
      bgClass = 'bg-[#eec9c9]/80 backdrop-blur-sm border-white/20';
      break;
    case 'sage':
      bgClass = 'bg-[#c1cec1]/80 backdrop-blur-sm border-white/20';
      break;
    case 'gold':
      bgClass = 'bg-[#dcb980]/80 backdrop-blur-sm border-white/20';
      break;
    case 'washi-dots':
      bgClass = 'bg-[#f4ebd8]/80 backdrop-blur-sm border-white/20';
      customStyle = {
        ...customStyle,
        backgroundImage: 'radial-gradient(#c9956b 20%, transparent 20%), radial-gradient(#c9956b 20%, transparent 20%), url("/cream-paper.png")',
        backgroundSize: '12px 12px, 12px 12px, auto',
        backgroundPosition: '0 0, 6px 6px, 0 0',
      };
      break;
    case 'washi-stripes':
      bgClass = 'bg-[#f4ebd8]/80 backdrop-blur-sm border-white/20';
      customStyle = {
        ...customStyle,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(181, 146, 117, 0.4) 6px, rgba(181, 146, 117, 0.4) 12px), url("/cream-paper.png")',
      };
      break;
    default:
      bgClass = 'bg-[#eadecc]/80 backdrop-blur-sm border-white/20';
  }

  return (
    <div 
      className={`absolute w-28 h-8 shadow-sm z-50 ${bgClass} ${className}`} 
      style={customStyle}
    ></div>
  );
};

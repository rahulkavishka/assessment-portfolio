import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ProgressAndScroll: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Find the main scrollable element
    const mainElement = document.querySelector('main');
    
    if (!mainElement) return;

    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = mainElement.scrollTop;
      const windowHeight = mainElement.scrollHeight - mainElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));

      // Show/hide scroll to top button
      if (totalScroll > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    mainElement.addEventListener('scroll', handleScroll);
    
    // Trigger once on mount
    handleScroll();

    return () => mainElement.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-16 lg:top-0 left-0 lg:left-80 right-0 h-1 bg-white/5 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-scrapbook-tan to-scrapbook-accent transition-all duration-150 ease-out shadow-[0_0_10px_rgba(201,149,107,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-scrapbook-paperDark text-scrapbook-ink shadow-lg border border-scrapbook-tan/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(201,149,107,0.3)] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

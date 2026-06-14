import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#2D6A4F',
    primaryTextColor: '#2a221d',
    primaryBorderColor: '#b59275',
    lineColor: '#b59275',
    secondaryColor: '#E76F51',
    tertiaryColor: '#f4ebd8',
    fontFamily: 'Lora, serif',
    fontSize: '14px',
    noteBkgColor: '#fef9c3',
    noteTextColor: '#2a221d',
    noteBorderColor: '#fde047',
  },
  flowchart: { curve: 'basis', padding: 20 },
  mindmap: { padding: 20 },
});

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
  className?: string;
}

let idCounter = 0;

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, caption, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderChart = async () => {
      try {
        const id = `mermaid-${Date.now()}-${idCounter++}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart.trim());
        setSvg(renderedSvg);
        setError(null);
      } catch (err: any) {
        console.error('Mermaid render error:', err);
        setError(err.message || 'Failed to render diagram');
      }
    };
    renderChart();
  }, [chart]);

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-sm p-4 text-red-700 text-sm ${className}`}>
        <p className="font-bold mb-1">Diagram Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="bg-[#fdfbf7] border border-scrapbook-tan/20 rounded-sm shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none rounded-sm mix-blend-multiply"
          style={{ backgroundImage: 'url("/cream-paper.png")' }} />

        {/* Diagram content */}
        <div
          ref={containerRef}
          className="p-4 sm:p-6 relative z-10 flex items-center justify-center [&_svg]:max-w-full [&_svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svg }}
        />

        {/* Caption */}
        {caption && (
          <div className="px-4 sm:px-6 pb-4 relative z-10">
            <p className="text-center font-handwriting text-2xl text-scrapbook-ink/70 italic">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

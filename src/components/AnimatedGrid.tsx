import { useEffect, useRef } from "react";

const AnimatedGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const nodes = nodesRef.current;
    if (!grid || !nodes) return;

    // Initialize floating elements with more dynamic properties
    const floatingElements = Array.from(nodes.children);
    floatingElements.forEach((element, index) => {
      const el = element as HTMLElement;
      const size = 1 + Math.random() * 2;
      const opacity = 0.3 + Math.random() * 0.5;
      const animDelay = index * (Math.random() * 0.05 + 0.02);
      
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.opacity = opacity.toString();
      el.style.animationDelay = `${animDelay}s`;
    });

    // Observe when the grid enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = nodes.children;
            Array.from(children).forEach((child, index) => {
              const animDelay = index * (Math.random() * 0.03 + 0.02);
              (child as HTMLElement).style.animationDelay = `${animDelay}s`;
              child.classList.add('animate-grid-in');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (grid) {
      observer.observe(grid);
    }

    return () => {
      if (grid) {
        observer.unobserve(grid);
      }
    };
  }, []);

  // Generate connection points between some nodes
  const generateConnections = () => {
    const connections = [];
    const numConnections = 8;
    
    for (let i = 0; i < numConnections; i++) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = startX + (Math.random() * 30 - 15);
      const endY = startY + (Math.random() * 30 - 15);
      
      connections.push(
        <div
          key={`conn-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-primary/30 to-primary/10 animate-pulse-slow"
          style={{
            left: `${startX}%`,
            top: `${startY}%`,
            width: `${Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))}px`,
            transform: `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`,
            transformOrigin: 'left center',
            opacity: 0.2 + Math.random() * 0.3
          }}
        />
      );
    }
    
    return connections;
  };

  return (
    <>
      {/* Multi-layered grid for infinite effect */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden"
      >
        {/* Base grid layer - moving right */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'data-flow-right 25s linear infinite'
          }}
        />
        
        {/* Second grid layer - moving left */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'data-flow-left 30s linear infinite'
          }}
        />
        
        {/* Diagonal accent layer */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(135deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'data-flow-diagonal 40s linear infinite'
          }}
        />
        
        {/* Floating nodes and connections */}
        <div ref={nodesRef} className="absolute inset-0">
          {/* Connection lines between some nodes */}
          {generateConnections()}
          
          {/* Floating nodes with improved variety */}
          {Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() > 0.8 ? 'w-2 h-2' : 'w-1 h-1';
            const intensity = Math.random();
            const color = intensity > 0.7 ? 'bg-primary' : (intensity > 0.4 ? 'bg-accent' : 'bg-secondary/70');
            
            return (
              <div
                key={i}
                className={`absolute ${size} ${color} rounded-full animate-float blur-[0.2px]`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimatedGrid;
import { useEffect, useRef, useState } from 'react';

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  delay: number;
}

const InteractiveFloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number | null>(null);
  const INTERACTION_DISTANCE = 150; // pixels
  const NUM_PARTICLES = 20;

  // Generate random particles
  useEffect(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    const newParticles: FloatingParticle[] = [];
    
    // Colors array
    const colors = [
      'bg-primary', 
      'bg-secondary', 
      'bg-accent', 
      'bg-primary-glow'
    ];
    
    for (let i = 0; i < NUM_PARTICLES; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 2, // 2-7px
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7
        delay: i * 200 // Stagger the animation start
      });
    }
    
    setParticles(newParticles);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top } = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - left,
        y: e.clientY - top
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!containerRef.current || particles.length === 0) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate distance to mouse
          const dx = particle.x - mousePosition.x;
          const dy = particle.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Base speed + mouse interaction
          let speedX = particle.speedX;
          let speedY = particle.speedY;
          
          // If mouse is close, particles are attracted to or repelled by it
          if (distance < INTERACTION_DISTANCE) {
            const force = (INTERACTION_DISTANCE - distance) / INTERACTION_DISTANCE;
            // Particles are repelled with this implementation
            speedX -= (dx / distance) * force * 0.5;
            speedY -= (dy / distance) * force * 0.5;
          }
          
          // Update position with boundary checking
          let newX = particle.x + speedX;
          let newY = particle.y + speedY;
          
          // Bounce off walls
          if (newX < 0 || newX > width) {
            speedX = -speedX;
            newX = newX < 0 ? 0 : width;
          }
          
          if (newY < 0 || newY > height) {
            speedY = -speedY;
            newY = newY < 0 ? 0 : height;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY,
            speedX,
            speedY
          };
        })
      );
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation with a slight delay to let things initialize
    const timeoutId = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animate);
    }, 100);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, [particles, mousePosition]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} backdrop-blur-sm transition-transform`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: '0 0 10px var(--glow-primary)',
            transform: `scale(${
              Math.sqrt(
                Math.min(
                  INTERACTION_DISTANCE,
                  Math.max(
                    0,
                    INTERACTION_DISTANCE - 
                    Math.sqrt(
                      Math.pow(mousePosition.x - particle.x, 2) + 
                      Math.pow(mousePosition.y - particle.y, 2)
                    )
                  )
                )
              ) / 20 + 1
            })`,
            transition: 'transform 0.1s ease-out',
            animation: `float-random ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${particle.delay}ms`
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveFloatingElements;

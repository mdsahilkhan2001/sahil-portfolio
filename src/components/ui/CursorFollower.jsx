 import React, { useState, useEffect } from 'react';

export default function MagicalCursor() {
  // MUST use useState for positions to trigger re-renders
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);
  const [particles, setParticles] = useState([]);
  const [rings, setRings] = useState([]);
  const [theme, setTheme] = useState('light');

  // Don't render on mobile
  const [isMobile] = useState(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  });

  // Hide default cursor
  useEffect(() => {
    if (isMobile) return;
    
    const styleId = 'custom-cursor-styles';
    let style = document.getElementById(styleId);
    
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        * { cursor: none !important; }
        *:focus-visible {
          outline: 2px solid #a855f7 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, [isMobile]);

  // Detect theme
  useEffect(() => {
    const checkTheme = () => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Smooth cursor following
  useEffect(() => {
    if (isMobile) return;
    
    let animationId;
    
    const animate = () => {
      setCursorPosition(prev => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, isMobile]);

  // Mouse tracking
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setMousePosition({ x, y });
      setIsVisible(true);
      
      // Add trail
      setTrail(prev => [...prev, { x, y, id: Date.now() + Math.random() }].slice(-20));
      
      // Spawn particles occasionally
      if (Math.random() > 0.7) {
        setParticles(prev => [...prev, {
          id: Date.now() + Math.random(),
          x: x + (Math.random() - 0.5) * 30,
          y: y + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          size: Math.random() * 4 + 2,
          life: 0,
          type: Math.floor(Math.random() * 3)
        }].slice(-80));
      }
      
      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick ||
        target.closest('a') ||
        target.closest('button');
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      
      // Create ring
      setRings(prev => [...prev, {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: 0
      }].slice(-5));
      
      // Explosion particles
      const explosion = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        angle: (i * 360) / 15,
        distance: 0,
        size: Math.random() * 5 + 2,
        life: 0,
        type: Math.floor(Math.random() * 3)
      }));
      
      setParticles(prev => [...prev, ...explosion].slice(-80));
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => {
          if (p.distance !== undefined) {
            // Explosion particle
            const radian = (p.angle * Math.PI) / 180;
            const dist = p.distance + 4;
            return {
              ...p,
              distance: dist,
              life: p.life + 1,
              x: p.x + Math.cos(radian) * dist,
              y: p.y + Math.sin(radian) * dist
            };
          }
          // Regular particle
          return {
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1,
            life: p.life + 1
          };
        }).filter(p => p.life < 30)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles.length]);

  // Animate rings
  useEffect(() => {
    if (rings.length === 0) return;

    const interval = setInterval(() => {
      setRings(prev => 
        prev.map(r => ({ ...r, size: r.size + 10 }))
           .filter(r => r.size < 120)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [rings.length]);

  // Colors
  const colors = theme === 'dark' 
    ? {
        primary: '#a855f7',
        secondary: '#ec4899',
        glow1: 'rgba(168, 85, 247, 0.6)',
        glow2: 'rgba(236, 72, 153, 0.5)',
        trail: 'rgba(168, 85, 247, 0.3)',
        particles: ['#a855f7', '#ec4899', '#f59e0b']
      }
    : {
        primary: '#9333ea',
        secondary: '#db2777',
        glow1: 'rgba(147, 51, 234, 0.5)',
        glow2: 'rgba(219, 39, 119, 0.4)',
        trail: 'rgba(147, 51, 234, 0.25)',
        particles: ['#9333ea', '#db2777', '#f59e0b']
      };

  if (isMobile || !isVisible) return null;

  const scale = isClicking ? 0.7 : isHovering ? 1.5 : 1;

  return (
    <>
      <style>{`
        @keyframes cursor-pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes cursor-ping {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-[9998]" role="presentation" aria-hidden="true">
        {/* Trail */}
        {trail.map((pos, i) => {
          const progress = (i + 1) / trail.length;
          const size = 8 + progress * 12;
          
          return (
            <div
              key={pos.id}
              className="absolute rounded-full"
              style={{
                left: pos.x - size / 2,
                top: pos.y - size / 2,
                width: size,
                height: size,
                background: `radial-gradient(circle, ${colors.trail}, transparent)`,
                opacity: progress * 0.6
              }}
            />
          );
        })}

        {/* Particles */}
        {particles.map(p => {
          const opacity = 1 - p.life / 30;
          const color = colors.particles[p.type % colors.particles.length];
          
          return (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                background: color,
                opacity: opacity,
                boxShadow: `0 0 6px ${color}`
              }}
            />
          );
        })}

        {/* Rings */}
        {rings.map(ring => {
          const opacity = 1 - ring.size / 120;
          
          return (
            <div
              key={ring.id}
              className="absolute rounded-full"
              style={{
                left: ring.x - ring.size / 2,
                top: ring.y - ring.size / 2,
                width: ring.size,
                height: ring.size,
                border: `2px solid ${colors.primary}`,
                opacity: opacity,
                boxShadow: `0 0 15px ${colors.glow1}`
              }}
            />
          );
        })}

        {/* Main Cursor */}
        <div
          className="absolute"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: `translate(-50%, -50%) scale(${scale})`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Glow */}
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: 80,
              height: 80,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${colors.glow1}, transparent)`,
              animation: 'cursor-pulse 2s infinite'
            }}
          />
          
          {/* Crystal Cursor */}
          <svg width="40" height="40" viewBox="0 0 40 40" style={{
            position: 'relative',
            filter: `drop-shadow(0 0 8px ${colors.glow1})`
          }}>
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: colors.primary, stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: colors.secondary, stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Diamond */}
            <path d="M 20 5 L 35 20 L 20 35 L 5 20 Z" fill="url(#grad)" opacity="0.9" />
            
            {/* Facets */}
            <path d="M 20 5 L 27.5 20 L 20 20 Z" fill="white" opacity="0.3" />
            <path d="M 20 5 L 12.5 20 L 20 20 Z" fill="white" opacity="0.25" />
            <path d="M 20 35 L 27.5 20 L 20 20 Z" fill="black" opacity="0.2" />
            
            {/* Center sparkle */}
            <circle cx="20" cy="20" r="3" fill="white" opacity="0.8" />
          </svg>

          {/* Click burst */}
          {isClicking && (
            <div
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: 40,
                height: 40,
                border: `3px solid ${colors.secondary}`,
                animation: 'cursor-ping 0.5s ease-out'
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

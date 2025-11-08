 import React, { useState, useEffect, useRef } from 'react';

export default function UltraPremiumCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [cursorShape, setCursorShape] = useState('diamond'); // diamond, circle, star, liquid
  const [trail, setTrail] = useState([]);
  const [particles, setParticles] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [liquidBlobs, setLiquidBlobs] = useState([]);
  const [theme, setTheme] = useState('light');
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: -100, y: -100 });
  const rotationRef = useRef(0);

  const [isMobile] = useState(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  });

  // Hide default cursor
  useEffect(() => {
    if (isMobile) return;
    
    const styleId = 'ultra-cursor-styles';
    let style = document.getElementById(styleId);
    
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        * { cursor: none !important; }
        a, button, input, select, textarea, [role="button"], [onclick] {
          cursor: none !important;
        }
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

  // Advanced spring physics with magnetic pull
  useEffect(() => {
    if (isMobile) return;
    
    let animationId;
    
    const animate = () => {
      setCursorPosition(prev => {
        let targetX = mousePosition.x;
        let targetY = mousePosition.y;
        
        // Enhanced magnetic effect with smooth transition
        if (isHovering && hoverType !== 'default') {
          const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
          if (element) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
              Math.pow(mousePosition.x - centerX, 2) + 
              Math.pow(mousePosition.y - centerY, 2)
            );
            
            // Stronger magnetic pull within 100px
            if (distance < 100) {
              const pullStrength = Math.pow((100 - distance) / 100, 2) * 0.4;
              targetX += (centerX - mousePosition.x) * pullStrength;
              targetY += (centerY - mousePosition.y) * pullStrength;
            }
          }
        }
        
        // Advanced spring physics
        const dx = targetX - prev.x;
        const dy = targetY - prev.y;
        const springStrength = isClicking ? 0.3 : isHovering ? 0.25 : 0.18;
        const damping = 0.85;
        
        const newX = prev.x + dx * springStrength;
        const newY = prev.y + dy * springStrength;
        
        // Calculate velocity and rotation
        const vx = (newX - prev.x) * damping;
        const vy = (newY - prev.y) * damping;
        velocityRef.current = { x: vx, y: vy };
        setVelocity({ x: vx, y: vy });
        
        // Smooth rotation based on velocity
        const angle = Math.atan2(vy, vx) * (180 / Math.PI);
        rotationRef.current += (angle - rotationRef.current) * 0.1;
        setRotation(rotationRef.current);
        
        return { x: newX, y: newY };
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, isMobile, isHovering, isClicking, hoverType]);

  // Ultra-advanced mouse tracking
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setMousePosition({ x, y });
      setIsVisible(true);
      
      // Calculate speed for effects
      const speed = Math.sqrt(
        Math.pow(x - lastPos.current.x, 2) + 
        Math.pow(y - lastPos.current.y, 2)
      );
      
      // Enhanced rainbow trail with speed-based variation
      setTrail(prev => {
        return [...prev, { 
          x, 
          y, 
          id: Date.now() + Math.random(),
          speed: speed,
          time: Date.now()
        }].slice(-30);
      });
      
      // Liquid blobs effect for smooth movement
      if (speed > 1) {
        setLiquidBlobs(prev => [...prev, {
          id: Date.now() + Math.random(),
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          size: Math.random() * 15 + 10,
          life: 0
        }].slice(-15));
      }
      
      lastPos.current = { x, y };
      
      // Advanced velocity-based particles
      if (speed > 3 && Math.random() > 0.4) {
        const particleEmojis = ['✨', '⭐', '💫', '🌟', '✦', '🔮', '💎', '🌈'];
        setParticles(prev => [...prev, {
          id: Date.now() + Math.random(),
          x: x + (Math.random() - 0.5) * 50,
          y: y + (Math.random() - 0.5) * 50,
          vx: velocityRef.current.x * 0.5 + (Math.random() - 0.5) * 3,
          vy: velocityRef.current.y * 0.5 + (Math.random() - 0.5) * 3,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 20,
          life: 0,
          emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
          scale: Math.random() * 0.5 + 0.5
        }].slice(-50));
      }
      
      // Context-aware cursor morphing
      const target = e.target;
      let type = 'default';
      let text = '';
      let shape = 'diamond';
      
      if (target.tagName === 'A' || target.closest('a')) {
        type = 'link';
        text = '👉 View';
        shape = 'circle';
        setIsHovering(true);
      } else if (target.tagName === 'BUTTON' || target.closest('button') || target.getAttribute('role') === 'button') {
        type = 'button';
        text = '🎯 Click';
        shape = 'star';
        setIsHovering(true);
      } else if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        type = 'input';
        text = '✏️ Type';
        shape = 'liquid';
        setIsHovering(true);
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        type = 'image';
        text = '🔍 View';
        shape = 'circle';
        setIsHovering(true);
      } else if (target.onclick || target.style.cursor === 'pointer') {
        type = 'clickable';
        text = '👆 Click';
        shape = 'diamond';
        setIsHovering(true);
      } else {
        setIsHovering(false);
        text = '';
        shape = 'diamond';
      }
      
      setHoverType(type);
      setCursorText(text);
      setCursorShape(shape);
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      
      // Multiple ripple waves
      const rippleCount = 5;
      const newRipples = Array.from({ length: rippleCount }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        size: 0,
        delay: i * 0.08,
        opacity: 1 - (i * 0.15)
      }));
      
      setRipples(prev => [...prev, ...newRipples].slice(-15));
      
      // Explosive particle burst
      const burstEmojis = ['💥', '✨', '🌟', '⚡', '💫', '🎉', '🎊', '🔥', '💖', '🌈'];
      const explosion = Array.from({ length: 25 }, (_, i) => ({
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        angle: (i * 360) / 25,
        distance: 0,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 30,
        life: 0,
        emoji: burstEmojis[Math.floor(Math.random() * burstEmojis.length)],
        scale: Math.random() * 0.8 + 0.4
      }));
      
      setParticles(prev => [...prev, ...explosion].slice(-50));
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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

  // Animate particles with physics
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => {
          if (p.distance !== undefined) {
            const radian = (p.angle * Math.PI) / 180;
            const dist = p.distance + 6;
            const drag = 0.95;
            return {
              ...p,
              distance: dist * drag,
              life: p.life + 1,
              rotation: p.rotation + p.rotationSpeed,
              scale: p.scale * 0.98
            };
          }
          return {
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.vx * 0.95,
            vy: p.vy * 0.95 + 0.2,
            life: p.life + 1,
            rotation: p.rotation + p.rotationSpeed,
            scale: p.scale * 0.97
          };
        }).filter(p => p.life < 40 && p.scale > 0.1)
      );
    }, 35);

    return () => clearInterval(interval);
  }, [particles.length]);

  // Animate ripples with easing
  useEffect(() => {
    if (ripples.length === 0) return;

    const interval = setInterval(() => {
      setRipples(prev => 
        prev.map(r => ({ 
          ...r, 
          size: r.size + 18,
          opacity: r.opacity * 0.95
        })).filter(r => r.size < 250 && r.opacity > 0.05)
      );
    }, 25);

    return () => clearInterval(interval);
  }, [ripples.length]);

  // Animate liquid blobs
  useEffect(() => {
    if (liquidBlobs.length === 0) return;

    const interval = setInterval(() => {
      setLiquidBlobs(prev => 
        prev.map(b => ({ 
          ...b, 
          life: b.life + 1,
          size: b.size * 1.05
        })).filter(b => b.life < 20)
      );
    }, 40);

    return () => clearInterval(interval);
  }, [liquidBlobs.length]);

  // Premium color schemes
  const colors = theme === 'dark' 
    ? {
        primary: '#a855f7',
        secondary: '#ec4899',
        accent: '#06b6d4',
        success: '#10b981',
        warning: '#f59e0b',
        glow1: 'rgba(168, 85, 247, 0.9)',
        glow2: 'rgba(236, 72, 153, 0.7)',
        trail: 'rgba(168, 85, 247, 0.5)',
        link: '#3b82f6',
        button: '#10b981',
        input: '#f59e0b',
        image: '#ec4899',
      }
    : {
        primary: '#9333ea',
        secondary: '#db2777',
        accent: '#0891b2',
        success: '#059669',
        warning: '#d97706',
        glow1: 'rgba(147, 51, 234, 0.7)',
        glow2: 'rgba(219, 39, 119, 0.6)',
        trail: 'rgba(147, 51, 234, 0.35)',
        link: '#2563eb',
        button: '#059669',
        input: '#d97706',
        image: '#db2777',
      };

  const getHoverColor = () => {
    switch(hoverType) {
      case 'link': return colors.link;
      case 'button': return colors.button;
      case 'input': return colors.input;
      case 'image': return colors.image;
      default: return colors.primary;
    }
  };

  // Render cursor shape based on context
  const renderCursorShape = (size, currentColor) => {
    const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
    
    switch(cursorShape) {
      case 'circle':
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <defs>
              <radialGradient id="circle-grad">
                <stop offset="0%" style={{ stopColor: currentColor, stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: colors.secondary, stopOpacity: 0.8 }} />
              </radialGradient>
            </defs>
            <circle cx="25" cy="25" r="20" fill="url(#circle-grad)" opacity="0.9" />
            <circle cx="25" cy="25" r="15" fill="white" opacity="0.3" />
            <circle cx="25" cy="25" r="5" fill="white" opacity="0.9" />
          </svg>
        );
        
      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <defs>
              <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentColor, stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: colors.accent, stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M 25 5 L 29 19 L 44 19 L 32 28 L 37 42 L 25 33 L 13 42 L 18 28 L 6 19 L 21 19 Z" 
                  fill="url(#star-grad)" opacity="0.95" />
            <circle cx="25" cy="25" r="6" fill="white" opacity="0.9" />
          </svg>
        );
        
      case 'liquid':
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <defs>
              <linearGradient id="liquid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentColor, stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: colors.secondary, stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: colors.accent, stopOpacity: 1 }} />
              </linearGradient>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              </filter>
            </defs>
            <g filter="url(#gooey)">
              <ellipse cx="25" cy="25" rx="18" ry="22" fill="url(#liquid-grad)" opacity="0.9" />
              <circle cx="25" cy="18" r="8" fill="url(#liquid-grad)" opacity="0.8" />
              <circle cx="25" cy="32" r="8" fill="url(#liquid-grad)" opacity="0.8" />
            </g>
          </svg>
        );
        
      default: // diamond
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <defs>
              <linearGradient id="diamond-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentColor, stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: colors.secondary, stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: colors.accent, stopOpacity: 1 }} />
              </linearGradient>
              <radialGradient id="inner-glow">
                <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: currentColor, stopOpacity: 0 }} />
              </radialGradient>
            </defs>
            <path d="M 25 3 L 43 25 L 25 47 L 7 25 Z" fill="url(#diamond-grad)" opacity="0.95" />
            <path d="M 25 3 L 34 25 L 25 25 Z" fill="white" opacity="0.4" />
            <path d="M 25 3 L 16 25 L 25 25 Z" fill="white" opacity="0.35" />
            <path d="M 25 47 L 34 25 L 25 25 Z" fill="black" opacity="0.25" />
            <path d="M 25 47 L 16 25 L 25 25 Z" fill="black" opacity="0.2" />
            <circle cx="25" cy="25" r="12" fill="url(#inner-glow)" />
            <circle cx="25" cy="25" r="5" fill="white" opacity="0.9" />
            {[0, 90, 180, 270].map((angle, i) => {
              const rad = ((angle + Date.now() / 15) * Math.PI) / 180;
              const x = 25 + Math.cos(rad) * 14;
              const y = 25 + Math.sin(rad) * 14;
              return <circle key={i} cx={x} cy={y} r="2" fill="white" opacity="0.95" />;
            })}
          </svg>
        );
    }
  };

  if (isMobile || !isVisible) return null;

  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const scale = isClicking ? 0.5 : isHovering ? 2.2 : 1;
  const currentColor = getHoverColor();

  return (
    <>
      <style>{`
        @keyframes ultra-pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.4); }
        }
        @keyframes ultra-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ripple-wave {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        @keyframes liquid-morph {
          0%, 100% { border-radius: 50%; }
          33% { border-radius: 40% 60%; }
          66% { border-radius: 60% 40%; }
        }
        @keyframes particle-float {
          0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-40px) scale(0.3) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div 
        className="fixed inset-0 pointer-events-none z-[9998]" 
        role="presentation" 
        aria-hidden="true"
        style={{ contain: 'layout style paint' }}
      >
        {/* Ultra Rainbow Trail */}
        {trail.map((pos, i) => {
          const progress = (i + 1) / trail.length;
          const size = 4 + progress * 20;
          const hue = ((Date.now() / 50 + i * 15) % 360);
          const saturation = 70 + (pos.speed * 2);
          const lightness = 50 + (progress * 10);
          
          return (
            <div
              key={pos.id}
              className="absolute rounded-full"
              style={{
                left: pos.x,
                top: pos.y,
                width: size,
                height: size,
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, hsla(${hue}, ${saturation}%, ${lightness}%, ${progress * 0.8}), transparent)`,
                opacity: progress * 0.9,
                filter: `blur(${4 - progress * 3}px)`,
                mixBlendMode: 'screen',
                willChange: 'transform, opacity'
              }}
            />
          );
        })}

        {/* Liquid Blobs Effect */}
        {liquidBlobs.map(blob => {
          const opacity = 1 - blob.life / 20;
          return (
            <div
              key={blob.id}
              className="absolute"
              style={{
                left: blob.x,
                top: blob.y,
                width: blob.size,
                height: blob.size,
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, ${colors.glow1}, transparent)`,
                opacity: opacity * 0.6,
                filter: 'blur(10px)',
                animation: 'liquid-morph 2s ease-in-out infinite',
                mixBlendMode: 'screen',
                willChange: 'transform, opacity'
              }}
            />
          );
        })}

        {/* Premium Emoji Particles */}
        {particles.map(p => {
          const opacity = 1 - p.life / 40;
          
          if (p.distance !== undefined) {
            const radian = (p.angle * Math.PI) / 180;
            const x = p.x + Math.cos(radian) * p.distance;
            const y = p.y + Math.sin(radian) * p.distance;
            
            return (
              <div
                key={p.id}
                className="absolute text-2xl"
                style={{
                  left: x,
                  top: y,
                  transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${p.scale})`,
                  opacity: opacity,
                  filter: `drop-shadow(0 0 4px ${currentColor})`,
                  willChange: 'transform, opacity'
                }}
              >
                {p.emoji}
              </div>
            );
          }
          
          return (
            <div
              key={p.id}
              className="absolute text-xl"
              style={{
                left: p.x,
                top: p.y,
                transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${p.scale})`,
                opacity: opacity,
                filter: `drop-shadow(0 0 3px ${currentColor})`,
                willChange: 'transform, opacity'
              }}
            >
              {p.emoji}
            </div>
          );
        })}

        {/* Ultra Ripples with Waves */}
        {ripples.map(ripple => {
          return (
            <div
              key={ripple.id}
              className="absolute rounded-full"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                transform: 'translate(-50%, -50%)',
                border: `4px solid ${currentColor}`,
                opacity: ripple.opacity,
                boxShadow: `0 0 40px ${colors.glow1}, inset 0 0 30px ${colors.glow2}`,
                filter: 'blur(1px)',
                mixBlendMode: 'screen',
                willChange: 'transform, opacity'
              }}
            />
          );
        })}

        {/* Main Cursor System */}
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            transition: 'transform 0.08s cubic-bezier(0.23, 1, 0.32, 1)',
            willChange: 'transform'
          }}
        >
          {/* Multiple rotating rings */}
          {[1, 2, 3].map((ring, i) => (
            <div
              key={ring}
              className="absolute"
              style={{
                width: (50 + i * 15) * scale,
                height: (50 + i * 15) * scale,
                transform: 'translate(-50%, -50%)',
                border: `${2 - i * 0.5}px solid ${currentColor}`,
                borderRadius: '50%',
                opacity: 0.3 - i * 0.08,
                animation: `ultra-rotate ${4 - i}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`,
                willChange: 'transform'
              }}
            />
          ))}

          {/* Pulsing glow layers with blend mode */}
          <div
            className="absolute"
            style={{
              width: 120,
              height: 120,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${colors.glow1}, transparent 70%)`,
              animation: 'ultra-pulse 2.5s ease-in-out infinite',
              mixBlendMode: 'screen',
              opacity: 0.7,
              willChange: 'transform, opacity'
            }}
          />
          <div
            className="absolute"
            style={{
              width: 90,
              height: 90,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${colors.glow2}, transparent 70%)`,
              animation: 'ultra-pulse 2.5s ease-in-out infinite 0.6s',
              mixBlendMode: 'screen',
              opacity: 0.6,
              willChange: 'transform, opacity'
            }}
          />
          
          {/* Dynamic cursor shape */}
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) rotate(${rotation + speed * 3}deg) scale(${scale})`,
              filter: `drop-shadow(0 0 15px ${currentColor}) drop-shadow(0 0 30px ${colors.glow2})`,
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              willChange: 'transform'
            }}
          >
            {renderCursorShape(50, currentColor)}
          </div>

          {/* Cursor Text with improved animation */}
          {cursorText && (
            <div
              className="absolute whitespace-nowrap text-sm font-bold px-4 py-2 rounded-full"
              style={{
                left: 40,
                top: -12,
                background: `linear-gradient(135deg, ${currentColor}, ${colors.secondary})`,
                color: 'white',
                boxShadow: `0 6px 20px ${colors.glow1}`,
                animation: 'particle-float 0.4s ease-out forwards',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                willChange: 'transform'
              }}
            >
              {cursorText}
            </div>
          )}

          {/* Enhanced click burst */}
          {isClicking && (
            <>
              {[1, 2, 3].map(burst => (
                <div
                  key={burst}
                  className="absolute rounded-full"
                  style={{
                    width: 60,
                    height: 60,
                    transform: 'translate(-50%, -50%)',
                    border: `${5 - burst}px solid ${currentColor}`,
                    animation: `ripple-wave ${0.7 + burst * 0.1}s ease-out`,
                    animationDelay: `${burst * 0.05}s`,
                    willChange: 'transform'
                  }}
                />
              ))}
              <div
                className="absolute rounded-full"
                style={{
                  width: 60,
                  height: 60,
                  transform: 'translate(-50%, -50%)',
                  background: `radial-gradient(circle, ${colors.glow2}, transparent)`,
                  animation: 'ripple-wave 0.5s ease-out',
                  mixBlendMode: 'screen',
                  willChange: 'transform'
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

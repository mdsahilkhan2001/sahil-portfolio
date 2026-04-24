import React, { useEffect, useRef } from 'react';

/**
 * Premium Interactive 3D Dice Cursor (Reverted to stable version)
 * Enhanced size, dynamic glowing effects, and responsive link interactions.
 * High performance via CSS 3D and requestAnimationFrame.
 */
const CursorFollower = () => {
  const cubeRef = useRef(null);
  const diceRef = useRef(null);
  const shadowRef = useRef(null);
  
  const endX = useRef(0);
  const endY = useRef(0);
  const _x = useRef(0);
  const _y = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      endX.current = e.clientX;
      endY.current = e.clientY;
    };

    const onMouseDown = () => {
      if (diceRef.current) {
        diceRef.current.style.animationDuration = '0.4s';
        diceRef.current.style.transform = 'scale(1.4)';
        diceRef.current.classList.add('active');
      }
    };

    const onMouseUp = () => {
      if (diceRef.current) {
        diceRef.current.style.animationDuration = '4s';
        diceRef.current.style.transform = 'scale(1)';
        diceRef.current.classList.remove('active');
      }
    };

    const animate = () => {
      // Fluid movement with ease
      _x.current += (endX.current - _x.current) / 5;
      _y.current += (endY.current - _y.current) / 5;

      const velocity = Math.abs(endX.current - _x.current) + Math.abs(endY.current - _y.current);
      
      if (cubeRef.current) {
        cubeRef.current.style.transform = `translate3d(${_x.current}px, ${_y.current}px, 0)`;
      }

      if (shadowRef.current) {
        // Shadow moves with a bit more lag for depth
        shadowRef.current.style.transform = `translate3d(${_x.current}px, ${_y.current + 25}px, 0) scale(${1 + velocity / 100})`;
        shadowRef.current.style.opacity = Math.max(0.1, 0.4 - velocity / 200);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleLinks = () => {
      const interactives = document.querySelectorAll('a, button, .interactive');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (diceRef.current) {
            diceRef.current.classList.add('hovering');
          }
        });
        el.addEventListener('mouseleave', () => {
          if (diceRef.current) {
            diceRef.current.classList.remove('hovering');
          }
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    requestRef.current = requestAnimationFrame(animate);
    handleLinks();

    const style = document.createElement('style');
    style.innerHTML = `
      * { cursor: none !important; }
      a, button { cursor: none !important; }
      
      @keyframes rotateDicePremium {
        0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        33% { transform: rotateX(120deg) rotateY(180deg) rotateZ(60deg); }
        66% { transform: rotateX(240deg) rotateY(90deg) rotateZ(180deg); }
        100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
      }

      .dice-scene {
        width: 42px;
        height: 42px;
        perspective: 1200px;
      }

      .dice-cube {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        animation: rotateDicePremium 5s infinite linear;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      /* Hover state - turns purple/blue with glow */
      .dice-cube.hovering .face {
        background: #7c3aed;
        border-color: #a78bfa;
        box-shadow: 0 0 20px rgba(124, 58, 237, 0.6);
      }
      .dice-cube.hovering .dot {
        background: white;
      }

      /* Active/Click state - fast spin and bright glow */
      .dice-cube.active .face {
        background: #3b82f6;
        border-color: #60a5fa;
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
      }

      .face {
        position: absolute;
        width: 42px;
        height: 42px;
        background: rgba(255, 255, 255, 0.95);
        border: 1.5px solid #e2e8f0;
        border-radius: 8px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        padding: 5px;
        box-shadow: inset 0 0 8px rgba(0,0,0,0.05);
        backface-visibility: visible;
        transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      }

      .dot {
        width: 6px;
        height: 6px;
        background: #1e293b;
        border-radius: 50%;
        align-self: center;
        justify-self: center;
        transition: background 0.3s ease;
      }

      .front  { transform: rotateY(0deg) translateZ(21px); }
      .back   { transform: rotateY(180deg) translateZ(21px); }
      .right  { transform: rotateY(90deg) translateZ(21px); }
      .left   { transform: rotateY(-90deg) translateZ(21px); }
      .top    { transform: rotateX(90deg) translateZ(21px); }
      .bottom { transform: rotateX(-90deg) translateZ(21px); }

      .f1 .dot:nth-child(1) { grid-area: 2 / 2; }
      .f2 .dot:nth-child(1) { grid-area: 1 / 1; }
      .f2 .dot:nth-child(2) { grid-area: 3 / 3; }
      .f3 .dot:nth-child(1) { grid-area: 1 / 1; }
      .f3 .dot:nth-child(2) { grid-area: 2 / 2; }
      .f3 .dot:nth-child(3) { grid-area: 3 / 3; }
      .f4 .dot:nth-child(1) { grid-area: 1 / 1; }
      .f4 .dot:nth-child(2) { grid-area: 1 / 3; }
      .f4 .dot:nth-child(3) { grid-area: 3 / 1; }
      .f4 .dot:nth-child(4) { grid-area: 3 / 3; }
      .f5 .dot:nth-child(1) { grid-area: 1 / 1; }
      .f5 .dot:nth-child(2) { grid-area: 1 / 3; }
      .f5 .dot:nth-child(3) { grid-area: 2 / 2; }
      .f5 .dot:nth-child(4) { grid-area: 3 / 1; }
      .f5 .dot:nth-child(5) { grid-area: 3 / 3; }
      .f6 .dot { grid-column: span 1; }

      .dice-shadow {
        position: fixed;
        top: 0;
        left: 0;
        width: 30px;
        height: 10px;
        background: radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        margin-top: -5px;
        margin-left: -15px;
        will-change: transform, opacity;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(requestRef.current);
      style.remove();
    };
  }, []);

  return (
    <>
      <div ref={shadowRef} className="dice-shadow" />
      <div
        ref={cubeRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ marginTop: '-21px', marginLeft: '-21px', willChange: 'transform' }}
      >
        <div className="dice-scene">
          <div ref={diceRef} className="dice-cube">
            <div className="face front f1"><div className="dot"></div></div>
            <div className="face back f6">
              <div className="dot"></div><div className="dot"></div><div className="dot"></div>
              <div className="dot"></div><div className="dot"></div><div className="dot"></div>
            </div>
            <div className="face right f2"><div className="dot"></div><div className="dot"></div></div>
            <div className="face left f5">
              <div className="dot"></div><div className="dot"></div><div className="dot"></div>
              <div className="dot"></div><div className="dot"></div>
            </div>
            <div className="face top f3"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
            <div className="face bottom f4">
              <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CursorFollower;

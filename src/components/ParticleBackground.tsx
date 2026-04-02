import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 150;
    const connectionDistance = 150; // Slightly reduced
    const colors = ['#ffffff', '#e0b0ff', '#b026ff', '#7000ff', '#ff00ff'];
    let mouse = { x: -1000, y: -1000 };
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const initParticles = () => {
      // Dynamic particle count based on screen width
      const count = window.innerWidth < 768 ? 50 : 120;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2.5, // Reduced velocity slightly
          vy: (Math.random() - 0.5) * 2.5,
          size: Math.random() * 2.5 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Move with a bit of chaotic jitter
        p.x += p.vx + Math.sin(time + i) * 0.3;
        p.y += p.vy + Math.cos(time + i) * 0.3;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (Stronger Repel)
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          const angle = Math.atan2(mdy, mdx);
          const force = (200 - mdist) / 200;
          p.x -= Math.cos(angle) * force * 8;
          p.y -= Math.sin(angle) * force * 8;
        }

        // Pulsing size
        const pulse = Math.sin(time * 1.5 + i) * 0.4 + 1;
        const currentSize = p.size * pulse;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        // REMOVED: ctx.shadowBlur = 20 * pulse; - This was the main performance killer

        // Connections - Only for near particles to save performance
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          // Use manhattan distance for early exit check to avoid expensive sqrt
          if (Math.abs(dx) < connectionDistance && Math.abs(dy) < connectionDistance) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = (1 - dist / connectionDistance) * 0.3;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ background: 'transparent' }}
    />
  );
};

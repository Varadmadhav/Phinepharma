import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function ClosingVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = 45;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(13, 148, 136, 0.75)",  // Teal
      "rgba(34, 197, 94, 0.65)",   // Green
      "rgba(79, 70, 229, 0.65)"    // Indigo
    ];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // slow drift
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1.5 + Math.random() * 2,
        color: colors[i % colors.length]
      });
    }

    // Draw loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 120) * 0.18;
            ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Faint glowing aura
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Boundary collision logic (wrap around edges for seamless flow)
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* High-Tech Plexus Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-45 pointer-events-none"
      />

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(13,148,136,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.035)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Faint Center Radial Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.12)_0%,transparent_75%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            Securing the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-light)] to-[var(--green)]">
              Clinical Formulations
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto mb-10 drop-shadow-lg leading-relaxed">
            From molecular validation to global pharmacy shelves, we deliver high-compliance CDMO synthesis.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:border-teal/30 rounded-full text-white font-medium hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-750 before:ease-in-out"
          >
            <span>Back to Top</span>
            <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] py-4 text-center bg-slate-950/80 backdrop-blur-sm border-t border-white/5">
        <p className="text-xs text-slate-500 font-mono tracking-wider">
          © 2026 PHINE PHARMA LLP // CDMO MANUFACTURING ALIGNED // ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
}

import { useRef, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

// Biotech Particle Data structure
interface ParticleData {
  angle: number;
  distance: number;
  color: string;
  type: "spark" | "fragment" | "glow-dot" | "molecular";
  size: number;
  rotationSpeed: number;
}

// Biotech Particle Sub-component (strictly following Rules of Hooks)
function ParticleItem({ particle, progress }: { particle: ParticleData; progress: any }) {
  // Radial trajectory with acceleration
  const px = useTransform(progress, [0, 1], [0, Math.cos(particle.angle) * particle.distance]);
  const py = useTransform(progress, [0, 1], [0, Math.sin(particle.angle) * particle.distance]);
  
  // High-speed rotation as it flies
  const rot = useTransform(progress, [0, 1], [0, particle.rotationSpeed]);
  
  // Scale peaks quickly on impact, then shrinks to 0
  const scale = useTransform(progress, [0, 0.12, 0.7, 1], [0.15, 1.3, 0.75, 0]);
  
  // Opacity fades out towards the end of travel
  const opacity = useTransform(progress, [0, 0.08, 0.65, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ x: px, y: py, rotate: rot, scale, opacity }}
      className="absolute pointer-events-none select-none z-35"
    >
      {particle.type === "spark" && (
        <div 
          style={{ 
            width: `${particle.size * 3.5}px`, 
            height: `${particle.size}px`,
            transform: `rotate(${particle.angle}rad)`,
            boxShadow: `0 0 12px ${particle.color}`,
            background: `linear-gradient(90deg, #ffffff, ${particle.color})`
          }}
          className="rounded-full opacity-90"
        />
      )}
      {particle.type === "fragment" && (
        <div 
          style={{ 
            width: `${particle.size}px`, 
            height: `${particle.size * 2.2}px`,
            borderRadius: "9999px",
            borderColor: `${particle.color}40`,
            boxShadow: `0 0 10px ${particle.color}20`
          }}
          className="border bg-gradient-to-b from-white/95 to-slate-100/10 backdrop-blur-[0.5px]"
        />
      )}
      {particle.type === "glow-dot" && (
        <div 
          style={{ 
            width: `${particle.size}px`, 
            height: `${particle.size}px`,
            boxShadow: `0 0 16px 5px ${particle.color}`,
            backgroundColor: "#ffffff"
          }}
          className="rounded-full"
        />
      )}
      {particle.type === "molecular" && (
        <span 
          style={{ 
            fontSize: `${particle.size}px`,
            textShadow: `0 0 10px ${particle.color}`,
            color: particle.color
          }}
          className="font-mono font-black select-none leading-none opacity-85"
        >
          +
        </span>
      )}
    </motion.div>
  );
}

export function CapsuleScrollIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of the entire sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // DOM Refs for direct style updates to prevent render and layout thrashing
  const heroRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // References for the 4 capsules to detect client rect coordinates
  const cap1Ref = useRef<HTMLDivElement>(null);
  const cap2Ref = useRef<HTMLDivElement>(null);
  const cap3Ref = useRef<HTMLDivElement>(null);
  const cap4Ref = useRef<HTMLDivElement>(null);

  // Cached center coordinates to prevent layout thrashing
  const capCenters = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  const updateCapsuleCenters = () => {
    const refs = [cap1Ref, cap2Ref, cap3Ref, cap4Ref];
    refs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        capCenters.current[index] = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      }
    });
  };

  // Direct DOM updates on scroll to prevent React component re-renders
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Toggle Hero Text visibility & pointer events
      if (heroRef.current) {
        const isHeroActive = latest < 0.35;
        heroRef.current.style.pointerEvents = isHeroActive ? "auto" : "none";
        heroRef.current.style.visibility = isHeroActive ? "visible" : "hidden";
      }

      // Toggle Scroll Indicator visibility
      if (scrollIndicatorRef.current) {
        const isIndicatorActive = latest < 0.12;
        scrollIndicatorRef.current.style.visibility = isIndicatorActive ? "visible" : "hidden";
      }

      // Toggle Dashboard visibility & pointer events
      if (dashboardRef.current) {
        const isDashboardActive = latest >= 0.54;
        dashboardRef.current.style.pointerEvents = isDashboardActive ? "auto" : "none";
        dashboardRef.current.style.visibility = isDashboardActive ? "visible" : "hidden";
      }
    });

    // Set initial values
    if (heroRef.current) {
      heroRef.current.style.pointerEvents = "auto";
      heroRef.current.style.visibility = "visible";
    }
    if (scrollIndicatorRef.current) {
      scrollIndicatorRef.current.style.visibility = "visible";
    }
    if (dashboardRef.current) {
      dashboardRef.current.style.pointerEvents = "none";
      dashboardRef.current.style.visibility = "hidden";
    }

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Update centers on mount and resize
  useEffect(() => {
    const timer = setTimeout(updateCapsuleCenters, 150);
    
    const handleResize = () => {
      updateCapsuleCenters();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnterContainer = () => {
    updateCapsuleCenters();
  };

  // Springs for physics-based magnetic repulsion offsets and 3D hover tilts
  const springConfig = { damping: 20, stiffness: 150 };
  
  const cap1RepelX = useSpring(0, springConfig);
  const cap1RepelY = useSpring(0, springConfig);
  const cap1TiltX = useSpring(0, springConfig);
  const cap1TiltY = useSpring(0, springConfig);

  const cap2RepelX = useSpring(0, springConfig);
  const cap2RepelY = useSpring(0, springConfig);
  const cap2TiltX = useSpring(0, springConfig);
  const cap2TiltY = useSpring(0, springConfig);

  const cap3RepelX = useSpring(0, springConfig);
  const cap3RepelY = useSpring(0, springConfig);
  const cap3TiltX = useSpring(0, springConfig);
  const cap3TiltY = useSpring(0, springConfig);

  const cap4RepelX = useSpring(0, springConfig);
  const cap4RepelY = useSpring(0, springConfig);
  const cap4TiltX = useSpring(0, springConfig);
  const cap4TiltY = useSpring(0, springConfig);

  // Mouse move listener to calculate repelling vectors
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Performance optimization: skip physics calculations if capsules have converged/burst
      if (scrollYProgress.get() >= 0.48) {
        const springs = [
          cap1RepelX, cap1RepelY, cap1TiltX, cap1TiltY,
          cap2RepelX, cap2RepelY, cap2TiltX, cap2TiltY,
          cap3RepelX, cap3RepelY, cap3TiltX, cap3TiltY,
          cap4RepelX, cap4RepelY, cap4TiltX, cap4TiltY
        ];
        springs.forEach(s => s.set(0));
        return;
      }

      const threshold = 220;
      const maxForce = 90;

      const applyRepulsionAndTilt = (
        index: number,
        springX: typeof cap1RepelX,
        springY: typeof cap1RepelY,
        tiltX: typeof cap1TiltX,
        tiltY: typeof cap1TiltY
      ) => {
        const center = capCenters.current[index];
        if (!center || center.x === 0) return;
        
        const dx = center.x - e.clientX;
        const dy = center.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < threshold && dist > 0) {
          const force = (threshold - dist) / threshold;
          springX.set((dx / dist) * force * maxForce);
          springY.set((dy / dist) * force * maxForce);
          tiltX.set((dy / threshold) * 35);
          tiltY.set((-dx / threshold) * 35);
        } else {
          springX.set(0);
          springY.set(0);
          tiltX.set(0);
          tiltY.set(0);
        }
      };

      applyRepulsionAndTilt(0, cap1RepelX, cap1RepelY, cap1TiltX, cap1TiltY);
      applyRepulsionAndTilt(1, cap2RepelX, cap2RepelY, cap2TiltX, cap2TiltY);
      applyRepulsionAndTilt(2, cap3RepelX, cap3RepelY, cap3TiltX, cap3TiltY);
      applyRepulsionAndTilt(3, cap4RepelX, cap4RepelY, cap4TiltX, cap4TiltY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [
    scrollYProgress,
    cap1RepelX, cap1RepelY, cap1TiltX, cap1TiltY,
    cap2RepelX, cap2RepelY, cap2TiltX, cap2TiltY,
    cap3RepelX, cap3RepelY, cap3TiltX, cap3TiltY,
    cap4RepelX, cap4RepelY, cap4TiltX, cap4TiltY
  ]);

  // ================= SCROLL TIMELINE TRANSFORMATIONS =================
  
  // Stage 1: Scroll Indicator - visible at start, fades out quickly
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.12], [0, -15]);

  // Stage 1: Main Hero Text - visible on load, scrolls away and fades out
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.28, 0.35], [1, 0.7, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.35], [0, -160]);
  const heroTextScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.95]);

  // Stage 2: Capsule Convergence to center of the viewport (50vw, 50vh) at scroll progress 0.48
  // Capsule 1 (Teal & Silver) - Left Side Top
  const cap1X = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vw", "6vw", "45vw"]);
  const cap1Y = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vh", "3vh", "32vh"]);
  const cap1Rotate = useTransform(scrollYProgress, [0, 0.48], [15, 360]);
  const cap1Scale = useTransform(scrollYProgress, [0, 0.48, 0.51], [0.85, 0.95, 0]);

  // Capsule 2 (Mint & Silver) - Left Side Bottom
  const cap2X = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vw", "5vw", "41vw"]);
  const cap2Y = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vh", "-2vh", "-8vh"]);
  const cap2Rotate = useTransform(scrollYProgress, [0, 0.48], [-20, -180]);
  const cap2Scale = useTransform(scrollYProgress, [0, 0.48, 0.51], [0.8, 0.9, 0]);

  // Capsule 3 (Rose Red & Silver) - Right Side Top
  const cap3X = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vw", "-6vw", "-45vw"]);
  const cap3Y = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vh", "3vh", "28vh"]);
  const cap3Rotate = useTransform(scrollYProgress, [0, 0.48], [30, -270]);
  const cap3Scale = useTransform(scrollYProgress, [0, 0.48, 0.51], [0.85, 0.95, 0]);

  // Capsule 4 (Indigo & Silver) - Right Side Bottom
  const cap4X = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vw", "-5vw", "-41vw"]);
  const cap4Y = useTransform(scrollYProgress, [0, 0.18, 0.48], ["0vh", "-2vh", "-12vh"]);
  const cap4Rotate = useTransform(scrollYProgress, [0, 0.48], [-45, 360]);
  const cap4Scale = useTransform(scrollYProgress, [0, 0.48, 0.51], [0.75, 0.85, 0]);

  // SVG Line Drawing (Molecular connection paths)
  const drawLength = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const svgOpacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [0.35, 0.35, 0]);

  // Stage 2: Collision Impact Flash
  const collisionFlashOpacity = useTransform(scrollYProgress, [0.46, 0.48, 0.60], [0, 1, 0]);
  const collisionFlashScale = useTransform(scrollYProgress, [0.46, 0.48, 0.60], [0.2, 1.8, 3.2]);

  // Biotech Particles Generator
  const shardsCount = 24;
  const shards = useMemo(() => {
    const list: ParticleData[] = [];
    const colors = ["#0d9488", "#4f46e5", "#16a34a", "#ef4444", "#06b6d4"];
    const types: ParticleData["type"][] = ["spark", "fragment", "glow-dot", "molecular"];
    
    for (let i = 0; i < shardsCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 320;
      const color = colors[i % colors.length];
      const type = types[i % types.length];
      const size = type === "glow-dot" ? 4 + Math.random() * 6 : 6 + Math.random() * 12;
      const rotationSpeed = (Math.random() - 0.5) * 800;
      list.push({ angle, distance, color, type, size, rotationSpeed });
    }
    return list;
  }, []);

  const burstProgress = useTransform(scrollYProgress, [0.48, 0.80], [0, 1]);
  const burstOpacity = useTransform(scrollYProgress, [0.46, 0.48, 0.70, 0.80], [0, 1, 1, 0]);

  // Stage 3: Phine Synthesis Dashboard Reveal Mappings (reveals after burst)
  const dashboardOpacity = useTransform(scrollYProgress, [0.54, 0.68, 0.90, 1.0], [0, 1, 1, 0.7]);
  const dashboardY = useTransform(scrollYProgress, [0.54, 0.68, 0.90, 1.0], [40, 0, 0, -50]);
  const dashboardScale = useTransform(scrollYProgress, [0.54, 0.68], [0.94, 1.0]);

  return (
    <div 
      ref={containerRef} 
      onMouseEnter={handleMouseEnterContainer}
      className="relative w-full h-[300vh] bg-white overflow-visible z-10 border-b border-slate-100"
    >
      
      {/* ================= STICKY VIEWPORT CONTAINER ================= */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-20">
        
        {/* Background ambient glowing lights */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal/5 blur-[130px] animate-pulse" />
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-accent/5 blur-[130px]" />
        </div>

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 pointer-events-none" />

        {/* Futuristic Clinical Telemetry Overlays (Margins) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block font-mono text-[9px] text-slate-400/50 select-none">
          <div className="absolute top-28 left-8 tracking-[0.2em]">PHINEPHARMA // CORE_REACTION_MATRIX // v1.2.0</div>
          <div className="absolute top-28 right-8 tracking-[0.2em]">STATUS: SECURE // GRID_ALIGN: ACTIVE</div>
          <div className="absolute bottom-10 left-8 tracking-[0.2em]">LOC: 18.5276° N // 73.8562° E // ALT: 560m</div>
          <div className="absolute bottom-10 right-8 tracking-[0.2em]">BIO_SYNTHESIS_LOCK // 100% QUALITY</div>
        </div>

        {/* ================= SCROLL TO EXPLORE INDICATOR ================= */}
        <motion.div
          ref={scrollIndicatorRef}
          style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
          className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-center gap-2 text-slate-500 pointer-events-none z-30"
        >
          <span className="text-[10px] tracking-[0.25em] font-extrabold text-teal uppercase animate-pulse select-none font-mono">
            Scroll to synthesize
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center p-1.5 bg-white/50 backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-2.5 rounded-full bg-teal"
            />
          </div>
        </motion.div>

        {/* ================= STAGE 1: HERO TEXT CONTAINER ================= */}
        <motion.div 
          ref={heroRef}
          style={{ 
            opacity: heroTextOpacity, 
            y: heroTextY,
            scale: heroTextScale
          }}
          className="absolute inset-0 z-35 flex flex-col justify-center items-center text-center px-6 lg:px-8 py-32"
        >
          {/* Subtle medical tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/20 bg-teal/5 text-teal text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            WHO-GMP Certified Global Partner
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 mb-6 leading-[1.08] tracking-tight">
            Quality Medicines.<br />
            Trusted Partners.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-teal-light to-green">
              Global Reach.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed font-semibold">
            Phinepharma LLP delivers world-class manufacturing, third-party formulations, and regulatory dossier compliance for international healthcare markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#products"
              className="relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal to-indigo-accent text-white rounded-xl font-bold transition-all duration-355 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-teal/15 group
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:ease-in-out"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <ArrowRight size={20} />
              </span>
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-955 border border-slate-200 rounded-xl font-bold transition-all duration-355 active:scale-95 flex items-center justify-center group
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black/[0.03] before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:ease-in-out"
            >
              <span className="relative z-10">Partner With Us</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-500">
            {["WHO-GMP Facility", "Rigorous QA/QC", "Regulatory Support", "Global Network", "10+ Years"].map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle size={18} className="text-teal" />
                <span className="text-xs md:text-sm font-semibold text-slate-700">{indicator}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= STAGE 3: BIOTECH SYNTHESIS MATRIX DASHBOARD ================= */}
        <motion.div
          ref={dashboardRef}
          style={{
            opacity: dashboardOpacity,
            y: dashboardY,
            scale: dashboardScale
          }}
          className="absolute inset-0 z-30 flex flex-col justify-center items-center px-6 lg:px-8 py-32"
        >
          {/* Dashboard scanning banner */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg border border-teal/20 bg-teal/5 text-teal text-xs font-mono font-bold uppercase tracking-widest mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
            Active Matrix: Synthesis Engine Online
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 text-center mb-4 leading-tight tracking-tight">
            Advanced Clinical Synthesis
          </h2>
          <p className="text-base sm:text-lg text-slate-550 text-center max-w-2xl mb-12 font-semibold">
            Bridging science and quality compliance to manufacture high-purity formulations for international markets.
          </p>

          {/* Three Biotech Research Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
            {/* Card 1: Bio-Active APIs */}
            <div className="bg-white/70 hover:bg-white/95 border border-slate-200/50 hover:border-teal/40 p-6 rounded-2xl shadow-xl hover:shadow-[0_20px_50px_rgba(13,148,136,0.22)] -translate-y-0 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-teal" />
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-teal/5 blur-xl group-hover:bg-teal/10 transition-colors" />
              
              {/* Corner Wireframes */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-teal/30 rounded-tr-2xl group-hover:border-teal transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-teal/30 rounded-bl-2xl group-hover:border-teal transition-colors duration-300" />

              <div className="w-12 h-12 rounded-xl bg-teal/5 flex items-center justify-center mb-6 border border-teal/20 text-teal font-black font-mono">
                API
              </div>
              <h3 className="text-xl font-bold text-slate-955 mb-3">Bio-Active APIs</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                Purity grades exceeding 99.9% manufactured in WHO-GMP certified facilities under strict batch control.
              </p>
              
              {/* Embedded micro SVG Node visual */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                <svg width="60" height="40" viewBox="0 0 60 40" className="text-teal stroke-current fill-none" strokeWidth="1.5">
                  <path d="M5 25 L15 15 L25 30 L35 10 L45 25 L55 5" />
                  <circle cx="15" cy="15" r="2.5" className="fill-teal" />
                  <circle cx="35" cy="10" r="2.5" className="fill-teal animate-pulse" />
                  <circle cx="55" cy="5" r="2.5" className="fill-teal" />
                </svg>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[10px] font-mono font-extrabold text-teal border-t border-slate-100 pt-4">
                <span>[ BATCH: PHINE-01 ]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span>[ PURITY: 99.9% ]</span>
              </div>
            </div>

            {/* Card 2: Complex Formulations */}
            <div className="bg-white/70 hover:bg-white/95 border border-slate-200/50 hover:border-indigo-accent/40 p-6 rounded-2xl shadow-xl hover:shadow-[0_20px_50px_rgba(79,70,229,0.18)] -translate-y-0 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-accent" />
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-indigo-accent/5 blur-xl group-hover:bg-indigo-accent/10 transition-colors" />
              
              {/* Corner Wireframes */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-indigo-accent/30 rounded-tr-2xl group-hover:border-indigo-accent transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-indigo-accent/30 rounded-bl-2xl group-hover:border-indigo-accent transition-colors duration-300" />

              <div className="w-12 h-12 rounded-xl bg-indigo-accent/5 flex items-center justify-center mb-6 border border-indigo-accent/20 text-indigo-accent font-black font-mono">
                FORM
              </div>
              <h3 className="text-xl font-bold text-slate-955 mb-3">Advanced Delivery</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                Solid dosage forms, liquid oral suspensions, and dry powder formulations engineered for targeted therapeutic release.
              </p>

              {/* Embedded micro SVG Orbit visual */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                <svg width="60" height="40" viewBox="0 0 60 40" className="text-indigo-accent stroke-current fill-none animate-spin" style={{ animationDuration: "20s" }} strokeWidth="1">
                  <ellipse cx="30" cy="20" rx="22" ry="7" transform="rotate(30 30 20)" />
                  <ellipse cx="30" cy="20" rx="22" ry="7" transform="rotate(-30 30 20)" />
                  <circle cx="30" cy="20" r="3" className="fill-indigo-accent" />
                </svg>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[10px] font-mono font-extrabold text-indigo-accent border-t border-slate-100 pt-4">
                <span>[ DS: SOLID/LIQ ]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-accent animate-pulse" />
                <span>[ STABILITY: CERTIFIED ]</span>
              </div>
            </div>

            {/* Card 3: Regulatory Dossiers */}
            <div className="bg-white/70 hover:bg-white/95 border border-slate-200/50 hover:border-green/40 p-6 rounded-2xl shadow-xl hover:shadow-[0_20px_50px_rgba(22,163,74,0.18)] -translate-y-0 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-green" />
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-green/5 blur-xl group-hover:bg-green/10 transition-colors" />
              
              {/* Corner Wireframes */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green/30 rounded-tr-2xl group-hover:border-green transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-green/30 rounded-bl-2xl group-hover:border-green transition-colors duration-300" />

              <div className="w-12 h-12 rounded-xl bg-green/5 flex items-center justify-center mb-6 border border-green/20 text-green font-black font-mono">
                REG
              </div>
              <h3 className="text-xl font-bold text-slate-955 mb-3">Dossier Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                CTD and eCTD-compliant dossiers registered for international health authorities to streamline global import approvals.
              </p>

              {/* Embedded micro SVG radar visual */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                <svg width="60" height="40" viewBox="0 0 60 40" className="text-green stroke-current fill-none" strokeWidth="1.2">
                  <circle cx="30" cy="20" r="16" />
                  <circle cx="30" cy="20" r="10" strokeDasharray="4,3" />
                  <line x1="30" y1="20" x2="42" y2="10" className="origin-[30px_20px] animate-spin" style={{ animationDuration: "4s" }} />
                </svg>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[10px] font-mono font-extrabold text-green border-t border-slate-100 pt-4">
                <span>[ REG: FDA/EMA/WHO ]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                <span>[ CTD: COMPLIANT ]</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= INTERACTIVE OVERLAY LAYER ================= */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          
          {/* SVG Drawing Connections */}
          <motion.svg 
            style={{ opacity: svgOpacity }}
            className="absolute top-0 left-0 w-full h-full hidden md:block"
          >
            {/* Left Connection (Cap 1 to Cap 2) */}
            <motion.path
              d="M 120 180 Q 220 380 180 580"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeDasharray="4,6"
              style={{ pathLength: drawLength }}
            />
            {/* Right Connection (Cap 3 to Cap 4) */}
            <motion.path
              d="M 1150 220 Q 1050 420 1100 620"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeDasharray="4,6"
              style={{ pathLength: drawLength }}
            />
            
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* ================= STAGE 1 & 2: FLOATING 3D CAPSULES + HUD LABELS ================= */}
          
          {/* Capsule 1 Group: Teal & Silver (Left Top) */}
          <motion.div
            style={{ 
              x: cap1X, 
              y: cap1Y, 
              scale: cap1Scale
            }}
            className="absolute left-[5vw] top-[18vh] pointer-events-none flex items-center gap-4"
          >
            <motion.div
              ref={cap1Ref}
              style={{ 
                x: cap1RepelX, 
                y: cap1RepelY
              }}
              className="pointer-events-auto flex items-center gap-4 cursor-pointer"
            >
              <motion.div
                style={{ 
                  rotateX: cap1TiltX, 
                  rotateY: cap1TiltY,
                  rotateZ: cap1Rotate,
                  transformStyle: "preserve-3d",
                  perspective: 600
                }}
                className="w-14 h-32 rounded-full shadow-[0_20px_50px_rgba(13,148,136,0.25)] flex flex-col overflow-hidden border border-white/20 bg-white/10 backdrop-blur-[1px] flex-shrink-0 relative group"
              >
                {/* 3D Glass Highlights Layer */}
                <div className="absolute inset-0 z-20 pointer-events-none border border-white/30 rounded-full" />
                
                {/* Top Half - Glowing Translucent Gel */}
                <div className="w-full h-1/2 bg-gradient-to-b from-teal/85 to-teal-light/40 backdrop-blur-[2px] relative overflow-hidden flex-shrink-0">
                  {/* Glossy highlight stripe */}
                  <div className="absolute top-2 left-2 w-2 h-12 bg-white/45 rounded-full blur-[0.5px]" />
                  {/* Pulse energy core inside */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-9 rounded-full bg-teal-light/65 blur-[3px] animate-pulse" />
                  {/* Floating active micro-specs */}
                  <div className="absolute top-2 left-3 w-1 h-1 rounded-full bg-white opacity-80 animate-ping" />
                  <div className="absolute top-8 right-3 w-1.5 h-1.5 rounded-full bg-white opacity-60" />
                  <div className="absolute top-10 left-5 w-1 h-1 rounded-full bg-teal-light opacity-90" />
                </div>
                
                {/* Seam Band */}
                <div className="w-full h-[4px] bg-gradient-to-r from-slate-300 via-white to-slate-400 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.15)]" />
                
                {/* Bottom Half */}
                <div className="w-full h-1/2 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 left-[-50%] w-[200%] h-4 bg-white/45 rotate-[35deg] shadow-sm pointer-events-none" />
                  <div className="absolute bottom-3 left-2 w-2.5 h-10 bg-white/40 rounded-full blur-[0.5px]" />
                </div>
              </motion.div>

              {/* High-Tech HUD Label */}
              <div className="hidden lg:flex flex-col bg-white/80 backdrop-blur-md border border-slate-200/60 px-3 py-1.5 rounded-lg text-left shadow-lg border-l-4 border-l-teal select-none pointer-events-none font-mono">
                <span className="text-[9px] text-teal font-extrabold uppercase tracking-wider">Compound API</span>
                <span className="text-[11px] text-slate-800 font-bold">PHINE-01 / 99.9%</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Capsule 2 Group: Mint Green & Silver (Left Bottom) */}
          <motion.div
            style={{ 
              x: cap2X, 
              y: cap2Y, 
              scale: cap2Scale
            }}
            className="absolute left-[9vw] top-[58vh] pointer-events-none flex items-center gap-4"
          >
            <motion.div
              ref={cap2Ref}
              style={{ 
                x: cap2RepelX, 
                y: cap2RepelY
              }}
              className="pointer-events-auto flex items-center gap-4 cursor-pointer"
            >
              <motion.div
                style={{ 
                  rotateX: cap2TiltX, 
                  rotateY: cap2TiltY,
                  rotateZ: cap2Rotate,
                  transformStyle: "preserve-3d",
                  perspective: 600
                }}
                className="w-12 h-28 rounded-full shadow-[0_20px_40px_rgba(22,163,74,0.18)] flex flex-col overflow-hidden border border-white/20 bg-white/10 backdrop-blur-[1px] flex-shrink-0 relative group"
              >
                {/* 3D Glass Highlights Layer */}
                <div className="absolute inset-0 z-20 pointer-events-none border border-white/30 rounded-full" />
                
                {/* Top Half - Glowing Translucent Gel */}
                <div className="w-full h-1/2 bg-gradient-to-b from-green/85 to-emerald-400/40 backdrop-blur-[2px] relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-2 left-2 w-1.5 h-10 bg-white/45 rounded-full blur-[0.5px]" />
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-8 rounded-full bg-emerald-400/65 blur-[3px] animate-pulse" />
                  <div className="absolute top-3 left-4 w-1 h-1 rounded-full bg-white opacity-80" />
                  <div className="absolute top-6 right-3.5 w-1.5 h-1.5 rounded-full bg-white opacity-90 animate-ping" />
                </div>
                
                {/* Seam Band */}
                <div className="w-full h-[4px] bg-gradient-to-r from-slate-300 via-white to-slate-400 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.15)]" />
                
                {/* Bottom Half */}
                <div className="w-full h-1/2 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 left-[-50%] w-[200%] h-4 bg-white/45 rotate-[35deg] shadow-sm pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2 w-2 h-8 bg-white/45 rounded-full blur-[0.5px]" />
                </div>
              </motion.div>

              {/* High-Tech HUD Label */}
              <div className="hidden lg:flex flex-col bg-white/80 backdrop-blur-md border border-slate-200/60 px-3 py-1.5 rounded-lg text-left shadow-lg border-l-4 border-l-green select-none pointer-events-none font-mono">
                <span className="text-[9px] text-green font-extrabold uppercase tracking-wider">Quality Audit</span>
                <span className="text-[11px] text-slate-800 font-bold">GMP PASSED</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Capsule 3 Group: Rose Red & Silver (Right Top) */}
          <motion.div
            style={{ 
              x: cap3X, 
              y: cap3Y, 
              scale: cap3Scale
            }}
            className="absolute right-[5vw] top-[22vh] pointer-events-none flex flex-row-reverse items-center gap-4"
          >
            <motion.div
              ref={cap3Ref}
              style={{ 
                x: cap3RepelX, 
                y: cap3RepelY
              }}
              className="pointer-events-auto flex flex-row-reverse items-center gap-4 cursor-pointer"
            >
              <motion.div
                style={{ 
                  rotateX: cap3TiltX, 
                  rotateY: cap3TiltY,
                  rotateZ: cap3Rotate,
                  transformStyle: "preserve-3d",
                  perspective: 600
                }}
                className="w-14 h-32 rounded-full shadow-[0_20px_50px_rgba(239,68,68,0.2)] flex flex-col overflow-hidden border border-white/20 bg-white/10 backdrop-blur-[1px] flex-shrink-0 relative group"
              >
                {/* 3D Glass Highlights Layer */}
                <div className="absolute inset-0 z-20 pointer-events-none border border-white/30 rounded-full" />
                
                {/* Top Half - Glowing Translucent Gel */}
                <div className="w-full h-1/2 bg-gradient-to-b from-rose-500/85 to-red-400/40 backdrop-blur-[2px] relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-2 left-2 w-2 h-12 bg-white/45 rounded-full blur-[0.5px]" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-9 rounded-full bg-red-400/65 blur-[3px] animate-pulse" />
                  <div className="absolute top-2 right-4 w-1 h-1 rounded-full bg-white opacity-80" />
                  <div className="absolute top-8 left-4 w-1.5 h-1.5 rounded-full bg-white opacity-60 animate-ping" />
                </div>
                
                {/* Seam Band */}
                <div className="w-full h-[4px] bg-gradient-to-r from-slate-300 via-white to-slate-400 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.15)]" />
                
                {/* Bottom Half */}
                <div className="w-full h-1/2 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 left-[-50%] w-[200%] h-4 bg-white/45 rotate-[35deg] shadow-sm pointer-events-none" />
                  <div className="absolute bottom-3 left-2.5 w-2.5 h-10 bg-white/40 rounded-full blur-[0.5px]" />
                </div>
              </motion.div>

              {/* High-Tech HUD Label */}
              <div className="hidden lg:flex flex-col bg-white/80 backdrop-blur-md border border-slate-200/60 px-3 py-1.5 rounded-lg text-left shadow-lg border-r-4 border-r-rose-500 select-none pointer-events-none font-mono">
                <span className="text-[9px] text-rose-500 font-extrabold uppercase tracking-wider">Formulation</span>
                <span className="text-[11px] text-slate-800 font-bold">DOSAGE 500mg</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Capsule 4 Group: Indigo & Silver (Right Bottom) */}
          <motion.div
            style={{ 
              x: cap4X, 
              y: cap4Y, 
              scale: cap4Scale
            }}
            className="absolute right-[9vw] top-[62vh] pointer-events-none flex flex-row-reverse items-center gap-4"
          >
            <motion.div
              ref={cap4Ref}
              style={{ 
                x: cap4RepelX, 
                y: cap4RepelY
              }}
              className="pointer-events-auto flex flex-row-reverse items-center gap-4 cursor-pointer"
            >
              <motion.div
                style={{ 
                  rotateX: cap4TiltX, 
                  rotateY: cap4TiltY,
                  rotateZ: cap4Rotate,
                  transformStyle: "preserve-3d",
                  perspective: 600
                }}
                className="w-12 h-28 rounded-full shadow-[0_20px_40px_rgba(99,102,241,0.18)] flex flex-col overflow-hidden border border-white/20 bg-white/10 backdrop-blur-[1px] flex-shrink-0 relative group"
              >
                {/* 3D Glass Highlights Layer */}
                <div className="absolute inset-0 z-20 pointer-events-none border border-white/30 rounded-full" />
                
                {/* Top Half - Glowing Translucent Gel */}
                <div className="w-full h-1/2 bg-gradient-to-b from-[#4f46e5]/85 to-cyan-400/40 backdrop-blur-[2px] relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-2 left-2 w-1.5 h-10 bg-white/45 rounded-full blur-[0.5px]" />
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-8 rounded-full bg-cyan-400/65 blur-[3px] animate-pulse" />
                  <div className="absolute top-4 left-3 w-1 h-1 rounded-full bg-white opacity-80 animate-ping" />
                </div>
                
                {/* Seam Band */}
                <div className="w-full h-[4px] bg-gradient-to-r from-slate-300 via-white to-slate-400 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.15)]" />
                
                {/* Bottom Half */}
                <div className="w-full h-1/2 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 left-[-50%] w-[200%] h-4 bg-white/45 rotate-[35deg] shadow-sm pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2 w-2 h-8 bg-white/45 rounded-full blur-[0.5px]" />
                </div>
              </motion.div>

              {/* High-Tech HUD Label */}
              <div className="hidden lg:flex flex-col bg-white/80 backdrop-blur-md border border-slate-200/60 px-3 py-1.5 rounded-lg text-right shadow-lg border-r-4 border-r-indigo-accent select-none pointer-events-none font-mono">
                <span className="text-[9px] text-indigo-accent font-extrabold uppercase tracking-wider">Dossier Reg</span>
                <span className="text-[11px] text-slate-800 font-bold">CTD COMPLIANT</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= STAGE 2: CENTERED COLLISION BURST SHARDS & RINGS ================= */}
          
          {/* Main Shards Burst Container */}
          <motion.div 
            style={{ opacity: burstOpacity }}
            className="absolute left-[50vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-30 flex items-center justify-center pointer-events-none"
          >
            {shards.map((s, index) => (
              <ParticleItem key={index} particle={s} progress={burstProgress} />
            ))}
          </motion.div>

          {/* Shockwave Rings & Glows */}
          <motion.div
            style={{ 
              opacity: collisionFlashOpacity,
              scale: collisionFlashScale
            }}
            className="absolute left-[50vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 w-[15vw] h-[15vw] rounded-full border-2 border-teal/40 bg-teal/5 blur-[1px] pointer-events-none z-30"
          />
          <motion.div
            style={{ 
              opacity: collisionFlashOpacity,
              scale: collisionFlashScale
            }}
            className="absolute left-[50vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-teal/20 via-teal-light/20 to-transparent blur-3xl pointer-events-none z-30"
          />

        </div>
      </div>
    </div>
  );
}

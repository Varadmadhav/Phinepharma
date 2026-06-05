import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface ClickParticle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
}

export function CustomPharmaCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [clickParticles, setClickParticles] = useState<ClickParticle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs to trail the mouse organically
  const springConfig = { damping: 32, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Enable custom cursor only on desktop screens with a mouse
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer") ||
        target.classList.contains("cursor-pointer") ||
        target.closest("[role='button']");

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Spawn 8 capsule-like molecular spark particles on click
      const newParticles = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i + Math.random(),
        x: e.clientX,
        y: e.clientY,
        angle: (i * 360) / 8 + (Math.random() * 15 - 7.5),
        speed: 1.5 + Math.random() * 2,
      }));
      setClickParticles((prev) => [...prev, ...newParticles].slice(-40));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);

    // Hide native cursor globally on pointer screens
    const style = document.createElement("style");
    style.id = "custom-pharma-cursor-styles";
    style.innerHTML = `
      @media (pointer: fine) {
        html, body, a, button, select, input, textarea, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      const existingStyle = document.getElementById("custom-pharma-cursor-styles");
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Sleek Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-teal/40 flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 40 : 20,
          height: isHovered ? 40 : 20,
        }}
        animate={{
          borderColor: isHovered ? "rgba(13, 148, 136, 0.8)" : "rgba(13, 148, 136, 0.35)",
          borderWidth: isHovered ? "2px" : "1px",
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        {/* Faint crosshair tick lines inside the ring when hovered */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[85%] h-[1px] bg-teal/20" />
            <div className="h-[85%] w-[1px] bg-teal/20 absolute" />
          </motion.div>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-green shadow-[0_0_8px_rgba(22,163,74,0.6)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
        }}
        animate={{
          backgroundColor: isHovered ? "#0d9488" : "#22c55e",
          scale: isHovered ? 1.2 : 1,
        }}
      />

      {/* Click Particles (Discharged chemical sparks) */}
      {clickParticles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const targetX = Math.cos(rad) * 60 * p.speed;
        const targetY = Math.sin(rad) * 60 * p.speed;
        return (
          <motion.div
            key={p.id}
            className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9998] bg-gradient-to-r from-teal to-green shadow-[0_0_6px_rgba(13,148,136,0.8)]"
            initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
            animate={{
              x: p.x + targetX,
              y: p.y + targetY,
              opacity: 0,
              scale: 0.1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => {
              setClickParticles((prev) => prev.filter((item) => item.id !== p.id));
            }}
          />
        );
      })}
    </>
  );
}

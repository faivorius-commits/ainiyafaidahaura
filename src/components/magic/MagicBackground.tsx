import { useEffect, useMemo, useState } from "react";

function useRandomItems<T>(count: number, seedFn: (i: number) => T): T[] {
  return useMemo(() => Array.from({ length: count }, (_, i) => seedFn(i)), [count, seedFn]);
}

export function MagicBackground() {
  const [mounted, setMounted] = useState(false);
  const [cursor, setCursor] = useState({ x: -500, y: -500 });

  useEffect(() => {
    setMounted(true);
    const onMove = (e: PointerEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const stars = useRandomItems(70, (i) => ({
    top: (i * 37) % 100,
    left: (i * 61) % 100,
    size: 1 + ((i * 13) % 3),
    delay: (i % 12) * 0.4,
  }));

  const sparkles = useRandomItems(18, (i) => ({
    left: (i * 53) % 100,
    delay: (i % 9) * 1.6,
    duration: 12 + ((i * 7) % 10),
    size: 3 + ((i * 5) % 4),
  }));

  if (!mounted) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* aurora wash */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 60% at 20% 0%, oklch(0.55 0.2 300 / 45%), transparent 60%), radial-gradient(100% 55% at 85% 15%, oklch(0.6 0.16 330 / 35%), transparent 60%), radial-gradient(120% 45% at 50% 100%, oklch(0.85 0.14 70 / 40%), transparent 65%)",
        }}
      />

      {/* stars */}
      {stars.map((s, i) => (
        <span
          key={`star-${i}`}
          className="animate-twinkle absolute rounded-full bg-primary"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px currentColor",
          }}
        />
      ))}

      {/* drifting clouds */}
      {[0, 1, 2].map((i) => (
        <div
          key={`cloud-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            top: `${18 + i * 26}%`,
            left: `${-10 + i * 18}%`,
            width: "60vw",
            height: "28vh",
            background:
              i === 2
                ? "oklch(0.85 0.13 65 / 28%)"
                : "oklch(0.72 0.14 330 / 22%)",
            animation: `drift ${40 + i * 14}s ease-in-out ${i * 3}s infinite alternate`,
          }}
        />
      ))}

      {/* floating sparkles */}
      {sparkles.map((p, i) => (
        <span
          key={`spark-${i}`}
          className="absolute bottom-0 rounded-full bg-accent"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 10px currentColor",
            animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* cursor glow */}
      <div
        className="absolute h-64 w-64 rounded-full blur-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${cursor.x - 128}px, ${cursor.y - 128}px)`,
          background: "oklch(0.9 0.12 85 / 12%)",
        }}
      />
    </div>
  );
}
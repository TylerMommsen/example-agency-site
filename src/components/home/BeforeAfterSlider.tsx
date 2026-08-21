'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const userInteractedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const stopDemo = useCallback(() => {
    userInteractedRef.current = true;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    stopDemo();
    draggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      stopDemo();
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === "ArrowRight") {
      stopDemo();
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 2));
    }
  };

  // Auto-demo on mount: 50 -> 80 -> 20 -> 50 over ~3.5s.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const stops = [
      { t: 0, v: 50 },
      { t: 1000, v: 82 },
      { t: 2200, v: 18 },
      { t: 3500, v: 50 },
    ];
    const start = performance.now();

    const tick = (now: number) => {
      if (userInteractedRef.current) return;
      const elapsed = now - start;
      if (elapsed >= stops[stops.length - 1].t) {
        setPosition(stops[stops.length - 1].v);
        rafRef.current = null;
        return;
      }
      let i = 0;
      while (i < stops.length - 1 && elapsed > stops[i + 1].t) i++;
      const a = stops[i];
      const b = stops[i + 1];
      const k = (elapsed - a.t) / (b.t - a.t);
      // ease in/out
      const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      setPosition(a.v + (b.v - a.v) * eased);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden bg-muted select-none touch-none ${className ?? ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER (image) full layer */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* BEFORE (image) clipped layer */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden={position < 5}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-foreground shadow-sm backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground shadow-sm">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-background/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]" />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-background text-foreground shadow-lg ring-2 ring-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <ChevronLeft className="h-4 w-4" />
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

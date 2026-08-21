'use client'
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/** Native controls sit ~48-64px from the bottom; avoid toggling play when scrubbing that strip. */
const VIDEO_CONTROLS_BOTTOM_PX = 56;

interface ServiceExplainerVideoProps {
  src: string;
  poster: string;
  ariaLabel?: string;
  /** Optional small label shown beneath the play button before playback starts. */
  overlayLabel?: string;
  className?: string;
}

export function ServiceExplainerVideo({
  src,
  poster,
  ariaLabel = "Play video",
  overlayLabel = "Watch the overview",
  className,
}: ServiceExplainerVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const sync = () => setPlaying(!el.paused);
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    sync();
    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
    };
  }, []);

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const el = videoRef.current;
    if (!el || !playing) return;
    const rect = el.getBoundingClientRect();
    const fromBottom = rect.bottom - e.clientY;
    if (fromBottom < VIDEO_CONTROLS_BOTTOM_PX) return;
    e.preventDefault();
    el.pause();
  };

  const handlePlay = () => {
    videoRef.current?.play().catch(() => {
      /* user gesture / autoplay policy errors are safe to ignore */
    });
  };

  return (
    <div className={`relative ${className ?? ""}`}>
      <video
        ref={videoRef}
        className="aspect-video w-full cursor-pointer object-cover"
        width={1280}
        height={720}
        controls
        controlsList="nodownload"
        playsInline
        preload="none"
        poster={poster}
        aria-label={ariaLabel}
        onClick={handleVideoClick}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={ariaLabel}
          className="group absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-4 border-0 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* Layered scrim: brand-tinted gradient + soft radial vignette */}
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-primary/45 via-black/30 to-black/55 transition-opacity duration-300 group-hover:opacity-90"
          />
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, hsl(var(--primary) / 0.35) 100%)",
            }}
          />

          {/* Play button stack */}
          <span className="relative flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
            {/* Pulsing accent ring */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-accent/40 opacity-60 animate-ping"
              style={{ animationDuration: "2.4s" }}
            />
            {/* Soft outer halo */}
            <span
              aria-hidden
              className="absolute -inset-3 rounded-full bg-primary/20 blur-xl"
            />
            {/* Glassy core */}
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-background/90 text-primary shadow-2xl shadow-primary/40 ring-1 ring-primary/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.06]">
              <Play
                className="ml-1 h-9 w-9 md:h-11 md:w-11 fill-primary"
                strokeWidth={1.5}
                aria-hidden
              />
            </span>
          </span>

          {overlayLabel && (
            <span className="relative hidden rounded-full bg-background/15 px-4 py-1.5 text-sm font-medium tracking-wide text-primary-foreground backdrop-blur-sm md:inline-block">
              {overlayLabel}
            </span>
          )}
        </button>
      )}
    </div>
  );
}

export default ServiceExplainerVideo;

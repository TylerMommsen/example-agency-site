import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import HeroBrowserMockup from "./HeroBrowserMockup";

export const HomeHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {/* Base gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary)/0.92)]"
      />

      {/* Subtle grid pattern, faded at edges */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.9'/></svg>\")",
        }}
      />

      {/* Right-side radial glow behind the mockup */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[70%]"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 75% 50%, hsl(var(--accent) / 0.28), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative container-wide py-20 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] xl:gap-20">
          {/* Left: copy */}
          <div className="max-w-3xl xl:max-w-2xl xl:pr-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              Professional Website & Automation Systems <span className="text-accent">For Contractors.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-3xl text-balance">
              Most leads go to the contractor who responds first. We build your website and set up your automation so that's always you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="h-14 bg-cta text-cta-foreground hover:bg-cta/90 px-7 text-base font-semibold shadow-elegant"
              >
                <a href={SITE.bookingUrl} target="_blank" rel="noopener">
                  Book a Call <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" /> Month-to-Month
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" /> Cancel Anytime
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" /> No Setup Fees
              </span>
            </div>
          </div>

          {/* Right: browser mockup */}
          <div className="relative xl:pl-4">
            <HeroBrowserMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

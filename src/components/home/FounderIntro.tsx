import { Check } from "lucide-react";
// TODO: Replace this placeholder with your own photo (e.g. you at work or with a client).
import founder from "@/assets/founder.jpg";

const BULLETS = [
  "A fast, modern website that actually converts visitors into calls",
  "Automatic follow-up so leads never sit unanswered",
  "A clear setup that fits how contractors actually run their day",
];

const FounderIntro = () => {
  return (
    <section className="section-y bg-background">
      <div className="container-wide grid gap-10 lg:gap-16 lg:grid-cols-5 items-center">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-3xl shadow-elegant aspect-square">
            <img
              src={founder.src}
              alt="Placeholder - insert your own image here"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Built For Contractors</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-primary text-balance">
            One simple system that turns marketing into booked jobs.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            BuildFlow gives contractors a professional website and the automation behind it, so every
            lead from your ads, SEO, and referrals gets captured, followed up with, and turned into real
            work. No bloated software stack, no guesswork, just a clean foundation that runs in the
            background while you stay on the tools.
          </p>
          <ul className="mt-6 space-y-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-base text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FounderIntro;

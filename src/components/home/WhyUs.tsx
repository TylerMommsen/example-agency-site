import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

const POINTS = [
  {
    title: "One Partner, One Connected System.",
    body: "Your website, phone system, SEO, reviews, and follow-up, all built and managed under one roof. No agency stacking, no broken handoffs.",
  },
  {
    title: "AI That Catches Every Lead",
    body: "Our automations text back missed calls, follow up with new prospects, and book appointments 24/7 so no lead from your marketing ever slips through.",
  },
  {
    title: "Built Only for Contractors",
    body: "Every funnel, page, and automation is engineered for trades. No generic templates, no guessing.",
  },
];

export const WhyUs = () => {
  return (
    <section className="section-y bg-secondary" aria-labelledby="why-heading">
      <div className="container-wide grid gap-10 lg:gap-16 lg:grid-cols-5 items-center">
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why BuildFlow</p>
          <h2 id="why-heading" className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
            The Simplest Way to Stop Losing Leads
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
            Your ads, referrals, and Google traffic only convert when the foundation behind them is solid. We
            build the professional website and automations that catch every lead the biggest local players
            already capture, without the headache.
          </p>

          <ul className="mt-8 space-y-5">
            {POINTS.map((p) => (
              <li key={p.title} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent mt-0.5" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 h-12 px-6 font-semibold">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener">
                Book a Call
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 shadow-elegant">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">By the numbers</p>
            <ul className="mt-6 divide-y divide-white/10">
              <li className="flex items-baseline justify-between py-4">
                <span className="text-sm text-primary-foreground/80">Missed calls recovered</span>
                <span className="font-display text-2xl font-bold">87%</span>
              </li>
              <li className="flex items-baseline justify-between py-4">
                <span className="text-sm text-primary-foreground/80">Avg. response time</span>
                <span className="font-display text-2xl font-bold">&lt; 60s</span>
              </li>
              <li className="flex items-baseline justify-between py-4">
                <span className="text-sm text-primary-foreground/80">Time to launch</span>
                <span className="font-display text-2xl font-bold">1-10 days</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

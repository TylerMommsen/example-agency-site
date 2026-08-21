import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES, SITE } from "@/config/site";
import { PRICING_FAQS } from "@/config/page-content";

const ESSENTIALS_INCLUDED = [
  "Free setup, no upfront fee",
  "Custom-designed contractor website (10-20 pages)",
  "Mobile-optimized, fast-loading pages",
  "On-page SEO built in",
  "Hosting, SSL, and ongoing edits",
  "Contact form delivering leads straight to your phone",
];

const COMPLETE_INCLUDED = [
  "Free setup, no upfront fee",
  "Everything in Essentials",
  "Dedicated tracked business phone number",
  "Automated lead follow-up (SMS)",
  "5-Star Magic Funnel review system",
  "Missed-call text-back automation",
  "Re-marketing email + SMS campaigns",
  "All-in-one inbox for calls, texts, email, social DMs",
  "Single dashboard for calls, leads and reviews",
];

const PricingPage = () => {
  return (
    <SiteLayout hideUniversalSections>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Pricing</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-3xl">
            Simple, Honest Pricing.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Two simple packages. Start with a professional website, or go all-in with the full automation system that captures every lead from your marketing.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="section-y bg-background">
        <div className="container-wide">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Essentials */}
            <div className="flex flex-col rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card-soft">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Essentials</p>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-primary text-balance">
                A professional website to get started
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                The website-only foundation. Look professional online, with hosting, edits, and the basics handled for you.
              </p>

              <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="font-display text-5xl md:text-6xl font-bold text-primary">$97</span>
                <span className="text-base text-muted-foreground pb-2">/mo</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">Month-to-month. Cancel anytime.</p>

              <ul className="mt-8 grid gap-3">
                {ESSENTIALS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-cta text-cta-foreground hover:bg-cta/90 font-semibold"
                >
                  <a href={SITE.bookingUrl}>
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Complete (recommended) */}
            <div className="relative flex flex-col rounded-3xl border-2 border-accent/40 bg-card p-8 md:p-10 shadow-elegant lg:-mt-4">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Most Popular
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Complete</p>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-primary text-balance">
                Website + the full automation system
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Everything you need to look professional and capture every lead from your marketing, in one connected system.
              </p>

              <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="font-display text-5xl md:text-6xl font-bold text-primary">$297</span>
                <span className="text-base text-muted-foreground pb-2">/mo</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">Month-to-month. Cancel anytime.</p>

              <ul className="mt-8 grid gap-3">
                {COMPLETE_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-cta text-cta-foreground hover:bg-cta/90 font-semibold"
                >
                  <a href={SITE.bookingUrl}>
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            Just need a professional site to get started? Pick Essentials. Want every lead from your marketing answered automatically? Pick Complete.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED GRID */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Inside The Complete Package</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
              Eight services, one connected system
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-background">
        <div className="container-tight">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
              Pricing questions answered
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-8">
            {PRICING_FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
};

export default PricingPage;

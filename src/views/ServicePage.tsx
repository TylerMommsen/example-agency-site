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
import { ServiceExplainerVideo } from "@/components/services/ServiceExplainerVideo";
import { SERVICE_DETAILS } from "@/config/service-details";
import { SITE, SERVICES } from "@/config/site";
import { notFound } from "next/navigation";

interface ServicePageProps {
  slug: string;
}

const ServicePage = ({ slug }: ServicePageProps) => {
  const detail = SERVICE_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.slug !== detail.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="container-wide relative py-20 md:py-28 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {detail.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl">
            {detail.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/85">
            {detail.sub}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
            >
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="section-y bg-background">
        <div className="container-wide grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
          {detail.problemSolutionVideo ? (
            <>
              <ServiceExplainerVideo
                src={detail.problemSolutionVideo.src}
                poster={detail.problemSolutionVideo.poster}
                ariaLabel={`Play overview: ${detail.h1}`}
                overlayLabel="Watch the overview"
                className="overflow-hidden rounded-xl border border-border shadow-card-soft"
              />
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-cta">The Problem</p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary text-balance">
                    Why most contractors lose leads here
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-muted-foreground">{detail.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">The Fix</p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary text-balance">
                    How we solve it
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-muted-foreground">{detail.solution}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cta">The Problem</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary text-balance">
                  Why most contractors lose leads here
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground">{detail.problem}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">The Fix</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary text-balance">
                  How we solve it
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground">{detail.solution}</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">What's Included</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
              Built to do the heavy lifting for you
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-card-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-secondary" aria-labelledby="service-faq-heading">
        <div className="container-tight">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 id="service-faq-heading" className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
              Questions contractors ask us
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-8">
            {detail.faqs.map((f, i) => (
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

      {/* RELATED SERVICES */}
      <section className="section-y bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                More From The All-in-One Package
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary text-balance">
                It all works better together
              </h2>
            </div>
            <Link href="/pricing" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
              See the full package →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-card-soft transition-all hover:shadow-elegant hover:-translate-y-0.5"
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
    </SiteLayout>
  );
};

export default ServicePage;

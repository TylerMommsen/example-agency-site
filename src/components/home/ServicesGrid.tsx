import Link from "next/link";
import { ArrowRight, Globe, Phone, MapPin, Zap, Star, MessageSquare, Repeat, Inbox, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/config/site";

const ICONS: Record<string, LucideIcon> = {
  Globe, Phone, MapPin, Zap, Star, MessageSquare, Repeat, Inbox,
};

export const ServicesGrid = () => {
  return (
    <section className="section-y bg-background" aria-labelledby="services-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Inside The Complete Package</p>
          <h2 id="services-heading" className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
            The Complete Foundation Your Business Needs
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            No piecing together seven different tools. We build, launch, and manage the professional
            website and automation system that turns every prospect into a booked job.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

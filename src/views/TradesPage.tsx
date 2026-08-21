import SiteLayout from "@/components/layout/SiteLayout";
import { TRADE_BENEFITS } from "@/config/page-content";
import { TRADE_IMAGES } from "@/assets/trades";

const TradesPage = () => {
  return (
    <SiteLayout>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Trades We Serve</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl">
            Built For The Trades.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            From plumbing, HVAC, and roofing to remodeling, landscaping, pest control, and more. Every system we build is engineered for how local service businesses actually win jobs.
          </p>
        </div>
      </section>

      {/* TRADES GRID */}
      <section className="section-y bg-background">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRADE_BENEFITS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={TRADE_IMAGES[t.imageKey]}
                  alt={`${t.name} contractor at work`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h2 className="font-display text-lg md:text-xl font-bold text-primary">{t.name}</h2>
                <p className="text-sm text-muted-foreground">{t.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm md:text-base font-medium uppercase tracking-wider text-muted-foreground/80">
          And More
        </p>
      </section>
    </SiteLayout>
  );
};

export default TradesPage;

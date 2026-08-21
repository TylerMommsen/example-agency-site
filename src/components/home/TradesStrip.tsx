'use client'
import { useMemo } from "react";
import Link from "next/link";
import { TRADE_IMAGES } from "@/assets/trades";

interface Trade {
  name: string;
  img: string;
}

const TRADES: Trade[] = [
  { name: "Plumbing", img: TRADE_IMAGES.plumbing },
  { name: "HVAC", img: TRADE_IMAGES.hvac },
  { name: "Roofing", img: TRADE_IMAGES.roofing },
  { name: "Electrical", img: TRADE_IMAGES.electrician },
  { name: "Remodeling", img: TRADE_IMAGES.remodeling },
  { name: "Landscaping", img: TRADE_IMAGES.landscaper },
  { name: "Concrete", img: TRADE_IMAGES.concrete },
  { name: "Painting", img: TRADE_IMAGES.painters },
];

const TradeCard = ({ trade }: { trade: Trade }) => (
  <Link
    href="/about/trades"
    aria-label={`${trade.name} contractors`}
    className="relative block w-[260px] sm:w-[300px] flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft hover:shadow-elegant transition-shadow"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={trade.img}
        alt={`${trade.name} contractor at work`}
        loading="lazy"
        width={1280}
        height={800}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <span className="text-base md:text-lg font-display font-bold text-primary-foreground drop-shadow-sm">
        {trade.name}
      </span>
    </div>
  </Link>
);

export const TradesStrip = () => {
  const topLoop = useMemo(() => {
    const rotateFrom = (items: Trade[], start: number) => [
      ...items.slice(start),
      ...items.slice(0, start),
    ];

    const topStart = Math.floor(Math.random() * TRADES.length);
    const topRowTrades = rotateFrom(TRADES, topStart);
    return [...topRowTrades, ...topRowTrades];
  }, []);

  return (
    <section className="section-y bg-background overflow-hidden" aria-labelledby="trades-heading">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Trades We Serve</p>
            <h2 id="trades-heading" className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
              Built For Contractors Like You
            </h2>
          </div>
          <Link
            href="/about/trades"
            className="text-sm font-semibold text-accent hover:underline self-start md:self-auto"
          >
            See all trades →
          </Link>
        </div>
      </div>

      <div
        className="relative mt-10"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-5 animate-marquee-x motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:snap-x"
          aria-label="Trades we serve row one"
        >
          {topLoop.map((t, i) => (
            <div key={`${t.name}-top-${i}`} className="flex-shrink-0">
              <TradeCard trade={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradesStrip;

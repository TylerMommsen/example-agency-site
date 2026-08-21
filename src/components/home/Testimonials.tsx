import { Star } from "lucide-react";

type CardSize = "small" | "medium" | "large";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  size: CardSize;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before BuildFlow, we were missing estimate calls after 4 PM almost every day. Now leads get a text back right away, and we're booking jobs the next morning instead of chasing voicemails.",
    name: "Mike R.",
    role: "Owner, HVAC Company",
    location: "Fort Worth, TX",
    size: "large",
  },
  {
    quote:
      "Our website finally looks like a real company, not a side project. Customers mention that all the time on first calls.",
    name: "Sarah L.",
    role: "Owner, Roofing Contractor",
    location: "Charlotte, NC",
    size: "small",
  },
  {
    quote:
      "They set everything up quickly. I mostly approved the design and they handled the rest.",
    name: "Anthony P.",
    role: "Owner, Plumbing Services",
    location: "Mesa, AZ",
    size: "small",
  },
  {
    quote:
      "The big win for us was speed. We answer leads while our crews are still on jobs, and that has made a clear difference in close rate.",
    name: "Jennifer M.",
    role: "Operations Manager, Electrical Contractor",
    location: "Tampa, FL",
    size: "medium",
  },
  {
    quote:
      "I used to piece together five tools and none of them talked to each other. This is the first setup that actually feels like one system.",
    name: "Carlos V.",
    role: "Owner, Remodeling Company",
    location: "Austin, TX",
    size: "medium",
  },
  {
    quote:
      "Our phone rings the same, but now every missed call gets followed up automatically. We stopped losing the easy wins.",
    name: "Daniel B.",
    role: "Owner, Concrete Company",
    location: "Riverside, CA",
    size: "small",
  },
  {
    quote:
      "The review funnel alone was worth it. We went from asking manually once in a while to getting a steady flow of new 5-star reviews each week.",
    name: "Leah T.",
    role: "Owner, Pressure Washing Business",
    location: "Orlando, FL",
    size: "large",
  },
  {
    quote:
      "I like that the messages still sound natural. It doesn't feel robotic to customers.",
    name: "Chris D.",
    role: "Owner, Pest Control Company",
    location: "Phoenix, AZ",
    size: "small",
  },
  {
    quote:
      "The launch call was straightforward and practical. We were taking leads through the new system the same day.",
    name: "Monica A.",
    role: "General Manager, Landscape Company",
    location: "Nashville, TN",
    size: "medium",
  },
  {
    quote:
      "We were spending money on ads but replying too slowly. Once follow-up became instant, those same ad dollars started producing better jobs.",
    name: "Jason G.",
    role: "Owner, Garage Door Contractor",
    location: "Las Vegas, NV",
    size: "large",
  },
  {
    quote:
      "Their team is responsive when we need edits. We don't wait weeks for basic changes anymore.",
    name: "Brittany H.",
    role: "Office Manager, Tree Service",
    location: "Jacksonville, FL",
    size: "small",
  },
  {
    quote:
      "Customers can tell we're organized now. Calls, texts, and web leads all land in one place and my office manager isn't bouncing between apps.",
    name: "Robert N.",
    role: "Owner, Painting Company",
    location: "San Antonio, TX",
    size: "medium",
  },
];

const CARD_SIZE_CLASS: Record<CardSize, string> = {
  small: "w-[280px] md:w-[300px]",
  medium: "w-[320px] md:w-[360px]",
  large: "w-[360px] md:w-[420px]",
};

const ReviewCard = ({ t }: { t: Testimonial }) => (
  <figure
    className={`flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:p-6 shadow-card-soft ${CARD_SIZE_CLASS[t.size]}`}
  >
    <div className="flex gap-1 text-cta" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
    <blockquote className="text-sm md:text-base text-primary leading-relaxed">
      "{t.quote}"
    </blockquote>
    <figcaption className="mt-auto pt-1">
      <div className="font-semibold text-primary">{t.name}</div>
      <div className="text-xs md:text-sm text-muted-foreground">{t.role} · {t.location}</div>
    </figcaption>
  </figure>
);

export const Testimonials = () => {
  const topLoop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="section-y bg-secondary overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contractor Reviews</p>
          <h2 id="testimonials-heading" className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
            Built For Busy Local Business Owners
          </h2>
        </div>
      </div>

      <div
        className="relative mt-12 py-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="flex w-max items-stretch gap-5 animate-marquee-x-reverse motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:snap-x"
          aria-label="Contractor reviews row one"
          style={{ animationDuration: "80s" }}
        >
          {topLoop.map((t, i) => (
            <div
              key={`${t.name}-top-${i}`}
              className="flex-shrink-0"
            >
              <ReviewCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

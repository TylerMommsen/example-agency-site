import { Phone, MessageSquare, Rocket, ArrowRight, ArrowDown } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Phone,
    title: "Demo Call",
    copy: "We learn about your business and show you a live demo of your future system.",
  },
  {
    n: "02",
    icon: MessageSquare,
    title: "We Build Your System",
    copy: "We create your website, phone system, and AI automations done-for-you.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Launch Call",
    copy: "We go live, show you how it works, and hand over your new professional system that captures every lead.",
  },
];

export const ProcessDiagram = () => {
  return (
    <section className="section-y bg-secondary" aria-labelledby="process-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Process</p>
          <h2 id="process-heading" className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
            What Working With Us Looks Like
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Three simple steps from first call to a fully-automated lead engine.
          </p>
        </div>

        <ol className="mt-12 grid gap-10 md:gap-6 md:grid-cols-3 relative">
          {STEPS.map((s, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <li
                key={s.n}
                className="relative rounded-2xl border border-border bg-card p-6 md:p-7 shadow-card-soft"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{s.copy}</p>

                {!isLast && (
                  <>
                    {/* Desktop arrow: between cards horizontally */}
                    <span
                      aria-hidden
                      className="hidden md:grid absolute top-1/2 -right-5 -translate-y-1/2 z-10 h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shadow-elegant ring-4 ring-secondary"
                    >
                      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    {/* Mobile arrow: between cards vertically */}
                    <span
                      aria-hidden
                      className="md:hidden absolute left-1/2 -bottom-8 -translate-x-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shadow-elegant ring-4 ring-secondary"
                    >
                      <ArrowDown className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ProcessDiagram;

import { Check } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import { PROCESS_DEEP, LAUNCH_CHECKLIST } from "@/config/page-content";

const ProcessPage = () => {
  return (
    <SiteLayout>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Process</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl">
            How We Build Your Lead Engine.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            We build your system in days 1-7, then complete your launch call and handover in days 7-10. Here's exactly what happens, who does what, and what you walk away with.
          </p>
        </div>
      </section>

      {/* DEEP STEPS */}
      <section className="section-y bg-background">
        <div className="container-tight space-y-10 md:space-y-14">
          {PROCESS_DEEP.map((s, i) => (
            <article
              key={s.day}
              className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-card-soft"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">{s.day}</p>
                <span className="font-display text-4xl md:text-5xl font-bold text-primary/15">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-primary text-balance">
                {s.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">{s.body}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-secondary p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">What you do</p>
                  <p className="mt-2 text-sm md:text-base text-foreground">{s.youDo}</p>
                </div>
                <div className="rounded-xl bg-primary p-5 text-primary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">What we do</p>
                  <p className="mt-2 text-sm md:text-base">{s.weDo}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DAY 14 CHECKLIST */}
      <section className="section-y bg-secondary">
        <div className="container-tight">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Launch Outcome</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
              What you'll have when we launch
            </h2>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {LAUNCH_CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ProcessPage;

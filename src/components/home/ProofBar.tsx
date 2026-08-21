const STATS = [
  { value: "<60s", label: "Avg. Lead Response Time" },
  { value: "24/7", label: "AI Follow-Up Coverage" },
  { value: "5★", label: "Google Reviews on Autopilot" },
];

export const ProofBar = () => {
  return (
    <section className="border-y border-border bg-card" aria-label="Results at a glance">
      <div className="container-wide py-10 md:py-12">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center justify-items-center">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <dt className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</dt>
              <dd className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ProofBar;

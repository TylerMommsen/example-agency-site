import SiteLayout from "@/components/layout/SiteLayout";
import placeholderDesktop from "@/assets/ourwork/placeholder-desktop.png";
import placeholderMobile from "@/assets/ourwork/placeholder-mobile.png";

// TODO: Replace these placeholders with screenshots of your own work.
// Desktop screenshots look best at 1600x1000 (16:10) and mobile at 497x1080.
// Set desktopMedia to "video" and provide desktopVideo (a file in /public) to
// show a screen recording instead of an image.
type WorkExample =
  | {
      name: string;
      mobileSrc: string;
      mobileName: string;
      desktopMedia: "image";
      src: string;
    }
  | {
      name: string;
      mobileSrc: string;
      mobileName: string;
      desktopMedia: "video";
      desktopVideo: string;
    };

const WORK_EXAMPLES: WorkExample[] = [
  {
    name: "Project one - insert your work here",
    desktopMedia: "image",
    src: placeholderDesktop.src,
    mobileSrc: placeholderMobile.src,
    mobileName: "Project one - mobile screenshot",
  },
  {
    name: "Project two - insert your work here",
    desktopMedia: "image",
    src: placeholderDesktop.src,
    mobileSrc: placeholderMobile.src,
    mobileName: "Project two - mobile screenshot",
  },
  {
    name: "Project three - insert your work here",
    desktopMedia: "image",
    src: placeholderDesktop.src,
    mobileSrc: placeholderMobile.src,
    mobileName: "Project three - mobile screenshot",
  },
  {
    name: "Project four - insert your work here",
    desktopMedia: "image",
    src: placeholderDesktop.src,
    mobileSrc: placeholderMobile.src,
    mobileName: "Project four - mobile screenshot",
  },
];

const OurWorkPage = () => {
  return (
    <SiteLayout>

      {/* HERO (dark navy band, no image) */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Work</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl">
            Websites We've Built
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            A simple look at homepage designs we've built for local service businesses.
          </p>
        </div>
      </section>

      {/* WORK GRID */}
      <section className="section-y bg-background">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {WORK_EXAMPLES.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft hover:shadow-elegant transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {item.desktopMedia === "video" ? (
                    <video
                      src={item.desktopVideo}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      width={1600}
                      height={1000}
                      aria-label={item.name}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.name}
                      loading="lazy"
                      width={1600}
                      height={1000}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
            {WORK_EXAMPLES.map((item) => (
              <div
                key={item.mobileName}
                className="group min-w-[180px] flex-1 overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft hover:shadow-elegant transition-shadow"
              >
                <div className="aspect-[497/1080] overflow-hidden">
                  <img
                    src={item.mobileSrc}
                    alt={item.mobileName}
                    loading="lazy"
                    width={497}
                    height={1080}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default OurWorkPage;

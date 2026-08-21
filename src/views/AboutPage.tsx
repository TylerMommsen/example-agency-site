import SiteLayout from "@/components/layout/SiteLayout";
import { SITE } from "@/config/site";
// TODO: Replace this placeholder with a photo of you or your team.
import aboutTeam from "@/assets/about-team.jpg";

const AboutPage = () => {
  return (
    <SiteLayout>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl">
            The Contractor's Growth Partner.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            We exist to make growing a contracting business stupidly simple, through better websites, AI, and done-for-you automations.
          </p>
        </div>
      </section>

      {/* STORY (60/40) */}
      <section className="section-y bg-background">
        <div className="container-wide grid gap-10 lg:gap-16 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Story</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
              Marketing should not be the hardest part of running a contracting business
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground">
              <p>
                BuildFlow was built after years of watching contractors juggle five different vendors: a web designer, a phone provider, an SEO agency, a CRM consultant, and someone to chase reviews. None of them talked to each other. Leads slipped through the cracks. Owners burned out.
              </p>
              <p>
                So we built one connected system. One team. Designed only for contractors, powered by AI, and engineered to do one thing better than anything else: turn website visitors into booked jobs.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={aboutTeam.src}
                alt="Placeholder - insert your own image here"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;

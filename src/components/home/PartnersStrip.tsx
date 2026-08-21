import canvaLogo from "@/assets/brands/canva.png";
import godaddyLogo from "@/assets/brands/godaddy.png";
import googleAnalyticsLogo from "@/assets/brands/googleanalytics.png";
import googleBusinessProfileLogo from "@/assets/brands/googlebusinessprofile.png";
import mailgunLogo from "@/assets/brands/mailgun.png";
import metaLogo from "@/assets/brands/meta.png";
import openaiLogo from "@/assets/brands/openai.png";
import twilioLogo from "@/assets/brands/twilio.png";
import zapierLogo from "@/assets/brands/zapier.png";

const PARTNERS = [
  { name: "Zapier", logo: zapierLogo.src },
  { name: "Twilio", logo: twilioLogo.src },
  { name: "Canva", logo: canvaLogo.src },
  { name: "GoDaddy", logo: godaddyLogo.src },
  { name: "OpenAI", logo: openaiLogo.src },
  { name: "Meta", logo: metaLogo.src },
  { name: "Google Business Profile", logo: googleBusinessProfileLogo.src },
  { name: "Mailgun", logo: mailgunLogo.src },
  { name: "Google Analytics", logo: googleAnalyticsLogo.src },
];

const PartnersStrip = () => {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="overflow-hidden bg-primary py-10 md:py-12" aria-labelledby="partners-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">We Partner With</p>
          <h2 id="partners-heading" className="mt-2 text-2xl md:text-3xl font-bold text-primary-foreground text-balance">
            Tools Your Business Already Knows
          </h2>
        </div>
      </div>

      <div
        className="relative mt-7"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-4 animate-marquee-x motion-reduce:animate-none motion-reduce:overflow-x-auto"
          aria-label="Partner brands"
        >
          {loop.map(({ name, logo }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-28 w-[250px] flex-shrink-0 items-center justify-center px-8"
              aria-label={name}
            >
              <img
                src={logo}
                alt={name}
                loading="lazy"
                className="max-h-20 max-w-[220px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersStrip;

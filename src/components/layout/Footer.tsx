import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { SERVICES, ABOUT_LINKS, SITE } from "@/config/site";
import logoIcon from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={logoIcon.src}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-contain"
                aria-hidden="true"
              />
              <span className="font-display text-lg font-bold">
                Build<span className="text-accent">Flow</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              The professional website and automation systems partner built for contractors.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="BuildFlow on Instagram"
              >
                <Instagram className="h-4 w-4 shrink-0" aria-hidden />
                Instagram
              </a>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="BuildFlow on Facebook"
              >
                <Facebook className="h-4 w-4 shrink-0" aria-hidden />
                Facebook
              </a>
              <a
                href={SITE.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="BuildFlow on TikTok"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.12Z"/>
                </svg>
                TikTok
              </a>
              <a
                href={SITE.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="BuildFlow on YouTube"
              >
                <Youtube className="h-4 w-4 shrink-0" aria-hidden />
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {ABOUT_LINKS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={l.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground">Pricing</Link>
              </li>
              <li>
                <Link href="/our-work" className="text-primary-foreground/80 hover:text-primary-foreground">Our Work</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Get In Touch</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={SITE.phoneHref} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {SITE.email}
                </a>
              </li>
              <li className="text-primary-foreground/80 leading-relaxed">
                {SITE.address}
              </li>
              <li>
                <a href={SITE.bookingUrl} className="text-primary-foreground/80 hover:text-primary-foreground">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} BuildFlow. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

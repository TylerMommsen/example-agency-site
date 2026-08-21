'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Phone, Globe, MapPin, Zap, Star, MessageSquare,
  Building2, Workflow, HardHat, Mail, type LucideIcon,
} from "lucide-react";
import { SERVICES, ABOUT_LINKS, SITE } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, Phone, MapPin, Zap, Star, MessageSquare,
  Building2, Workflow, HardHat, Mail,
};

const desktopLink =
  "px-3 py-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors rounded-md";

interface NavRowProps {
  to: string;
  iconName: string;
  title: string;
  subtitle?: string;
  variant?: "desktop" | "mobile";
}

const DropdownRow = ({ to, iconName, title, subtitle, variant = "desktop" }: NavRowProps) => {
  const Icon = ICON_MAP[iconName] ?? Globe;
  if (variant === "mobile") {
    return (
      <Link
        href={to}
        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-primary-foreground/85 hover:bg-white/10"
      >
        <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-accent">
          <Icon className="h-4 w-4" />
        </span>
        <span>{title}</span>
      </Link>
    );
  }
  return (
    <Link
      href={to}
      className={cn(
        "flex gap-3 rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors",
        subtitle ? "items-start" : "items-center",
      )}
    >
      <span
        className={cn(
          "grid h-8 w-8 flex-shrink-0 place-items-center rounded-md bg-accent/10 text-accent",
          subtitle && "mt-0.5",
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-primary leading-tight">{title}</span>
        {subtitle && <span className="text-xs text-muted-foreground">{subtitle}</span>}
      </span>
    </Link>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-primary text-primary-foreground transition-shadow",
        scrolled && "shadow-elegant",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="BuildFlow home">
          <img
            src={logoIcon.src}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-md object-contain"
            aria-hidden="true"
          />
          <span className="font-display text-lg font-bold tracking-tight">
            Build<span className="text-accent">Flow</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          <Link
            href="/"
            className={cn(desktopLink, pathname === "/" && "text-accent")}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={cn(desktopLink, "inline-flex items-center gap-1")}
              aria-haspopup="true"
            >
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div
              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[480px]"
            >
              <div className="rounded-xl border border-border bg-popover text-popover-foreground p-3 shadow-elegant">
                <div className="grid grid-cols-1 gap-1">
                  {SERVICES.map((s) => (
                    <DropdownRow
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      iconName={s.icon}
                      title={s.title}
                      subtitle={s.short}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/pricing"
            className={cn(desktopLink, pathname === "/pricing" && "text-accent")}
          >
            Pricing
          </Link>
          <Link
            href="/our-work"
            className={cn(desktopLink, pathname === "/our-work" && "text-accent")}
          >
            Our Work
          </Link>
          {/* About dropdown */}
          <div className="relative group">
            <button type="button" className={cn(desktopLink, "inline-flex items-center gap-1")} aria-haspopup="true">
              About <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-all absolute right-0 top-full pt-3 w-72">
              <div className="rounded-xl border border-border bg-popover text-popover-foreground p-2 shadow-elegant">
                {ABOUT_LINKS.map((l) => (
                  <DropdownRow
                    key={l.slug}
                    to={l.path}
                    iconName={l.icon}
                    title={l.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 h-10 px-5 font-semibold">
            <a href={SITE.bookingUrl}>Book a Call</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-foreground hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-primary">
          <div className="container-wide py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              <Link href="/" className="px-2 py-3 text-base font-semibold text-primary-foreground border-b border-white/10">
                Home
              </Link>

              <Accordion type="multiple" className="border-none">
                <AccordionItem value="services" className="border-white/10">
                  <AccordionTrigger className="px-2 py-3 text-base font-semibold text-primary-foreground hover:no-underline">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col gap-1 pl-2">
                      {SERVICES.map((s) => (
                        <DropdownRow
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          iconName={s.icon}
                          title={s.title}
                          variant="mobile"
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <Link
                  href="/pricing"
                  className="block px-2 py-3 text-base font-semibold text-primary-foreground border-b border-white/10"
                >
                  Pricing
                </Link>
                <Link
                  href="/our-work"
                  className="block px-2 py-3 text-base font-semibold text-primary-foreground border-b border-white/10"
                >
                  Our Work
                </Link>
                <AccordionItem value="about" className="border-white/10">
                  <AccordionTrigger className="px-2 py-3 text-base font-semibold text-primary-foreground hover:no-underline">
                    About
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col gap-1 pl-2">
                      {ABOUT_LINKS.map((l) => (
                        <DropdownRow
                          key={l.slug}
                          to={l.path}
                          iconName={l.icon}
                          title={l.label}
                          variant="mobile"
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 mt-3 h-12 text-base font-semibold">
                <a href={SITE.bookingUrl}>Book a Call</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

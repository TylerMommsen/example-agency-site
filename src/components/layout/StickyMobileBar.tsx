import { SITE } from "@/config/site";

/** Sticky bottom action bar for mobile (<1024px). */
export const StickyMobileBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="grid grid-cols-1 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex h-12 items-center justify-center rounded-md bg-cta text-sm font-semibold text-cta-foreground"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};

export default StickyMobileBar;

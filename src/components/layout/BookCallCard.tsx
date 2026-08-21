import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

export const BookCallCard = () => {
  return (
    <section className="section-y bg-background" aria-labelledby="book-call-heading">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 md:p-14 text-primary-foreground shadow-elegant">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cta/20 blur-3xl"
          />

          <div className="relative grid gap-8 md:grid-cols-5 md:gap-12 items-center">
            <div className="md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Ready to Grow Your Business?
              </p>
              <h2
                id="book-call-heading"
                className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-balance"
              >
                Get Your Contractor Website Live in 7-10 Days
              </h2>
              <p className="mt-4 text-base md:text-lg text-primary-foreground/85 max-w-xl">
                Answer a few quick questions, pick your plan, and we handle the rest.
                No setup fee. No long contracts. Live in 7-10 days.
              </p>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3">
              <Button
                asChild
                className="h-14 bg-cta text-cta-foreground hover:bg-cta/90 text-base font-semibold shadow-elegant"
              >
                <a href={SITE.bookingUrl} target="_blank" rel="noopener">
                  Book a Call <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallCard;

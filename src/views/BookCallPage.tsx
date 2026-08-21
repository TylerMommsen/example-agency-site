import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

const BookCallPage = () => {
  return (
    <div className="min-h-screen bg-background">

      <section className="section-y bg-background">
        <div className="container-tight">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* TODO: Replace this placeholder with your own booking calendar embed
              (e.g. a GoHighLevel calendar widget or any scheduling tool). */}
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/40 p-10 text-center">
            <CalendarDays className="h-12 w-12 text-muted-foreground" />
            <h1 className="mt-6 font-display text-3xl font-bold text-foreground">
              Put your booking calendar here
            </h1>
            <p className="mt-3 max-w-md text-muted-foreground">
              Embed your scheduling widget so visitors can book a call with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCallPage;

import BeforeAfterSlider from "./BeforeAfterSlider";
// TODO: Replace these placeholders with real before/after screenshots of a site you've rebuilt.
import beforeImg from "@/assets/ourwork/placeholder-before.png";
import afterImg from "@/assets/ourwork/placeholder-after.png";

export const HeroBrowserMockup = () => {
  return (
    <div className="relative w-full max-w-[900px] ml-auto xl:origin-center xl:scale-110 2xl:scale-[1.15]">
      {/* Soft glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-accent/20 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-background shadow-elegant lg:rotate-[-1deg]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[hsl(0,72%,60%)]" />
          <span className="h-3 w-3 rounded-full bg-[hsl(45,93%,58%)]" />
          <span className="h-3 w-3 rounded-full bg-[hsl(140,55%,48%)]" />
        </div>
        {/* Viewport */}
        <div className="aspect-[16/10] w-full overflow-hidden rounded-b-xl">
          <BeforeAfterSlider
            beforeSrc={beforeImg.src}
            afterSrc={afterImg.src}
            beforeAlt="Before: the client's outdated website"
            afterAlt="After: the finished website"
            className="rounded-b-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBrowserMockup;

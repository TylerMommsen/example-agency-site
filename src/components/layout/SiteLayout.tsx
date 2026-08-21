import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProcessDiagram from "./ProcessDiagram";
import BookCallCard from "./BookCallCard";
import StickyMobileBar from "./StickyMobileBar";

interface SiteLayoutProps {
  children: ReactNode;
  /** Hide the universal process + book-call sections (rare; default false). */
  hideUniversalSections?: boolean;
  /** Hide sticky mobile CTA bar (rare; default false). */
  hideStickyMobileBar?: boolean;
}

export const SiteLayout = ({
  children,
  hideUniversalSections = false,
  hideStickyMobileBar = false,
}: SiteLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      {!hideUniversalSections && (
        <>
          <ProcessDiagram />
          <BookCallCard />
        </>
      )}
      <Footer />
      {!hideStickyMobileBar && <StickyMobileBar />}
    </div>
  );
};

export default SiteLayout;

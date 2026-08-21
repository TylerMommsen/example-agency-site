import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQS = [
  {
    q: "What exactly do I get with the BuildFlow package?",
    a: "A new high-converting website, a dedicated business phone number, local SEO setup, automated lead follow-up, our 5-Star Magic Funnel for reviews, and missed-call text-back automation, all built, launched, and managed for you.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most systems are built in days 1-7, then we run your launch call and handover in days 7-10 so you can go live with confidence.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We do everything for you, including design, copy, automations, and integrations. You just answer leads and run jobs.",
  },
  {
    q: "Will this work for my trade?",
    a: "Yes. We build for plumbing, HVAC, roofing, electrical, remodeling, landscaping, concrete, painting, and most home-service trades.",
  },
  {
    q: "What happens to leads I get after hours?",
    a: "Our AI follow-up texts and emails them instantly, qualifies them, and books appointments, so every lead from your marketing gets a fast reply and you never lose one to a competitor.",
  },
  {
    q: "Why should I spend on a website when word of mouth is working?",
    a: "Word of mouth is valuable, but it is hard to control or scale. A strong website turns referrals, Google searches, and social traffic into booked calls even when people hear about you from someone else first.",
  },
  {
    q: "What happens if I decide to cancel my membership?",
    a: "We'll miss you, but you can cancel anytime. When your membership ends, access to our hosted tools and ongoing services stops at the end of your billing period. We'll transfer your domain to you at no cost. If you want to keep the custom-built website itself, there's a one-time buyout fee of $800.",
  },
  {
    q: "How is this different from a regular web designer?",
    a: "A web designer hands you a pretty website and disappears. We hand you a complete business foundation (site, phone, automations, reviews) that captures every lead from your marketing, and we manage it for you.",
  },
];

export const FAQ = () => {
  return (
    <section className="section-y bg-background" aria-labelledby="faq-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
          <h2 id="faq-heading" className="mt-2 text-3xl md:text-4xl font-bold text-primary text-balance">
            Questions Contractors Ask Us
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-border bg-card px-2 md:px-4 shadow-card-soft">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-b-0 border-border">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary px-3 md:px-4 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

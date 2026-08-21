// Shared content for the Pricing, Our Work, About, Process, and Trades sub-pages.
import type { TradeImageKey } from "@/assets/trades";

export interface CaseStudy {
  slug: string;
  trade: string;
  headline: string;
  summary: string;
  stats: { label: string; value: string }[];
  imageKey: TradeImageKey;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "hvac-dallas",
    trade: "HVAC",
    headline: "3x more booked calls in 60 days",
    summary:
      "A Dallas HVAC operator was losing 40% of after-hours calls. We installed the full BuildFlow stack and tripled booked appointments in two months.",
    stats: [
      { label: "Booked calls / mo", value: "+312%" },
      { label: "Missed calls recovered", value: "87%" },
      { label: "Reviews added", value: "+58" },
    ],
    imageKey: "hvac",
  },
  {
    slug: "roofing-charlotte",
    trade: "Roofing",
    headline: "From a brochure site to a lead engine",
    summary:
      "A Charlotte roofer rebuilt on BuildFlow and added AI follow-up. Quote requests doubled and time-to-response dropped to under a minute.",
    stats: [
      { label: "Quote requests", value: "2x" },
      { label: "Avg response", value: "<60s" },
      { label: "Time to launch", value: "1-10 days" },
    ],
    imageKey: "roofing",
  },
  {
    slug: "plumbing-phoenix",
    trade: "Plumbing",
    headline: "From 12 reviews to 80+ in 90 days",
    summary:
      "A Phoenix plumbing company went from page two of Google to ranking in the Map Pack after launching local SEO and the 5-Star Magic Funnel.",
    stats: [
      { label: "New 5-star reviews", value: "+68" },
      { label: "Map Pack rank", value: "#1" },
      { label: "Website calls", value: "+220%" },
    ],
    imageKey: "plumbing",
  },
  {
    slug: "remodeling-austin",
    trade: "Remodeling",
    headline: "Fully booked 3 months out",
    summary:
      "An Austin remodeling firm needed quality leads, not more spam. AI qualification + nurture put them on a 3-month booked-out schedule.",
    stats: [
      { label: "Qualified leads", value: "+175%" },
      { label: "Avg job value", value: "+22%" },
      { label: "No-shows", value: "-60%" },
    ],
    imageKey: "remodeling",
  },
];

export interface TradeBenefit {
  name: string;
  imageKey: TradeImageKey;
  benefit: string;
}

export const TRADE_BENEFITS: TradeBenefit[] = [
  {
    name: "Plumbing",
    imageKey: "plumbing",
    benefit: "Capture every emergency call, day or night, with instant text-back and after-hours AI.",
  },
  {
    name: "HVAC",
    imageKey: "hvac",
    benefit: "Book maintenance plans and seasonal tune-ups with automated nurture sequences.",
  },
  {
    name: "Roofing",
    imageKey: "roofing",
    benefit: "Rank in storm-affected areas the moment homeowners start searching.",
  },
  {
    name: "Electrician",
    imageKey: "electrician",
    benefit: "Turn urgent quote requests into booked jobs while your team is on-site or pulling permits.",
  },
  {
    name: "Remodeling",
    imageKey: "remodeling",
    benefit: "Showcase your portfolio and pre-qualify high-ticket projects with AI.",
  },
  {
    name: "Landscaper",
    imageKey: "landscaper",
    benefit: "Lock in seasonal contracts with automated pre-season outreach.",
  },
  {
    name: "Concrete",
    imageKey: "concrete",
    benefit: "Win neighborhood referrals with a steady flow of 5-star Google reviews.",
  },
  {
    name: "Painters",
    imageKey: "painters",
    benefit: "Convert estimate visitors with same-day quote follow-up automation.",
  },
  {
    name: "Masonry",
    imageKey: "masonry",
    benefit: "Promote specialty craftsmanship with project galleries and local search pages.",
  },
  {
    name: "Pressure Washing",
    imageKey: "pressureWashing",
    benefit: "Fill route schedules with fast-response forms, reminders, and recurring service campaigns.",
  },
  {
    name: "Handyman",
    imageKey: "handyman",
    benefit: "Qualify small-job requests quickly so you can focus on profitable work.",
  },
  {
    name: "Dog Groomers",
    imageKey: "dogGroomers",
    benefit: "Keep appointment books full with online booking, reminders, and review follow-up.",
  },
  {
    name: "Decks and Patios",
    imageKey: "decksAndPatios",
    benefit: "Show outdoor living transformations and capture homeowners ready to build.",
  },
  {
    name: "Pool Construction",
    imageKey: "poolConstruction",
    benefit: "Pre-qualify premium backyard projects before your sales team spends time on-site.",
  },
  {
    name: "Moving",
    imageKey: "moving",
    benefit: "Respond to quote requests fast and keep every move organized from lead to booking.",
  },
  {
    name: "Tree Service",
    imageKey: "treeService",
    benefit: "Capture urgent removal and trimming calls with local pages built for storm demand.",
  },
  {
    name: "Windows and Doors",
    imageKey: "windowsAndDoors",
    benefit: "Convert product research into consultations with clear offers and automated follow-up.",
  },
  {
    name: "Pest Control",
    imageKey: "pestControl",
    benefit: "Book one-time treatments and recurring plans with quick intake and nurture flows.",
  },
  {
    name: "Paving",
    imageKey: "paving",
    benefit: "Win driveway, parking lot, and repair jobs with stronger local visibility.",
  },
  {
    name: "Garage Door Contractor",
    imageKey: "garageDoorContractor",
    benefit: "Route emergency repair calls and estimate requests to the right follow-up instantly.",
  },
];

export interface ProcessStep {
  day: string;
  title: string;
  body: string;
  youDo: string;
  weDo: string;
}

export const PROCESS_DEEP: ProcessStep[] = [
  {
    day: "Day 0",
    title: "Demo Call (15 minutes)",
    body: "We learn about your trade, your service area, and where your prospects come from today. Then we walk you through a live demo of the system tailored to your business.",
    youDo: "Show up and answer a few questions about your business.",
    weDo: "Live walk-through, custom recommendations, transparent pricing.",
  },
  {
    day: "Days 1 to 7",
    title: "We Build Your System",
    body: "Our team designs your website, sets up your dedicated business phone, configures the AI follow-up flows, builds your review funnel, and wires it all into one dashboard.",
    youDo: "Approve a couple of design proofs and send us a logo if you have one.",
    weDo: "Design, copy, hosting, automations, integrations, schema, citations.",
  },
  {
    day: "Days 7 to 10",
    title: "Launch Call & Handover (20 minutes)",
    body: "After the build phase, we go live together on a screen-share. You see exactly how to use the dashboard, take a call through the new system, and watch the AI book your first lead.",
    youDo: "Show up to the call. Start answering more booked appointments.",
    weDo: "Final QA, training, ongoing support, monthly reporting.",
  },
];

export const LAUNCH_CHECKLIST = [
  "New high-converting website live on your domain",
  "Dedicated business phone number tracking every call",
  "Missed-call text-back active 24/7",
  "AI follow-up replying to every lead in under a minute",
  "5-star review funnel sending automated requests",
  "Remarketing campaign re-engaging past leads and website visitors",
  "Ongoing support ready for edits, updates, and optimization",
];

export const PRINCIPLES = [
  {
    title: "Built for the Trades",
    body: "Every funnel and automation is engineered for contractors. No generic agency templates.",
  },
  {
    title: "Done-For-You, Always",
    body: "From copywriting to citations to launch training, we handle every step. You run jobs.",
  },
  {
    title: "Speed-to-Lead Obsessed",
    body: "Every system we build is measured against one rule: respond first, win the job.",
  },
];

export const COMPARISON_ROWS = [
  {
    feature: "Time to launch",
    buildflow: "1-10 days",
    stack: "60 to 90 days across vendors",
  },
  {
    feature: "Vendors to manage",
    buildflow: "1",
    stack: "5 to 7 separate tools",
  },
  {
    feature: "Setup work for you",
    buildflow: "Approve a few proofs",
    stack: "Coordinate every integration",
  },
  {
    feature: "Monthly cost",
    buildflow: "One simple monthly fee",
    stack: "Stacked subscriptions",
  },
  {
    feature: "Who optimizes it",
    buildflow: "Your dedicated growth partner",
    stack: "Nobody. It is on you.",
  },
];

export const PRICING_FAQS = [
  {
    q: "What's the difference between Essentials and Complete?",
    a: "Essentials at $97/mo gives you the website foundation: a professional, mobile-optimized contractor site with hosting, SSL, and ongoing edits. Complete at $297/mo adds the full AI system on top: a dedicated business phone number, automated lead follow-up, missed-call text-back, the 5-Star review funnel, re-marketing campaigns, and the all-in-one inbox. If you are running ads or want every lead from your marketing answered instantly, we recommend Complete.",
  },
  {
    q: "Is there a setup fee?",
    a: "The initial setup is completely free. We cover the cost of the website, phone, and review funnel setup.",
  },
  {
    q: "What if I already have a website?",
    a: "We replace it with one built to convert. You keep your domain and content history.",
  },
  {
    q: "Do you transfer the site if I cancel?",
    a: "Yes. If you ever cancel, we'll transfer the domain name we purchased for you at no cost. If you'd also like to keep the custom-built website itself, there's a one-time buyout of $800.",
  },
];

// Central config for brand-wide constants (booking, phone, services, etc.)
// TODO: Replace every value below with your own agency's details.
export const SITE = {
  name: "BuildFlow",
  tagline: "The Professional Website and Automation Foundation Every Contractor Needs",
  bookingUrl: "/book-a-call",
  phoneDisplay: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@yourdomain.com",
  emailHref: "mailto:hello@yourdomain.com",
  address: "123 Main Street, Suite 100, Anytown, ST 12345",
  domain: "https://yourdomain.com",
  /** Absolute URL for Open Graph / Twitter previews (`public/og-default.png`). */
  defaultOgImage: "https://yourdomain.com/og-default.png",
  // TODO: Point these at your own social profiles (or remove the ones you don't use).
  instagramUrl: "#",
  facebookUrl: "#",
  tiktokUrl: "#",
  youtubeUrl: "#",
};

export const SERVICES = [
  {
    slug: "full-website-design",
    title: "Full Website + Design",
    short: "A high-converting website built to turn visitors into booked jobs.",
    icon: "Globe",
  },
  {
    slug: "business-phone-number",
    title: "Dedicated Business Phone Number",
    short: "A business line for compliant automated texts and instant lead replies.",
    icon: "Phone",
  },
  {
    slug: "automated-lead-follow-up",
    title: "Automated Lead Follow-Up",
    short: "Responds to new leads within 30 seconds at any time - even while you're working or asleep.",
    icon: "Zap",
  },
  {
    slug: "5-star-magic-funnel",
    title: "5-Star Magic Funnel",
    short: "Turn happy customers into a steady stream of 5-star Google reviews.",
    icon: "Star",
  },
  {
    slug: "missed-call-text-back",
    title: "Missed Call Text-Back Automation",
    short: "Every missed call instantly gets a text back so leads never slip away.",
    icon: "MessageSquare",
  },
  {
    slug: "re-marketing-campaigns",
    title: "Re-Marketing Campaigns",
    short: "Stay in front of past leads and customers with automated email and SMS campaigns.",
    icon: "Repeat",
  },
  {
    slug: "all-in-one-inbox",
    title: "All-in-One Inbox",
    short: "Calls, texts, emails, FB and IG DMs, and web chat in a single inbox on any device.",
    icon: "Inbox",
  },
] as const;

export const ABOUT_LINKS = [
  { slug: "about", label: "About Us", path: "/about", icon: "Building2" },
  { slug: "process", label: "Our Process", path: "/about/process", icon: "Workflow" },
  { slug: "trades", label: "Trades We Serve", path: "/about/trades", icon: "HardHat" },
  { slug: "contact", label: "Contact", path: "/book-a-call", icon: "Mail" },
] as const;

export const TRADES = [
  "Plumbing", "HVAC", "Roofing", "Electrical",
  "Remodeling", "Landscaping", "Concrete", "Painting",
];

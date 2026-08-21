// Deep content for each Service sub-page.

// TODO: Replace this placeholder with your own explainer videos.
// Drop your .mp4 files into /public/servicevideos/, add a poster image for each,
// and give every service its own { src, poster } below.
import _placeholderVideoPosterUrl from "@/assets/servicevideos/placeholder-video.png";

const PLACEHOLDER_VIDEO = {
  src: "/servicevideos/your-video.mp4",
  poster: _placeholderVideoPosterUrl.src,
};

export interface ServiceFeature {
  title: string;
  body: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  /** Short marketing label above the H1. */
  eyebrow: string;
  /** H1, benefit-led, contractor-specific. */
  h1: string;
  /** Sub-headline under the H1. */
  sub: string;
  /** SEO meta title (~60 chars). */
  metaTitle: string;
  /** SEO meta description (~160 chars). */
  metaDescription: string;
  /** Service schema description. */
  schemaDescription: string;
  /** "The Problem" 2–3 sentence narrative. */
  problem: string;
  /** "The Fix" 2–3 sentence narrative. */
  solution: string;
  /** 4–6 features/benefits. */
  features: ServiceFeature[];
  /** Service-specific FAQs. */
  faqs: ServiceFAQ[];
  /** Optional explainer shown beside stacked problem/fix (video left, copy right on large screens). */
  problemSolutionVideo?: {
    src: string;
    poster: string;
    /** SEO VideoObject metadata. */
    name?: string;
    description?: string;
    uploadDate?: string;
    /** ISO 8601 duration, e.g. "PT1M40S". */
    duration?: string;
  };
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "full-website-design": {
    slug: "full-website-design",
    eyebrow: "Full Website + Design",
    h1: "A Contractor Website Built to Book Jobs, Not Just Look Pretty",
    sub: "Custom-designed, mobile-first, and engineered to turn visitors into booked calls from the moment they land.",
    metaTitle: "Contractor Website Design | BuildFlow",
    metaDescription: "BuildFlow designs and builds custom contractor websites that convert visitors into booked calls. Mobile-first, SEO-ready, and fully launched in under 2 weeks for US trades.",
    schemaDescription: "Custom website design and development for US contractors, optimized for credibility, conversion, mobile speed, and local SEO.",
    problemSolutionVideo: PLACEHOLDER_VIDEO,
    problem:
      "Most contractor websites are slow, generic, and barely work. They list services, show a logo, and lose almost every lead.",
    solution:
      "We design and build your site like a sales rep. Every section, headline, and button is engineered to drive one outcome: a booked call or quote request from your ideal customer.",
    features: [
      {
        title: "Conversion-First Design",
        body: "Every page is structured around a single action, call, book, or request a quote. No clutter, no dead ends.",
      },
      {
        title: "Mobile-First & Lightning Fast",
        body: "Built for the way contractors actually get found: from a phone, on a jobsite, in under 2 seconds.",
      },
      {
        title: "Trade-Specific Content",
        body: "Real copy written for plumbers, HVAC, roofers, electricians and more. No generic agency templates.",
      },
      {
        title: "SEO-Ready Foundation",
        body: "Clean code, semantic structure, schema markup, and on-page SEO built in from day one.",
      },
      {
        title: "Done-For-You Setup",
        body: "Hosting, domain, SSL, analytics, and forms all handled. You focus on the trucks, we handle the tech.",
      },
      {
        title: "Always-On Support",
        body: "Need a new service page or seasonal promo? We update it for you. No tickets, no waiting weeks.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to launch my new website?",
        a: "Most sites are built in days 1-7, then we complete your launch call and handover in days 7-10. We handle copywriting, design, and setup so you don't have to.",
      },
      {
        q: "Can you redesign my existing site?",
        a: "Absolutely. Most of our clients come in with an old site that wasn't converting. We rebuild it from the ground up.",
      },
      {
        q: "Do you handle hosting and updates?",
        a: "Yes. Hosting, SSL, security, and content edits are all included. No surprise invoices.",
      },
      {
        q: "Do you transfer the site if I cancel?",
        a: "Yes. If you ever cancel, we'll transfer the domain name we purchased for you at no cost. If you'd also like to keep the custom-built website itself, there's a one-time buyout of $800.",
      },
    ],
  },

  "business-phone-number": {
    slug: "business-phone-number",
    eyebrow: "Dedicated Business Phone Number",
    h1: "Your Own Business Line for Instant Lead Replies.",
    sub: "A dedicated phone number gives your company the compliant A2P setup needed to automatically text leads and forward calls to your existing number.",
    metaTitle: "Business Phone Number for Contractors | BuildFlow",
    metaDescription: "BuildFlow sets up a dedicated business line for US contractors with compliant A2P messaging, instant lead text-backs, and call forwarding to your existing phone number.",
    schemaDescription: "Dedicated business phone number service for contractors with compliant A2P messaging, instant lead replies, and call forwarding.",
    problemSolutionVideo: PLACEHOLDER_VIDEO,
    problem:
      "Texting leads from a personal number can create compliance problems, and missed calls still turn into competitors winning the job when nobody replies quickly.",
    solution:
      "We set up a dedicated business line so your company can legally use A2P messaging to send automated texts, respond to leads instantly, and forward calls and messages to your existing phone.",
    features: [
      {
        title: "Dedicated Local Number",
        body: "A real local business line for your company that builds trust and supports compliant business texting.",
      },
      {
        title: "A2P Messaging Ready",
        body: "Use a business number set up for A2P so automated texts can be sent to leads the right way.",
      },
      {
        title: "Forward to Your Existing Number",
        body: "Calls and messages can route to the phone number your team already uses, so you do not have to change how you answer.",
      },
      {
        title: "Missed Call → Instant Text",
        body: "If you can't pick up, our system texts back in seconds so the lead doesn't move on.",
      },
      {
        title: "Smart Call Forwarding",
        body: "Ring your current phone, multiple team members, or after-hours flows depending on how your business answers leads.",
      },
      {
        title: "Automated Lead Responses",
        body: "Send fast replies to calls, texts, and form leads from a dedicated business number instead of a personal cell.",
      },
    ],
    faqs: [
      {
        q: "Do I have to give up my current number?",
        a: "No. We set up a new business line for automation and A2P messaging, then forward calls and messages to your existing phone number.",
      },
      {
        q: "What happens to calls after hours?",
        a: "After-hours calls can trigger an instant text-back and route into the follow-up flow you choose.",
      },
      {
        q: "Does this work with my whole team?",
        a: "Yes. Calls can ring multiple phones at once or route in sequence based on availability.",
      },
    ],
  },

  "automated-lead-follow-up": {
    slug: "automated-lead-follow-up",
    eyebrow: "Automated Lead Follow-Up",
    h1: "Instant AI Text-Back for Every New Lead",
    sub: "When someone reaches out from Instagram, Facebook, your website widget, or SMS, they get an immediate AI text-back so the conversation starts before they move on.",
    metaTitle: "AI Lead Follow-Up for Contractors | BuildFlow",
    metaDescription: "BuildFlow's AI instantly texts back new contractor leads from Instagram, Facebook, website forms, and SMS, so no lead goes cold while you're on a job.",
    schemaDescription: "Instant AI text-back automation for contractors that responds to new leads from social platforms, website widgets, forms, and SMS.",
    problemSolutionVideo: PLACEHOLDER_VIDEO,
    problem:
      "The contractor who responds first wins the job, usually within 5 minutes. But you're on a roof, in a crawlspace, or driving between jobs. By the time you call back, the lead is cold.",
    solution:
      "We connect your lead sources to an instant AI text-back system. The moment a new lead comes in, they receive a fast, helpful first response by text so you can follow up while the lead is still warm.",
    features: [
      {
        title: "Immediate First Response",
        body: "New leads get a text back in seconds, giving your business a fast reply even when you're busy on a job.",
      },
      {
        title: "Instagram & Facebook Lead Capture",
        body: "Social leads can trigger an instant text-back so DMs and ad responses do not sit untouched.",
      },
      {
        title: "Website Widget & Form Text-Back",
        body: "Website widget messages and form fills receive an immediate SMS reply after they reach out.",
      },
      {
        title: "SMS Lead Response",
        body: "Incoming text leads get a fast acknowledgment so they know your team received the request.",
      },
      {
        title: "Personalized Message Templates",
        body: "We shape the first reply around your trade, offer, and tone so it sounds like your business.",
      },
      {
        title: "Lead Alerts for Your Team",
        body: "You still control the real follow-up. Your team gets the lead details so you can take over quickly.",
      },
    ],
    faqs: [
      {
        q: "Can I customize the text?",
        a: "Yes. We write and configure the first response around your services, tone, and the lead source it came from.",
      },
      {
        q: "What channels does it work on?",
        a: "It can support new leads from Instagram, Facebook, website widgets, website forms, and SMS.",
      },
      {
        q: "What happens after the first text-back?",
        a: "You receive the lead details and can reply or call from your phone while the lead is still engaged.",
      },
    ],
  },

  "5-star-magic-funnel": {
    slug: "5-star-magic-funnel",
    eyebrow: "5-Star Magic Funnel",
    h1: "Turn Happy Customers Into a Steady Stream of 5-Star Reviews",
    sub: "An automated review funnel that asks at the perfect moment, filters out the unhappy, and routes 5-star reviews straight to Google.",
    metaTitle: "Google Review Funnel for Contractors | BuildFlow",
    metaDescription: "BuildFlow's review funnel texts customers after every job, routes 5-star reviews to Google, and sends private feedback straight to you, so you grow reviews on autopilot.",
    schemaDescription: "Automated review acquisition funnel for contractors that filters customer feedback and drives 5-star Google reviews.",
    problemSolutionVideo: PLACEHOLDER_VIDEO,
    problem:
      "You're doing great work, but your Google reviews don't show it. Asking customers feels awkward, and the few who do leave reviews are often the unhappy ones.",
    solution:
      "We install a polished review funnel that texts customers right after the job. Happy ones (4–5 stars) are routed to Google. Unhappy ones (1–3 stars) come straight to you privately so you can fix it before it goes public.",
    features: [
      {
        title: "Perfect-Timing Review Requests",
        body: "Sent the moment a job is marked complete, when satisfaction is highest.",
      },
      {
        title: "Smart Sentiment Filter",
        body: "Happy customers are routed to Google. Unhappy ones come privately to you to resolve.",
      },
      {
        title: "Multi-Channel Outreach",
        body: "SMS + email reminders so no review request gets ignored.",
      },
      {
        title: "Branded Review Landing Page",
        body: "Looks like your business, not a generic third-party tool.",
      },
      {
        title: "Private Feedback Capture",
        body: "Unhappy customers can share concerns privately first, giving you a chance to fix issues before they become public reviews.",
      },
    ],
    faqs: [
      {
        q: "Is it against Google's policy to filter reviews?",
        a: "We never block negative reviews from being posted. We simply give every customer a chance to share private feedback first, which is fully compliant.",
      },
      {
        q: "Does this work for past customers too?",
        a: "Yes. We can run a one-time campaign to your existing customer list to jump-start your review count.",
      },
      {
        q: "What happens when someone leaves private feedback?",
        a: "That feedback is routed to you privately so you can follow up, resolve the issue, and protect the customer relationship.",
      },
    ],
  },

  "missed-call-text-back": {
    slug: "missed-call-text-back",
    eyebrow: "Missed Call Text-Back",
    h1: "Never Lose Another Lead to a Missed Call",
    sub: "Every missed call instantly triggers a personalized text back so the lead stays with you instead of dialing the next contractor.",
    metaTitle: "Missed Call Text-Back for Contractors | BuildFlow",
    metaDescription: "BuildFlow automatically texts back every missed contractor call in under 60 seconds, keeping leads warm and away from the competition. Works on your existing business phone number.",
    schemaDescription: "Missed-call text-back automation for contractors that instantly responds to missed calls with personalized SMS.",
    problemSolutionVideo: PLACEHOLDER_VIDEO,
    problem:
      "The average contractor misses 30%+ of inbound calls. Every missed call is a homeowner who will dial the next contractor in their search results within minutes.",
    solution:
      "The moment you miss a call, our system fires off a friendly, personalized text. The lead gets an immediate response, and your team can follow up before they move on.",
    features: [
      {
        title: "Instant SMS the Second You Miss a Call",
        body: "Triggered in under 60 seconds. Personalized with your business name and a real message.",
      },
      {
        title: "Reply Alerts for Your Team",
        body: "When a lead replies to the text-back, your team is notified so you can follow up quickly.",
      },
      {
        title: "Works on Your Existing Number",
        body: "We layer it onto your tracked business line, no number changes, no dropped calls.",
      },
      {
        title: "After-Hours Coverage",
        body: "Every missed call after-hours gets the same instant response. You wake up to warm leads instead of dead voicemails.",
      },
      {
        title: "Lead Captured in Your CRM",
        body: "Every missed-call lead is logged and tagged automatically, no manual data entry.",
      },
      {
        title: "Customizable Message Templates",
        body: "Match your tone, services, and offer. Update anytime in seconds.",
      },
    ],
    faqs: [
      {
        q: "Will the text look like spam?",
        a: "No. It's sent from your dedicated business line with a real, personalized message, most leads reply within minutes.",
      },
      {
        q: "What if the lead replies?",
        a: "Your team gets notified and can take over from your phone or dashboard while the lead is still engaged.",
      },
      {
        q: "Does it work with my current phone?",
        a: "Yes. We layer it onto your tracked business line so calls still ring your existing phones.",
      },
    ],
  },

  "re-marketing-campaigns": {
    slug: "re-marketing-campaigns",
    eyebrow: "Re-Marketing Campaigns",
    h1: "Stay Top Of Mind With Past Leads And Customers",
    sub: "Automated email and SMS campaigns that keep your business in front of every lead and customer you have ever worked with, so repeat jobs and referrals roll in on autopilot.",
    metaTitle: "Re-Marketing for Contractors | BuildFlow",
    metaDescription: "BuildFlow automates email and SMS campaigns that re-engage past contractor leads and customers with seasonal offers, maintenance reminders, and referral asks.",
    schemaDescription: "Automated email and SMS re-marketing campaigns for contractors targeting past leads and customers to drive repeat work and referrals.",
    problemSolutionVideo: PLACEHOLDER_VIDEO,
    problem:
      "Your biggest source of new revenue is sitting in your phone: every past customer and unconverted lead. But without a system, they forget you the moment the job ends and call whoever shows up first next time.",
    solution:
      "We load your contacts into automated email and SMS sequences that drop seasonal offers, maintenance reminders, and referral asks at the exact right moments so your name is the first one homeowners think of.",
    features: [
      {
        title: "Seasonal Offer Campaigns",
        body: "Pre-built seasonal sequences for spring tune-ups, fall prep, holiday specials, and more.",
      },
      {
        title: "Maintenance Reminders",
        body: "Auto-trigger reminders 6, 12, or 24 months after a job to drive repeat service calls.",
      },
      {
        title: "Lead Reactivation Sequences",
        body: "Quietly re-engage every lead who never booked, with a fresh offer at the right time.",
      },
      {
        title: "Referral Ask Automations",
        body: "Time-tested referral requests sent right after a great review, with built-in incentives.",
      },
      {
        title: "Email + SMS, Done For You",
        body: "We write, design, and schedule everything. You approve once and the system runs.",
      },
      {
        title: "Performance Reporting",
        body: "See open rates, replies, and booked jobs from every campaign in one simple dashboard.",
      },
    ],
    faqs: [
      {
        q: "Do I need a customer list to start?",
        a: "We can import any list you already have, even a messy spreadsheet of past invoices. We clean and organize it for you.",
      },
      {
        q: "Will my customers find this annoying?",
        a: "No. Campaigns are spaced thoughtfully and provide real value, like maintenance tips and seasonal offers, so engagement stays high.",
      },
      {
        q: "Can I send a one-off blast?",
        a: "Yes. On top of the automated sequences, you can send one-off promos to your full list any time from the dashboard.",
      },
    ],
  },

  "all-in-one-inbox": {
    slug: "all-in-one-inbox",
    eyebrow: "All-in-One Inbox",
    h1: "Every Conversation In One Inbox, On Any Device",
    sub: "Calls, texts, emails, Facebook and Instagram DMs, and website chat all flow into a single inbox so nothing falls through the cracks.",
    metaTitle: "All-in-One Inbox for Contractors | BuildFlow",
    metaDescription: "BuildFlow's contractor inbox consolidates calls, texts, email, Facebook DMs, Instagram DMs, and website chat into one dashboard for your whole team, on any device.",
    schemaDescription: "Unified messaging inbox for contractors that consolidates calls, SMS, email, Facebook and Instagram DMs, and website chat in one place.",
    problemSolutionVideo: PLACEHOLDER_VIDEO,
    problem:
      "Leads come in from a dozen places: your phone, email, Facebook, Instagram, your website chat. Switching between apps means missed messages, slow replies, and lost jobs.",
    solution:
      "We pull every channel into one clean inbox. Reply to a Facebook DM, an email, and a missed-call text from the same screen, on desktop or your phone, with full conversation history and your team in sync.",
    features: [
      {
        title: "Every Channel In One Place",
        body: "Calls, SMS, email, Facebook, Instagram, web chat, and webform replies all in a single threaded view.",
      },
      {
        title: "Mobile And Desktop Apps",
        body: "Reply from the truck or the office. Conversations sync across every device in real time.",
      },
      {
        title: "Team Assignments And Notes",
        body: "Assign conversations, leave internal notes, and tag teammates without losing context.",
      },
      {
        title: "Full Customer History",
        body: "See every past call, text, email, and job in one timeline the moment a contact reaches out.",
      },
      {
        title: "Snippets And Templates",
        body: "Save your most-used replies and fire them off in two taps so response times stay fast.",
      },
      {
        title: "Read Receipts And Notifications",
        body: "Know the second a lead reads your message, with smart notifications so you reply at the right moment.",
      },
    ],
    faqs: [
      {
        q: "Do I have to give up my current email or phone apps?",
        a: "No. The inbox works alongside your existing tools. Most owners find they stop using the old apps within a week because everything lives in one place.",
      },
      {
        q: "Can my whole team use it?",
        a: "Yes. Add as many team members as you need, with assignments, internal notes, and role-based permissions.",
      },
      {
        q: "What channels can I connect?",
        a: "Your business phone line, SMS, email, Facebook Pages, Instagram DMs, your website chat widget, and webforms all feed into the same inbox.",
      },
    ],
  },
};

import { TRADES } from "@/config/site";

export type PlanChoice = "essentials" | "complete" | "unsure";
export type TimelineChoice = "two-weeks" | "thirty-days" | "researching" | "unsure";

export type SurveyAnswers = {
  businessType?: string;
  pain?: string;
  leadHandling?: string;
  plan?: PlanChoice;
  timeline?: TimelineChoice;
};

export interface SurveyOption {
  value: string;
  label: string;
}

export interface SurveyQuestion {
  id: keyof SurveyAnswers;
  question: string;
  options: SurveyOption[];
}

export interface SurveyPackage {
  id: "essentials" | "complete";
  name: string;
  price: number;
  description: string;
  benefits: string[];
  recommended?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const BOOKING_SURVEY_INTRO = {
  eyebrow: "Before we get started",
  headline: "Let's make sure we're the right fit for your business",
  description:
    "A few quick questions to confirm we can help you and point you to the right plan. Takes under 60 seconds.",
  cta: "Check My Fit",
};

export const BOOKING_RESULTS_COPY = {
  headline: "Great news. We can help you.",
  description:
    "Pick your plan below and your website (plus automation system, if you choose Complete) will be live within 7-10 days. No setup fee. Cancel anytime.",
};

export const BOOKING_SURVEY_PACKAGES: SurveyPackage[] = [
  {
    id: "essentials",
    name: "Essentials",
    price: 97,
    description: "Look professional online and turn visitors into calls, with hosting and edits handled.",
    benefits: [
      "Free setup, no upfront fee",
      "Custom-designed contractor website (10-20 pages)",
      "Mobile-optimized, fast-loading pages",
      "On-page SEO built in",
      "Hosting, SSL, and ongoing edits included",
      "Contact form delivering leads straight to your phone",
    ],
  },
  {
    id: "complete",
    name: "Complete",
    price: 297,
    description: "Never miss a lead again. Your website plus the full automation system, all connected.",
    recommended: true,
    benefits: [
      "Free setup, no upfront fee",
      "Everything in Essentials",
      "Dedicated tracked business phone number",
      "Automated lead follow-up via SMS (responds in under 30 seconds)",
      "5-Star Magic Funnel review system",
      "Missed-call text-back automation",
      "Re-marketing email + SMS campaigns",
      "All-in-one inbox for calls, texts, email, and social DMs",
      "Single dashboard for calls, leads, and reviews",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Pick your plan",
    description: "Choose Essentials or Complete and complete checkout in under 2 minutes. No setup fee.",
  },
  {
    step: "02",
    title: "Fill your onboarding form",
    description: "We send you a short questionnaire to collect your business details, services, and photos.",
  },
  {
    step: "03",
    title: "We build everything",
    description: "Your custom website (and full automation system if you chose Complete) is ready in 7-10 days.",
  },
  {
    step: "04",
    title: "Your launch call",
    description: "We book a video call to deliver everything, walk you through your system, and get you live.",
  },
];

const BUSINESS_TYPE_OPTIONS: SurveyOption[] = [
  ...TRADES.map((trade) => ({ value: trade.toLowerCase(), label: trade })),
  { value: "other-home-service", label: "Other home service contractor" },
  { value: "not-contractor", label: "Not a contractor" },
];

export const BOOKING_SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: "businessType",
    question: "What type of business do you run?",
    options: BUSINESS_TYPE_OPTIONS,
  },
  {
    id: "pain",
    question: "What's costing you the most right now?",
    options: [
      { value: "miss-calls", label: "I miss calls and lose jobs while I'm on-site" },
      { value: "slow-response", label: "Leads go cold because I follow up too slowly" },
      { value: "bad-website", label: "My website looks unprofessional or doesn't bring in leads" },
      { value: "reviews", label: "I'm not collecting enough Google reviews" },
      { value: "too-many-tools", label: "Too many tools. I want everything in one place" },
      { value: "need-website", label: "I just need a solid professional website to start" },
    ],
  },
  {
    id: "leadHandling",
    question: "How are you currently handling new leads when they come in?",
    options: [
      { value: "call-back-when-free", label: "I call back when I have time, sometimes I miss them" },
      { value: "try-respond-fast", label: "I try to respond fast but it's not always consistent" },
      { value: "pieced-together", label: "I have a system but it's patched together from multiple tools" },
      { value: "getting-set-up", label: "I'm just getting started and building my process" },
    ],
  },
  {
    id: "plan",
    question: "Which plan sounds right for you?",
    options: [
      { value: "essentials", label: "Essentials ($97/mo): professional website, live in 7-10 days" },
      { value: "complete", label: "Complete ($297/mo): website + full automated lead capture system" },
      { value: "unsure", label: "Not sure yet, help me decide" },
    ],
  },
  {
    id: "timeline",
    question: "When do you want to be live?",
    options: [
      { value: "two-weeks", label: "ASAP, I want to be live within 2 weeks" },
      { value: "thirty-days", label: "Within the next 30 days" },
      { value: "researching", label: "Still weighing my options" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
];

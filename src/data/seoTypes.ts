export interface SEOServicePage {
  slug: string;
  group: 'A' | 'B' | 'C' | 'D';
  categoryLabel: string;
  title: string;
  metaDesc: string;
  h1: string;
  badge: string;
  intro: string;
  hinglishNote?: string;
  whoItsFor: string[];
  deliverables: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  pricingFactors: { factor: string; detail: string }[];
  pricingStartingAt: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  schemaType: 'Service' | 'Article';
}

export interface SupportMonthlyPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tickets: string;
  hours: string;
  days: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

export interface SupportHourlyRate {
  service: string;
  rate: string;
  description: string;
}

export interface DedicatedAgentTier {
  type: string;
  price: string;
  period: string;
  features: string[];
}

export interface SupportAddon {
  name: string;
  price: string;
  type: 'monthly' | 'one-time';
  description: string;
}

export const SUPPORT_MONTHLY_PLANS: SupportMonthlyPlan[] = [
  {
    id: 'starter',
    name: 'Starter Support',
    price: '$249',
    period: '/ month',
    tickets: '150 Tickets / mo',
    hours: '8 Hours / Day',
    days: '5 Days / Week',
    badge: 'STARTER',
    popular: false,
    features: [
      'Email Support & Ticket Handling',
      'Real-Time Live Chat Coverage',
      '8 Hours/Day Active Window',
      '5 Days/Week Coverage',
      'Up to 150 Tickets / Month',
      'Brand & Custom SOP Training',
      'CRM System Updates',
      'Weekly Status & SLA Reports',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Support',
    price: '$499',
    period: '/ month',
    tickets: '500 Tickets / mo',
    hours: '8 Hours / Day',
    days: '5 Days / Week',
    badge: 'MOST POPULAR',
    popular: true,
    features: [
      'Email & Live Chat Support',
      'Basic Inbound Phone Support',
      '8 Hours/Day Active Window',
      '5 Days/Week Coverage',
      'Up to 500 Tickets / Month',
      'CRM Management & Sync',
      'Knowledge Base Curation',
      'Priority Ticket Escalation',
      'Dedicated Support Specialist',
      'Weekly In-Depth Performance Reports',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Support',
    price: '$899',
    period: '/ month',
    tickets: '1,200 Tickets / mo',
    hours: '8 Hours / Day',
    days: '7 Days / Week',
    badge: '7-DAY ACTIVE',
    popular: false,
    features: [
      'Omnichannel Email, Chat & Phone Support',
      'Dedicated Full-Time Agent Assigned',
      '8 Hours/Day, 7 Days/Week Coverage',
      'Up to 1,200 Tickets / Month',
      'Strict SLA Guarantee & Monitoring',
      'Dedicated Team Lead & QA Supervision',
      'Advanced Custom KPI Reporting',
      'Monthly Strategic Review Meeting',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Support',
    price: '$1,499+',
    period: '/ month',
    tickets: 'Unlimited Volume',
    hours: '24/7 Coverage',
    days: '365 Days / Year',
    badge: '24/7 SCALE',
    popular: false,
    features: [
      'Multi-Agent Dedicated Cluster',
      '24/7/365 Round-the-Clock Support',
      'Email, Live Chat, Voice & Social Inbox',
      'Unlimited Scalability & Burst Handling',
      'Dedicated Team Lead & QA Manager',
      'Custom Enterprise SLA Guarantees',
      'Deep CRM, ERP & Helpdesk Integration',
      'Dedicated Strategic Account Manager',
    ],
  },
];

export const HOURLY_RATES: SupportHourlyRate[] = [
  { service: 'Email Support', rate: '$8 / hour', description: 'Accurate, empathetic email ticket management.' },
  { service: 'Live Chat Support', rate: '$9 / hour', description: 'Sub-minute first response on web chat.' },
  { service: 'Email + Chat Combined', rate: '$10 / hour', description: 'Dual-channel frontline customer assistance.' },
  { service: 'Inbound Phone Support', rate: '$12 / hour', description: 'Clear, professional English & multilingual voice support.' },
  { service: 'Customer Support Generalist', rate: 'Starting $12 / hour', description: 'General customer inquiries, orders, and returns.' },
  { service: 'Technical Support Specialist', rate: 'Starting $15 / hour', description: 'L1/L2 SaaS, software, and IT technical troubleshooting.' },
  { service: 'Team Lead / QA Specialist', rate: '$18 / hour', description: 'Auditing, agent coaching, and workflow management.' },
];

export const DEDICATED_AGENTS: DedicatedAgentTier[] = [
  {
    type: 'Shared Agent',
    price: '$399',
    period: '/ month',
    features: ['Shared across max 2 clients', '160 hours monthly coverage', 'Email & chat support', 'Daily ticket summaries'],
  },
  {
    type: 'Dedicated Full-Time Agent',
    price: '$799',
    period: '/ month',
    features: ['100% dedicated to your brand', '160 hours monthly coverage', 'Email, chat & phone', 'Direct Slack/Teams integration'],
  },
  {
    type: 'Dedicated Agent + QA Manager',
    price: '$999',
    period: '/ month',
    features: ['Dedicated full-time agent', 'Weekly QA scoring & audit', 'Custom SOP documentation', 'Priority account management'],
  },
  {
    type: '2-Agent Dedicated Team',
    price: '$1,499+',
    period: '/ month',
    features: ['2 full-time dedicated agents', '320+ hours monthly coverage', 'Weekend & extended shifts', 'Dedicated team lead'],
  },
];

export const SUPPORT_ADDONS: SupportAddon[] = [
  { name: 'Weekend Coverage', price: '+$99 / mo', type: 'monthly', description: 'Extend 5-day plans to Saturday & Sunday.' },
  { name: 'After-Hours Night Shift', price: '+$149 / mo', type: 'monthly', description: 'Overnight coverage for international timezones.' },
  { name: 'Social Media Inbox Support', price: '+$149 / mo', type: 'monthly', description: 'Instagram, Facebook & Twitter DM moderation.' },
  { name: 'Shopify Store Support', price: '+$149 / mo', type: 'monthly', description: 'Direct Shopify order edits, tracking & refund processing.' },
  { name: 'Amazon Seller Support', price: '+$199 / mo', type: 'monthly', description: 'Amazon Buyer-Seller messaging & feedback response.' },
  { name: 'Knowledge Base Setup', price: '$199', type: 'one-time', description: 'Complete help center & FAQ article creation.' },
  { name: 'Standard Operating Procedure (SOP)', price: '$149', type: 'one-time', description: 'Comprehensive workflow manual for your team.' },
  { name: 'CRM & Helpdesk Setup', price: '$199', type: 'one-time', description: 'Zendesk, Freshdesk, Gorgias, or HubSpot setup.' },
  { name: 'Dedicated Account Manager', price: '+$249 / mo', type: 'monthly', description: 'Senior strategist overseeing your support operations.' },
];

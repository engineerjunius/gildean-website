import {
  LuDraftingCompass,
  LuPrinter,
  LuFileStack,
  LuShieldCheck,
  LuClock,
  LuRuler,
  LuMessagesSquare,
} from 'react-icons/lu'

// Company details. Fill in `phone` and `address` to show them across the site
// (empty values are hidden automatically).
export const company = {
  name: 'Gildean Engineering Services',
  shortName: 'Gildean',
  tagline: 'Engineered for Efficiency, Designed for Success.',
  email: 'gildeanengineeringservices@gmail.com',
  phone: '',
  address: '',
  hours: 'Mon – Sat, 8:00 AM – 5:00 PM',
  facebook: 'https://www.facebook.com/gildean.engineering.services',
}

export const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'Services', url: '/services' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/connect' },
]

export const services = [
  {
    slug: 'design',
    icon: LuDraftingCompass,
    title: 'Engineering Design & Analysis',
    short: 'Design & analysis',
    summary: 'Structural design, analysis and drafting for residential and commercial projects.',
    features: [
      'Structural design and analysis',
      'Construction drawings and drafting',
      'Design review and computations',
    ],
  },
  {
    slug: 'plotting',
    icon: LuFileStack,
    title: 'Blueprint Plotting & Printing',
    short: 'Blueprint plotting',
    summary: 'Large-format plotting of plans and blueprints with sharp, accurate line work.',
    features: [
      'Large-format plans and blueprints',
      'True-to-scale reproduction',
      'Multiple sets for permits and site use',
    ],
  },
  {
    slug: 'printing',
    icon: LuPrinter,
    title: 'Everyday Printing Solutions',
    short: 'Everyday printing',
    summary: 'Fast, reliable printing for documents, reports and everyday business needs.',
    features: [
      'Documents, reports and forms',
      'Black & white and colour printing',
      'Quick turnaround for walk-in jobs',
    ],
  },
]

export const values = [
  {
    icon: LuRuler,
    title: 'Precision first',
    text: 'Every drawing and computation is checked so what gets built matches what was designed.',
  },
  {
    icon: LuClock,
    title: 'On-time delivery',
    text: 'Clear timelines from the start, and regular updates until your job is done.',
  },
  {
    icon: LuShieldCheck,
    title: 'Code-conscious',
    text: 'Designs prepared with applicable building codes and permit requirements in mind.',
  },
  {
    icon: LuMessagesSquare,
    title: 'Straight answers',
    text: 'Plain-language advice and transparent quotes, with no surprises at the end.',
  },
]

export const process = [
  { step: '01', title: 'Tell us about your project', text: 'Send your plans, sketches or requirements through the contact form or email.' },
  { step: '02', title: 'Get a clear quote', text: 'We review the scope and reply with pricing and a realistic timeline.' },
  { step: '03', title: 'We get to work', text: 'Design, plotting or printing, with updates along the way.' },
  { step: '04', title: 'Delivery', text: 'Receive your finished drawings, prints or documents, ready to use.' },
]

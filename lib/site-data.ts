export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const contactEmail = "hello@casaminder.com";
export const whatsappDisplay = "+351 961 747 456";
export const whatsappNumber = "351961747456";

export const services = [
  {
    title: "Property Check Visits",
    description: "Regular inspections with photos, condition notes and issue reporting.",
  },
  {
    title: "Keyholding & Access",
    description: "Secure keyholding and controlled access for cleaners, contractors or family.",
  },
  {
    title: "Housekeeping",
    description: "Cleaning, airing, linen change and pre-arrival preparation.",
  },
  {
    title: "Maintenance Coordination",
    description: "We help arrange trusted local suppliers and keep you updated.",
  },
  {
    title: "Mail & Utility Checks",
    description: "Mail collection, meter readings, water/electricity checks and basic monitoring.",
  },
  {
    title: "Rental Readiness",
    description: "Optional support for owners preparing for short, mid or long-term rental.",
  },
];

export const pricingPlans = [
  {
    name: "Essential Care",
    price: "from EUR89/month",
    description: "A calm monthly rhythm for empty or occasionally used homes.",
    features: [
      "One scheduled property check per month",
      "Basic photo report",
      "Check doors, windows, signs of leaks/damp",
      "Air the property",
      "Mail check",
      "WhatsApp/email update",
    ],
  },
  {
    name: "Safe Home Plus",
    price: "from EUR149/month",
    description: "More frequent checks and priority owner support.",
    features: [
      "Two scheduled checks per month",
      "Detailed photo/video update",
      "Utility and meter checks",
      "Run taps and flush toilets",
      "Coordinate one supplier visit per month",
      "Priority owner support",
    ],
    featured: true,
  },
  {
    name: "Guest Ready",
    price: "from EUR249/month + cleaning/laundry costs",
    description: "Arrival preparation for owners, family or approved guests.",
    features: [
      "Pre-arrival inspection",
      "Cleaning coordination",
      "Linen/towel setup",
      "Grocery/welcome pack option",
      "Key access coordination",
      "Arrival-ready photo confirmation",
    ],
  },
  {
    name: "Rental Support",
    price: "custom quote",
    description: "Support for owners who already rent or are preparing responsibly.",
    features: [
      "Listing readiness",
      "Cleaning/changeover coordination",
      "Guest access support",
      "Maintenance reporting",
      "Suitable for owners already licensed or exploring compliant rental options",
    ],
  },
];

export const areas = [
  "Setubal",
  "Azeitao",
  "Palmela",
  "Sesimbra",
  "Troia/Comporta edge",
  "Almada",
  "Costa da Caparica",
  "Seixal",
  "Barreiro",
  "Montijo",
  "Alcochete",
  "Lisbon",
];

export const trustBullets = [
  "Clear photo updates",
  "Local supplier coordination",
  "Simple monthly plans",
  "English-speaking support",
  "No unnecessary upselling",
  "Optional Portuguese support",
  "Suitable for empty homes, second homes and occasional-use properties",
];

export const faqs = [
  {
    question: "Do I need this service if my property is not rented?",
    answer:
      "Yes. Many CasaMinder clients simply want their second home, empty home or investment property checked while they are away. Rental support is optional.",
  },
  {
    question: "Can you check for damp, leaks or damage?",
    answer:
      "We can look for visible signs of damp, leaks, damage, pests, access issues and unusual conditions during visits, then send clear photos and notes. Specialist inspections or repairs are arranged separately when needed.",
  },
  {
    question: "Do you provide cleaning?",
    answer:
      "Yes. We can coordinate housekeeping, airing, linen changes and pre-arrival preparation. Cleaning, laundry and related supplies are billed separately unless included in a custom package.",
  },
  {
    question: "Can you hold keys?",
    answer:
      "Yes. We offer keyholding and controlled access support for owners, approved family members, cleaners and trusted contractors.",
  },
  {
    question: "Do you manage Airbnb properties?",
    answer:
      "CasaMinder is not positioned primarily as an Airbnb management company. We can provide rental-readiness, cleaning coordination and guest-access support where suitable, subject to the owner's legal and compliance responsibilities.",
  },
  {
    question: "Do you work with long-term tenants?",
    answer:
      "Yes. We can support landlords with access coordination, check-ins by arrangement and maintenance reporting, while respecting tenant privacy and any tenancy requirements.",
  },
  {
    question: "What happens if you find a problem?",
    answer:
      "We notify you with photos, notes and practical next steps. With your approval, we can help coordinate a local supplier or contractor.",
  },
  {
    question: "Are repairs included in the monthly fee?",
    answer:
      "No. Repairs, specialist visits, materials and third-party supplier costs are quoted and billed separately unless a custom agreement says otherwise.",
  },
  {
    question: "Can I receive photos after every visit?",
    answer:
      "Yes. Photo updates are part of our property check service, with the level of detail depending on your plan and the visit type.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "Our initial service area covers Setubal, Azeitao, Palmela, Sesimbra, Almada, Costa da Caparica, Seixal, Barreiro, Montijo, Alcochete, Lisbon and nearby areas by request.",
  },
];

export const guides = [
  {
    title: "How to protect your Portuguese property while you are away",
    excerpt: "Simple ways to reduce risk from leaks, damp, access issues and unexpected maintenance.",
    href: "/guides/protect-portuguese-property-while-away",
  },
  {
    title: "Empty home checklist for second-home owners in Portugal",
    excerpt: "A practical pre-departure checklist for owners who visit Portugal occasionally.",
    href: "/guides/empty-home-checklist-portugal",
  },
  {
    title: "Property care vs Airbnb management: what is the difference?",
    excerpt: "How home watch, keyholding and owner support differ from full rental management.",
    href: "/guides/property-care-vs-airbnb-management",
  },
  {
    title: "What to check before leaving your home empty for winter",
    excerpt: "Seasonal checks for damp, utilities, ventilation, security and outdoor spaces.",
    href: "/guides/winter-empty-home-checks",
  },
  {
    title: "Keyholding and property checks in Lisbon and Setubal",
    excerpt: "What absent owners should expect from a reliable local property care service.",
    href: "/guides/keyholding-property-checks-lisbon-setubal",
  },
];

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

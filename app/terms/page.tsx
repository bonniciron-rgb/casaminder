import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "How CasaMinder presents its website, enquiries, pricing, service scope and owner responsibilities.",
};

const termsSections = [
  {
    heading: "1. Who we are",
    content: [
      "CasaMinder is a Portugal-based property care business providing practical support for owners who are away from their properties.",
    ],
    list: [
      "Business name: CasaMinder",
      "Legal entity: LUCIDA ORIGEM, UNIPESSOAL, LDA",
      "Website: https://casaminder.com",
      "Email: hello@casaminder.com",
      "WhatsApp: +351 961 747 456",
      "Service areas: Lisbon, Setubal and surrounding areas in Portugal",
    ],
    closing:
      "In these Terms, CasaMinder, we, us and our refer to LUCIDA ORIGEM, UNIPESSOAL, LDA.",
  },
  {
    heading: "2. Use of the website",
    content: [
      "You may use this website to learn about CasaMinder, view our services, request information, submit an enquiry or contact us.",
      "You agree not to misuse the website, interfere with its normal operation, attempt to access restricted systems, submit false information, or use the website for unlawful or harmful purposes.",
      "We may update, suspend or remove parts of the website at any time.",
    ],
  },
  {
    heading: "3. Website information and service descriptions",
    content: [
      "The information on this website is provided for general guidance only. We aim to keep it clear, accurate and up to date, but service details, prices, availability and areas covered may change.",
      "Service descriptions on the website are not a guarantee that every service will be available for every property. Availability depends on factors such as property location, access arrangements, scheduling, property type, service frequency and the scope requested.",
      "The website does not replace a written quote, service plan or agreement.",
    ],
  },
  {
    heading: "4. Enquiries and bookings",
    content: [
      "You can contact CasaMinder by email, website form or WhatsApp.",
      "Submitting an enquiry does not create a binding service agreement. A service is only confirmed once we have reviewed the request, confirmed availability, agreed the scope and pricing, and both parties have accepted the arrangement.",
      "We may decline an enquiry if the property is outside our service area, access is unsuitable, timing is not available, or the requested service is outside our scope.",
    ],
  },
  {
    heading: "5. Quotes and pricing",
    content: [
      "Any prices shown on the website are starting prices unless clearly stated otherwise.",
      "Monthly plan prices may vary depending on:",
    ],
    list: [
      "Property size",
      "Property location",
      "Visit frequency",
      "Access requirements",
      "Property condition",
      "Scope of service",
      "Urgency",
      "Travel time",
      "Additional owner requests",
    ],
    closing:
      "A quote may be provided after we understand the property and the support required. Quotes are valid for the period stated in the quote, or for a reasonable period if no period is stated.",
  },
  {
    heading: "6. Third-party supplier costs",
    content: [
      "Some services may require third-party suppliers, such as cleaners, laundry providers, handymen, plumbers, electricians, gardeners, pool maintenance providers or other contractors.",
      "Unless agreed otherwise, the following may be charged separately:",
    ],
    list: [
      "Cleaning and housekeeping",
      "Laundry and linen services",
      "Repairs and maintenance",
      "Emergency call-outs",
      "Contractor visits",
      "Supplier supervision",
      "Replacement keys, locks or access devices",
      "Garden or pool services",
      "Deep cleaning",
      "Waste removal",
      "Shopping or welcome packs",
      "Specialist inspections",
      "Travel outside the agreed service area",
    ],
    closing:
      "CasaMinder may help coordinate third-party suppliers where agreed, but third-party costs remain the owner's responsibility unless otherwise confirmed in writing.",
  },
  {
    heading: "7. Scope of service",
    content: [
      "CasaMinder provides property checks, keyholding, housekeeping coordination, maintenance coordination, mail and utility checks, pre-arrival preparation, owner support and optional rental-readiness support.",
      "Our standard property checks are practical visual checks. They are not technical surveys, building inspections, legal assessments, safety certifications or specialist reports.",
      "A property check may help identify visible concerns, but we cannot guarantee that every issue will be found or prevented. Some issues may be hidden, intermittent, sudden or outside the reasonable scope of a routine visit.",
      "The agreed scope of service will depend on the package, quote or service plan confirmed with you.",
    ],
  },
  {
    heading: "8. Owner responsibilities",
    content: [
      "As the property owner or authorised representative, you are responsible for:",
    ],
    list: [
      "Providing accurate information about the property",
      "Confirming that you have the right to request services for the property",
      "Providing safe and lawful access",
      "Supplying correct keys, codes, alarm details and access instructions",
      "Informing us of known risks, defects or restrictions",
      "Maintaining appropriate property, contents and liability arrangements",
      "Approving third-party supplier work where needed",
      "Paying agreed fees and approved costs",
      "Ensuring the property complies with applicable legal and regulatory requirements",
    ],
    closing: "You should not send highly sensitive personal information unless it is necessary for the service.",
  },
  {
    heading: "9. Access and keyholding",
    content: [
      "Where CasaMinder provides keyholding, keys will be handled with care and used only for agreed purposes or authorised access.",
      "The owner must provide accurate access instructions, including building entry details, alarm information, parking instructions, condominium requirements and any relevant restrictions.",
      "We may refuse or postpone a visit if access is unsafe, unclear, unavailable, or materially different from what was agreed.",
      "Keyholding does not mean that CasaMinder assumes full responsibility for the property's security or condition. It is a practical access support service.",
    ],
  },
  {
    heading: "10. Rental-related support limitations",
    content: [
      "CasaMinder may provide optional rental-readiness support, such as pre-arrival preparation, cleaning coordination, access support, basic property presentation and supplier coordination.",
      "CasaMinder is not primarily an Airbnb or short-term rental management company, unless a specific service is agreed separately.",
      "Any rental-related activity remains the owner's responsibility. This includes legal, licensing, tax, registration, condominium, insurance and compliance matters. Owners should seek appropriate professional advice where needed.",
      "We do not guarantee rental income, occupancy, guest bookings or platform performance.",
    ],
  },
  {
    heading: "11. No legal, tax, insurance or brokerage advice",
    content: [
      "CasaMinder provides property care and owner support services.",
      "We do not provide legal advice, tax advice, insurance advice, financial advice, property valuation, real estate brokerage, licensing advice or formal compliance advice.",
      "Any information on the website about property care, rental readiness or owner responsibilities is general and practical only.",
    ],
  },
  {
    heading: "12. Limitation of liability",
    content: [
      "CasaMinder will provide services with reasonable care and skill, based on the agreed scope of service.",
      "However, we do not guarantee that all issues will be prevented, detected or resolved. Properties can be affected by hidden defects, sudden failures, weather, third-party actions, supplier delays, building-wide issues, utility failures or events outside our control.",
      "To the extent permitted by law, CasaMinder is not responsible for:",
    ],
    list: [
      "Pre-existing property defects",
      "Hidden or non-visible issues",
      "Damage caused by third parties",
      "Supplier delays or failures outside our control",
      "Losses caused by incorrect or incomplete owner instructions",
      "Issues arising from lack of access",
      "Utility failures, weather events or building-wide problems",
      "Indirect or consequential losses",
    ],
    closing:
      "Nothing in these Terms limits liability where it would be unlawful to do so. This includes liability for fraud, intentional misconduct, or any liability that cannot legally be excluded.",
  },
  {
    heading: "13. Third-party links and services",
    content: [
      "Our website may include links to third-party websites, tools or services. These are provided for convenience only.",
      "We are not responsible for the content, availability, privacy practices or terms of third-party websites or services.",
      "If we coordinate third-party suppliers for you, their own terms, availability and charges may apply.",
    ],
  },
  {
    heading: "14. Intellectual property",
    content: [
      "All content on this website, including text, branding, layout, graphics, service descriptions and other materials, belongs to CasaMinder or is used with permission.",
      "You may view and use the website for personal or business enquiry purposes. You may not copy, reproduce, adapt, publish or commercially use our website content without prior written permission.",
    ],
  },
  {
    heading: "15. Privacy and personal data",
    content: [
      "We handle personal data in accordance with our Privacy Policy.",
      "When you contact us, submit an enquiry or use our services, we may collect and process personal data such as your name, contact details, property location and service requirements.",
      "For more information, please read our Privacy Policy at /privacy.",
    ],
  },
  {
    heading: "16. Changes to the website or services",
    content: [
      "We may update these Terms, the website, service descriptions, pricing, service areas or availability from time to time.",
      "The latest version of these Terms will be published on this page. Continued use of the website after changes are published means you accept the updated Terms.",
      "Any confirmed service agreement will be governed by the terms agreed at the time, unless both parties agree changes.",
    ],
  },
  {
    heading: "17. Governing law and jurisdiction",
    content: [
      "These Terms are governed by the laws of Portugal.",
      "Any disputes relating to these Terms, the website or CasaMinder services will be subject to the competent courts of Portugal, unless mandatory consumer protection rules provide otherwise.",
    ],
  },
  {
    heading: "18. Contact details",
    content: [
      "If you have any questions about these Terms and Conditions, please contact us:",
    ],
    list: [
      "Email: hello@casaminder.com",
      "WhatsApp: +351 961 747 456",
      "Website: https://casaminder.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-card sm:p-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Legal</p>
        <h1 className="font-serif text-4xl font-semibold text-charcoal sm:text-5xl">Terms and Conditions</h1>

        <div className="mt-8 space-y-6 text-muted leading-8">
          <p>
            These Terms and Conditions explain how you may use the CasaMinder website and how our property care
            services are presented. They are intended for general website use and enquiries. Any agreed service may
            also be subject to a separate written quote, service plan or agreement.
          </p>

          {termsSections.map((section) => (
            <section key={section.heading} className="space-y-4 border-t border-stone-200 pt-8">
              <h2 className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">{section.heading}</h2>

              {section.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.list ? (
                <ul className="list-disc space-y-2 pl-6">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {section.closing ? <p>{section.closing}</p> : null}
            </section>
          ))}

          <section className="border-t border-stone-200 pt-8">
            <p className="font-semibold text-charcoal">Last updated: May 14, 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export const LINKS = {
  pay: "https://worthprimetax.com/Payment.aspx",
  login: "https://worthprimetax.com/Login.aspx",
  irs: "https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp",
  linkedin: "https://www.linkedin.com/company/worthprime-tax-legal-and-compliance-services-inc/",
  phone: "+1 (646) 798-3907",
  phoneHref: "tel:+16467983907",
  email: "helpdesk@worthprimetax.com",
  whatsapp: "https://wa.me/16467983907",
};

/** LinkedIn links and icons stay hidden until the client supplies a real profile URL above. */
/**
 * Production origin for canonical tags, the sitemap, Open Graph URLs and structured data. Change it
 * here only. worthprimetax.com still serves the old site until the domain is moved to this one.
 */
export const SITE = {
  url: "https://worthprimetax.com",
  name: "WorthPrime Tax",
  // [NEED: client-approved 1200x630 social sharing image; the hero photo stands in until then]
  socialImageAlt: "WorthPrime Tax advisers at work",
};

export const HAS_LINKEDIN = LINKS.linkedin.startsWith("http");

export const OFFICES = [
  {
    label: "Headquarter (USA)",
    region: "United States",
    address: "2389 Main St, Ste. 100, Glastonbury, CT 06033",
  },
  {
    label: "Branch Office (UAE)",
    region: "United Arab Emirates",
    address: "The Meydan Hotel, Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
  },
  {
    label: "Branch Office (India)",
    region: "India",
    address:
      "Victory plaza, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad, Telangana 500008",
  },
];

export const TRUST_PHRASES = [
  "One stop",
  "Integrated",
  "Precise",
  "Year-round",
  "U.S. tax",
  "Accounting",
  "Compliance",
  "Perspective",
];

export const STATS = [
  {
    value: 12,
    prefix: "$",
    suffix: "M+",
    label: "Tax Saved for Clients",
  },
  { value: 5000, prefix: "", suffix: "+", label: "Clients Served" },
  { value: 99, prefix: "", suffix: "%", label: "Client Satisfaction Rate" },
  {
    value: 20,
    prefix: "",
    suffix: "+",
    label: "Years of Experience",
  },
];

export const REASONS = [
  {
    title: "Expertise That Makes Complexity Easier.",
    body: "Our experience spans tax, accounting, payroll, audit, business formation and compliance. We apply that breadth not simply to complete a task, but to understand the context in which the task matters.",
  },
  {
    title: "Compliance With Commercial Perspective",
    body: "Regulatory compliance is fundamental. But good professional advice should also recognise the commercial realities behind the numbers—cash flow, growth, structure, operations and long-term objectives.",
  },
  {
    title: "A Broader View of Tax",
    body: "We look beyond the immediate filing. Whether the matter involves an LLC, C Corp, S Corp, Partnership, Form 1040, Form 1120, Form 1120S or Form 1065, we consider the wider implications of the position.",
  },
  {
    title: "Built Around the Client",
    body: "No two businesses carry the same structure, priorities or obligations. Our approach is therefore deliberately considered—shaped around the circumstances, requirements and objectives of each engagement.",
  },
];

export const PROCESS = [
  {
    title: "Talk to Us",
    body: "Share your situation, entity type and the filings or notices in front of you.",
  },
  {
    title: "Scope and Quote",
    body: "We confirm what the work involves, who it affects and what it will cost before anything begins.",
  },
  {
    title: "We Do the Work",
    body: "Preparation, review and filing handled with the wider tax and accounting picture in mind.",
  },
  {
    title: "Stay Compliant",
    body: "Year-round support for deadlines, notices and the decisions that follow.",
  },
];

/** Home page contact section, beside the enquiry form. */
export const HOME_CONTACT = {
  heading: "Let’s Talk About",
  headingAccent: "What Comes Next.",
  intro:
    "Whether you’re an individual, entrepreneur or growing business, we’re here to help you stay compliant and confident. Share a few details and our team will get back to you shortly.",
  replyNote: "We typically reply within 24 hours",
};

export const FAQ_INTRO =
  "Find quick answers to common questions about our U.S. tax services, process, pricing and more.";

export const FAQS = [
  {
    q: "How Much Does It Cost?",
    a: "Fees depend on entity type, the number of filings and the scope of work. Audits start from $5,000. Every other engagement is quoted after a short conversation.",
  },
  {
    q: "Who Do You Work With?",
    a: "U.S. individuals, entrepreneurs and businesses—from a first Form 1040 to C Corps, S Corps and partnerships with payroll and cross-border reporting.",
  },
  {
    q: "I Have Received an IRS Notice. What Now?",
    a: "Send it to us before you respond. We review what is being requested, why it was raised and prepare a structured response with the supporting documentation.",
  },
  {
    q: "How Do I Share My Documents?",
    a: "Securely, through our client portal, after we confirm exactly which records are needed for your engagement.",
  },
  {
    q: "When Should I Start?",
    a: "Earlier is better. Structure, bookkeeping and payroll decisions made before year end shape the filing that follows.",
  },
];

export type Insight = {
  slug: string;
  tag: "Tax" | "Compliance" | "Accounting";
  /** ISO date, shown as e.g. "Oct 15, 2026". */
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  takeaways: string[];
  /** Closing call to action; links to the named service page, or the contact form when absent. */
  cta: { label: string; serviceSlug?: string };
};

export const INSIGHTS: Insight[] = [
  {
    slug: "key-us-tax-changes-2026",
    tag: "Tax",
    date: "2026-10-15",
    title: "Key U.S. Tax Changes for 2026 and What They Mean for You",
    excerpt:
      "A practical overview of important tax updates and how individuals and businesses can prepare.",
    body: [
      "Stay informed about U.S. tax developments that may affect your personal finances or business operations. Understanding changes to tax rules, deductions, credits, and filing requirements can help you prepare for tax season and make informed financial decisions.",
      "Our tax specialists help individuals and businesses understand their filing obligations, organize financial records, and identify applicable tax considerations.",
    ],
    takeaways: [
      "Review your tax planning strategy for the 2026 tax year.",
      "Keep income records and supporting documents organized.",
      "Evaluate applicable deductions and credits with a qualified tax professional.",
      "Plan ahead for filing deadlines and estimated tax obligations.",
    ],
    cta: { label: "Plan Your Taxes With WorthPrime", serviceSlug: "us-tax-services" },
  },
  {
    slug: "strengthening-compliance-changing-regulatory-landscape",
    tag: "Compliance",
    date: "2026-10-08",
    title: "Strengthening Compliance in a Changing Regulatory Landscape",
    excerpt: "Insights on evolving IRS requirements and best practices for maintaining compliance.",
    body: [
      "Tax and regulatory compliance requires careful documentation, timely reporting, and an understanding of applicable requirements. Businesses operating across jurisdictions may face additional responsibilities involving financial reporting, tax filings, and regulatory disclosures.",
      "A structured compliance process helps reduce errors, improve recordkeeping, and prepare organizations for questions from regulatory authorities.",
    ],
    takeaways: [
      "Maintain accurate financial and business records.",
      "Review filing obligations regularly.",
      "Identify reporting requirements relevant to your business structure.",
      "Seek professional guidance when regulations or circumstances change.",
    ],
    cta: { label: "Strengthen Your Compliance Process" },
  },
  {
    slug: "year-end-accounting-checklist-us-businesses",
    tag: "Accounting",
    date: "2026-10-01",
    title: "Year-End Accounting Checklist for U.S. Businesses",
    excerpt: "Key steps to close the year, stay compliant and start the next year with confidence.",
    body: [
      "Year-end accounting is an opportunity to review financial performance, reconcile accounts, and prepare for the next reporting period. Completing these tasks early can help businesses identify discrepancies and organize the documentation needed for tax preparation.",
      "A consistent closing process also gives business owners a clearer picture of cash flow, expenses, and financial obligations.",
    ],
    takeaways: [
      "Reconcile bank and credit card statements.",
      "Review outstanding invoices and accounts payable.",
      "Verify payroll records and related tax documentation.",
      "Organize receipts, expense records, and supporting documents.",
      "Review financial statements before closing the books.",
    ],
    cta: { label: "Prepare for Year-End With WorthPrime", serviceSlug: "accounting-bookkeeping" },
  },
];

export function getInsight(slug: string) {
  return INSIGHTS.find((a) => a.slug === slug);
}

export function formatInsightDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const FOUNDERS = [
  {
    name: "Abuzer Ahmed Siddiqui",
    title: "Co-Founder",
    credential: "Qualified Company Secretary (ICSI) · 15+ years · PwC and Deloitte",
    summary:
      "Brings extensive experience across corporate advisory, compliance and business structuring, with a strong focus on client-centric solutions.",
    bio: [
      "A Qualified Company Secretary from ICSI, Abuzer brings more than 15 years of multifaceted experience across accounting, taxation, payroll, due diligence, legal and compliance services, with professional exposure at PwC and Deloitte across the U.S., UAE and India. His expertise extends across U.S. Corporate Tax, U.S. Payroll, Middle East Corporate Tax and VAT, alongside the incorporation and dissolution of businesses across these jurisdictions.",
      "His experience has shaped a leadership perspective grounded in strategic thinking, adaptability and decisive execution. Having led pilot projects and worked with teams exceeding 100 professionals, he has developed a distinctive understanding of building operations from the ground up, refining processes and scaling them with purpose.",
      "His entrepreneurial journey found its defining expression in the co-founding of WorthPrime Tax in 2020—an endeavour shaped by years of professional insight and a conviction that financial and compliance services should be more connected, accessible and commercially relevant. Today, he brings that vision to the firm through an approach defined by intellectual curiosity, composure and a steadfast commitment to creating meaningful value for businesses and individuals.",
    ],
  },
  {
    name: "Zafir",
    title: "Co-Founder",
    credential: "Certified Public Accountant · 15 years · PwC and PepsiCo",
    summary:
      "Combines deep expertise in audit, accounting, financial planning and tax, with an entrepreneurial perspective to help clients grow with confidence.",
    bio: [
      "A Certified Public Accountant with 15 years of experience across audit, accounting, financial planning and tax, Zafir brings a distinctive blend of institutional discipline and entrepreneurial perspective to WorthPrime Tax. His professional journey includes management roles with global organisations such as PwC and PepsiCo, where he gained extensive experience across financial strategy, reporting and regulatory compliance.",
      "His transition from global corporate environments to entrepreneurship was driven by a desire to translate that experience into practical, commercially relevant financial guidance. This journey culminated in the co-founding of WorthPrime Tax in 2020, establishing a professional practice shaped by both corporate perspective and entrepreneurial agility.",
      "Today, he draws upon a wealth of institutional experience while retaining the agility and entrepreneurial conviction of a growing firm—delivering thoughtful, high-quality financial solutions and advisory services shaped around the evolving needs of businesses and individuals.",
    ],
  },
];

export type ClientReview = {
  name: string;
  /** Star rating exactly as shown on Google (1–5). */
  rating: number;
  /** Review text copied verbatim from Google; omitted for star-only ratings. */
  text?: string;
};

/*
 * Home page "What clients say" section. Only verified data goes here: reviews copied verbatim
 * from the Google Business Profile, the profile's own rating and count, the client-supplied
 * video, and credentials the client has confirmed. Anything left null or empty renders as a
 * clearly marked placeholder instead.
 */
export const CLIENT_EXPERIENCE = {
  label: "Client Experience",
  heading: "What Clients",
  headingMuted: "Say.",
  google: {
    title: "Google Reviews",
    subtitle: "Real Feedback From Our Clients",
    // From the WorthPrime Tax Google Business Profile (Victory Plaza, Hyderabad), checked
    // 21 Oct 2026. Update these and `reviews` whenever the profile changes.
    rating: 5.0 as number | null,
    reviewCount: 4 as number | null,
    // Opens the business's reviews panel on Google (checked: redirects to its Google listing).
    reviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJu7DvWxWXyzsRebXJXP4isaI",
    writeReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJu7DvWxWXyzsRebXJXP4isaI",
    ratingPlaceholder: "[Rating and review count from Google, client to supply]",
  },
  // Copied exactly as published on Google. A fourth 5-star review exists but was not visible
  // in Google's public view; add it here once its author and text can be read.
  reviews: [
    { name: "Rkives Worthy", rating: 5, text: "Very reliable and reasonable compliance services." },
    { name: "Nazrul", rating: 5 },
    { name: "MOHI", rating: 5 },
  ] as ClientReview[],
  // Placeholder cards shown while `reviews` is empty, so the carousel layout can be reviewed.
  reviewPlaceholders: 3,
  video: {
    title: "One-Minute Video Testimonial",
    body: "Hear directly from one of our clients about their experience working with WorthPrime Tax.",
    src: null as string | null, // [video file or URL, client to supply]
    pendingNote: "[Video, client to supply]",
  },
};

export type Certification = {
  /** Key of the badge image in the home page's logo map; null shows a monogram. */
  logo: "irs" | "aicpa" | null;
  monogram: string;
  issuer: string;
  name: string;
  status: string;
  /** Flip to true only once the client has confirmed the credential. */
  confirmed: boolean;
};

export const CERTIFICATIONS: Certification[] = [
  {
    logo: null,
    monogram: "QB",
    issuer: "Intuit",
    name: "QuickBooks Certified ProAdvisor",
    status: "Certified",
    confirmed: false,
  },
  {
    logo: null,
    monogram: "X",
    issuer: "Xero",
    name: "Certified Advisor",
    status: "Certified",
    confirmed: false,
  },
  {
    logo: "irs",
    monogram: "IRS",
    issuer: "IRS",
    name: "Authorized E-File Provider",
    status: "Authorized",
    confirmed: false,
  },
  {
    logo: "aicpa",
    monogram: "AICPA",
    issuer: "AICPA",
    name: "Member Firm",
    status: "Member",
    confirmed: false,
  },
];

/** Home page "Starting from, before scope." pricing section. */
export const HOME_PRICING = {
  label: "Pricing",
  heading: "Starting From,",
  headingMuted: "Before Scope.",
  intro:
    "Indicative starting prices to help you plan. Final pricing may vary depending on your specific requirements and scope of work.",
  cta: "See the Full Price Chart",
  priceLabel: "Starting From",
  /** Shown for services whose price is not confirmed yet. */
  pendingPrice: "Price TBC",
};

export const CONTACT_PAGE = {
  title: "Contact WorthPrime Tax | Talk to Our Tax Team",
  description:
    "Call, email or WhatsApp WorthPrime Tax, or send an enquiry. Offices in Glastonbury (USA), Dubai (UAE) and Hyderabad (India).",
  label: "Contact",
  heading: "From Setup to Success,",
  headingMuted: "We’re With You.",
  intro:
    "Questions to resolve. Decisions to make. We’re here to help—connect with us, we’re just a click away.",
  cta: "Talk to WorthPrime Tax",
  highlights: [
    { title: "Quick Response", text: "We typically reply within 24 hours" },
    { title: "Trusted Experts", text: "U.S. Tax & Compliance Specialists" },
    { title: "Global Support", text: "Serving clients worldwide" },
  ],
  detailsHeading: "Contact Details",
  detailsIntro: "Reach out to our offices or connect with us directly.",
};

export const PRICING_PAGE = {
  title: "Pricing | WorthPrime Tax",
  description:
    "Starting-from prices for WorthPrime Tax's U.S. tax, accounting, payroll, audit and compliance services. Final fees depend on scope.",
  label: "Pricing",
  heading: "Transparent Pricing.",
  headingMuted: "Trusted Expertise.",
  intro:
    "Every engagement is quoted after a short conversation about your entity, filings and the work involved. The chart below shows where each service starts.",
  highlights: [
    { title: "Clear & Transparent", text: "No Hidden Fees" },
    { title: "Experienced Team", text: "U.S. Tax & Compliance Specialists" },
    { title: "Nationwide Support", text: "Serving Clients Across the U.S." },
  ],
  chartNote:
    "Audits are available to clients across U.S. states. Final fees depend on the complexity and scope of each service.",
};

export const INSIGHTS_PAGE = {
  title: "Insights | WorthPrime Tax",
  description:
    "Articles and updates from WorthPrime Tax on U.S. tax, accounting and compliance for individuals and businesses.",
  label: "Insights",
  heading: "Perspective on",
  headingMuted: "What Comes Next.",
  intro:
    "Practical insights on U.S. tax, accounting and compliance—what is changing, what it means and what to do about it.",
  feedNote: "[These will later be fed from LinkedIn posts]",
  latestHeading: "Latest Articles",
  latestIntro:
    "Stay informed with the latest insights on U.S. tax, accounting and compliance to help you make confident decisions.",
  linkedinHeading: "Get New Insights on LinkedIn",
  linkedinText:
    "Follow WorthPrime Tax on LinkedIn for practical insights on U.S. taxation, accounting, business compliance, and financial planning.",
  linkedinCta: "Follow WorthPrime Tax",
  disclaimer:
    "This content is for general informational purposes only and does not constitute tax, legal, or accounting advice. Tax rules and filing requirements depend on individual circumstances and applicable law. Consult a qualified professional regarding your situation.",
};

/** Large closing CTA band, shown near the foot of every page. */
export const CTA_BAND = {
  label: "From Setup to Success, We're With You",
  heading: "Make Your Next Financial Decision With Confidence.",
  intro: "Tax guidance, business support, and financial clarity—built around you.",
  primary: "Talk to a Tax Expert",
  secondary: "Explore Our Services",
  points: [
    { title: "Trusted", text: "Tax Guidance" },
    { title: "End-to-End", text: "Support" },
    { title: "Personalized", text: "for Individuals & Businesses" },
  ],
};

/** Smaller navy banner (ConsultationBanner); no page shows it now that every page uses CTA_BAND. */
export const CTA_BANNER = {
  label: "From Setup to Success, We're With You",
  heading: "Whatever the Next Financial Decision Looks Like,",
  headingAccent: "Make It With Perspective.",
  button: "Talk to Our Experts",
  caption: "Get a customized quote based on your needs.",
};

// Payment details are copied exactly from the client's current payment section. Do not edit
// without the client's confirmation.
export const PAYMENT_PAGE = {
  title: "Payment Methods | WorthPrime Tax",
  description: "Pay WorthPrime Tax by Zelle or PayPal. Cards accepted, no PayPal account needed.",
  // Page copy below follows the client's payment page design (2026-10-23).
  label: "Secure & Convenient",
  heading: "Pay Us",
  headingAccent: "Through",
  or: "OR",
  intro: "Choose the payment method that works best for you.",
  features: [
    { title: "Secure Transactions", text: "Your payment information is safe with us." },
    { title: "Multiple Payment Options", text: "Choose the method that suits you." },
    { title: "Need Help?", text: "Contact our support team for any payment related questions." },
  ],
  zelle: {
    label: "Zelle ID:",
    id: "helpdesk@worthprimetax.com",
    qrAlt:
      "Zelle QR code for WorthPrime Tax, Legal and Compliance Services. Scan with your banking app to send money with Zelle.",
  },
  paypal: {
    alt: "Secure payments by PayPal. Visa, Mastercard, Discover and American Express accepted. No PayPal account needed.",
    newTab: "(opens PayPal in a new tab)",
    // Supplied by the client on 2026-10-23. It carries session-style parameters
    // (flowlogging_id, mfid); [NEED: confirm with client this checkout link stays valid].
    href: "https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f271965d6dfee&mfid=1792731901054_f271965d6dfee#/checkout/openButton",
  },
};

export type LegalPage = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

/** Privacy Policy page. [placeholder: client to supply the final, legally reviewed text] */
export const PRIVACY_PAGE: LegalPage = {
  title: "Privacy Policy | WorthPrime Tax",
  description: "How WorthPrime Tax collects, uses and protects the information you share with us.",
  heading: "Privacy Policy",
  intro:
    "Your privacy matters to us. This policy explains what information we collect, how we use it and the choices you have.",
  updated: "[date TBC]",
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "We collect the details you choose to share with us, such as your name, email address, phone number and the information you provide about your tax or business needs when you contact us or use our services.",
        "We may also collect basic technical information when you visit this website, such as your browser type and the pages you view.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "We use your information to respond to enquiries, provide and improve our services, meet our legal and regulatory obligations, and keep you informed about matters relevant to your engagement with us.",
      ],
    },
    {
      heading: "How We Protect Your Information",
      body: [
        "We apply reasonable administrative, technical and physical safeguards to protect your information against unauthorised access, loss or misuse.",
      ],
    },
    {
      heading: "Sharing Your Information",
      body: [
        "We do not sell your personal information. We share it only with service providers who help us deliver our services, or where the law requires us to do so.",
      ],
    },
    {
      heading: "Your Choices",
      body: [
        "You may ask us to access, correct or delete the personal information we hold about you, subject to our legal record-keeping obligations.",
      ],
    },
    {
      heading: "Contact Us",
      body: [
        "If you have questions about this policy, please contact us at helpdesk@worthprimetax.com.",
      ],
    },
  ],
};

/** Terms of Use page. [placeholder: client to supply the final, legally reviewed text] */
export const TERMS_PAGE: LegalPage = {
  title: "Terms of Use | WorthPrime Tax",
  description: "The terms that apply when you use the WorthPrime Tax website.",
  heading: "Terms of Use",
  intro:
    "These terms apply to your use of the WorthPrime Tax website. By using the site, you agree to them.",
  updated: "[date TBC]",
  sections: [
    {
      heading: "Use of This Website",
      body: [
        "You may use this website for lawful purposes only. You agree not to misuse the site or interfere with its normal operation.",
      ],
    },
    {
      heading: "No Professional Advice",
      body: [
        "The content on this website is for general information only and does not constitute tax, legal or financial advice. A professional relationship is formed only once an engagement has been agreed in writing.",
      ],
    },
    {
      heading: "Prices and Services",
      body: [
        "Prices shown on this website are starting prices. Final fees depend on the complexity and scope of each service and are confirmed before work begins.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "All content on this website, including text, graphics and logos, belongs to WorthPrime Tax unless stated otherwise and may not be reused without permission.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "WorthPrime Tax is not liable for any loss arising from reliance on the general information on this website.",
      ],
    },
    {
      heading: "Changes to These Terms",
      body: [
        "We may update these terms from time to time. The latest version will always be available on this page.",
      ],
    },
  ],
};

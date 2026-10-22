import { HOW_THE_WORK_MOVES, SERVICES, type Service } from "./services";

/*
 * Copy for each service's detail page, from the client's "worthprime changes" document.
 * Card-level text (name, tagline, summary, capabilities) stays in services.ts.
 */
export type ServicePage = {
  /** Hero eyebrow shown after the service number, e.g. "Individuals & Businesses". */
  label: string;
  heading: string;
  tagline: string;
  intro: string;
  start: { heading: string; body: string };
  overview: { heading: string; paragraphs: string[] };
  included: { heading: string; intro: string; groups: Array<{ title: string; items: string[] }> };
  whoFor: { heading: string; intro: string; audiences: Array<{ title: string; body: string }> };
  /** One description per HOW_THE_WORK_MOVES step. */
  process: { heading: string; steps: [string, string, string] };
  related: { heading: string; intro: string; items: Array<{ slug: string; body: string }> };
  closing: string;
};

export const SERVICE_PAGE_CLOSING = {
  label: "From setup to success, we're with you",
  heading: "Whatever Your Next Financial Decision, Make It With Perspective.",
};

const SERVICE_PAGES: Record<string, ServicePage> = {
  "us-tax-services": {
    label: "Individuals & Businesses",
    heading: "U.S. Tax Preparation & Filing Services",
    tagline: "Tax obligations managed with precision.",
    intro:
      "From individual income tax returns to complex business tax filings, WorthPrime Tax helps individuals, entrepreneurs and businesses navigate U.S. tax requirements with accuracy, clarity and confidence.",
    start: {
      heading: "Bring greater precision to your tax position.",
      body: "Get professional support for tax preparation, filing, planning and IRS-related matters.",
    },
    overview: {
      heading: "U.S. Tax Compliance, With the Bigger Picture in Mind.",
      paragraphs: [
        "Accurate tax filing is about more than meeting deadlines. It requires understanding your financial circumstances, applying the relevant tax rules and identifying legitimate opportunities while maintaining compliance.",
        "WorthPrime Tax provides U.S. tax preparation, filing and planning support for individuals, corporations, partnerships and eligible nonprofit organisations. Our approach considers each filing alongside the wider financial and reporting picture.",
      ],
    },
    included: {
      heading: "Tax Services for Individuals, Businesses and Organisations.",
      intro: "Our U.S. tax services cover a range of federal filing and compliance requirements.",
      groups: [
        {
          title: "Individual Tax Services",
          items: [
            "Form 1040 — U.S. Individual Income Tax Returns",
            "Individual income tax planning",
            "Tax return preparation and filing",
          ],
        },
        {
          title: "Business Tax Services",
          items: [
            "Form 1120 — C Corporation Tax Returns",
            "Form 1120-S — S Corporation Tax Returns",
            "Form 1065 — Partnership Tax Returns",
            "U.S. business tax compliance",
          ],
        },
        {
          title: "Nonprofit Tax Filing",
          items: [
            "Form 990, Form 990-EZ and Form 990-N — Applicable tax-exempt organisation reporting",
          ],
        },
        {
          title: "Additional Tax & IRS Support",
          items: [
            "Amended U.S. tax returns",
            "IRS correspondence and notice resolution",
            "IRS audit assistance",
          ],
        },
      ],
    },
    whoFor: {
      heading: "U.S. Tax Support for Individuals and Businesses.",
      intro:
        "Whether you're filing an individual return or managing the tax responsibilities of an established business, WorthPrime Tax helps you understand and address the requirements that apply.",
      audiences: [
        {
          title: "Individuals & Taxpayers",
          body: "Individuals with U.S. income tax filing obligations who need assistance with accurate preparation, reporting and tax planning.",
        },
        {
          title: "Business Owners & Corporations",
          body: "C Corporations, S Corporations and partnerships seeking tax preparation, compliance and filing support.",
        },
        {
          title: "Tax-Exempt Organisations",
          body: "Eligible nonprofit organisations that must meet applicable IRS annual information reporting requirements.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Tax Review to Filing.",
      steps: [
        "We review your financial information, filing status and applicable U.S. tax obligations to establish what is required.",
        "Tax returns and supporting schedules are prepared and reviewed for accuracy, completeness and relevant reporting requirements.",
        "Applicable returns are filed, relevant documentation is organised, and follow-up matters are addressed within the agreed service scope.",
      ],
    },
    related: {
      heading: "Financial Support Beyond Tax Filing.",
      intro:
        "Tax compliance works best when your business structure, accounting records and payroll responsibilities are considered together.",
      items: [
        {
          slug: "business-formation-entity-structuring",
          body: "Choose a business structure with taxation, liability and long-term compliance in mind.",
        },
        {
          slug: "accounting-bookkeeping",
          body: "Maintain organised, accurate and tax-ready financial records.",
        },
        {
          slug: "us-payroll-services",
          body: "Manage payroll processing, payroll taxes and employee reporting requirements.",
        },
      ],
    },
    closing: "Get support for your U.S. tax filing and compliance requirements.",
  },

  "business-formation-entity-structuring": {
    label: "Businesses",
    heading: "Business Formation & Entity Structuring",
    tagline: "The right structure creates room to grow.",
    intro:
      "Starting a business in the U.S. begins with choosing the right legal and tax structure. WorthPrime Tax helps entrepreneurs and business owners navigate U.S. company formation, LLC registration, corporation setup and entity restructuring with confidence.",
    start: {
      heading: "Build the right structure from the outset.",
      body: "Choose a business entity with taxation, ownership, compliance and future growth in mind.",
    },
    overview: {
      heading: "The Right Business Structure Builds a Stronger Foundation.",
      paragraphs: [
        "Your business structure affects more than registration. It influences taxation, ownership, liability, compliance requirements and how your company operates as it grows.",
        "WorthPrime Tax provides U.S. business formation and entity structuring support, helping entrepreneurs evaluate options such as a Single-Member LLC, C Corporation, eligible S Corporation tax elections and partnerships.",
        "From initial company registration to restructuring an existing entity, we help connect business decisions with the wider tax, accounting and compliance picture.",
      ],
    },
    included: {
      heading: "U.S. Business Formation Services, From Setup to Compliance.",
      intro:
        "Our business formation services support the key decisions and requirements involved in establishing or restructuring a U.S. business.",
      groups: [
        {
          title: "Company Formation & Registration",
          items: [
            "Single-Member LLC formation",
            "C Corporation formation",
            "S Corporation tax election assistance for eligible entities",
            "Partnership formation",
            "State business registration coordination",
          ],
        },
        {
          title: "Business Structure & Restructuring",
          items: [
            "Business entity structure evaluation",
            "Entity conversion and restructuring considerations",
            "LLC to S Corporation tax classification assistance",
            "LLC, corporation and partnership restructuring support, where applicable",
          ],
        },
        {
          title: "Registration & Ongoing Compliance",
          items: [
            "Employer Identification Number (EIN) assistance",
            "Business bank account assistance",
            "Business compliance requirements",
            "Ongoing entity compliance support",
          ],
        },
      ],
    },
    whoFor: {
      heading: "Business Formation Support for Founders and Growing Companies.",
      intro:
        "Whether you're launching a new business or reconsidering an existing structure, choosing the right entity can help establish a foundation for long-term operations.",
      audiences: [
        {
          title: "Entrepreneurs & New Business Owners",
          body: "Founders planning to register a U.S. company who need guidance on LLCs, corporations, partnerships and initial compliance requirements.",
        },
        {
          title: "Existing Businesses & Growing Companies",
          body: "Established business owners reviewing whether their current entity structure continues to support their tax position, ownership arrangements and growth plans.",
        },
        {
          title: "Businesses Considering Restructuring",
          body: "Companies exploring changes to their entity classification, ownership structure or business organisation as operational needs evolve.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Business Structure to Setup.",
      steps: [
        "We review your business goals, ownership arrangements and tax considerations to identify suitable entity options and applicable requirements.",
        "The proposed structure, formation requirements and relevant documentation are reviewed alongside tax, accounting and compliance considerations.",
        "Applicable registrations and documentation are coordinated, with guidance on relevant next steps and ongoing obligations within the agreed service scope.",
      ],
    },
    related: {
      heading: "Connected Services for Your Business.",
      intro:
        "Business formation is only the beginning. The right accounting, taxation and payroll support helps your company manage its responsibilities as operations grow.",
      items: [
        {
          slug: "us-tax-services",
          body: "Navigate business tax preparation, federal filing requirements and ongoing U.S. tax compliance.",
        },
        {
          slug: "accounting-bookkeeping",
          body: "Maintain accurate financial records and gain clearer visibility into your business performance.",
        },
        {
          slug: "us-payroll-services",
          body: "Support employee payroll, payroll tax calculations and applicable reporting requirements.",
        },
      ],
    },
    closing:
      "Starting a company or reconsidering your business structure? Get support to make your next move with clarity.",
  },

  "accounting-bookkeeping": {
    label: "Businesses",
    heading: "Accounting & Bookkeeping Services",
    tagline: "Better books. Better visibility. Better decisions.",
    intro:
      "Accurate financial records are the foundation of a well-managed business. WorthPrime Tax provides accounting and bookkeeping services to help U.S. businesses maintain organised records, monitor cash flow and make informed financial decisions.",
    start: {
      heading: "Put Your Financial Records to Work.",
      body: "From daily transactions to monthly reporting, keep your accounts accurate, current and ready for what's next.",
    },
    overview: {
      heading: "Better Financial Records. Clearer Business Decisions.",
      paragraphs: [
        "Good bookkeeping goes beyond recording income and expenses. It helps business owners understand cash flow, track financial performance, manage obligations and maintain reliable records for tax preparation.",
        "WorthPrime Tax provides accounting and bookkeeping support for businesses using QuickBooks, Odoo, Zoho Books and other accounting software or ERP systems. We help keep financial information organised, reconciled and ready for reporting.",
        "Our approach connects everyday bookkeeping with the wider financial picture, helping businesses improve visibility and maintain consistency as they grow.",
      ],
    },
    included: {
      heading: "Accounting & Bookkeeping Services That Keep Your Business on Track.",
      intro:
        "Our accounting services support accurate recordkeeping, financial reporting and ongoing business operations.",
      groups: [
        {
          title: "Bookkeeping & Financial Records",
          items: [
            "Bookkeeping and transaction recording",
            "QuickBooks setup and support",
            "Financial record maintenance",
            "Tax-ready bookkeeping",
          ],
        },
        {
          title: "Accounting & Reconciliation",
          items: ["Bank and account reconciliations", "Monthly accounting", "Year-end accounting"],
        },
        {
          title: "Financial Reporting & Business Visibility",
          items: ["Financial reporting", "Accounts payable and accounts receivable reporting"],
        },
      ],
    },
    whoFor: {
      heading: "Bookkeeping Support for Small and Growing Businesses.",
      intro:
        "Whether you manage your finances independently or need support keeping your records up to date, WorthPrime Tax helps businesses establish more reliable accounting practices.",
      audiences: [
        {
          title: "Small Businesses & Startups",
          body: "Business owners without a dedicated finance team who need support with transaction recording, account reconciliation and financial reporting.",
        },
        {
          title: "Growing Businesses",
          body: "Companies managing increasing transaction volumes and requiring consistent bookkeeping and clearer financial information.",
        },
        {
          title: "Businesses With Outdated Records",
          body: "Businesses whose books have fallen behind and need assistance organising transactions, reconciling accounts and bringing financial records up to date.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Financial Records to Clearer Reporting.",
      steps: [
        "We review your existing accounting records, business transactions, software and reporting requirements to understand your financial position and identify gaps.",
        "Transactions are recorded, accounts are reconciled and financial reports are prepared and reviewed for accuracy, consistency and completeness.",
        "Organised financial records and relevant reports are provided, with ongoing bookkeeping and accounting support based on your business requirements and agreed scope.",
      ],
    },
    related: {
      heading: "Connected Services for Your Business Finances.",
      intro:
        "Reliable accounting records support accurate tax filings, informed business decisions and better financial administration.",
      items: [
        {
          slug: "us-tax-services",
          body: "Support individual and business tax preparation, filing and compliance with accurate financial information.",
        },
        {
          slug: "business-formation-entity-structuring",
          body: "Establish or review your business structure with tax, accounting and compliance considerations in mind.",
        },
        {
          slug: "us-payroll-services",
          body: "Manage payroll processing, payroll tax calculations and applicable employee reporting requirements.",
        },
      ],
    },
    closing:
      "From keeping your books current to preparing for tax season, take the next step with reliable accounting support.",
  },

  "us-payroll-services": {
    label: "Businesses",
    heading: "U.S. Payroll Services",
    tagline: "Every pay cycle deserves precision.",
    intro:
      "Accurate payroll is essential to employee confidence and business compliance. WorthPrime Tax provides U.S. payroll processing, payroll tax reporting and administration support to help businesses manage employee payments, maintain reliable payroll records and meet applicable federal and state requirements.",
    start: {
      heading: "Bring Greater Control to Every Pay Cycle.",
      body: "From payroll calculations to year-end reporting, keep your payroll organised, accurate and compliant.",
    },
    overview: {
      heading: "Accurate Payroll. Confident Business Operations.",
      paragraphs: [
        "Managing payroll involves more than paying employees on time. It requires accurate wage calculations, appropriate tax withholding, organised records and compliance with federal and state reporting obligations.",
        "WorthPrime Tax provides U.S. payroll services for businesses managing employee compensation, payroll taxes and year-end reporting. Our support includes payroll processing, W-2 preparation and applicable 1099 reporting for independent contractors and gig workers.",
        "By connecting payroll administration with the wider accounting and tax picture, we help businesses maintain clearer records and better control over their ongoing payroll responsibilities.",
      ],
    },
    included: {
      heading: "Payroll Processing & Compliance Services for U.S. Businesses.",
      intro:
        "Our payroll services support accurate payroll calculations, regulatory reporting and ongoing payroll administration.",
      groups: [
        {
          title: "Payroll Processing & Employee Records",
          items: [
            "U.S. payroll processing",
            "Employee payroll records",
            "Ongoing payroll administration",
          ],
        },
        {
          title: "Payroll Tax & Compliance",
          items: [
            "Payroll tax calculations",
            "Federal and state payroll compliance",
            "Payroll reconciliations",
          ],
        },
        {
          title: "Year-End Payroll Reporting",
          items: [
            "Form W-2 preparation and reporting",
            "Year-end payroll reporting",
            "Applicable Form 1099-NEC reporting for independent contractors",
          ],
        },
      ],
    },
    whoFor: {
      heading: "Payroll Support for Employers and Growing Businesses.",
      intro:
        "Whether you're managing a small team or a growing workforce, reliable payroll processes help keep employee payments and reporting responsibilities on track.",
      audiences: [
        {
          title: "Small Businesses & Employers",
          body: "Businesses employing W-2 staff that need support with regular payroll processing, employee records and payroll tax calculations.",
        },
        {
          title: "Growing Companies",
          body: "Organisations managing expanding teams, additional payroll responsibilities and federal or state reporting requirements.",
        },
        {
          title: "Businesses Working With Independent Contractors",
          body: "Businesses paying consultants, freelancers or gig workers that need assistance with applicable nonemployee compensation reporting.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Payroll Setup to Reporting.",
      steps: [
        "We review your workforce structure, payroll schedules, employee records and applicable federal and state payroll requirements.",
        "Payroll calculations, employee records and relevant tax information are prepared and reviewed for accuracy and reporting requirements.",
        "Payroll processing and applicable reporting are completed, with records organised and follow-up administration supported within the agreed service scope.",
      ],
    },
    related: {
      heading: "Connected Financial Support Beyond Payroll.",
      intro:
        "Payroll works best when employee compensation, accounting records and tax responsibilities remain aligned.",
      items: [
        {
          slug: "us-tax-services",
          body: "Support business tax preparation, reporting and compliance with reliable financial and payroll information.",
        },
        {
          slug: "business-formation-entity-structuring",
          body: "Establish or review your business structure with taxation, employment and compliance considerations in mind.",
        },
        {
          slug: "accounting-bookkeeping",
          body: "Maintain accurate financial records, reconcile payroll-related transactions and support consistent financial reporting.",
        },
      ],
    },
    closing:
      "Keep your payroll responsibilities organised with professional support for processing, reporting and compliance.",
  },

  "audit-financial-assurance": {
    label: "Assurance",
    heading: "Audit & Financial Assurance Services",
    tagline: "Independent perspective. Stronger financial discipline.",
    intro:
      "Reliable financial information builds confidence among business owners, investors, lenders and stakeholders. WorthPrime Tax provides financial audit, review and assurance services to help businesses assess reporting accuracy, strengthen internal controls and address applicable regulatory requirements.",
    start: {
      heading: "Strengthen the Integrity of Your Financial Reporting.",
      body: "From independent financial statement audits to internal control assessments, gain clearer insight into your financial reporting and assurance requirements.",
    },
    overview: {
      heading: "Financial Assurance That Goes Beyond Compliance.",
      paragraphs: [
        "Financial audits and reviews serve a purpose beyond year-end reporting. They help businesses examine financial information, identify reporting concerns and provide stakeholders with a clearer understanding of financial performance and financial reporting processes.",
        "WorthPrime Tax offers audit and financial assurance services covering financial statements, reporting practices, internal controls and specialised assurance requirements.",
        "Our approach focuses on accurate reporting, applicable professional standards and meaningful financial insight—helping businesses address reporting obligations and strengthen financial discipline.",
      ],
    },
    included: {
      heading: "Audit, Financial Review & Internal Control Services.",
      intro:
        "Our audit and assurance offering covers financial reporting, internal controls and specialised assurance engagements.",
      groups: [
        {
          title: "Financial Statement Audit & Review",
          items: [
            "Independent financial statement audits",
            "Independent financial statement reviews",
            "Special audits involving non-U.S. GAAP reporting requirements",
          ],
        },
        {
          title: "Financial Reporting & Compilation",
          items: [
            "Financial statement compilation and preparation services",
            "Financial reporting and management reviews",
          ],
        },
        {
          title: "Internal Controls & IT Assurance",
          items: [
            "Internal control effectiveness reporting, including applicable SOX requirements",
            "IT assurance engagements, including SOC 2 Type 1 and Type 2 reporting",
          ],
        },
      ],
    },
    whoFor: {
      heading: "Financial Assurance for Businesses, Investors & Stakeholders.",
      intro:
        "Whether you're preparing for outside investment, meeting lender requirements or addressing formal reporting obligations, reliable financial information is essential.",
      audiences: [
        {
          title: "Companies Seeking Private Equity Investment",
          body: "Businesses preparing financial statements and supporting information for investor due diligence, potential acquisitions or funding discussions.",
        },
        {
          title: "Businesses Working With Lenders",
          body: "Companies requiring financial audits, independent reviews or other financial reporting support for lending arrangements and financing requirements.",
        },
        {
          title: "Organisations With Statutory Reporting Obligations",
          body: "Businesses subject to applicable audit, financial reporting or regulatory requirements.",
        },
        {
          title: "Companies Strengthening Internal Controls",
          body: "Organisations assessing financial reporting controls, IT controls or SOC 2 assurance requirements.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Assessment to Assurance.",
      steps: [
        "We review your reporting requirements, financial records, business structure and the objectives of the proposed audit or assurance engagement.",
        "Relevant financial information, supporting evidence and internal controls are examined through procedures appropriate to the agreed engagement and applicable professional standards.",
        "The applicable audit, review or assurance report is issued upon completion, with relevant findings and follow-up matters communicated within the agreed engagement scope.",
      ],
    },
    related: {
      heading: "Connected Financial Support Beyond Assurance.",
      intro:
        "Reliable accounting records, appropriate business structures and consistent tax compliance help support stronger financial reporting.",
      items: [
        {
          slug: "accounting-bookkeeping",
          body: "Maintain accurate financial records, account reconciliations and reporting information to support financial reviews and audit readiness.",
        },
        {
          slug: "us-tax-services",
          body: "Address applicable tax filing requirements and maintain consistency between financial reporting and tax compliance.",
        },
        {
          slug: "business-formation-entity-structuring",
          body: "Evaluate entity structures, reporting responsibilities and business compliance requirements as your organisation evolves.",
        },
      ],
    },
    closing:
      "Preparing for an audit, investor review or financial reporting requirement? Discuss your assurance needs with WorthPrime Tax.",
  },

  "irs-audit-notice-resolution": {
    label: "Compliance",
    heading: "IRS Audit & Notice Resolution Services",
    tagline: "When the IRS comes calling, clarity matters.",
    intro:
      "Received an IRS notice or facing a tax examination? WorthPrime Tax provides IRS notice review, audit assistance and tax resolution support for individuals and businesses. We help you understand the issue, prepare supporting documentation and take appropriate steps toward addressing your tax concerns.",
    start: {
      heading: "Turn an IRS Concern Into a Structured Response.",
      body: "From understanding an IRS letter to preparing documentation and responses, approach your tax matters with clarity and professional support.",
    },
    overview: {
      heading: "Understanding the Notice Is the First Step Toward Resolution.",
      paragraphs: [
        "An IRS notice doesn't always mean something is wrong with your tax return. It may relate to missing information, reporting discrepancies, proposed adjustments or additional documentation required by the IRS.",
        "WorthPrime Tax provides IRS audit assistance and notice resolution services for individuals and businesses. We help clients review IRS correspondence, understand the underlying tax issue and prepare appropriate responses based on their circumstances.",
        "Our approach combines tax analysis, accurate documentation and careful review to help you navigate IRS-related matters with greater confidence.",
      ],
    },
    included: {
      heading: "IRS Notice Review, Audit Assistance & Tax Resolution Support.",
      intro:
        "Our IRS services help individuals and businesses understand tax notices, address reporting concerns and prepare appropriate documentation.",
      groups: [
        {
          title: "IRS Notice Review & Tax Analysis",
          items: [
            "IRS notice and letter review",
            "Tax issue identification and analysis",
            "Review of reported income, deductions and discrepancies",
          ],
        },
        {
          title: "Audit Assistance & Documentation",
          items: [
            "IRS audit assistance",
            "Supporting documentation review and organisation",
            "IRS response preparation",
          ],
        },
        {
          title: "IRS Correspondence & Resolution Support",
          items: [
            "Assistance with IRS correspondence",
            "Tax resolution strategy and next-step guidance",
            "Amended tax return assistance, where applicable",
          ],
        },
      ],
    },
    whoFor: {
      heading: "IRS Support for Individuals and Businesses.",
      intro:
        "Whether you've received an unexpected IRS letter or your business is undergoing a tax examination, understanding the issue and the required response is essential.",
      audiences: [
        {
          title: "Individuals Receiving IRS Notices",
          body: "Taxpayers who have received IRS letters concerning their returns, reported income, tax balances or requests for additional information.",
        },
        {
          title: "Businesses Facing IRS Audits",
          body: "Corporations, partnerships and business owners requiring assistance with tax examinations, supporting records and audit-related correspondence.",
        },
        {
          title: "Taxpayers Addressing Reporting Discrepancies",
          body: "Individuals or businesses dealing with mismatched information, proposed tax adjustments or filing issues that require further review.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From IRS Notice to Structured Response.",
      steps: [
        "We review your IRS notice, relevant tax returns, supporting records and response deadlines to understand the issue and applicable requirements.",
        "The relevant tax information is analysed, supporting documentation is organised and an appropriate response is prepared based on the circumstances.",
        "The response and supporting information are prepared for submission or submitted where authorised, with assistance on relevant follow-up matters within the agreed service scope.",
      ],
    },
    related: {
      heading: "Tax Support Beyond the Immediate IRS Issue.",
      intro:
        "Resolving a tax concern may require reviewing earlier filings, maintaining accurate financial records or addressing broader compliance responsibilities.",
      items: [
        {
          slug: "us-tax-services",
          body: "Support individual and business tax preparation, compliance and reporting requirements.",
        },
        {
          slug: "amended-tax-returns",
          body: "Review and correct applicable previously filed tax returns when errors, omissions or new information require an amendment.",
        },
        {
          slug: "accounting-bookkeeping",
          body: "Maintain organised financial records and supporting documentation for tax reporting and compliance.",
        },
      ],
    },
    closing:
      "Received an IRS notice or need assistance with a tax examination? Take the next step with a clear understanding of your options.",
  },

  "fbar-fatca-boir-compliance": {
    label: "Compliance",
    heading: "FBAR, FATCA & BOIR Compliance Services",
    tagline: "International reporting demands precision.",
    intro:
      "Foreign bank accounts, international financial assets and certain ownership structures can create U.S. reporting obligations beyond a standard tax return. WorthPrime Tax helps individuals and businesses navigate FBAR filing, FATCA reporting and applicable beneficial ownership reporting requirements with clarity, accuracy and attention to compliance.",
    start: {
      heading: "Stay Ahead of Your International Reporting Obligations.",
      body: "Understand which foreign account, asset and ownership reporting requirements apply to you.",
    },
    overview: {
      heading: "International Tax Reporting, Made Clearer.",
      paragraphs: [
        "Holding financial accounts or assets outside the United States can create additional reporting responsibilities. FBAR and FATCA have separate filing requirements, reporting thresholds and disclosure rules.",
        "WorthPrime Tax provides foreign financial account reporting and international tax compliance support, helping taxpayers identify applicable obligations, organise financial information and prepare required disclosures.",
        "We also assist with assessing beneficial ownership reporting requirements for qualifying foreign entities registered to do business in the United States.",
        "Our approach connects international reporting with the wider U.S. tax and compliance picture, helping clients maintain accurate records and address applicable obligations.",
      ],
    },
    included: {
      heading: "Foreign Account, Asset & Ownership Reporting Services.",
      intro:
        "Our compliance services cover international financial disclosures and applicable beneficial ownership reporting requirements.",
      groups: [
        {
          title: "Foreign Bank Account Reporting (FBAR)",
          items: [
            "FBAR preparation and reporting — FinCEN Form 114",
            "Foreign financial account reporting",
            "Review of applicable account reporting requirements",
          ],
        },
        {
          title: "FATCA & Foreign Asset Reporting",
          items: [
            "FATCA-related reporting, including applicable IRS Form 8938",
            "Foreign financial asset reporting",
            "International information reporting",
          ],
        },
        {
          title: "Beneficial Ownership Reporting",
          items: [
            "Assessment of applicable beneficial ownership reporting requirements",
            "BOIR compliance assistance for qualifying foreign reporting companies",
            "Review of relevant ownership information and filing obligations",
          ],
        },
      ],
    },
    whoFor: {
      heading: "International Reporting Support for Individuals & Businesses.",
      intro:
        "Whether you hold accounts abroad or manage a foreign business with U.S. reporting responsibilities, understanding your obligations is essential.",
      audiences: [
        {
          title: "U.S. Taxpayers With Foreign Accounts",
          body: "U.S. citizens, residents and other U.S. persons who may have FBAR reporting obligations because of financial accounts held outside the United States.",
        },
        {
          title: "Individuals With Foreign Financial Assets",
          body: "Taxpayers holding specified foreign financial assets who may need to meet FATCA reporting requirements, including IRS Form 8938.",
        },
        {
          title: "Businesses With International Financial Interests",
          body: "Eligible businesses and other entities that need assistance understanding applicable foreign account, asset or international information reporting requirements.",
        },
        {
          title: "Qualifying Foreign Companies",
          body: "Foreign entities registered to do business in the United States that may remain subject to federal beneficial ownership reporting requirements.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Reporting Review to Compliance.",
      steps: [
        "We review your foreign financial accounts, reportable assets, ownership arrangements and applicable U.S. reporting thresholds to identify relevant obligations.",
        "Required financial information, account details and supporting documentation are organised and reviewed against applicable reporting requirements.",
        "Applicable reports and disclosures are prepared and filed where authorised, with relevant documentation and follow-up support provided within the agreed service scope.",
      ],
    },
    related: {
      heading: "Connected Support for Your Tax & Compliance Needs.",
      intro:
        "International reporting responsibilities often connect with broader tax filings, business structures and regulatory requirements.",
      items: [
        {
          slug: "us-tax-services",
          body: "Address applicable federal tax filings, international tax considerations and related reporting responsibilities.",
        },
        {
          slug: "business-formation-entity-structuring",
          body: "Review business ownership, entity structures and applicable formation or reporting requirements.",
        },
        {
          slug: "irs-audit-notice-resolution",
          body: "Get assistance understanding IRS correspondence, reviewing reporting concerns and preparing appropriate responses.",
        },
      ],
    },
    closing:
      "Managing foreign financial accounts, international assets or cross-border reporting responsibilities? Take the next step with professional compliance support.",
  },

  "itin-services": {
    // The document gives no eyebrow for this page; this is the service's audience from services.ts.
    label: "Individuals",
    heading: "ITIN Application & Renewal Services",
    tagline: "The right identification. The right filing path.",
    intro:
      "Need an Individual Taxpayer Identification Number (ITIN) for U.S. tax purposes? WorthPrime Tax assists eligible individuals with new ITIN applications, renewals, IRS Form W-7 preparation and supporting documentation to help them navigate the application process with greater clarity and accuracy.",
    start: {
      heading: "Get Your ITIN Requirements in Order.",
      body: "From understanding eligibility to preparing the required documentation, take the next step toward meeting your U.S. tax identification requirements.",
    },
    overview: {
      heading: "U.S. Tax Identification, Made Clearer.",
      paragraphs: [
        "An Individual Taxpayer Identification Number (ITIN) is issued by the Internal Revenue Service (IRS) to individuals who need a U.S. federal taxpayer identification number but are not eligible for a Social Security Number (SSN).",
        "WorthPrime Tax provides ITIN application and renewal support, helping eligible individuals understand requirements, prepare IRS Form W-7 and organise the documentation needed for their applications.",
        "Whether you're applying for an ITIN for the first time or renewing an expired number, our approach focuses on accurate information, complete documentation and alignment with applicable U.S. tax filing requirements.",
      ],
    },
    included: {
      heading: "ITIN Application, Renewal & Documentation Support.",
      intro:
        "Our ITIN services help eligible individuals address the identification and documentation requirements involved in obtaining or renewing an IRS Individual Taxpayer Identification Number.",
      groups: [
        {
          title: "New ITIN Applications",
          items: [
            "New ITIN application assistance",
            "IRS Form W-7 preparation and review",
            "ITIN eligibility and application requirement review",
          ],
        },
        {
          title: "ITIN Renewal Services",
          items: [
            "Expired ITIN renewal assistance",
            "Form W-7 renewal preparation",
            "Review of relevant renewal requirements",
          ],
        },
        {
          title: "Documentation & Tax Filing Support",
          items: [
            "Supporting identity and foreign-status documentation review",
            "ITIN application completeness review",
            "Tax return-related ITIN requirements",
            "Guidance on applicable application submission procedures",
          ],
        },
      ],
    },
    whoFor: {
      heading: "ITIN Support for Individuals With U.S. Tax Obligations.",
      intro:
        "If you have a valid U.S. federal tax purpose but are not eligible for a Social Security Number, an ITIN may be required to meet your reporting responsibilities.",
      audiences: [
        {
          title: "Nonresident Individuals With U.S. Tax Obligations",
          body: "Nonresident individuals who need a U.S. taxpayer identification number for an applicable federal tax return or other qualifying tax purpose.",
        },
        {
          title: "Individuals With U.S. Tax Filing Requirements",
          body: "Eligible resident or nonresident taxpayers who need an ITIN to report income or meet applicable federal tax obligations.",
        },
        {
          title: "Eligible Spouses & Dependents",
          body: "Spouses or dependents who require an ITIN for an allowable tax benefit or another qualifying federal tax purpose.",
        },
        {
          title: "Individuals Renewing an Expired ITIN",
          body: "Taxpayers whose ITIN has expired and who need to use it again on a U.S. federal tax return.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From ITIN Requirements to Application.",
      steps: [
        "We review your U.S. tax identification needs, Social Security Number eligibility and relevant filing requirements to determine the appropriate ITIN application or renewal process.",
        "IRS Form W-7 and applicable supporting documentation are prepared and reviewed for accuracy, completeness and consistency with the relevant tax requirements.",
        "The application package is organised for submission through an applicable IRS procedure, with guidance on relevant next steps and follow-up requirements within the agreed service scope.",
      ],
    },
    related: {
      heading: "Connected Support for Your U.S. Tax Requirements.",
      intro:
        "Obtaining an ITIN may form part of a wider tax filing or business-related financial responsibility.",
      items: [
        {
          slug: "us-tax-services",
          body: "Get assistance with individual U.S. tax return preparation, applicable filing requirements and tax compliance.",
        },
        {
          slug: "business-formation-entity-structuring",
          body: "Explore U.S. business formation and entity structuring support where your business activities create separate registration, identification or compliance requirements.",
        },
        {
          slug: "accounting-bookkeeping",
          body: "Maintain organised financial records and relevant reporting information to support your tax responsibilities.",
        },
      ],
    },
    closing:
      "Applying for an ITIN or renewing an expired number? Get support understanding the requirements and preparing your application.",
  },

  "amended-tax-returns": {
    label: "Individuals & Businesses",
    heading: "Amended Tax Return Services",
    tagline: "When accuracy calls for a second look.",
    intro:
      "Errors, omissions or newly discovered information can affect previously filed tax returns. WorthPrime Tax provides amended tax return preparation and filing assistance for individuals and businesses, helping correct reporting discrepancies, update financial information and address applicable IRS requirements.",
    start: {
      heading: "Correct the Record With Precision.",
      body: "From reviewing an original filing to preparing an amended return, get professional support to address tax reporting errors with clarity and confidence.",
    },
    overview: {
      heading: "Accurate Tax Reporting Doesn't End With the First Filing.",
      paragraphs: [
        "Tax returns don't always reflect the complete financial picture the first time around. Missing income, incorrect deductions, overlooked credits or newly received information may require changes to a previously filed return.",
        "WorthPrime Tax provides amended tax return services for individuals, corporations and partnerships. We review original filings, identify relevant discrepancies and assist with preparing amended returns under applicable IRS requirements.",
        "Our approach connects accurate reporting with supporting documentation and the wider tax position, helping taxpayers address corrections carefully and maintain consistent financial records.",
      ],
    },
    included: {
      heading: "Amended Tax Return Preparation & Filing Support.",
      intro:
        "Our services help individuals and businesses review previously filed returns, identify reporting errors and prepare appropriate amendments.",
      groups: [
        {
          title: "Tax Return Review & Error Identification",
          items: [
            "Review of previously filed tax returns",
            "Identification of errors, omissions and reporting discrepancies",
            "Review of income, deductions and tax credits",
          ],
        },
        {
          title: "Amended Tax Return Preparation",
          items: [
            "Form 1040-X — Amended Individual Income Tax Returns",
            "Form 1120-X and applicable amended Form 1120 filings — C Corporations",
            "Amended Form 1120-S filings — S Corporations",
            "Applicable amended partnership returns or Administrative Adjustment Requests (AARs), including Form 1065-X where appropriate",
          ],
        },
        {
          title: "Documentation & IRS Support",
          items: [
            "Updates to taxpayer information and supporting schedules",
            "Review of relevant supporting documentation",
            "Assistance with IRS correspondence related to amended returns",
          ],
        },
      ],
    },
    whoFor: {
      heading: "Amended Tax Filing Support for Individuals & Businesses.",
      intro:
        "Whether you've discovered a mistake in a previous filing or received new financial information after submission, understanding whether an amendment is required is an important first step.",
      audiences: [
        {
          title: "Individuals Correcting Tax Return Errors",
          body: "Taxpayers who need to correct previously reported income, filing status, deductions, credits or other relevant information.",
        },
        {
          title: "Businesses Reviewing Previous Filings",
          body: "Corporations and partnerships that identify reporting discrepancies, incorrect financial information or changes affecting previously filed business tax returns.",
        },
        {
          title: "Taxpayers With Newly Received Information",
          body: "Individuals and businesses that receive corrected tax documents, updated income statements or additional financial information after filing.",
        },
        {
          title: "Taxpayers Responding to IRS Correspondence",
          body: "Individuals or businesses reviewing IRS notices or proposed adjustments that may require further documentation, a response or an amended return.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Filing Review to Correction.",
      steps: [
        "We review your original tax return, supporting documents and the newly identified issue to determine whether an amendment is appropriate.",
        "The relevant corrections, amended forms and supporting schedules are prepared and reviewed for accuracy, completeness and applicable IRS requirements.",
        "The amended return is prepared for filing or submitted where authorised, with relevant documentation and follow-up guidance provided within the agreed service scope.",
      ],
    },
    related: {
      heading: "Connected Support for Your Tax & Financial Records.",
      intro:
        "Accurate amended filings often depend on reliable accounting information, proper business reporting and a clear understanding of applicable tax requirements.",
      items: [
        {
          slug: "us-tax-services",
          body: "Get assistance with individual and business tax preparation, federal filing requirements and ongoing tax compliance.",
        },
        {
          slug: "business-formation-entity-structuring",
          body: "Review business structures, tax classifications and reporting obligations that may influence your tax position.",
        },
        {
          slug: "accounting-bookkeeping",
          body: "Maintain accurate financial records, reconcile transactions and organise supporting information for tax filing and financial reporting.",
        },
      ],
    },
    closing:
      "Need to correct a previously filed tax return? Take the next step with a clear understanding of your reporting requirements.",
  },

  "legal-business-document-drafting": {
    label: "Businesses",
    heading: "Legal & Business Document Drafting",
    tagline: "Clear documents. Defined obligations. Stronger business relationships.",
    intro:
      "Well-structured agreements help businesses establish clear expectations, responsibilities and commercial terms. WorthPrime Tax supports business agreement drafting, commercial documentation and contract review requirements, helping organisations prepare and refine documents that reflect their business arrangements.",
    start: {
      heading: "Give Your Business Arrangements Greater Clarity.",
      body: "From business agreements to Memoranda of Understanding, bring structure and consistency to your commercial documentation.",
    },
    overview: {
      heading: "Clear Agreements. Stronger Business Foundations.",
      paragraphs: [
        "Business relationships work better when expectations are clearly documented. Well-prepared contracts and agreements help define responsibilities, clarify commercial terms and establish a shared understanding between parties.",
        "WorthPrime Tax assists businesses with the preparation, review and refinement of commercial documentation, including business agreements, contracts and Memoranda of Understanding (MoUs).",
        "Our approach focuses on clear language, organised documentation and practical business requirements, with legal review coordinated where required and within the agreed service scope.",
      ],
    },
    included: {
      heading: "Business Agreements, Contracts & Documentation Support.",
      intro:
        "Our document preparation services help businesses organise commercial terms, record important arrangements and review existing documentation.",
      groups: [
        {
          title: "Business Agreements & Contracts",
          items: [
            "Business agreement drafting support",
            "Commercial contract preparation",
            "Memoranda of Understanding (MoUs)",
          ],
        },
        {
          title: "Business Documentation",
          items: [
            "Business-related document preparation",
            "Organisation of commercial terms and responsibilities",
          ],
        },
        {
          title: "Contract Review & Refinement",
          items: [
            "Review of existing business agreements",
            "Document updates, revisions and refinement",
          ],
        },
      ],
    },
    whoFor: {
      heading: "Documentation Support for Businesses at Every Stage.",
      intro:
        "Whether you're formalising a new commercial relationship or updating an existing agreement, clear documentation helps everyone understand the intended arrangement.",
      audiences: [
        {
          title: "Startups & New Business Owners",
          body: "Entrepreneurs preparing business agreements and documentation for new commercial relationships or operating arrangements.",
        },
        {
          title: "Growing Businesses & Established Companies",
          body: "Organisations formalising supplier, vendor, customer or business partner arrangements through appropriate commercial documentation.",
        },
        {
          title: "Businesses Reviewing Existing Agreements",
          body: "Companies updating contracts, refining commercial terms or revisiting documents as business requirements change.",
        },
      ],
    },
    process: {
      heading: "Three Steps. From Business Requirements to Clear Documentation.",
      steps: [
        "We review the purpose of the agreement, the parties involved, commercial objectives and key responsibilities that need to be documented.",
        "The relevant agreement or business document is drafted or refined, with attention to clarity, consistency, commercial terms and the agreed requirements.",
        "The prepared document is shared for review and refinement, with relevant revisions and coordination of professional legal review where required.",
      ],
    },
    related: {
      heading: "Connected Support for Your Business Operations.",
      intro:
        "Clear documentation works alongside the right business structure, organised financial records and consistent tax compliance.",
      items: [
        {
          slug: "us-tax-services",
          body: "Understand applicable tax obligations and reporting requirements connected to your business activities.",
        },
        {
          slug: "business-formation-entity-structuring",
          body: "Establish or review your business structure with ownership, taxation and compliance considerations in mind.",
        },
        {
          slug: "accounting-bookkeeping",
          body: "Maintain organised financial records and documentation to support reporting and business administration.",
        },
      ],
    },
    closing:
      "Preparing a new business agreement or reviewing existing documentation? Take the next step with greater clarity around your commercial arrangements.",
  },
};

/** Page copy for a service; services without their own entry fall back to their card-level data. */
export function getServicePage(service: Service): ServicePage {
  const page = SERVICE_PAGES[service.slug];
  if (page) return page;
  const steps = HOW_THE_WORK_MOVES.map((s) => s.body);
  return {
    label: service.audience,
    heading: service.name,
    tagline: service.tagline,
    intro: service.summary,
    start: { heading: `${service.cta}.`, body: "" },
    overview: { heading: service.tagline, paragraphs: service.overview },
    included: {
      heading: service.capabilitiesLabel,
      intro: "",
      groups: [{ title: "", items: service.capabilities }],
    },
    whoFor: { heading: service.whoFor, intro: "", audiences: [] },
    process: { heading: "", steps: [steps[0] ?? "", steps[1] ?? "", steps[2] ?? ""] },
    related: {
      heading: "",
      intro: "",
      items: SERVICES.filter((s) => s.slug !== service.slug)
        .slice(0, 3)
        .map((s) => ({ slug: s.slug, body: s.summary })),
    },
    closing: "",
  };
}

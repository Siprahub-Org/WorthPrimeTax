import documentsImage from "@/assets/worthprime-documents-blue.jpg";
import advisersImage from "@/assets/worthprime-advisers-blue.jpg";
import pricingDeskImage from "@/assets/pricing-desk.jpg";

type Image = { src: string; alt: string; width: number; height: number };

/** Cover photo for each article, keyed by insight slug. */
export const INSIGHT_IMAGES: Record<string, Image> = {
  "key-us-tax-changes-2026": {
    src: documentsImage,
    alt: "Tax documents, a calculator and a pen on a desk",
    width: 1200,
    height: 896,
  },
  "strengthening-compliance-changing-regulatory-landscape": {
    src: advisersImage,
    alt: "Two advisers reviewing compliance documents together",
    width: 1200,
    height: 896,
  },
  "year-end-accounting-checklist-us-businesses": {
    src: pricingDeskImage,
    alt: "Calculator and financial statements prepared for year-end review",
    width: 1054,
    height: 436,
  },
};

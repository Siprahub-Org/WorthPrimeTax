import {
  Calculator,
  FilePen,
  FileSearch,
  FileText,
  IdCard,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Undo2,
  Users,
  type LucideIcon,
} from "lucide-react";

/** One icon per service, keyed by slug, for lists that show every service (e.g. the price table). */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "us-tax-services": FileText,
  "business-formation-entity-structuring": Landmark,
  "accounting-bookkeeping": Calculator,
  "us-payroll-services": Users,
  "audit-financial-assurance": TrendingUp,
  "irs-audit-notice-resolution": FileSearch,
  "fbar-fatca-boir-compliance": ShieldCheck,
  "itin-services": IdCard,
  "amended-tax-returns": Undo2,
  "legal-business-document-drafting": FilePen,
};

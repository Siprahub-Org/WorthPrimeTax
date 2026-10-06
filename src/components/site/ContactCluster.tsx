import { Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2a9.84 9.84 0 0 0-8.5 14.78L2 22l5.36-1.4A9.98 9.98 0 1 0 12.04 2Zm0 17.98a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.18.83.85-3.1-.2-.32a8.05 8.05 0 1 1 6.96 3.9Zm4.42-6.05c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.26 7.26 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46a.89.89 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const items = [
  {
    href: LINKS.whatsapp,
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    external: true,
    className: "border-whatsapp bg-card text-whatsapp",
  },
  { href: LINKS.phoneHref, label: "Call us", Icon: Phone, external: false, className: "" },
  { href: `mailto:${LINKS.email}`, label: "Email us", Icon: Mail, external: false, className: "" },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin, external: true, className: "" },
];

export function ContactCluster() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      {items.map(({ href, label, Icon, external, className }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className={cn(
            "grid size-11 place-items-center rounded-full border shadow-lg transition-transform hover:-translate-y-0.5",
            className || "border-navy-deep bg-navy-deep text-hero-foreground",
          )}
        >
          <Icon className="size-4.5" />
        </a>
      ))}
      {/* Optional — client to confirm Instagram */}
      <span
        title="Instagram [optional, client to supply]"
        className="grid size-11 place-items-center rounded-full border border-dashed border-border/70 text-muted-foreground/60"
      >
        <Instagram className="size-4.5" />
      </span>
    </div>
  );
}

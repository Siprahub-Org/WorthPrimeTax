import { MessageCircle, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { LINKS } from "@/data/site";

const items = [
  { href: LINKS.whatsapp, label: "WhatsApp", Icon: MessageCircle, external: true },
  { href: LINKS.phoneHref, label: "Call us", Icon: Phone, external: false },
  { href: `mailto:${LINKS.email}`, label: "Email us", Icon: Mail, external: false },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
];

export function ContactCluster() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      {items.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="grid size-11 place-items-center rounded-full border border-border bg-navy/90 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
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

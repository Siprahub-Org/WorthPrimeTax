import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { SERVICES } from "@/data/services";

const field =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-gold";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="surface-card flex h-full min-h-[320px] flex-col items-center justify-center p-8 text-center">
        <span className="grid size-12 place-items-center rounded-full bg-gold text-hero-foreground">
          <Check className="size-6" />
        </span>
        <h3 className="mt-4 text-2xl">Thank you</h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Fill the form, soon will get back to you. [Prototype only — no message is sent yet]
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm text-gold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 sm:p-7">
      <p className="label-slash">Get in touch</p>
      <h3 className="mt-3 text-2xl leading-tight">
        {compact ? "Request a quote" : "Fill the form, soon will get back to you"}
      </h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="sm:col-span-1">
          <span className="sr-only">Name</span>
          <input required name="name" placeholder="Name" className={field} />
        </label>
        <label className="sm:col-span-1">
          <span className="sr-only">Email</span>
          <input required type="email" name="email" placeholder="Email" className={field} />
        </label>
        <label className="sm:col-span-1">
          <span className="sr-only">Phone</span>
          <input name="phone" placeholder="Phone" className={field} />
        </label>
        <label className="sm:col-span-1">
          <span className="sr-only">Service needed</span>
          <select required name="service" defaultValue="" className={field}>
            <option value="" disabled>
              Service needed
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-navy">
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2">
          <span className="sr-only">Short message</span>
          <textarea
            name="message"
            rows={compact ? 2 : 4}
            placeholder="Short message"
            className={field}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-hero-foreground transition-transform hover:scale-[1.01]"
      >
        Request a quote
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Or call {""}
        <a href="tel:+19166231007" className="text-gold hover:underline">
          +1 (916) 623-1007
        </a>
      </p>
    </form>
  );
}

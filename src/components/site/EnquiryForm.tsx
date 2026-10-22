import { useId, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, ChevronDown, CircleAlert, Loader2, Phone } from "lucide-react";
import { SERVICES } from "@/data/services";
import { LINKS } from "@/data/site";
import {
  enquirySchema,
  submitEnquiry,
  type EnquiryField,
  type EnquiryInput,
  type EnquiryResult,
} from "@/lib/enquiry";
import { cn } from "@/lib/utils";

type Values = Required<EnquiryInput>;
type Errors = Partial<Record<EnquiryField, string>>;
type FailedResult = Extract<EnquiryResult, { ok: false }>["error"];

const EMPTY: Values = { name: "", email: "", phone: "", service: "", message: "", website: "" };
const FIELD_ORDER: EnquiryField[] = ["name", "email", "phone", "service", "message"];

const FAILURE_MESSAGES: Record<FailedResult, string> = {
  not_configured:
    "Online enquiries are not connected yet, so your message was not sent. Please call or email us and we will help straight away.",
  delivery_failed:
    "Something went wrong and your message was not sent. Please try again, or call or email us.",
};

const fieldClass =
  "w-full rounded-lg border border-input bg-card px-4 py-[0.9rem] text-base text-foreground placeholder:text-muted-foreground outline-none transition-[border-color,box-shadow] focus:border-primary focus:ring-2 focus:ring-primary/15 aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:ring-destructive/15";

function validate(values: Values): Errors {
  const result = enquirySchema.safeParse(values);
  if (result.success) return {};
  const errors: Errors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as EnquiryField | "website";
    if (key !== "website" && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}

/**
 * `compact` is the tighter layout used beside the contact page hero: smaller heading and
 * fields, equal columns, and no "call us" block because the page lists every channel below.
 */
export function EnquiryForm({
  headingLevel = 3,
  compact = false,
  submitLabel = "Request a quote",
}: {
  headingLevel?: 2 | 3;
  compact?: boolean;
  submitLabel?: string;
}) {
  const id = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [failure, setFailure] = useState<FailedResult>("delivery_failed");

  const Heading = headingLevel === 2 ? "h2" : "h3";
  const fieldId = (name: EnquiryField) => `${id}-${name}`;
  const errorId = (name: EnquiryField) => `${id}-${name}-error`;

  function update(name: keyof Values, value: string) {
    const next = { ...values, [name]: value };
    setValues(next);
    // After the first submit attempt, errors clear (or appear) as the visitor types.
    if (attempted) setErrors(validate(next));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setAttempted(true);
    const found = validate(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitEnquiry({ data: values });
      if (result.ok) {
        setStatus("success");
        return;
      }
      setFailure(result.error);
    } catch (error) {
      console.error("Enquiry submission failed.", error);
      setFailure("delivery_failed");
    }
    setStatus("error");
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setAttempted(false);
    setStatus("idle");
  }

  const card = cn(
    "@container relative rounded-[1.75rem] border border-brand-secondary/10 bg-card shadow-[0_30px_80px_-40px] shadow-primary/45",
    compact ? "px-6 py-6 sm:px-10 sm:py-7" : "p-[clamp(1.5rem,2.6vw,2.75rem)]",
  );
  const inputClass = cn(fieldClass, compact && "py-2 text-[0.95rem]");

  if (status === "success") {
    return (
      <div
        className={cn(card, "flex min-h-[420px] flex-col items-center justify-center text-center")}
        role="status"
      >
        <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-7" aria-hidden />
        </span>
        <Heading className="mt-5 font-serif text-3xl">Thank you.</Heading>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been sent. A member of our team will get back to you soon.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={submitting} className={card}>
      <div className="flex items-center gap-4">
        {!compact && <span className="h-0.5 w-10 rounded-full bg-brand-gold" aria-hidden />}
        <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase sm:text-sm">
          Get in touch
        </p>
      </div>
      <Heading
        className={cn(
          "font-serif leading-[1.08] font-bold",
          compact
            ? "mt-3 text-[clamp(1.6rem,7.6cqi,2.4rem)] leading-[1.02]"
            : "mt-5 text-[clamp(1.5rem,9.2cqi,2.95rem)]",
        )}
      >
        Fill the form,{" "}
        <span className="block font-semibold text-brand-gold italic">
          soon will get back to you.
        </span>
      </Heading>

      <div
        className={cn(
          "grid",
          compact
            ? "mt-5 gap-3 sm:grid-cols-2"
            : "mt-7 gap-x-[1.125rem] gap-y-5 sm:grid-cols-[1.08fr_1fr]",
        )}
      >
        <Field id={fieldId("name")} errorId={errorId("name")} label="Name" error={errors.name}>
          <input
            id={fieldId("name")}
            name="name"
            autoComplete="name"
            placeholder="Name *"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={inputClass}
          />
        </Field>
        <Field id={fieldId("email")} errorId={errorId("email")} label="Email" error={errors.email}>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="Email *"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={inputClass}
          />
        </Field>
        <Field id={fieldId("phone")} errorId={errorId("phone")} label="Phone" error={errors.phone}>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Phone *"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={inputClass}
          />
        </Field>
        <Field
          id={fieldId("service")}
          errorId={errorId("service")}
          label="Service needed"
          error={errors.service}
        >
          <div className="relative">
            <select
              id={fieldId("service")}
              name="service"
              required
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={errors.service ? errorId("service") : undefined}
              className={cn(
                inputClass,
                "appearance-none pr-10",
                !values.service && "text-muted-foreground",
              )}
            >
              <option value="" disabled>
                Service needed *
              </option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug} className="text-foreground">
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-primary"
              aria-hidden
            />
          </div>
        </Field>
        <Field
          id={fieldId("message")}
          errorId={errorId("message")}
          label="Short message"
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id={fieldId("message")}
            name="message"
            rows={compact ? 3 : 4}
            placeholder="Short message *"
            required
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? errorId("message") : undefined}
            className={cn(inputClass, "resize-y", compact ? "min-h-[4.75rem]" : "min-h-[8.5rem]")}
          />
        </Field>
      </div>

      {/* Honeypot: kept off-screen and out of the tab order; people never fill it in. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground"
        >
          <CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
          <p>
            {FAILURE_MESSAGES[failure]}{" "}
            <a href={`mailto:${LINKS.email}`} className="font-semibold text-primary underline">
              {LINKS.email}
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 font-medium text-primary-foreground transition-[transform,opacity] enabled:hover:scale-[1.01] disabled:cursor-wait disabled:opacity-80",
          compact ? "mt-3 py-2.5 text-[1.0625rem]" : "py-4 text-base sm:text-lg",
        )}
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="size-4" aria-hidden />
          </>
        )}
      </button>

      {!compact && (
        <>
          <div className="my-6 flex items-center gap-6 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" aria-hidden />
            OR
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>

          <a
            href={LINKS.phoneHref}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-lg bg-tint px-4 py-4 text-center text-base text-foreground transition-colors hover:bg-brand-secondary/10 sm:text-lg"
          >
            <Phone className="size-4 text-primary" aria-hidden />
            <span>
              Call us directly at <strong className="text-primary">{LINKS.phone}</strong>
            </span>
          </a>
        </>
      )}
    </form>
  );
}

function Field({
  id,
  errorId,
  label,
  error,
  className,
  children,
}: {
  id: string;
  errorId: string;
  label: string;
  error?: string | undefined;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label} (required)
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

import { useId, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleAlert,
  Loader2,
  Mail,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";
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
  "w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-[border-color] focus:border-primary aria-[invalid=true]:border-destructive";

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
 * `compact` is the tighter layout used beside the contact page hero: smaller heading and fields,
 * labels above empty fields. The full layout (home page) adds example placeholders and icons.
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
    compact ? "px-6 py-6 sm:px-10 sm:py-7" : "p-[clamp(1.25rem,2vw,2rem)]",
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
      {/* The compact (contact page) form opens straight with its heading: one line once the card is
          wide enough, sized to the card so it never overflows. */}
      {!compact && (
        <div className="flex items-center gap-4">
          <span className="h-0.5 w-8 rounded-full bg-brand-secondary" aria-hidden />
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-primary uppercase">
            Get in touch
          </p>
        </div>
      )}
      {compact ? (
        <Heading className="font-serif text-[clamp(1.4rem,6.6cqi,2rem)] leading-[1.15] font-bold @sm:text-[5.6cqi] @sm:whitespace-nowrap">
          Fill the form, <span className="font-semibold italic">soon will get back to you.</span>
        </Heading>
      ) : (
        <>
          <Heading className="mt-3 font-serif text-[clamp(1.4rem,5.5cqi,1.9rem)] leading-[1.15] font-bold text-primary">
            Tell us how we can help.
          </Heading>
          <p className="mt-1.5 text-sm text-foreground/75">
            Fill out the form below and our team will get back to you soon.
          </p>
        </>
      )}

      <div
        className={cn(
          "grid",
          compact ? "mt-5 gap-3 sm:grid-cols-2" : "mt-5 gap-x-4 gap-y-3 sm:grid-cols-2",
        )}
      >
        <Field
          id={fieldId("name")}
          errorId={errorId("name")}
          label="Name"
          error={errors.name}
          showLabel
          icon={compact ? undefined : User}
        >
          <input
            id={fieldId("name")}
            name="name"
            autoComplete="name"
            placeholder={compact ? undefined : "John Doe"}
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={cn(inputClass, !compact && "pr-11")}
          />
        </Field>
        <Field
          id={fieldId("email")}
          errorId={errorId("email")}
          label="Email"
          error={errors.email}
          showLabel
          icon={compact ? undefined : Mail}
        >
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={compact ? undefined : "you@company.com"}
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={cn(inputClass, !compact && "pr-11")}
          />
        </Field>
        <Field
          id={fieldId("phone")}
          errorId={errorId("phone")}
          label="Phone"
          error={errors.phone}
          showLabel
          icon={compact ? undefined : Phone}
        >
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={compact ? undefined : "Your phone number"}
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={cn(inputClass, !compact && "pr-11")}
          />
        </Field>
        <Field
          id={fieldId("service")}
          errorId={errorId("service")}
          label="Service needed"
          error={errors.service}
          showLabel
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
                Select a service
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
          showLabel
          className="sm:col-span-2"
        >
          <textarea
            id={fieldId("message")}
            name="message"
            rows={3}
            placeholder={compact ? undefined : "Tell us a bit about your needs…"}
            required
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? errorId("message") : undefined}
            className={cn(inputClass, "resize-none", compact ? "min-h-[4.75rem]" : "min-h-[6rem]")}
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
          compact ? "mt-3 py-2.5 text-[1.0625rem]" : "py-3 text-sm font-semibold",
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
    </form>
  );
}

function Field({
  id,
  errorId,
  label,
  error,
  showLabel = false,
  icon: Icon,
  className,
  children,
}: {
  id: string;
  errorId: string;
  label: string;
  error?: string | undefined;
  /** Show the label above the field instead of keeping it for screen readers only. */
  showLabel?: boolean;
  /** Decorative icon drawn inside the right edge of the field. */
  icon?: LucideIcon;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      {showLabel ? (
        <label htmlFor={id} className="mb-1 block text-xs font-medium text-primary">
          {label} <span aria-hidden>*</span>
          <span className="sr-only">(required)</span>
        </label>
      ) : (
        <label htmlFor={id} className="sr-only">
          {label} (required)
        </label>
      )}
      {Icon ? (
        <div className="relative">
          {children}
          <Icon
            className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-primary/60"
            aria-hidden
          />
        </div>
      ) : (
        children
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

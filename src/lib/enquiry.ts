import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SERVICES } from "@/data/services";

const serviceSlugs = SERVICES.map((s) => s.slug) as [string, ...string[]];

/** Shared by the form (instant feedback) and the server function (the real check). */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Please keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(200, "Please keep your email under 200 characters."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .regex(/^\+?[\d\s().-]+$/, "Use digits, spaces and + ( ) - only.")
    .refine((v) => {
      const digits = v.replace(/\D/g, "").length;
      return digits >= 7 && digits <= 15;
    }, "Please enter a valid phone number."),
  service: z.enum(serviceSlugs, { errorMap: () => ({ message: "Please choose a service." }) }),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few words (at least 10 characters).")
    .max(2000, "Please keep your message under 2,000 characters."),
  // Honeypot: hidden from people, so anything typed here came from a bot.
  website: z.string().max(200).optional(),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type EnquiryField = Exclude<keyof EnquiryInput, "website">;

export type EnquiryResult =
  { ok: true } | { ok: false; error: "not_configured" | "delivery_failed" };

/*
 * Delivers an enquiry to the webhook in ENQUIRY_WEBHOOK_URL (for example a Zapier, Make or
 * Formspree endpoint, or the firm's CRM). Until that is set, enquiries are rejected with
 * "not_configured" so visitors are never told a message was sent when it was not.
 */
export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }): Promise<EnquiryResult> => {
    // Quietly accept bot submissions without delivering them.
    if (data.website) return { ok: true };

    const webhookUrl = process.env["ENQUIRY_WEBHOOK_URL"];
    if (!webhookUrl) {
      console.error("Enquiry not delivered: ENQUIRY_WEBHOOK_URL is not set.");
      return { ok: false, error: "not_configured" };
    }

    const service = SERVICES.find((s) => s.slug === data.service);
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: service?.name ?? data.service,
          message: data.message,
          submittedAt: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!response.ok) {
        console.error(`Enquiry webhook responded with HTTP ${response.status}.`);
        return { ok: false, error: "delivery_failed" };
      }
      return { ok: true };
    } catch (error) {
      console.error("Enquiry webhook request failed.", error);
      return { ok: false, error: "delivery_failed" };
    }
  });

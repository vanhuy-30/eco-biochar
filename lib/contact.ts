export type CustomerType = "farm" | "manufacturer" | "distributor" | "supplier" | "home" | "other";
export type InquiryType =
  "sample" | "specs" | "bulk" | "distribution" | "feedstock" | "product-chunk" | "product-powder" | "other";

export type InquiryForm = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  customerType: CustomerType | "";
  inquiryType: InquiryType | "";
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryForm, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9 .()-]{8,16}$/;

export type ValidationMessages = {
  fullName: string;
  emailRequired: string;
  emailInvalid: string;
  phone: string;
  customerType: string;
  inquiryType: string;
  message: string;
};

export function validateInquiry(form: InquiryForm, m: ValidationMessages): InquiryErrors {
  const errors: InquiryErrors = {};
  if (form.fullName.trim().length < 2) errors.fullName = m.fullName;
  if (!form.email.trim()) errors.email = m.emailRequired;
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = m.emailInvalid;
  if (form.phone.trim() && !PHONE_RE.test(form.phone.trim())) errors.phone = m.phone;
  if (!form.customerType) errors.customerType = m.customerType;
  if (!form.inquiryType) errors.inquiryType = m.inquiryType;
  if (form.message.trim().length < 10) errors.message = m.message;
  return errors;
}

export type SubmitResult = { mode: "sent" } | { mode: "demo" };

/**
 * Sends the inquiry to NEXT_PUBLIC_CONTACT_ENDPOINT (any JSON-accepting form
 * service or API route). Without an endpoint the site runs in demo mode and
 * nothing leaves the browser.
 */
export async function submitInquiry(form: InquiryForm): Promise<SubmitResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 700));
    return { mode: "demo" };
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error(`Inquiry endpoint responded ${res.status}`);
  return { mode: "sent" };
}

"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, ChevronDown, LoaderCircle, TriangleAlert } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { submitInquiry, validateInquiry, type InquiryErrors, type InquiryForm } from "@/lib/contact";
import { onInquiryRequest } from "@/lib/inquiry";
import { Button } from "@/components/ui/Button";

type Copy = Dictionary["contact"]["form"];

const empty: InquiryForm = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  customerType: "",
  inquiryType: "",
  message: "",
};

type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "demo" } | { kind: "sent" } | { kind: "error" };

const fieldOrder: (keyof InquiryForm)[] = [
  "fullName",
  "organization",
  "email",
  "phone",
  "customerType",
  "inquiryType",
  "message",
];

export function ContactForm({ t }: { t: Copy }) {
  const [form, setForm] = useState<InquiryForm>(empty);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(
    () =>
      onInquiryRequest(({ inquiryType, message }) => {
        setStatus({ kind: "idle" });
        setForm((f) => ({ ...f, inquiryType, message: f.message.trim() ? f.message : (message ?? f.message) }));
        setErrors((e) => ({ ...e, inquiryType: undefined }));
        window.setTimeout(
          () => formRef.current?.querySelector<HTMLInputElement>("#fullName")?.focus({ preventScroll: true }),
          600,
        );
      }),
    [],
  );

  const update =
    (key: keyof InquiryForm) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const next = { ...form, [key]: e.target.value };
      setForm(next);
      if (attempted) setErrors(validateInquiry(next, t.errors));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const found = validateInquiry(form, t.errors);
    setErrors(found);
    const firstInvalid = fieldOrder.find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }
    setStatus({ kind: "submitting" });
    try {
      const result = await submitInquiry(form);
      setStatus({ kind: result.mode });
      setForm(empty);
      setAttempted(false);
    } catch {
      setStatus({ kind: "error" });
    }
  };

  const submitting = status.kind === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-describedby="form-note"
      className="rounded-[4px] bg-surface p-6 text-ink md:p-10"
    >
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field id="fullName" label={t.fullName} required error={errors.fullName}>
          {(a) => (
            <input
              {...a}
              id="fullName"
              name="fullName"
              autoComplete="name"
              value={form.fullName}
              onChange={update("fullName")}
            />
          )}
        </Field>
        <Field id="organization" label={t.organization} hint={t.optional}>
          {(a) => (
            <input
              {...a}
              id="organization"
              name="organization"
              autoComplete="organization"
              value={form.organization}
              onChange={update("organization")}
            />
          )}
        </Field>
        <Field id="email" label={t.email} required error={errors.email}>
          {(a) => (
            <input
              {...a}
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
            />
          )}
        </Field>
        <Field id="phone" label={t.phone} hint={t.optional} error={errors.phone}>
          {(a) => (
            <input
              {...a}
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={update("phone")}
            />
          )}
        </Field>
        <Field id="customerType" label={t.customerType} required error={errors.customerType} select>
          {(a) => (
            <select
              {...a}
              id="customerType"
              name="customerType"
              value={form.customerType}
              onChange={update("customerType")}
            >
              <option value="" disabled>
                {t.customerTypePlaceholder}
              </option>
              {t.customerTypes.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id="inquiryType" label={t.inquiryType} required error={errors.inquiryType} select>
          {(a) => (
            <select
              {...a}
              id="inquiryType"
              name="inquiryType"
              value={form.inquiryType}
              onChange={update("inquiryType")}
            >
              <option value="" disabled>
                {t.inquiryTypePlaceholder}
              </option>
              {t.inquiryTypes.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label={t.message} required error={errors.message}>
            {(a) => (
              <textarea
                {...a}
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder={t.messagePlaceholder}
              />
            )}
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="max-w-sm text-xs leading-relaxed text-ink-muted">
          {t.note}
        </p>
        <Button type="submit" disabled={submitting} icon={submitting ? "none" : "arrow"} className="shrink-0">
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> {t.submitting}
            </span>
          ) : (
            t.submit
          )}
        </Button>
      </div>

      <div role="status" aria-live="polite" className="empty:hidden">
        {status.kind === "demo" ? (
          <Notice tone="info" title={t.demoTitle}>
            {t.demoBody}
          </Notice>
        ) : status.kind === "sent" ? (
          <Notice tone="success" title={t.sentTitle}>
            {t.sentBody}
          </Notice>
        ) : status.kind === "error" ? (
          <Notice tone="error" title={t.errorTitle}>
            {t.errorBody}
          </Notice>
        ) : null}
      </div>
    </form>
  );
}

type ControlAria = {
  "aria-invalid": boolean;
  "aria-required"?: boolean;
  "aria-describedby"?: string;
};

function Field({
  id,
  label,
  required,
  hint,
  error,
  select,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  select?: boolean;
  children: (aria: ControlAria) => ReactNode;
}) {
  const errorId = `${id}-error`;
  const hintId = useId();
  return (
    <div className="flex flex-col gap-2 [&_input,&_select,&_textarea]:w-full [&_input,&_select,&_textarea]:rounded-[3px] [&_input,&_select,&_textarea]:border [&_input,&_select,&_textarea]:bg-surface-raised [&_input,&_select,&_textarea]:px-4 [&_input,&_select,&_textarea]:text-base [&_input,&_select,&_textarea]:text-ink [&_input,&_select,&_textarea]:transition-colors [&_input,&_select,&_textarea]:outline-none [&_input,&_select]:min-h-12 [&_select]:appearance-none [&_select]:pr-10 [&_textarea]:py-3 [&_textarea]:leading-relaxed [&_textarea]:placeholder:text-ink-muted/70 [&_:is(input,select,textarea):focus]:border-accent [&_:is(input,select,textarea):focus]:ring-2 [&_:is(input,select,textarea):focus]:ring-mint/40">
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-heading">
        <span>
          {label}
          {required ? (
            <span aria-hidden className="ml-0.5 text-eyebrow">
              *
            </span>
          ) : null}
        </span>
        {hint ? (
          <span id={hintId} className="text-xs font-normal text-ink-muted">
            {hint}
          </span>
        ) : null}
      </label>
      <div
        className={`relative ${
          error
            ? "[&_:is(input,select,textarea)]:border-danger [&_:is(input,select,textarea)]:bg-danger-bg"
            : "[&_:is(input,select,textarea)]:border-ink/15"
        }`}
      >
        {children({
          "aria-invalid": !!error,
          "aria-required": required || undefined,
          "aria-describedby": error ? errorId : hint ? hintId : undefined,
        })}
        {select ? (
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-accent"
          />
        ) : null}
      </div>
      {error ? (
        <p id={errorId} className="flex items-center gap-1.5 text-sm text-danger">
          <TriangleAlert aria-hidden className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Notice({ tone, title, children }: { tone: "info" | "success" | "error"; title: string; children: ReactNode }) {
  const styles = tone === "error" ? "bg-danger-bg text-danger" : "bg-tint text-tint-ink";
  const Icon = tone === "error" ? TriangleAlert : CheckCircle2;
  return (
    <div className={`mt-6 flex gap-3 rounded-[3px] p-4 text-sm leading-relaxed ${styles}`}>
      <Icon aria-hidden className="mt-0.5 size-5 shrink-0" strokeWidth={1.75} />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1">{children}</p>
      </div>
    </div>
  );
}

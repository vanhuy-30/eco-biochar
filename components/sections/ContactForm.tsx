"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, ChevronDown, LoaderCircle, TriangleAlert } from "lucide-react";
import {
  customerTypeOptions,
  inquiryTypeOptions,
  submitInquiry,
  validateInquiry,
  type InquiryErrors,
  type InquiryForm,
} from "@/lib/contact";
import { onInquiryRequest } from "@/lib/inquiry";
import { Button } from "@/components/ui/Button";

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

export function ContactForm() {
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
      if (attempted) setErrors(validateInquiry(next));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const found = validateInquiry(form);
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
      className="rounded-[4px] bg-cream p-6 text-char md:p-10"
    >
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field id="fullName" label="Họ và tên" required error={errors.fullName}>
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
        <Field id="organization" label="Công ty / Tổ chức" hint="Không bắt buộc">
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
        <Field id="email" label="Email" required error={errors.email}>
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
        <Field id="phone" label="Số điện thoại" hint="Không bắt buộc" error={errors.phone}>
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
        <Field id="customerType" label="Bạn là" required error={errors.customerType} select>
          {(a) => (
            <select
              {...a}
              id="customerType"
              name="customerType"
              value={form.customerType}
              onChange={update("customerType")}
            >
              <option value="" disabled>
                Chọn nhóm khách hàng
              </option>
              {customerTypeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id="inquiryType" label="Nhu cầu liên hệ" required error={errors.inquiryType} select>
          {(a) => (
            <select
              {...a}
              id="inquiryType"
              name="inquiryType"
              value={form.inquiryType}
              onChange={update("inquiryType")}
            >
              <option value="" disabled>
                Chọn nhu cầu
              </option>
              {inquiryTypeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label="Nội dung" required error={errors.message}>
            {(a) => (
              <textarea
                {...a}
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Ví dụ: loại cây trồng, quy mô sử dụng, dạng sản phẩm quan tâm…"
              />
            )}
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="max-w-sm text-xs leading-relaxed text-muted">
          Các trường có dấu * là bắt buộc. Thông tin chỉ dùng để phản hồi yêu cầu của bạn.
        </p>
        <Button type="submit" disabled={submitting} icon={submitting ? "none" : "arrow"} className="shrink-0">
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> Đang gửi…
            </span>
          ) : (
            "Gửi yêu cầu"
          )}
        </Button>
      </div>

      <div role="status" aria-live="polite" className="empty:hidden">
        {status.kind === "demo" ? (
          <Notice tone="info" title="Đã ghi nhận trên trình duyệt — đây là bản demo.">
            Thông tin <strong>chưa được gửi</strong> tới Eco Biochar vì trang chưa kết nối hệ thống tiếp nhận. Kênh liên
            hệ chính thức đang được cập nhật.
          </Notice>
        ) : status.kind === "sent" ? (
          <Notice tone="success" title="Cảm ơn bạn! Yêu cầu đã được gửi.">
            Đội ngũ Eco Biochar sẽ phản hồi qua email bạn cung cấp.
          </Notice>
        ) : status.kind === "error" ? (
          <Notice tone="error" title="Chưa gửi được yêu cầu.">
            Vui lòng thử lại sau ít phút.
          </Notice>
        ) : null}
      </div>
    </form>
  );
}

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
    <div
      className="group/field flex flex-col gap-2 [&_input,&_select,&_textarea]:w-full [&_input,&_select,&_textarea]:rounded-[3px] [&_input,&_select,&_textarea]:border [&_input,&_select,&_textarea]:bg-white/70 [&_input,&_select,&_textarea]:px-4 [&_input,&_select,&_textarea]:text-base [&_input,&_select,&_textarea]:text-char [&_input,&_select,&_textarea]:transition-colors [&_input,&_select,&_textarea]:outline-none [&_input,&_select]:min-h-12 [&_select]:appearance-none [&_select]:pr-10 [&_textarea]:py-3 [&_textarea]:leading-relaxed [&_:is(input,select,textarea):focus]:border-forest [&_:is(input,select,textarea):focus]:bg-white [&_:is(input,select,textarea):focus]:ring-2 [&_:is(input,select,textarea):focus]:ring-mint/40"
      data-invalid={error ? "" : undefined}
    >
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-forest-ink">
        <span>
          {label}
          {required ? (
            <span aria-hidden className="ml-0.5 text-earth">
              *
            </span>
          ) : null}
        </span>
        {hint ? (
          <span id={hintId} className="text-xs font-normal text-muted">
            {hint}
          </span>
        ) : null}
      </label>
      <div
        className={`relative ${
          error
            ? "[&_:is(input,select,textarea)]:border-[#b3261e] [&_:is(input,select,textarea)]:bg-[#fdf3f2]"
            : "[&_:is(input,select,textarea)]:border-char/15"
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
            className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-forest"
          />
        ) : null}
      </div>
      {error ? (
        <p id={errorId} className="flex items-center gap-1.5 text-sm text-[#b3261e]">
          <TriangleAlert aria-hidden className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

type ControlAria = {
  "aria-invalid": boolean;
  "aria-required"?: boolean;
  "aria-describedby"?: string;
};

function Notice({ tone, title, children }: { tone: "info" | "success" | "error"; title: string; children: ReactNode }) {
  const styles = {
    info: "bg-soft text-forest-ink",
    success: "bg-soft text-forest-ink",
    error: "bg-[#fdf3f2] text-[#8c1d18]",
  }[tone];
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

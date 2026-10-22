export type CustomerType = "farm" | "manufacturer" | "distributor" | "supplier" | "home" | "other";
export type InquiryType =
  "sample" | "specs" | "bulk" | "distribution" | "feedstock" | "product-chunk" | "product-powder" | "other";

export const customerTypeOptions: { value: CustomerType; label: string }[] = [
  { value: "farm", label: "Trang trại / Hợp tác xã" },
  { value: "manufacturer", label: "Doanh nghiệp phân bón, giá thể, đất trồng" },
  { value: "distributor", label: "Đại lý / Nhà phân phối" },
  { value: "supplier", label: "Cơ sở chế biến dừa / Nhà cung cấp nguyên liệu" },
  { value: "home", label: "Người làm vườn / Cá nhân" },
  { value: "other", label: "Khác" },
];

export const inquiryTypeOptions: { value: InquiryType; label: string }[] = [
  { value: "sample", label: "Yêu cầu mẫu thử" },
  { value: "specs", label: "Thông số kỹ thuật" },
  { value: "bulk", label: "Cung ứng số lượng lớn" },
  { value: "distribution", label: "Hợp tác phân phối" },
  { value: "feedstock", label: "Cung cấp nguyên liệu gáo dừa" },
  { value: "product-chunk", label: "Tìm hiểu Biochar Chunk" },
  { value: "product-powder", label: "Tìm hiểu Biochar Powder" },
  { value: "other", label: "Khác" },
];

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

export function validateInquiry(form: InquiryForm): InquiryErrors {
  const errors: InquiryErrors = {};
  if (form.fullName.trim().length < 2) errors.fullName = "Vui lòng nhập họ và tên.";
  if (!form.email.trim()) errors.email = "Vui lòng nhập email.";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Email chưa đúng định dạng, ví dụ: ten@congty.vn.";
  if (form.phone.trim() && !PHONE_RE.test(form.phone.trim())) errors.phone = "Số điện thoại chưa hợp lệ (8–16 chữ số).";
  if (!form.customerType) errors.customerType = "Vui lòng chọn nhóm khách hàng.";
  if (!form.inquiryType) errors.inquiryType = "Vui lòng chọn nhu cầu liên hệ.";
  if (form.message.trim().length < 10) errors.message = "Vui lòng mô tả nhu cầu (tối thiểu 10 ký tự).";
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

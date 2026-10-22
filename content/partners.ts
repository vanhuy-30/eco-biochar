import type { InquiryType } from "@/lib/contact";

export type PartnerType = { title: string; need: string; offer: string };

/** Partner categories from mục 2.1, 2.5 and Bảng 2.3. No organisation is named as a confirmed partner. */
export const partnerTypes: PartnerType[] = [
  {
    title: "Trang trại & hợp tác xã",
    need: "Giải pháp có thể kiểm chứng trong điều kiện thực tế.",
    offer: "Mẫu thử, hướng dẫn kỹ thuật và phối hợp mô hình thử nghiệm trước khi cung ứng dài hạn.",
  },
  {
    title: "Doanh nghiệp phân bón & giá thể",
    need: "Nguồn nguyên liệu ổn định về quy cách và sản lượng.",
    offer: "Biochar dạng nghiền, mẫu kỹ thuật, thông tin lô sản xuất và trao đổi hợp đồng cung ứng.",
  },
  {
    title: "Đại lý & nhà phân phối",
    need: "Sản phẩm rõ nguồn gốc, dễ tư vấn cho người dùng địa phương.",
    offer: "Thông tin sản phẩm, tài liệu truyền thông, hỗ trợ bán hàng và chính sách theo quy mô đơn hàng.",
  },
  {
    title: "Cơ sở chế biến dừa & nhà cung cấp",
    need: "Phương án tận dụng gáo dừa phát sinh.",
    offer: "Liên kết thu gom, phân loại và tiếp nhận nguyên liệu theo yêu cầu sản xuất.",
  },
];

export type InquiryShortcut = { label: string; type: InquiryType };

export const inquiryShortcuts: InquiryShortcut[] = [
  { label: "Yêu cầu mẫu thử", type: "sample" },
  { label: "Thông số kỹ thuật", type: "specs" },
  { label: "Cung ứng số lượng lớn", type: "bulk" },
  { label: "Hợp tác phân phối", type: "distribution" },
  { label: "Cung cấp nguyên liệu", type: "feedstock" },
];

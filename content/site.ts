export const brand = {
  name: "Eco Biochar",
  company: "Công ty Cổ phần Agrichar Vĩnh Long",
  companyShort: "AGRICHAR VĨNH LONG",
  slogan: "Tái sinh giá trị – Xanh hóa nông nghiệp",
  description:
    "Eco Biochar chuyển hóa gáo dừa – phế phụ phẩm từ các cơ sở chế biến dừa tại Bến Tre và Đồng bằng sông Cửu Long – thành than sinh học phục vụ nông nghiệp.",
} as const;

export type NavItem = { label: string; href: `#${string}` };

export const navItems: NavItem[] = [
  { label: "Sản phẩm", href: "#san-pham" },
  { label: "Ứng dụng", href: "#ung-dung" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Về Eco Biochar", href: "#ve-chung-toi" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const primaryCta = { label: "Hợp tác cùng chúng tôi", href: "#hop-tac" } as const;

/**
 * Official contact channels are not published in the source report.
 * Replace `value` (and set `href`) once the company confirms them.
 */
export type ContactChannel = { label: string; value: string; href?: string };

export const contactChannels: ContactChannel[] = [
  { label: "Email", value: "Đang cập nhật" },
  { label: "Điện thoại", value: "Đang cập nhật" },
  { label: "Khu vực hoạt động", value: "Vĩnh Long · Bến Tre · Đồng bằng sông Cửu Long" },
];

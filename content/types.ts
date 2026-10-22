import type { CustomerType, InquiryType } from "@/lib/contact";

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";
export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export type ProductId = "chunk" | "powder";

export type SectionCopy = {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
};

export type Product = {
  id: ProductId;
  index: string;
  name: string;
  localName: string;
  formatLabel: string;
  summary: string;
  description: string;
  suitableFor: string[];
  uses: string[];
  tone: "char" | "kraft";
};

export type ProcessStage = {
  number: string;
  title: string;
  keyword: string;
  summary: string;
  steps: string[];
  highlight?: string;
};

export type Application = {
  id: string;
  label: string;
  title: string;
  description: string;
  format: string;
  audience: string;
  note: string;
};

export type Option<T extends string> = { value: T; label: string };

export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  common: {
    skipLink: string;
    homeLabel: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    menuDialog: string;
    themeToggle: string;
    themeLight: string;
    themeDark: string;
    languageLabel: string;
    close: string;
  };
  intro: { label: string; cornerTop: string; cornerBottom: string; skip: string };
  brand: { slogan: string; description: string; logoAlt: string; logoNote: string };
  nav: { label: string; href: `#${string}` }[];
  primaryCta: { label: string; href: `#${string}` };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { label: string; value: string }[];
    imageCaption: string;
    imageNote: string;
    imageAlt: string;
    scrollCue: string;
    marquee: string[];
  };
  story: SectionCopy & {
    logoCaption: string;
    statNumber: string;
    statUnit: string;
    statLabel: string;
    statSource: string;
    points: { title: string; body: string }[];
    chainLabel: string;
    chain: string[];
  };
  products: SectionCopy & {
    suitableLabel: string;
    specNote: string;
    cta: string;
    items: Product[];
    imageAlt: Record<ProductId, string>;
    compare: {
      eyebrow: string;
      title: string;
      caption: string;
      criterion: string;
      /** `both` spans the two product columns (same answer for both formats). */
      rows: ({ label: string; chunk: string; powder: string } | { label: string; both: string })[];
      note: string;
    };
    dialog: {
      eyebrow: string;
      usesLabel: string;
      specTitle: string;
      specBody: string;
      cta: string;
      /** `{product}` is replaced with the product name. */
      prefill: string;
    };
  };
  process: SectionCopy & { stages: ProcessStage[]; disclaimer: string };
  applications: SectionCopy & {
    tablistLabel: string;
    formatLabel: string;
    audienceLabel: string;
    noteLabel: string;
    items: Application[];
  };
  why: SectionCopy & {
    strategyLabel: string;
    strategy: string[];
    strategyBody: string;
    items: { title: string; body: string }[];
  };
  partnership: SectionCopy & {
    needLabel: string;
    offerLabel: string;
    partners: { title: string; need: string; offer: string }[];
    shortcutsLabel: string;
    shortcuts: { label: string; type: InquiryType }[];
    cta: string;
    disclaimer: string;
  };
  faq: {
    index: string;
    eyebrow: string;
    title: string;
    accent: string;
    introBefore: string;
    introLink: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    index: string;
    eyebrow: string;
    title: string;
    accent: string;
    body: string;
    channels: { label: string; value: string; href?: string }[];
    form: {
      fullName: string;
      organization: string;
      email: string;
      phone: string;
      customerType: string;
      customerTypePlaceholder: string;
      inquiryType: string;
      inquiryTypePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      optional: string;
      note: string;
      submit: string;
      submitting: string;
      customerTypes: Option<CustomerType>[];
      inquiryTypes: Option<InquiryType>[];
      errors: {
        fullName: string;
        emailRequired: string;
        emailInvalid: string;
        phone: string;
        customerType: string;
        inquiryType: string;
        message: string;
      };
      demoTitle: string;
      demoBody: string;
      sentTitle: string;
      sentBody: string;
      errorTitle: string;
      errorBody: string;
    };
  };
  footer: {
    explore: string;
    faqLink: string;
    productsHeading: string;
    partnershipLink: string;
    contactHeading: string;
    footerNav: string;
    copyright: string;
    disclaimer: string;
  };
};

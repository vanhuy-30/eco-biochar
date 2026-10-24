import { contactInfo } from "./contact-info";
import type { Dictionary } from "./types";

/**
 * English copy, translated from the Vietnamese source text.
 * Section anchors stay identical across locales so the language switch can keep the reader's position.
 */
export const en: Dictionary = {
  meta: {
    title: "Agrichar Vinh Long — Eco Biochar, coconut-shell biochar",
    description:
      "Agrichar Vinh Long Joint Stock Company makes Eco Biochar — chunk and powder biochar from coconut shells in Ben Tre and the Mekong Delta. Regenerating value – Greening agriculture.",
    ogAlt: "Biochar Chunk and Biochar Powder packaging by AGRICHAR VINH LONG",
  },
  common: {
    skipLink: "Skip to content",
    homeLabel: "Eco Biochar — back to top",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuDialog: "Navigation menu",
    themeToggle: "Switch light / dark theme",
    themeLight: "Light",
    themeDark: "Dark",
    languageLabel: "Language",
    close: "Close",
  },
  intro: {
    label: "Agrichar Vinh Long introduction",
    product: "The Eco Biochar product line",
    cornerTop: "Vietnam · Circular biochar",
    cornerBottom: "Coconut shell → Biochar",
    skip: "Skip intro",
  },
  brand: {
    company: "Agrichar Vinh Long",
    legalName: "Agrichar Vinh Long Joint Stock Company",
    product: "Eco Biochar",
    slogan: "Regenerating value – Greening agriculture",
    description:
      "Agrichar Vinh Long develops Eco Biochar — biochar from coconut shells, a by-product of coconut processors in Ben Tre and the Mekong Delta — for agriculture.",
    logoAlt: "AGRICHAR VINH LONG logo",
    logoNote:
      "The AGRICHAR VINH LONG logo: a seedling growing from biochar in a coconut shell, framed by a circular loop.",
  },
  nav: [
    { label: "Products", href: "#san-pham" },
    { label: "Applications", href: "#ung-dung" },
    { label: "Process", href: "#quy-trinh" },
    { label: "About", href: "#ve-chung-toi" },
    { label: "Contact", href: "#lien-he" },
  ],
  primaryCta: { label: "Partner with us", href: "#hop-tac" },
  hero: {
    companyLabel: "Joint Stock Company",
    productLine: "The Eco Biochar product line · Coconut-shell biochar",
    title: "Regenerating value from coconut shells.",
    accent: "Growing a greener future.",
    body: "Agrichar Vinh Long turns agricultural by-products into Eco Biochar, working towards more resource-efficient solutions for farming.",
    ctaPrimary: "Explore products",
    ctaSecondary: "Partner with us",
    facts: [
      { label: "Pilot feedstock", value: "Coconut shells" },
      { label: "Two formats", value: "Chunk · Powder" },
    ],
    imageCaption: "Biochar Chunk & Biochar Powder",
    imageNote: "Packaging concept design",
    scrollCue: "Scroll to explore",
    marquee: [
      "Agrichar Vinh Long",
      "Regenerating value",
      "Greening agriculture",
      "Biochar Chunk",
      "Biochar Powder",
      "From Ben Tre coconuts",
    ],
  },
  story: {
    index: "01",
    eyebrow: "The Agrichar Vinh Long story",
    title: "Every loop begins",
    accent: "with what gets left behind.",
    intro:
      "Agrichar Vinh Long Joint Stock Company develops Eco Biochar — biochar from agricultural by-products, with a circular-economy approach.",
    logoCaption:
      "The AGRICHAR VINH LONG logo: a seedling growing from biochar in a coconut shell, framed by a circular loop.",
    statPrefix: "Over",
    statNumber: "156.8",
    statUnit: "million tonnes",
    statLabel:
      "of agricultural by-products were generated nationwide in 2020, according to the General Statistics Office — biomass that can be converted instead of discarded.",
    statSource: {
      label: "Cited source",
      title: "Phụ phẩm nông nghiệp: Nguồn tài nguyên đang bị lãng phí (“Agricultural by-products: a wasted resource”)",
      meta: "Vietnam Government News (Chinhphu.vn), 10 Sep 2021, in Vietnamese · Figures from the General Statistics Office, 2020",
      openHint: "opens the original article in a new tab",
      url: "https://baochinhphu.vn/phu-pham-nong-nghiep-nguon-tai-nguyen-dang-bi-lang-phi-102300165.htm",
    },
    points: [
      {
        title: "An under-used resource",
        body: "By-products from farming and food processing can become useful products instead of being treated only as waste.",
      },
      {
        title: "Starting with coconut shells",
        body: "The pilot focuses on coconut shells from processors in Ben Tre and the Mekong Delta, so feedstock, process and quality can be controlled closely.",
      },
      {
        title: "Linking feedstock to the field",
        body: "Eco Biochar connects collection, production and real-world use — bringing the value of coconut shells back into farming.",
      },
    ],
    chainLabel: "Value chain",
    chain: ["Coconut shells", "Collection & prep", "Pyrolysis", "Biochar", "Distribution", "Agriculture"],
  },
  products: {
    index: "02",
    eyebrow: "Products",
    title: "Two formats.",
    accent: "One coconut-shell source.",
    intro:
      "The EcoBiochar Base line comes in two formats for different needs — from direct soil use to blending into growing media and fertiliser.",
    suitableLabel: "Suited to",
    specNote: "Specifications on request — contact us for product data.",
    cta: "View product",
    items: [
      {
        id: "chunk",
        index: "01",
        name: "Biochar Chunk",
        localName: "Biochar in chunks / pieces",
        formatLabel: "Chunks",
        summary: "Keeps the natural porous structure of pyrolysed coconut shell.",
        description:
          "Chunk or piece biochar for customers who need larger volumes, for direct use or as raw material for further processing.",
        suitableFor: ["Farms", "Cooperatives", "Agricultural businesses", "Further processors"],
        uses: [
          "Direct use in soil improvement work",
          "Bulk purchase by order or supply contract",
          "Raw material for further processing",
        ],
        tone: "char",
      },
      {
        id: "powder",
        index: "02",
        name: "Biochar Powder",
        localName: "Ground biochar / powder",
        formatLabel: "Powder",
        summary: "Finer, more uniform particles that are easy to blend.",
        description:
          "Ground biochar is easy to mix with soil, organic fertiliser or growing media — suited to potting-soil and growing-media producers and to companies using biochar as an input.",
        suitableFor: [
          "Organic fertiliser producers",
          "Potting soil & growing-media producers",
          "Nurseries",
          "Home gardeners (small packs)",
        ],
        uses: [
          "Blending into potting soil and growing media",
          "Blend ingredient for organic fertiliser",
          "Small packs for home growers",
        ],
        tone: "kraft",
      },
    ],
    imageAlt: {
      chunk: "Biochar Chunk packaging concept with a window showing black biochar pieces",
      powder: "Biochar Powder packaging concept with a window showing finely ground biochar",
    },
    compare: {
      eyebrow: "At a glance",
      title: "Choose the right format",
      caption: "Biochar Chunk compared with Biochar Powder",
      criterion: "Criterion",
      rows: [
        {
          label: "Format",
          chunk: "Chunks / pieces that keep the porous coconut-shell structure",
          powder: "Ground, with finer and more uniform particles",
        },
        {
          label: "Main use",
          chunk: "Direct use, or raw material for further processing",
          powder: "Blending into soil, organic fertiliser and growing media",
        },
        {
          label: "Best suited to",
          chunk: "Farms, cooperatives, agricultural businesses",
          powder: "Fertiliser, growing-media and potting-soil producers; nurseries",
        },
        {
          label: "How it's bought",
          chunk: "Bulk, by order or supply contract",
          powder: "Contracts for businesses; small packs for gardeners",
        },
        { label: "Technical specs", both: "Being standardised in the pilot phase — contact us for data" },
        {
          label: "Choose it when",
          chunk: "You need larger volumes for direct use",
          powder: "You need to blend evenly into another product",
        },
      ],
      note: "Not sure which one? Tell us your needs — Eco Biochar will advise and may suggest a trial.",
    },
    dialog: {
      eyebrow: "EcoBiochar Base",
      usesLabel: "Intended uses",
      specTitle: "Technical specifications:",
      specBody:
        "being standardised during the pilot phase. Formats are made to order — contact us for data sheets and samples. Results depend on soil type, crop and blending method.",
      cta: "Request specs & samples",
      prefill: "I would like technical specifications and sample information for {product}.",
    },
  },
  process: {
    index: "03",
    eyebrow: "Circular process",
    title: "From coconut shell",
    accent: "back to the soil.",
    intro:
      "Nine steps from collecting coconut shells to packing and distribution, following the project's general process.",
    stages: [
      {
        number: "01",
        title: "Shell collection",
        keyword: "Feedstock",
        summary:
          "Coconut-shell by-product is collected from households, cooperatives and coconut processors in Ben Tre and the Mekong Delta.",
        steps: [
          "A reasonably stable feedstock supply for production",
          "Suppliers assessed on volume, moisture, impurities and distance before selection",
          "Aims to reduce the amount of biomass that is burned off",
        ],
      },
      {
        number: "02",
        title: "Sorting and cleaning",
        keyword: "Input control",
        summary:
          "Inorganic impurities such as soil, stones, metal, plastic waste and other harmful material are removed.",
        steps: ["Protects the shredding/grinding equipment", "Keeps the biochar product pure", "Keeps operations safe"],
      },
      {
        number: "03",
        title: "Pre-shredding",
        keyword: "Uniform size",
        summary: "Cleaned shells are fed into a shredder/grinder to bring them to a uniform size.",
        steps: [
          "Helps drying go faster",
          "Helps heat spread evenly in the pyrolysis kiln",
          "Pre-shredding size is adjusted to the moisture of each batch",
        ],
      },
      {
        number: "04",
        title: "Drying",
        keyword: "Lower moisture",
        summary:
          "Moisture is brought down to a standard level (typically below 15–20%) before the shells enter the pyrolysis kiln.",
        steps: [
          "High moisture wastes heating energy and lowers pyrolysis efficiency",
          "Aims to reuse waste heat from the pyrolysis system for drying",
          "Helps save input fuel",
        ],
        highlight: "Moisture < 15–20%",
      },
      {
        number: "05",
        title: "Low-oxygen pyrolysis",
        keyword: "Core stage",
        summary:
          "Dried shells are fed into a closed kiln and heated without oxygen, producing biochar rich in fixed carbon.",
        steps: [
          "Heated at around 400–600°C in the project's plan",
          "Aims to recover pyrolysis gas (syngas) and burn it in a loop to supply heat back to the dryer and kiln",
          "This is the stage that determines biochar quality",
        ],
        highlight: "400–600°C",
      },
      {
        number: "06",
        title: "Safe cooling",
        keyword: "Safety control",
        summary: "Biochar leaving the kiln is very hot and can ignite if it suddenly meets oxygen in the air.",
        steps: [
          "Controlled cooling: heat-exchange conveyor or light controlled wetting",
          "Limits smouldering risk and keeps workers safe",
          "Preserves the stable carbon structure of the product",
        ],
      },
      {
        number: "07",
        title: "Grinding, screening, grading",
        keyword: "Two formats",
        summary: "Raw biochar is ground, screened and graded into the two main commercial formats once cooled.",
        steps: [
          "Chunks/pieces: keep the natural porous structure, for farms improving soil",
          "Ground: small, uniform particles for fertiliser, growing-media and potting-soil producers",
        ],
      },
      {
        number: "08",
        title: "Quality control (QC)",
        keyword: "Batch by batch",
        summary:
          "Each batch is tested against core technical criteria before packing (following IBI-oriented standards).",
        steps: [
          "Moisture, fixed carbon, ash content",
          "pH, porosity, particle size",
          "Batch data recorded for consistency and to build trust with B2B customers",
        ],
      },
      {
        number: "09",
        title: "Packing and distribution",
        keyword: "B2B · Dealers · Online",
        summary: "Products that pass are packed, stored and distributed to customers.",
        steps: [
          "Small packs for households and gardeners",
          "Standard large bags up to jumbo bags for farms, cooperatives and fertiliser plants",
          "Distribution through direct B2B contracts, dealers and e-commerce",
        ],
      },
    ],
    outputsLabel: "Output products",
    outputs: ["Biochar in chunks / pieces", "Ground biochar"],
    disclaimer:
      "The process and parameters were defined for the pilot phase; temperature, moisture and quality criteria will continue to be standardised through real production batches.",
  },
  applications: {
    index: "04",
    eyebrow: "Applications",
    title: "Matched to each need,",
    accent: "never one-size-fits-all.",
    intro:
      "Biochar performance varies with soil, product properties and how it is used. That is why each application is presented with its conditions.",
    tablistLabel: "Applications",
    formatLabel: "Format",
    audienceLabel: "For",
    noteLabel: "Note",
    items: [
      {
        id: "dat-gia-the",
        label: "Soil & growing media",
        title: "An ingredient for potting soil and growing media",
        description:
          "Biochar can be blended into soil or growing media to support water retention and the retention of some nutrients. The porous structure of pyrolysed coconut shell is what Eco Biochar aims to make use of.",
        format: "Biochar Powder for blending; Biochar Chunk for direct use",
        audience: "Nurseries, growers, home gardeners",
        note: "The effect depends on soil properties, biochar properties and how it is applied.",
      },
      {
        id: "san-xuat-nong-nghiep",
        label: "Farm production",
        title: "Working alongside farms and cooperatives",
        description:
          "For direct users, Eco Biochar supplies product together with guidance on choosing a format and co-designs trial plots based on soil, crop and purpose.",
        format: "Biochar Chunk or Biochar Powder, as needed",
        audience: "Farms, cooperatives, agricultural producers",
        note: "There is no fixed blending ratio for every soil or crop yet.",
      },
      {
        id: "phan-bon-phoi-tron",
        label: "Fertiliser & blending",
        title: "An input for organic fertiliser and growing media",
        description:
          "The ground format has finer, more uniform particles, making it a convenient blend ingredient for organic fertiliser, commercial potting soil and seedling media.",
        format: "Biochar Powder",
        audience: "Fertiliser, growing-media and potting-soil producers",
        note: "Particle size, moisture and volumes are agreed case by case.",
      },
      {
        id: "moi-truong",
        label: "Environment (potential)",
        title: "Longer-term environmental applications",
        description:
          "Biochar can serve as an adsorbent in some soil and water treatment uses, and can store carbon. These are directions Eco Biochar continues to research.",
        format: "Under research",
        audience: "Environmental service providers, research partners",
        note: "Carbon credits are a future opportunity that depends on certification methods and measurement, reporting and verification; they are not a current revenue stream.",
      },
    ],
  },
  why: {
    index: "05",
    eyebrow: "Why Eco Biochar",
    title: "The difference isn't one technology,",
    accent: "it's the whole value chain.",
    strategyLabel: "Start-up phase approach",
    strategy: ["Focus", "Validate", "Standardise", "Scale"],
    strategyBody:
      "Focus on coconut shells and specific B2B customers, validate quality and acceptance, standardise the process — and only then expand capacity and feedstock.",
    items: [
      {
        title: "A circular value chain",
        body: "By-product sourcing, collection and feedstock control, production, grading and customer support in one model.",
      },
      {
        title: "Focused on coconut shells",
        body: "One main feedstock at first, to standardise the process and control quality before considering rice husk, sawdust or straw.",
      },
      {
        title: "Two formats for two needs",
        body: "Chunks and powder meet different size and handling requirements instead of a single fixed format.",
      },
      {
        title: "Guidance and trials with customers",
        body: "Not just selling by the tonne: Eco Biochar aims to offer samples, blending guidance and trial plots for business customers.",
      },
      {
        title: "Responsible resource use",
        body: "Researching the reuse of waste heat and pyrolysis gas, and approaching carbon-storage value carefully, once measurement and certification are in place.",
      },
    ],
  },
  partnership: {
    index: "06",
    eyebrow: "Business partnerships",
    title: "Building a circular",
    accent: "agricultural value chain together.",
    intro:
      "Business customers are Eco Biochar's focus. We prefer to start with samples and trial plots before discussing long-term supply.",
    needLabel: "Need",
    offerLabel: "Eco Biochar",
    partners: [
      {
        title: "Farms & cooperatives",
        need: "Solutions that can be verified in real conditions.",
        offer: "Samples, technical guidance and joint trial plots before long-term supply.",
      },
      {
        title: "Fertiliser & growing-media producers",
        need: "A raw material that is consistent in format and volume.",
        offer: "Ground biochar, technical samples, batch information and supply-contract discussions.",
      },
      {
        title: "Dealers & distributors",
        need: "A product with clear origins that is easy to explain to local users.",
        offer: "Product information, marketing materials, sales support and volume-based terms.",
      },
      {
        title: "Coconut processors & suppliers",
        need: "A use for the coconut shells they generate.",
        offer: "Collection, sorting and intake of feedstock to production requirements.",
      },
    ],
    shortcutsLabel: "I'd like to discuss",
    shortcuts: [
      { label: "Samples", type: "sample" },
      { label: "Technical specs", type: "specs" },
      { label: "Bulk supply", type: "bulk" },
      { label: "Distribution", type: "distribution" },
      { label: "Supplying feedstock", type: "feedstock" },
    ],
    cta: "Discuss a partnership",
    disclaimer:
      "These partner groups describe the project's intended collaborations; this page does not present any organisation as a signed partner.",
  },
  faq: {
    index: "07",
    eyebrow: "FAQ",
    title: "Frequently asked",
    accent: "questions.",
    introBefore: "Can't find what you need? Ask us through the",
    introLink: "contact form",
    items: [
      {
        question: "What is biochar?",
        answer:
          "Biochar is a carbon-rich solid made by heating biomass with limited oxygen (pyrolysis). Its properties depend on the feedstock and the pyrolysis conditions.",
      },
      {
        question: "What feedstock does Eco Biochar use?",
        answer:
          "In the initial phase, Eco Biochar uses coconut shells collected from coconut processors in Ben Tre and the Mekong Delta. Rice husk, sawdust and straw are possible future directions once the process and supply are stable — they are not production lines today.",
      },
      {
        question: "How do Biochar Chunk and Biochar Powder differ?",
        answer:
          "Biochar Chunk comes in chunks or pieces that keep the porous coconut-shell structure, suited to bulk buyers for direct use or further processing. Biochar Powder is ground into finer, more uniform particles that blend easily with soil, organic fertiliser or growing media.",
      },
      {
        question: "What uses are the products suited to?",
        answer:
          "Main uses are blending into soil and growing media, supporting farm production at farms and cooperatives, and as an input for organic fertiliser and growing media. Results vary with soil, product properties and application, so we encourage discussing your specific needs and trialling before large-scale use.",
      },
      {
        question: "How can I get technical data or request samples?",
        answer:
          "Send your request through the contact form on this page and choose “Samples” or “Technical specifications”. Detailed specifications and sample terms are discussed case by case.",
      },
      {
        question: "Does Eco Biochar support business customers?",
        answer:
          "Yes. Business customers are Eco Biochar's focus. The project aims to help with choosing a format, blending guidance, joint trial plots, and discussing orders or recurring supply contracts.",
      },
    ],
  },
  contact: {
    index: "08",
    eyebrow: "Contact",
    title: "Start a new loop",
    accent: "of value.",
    body: "Tell us about your product needs, or request technical information, samples or a partnership conversation. The Eco Biochar team will suggest an option suited to your conditions.",
    // Email/phone are invented placeholders: see content/contact-info.ts.
    channels: [
      { label: "Company", value: "Agrichar Vinh Long Joint Stock Company" },
      { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
      { label: "Phone", value: contactInfo.phone, href: contactInfo.phoneHref },
      { label: "Region", value: "Vinh Long · Ben Tre · Mekong Delta, Vietnam" },
    ],
    form: {
      fullName: "Full name",
      organization: "Company / Organisation",
      email: "Email",
      phone: "Phone",
      customerType: "You are",
      customerTypePlaceholder: "Select customer type",
      inquiryType: "Inquiry",
      inquiryTypePlaceholder: "Select an inquiry",
      message: "Message",
      messagePlaceholder: "e.g. crop type, scale of use, format you're interested in…",
      optional: "Optional",
      note: "Fields marked * are required. Your details are only used to reply to your request.",
      submit: "Send request",
      submitting: "Sending…",
      customerTypes: [
        { value: "farm", label: "Farm / Cooperative" },
        { value: "manufacturer", label: "Fertiliser, growing-media or potting-soil producer" },
        { value: "distributor", label: "Dealer / Distributor" },
        { value: "supplier", label: "Coconut processor / Feedstock supplier" },
        { value: "home", label: "Home gardener / Individual" },
        { value: "other", label: "Other" },
      ],
      inquiryTypes: [
        { value: "sample", label: "Samples" },
        { value: "specs", label: "Technical specifications" },
        { value: "bulk", label: "Bulk supply" },
        { value: "distribution", label: "Distribution partnership" },
        { value: "feedstock", label: "Supplying coconut shells" },
        { value: "product-chunk", label: "About Biochar Chunk" },
        { value: "product-powder", label: "About Biochar Powder" },
        { value: "other", label: "Other" },
      ],
      errors: {
        fullName: "Please enter your full name.",
        emailRequired: "Please enter your email.",
        emailInvalid: "Please enter a valid email, e.g. name@company.com.",
        phone: "Please enter a valid phone number (8–16 digits).",
        customerType: "Please select a customer type.",
        inquiryType: "Please select an inquiry.",
        message: "Please describe your request (at least 10 characters).",
      },
      demoTitle: "Recorded in your browser — this is a demo.",
      demoBody:
        "Your request has not been sent to Agrichar Vinh Long because this site is not yet connected to an intake system.",
      sentTitle: "Thank you! Your request has been sent.",
      sentBody: "The Agrichar Vinh Long team will reply to the email you provided.",
      errorTitle: "Your request could not be sent.",
      errorBody: "Please try again in a few minutes.",
    },
  },
  footer: {
    explore: "Explore",
    faqLink: "FAQ",
    productsHeading: "Products",
    partnershipLink: "Business partnerships",
    contactHeading: "Contact",
    footerNav: "Footer links",
    copyright: "© 2026 Agrichar Vinh Long Joint Stock Company. The Eco Biochar project.",
    team: "Group 5: Business Administration - IUH",
    disclaimer: "Packaging images are concept designs; product information is at the pilot stage.",
  },
};

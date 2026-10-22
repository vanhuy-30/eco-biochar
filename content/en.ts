import type { Dictionary } from "./types";

/**
 * English copy, translated from the Vietnamese source text.
 * Section anchors stay identical across locales so the language switch can keep the reader's position.
 */
export const en: Dictionary = {
  meta: {
    title: "Eco Biochar — Circular biochar from coconut shells",
    description:
      "Eco Biochar turns coconut shells from Ben Tre and the Mekong Delta into chunk and powder biochar for agriculture. Regenerating value – Greening agriculture.",
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
    label: "Eco Biochar introduction",
    cornerTop: "Vietnam · Circular biochar",
    cornerBottom: "Coconut shell → Biochar",
    skip: "Skip intro",
  },
  brand: {
    slogan: "Regenerating value – Greening agriculture",
    description:
      "Eco Biochar turns coconut shells – a by-product of coconut processors in Ben Tre and the Mekong Delta – into biochar for agriculture.",
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
    eyebrow: "Coconut-shell biochar · Mekong Delta, Vietnam",
    title: "Regenerating value from coconut shells.",
    accent: "Growing a greener future.",
    body: "Eco Biochar turns agricultural by-products into biochar, working towards more resource-efficient solutions for farming.",
    ctaPrimary: "Explore products",
    ctaSecondary: "Partner with us",
    facts: [
      { label: "Pilot feedstock", value: "Coconut shells" },
      { label: "Two formats", value: "Chunk · Powder" },
    ],
    imageCaption: "Biochar Chunk & Biochar Powder",
    imageNote: "Packaging concept design",
    imageAlt:
      "Packaging concept for Biochar Chunk and Biochar Powder by AGRICHAR VINH LONG, beside coconut shells and biochar",
    scrollCue: "Scroll to explore",
    marquee: ["Regenerating value", "Greening agriculture", "Biochar Chunk", "Biochar Powder", "From Ben Tre coconuts"],
  },
  story: {
    index: "01",
    eyebrow: "The Eco Biochar story",
    title: "Every loop begins",
    accent: "with what gets left behind.",
    intro:
      "Eco Biochar is a project of Agrichar Vinh Long Joint Stock Company, producing biochar from agricultural by-products with a circular-economy approach.",
    logoCaption:
      "The AGRICHAR VINH LONG logo: a seedling growing from biochar in a coconut shell, framed by a circular loop.",
    statNumber: "156.8",
    statUnit: "million tonnes",
    statLabel:
      "of agricultural by-products generated in Vietnam in 2020 — biomass that can be converted instead of discarded.",
    statSource: "Source: Vietnam Government News (2021), citing the General Statistics Office.",
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
    intro: "Nine production steps grouped into six stages — from feedstock collection to field use and feedback.",
    stages: [
      {
        number: "01",
        title: "Shell collection",
        keyword: "Feedstock",
        summary:
          "Coconut shells are collected from coconut processors, cooperatives and households in Ben Tre and the Mekong Delta.",
        steps: [
          "Supply organised around local feedstock clusters",
          "Suppliers assessed on volume, moisture, impurities and distance",
        ],
      },
      {
        number: "02",
        title: "Feedstock preparation",
        keyword: "Sort · Shred · Dry",
        summary: "Shells are sorted, cleaned, roughly shredded for uniform size and dried before pyrolysis.",
        steps: [
          "Remove soil, stones, metal and unsuitable material",
          "Pre-shred for a more uniform size",
          "Dry, aiming to reuse waste heat from the system",
        ],
      },
      {
        number: "03",
        title: "Low-oxygen pyrolysis",
        keyword: "Core stage",
        summary: "Dried shells are heated in a closed kiln with limited oxygen, turning them into a carbon-rich solid.",
        steps: [
          "Heated at around 400–600°C in the project's plan",
          "Aim to recover pyrolysis gas to supply heat back to the system",
          "Controlled cooling for safety",
        ],
        highlight: "400–600°C",
      },
      {
        number: "04",
        title: "Processing & grading",
        keyword: "Grind · Screen · QC",
        summary: "Biochar is ground and screened into two formats and quality-checked batch by batch.",
        steps: [
          "Two formats: chunks/pieces and ground powder",
          "Batch checks: moisture, fixed carbon, ash, pH, porosity, particle size",
          "Batch records kept for comparison and traceability",
        ],
      },
      {
        number: "05",
        title: "Packing & distribution",
        keyword: "B2B · Dealers · Online",
        summary: "Packed for business customers and individual users, and distributed through several channels.",
        steps: [
          "Large formats for farms, cooperatives and factories",
          "Small packs for gardeners",
          "Direct B2B sales, dealers and online channels",
        ],
      },
      {
        number: "06",
        title: "Use in agriculture",
        keyword: "Trials · Feedback",
        summary: "The product returns to farming; field feedback is used to improve it.",
        steps: [
          "Usage guidance and trial plots with B2B customers",
          "Feedback on format, blending and suitability",
          "Product improvements based on real data",
        ],
      },
    ],
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
    // Official channels are not published in the report; replace when confirmed.
    channels: [
      { label: "Email", value: "Coming soon" },
      { label: "Phone", value: "Coming soon" },
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
        "Your request has not been sent to Eco Biochar because this site is not yet connected to an intake system. Official contact channels are coming soon.",
      sentTitle: "Thank you! Your request has been sent.",
      sentBody: "The Eco Biochar team will reply to the email you provided.",
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
    disclaimer: "Packaging images are concept designs; product information is at the pilot stage.",
  },
};

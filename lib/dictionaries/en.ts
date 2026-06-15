import type { Dictionary } from "./pl";

/**
 * English dictionary — secondary locale. Must satisfy the Dictionary type
 * derived from pl.ts, so missing keys fail the build.
 */

export const en: Dictionary = {
  meta: {
    title: "Copy Paste 3D — 3D Scanning & Printing | Kościan, Poland",
    description:
      "We scan your object and print a faithful copy — or a version modified exactly how you need it. Multi-color FDM printing, portable on-site 3D scanning, reverse engineering and prototypes. Based in Kościan, Poland; serving the region and EU clients.",
    ogAlt: "Copy Paste 3D — scan and 3D print in Kościan, Poland",
  },

  announcement: {
    messages: [
      "Standard turnaround: 2–5 business days",
      "On-site 3D scanning — we come to you (Wielkopolska region)",
      "Multi-color printing — up to 4 colors in one print",
    ],
  },

  nav: {
    services: "Services",
    portfolio: "Portfolio",
    materials: "Materials",
    estimator: "Quote",
    faq: "FAQ",
    contact: "Contact",
    getQuote: "Get a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    languageLabel: "Site language",
    skipToContent: "Skip to content",
  },

  hero: {
    kicker: "Scan · Model · 3D Print",
    title: "Your object, reproduced in 3D",
    lead: "We scan a physical object, rebuild it digitally and print its copy — faithful, or modified exactly the way you need. From a single figurine to a batch of parts.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "See our work",
    scanLabel: "scan",
    printLabel: "print",
    animationAlt:
      "Animation: an object is swept by a scanning beam while its printed copy builds up layer by layer beside it",
  },

  differentiators: {
    kicker: "What sets us apart",
    items: [
      {
        title: "Multi-color printing in a single run",
        body: "We print up to 4 colors in one job — no hand-painting, no gluing. Logos, markings and details come straight off the printer.",
      },
      {
        title: "On-site scanning — we come to you",
        body: "We bring a portable structured-light scanner to your workshop, factory or home. Objects up to ~1 m get digitized without ever leaving your door.",
      },
    ],
  },

  services: {
    kicker: "Services",
    title: "From scan to finished part",
    lead: "Six services, one workshop. Pick what you need — or describe the problem and we'll map the route.",
    imagePlaceholder: "Image slot",
    items: [
      {
        title: "Multi-color FDM printing",
        body: "Functional parts and display pieces in PLA, PETG, ABS, ASA, TPU, PC, nylon and fiber-reinforced composites (CF/GF) — up to 4 colors in a single run.",
        example: "Example: tool marker with high-contrast labeling",
      },
      {
        title: "3D scanning",
        body: "A structured-light scanner digitizes objects up to ~1 m with accuracy down to 0.02 mm. At our workshop or on-site at yours.",
        example: "Example: casting scanned before reconstruction",
      },
      {
        title: "Reverse engineering & CAD",
        body: "We turn scans into proper CAD models: dimensioned, editable, production-ready. We recreate parts nobody manufactures anymore.",
        example: "Example: replacement for a cracked machine handle",
      },
      {
        title: "Rapid prototyping",
        body: "Iterations in days, not weeks. Concept print in the morning, revisions in the afternoon, next version the following day.",
        example: "Example: three iterations of an electronics enclosure",
      },
      {
        title: "Custom figurines & personalized gifts",
        body: "A scan of a person, a pet or a favorite object — turned into a full-color miniature. A gift you can't buy in any store.",
        example: "Example: couple figurine for a wedding cake",
      },
      {
        title: "CAD consulting & model prep",
        body: "Got a model that won't print? We repair meshes, dial in tolerances and orientation, and advise on materials.",
        example: "Example: STL mesh repair on a downloaded model",
      },
    ],
  },

  process: {
    kicker: "How we work",
    title: "Four steps from original to copy",
    steps: [
      {
        name: "Scan",
        body: "We scan your object with structured light — at our place or yours. The result is a dense point cloud that captures the geometry faithfully.",
      },
      {
        name: "Model",
        body: "We clean up the scan and build a model from it: a faithful copy, or a version with changes — rescaled, with a crack repaired, with a mount added.",
      },
      {
        name: "Print",
        body: "We print in FDM, in several colors at once when needed. Material, infill and orientation are chosen for the part's job.",
      },
      {
        name: "Finish",
        body: "We remove supports, smooth surfaces and check dimensions. You collect a part that's ready to use — in person or by courier.",
      },
    ],
  },

  portfolio: {
    kicker: "Portfolio",
    title: "See what we've copied so far",
    lead: "Filter by category. Pieces marked with the 3D icon open in an interactive viewer you can rotate yourself.",
    filterAll: "All",
    categories: {
      figurines: "Figurines",
      parts: "Parts",
      prototypes: "Prototypes",
      repairs: "Repairs",
      scans: "Scans",
    },
    open3d: "View in 3D",
    openCompare: "Compare: original / print",
    photoPlaceholder: "Project photo slot",
    viewerHint: "Drag to rotate · scroll to zoom",
    compareHint: "Drag the slider to compare",
    compareBefore: "Original",
    compareAfter: "Print",
    close: "Close",
    items: [
      {
        title: "Couple figurine — wedding gift",
        blurb: "Scan of two people, 15 cm multi-color print.",
      },
      {
        title: "Lever handle — packaging machine",
        blurb: "Reverse-engineered from a cracked part, PETG, batch of 8.",
      },
      {
        title: "Controller housing — prototype",
        blurb: "Three iterations in a week, screwless snap-fit design.",
      },
      {
        title: "Custom clamp — CAD modeling",
        blurb: "Designed from scratch in Fusion 360, ready for a perfect-fit print.",
      },
      {
        title: "On-site 3D scan — machine part",
        blurb: "A metal casting digitized at the client's site, archived as a watertight model.",
      },
      {
        title: "Two-color part, zero painting",
        blurb: "Teal and orange in a single print — the color comes off the printer, not a paint booth.",
      },
    ],
  },

  materials: {
    kicker: "Materials & colors",
    title: "We print color, we don't paint it",
    lead: "We feed up to 4 filaments into a single print. Pick a combination below and see it on the model — that's exactly how it comes off the printer.",
    visualizerTitle: "Color visualizer",
    visualizerHint: "Click a slot, then a color from the palette. The model rotates — grab and drag it.",
    slotLabel: "Slot",
    swatchesTitle: "Filament palette",
    swatchesNote: "Our color stock keeps growing. Need a specific shade? We'll source it for your project.",
    materialsTitle: "Materials we print",
    materialNotes: [
      { name: "PLA", note: "all-rounder, best detail, models and figurines" },
      { name: "PETG", note: "tough, moisture-resistant, functional parts" },
      { name: "ABS", note: "heat-resistant, technical parts" },
      { name: "ASA", note: "UV- and weather-resistant, outdoor use" },
      { name: "TPU", note: "rubber-like flex, gaskets and dampers" },
      { name: "PC", note: "polycarbonate — very strong and heat-resistant" },
      { name: "PA", note: "nylon — abrasion-resistant, moving parts" },
      { name: "CF", note: "carbon-fiber reinforced — stiff and light" },
      { name: "GF", note: "glass-fiber reinforced — stiff, dimensionally stable" },
    ],
  },

  capabilities: {
    kicker: "Capabilities",
    title: "What we can do in the workshop",
    lead: "Concrete capabilities, not promises — what we actually deliver on every project.",
    items: [
      {
        name: "Multi-color printing",
        role: "Color",
        specs: [
          "Up to 4 colors in one print",
          "No hand-painting or gluing",
          "Automatic filament switching",
        ],
      },
      {
        name: "Large build area",
        role: "FDM printing",
        specs: [
          "Build volume up to 256 × 256 × 256 mm",
          "Enclosed chamber — reliable ABS, ASA, PC",
          "Materials from PLA to CF/GF composites",
        ],
      },
      {
        name: "3D scanning",
        role: "Digitization",
        specs: [
          "Structured light, accuracy down to 0.02 mm",
          "Objects up to ~1 m",
          "At our workshop or on-site at yours",
        ],
      },
    ],
    software: "Professional CAD modeling and 3D mesh processing",
  },

  estimator: {
    kicker: "Online quote",
    title: "Upload a model, see the price range",
    lead: "Your file is analyzed in your browser — it goes nowhere until you click “Send for an exact quote” yourself.",
    dropTitle: "Drop your file here",
    dropOr: "or",
    browse: "browse your disk",
    dropFormats: "STL · 3MF · OBJ · STEP — up to 50 MB",
    parsing: "Analyzing model…",
    parseError:
      "Couldn't read this file. Check that it's a valid STL, 3MF or OBJ — or send it through the form and we'll measure it manually.",
    stepNotice:
      "STEP files are quoted manually — the browser can't compute their volume. Click “Send for an exact quote” and we'll reply with a firm price.",
    fileTooLarge: "File is over 50 MB. Send it via the contact form instead.",
    unitsNote: "We assume the model is in millimetres.",
    dimensions: "Dimensions",
    volume: "Volume",
    triangles: "Triangles",
    controls: {
      material: "Material",
      colors: "Number of colors",
      colorsHint: "Multi-color in a single run — it's our specialty.",
      infill: "Infill",
      quantity: "Quantity",
    },
    result: {
      estimateLabel: "Estimated price",
      timeLabel: "Estimated print time",
      perPiece: "per piece",
      disclaimer:
        "This is an estimate, not a binding offer. The final price depends on supports, orientation and finishing — we confirm it before printing starts.",
      send: "Send for an exact quote",
      sent: "File attached to the form below — finish sending it there.",
    },
    emptyState:
      "Upload a model to see a 3D preview, dimensions and a price range here.",
    removeFile: "Remove file",
  },

  testimonials: {
    kicker: "Reviews",
    title: "What clients say",
    note: "",
    googleCta: "See our Google reviews",
    /** SAMPLE quotes — replace with real Google reviews before launch. */
    items: [
      {
        quote:
          "A knob snapped on a machine nobody services anymore. Two days later I had three spares — they fit better than the original.",
        author: "Workshop client, Kościan",
      },
      {
        quote:
          "The figurine made from our scan came out incredible. Wedding guests refused to believe it was printed.",
        author: "Private client, Leszno",
      },
      {
        quote:
          "They came to the plant with the scanner and digitized our tooling on the spot. A week later we had the CAD models.",
        author: "Manufacturing company, Poznań",
      },
    ],
  },

  faq: {
    kicker: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "How much does 3D printing cost?",
        a: "The simplest prints start at 30 PLN. Price depends on material volume, color count and print time. The fastest way to check is our online quote — upload a file and see the range instantly.",
      },
      {
        q: "I don't have a 3D file — just a physical object. Now what?",
        a: "That's our specialty. We scan the object with a structured-light scanner and turn the scan into a printable model. Bring the object to us, or book an on-site scan.",
      },
      {
        q: "How does on-site scanning work?",
        a: "We come to your home, workshop or company with a portable scanner — we cover Kościan and the surrounding area, and the whole Wielkopolska region by appointment. We scan objects up to about 1 metre. Book a date through the contact form.",
      },
      {
        q: "Which file formats do you accept?",
        a: "STL, 3MF, OBJ and STEP. If all you have is photos, a sketch or the object itself — we can work with that too; that's what the scanner and CAD are for.",
      },
      {
        q: "How long does an order take?",
        a: "Typically 2–5 business days from quote approval. Simple prints are often ready the next day. Projects involving scanning and modeling are scheduled individually.",
      },
      {
        q: "Do you print in resin or metal?",
        a: "No — we work in FDM and we're upfront about it. What we do print is a broad range of materials: PLA, PETG, ABS, ASA, TPU, PC, nylon (PA) and carbon- (CF) and glass-fiber (GF) reinforced composites — plus up to 4 colors in a single run, which almost nobody nearby offers.",
      },
      {
        q: "Will the print be strong enough?",
        a: "Yes, if the material matches the job: PETG for mechanical parts, ABS for heat exposure, TPU where flexibility is needed. We'll advise during the quote.",
      },
      {
        q: "Can I order just one piece?",
        a: "Absolutely. 3D printing needs no molds and no minimum runs — one figurine or one replacement part is a normal order. Per-piece price drops on larger batches.",
      },
    ],
  },

  contact: {
    kicker: "Contact",
    title: "Get a quote or book a scan",
    lead: "We reply on business days, usually the same day. Describe what you want printed or scanned — attach a file or a photo if you have one.",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      topic: "Topic",
      topics: {
        print: "3D printing quote",
        scan: "Scanning / reverse engineering",
        onsite: "On-site scanning — booking",
        other: "Something else",
      },
      date: "Preferred date",
      area: "Scanning location / address",
      areaPlaceholder: "e.g. Kościan, …",
      message: "Message",
      messagePlaceholder:
        "Describe the object or project: dimensions, material, quantity, deadline…",
      file: "Attachment (3D model or photo)",
      fileFormats: "STL, 3MF, OBJ, STEP, JPG, PNG — up to 50 MB",
      fileAttached: "Attached file",
      consent:
        "I consent to the processing of my data for the purpose of answering this inquiry (GDPR).",
      submit: "Send inquiry",
      submitting: "Sending…",
      success:
        "Thank you! Your inquiry arrived — we'll get back to you within one business day.",
      demoNotice:
        "Demo mode: the form backend (Formspree) isn't configured yet. The message was not sent.",
      error:
        "The form couldn't be sent. Try again, or email us directly at",
      required: "Required field",
      invalidEmail: "Enter a valid email address",
      quoteParams: "Quote parameters",
    },
    info: {
      title: "Contact details",
      serviceArea: "Service area",
      serviceAreaValue:
        "Kościan & Wielkopolska for on-site scanning; prints ship across Poland and the EU",
      hoursTitle: "Opening hours",
      hours: ["Mon–Fri 9:00–18:00", "Sat 10:00–14:00"],
      mapTitle: "Map — Kościan and surrounding area",
    },
  },

  footer: {
    tagline: "We scan. We model. We print — in color.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    servicesLinks: [
      "Multi-color FDM printing",
      "On-site 3D scanning",
      "Reverse engineering",
      "Prototyping",
      "Figurines & gifts",
      "CAD consulting",
    ],
    newsletterTitle: "Workshop news",
    newsletterLead: "New materials, projects and offers. Zero spam.",
    newsletterPlaceholder: "Your email",
    newsletterCta: "Subscribe",
    newsletterSuccess: "Subscribed! Talk soon.",
    paymentsTitle: "Payments",
    legalLine: "Copy Paste 3D · NIP {nip} · REGON {regon}",
    copyright: "© {year} Copy Paste 3D, Kościan, Poland. All rights reserved.",
    socialLabel: "Find us",
    privacy: "Privacy policy",
  },
  privacy: {
    backHome: "Back to homepage",
  },
};

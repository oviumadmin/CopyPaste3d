import type { Dictionary } from "./pl";

/**
 * German dictionary — tertiary locale. Must satisfy the Dictionary type
 * derived from pl.ts, so missing keys fail the build. Formal address ("Sie").
 */

export const de: Dictionary = {
  meta: {
    title: "Copy Paste 3D — 3D-Scan & 3D-Druck | Kościan, Polen",
    description:
      "Wir scannen Ihr Objekt und drucken eine originalgetreue Kopie — oder eine genau nach Ihren Wünschen angepasste Version. Mehrfarbiger FDM-Druck, 3D-Scan, Reverse Engineering und Prototypen. Sitz in Kościan, Polen; wir bedienen die Region und Kunden aus der EU.",
    ogAlt: "Copy Paste 3D — Scan und 3D-Druck in Kościan, Polen",
  },

  announcement: {
    messages: [
      "Standardlaufzeit: 2–5 Werktage",
      "3D-Scan bis 0,02 mm — Objekte bis 2 m",
      "Mehrfarbdruck — bis zu 4 Farben in einem Druck",
    ],
  },

  nav: {
    services: "Leistungen",
    portfolio: "Portfolio",
    materials: "Materialien",
    estimator: "Angebot",
    faq: "FAQ",
    contact: "Kontakt",
    getQuote: "Angebot anfordern",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    switchToLight: "Zum hellen Design wechseln",
    switchToDark: "Zum dunklen Design wechseln",
    languageLabel: "Sprache der Website",
    skipToContent: "Zum Inhalt springen",
  },

  hero: {
    kicker: "Scannen · Modellieren · 3D-Druck",
    title: "Ihr Objekt, in 3D reproduziert",
    lead: "Wir scannen ein physisches Objekt, bauen es digital nach und drucken seine Kopie — originalgetreu oder genau nach Ihren Wünschen angepasst. Von der einzelnen Figur bis zur Teileserie.",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Unsere Arbeiten ansehen",
    scanLabel: "Scan",
    printLabel: "Druck",
    animationAlt:
      "Animation: Ein Objekt wird von einem Scanstrahl erfasst, während daneben Schicht für Schicht seine gedruckte Kopie entsteht",
  },

  differentiators: {
    kicker: "Was uns auszeichnet",
    items: [
      {
        title: "Mehrfarbdruck in einem Durchgang",
        body: "Wir drucken bis zu 4 Farben in einem Auftrag — ohne Bemalen, ohne Kleben. Logos, Beschriftungen und Details kommen direkt aus dem Drucker.",
      },
      {
        title: "Hochdetaillierter 3D-Scan",
        body: "Ein Vierlinsen-Streifenlichtscanner erfasst Objekte von ~10 mm bis ~2 m mit Details bis 0,02 mm — fein genug für verschlissene Teile und filigrane Oberflächen.",
      },
    ],
  },

  services: {
    kicker: "Leistungen",
    title: "Vom Scan zum fertigen Teil",
    lead: "Sechs Leistungen, eine Werkstatt. Wählen Sie, was Sie brauchen — oder beschreiben Sie das Problem, und wir finden den Weg.",
    imagePlaceholder: "Bildplatz",
    items: [
      {
        title: "Mehrfarbiger FDM-Druck",
        body: "Funktionsteile und Schaustücke aus PLA, PETG, ABS, ASA, TPU, PC, Nylon und faserverstärkten Verbundwerkstoffen (CF/GF) — bis zu 4 Farben in einem Durchgang.",
        example: "Beispiel: Werkzeugmarkierung mit kontrastreicher Beschriftung",
      },
      {
        title: "3D-Scan",
        body: "Ein Vierlinsen-Streifenlichtscanner digitalisiert Objekte von ~10 mm bis ~2 m mit einer Genauigkeit bis 0,02 mm. Bringen Sie Ihr Objekt in unsere Werkstatt in Kościan.",
        example: "Beispiel: Gussteil, vor der Rekonstruktion gescannt",
      },
      {
        title: "Reverse Engineering & CAD",
        body: "Aus Scans erstellen wir saubere CAD-Modelle: bemaßt, bearbeitbar, produktionsreif. Wir reproduzieren Teile, die niemand mehr herstellt.",
        example: "Beispiel: Ersatz für einen gerissenen Maschinengriff",
      },
      {
        title: "Rapid Prototyping",
        body: "Iterationen in Tagen, nicht Wochen. Konzeptdruck am Vormittag, Überarbeitungen am Nachmittag, nächste Version am Folgetag.",
        example: "Beispiel: drei Iterationen eines Elektronikgehäuses",
      },
      {
        title: "Individuelle Figuren & personalisierte Geschenke",
        body: "Ein Scan einer Person, eines Haustiers oder eines Lieblingsobjekts — als vollfarbige Miniatur. Ein Geschenk, das es in keinem Laden gibt.",
        example: "Beispiel: Brautpaar-Figur für die Hochzeitstorte",
      },
      {
        title: "CAD-Beratung & Modellvorbereitung",
        body: "Ein Modell, das nicht druckbar ist? Wir reparieren Meshes, stellen Toleranzen und Ausrichtung ein und beraten zu Materialien.",
        example: "Beispiel: STL-Mesh-Reparatur an einem heruntergeladenen Modell",
      },
    ],
  },

  process: {
    kicker: "So arbeiten wir",
    title: "Vier Schritte vom Original zur Kopie",
    steps: [
      {
        name: "Scannen",
        body: "Wir scannen Ihr Objekt mit Streifenlicht in unserer Werkstatt. Es entsteht eine dichte Punktwolke, die die Geometrie originalgetreu erfasst.",
      },
      {
        name: "Modellieren",
        body: "Wir bereinigen den Scan und bauen daraus ein Modell: eine originalgetreue Kopie oder eine Version mit Änderungen — neu skaliert, mit repariertem Riss, mit ergänzter Halterung.",
      },
      {
        name: "Drucken",
        body: "Wir drucken im FDM-Verfahren, bei Bedarf in mehreren Farben gleichzeitig. Material, Füllung und Ausrichtung wählen wir passend zur Aufgabe des Teils.",
      },
      {
        name: "Finish",
        body: "Wir entfernen Stützen, glätten Oberflächen und prüfen die Maße. Sie erhalten ein einsatzbereites Teil — persönlich oder per Kurier.",
      },
    ],
  },

  portfolio: {
    kicker: "Portfolio",
    title: "Sehen Sie, was wir bisher kopiert haben",
    lead: "Nach Kategorie filtern. Mit dem 3D-Symbol markierte Stücke öffnen sich in einem interaktiven Viewer, den Sie selbst drehen können.",
    filterAll: "Alle",
    categories: {
      figurines: "Figuren",
      parts: "Teile",
      prototypes: "Prototypen",
      repairs: "Reparaturen",
      scans: "Scans",
    },
    open3d: "In 3D ansehen",
    openCompare: "Vergleich: Original / Druck",
    photoPlaceholder: "Platz für Projektfoto",
    viewerHint: "Ziehen zum Drehen · Scrollen zum Zoomen",
    compareHint: "Regler ziehen zum Vergleichen",
    compareBefore: "Original",
    compareAfter: "Druck",
    close: "Schließen",
    items: [
      {
        title: "Brautpaar-Figur — Hochzeitsgeschenk",
        blurb: "Scan von zwei Personen, 15 cm Mehrfarbdruck.",
      },
      {
        title: "Hebelgriff — Verpackungsmaschine",
        blurb: "Per Reverse Engineering aus einem gerissenen Teil, PETG, Serie von 8 Stück.",
      },
      {
        title: "Controller-Gehäuse — Prototyp",
        blurb: "Drei Iterationen in einer Woche, schraubenloses Snap-Fit-Design.",
      },
      {
        title: "Individuelle Schelle — CAD-Modellierung",
        blurb: "Von Grund auf in Fusion 360 konstruiert, bereit für einen passgenauen Druck.",
      },
      {
        title: "3D-Scan — Maschinenteil",
        blurb: "Ein Gussteil aus Metall, digitalisiert und als wasserdichtes, druckfertiges Modell rekonstruiert.",
      },
      {
        title: "Zweifarbiges Teil, kein Lackieren",
        blurb: "Türkis und Orange in einem Druck — die Farbe kommt aus dem Drucker, nicht aus der Lackierkabine.",
      },
    ],
  },

  materials: {
    kicker: "Materialien & Farben",
    title: "Wir drucken Farbe, wir lackieren sie nicht",
    lead: "Wir führen bis zu 4 Filamente in einen einzigen Druck. Wählen Sie unten eine Kombination und sehen Sie sie am Modell — genau so kommt sie aus dem Drucker.",
    visualizerTitle: "Farbvisualizer",
    visualizerHint: "Klicken Sie auf einen Slot, dann auf eine Farbe aus der Palette. Das Modell dreht sich — greifen und ziehen Sie es.",
    slotLabel: "Slot",
    swatchesTitle: "Filament-Palette",
    swatchesNote: "Unser Farbsortiment wächst stetig. Brauchen Sie einen bestimmten Farbton? Wir beschaffen ihn für Ihr Projekt.",
    materialsTitle: "Materialien, die wir drucken",
    materialNotes: [
      { name: "PLA", note: "Allrounder, beste Detailtreue, Modelle und Figuren" },
      { name: "PETG", note: "robust, feuchtigkeitsbeständig, Funktionsteile" },
      { name: "ABS", note: "hitzebeständig, technische Teile" },
      { name: "ASA", note: "UV- und witterungsbeständig, für den Außeneinsatz" },
      { name: "TPU", note: "gummiartig flexibel, Dichtungen und Dämpfer" },
      { name: "PC", note: "Polycarbonat — sehr fest und hitzebeständig" },
      { name: "PA", note: "Nylon — abriebfest, bewegliche Teile" },
      { name: "CF", note: "carbonfaserverstärkt — steif und leicht" },
      { name: "GF", note: "glasfaserverstärkt — steif, formstabil" },
    ],
  },

  capabilities: {
    kicker: "Möglichkeiten",
    title: "Was wir in der Werkstatt leisten",
    lead: "Konkrete Möglichkeiten, keine Versprechen — was wir bei jedem Projekt tatsächlich liefern.",
    items: [
      {
        name: "Mehrfarbdruck",
        role: "Farbe",
        specs: [
          "Bis zu 4 Farben in einem Druck",
          "Kein Bemalen, kein Kleben",
          "Automatischer Filamentwechsel",
        ],
      },
      {
        name: "Großer Bauraum",
        role: "FDM-Druck",
        specs: [
          "Bauvolumen bis 256 × 256 × 256 mm",
          "Geschlossene Kammer — zuverlässig bei ABS, ASA, PC",
          "Materialien von PLA bis CF/GF-Verbund",
        ],
      },
      {
        name: "3D-Scan",
        role: "Digitalisierung",
        specs: [
          "Vierlinsen-Streifenlichtscanner",
          "Objekte von ~10 mm bis ~2 m",
          "Genauigkeit bis 0,02 mm",
        ],
      },
    ],
    software: "Professionelle CAD-Modellierung und 3D-Mesh-Bearbeitung",
  },

  estimator: {
    kicker: "Online-Angebot",
    title: "Modell hochladen, Preisspanne sehen",
    lead: "Ihre Datei wird in Ihrem Browser analysiert — sie wird nirgendwohin gesendet, bis Sie selbst auf „Für ein genaues Angebot senden“ klicken.",
    dropTitle: "Datei hier ablegen",
    dropOr: "oder",
    browse: "von Ihrer Festplatte wählen",
    dropFormats: "STL · 3MF · OBJ · STEP — bis 50 MB",
    parsing: "Modell wird analysiert…",
    parseError:
      "Diese Datei konnte nicht gelesen werden. Prüfen Sie, ob es eine gültige STL-, 3MF- oder OBJ-Datei ist — oder senden Sie sie über das Formular, und wir vermessen sie manuell.",
    stepNotice:
      "STEP-Dateien werden manuell kalkuliert — der Browser kann ihr Volumen nicht berechnen. Klicken Sie auf „Für ein genaues Angebot senden“, und wir melden uns mit einem verbindlichen Preis.",
    fileTooLarge: "Die Datei ist größer als 50 MB. Senden Sie sie stattdessen über das Kontaktformular.",
    unitsNote: "Wir gehen davon aus, dass das Modell in Millimetern vorliegt.",
    dimensions: "Abmessungen",
    volume: "Volumen",
    triangles: "Dreiecke",
    controls: {
      material: "Material",
      colors: "Anzahl der Farben",
      colorsHint: "Mehrfarbig in einem Durchgang — das ist unsere Spezialität.",
      infill: "Füllung",
      quantity: "Stückzahl",
    },
    result: {
      estimateLabel: "Geschätzter Preis",
      timeLabel: "Geschätzte Druckzeit",
      perPiece: "pro Stück",
      disclaimer:
        "Dies ist eine Schätzung, kein verbindliches Angebot. Der Endpreis hängt von Stützen, Ausrichtung und Nachbearbeitung ab — wir bestätigen ihn, bevor der Druck beginnt.",
      send: "Für ein genaues Angebot senden",
      sent: "Datei an das Formular unten angehängt — schließen Sie den Versand dort ab.",
    },
    emptyState:
      "Laden Sie ein Modell hoch, um hier eine 3D-Vorschau, Abmessungen und eine Preisspanne zu sehen.",
    removeFile: "Datei entfernen",
  },

  testimonials: {
    kicker: "Bewertungen",
    title: "Was Kunden sagen",
    note: "",
    googleCta: "Unsere Google-Bewertungen ansehen",
    /** SAMPLE quotes — replace with real Google reviews before launch. */
    items: [
      {
        quote:
          "An einer Maschine, die niemand mehr wartet, ist ein Knopf abgebrochen. Zwei Tage später hatte ich drei Ersatzteile — sie passen besser als das Original.",
        author: "Werkstattkunde, Kościan",
      },
      {
        quote:
          "Die Figur aus unserem Scan ist unglaublich geworden. Die Hochzeitsgäste wollten nicht glauben, dass sie gedruckt war.",
        author: "Privatkunde, Leszno",
      },
      {
        quote:
          "Wir haben unsere Vorrichtungen zum Scannen vorbeigebracht. Eine Woche später hatten wir die CAD-Modelle.",
        author: "Produktionsunternehmen, Poznań",
      },
    ],
  },

  faq: {
    kicker: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        q: "Was kostet 3D-Druck?",
        a: "Die einfachsten Drucke beginnen bei 30 PLN. Der Preis hängt vom Materialvolumen, der Anzahl der Farben und der Druckzeit ab. Am schnellsten prüfen Sie es mit unserem Online-Angebot — Datei hochladen und sofort die Spanne sehen.",
      },
      {
        q: "Ich habe keine 3D-Datei — nur ein physisches Objekt. Was nun?",
        a: "Das ist unsere Spezialität. Wir scannen das Objekt mit einem Streifenlichtscanner und machen aus dem Scan ein druckbares Modell. Bringen Sie das Objekt in unsere Werkstatt in Kościan, den Rest übernehmen wir.",
      },
      {
        q: "Welche Objektgrößen können Sie scannen?",
        a: "Von kleinen Teilen ab etwa 10 mm bis zu großen Objekten von rund 2 m, mit Details bis 0,02 mm — mit einem Vierlinsen-Streifenlichtscanner. Bringen Sie das Objekt in unsere Werkstatt in Kościan, um den Rest kümmern wir uns.",
      },
      {
        q: "Welche Dateiformate akzeptieren Sie?",
        a: "STL, 3MF, OBJ und STEP. Wenn Sie nur Fotos, eine Skizze oder das Objekt selbst haben — auch damit können wir arbeiten; genau dafür sind Scanner und CAD da.",
      },
      {
        q: "Wie lange dauert ein Auftrag?",
        a: "In der Regel 2–5 Werktage ab Freigabe des Angebots. Einfache Drucke sind oft am nächsten Tag fertig. Projekte mit Scan und Modellierung planen wir individuell.",
      },
      {
        q: "Drucken Sie in Resin oder Metall?",
        a: "Nein — wir arbeiten im FDM-Verfahren und sagen das offen. Wir drucken dafür eine breite Materialpalette: PLA, PETG, ABS, ASA, TPU, PC, Nylon (PA) sowie carbon- (CF) und glasfaserverstärkte (GF) Verbundwerkstoffe — plus bis zu 4 Farben in einem Durchgang, was in der Umgebung fast niemand anbietet.",
      },
      {
        q: "Wird der Druck stabil genug sein?",
        a: "Ja, wenn das Material zur Aufgabe passt: PETG für mechanische Teile, ABS für Hitzeeinwirkung, TPU, wo Flexibilität gefragt ist. Wir beraten Sie beim Angebot.",
      },
      {
        q: "Kann ich nur ein einzelnes Stück bestellen?",
        a: "Selbstverständlich. 3D-Druck braucht keine Formen und keine Mindestmengen — eine Figur oder ein Ersatzteil ist ein ganz normaler Auftrag. Bei größeren Serien sinkt der Stückpreis.",
      },
    ],
  },

  contact: {
    kicker: "Kontakt",
    title: "Angebot anfordern oder Scan buchen",
    lead: "Wir antworten an Werktagen, meist am selben Tag. Beschreiben Sie, was Sie drucken oder scannen möchten — hängen Sie eine Datei oder ein Foto an, falls vorhanden.",
    form: {
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon (optional)",
      topic: "Thema",
      topics: {
        print: "3D-Druck-Angebot",
        scan: "Scan / Reverse Engineering",
        other: "Etwas anderes",
      },
      message: "Nachricht",
      messagePlaceholder:
        "Beschreiben Sie das Objekt oder Projekt: Abmessungen, Material, Stückzahl, Termin…",
      file: "Anhang (3D-Modell oder Foto)",
      fileFormats: "STL, 3MF, OBJ, STEP, JPG, PNG — bis 50 MB",
      fileAttached: "Angehängte Datei",
      consent:
        "Ich willige in die Verarbeitung meiner Daten zur Beantwortung dieser Anfrage ein (DSGVO).",
      submit: "Anfrage senden",
      submitting: "Wird gesendet…",
      success:
        "Vielen Dank! Ihre Anfrage ist eingegangen — wir melden uns innerhalb eines Werktags.",
      demoNotice:
        "Demomodus: Das Formular-Backend (Formspree) ist noch nicht konfiguriert. Die Nachricht wurde nicht gesendet.",
      error:
        "Das Formular konnte nicht gesendet werden. Versuchen Sie es erneut oder schreiben Sie uns direkt an",
      required: "Pflichtfeld",
      invalidEmail: "Geben Sie eine gültige E-Mail-Adresse ein",
      quoteParams: "Angebotsparameter",
    },
    info: {
      title: "Kontaktdaten",
      serviceArea: "Einzugsgebiet",
      serviceAreaValue:
        "Sitz in Kościan — Objekte bringen Sie in unsere Werkstatt; Drucke versenden wir in ganz Polen und die EU",
      hoursTitle: "Öffnungszeiten",
      hours: ["Mo–Fr 9:00–18:00", "Sa 10:00–14:00"],
      mapTitle: "Karte — Kościan und Umgebung",
    },
  },

  footer: {
    tagline: "Wir scannen. Wir modellieren. Wir drucken — in Farbe.",
    navTitle: "Navigation",
    servicesTitle: "Leistungen",
    servicesLinks: [
      "Mehrfarbiger FDM-Druck",
      "3D-Scan",
      "Reverse Engineering",
      "Prototyping",
      "Figuren & Geschenke",
      "CAD-Beratung",
    ],
    newsletterTitle: "Neues aus der Werkstatt",
    newsletterLead: "Neue Materialien, Projekte und Angebote. Kein Spam.",
    newsletterPlaceholder: "Ihre E-Mail",
    newsletterCta: "Abonnieren",
    newsletterSuccess: "Abonniert! Bis bald.",
    paymentsTitle: "Zahlungen",
    legalLine: "Copy Paste 3D · NIP {nip} · REGON {regon}",
    copyright: "© {year} Copy Paste 3D, Kościan, Polen. Alle Rechte vorbehalten.",
    socialLabel: "Finden Sie uns",
    privacy: "Datenschutzerklärung",
  },
  privacy: {
    backHome: "Zurück zur Startseite",
  },
};

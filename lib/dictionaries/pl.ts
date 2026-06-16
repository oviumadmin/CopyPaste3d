/**
 * Polish dictionary — the PRIMARY locale and the source of truth for the
 * Dictionary type. Every user-facing string on the site lives here or in en.ts.
 */

export const pl = {
  meta: {
    title: "Copy Paste 3D — Skanowanie i druk 3D | Kościan, Wielkopolska",
    description:
      "Skanujemy Twój przedmiot i drukujemy jego wierną kopię — albo dowolnie zmienioną wersję. Wielokolorowy druk FDM, skanowanie 3D, inżynieria odwrotna i prototypy. Kościan i cała Wielkopolska.",
    ogAlt: "Copy Paste 3D — skan i druk 3D w Kościanie",
  },

  announcement: {
    messages: [
      "Standardowa realizacja: 2–5 dni roboczych",
      "Skanowanie 3D z detalem do 0,02 mm — obiekty do 2 m",
      "Druk wielokolorowy — do 4 kolorów w jednym wydruku",
    ],
  },

  nav: {
    services: "Usługi",
    portfolio: "Realizacje",
    materials: "Materiały",
    estimator: "Wycena",
    faq: "FAQ",
    contact: "Kontakt",
    getQuote: "Wyceń projekt",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    switchToLight: "Przełącz na jasny motyw",
    switchToDark: "Przełącz na ciemny motyw",
    languageLabel: "Język strony",
    skipToContent: "Przejdź do treści",
  },

  hero: {
    kicker: "Skanowanie · Modelowanie · Druk 3D",
    title: "Twój przedmiot, odwzorowany w 3D",
    lead: "Skanujemy fizyczny obiekt, odtwarzamy go cyfrowo i drukujemy jego kopię — wierną albo zmienioną dokładnie tak, jak potrzebujesz. Od pojedynczej figurki po serię części.",
    ctaPrimary: "Wyceń projekt",
    ctaSecondary: "Zobacz realizacje",
    scanLabel: "skan",
    printLabel: "wydruk",
    animationAlt:
      "Animacja: przedmiot jest skanowany wiązką światła, a obok warstwa po warstwie powstaje jego drukowana kopia",
    trust: {
      turnaround: "Realizacja 2–5 dni roboczych",
      location: "Kościan, Wielkopolska",
      materials: "PLA · PETG · ABS · PC · PA · CF/GF",
      privacy: "Twój plik zostaje u Ciebie",
    },
  },

  differentiators: {
    kicker: "Czym się wyróżniamy",
    items: [
      {
        title: "Druk wielokolorowy w jednym przebiegu",
        body: "Drukujemy do 4 kolorów w jednym przebiegu — bez ręcznego malowania i bez sklejania. Logo, oznaczenia i detale wychodzą prosto z druku.",
      },
      {
        title: "Skanowanie 3D z dużym detalem",
        body: "Czteroobiektywowy skaner światła strukturalnego obejmuje obiekty od ok. 10 mm do ok. 2 m, z detalem do 0,02 mm — wystarczająco dokładnie dla zużytych części i misternych powierzchni.",
      },
    ],
  },

  services: {
    kicker: "Usługi",
    title: "Od skanu do gotowej części",
    lead: "Sześć usług, jeden warsztat. Wybierz to, czego potrzebujesz — albo opisz problem, a my dobierzemy drogę.",
    imagePlaceholder: "Miejsce na zdjęcie",
    items: [
      {
        title: "Wielokolorowy druk FDM",
        body: "Funkcjonalne części i ozdobne wydruki w PLA, PETG, ABS, ASA, TPU, PC, nylonie i kompozytach z włóknem (CF/GF) — do 4 kolorów w jednym przebiegu.",
        example: "Przykład: znacznik narzędziowy z kontrastowym opisem",
      },
      {
        title: "Skanowanie 3D",
        body: "Czteroobiektywowy skaner światła strukturalnego digitalizuje obiekty od ok. 10 mm do ok. 2 m z dokładnością do 0,02 mm. Przedmiot przywieź do naszego warsztatu w Kościanie.",
        example: "Przykład: skan odlewu przed rekonstrukcją",
      },
      {
        title: "Inżynieria odwrotna i CAD",
        body: "Ze skanu robimy poprawny model CAD: wymiarowany, edytowalny, gotowy do produkcji. Odtwarzamy części, których nikt już nie produkuje.",
        example: "Przykład: zamiennik pękniętego uchwytu maszyny",
      },
      {
        title: "Szybkie prototypowanie",
        body: "Iteracje w dni, nie tygodnie. Wydruk koncepcyjny rano, poprawki po południu, kolejna wersja następnego dnia.",
        example: "Przykład: trzy iteracje obudowy elektroniki",
      },
      {
        title: "Figurki i prezenty personalizowane",
        body: "Skan osoby, zwierzaka albo ulubionego przedmiotu — i jego miniatura w pełnym kolorze. Prezent, którego nie kupisz w sklepie.",
        example: "Przykład: figurka pary na tort weselny",
      },
      {
        title: "Konsultacje CAD i przygotowanie modeli",
        body: "Masz model, który nie chce się drukować? Naprawiamy siatki, dobieramy tolerancje i orientację, doradzamy materiał.",
        example: "Przykład: naprawa siatki STL z pobranego modelu",
      },
    ],
  },

  process: {
    kicker: "Jak pracujemy",
    title: "Cztery kroki od oryginału do kopii",
    steps: [
      {
        name: "Skan",
        body: "Skanujemy Twój przedmiot światłem strukturalnym w naszym warsztacie. Powstaje gęsta chmura punktów wiernie oddająca geometrię.",
      },
      {
        name: "Model",
        body: "Czyścimy skan i budujemy z niego model: wierną kopię albo wersję ze zmianami — inną skalą, naprawionym pęknięciem, dodanym mocowaniem.",
      },
      {
        name: "Druk",
        body: "Drukujemy w FDM, w razie potrzeby w kilku kolorach naraz. Dobieramy materiał, wypełnienie i orientację pod funkcję części.",
      },
      {
        name: "Wykończenie",
        body: "Usuwamy podpory, wygładzamy, sprawdzamy wymiary. Odbierasz część gotową do użycia — osobiście albo wysyłką.",
      },
    ],
  },

  portfolio: {
    kicker: "Realizacje",
    title: "Zobacz, co już skopiowaliśmy",
    lead: "Realizacje oznaczone ikoną 3D obejrzysz w interaktywnym podglądzie i obrócisz samodzielnie.",
    filterAll: "Wszystkie",
    categories: {
      figurines: "Figurki",
      parts: "Części",
      prototypes: "Prototypy",
      repairs: "Naprawy",
      scans: "Skany",
    },
    open3d: "Obejrzyj w 3D",
    openCompare: "Porównaj: oryginał / wydruk",
    photoPlaceholder: "Miejsce na zdjęcie realizacji",
    viewerHint: "Przeciągnij, aby obracać · scroll, aby przybliżyć",
    compareHint: "Przesuń suwak, aby porównać",
    compareBefore: "Oryginał",
    compareAfter: "Wydruk",
    close: "Zamknij",
    items: [
      {
        title: "Figurka pary — prezent ślubny",
        blurb: "Skan dwóch osób, wydruk wielokolorowy 15 cm.",
      },
      {
        title: "Uchwyt dźwigni — maszyna pakująca",
        blurb: "Inżynieria odwrotna pękniętej części, PETG, seria 8 szt.",
      },
      {
        title: "Obudowa kontrolera — prototyp",
        blurb: "Trzy iteracje w tydzień, zatrzaski bez śrub.",
      },
      {
        title: "Indywidualny uchwyt — modelowanie CAD",
        blurb: "Zaprojektowany od zera w Fusion 360, gotowy do wydruku z idealnym pasowaniem.",
      },
      {
        title: "Skan 3D — część maszyny",
        blurb: "Metalowy odlew zdigitalizowany i odtworzony jako szczelny model gotowy do druku.",
      },
      {
        title: "Dwa kolory, zero malowania",
        blurb: "Turkus i pomarańcz w jednym wydruku — kolor schodzi z drukarki, nie z lakierni.",
      },
    ],
  },

  materials: {
    kicker: "Materiały i kolory",
    title: "Kolor drukujemy, nie malujemy",
    lead: "Drukujemy w FDM z szerokiej gamy materiałów — do 4 kolorów w jednym przebiegu, prosto z druku, bez malowania.",
    visualizerTitle: "Wizualizer kolorów",
    visualizerHint: "Kliknij slot, potem kolor z palety. Model obraca się — złap i przeciągnij.",
    slotLabel: "Slot",
    swatchesTitle: "Paleta filamentów",
    swatchesNote: "Stale rozbudowujemy magazyn kolorów. Potrzebujesz konkretnego odcienia? Sprowadzimy go pod Twój projekt.",
    materialsTitle: "Materiały, które drukujemy",
    materialNotes: [
      { name: "PLA", note: "uniwersalny, najlepsze detale, modele i figurki" },
      { name: "PETG", note: "wytrzymały, odporny na wilgoć, części użytkowe" },
      { name: "ABS", note: "odporny na temperaturę, części techniczne" },
      { name: "ASA", note: "odporny na UV i pogodę, zastosowania zewnętrzne" },
      { name: "TPU", note: "elastyczny jak guma, uszczelki i amortyzacja" },
      { name: "PC", note: "poliwęglan — bardzo wytrzymały i termoodporny" },
      { name: "PA", note: "nylon — odporny na ścieranie, elementy ruchome" },
      { name: "CF", note: "wzmocnienie włóknem węglowym — sztywny i lekki" },
      { name: "GF", note: "wzmocnienie włóknem szklanym — sztywny, stabilny wymiarowo" },
    ],
  },

  capabilities: {
    kicker: "Możliwości",
    title: "Co potrafimy w warsztacie",
    lead: "Konkretne możliwości, nie obietnice — tyle realnie dowieziemy w każdym projekcie.",
    items: [
      {
        name: "Druk wielokolorowy",
        role: "Kolor",
        specs: [
          "Do 4 kolorów w jednym wydruku",
          "Bez ręcznego malowania i sklejania",
          "Automatyczna zmiana filamentu",
        ],
      },
      {
        name: "Duże pole robocze",
        role: "Druk FDM",
        specs: [
          "Obszar do 256 × 256 × 256 mm",
          "Zamknięta komora — stabilne ABS, ASA, PC",
          "Materiały od PLA po kompozyty CF/GF",
        ],
      },
      {
        name: "Skanowanie 3D",
        role: "Digitalizacja",
        specs: [
          "Czteroobiektywowy skaner światła strukturalnego",
          "Obiekty od ok. 10 mm do ok. 2 m",
          "Dokładność do 0,02 mm",
        ],
      },
    ],
    software: "Profesjonalne modelowanie CAD i obróbka siatek 3D",
  },

  estimator: {
    kicker: "Wycena online",
    title: "Wgraj model, poznaj widełki ceny",
    lead: "Plik analizujemy w Twojej przeglądarce — nigdzie go nie wysyłamy, dopóki sam nie klikniesz „Wyślij do dokładnej wyceny”.",
    dropTitle: "Przeciągnij plik tutaj",
    dropOr: "albo",
    browse: "wybierz z dysku",
    dropFormats: "STL · 3MF · OBJ · STEP — do 50 MB",
    parsing: "Analizuję model…",
    parseError:
      "Nie udało się odczytać tego pliku. Sprawdź, czy to poprawny STL, 3MF lub OBJ — albo wyślij go nam przez formularz, policzymy ręcznie.",
    stepNotice:
      "Pliki STEP wyceniamy ręcznie — przeglądarka nie policzy ich objętości. Kliknij „Wyślij do dokładnej wyceny”, a odezwiemy się z konkretną ceną.",
    fileTooLarge: "Plik jest większy niż 50 MB. Wyślij go nam przez formularz kontaktowy.",
    unitsNote: "Przyjmujemy, że model jest w milimetrach.",
    dimensions: "Wymiary",
    volume: "Objętość",
    triangles: "Trójkąty",
    controls: {
      material: "Materiał",
      colors: "Liczba kolorów",
      colorsHint: "Druk wielokolorowy w jednym przebiegu — to nasz konik.",
      infill: "Wypełnienie",
      quantity: "Ilość sztuk",
      currency: "Waluta",
    },
    result: {
      estimateLabel: "Szacunkowa cena",
      timeLabel: "Szacowany czas druku",
      perPiece: "za sztukę",
      disclaimer:
        "To szacunek, nie wiążąca oferta. Ostateczna cena zależy od podpór, orientacji i wykończenia — potwierdzimy ją przed startem druku.",
      send: "Wyślij do dokładnej wyceny",
      sent: "Plik podpięty do formularza poniżej — dokończ wysyłkę.",
    },
    emptyState:
      "Po wgraniu modelu zobaczysz tu podgląd 3D, wymiary i widełki ceny.",
    removeFile: "Usuń plik",
  },

  testimonials: {
    kicker: "Opinie",
    title: "Co mówią klienci",
    note: "", // reserved
    googleCta: "Zobacz opinie w Google",
    /** SAMPLE quotes — replace with real Google reviews before launch. */
    items: [
      {
        quote:
          "Pękło pokrętło w maszynie, której nikt już nie serwisuje. Po dwóch dniach miałem trzy zapasowe — pasują lepiej niż oryginał.",
        author: "Klient warsztatowy, Kościan",
      },
      {
        quote:
          "Figurka z naszego skanu wyszła niesamowicie. Goście na weselu nie wierzyli, że to wydruk.",
        author: "Klientka indywidualna, Leszno",
      },
      {
        quote:
          "Przyjechali ze skanerem do zakładu, zeskanowali oprzyrządowanie na miejscu. Tydzień później mieliśmy modele CAD.",
        author: "Firma produkcyjna, Poznań",
      },
    ],
  },

  faq: {
    kicker: "FAQ",
    title: "Częste pytania",
    items: [
      {
        q: "Ile kosztuje druk 3D?",
        a: "Najprostsze wydruki zaczynają się od 30 zł. Cena zależy od objętości materiału, liczby kolorów i czasu druku. Najszybciej sprawdzisz to w naszej wycenie online — wgraj plik i zobacz widełki od razu.",
      },
      {
        q: "Nie mam pliku 3D — tylko fizyczny przedmiot. Co teraz?",
        a: "To nasza specjalność. Skanujemy przedmiot skanerem światła strukturalnego, a ze skanu robimy model do druku. Przywieź przedmiot do naszego warsztatu w Kościanie, a my zajmiemy się resztą.",
      },
      {
        q: "Jakiej wielkości przedmioty skanujecie?",
        a: "Od małych części około 10 mm po duże obiekty do około 2 m, z detalem do 0,02 mm — czteroobiektywowym skanerem światła strukturalnego. Przywieź przedmiot do naszego warsztatu w Kościanie, resztą zajmiemy się my.",
      },
      {
        q: "Jakie pliki przyjmujecie?",
        a: "STL, 3MF, OBJ i STEP. Jeśli masz tylko zdjęcia, szkic albo sam przedmiot — też damy radę, od tego mamy skaner i CAD.",
      },
      {
        q: "Ile trwa realizacja?",
        a: "Standardowo 2–5 dni roboczych od akceptacji wyceny. Proste wydruki bywają gotowe następnego dnia. Przy projektach ze skanowaniem i modelowaniem termin ustalamy indywidualnie.",
      },
      {
        q: "Czy drukujecie z żywicy albo z metalu?",
        a: "Nie — pracujemy w technologii FDM i mówimy o tym wprost. Za to drukujemy z szerokiej gamy materiałów: PLA, PETG, ABS, ASA, TPU, PC, nylonu (PA) oraz kompozytów wzmacnianych włóknem węglowym (CF) i szklanym (GF) — a do tego do 4 kolorów w jednym przebiegu, czego nie ma prawie nikt w okolicy.",
      },
      {
        q: "Czy wydruk będzie wytrzymały?",
        a: "Tak, jeśli dobierzemy materiał do zadania: PETG na części mechaniczne, ABS na elementy pracujące w cieple, TPU tam, gdzie potrzebna elastyczność. Doradzimy przy wycenie.",
      },
      {
        q: "Czy mogę zamówić jedną sztukę?",
        a: "Oczywiście. Druk 3D nie wymaga form ani serii minimalnych — jedna figurka czy jeden zamiennik to normalne zlecenie. Przy większych seriach cena za sztukę spada.",
      },
    ],
  },

  contact: {
    kicker: "Kontakt",
    title: "Wyceń projekt albo umów skanowanie",
    lead: "Odpowiadamy w dni robocze, zwykle tego samego dnia. Opisz, co chcesz wydrukować lub zeskanować — załącz plik albo zdjęcie, jeśli masz.",
    form: {
      name: "Imię i nazwisko",
      email: "E-mail",
      phone: "Telefon (opcjonalnie)",
      topic: "Temat",
      topics: {
        print: "Wycena druku 3D",
        scan: "Skanowanie / inżynieria odwrotna",
        other: "Inny temat",
      },
      message: "Wiadomość",
      messagePlaceholder:
        "Opisz przedmiot albo projekt: wymiary, materiał, ilość, termin…",
      file: "Załącznik (model 3D lub zdjęcie)",
      fileFormats: "STL, 3MF, OBJ, STEP, JPG, PNG — do 50 MB",
      fileAttached: "Załączony plik",
      consent:
        "Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zapytanie (RODO).",
      submit: "Wyślij zapytanie",
      submitting: "Wysyłanie…",
      success:
        "Dziękujemy! Zapytanie dotarło — odezwiemy się najpóźniej następnego dnia roboczego.",
      demoNotice:
        "Tryb demo: backend formularza nie jest jeszcze skonfigurowany (Formspree). Wiadomość nie została wysłana.",
      error:
        "Nie udało się wysłać formularza. Spróbuj ponownie albo napisz bezpośrednio na",
      required: "Pole wymagane",
      invalidEmail: "Podaj poprawny adres e-mail",
      quoteParams: "Parametry z wyceny",
    },
    info: {
      title: "Dane kontaktowe",
      serviceArea: "Obszar działania",
      serviceAreaValue:
        "Kościan — przedmioty przywozisz do warsztatu; wydruki wysyłamy w całą Polskę i UE",
      hoursTitle: "Godziny pracy",
      hours: ["pn–pt 9:00–18:00", "sob 10:00–14:00"],
      mapTitle: "Mapa — Kościan i okolice",
    },
  },

  footer: {
    tagline: "Skanujemy. Modelujemy. Drukujemy — w kolorze.",
    navTitle: "Nawigacja",
    servicesTitle: "Usługi",
    servicesLinks: [
      "Druk wielokolorowy FDM",
      "Skanowanie 3D",
      "Inżynieria odwrotna",
      "Prototypowanie",
      "Figurki i prezenty",
      "Konsultacje CAD",
    ],
    newsletterTitle: "Nowości z warsztatu",
    newsletterLead: "Nowe materiały, realizacje i okazje. Zero spamu.",
    newsletterPlaceholder: "Twój e-mail",
    newsletterCta: "Zapisz się",
    newsletterSuccess: "Zapisano! Do usłyszenia.",
    paymentsTitle: "Płatności",
    legalLine: "Copy Paste 3D · NIP {nip} · REGON {regon}",
    copyright: "© {year} Copy Paste 3D, Kościan. Wszystkie prawa zastrzeżone.",
    socialLabel: "Znajdź nas",
    privacy: "Polityka prywatności",
  },
  privacy: {
    backHome: "Powrót na stronę główną",
  },
};

export type Dictionary = typeof pl;

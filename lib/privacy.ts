/**
 * Privacy policy content (bilingual). Rendered by app/[locale]/privacy.
 *
 * Controller: Robert Czegely, operating under the name CopyPaste3D (Borowo 77,
 * 64-020 Czempiń). NOT a registered business yet — no NIP/REGON, so those lines
 * are intentionally omitted rather than left blank. Processors: Zoho (e-mail),
 * Formspree (US, form), Netlify (US, hosting). Revisit §1 (add NIP/REGON and the
 * "działalność gospodarcza" wording) once the business is registered, and have
 * a lawyer confirm before actively promoting the site.
 */

import type { Locale } from "./i18n";

export type PrivacyBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export interface PrivacySection {
  heading: string;
  blocks: PrivacyBlock[];
}

export interface PrivacyDoc {
  title: string;
  /** Optional lead shown under the title (e.g. the EN "binding version" note). */
  lead?: string;
  sections: PrivacySection[];
  updatedLabel: string;
  /** Last edited — bump when the policy text changes. */
  updated: string;
}

const pl: PrivacyDoc = {
  title: "Polityka prywatności",
  sections: [
    {
      heading: "1. Administrator danych osobowych",
      blocks: [
        {
          type: "p",
          text: "Administratorem Twoich danych osobowych jest Robert Czegely, działający pod marką CopyPaste3D, z adresem: Borowo 77, 64-020 Czempiń.",
        },
        {
          type: "p",
          text: "Kontakt: kontakt@copypaste3d.pl · tel. +48 734 984 760",
        },
      ],
    },
    {
      heading: "2. Jakie dane przetwarzamy",
      blocks: [
        {
          type: "p",
          text: "W zależności od sposobu kontaktu możemy przetwarzać:",
        },
        {
          type: "list",
          items: [
            "dane podane w formularzu kontaktowym / zapytaniu ofertowym: imię lub nazwa firmy, adres e-mail, numer telefonu, treść wiadomości;",
            "pliki przesłane do wyceny (np. STL, STEP, OBJ, 3MF) oraz ich zawartość;",
            "dane korespondencji e-mail;",
            "dane niezbędne do realizacji zamówienia i wystawienia faktury (np. nazwa firmy, NIP, adres, dane do wysyłki);",
            "dane techniczne i pliki cookies (zob. pkt 8).",
          ],
        },
      ],
    },
    {
      heading: "3. Cele i podstawy prawne przetwarzania (RODO)",
      blocks: [
        {
          type: "list",
          items: [
            "Odpowiedź na zapytanie i przygotowanie wyceny — art. 6 ust. 1 lit. b (działania przed zawarciem umowy) oraz lit. f (uzasadniony interes: obsługa zapytań);",
            "Realizacja umowy / zamówienia — art. 6 ust. 1 lit. b;",
            "Wystawianie i przechowywanie faktur, obowiązki księgowe i podatkowe — art. 6 ust. 1 lit. c;",
            "Ustalenie, dochodzenie lub obrona roszczeń — art. 6 ust. 1 lit. f;",
            "Newsletter / marketing (jeśli będzie prowadzony) — art. 6 ust. 1 lit. a (zgoda).",
          ],
        },
      ],
    },
    {
      heading: "4. Pliki przesłane do wyceny",
      blocks: [
        {
          type: "p",
          text: "Pliki przesłane przez Ciebie do wyceny lub realizacji (modele 3D, zdjęcia, dokumentacja) wykorzystujemy wyłącznie w celu przygotowania oferty i wykonania usługi. Nie udostępniamy ich osobom trzecim ani nie wykorzystujemy do innych celów bez Twojej zgody.",
        },
      ],
    },
    {
      heading: "5. Odbiorcy danych / podmioty przetwarzające",
      blocks: [
        {
          type: "p",
          text: "Twoje dane mogą być powierzone zaufanym dostawcom usług działającym na nasze zlecenie:",
        },
        {
          type: "list",
          items: [
            "dostawca poczty e-mail: Zoho;",
            "obsługa formularza kontaktowego: Formspree (USA);",
            "hosting strony internetowej: Netlify (USA).",
          ],
        },
      ],
    },
    {
      heading: "6. Przekazywanie danych poza Europejski Obszar Gospodarczy (EOG)",
      blocks: [
        {
          type: "p",
          text: "Niektórzy z naszych dostawców mają siedzibę poza EOG (np. w USA). W takim przypadku przekazanie danych odbywa się na podstawie odpowiednich zabezpieczeń, np. standardowych klauzul umownych zatwierdzonych przez Komisję Europejską lub uczestnictwa dostawcy w programie EU–US Data Privacy Framework.",
        },
      ],
    },
    {
      heading: "7. Okres przechowywania danych",
      blocks: [
        {
          type: "list",
          items: [
            "zapytania, które nie doprowadziły do zawarcia umowy — przez czas niezbędny do obsługi korespondencji oraz przez okres przedawnienia ewentualnych roszczeń;",
            "dane związane z realizacją umowy — przez czas trwania umowy oraz okres przedawnienia roszczeń;",
            "dokumentacja księgowa i faktury — przez okres wymagany przepisami podatkowymi (co do zasady 5 lat, licząc od końca roku, w którym powstał obowiązek podatkowy);",
            "dane przetwarzane na podstawie zgody (np. newsletter) — do czasu wycofania zgody.",
          ],
        },
      ],
    },
    {
      heading: "8. Pliki cookies",
      blocks: [
        {
          type: "p",
          text: "Strona może wykorzystywać pliki cookies niezbędne do jej prawidłowego funkcjonowania. Możesz zarządzać plikami cookies w ustawieniach swojej przeglądarki. Jeśli w przyszłości wdrożymy analitykę lub cookies marketingowe, będą one wymagały Twojej zgody wyrażonej przez baner cookies.",
        },
      ],
    },
    {
      heading: "9. Twoje prawa",
      blocks: [
        {
          type: "p",
          text: "Masz prawo do: dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania, a także — gdy przetwarzanie odbywa się na podstawie zgody — do jej wycofania w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed wycofaniem).",
        },
        {
          type: "p",
          text: "Masz również prawo wniesienia skargi do organu nadzorczego: Prezes Urzędu Ochrony Danych Osobowych (PUODO), ul. Stawki 2, 00-193 Warszawa.",
        },
      ],
    },
    {
      heading: "10. Dobrowolność podania danych",
      blocks: [
        {
          type: "p",
          text: "Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi na zapytanie, przygotowania wyceny oraz realizacji usługi.",
        },
      ],
    },
    {
      heading: "11. Zmiany polityki prywatności",
      blocks: [
        {
          type: "p",
          text: "Niniejsza polityka może być aktualizowana. Aktualna wersja jest zawsze dostępna na tej stronie.",
        },
      ],
    },
  ],
  updatedLabel: "Data ostatniej aktualizacji",
  updated: "15.06.2026",
};

const en: PrivacyDoc = {
  title: "Privacy Policy",
  lead: "The Polish-language version is the legally binding one for Polish customers.",
  sections: [
    {
      heading: "1. Data Controller",
      blocks: [
        {
          type: "p",
          text: "The controller of your personal data is Robert Czegely, operating under the name CopyPaste3D, at Borowo 77, 64-020 Czempiń, Poland.",
        },
        {
          type: "p",
          text: "Contact: kontakt@copypaste3d.pl · phone +48 734 984 760",
        },
      ],
    },
    {
      heading: "2. What data we process",
      blocks: [
        {
          type: "p",
          text: "Depending on how you contact us, we may process:",
        },
        {
          type: "list",
          items: [
            "data from the contact form / quote request: name or company name, email, phone number, message content;",
            "files you upload for a quote (e.g. STL, STEP, OBJ, 3MF) and their content;",
            "email correspondence;",
            "data needed to fulfil an order and issue an invoice (company name, tax ID, address, shipping details);",
            "technical data and cookies (see section 8).",
          ],
        },
      ],
    },
    {
      heading: "3. Purposes and legal bases (GDPR)",
      blocks: [
        {
          type: "list",
          items: [
            "Answering enquiries and preparing quotes — Art. 6(1)(b) (pre-contractual steps) and (f) (legitimate interest in handling enquiries);",
            "Performing a contract / order — Art. 6(1)(b);",
            "Issuing and retaining invoices, accounting and tax obligations — Art. 6(1)(c);",
            "Establishing, exercising or defending legal claims — Art. 6(1)(f);",
            "Newsletter / marketing (if offered) — Art. 6(1)(a) (consent).",
          ],
        },
      ],
    },
    {
      heading: "4. Files submitted for quotes",
      blocks: [
        {
          type: "p",
          text: "Files you send for quoting or production (3D models, photos, documentation) are used solely to prepare an offer and deliver the service. We do not share them with third parties or use them for other purposes without your consent.",
        },
      ],
    },
    {
      heading: "5. Recipients / processors",
      blocks: [
        {
          type: "p",
          text: "Your data may be entrusted to trusted service providers acting on our behalf:",
        },
        {
          type: "list",
          items: [
            "email provider: Zoho;",
            "contact-form provider: Formspree (USA);",
            "website hosting: Netlify (USA).",
          ],
        },
      ],
    },
    {
      heading: "6. Transfers outside the EEA",
      blocks: [
        {
          type: "p",
          text: "Some providers are based outside the EEA (e.g. the USA). Such transfers rely on appropriate safeguards, e.g. EU Standard Contractual Clauses or the provider’s participation in the EU–US Data Privacy Framework.",
        },
      ],
    },
    {
      heading: "7. Retention",
      blocks: [
        {
          type: "list",
          items: [
            "enquiries that did not lead to a contract — for as long as needed to handle the correspondence and the limitation period for any claims;",
            "contract data — for the duration of the contract and the claims limitation period;",
            "accounting records and invoices — for the period required by tax law (generally 5 years from the end of the relevant tax year);",
            "consent-based data (e.g. newsletter) — until consent is withdrawn.",
          ],
        },
      ],
    },
    {
      heading: "8. Cookies",
      blocks: [
        {
          type: "p",
          text: "The site may use cookies necessary for it to function. You can manage cookies in your browser settings. If we add analytics or marketing cookies in the future, they will require your consent via a cookie banner.",
        },
      ],
    },
    {
      heading: "9. Your rights",
      blocks: [
        {
          type: "p",
          text: "You have the right to access, rectify, erase, restrict or port your data, to object to processing, and — where processing is based on consent — to withdraw it at any time (without affecting prior lawful processing).",
        },
        {
          type: "p",
          text: "You may also lodge a complaint with the supervisory authority: President of the Personal Data Protection Office (PUODO), ul. Stawki 2, 00-193 Warsaw, Poland.",
        },
      ],
    },
    {
      heading: "10. Provision of data",
      blocks: [
        {
          type: "p",
          text: "Providing data is voluntary but necessary to respond to your enquiry, prepare a quote and deliver the service.",
        },
      ],
    },
    {
      heading: "11. Changes",
      blocks: [
        {
          type: "p",
          text: "This policy may be updated. The current version is always available on this page.",
        },
      ],
    },
  ],
  updatedLabel: "Last updated",
  updated: "15 June 2026",
};

const de: PrivacyDoc = {
  title: "Datenschutzerklärung",
  lead: "Maßgeblich für polnische Kunden ist die polnischsprachige Fassung.",
  sections: [
    {
      heading: "1. Verantwortlicher",
      blocks: [
        {
          type: "p",
          text: "Verantwortlicher für Ihre personenbezogenen Daten ist Robert Czegely, tätig unter der Marke CopyPaste3D, Borowo 77, 64-020 Czempiń, Polen.",
        },
        {
          type: "p",
          text: "Kontakt: kontakt@copypaste3d.pl · Telefon +48 734 984 760",
        },
      ],
    },
    {
      heading: "2. Welche Daten wir verarbeiten",
      blocks: [
        {
          type: "p",
          text: "Je nachdem, wie Sie uns kontaktieren, können wir verarbeiten:",
        },
        {
          type: "list",
          items: [
            "Daten aus dem Kontaktformular / der Angebotsanfrage: Name oder Firmenname, E-Mail, Telefonnummer, Inhalt der Nachricht;",
            "Dateien, die Sie für ein Angebot hochladen (z. B. STL, STEP, OBJ, 3MF), und deren Inhalt;",
            "E-Mail-Korrespondenz;",
            "Daten, die zur Auftragsabwicklung und Rechnungsstellung erforderlich sind (Firmenname, Steuernummer, Anschrift, Versanddaten);",
            "technische Daten und Cookies (siehe Abschnitt 8).",
          ],
        },
      ],
    },
    {
      heading: "3. Zwecke und Rechtsgrundlagen (DSGVO)",
      blocks: [
        {
          type: "list",
          items: [
            "Beantwortung von Anfragen und Erstellung von Angeboten — Art. 6 Abs. 1 lit. b (vorvertragliche Maßnahmen) und lit. f (berechtigtes Interesse an der Bearbeitung von Anfragen);",
            "Durchführung eines Vertrags / Auftrags — Art. 6 Abs. 1 lit. b;",
            "Ausstellung und Aufbewahrung von Rechnungen, Buchhaltungs- und Steuerpflichten — Art. 6 Abs. 1 lit. c;",
            "Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen — Art. 6 Abs. 1 lit. f;",
            "Newsletter / Marketing (falls angeboten) — Art. 6 Abs. 1 lit. a (Einwilligung).",
          ],
        },
      ],
    },
    {
      heading: "4. Für Angebote übermittelte Dateien",
      blocks: [
        {
          type: "p",
          text: "Dateien, die Sie zur Angebotserstellung oder Produktion senden (3D-Modelle, Fotos, Dokumentation), verwenden wir ausschließlich zur Erstellung eines Angebots und zur Erbringung der Leistung. Wir geben sie nicht an Dritte weiter und nutzen sie ohne Ihre Einwilligung nicht für andere Zwecke.",
        },
      ],
    },
    {
      heading: "5. Empfänger / Auftragsverarbeiter",
      blocks: [
        {
          type: "p",
          text: "Ihre Daten können vertrauenswürdigen Dienstleistern anvertraut werden, die in unserem Auftrag tätig sind:",
        },
        {
          type: "list",
          items: [
            "E-Mail-Anbieter: Zoho;",
            "Anbieter des Kontaktformulars: Formspree (USA);",
            "Website-Hosting: Netlify (USA).",
          ],
        },
      ],
    },
    {
      heading: "6. Übermittlung außerhalb des EWR",
      blocks: [
        {
          type: "p",
          text: "Einige Anbieter haben ihren Sitz außerhalb des EWR (z. B. in den USA). Solche Übermittlungen stützen sich auf geeignete Garantien, z. B. die EU-Standardvertragsklauseln oder die Teilnahme des Anbieters am EU-US Data Privacy Framework.",
        },
      ],
    },
    {
      heading: "7. Speicherdauer",
      blocks: [
        {
          type: "list",
          items: [
            "Anfragen, die nicht zu einem Vertrag geführt haben — solange dies zur Bearbeitung der Korrespondenz erforderlich ist, sowie für die Dauer der Verjährungsfrist möglicher Ansprüche;",
            "Vertragsdaten — für die Dauer des Vertrags und die Verjährungsfrist für Ansprüche;",
            "Buchhaltungsunterlagen und Rechnungen — für den gesetzlich vorgeschriebenen Zeitraum (in der Regel 5 Jahre ab Ende des betreffenden Steuerjahres);",
            "auf Einwilligung beruhende Daten (z. B. Newsletter) — bis zum Widerruf der Einwilligung.",
          ],
        },
      ],
    },
    {
      heading: "8. Cookies",
      blocks: [
        {
          type: "p",
          text: "Die Website kann für ihren Betrieb erforderliche Cookies verwenden. Sie können Cookies in den Einstellungen Ihres Browsers verwalten. Falls wir künftig Analyse- oder Marketing-Cookies einsetzen, erfordern diese Ihre Einwilligung über ein Cookie-Banner.",
        },
      ],
    },
    {
      heading: "9. Ihre Rechte",
      blocks: [
        {
          type: "p",
          text: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit, das Recht, der Verarbeitung zu widersprechen, und — soweit die Verarbeitung auf einer Einwilligung beruht — das Recht, diese jederzeit zu widerrufen (ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird).",
        },
        {
          type: "p",
          text: "Sie haben außerdem das Recht, Beschwerde bei der Aufsichtsbehörde einzulegen: Präsident des Amtes für den Schutz personenbezogener Daten (PUODO), ul. Stawki 2, 00-193 Warschau, Polen.",
        },
      ],
    },
    {
      heading: "10. Freiwilligkeit der Datenangabe",
      blocks: [
        {
          type: "p",
          text: "Die Angabe der Daten ist freiwillig, aber erforderlich, um Ihre Anfrage zu beantworten, ein Angebot zu erstellen und die Leistung zu erbringen.",
        },
      ],
    },
    {
      heading: "11. Änderungen",
      blocks: [
        {
          type: "p",
          text: "Diese Erklärung kann aktualisiert werden. Die aktuelle Fassung ist stets auf dieser Seite verfügbar.",
        },
      ],
    },
  ],
  updatedLabel: "Zuletzt aktualisiert",
  updated: "15. Juni 2026",
};

export const privacyContent: Record<Locale, PrivacyDoc> = { pl, en, de };

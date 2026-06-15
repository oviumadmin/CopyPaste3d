/**
 * Privacy policy content (bilingual). Rendered by app/[locale]/privacy.
 *
 * Bracketed [...] values are PLACEHOLDERS that depend on the registered
 * business and MUST be filled before the hard launch: legal name, business
 * name, street address, NIP, REGON, the e-mail provider and (if any) the
 * accounting office. Known facts are already filled in: contact e-mail/phone,
 * the contact-form backend (Formspree, US) and the host (Vercel, US).
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
          text: "Administratorem Twoich danych osobowych jest [imię i nazwisko], prowadzący jednoosobową działalność gospodarczą pod firmą [pełna nazwa firmy, np. „Copy Paste 3D [imię i nazwisko]”], z siedzibą w Kościanie, [adres].",
        },
        { type: "p", text: "NIP: [NIP] · REGON: [REGON]" },
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
            "dostawca poczty e-mail: [dostawca poczty e-mail];",
            "obsługa formularza kontaktowego: Formspree (USA);",
            "hosting strony internetowej: Vercel (USA);",
            "biuro rachunkowe / księgowość: [nazwa, jeśli dotyczy].",
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
          text: "The controller of your personal data is [full name], sole proprietor trading as [business name, e.g. “Copy Paste 3D [name]”], based in Kościan, Poland, [address].",
        },
        { type: "p", text: "Tax ID (NIP): [NIP] · REGON: [REGON]" },
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
            "email provider: [email provider];",
            "contact-form provider: Formspree (USA);",
            "website hosting: Vercel (USA);",
            "accounting: [name, if applicable].",
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

export const privacyContent: Record<Locale, PrivacyDoc> = { pl, en };

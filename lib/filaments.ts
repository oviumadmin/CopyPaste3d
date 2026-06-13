/** Filament swatch palette shown in the Materials section + color visualizer. */

export interface FilamentSwatch {
  id: string;
  /** Display names per locale. */
  name: { pl: string; en: string };
  hex: string;
}

export const filamentSwatches: FilamentSwatch[] = [
  { id: "jade-white", name: { pl: "Biały", en: "White" }, hex: "#F2F3F0" },
  { id: "silver", name: { pl: "Srebrny", en: "Silver" }, hex: "#A6A9AA" },
  { id: "gray", name: { pl: "Szary", en: "Gray" }, hex: "#5B6770" },
  { id: "black", name: { pl: "Czarny", en: "Black" }, hex: "#101820" },
  { id: "navy", name: { pl: "Granatowy", en: "Navy" }, hex: "#16385C" },
  { id: "blue", name: { pl: "Niebieski", en: "Blue" }, hex: "#0A66C2" },
  { id: "teal", name: { pl: "Morski", en: "Teal" }, hex: "#14B8B1" },
  { id: "green", name: { pl: "Zielony", en: "Green" }, hex: "#16A34A" },
  { id: "yellow", name: { pl: "Żółty", en: "Yellow" }, hex: "#FACC15" },
  { id: "orange", name: { pl: "Pomarańczowy", en: "Orange" }, hex: "#FF7A1A" },
  { id: "red", name: { pl: "Czerwony", en: "Red" }, hex: "#DC2626" },
  { id: "magenta", name: { pl: "Magenta", en: "Magenta" }, hex: "#C026D3" },
];

/** Default color-slot assignment (indexes into filamentSwatches). */
export const defaultColorSlots = ["teal", "jade-white", "orange", "navy"];

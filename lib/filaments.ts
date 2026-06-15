/** Filament swatch palette shown in the Materials section + color visualizer. */

export interface FilamentSwatch {
  id: string;
  /** Display names per locale. */
  name: { pl: string; en: string; de: string };
  hex: string;
}

export const filamentSwatches: FilamentSwatch[] = [
  { id: "jade-white", name: { pl: "Biały", en: "White", de: "Weiß" }, hex: "#F2F3F0" },
  { id: "silver", name: { pl: "Srebrny", en: "Silver", de: "Silber" }, hex: "#A6A9AA" },
  { id: "gray", name: { pl: "Szary", en: "Gray", de: "Grau" }, hex: "#5B6770" },
  { id: "black", name: { pl: "Czarny", en: "Black", de: "Schwarz" }, hex: "#101820" },
  { id: "navy", name: { pl: "Granatowy", en: "Navy", de: "Marineblau" }, hex: "#16385C" },
  { id: "blue", name: { pl: "Niebieski", en: "Blue", de: "Blau" }, hex: "#0A66C2" },
  { id: "teal", name: { pl: "Morski", en: "Teal", de: "Türkis" }, hex: "#14B8B1" },
  { id: "green", name: { pl: "Zielony", en: "Green", de: "Grün" }, hex: "#16A34A" },
  { id: "yellow", name: { pl: "Żółty", en: "Yellow", de: "Gelb" }, hex: "#FACC15" },
  { id: "orange", name: { pl: "Pomarańczowy", en: "Orange", de: "Orange" }, hex: "#FF7A1A" },
  { id: "red", name: { pl: "Czerwony", en: "Red", de: "Rot" }, hex: "#DC2626" },
  { id: "magenta", name: { pl: "Magenta", en: "Magenta", de: "Magenta" }, hex: "#C026D3" },
];

/** Default color-slot assignment (indexes into filamentSwatches). */
export const defaultColorSlots = ["teal", "jade-white", "orange", "navy"];

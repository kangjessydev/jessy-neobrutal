/**
 * 🎨 KANGJESSY DEV - Color Design System
 * Memetakan nama warna sederhana ke kode HEX yang konsisten.
 */

export const colorPalette = {
  // Brand Colors
  yellow: "#ffd700",
  primary: "#ffd700",
  
  lime: "#adff2f",
  secondary: "#adff2f",
  
  pink: "#ff69b4",
  accent: "#ff69b4",
  
  // Extended Palette
  blue: "#3b82f6",
  purple: "#a855f7",
  orange: "#f97316",
  cyan: "#06b6d4",
  
  // Base
  black: "#000000",
  white: "#ffffff",
  gray: "#eeeeee"
} as const;

export type BrandColor = keyof typeof colorPalette;

/**
 * Fungsi untuk mengambil kode HEX berdasarkan nama warna.
 * Jika input sudah berupa kode HEX (diawali #), maka akan dikembalikan apa adanya.
 */
export const getTagColor = (colorName: string | BrandColor = "yellow"): string => {
  if (!colorName) return colorPalette.yellow;
  
  // Jika input adalah hex code asli, langsung return
  if (colorName.startsWith("#")) return colorName;
  
  // Ambil dari palet, atau fallback ke yellow jika tidak ditemukan
  const normalizedColor = colorName.toLowerCase() as BrandColor;
  return colorPalette[normalizedColor] || colorPalette.yellow;
};

/** Semantic tokens for charts, toasts, and non-Tailwind contexts */
export const chartColors = {
  light: ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe", "#e0e7ff"],
  dark: ["#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81"],
} as const;

export const brandGradient = {
  light: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #9333ea 100%)",
  dark: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #a855f7 100%)",
} as const;

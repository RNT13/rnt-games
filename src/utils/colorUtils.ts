export function colorHSLVariants(h: number, s: number, l: number) {
  const clamp = (val: number) => Math.min(100, Math.max(0, val))
  return {
    base: `hsl(${h}, ${s}%, ${clamp(l)}%)`,
    light: `hsl(${h}, ${s}%, ${clamp(l + 10)}%)`,
    light20: `hsl(${h}, ${s}%, ${clamp(l + 20)}%)`,
    light40: `hsl(${h}, ${s}%, ${clamp(l + 40)}%)`,
    dark: `hsl(${h}, ${s}%, ${clamp(l - 10)}%)`,
    dark20: `hsl(${h}, ${s}%, ${clamp(l - 20)}%)`,
    dark40: `hsl(${h}, ${s}%, ${clamp(l - 40)}%)`
  }
}

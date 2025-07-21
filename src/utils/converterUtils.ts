export function formatToBRL(value: number | null | undefined): string {
  if (value === null || value === undefined) return ''
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

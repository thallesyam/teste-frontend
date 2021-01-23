export function formatValue(value: number | undefined): number {
  return Number((value! / 100).toFixed(1))
}

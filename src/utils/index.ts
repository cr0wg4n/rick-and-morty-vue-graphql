

export function randomCharacterId(): number {
  const MIN = 1
  const MAX = 826

  return Math.floor(Math.random() * MAX) + MIN
}
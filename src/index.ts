export function expandPasswordList(password: string): string[] {
  if (password.length === 0) {
    return [password]
  }
  const originalCase = password
  const upper_to_lower: Record<string, string> = {}
  const lower_to_upper: Record<string, string> = {}
  const any_to_reversed: Record<string, string> = {}
  const originalCharList = password.split('')
  originalCharList.forEach(char => {
    const lower = char.toLocaleLowerCase()
    const upper = lower.toLocaleUpperCase()
    upper_to_lower[upper] = lower
    lower_to_upper[lower] = upper
    any_to_reversed[upper] = lower
    any_to_reversed[lower] = upper
  })
  const firstCharReversedCharList = originalCharList.slice()
  firstCharReversedCharList[0] = any_to_reversed[originalCharList[0]]
  const firstCharReversedCase = firstCharReversedCharList.join('')
  const reversedAllCase = originalCharList.map(c => any_to_reversed[c]).join('')
  const reversedAllCaseExceptFirstChar = firstCharReversedCharList
    .map(c => any_to_reversed[c])
    .join('')
  return [
    originalCase,
    firstCharReversedCase,
    reversedAllCase,
    reversedAllCaseExceptFirstChar,
  ]
}

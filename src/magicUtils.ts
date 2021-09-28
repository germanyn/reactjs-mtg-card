export const manaCostMatcher = /\{(\w)\}/g

export function manaCostParser(manaCost: string) {
    return [...manaCost.matchAll(manaCostMatcher)]
        .map(([_, cost]) => cost)
}

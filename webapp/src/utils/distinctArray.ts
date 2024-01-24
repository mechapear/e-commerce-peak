// Filter only unique values of array
export function distinctArray<Item>(arr: Item[]): Item[] {
  // Using spread is more performant than using Array.from()
  // @see https://medium.com/@ra100x/node-js-performance-array-from-set-vs-spread-set-1387080cd266
  return [...new Set(arr)]
}

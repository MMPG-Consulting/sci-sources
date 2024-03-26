/**
 * Simple utility returning the key in the correct string format
 *
 * @param key - The key of the source in the list.
 * @returns the key formatted as a string.
 */
export function genKey(key?: number) {
  return key || key === 0 ? `${key + 1}: ` : "";
}

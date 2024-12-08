/**
 * Identity function that returns the value passed in
 * @param value - The value to return
 * @see https://www.bigbinary.com/blog/practical-usage-of-identity-function
 * @returns The value
 */
export function identity<T>(value: T): T {
  return value;
}

export function keysOf<T extends object>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}

export function isIndexable(t: unknown): t is string | number | symbol {
  const type = typeof t;
  return type === "string" || type === "number" || type === "symbol";
}

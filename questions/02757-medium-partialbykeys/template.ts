type PartialByKeys<T, K extends keyof T = keyof T> = Omit<
  Partial<Pick<T, K>> & Omit<T, K>,
  never
>

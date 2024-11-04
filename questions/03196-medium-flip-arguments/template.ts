type ReverseArray<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : []

type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer U
  ? (...args: Reverse<P>) => U
  : never

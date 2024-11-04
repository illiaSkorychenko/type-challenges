type Shift<T extends unknown[]> = T extends [infer _, ...infer R]
  ? [...R]
  : T

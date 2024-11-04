type Last<T extends unknown[]> = T extends [...infer _, infer L] ? L : never

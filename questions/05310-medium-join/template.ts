type Join<T extends any[], S extends string | number = ','> = T extends [infer First, ...infer Rest]
  ? Rest['length'] extends 0
    ? `${First & string}`
    : `${First & string}${S}${Join<Rest, S>}`
  : ''

type ToFlatten<T> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
    ? [...ToFlatten<First>, ...ToFlatten<Rest>]
    : [T]

type Flatten<T extends Array<any>> = ToFlatten<T>

type RemoveUndefined<T> = T extends undefined ? never : T

type ObjectEntries<T> = {
  [P in keyof T]-?: [
    P,
    Exclude<keyof T, P> extends never
      ? T[P]
      : RemoveUndefined<T[P]>,
  ]
}[keyof T]

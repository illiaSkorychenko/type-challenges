type IsExpo<T extends number> = `${T}` extends `${number}e${number}`
  ? true
  : false

type IsDecimal<T extends number> = `${T}` extends `${number}.${number}`
  ? true
  : false

type IsOdd<T extends number> = IsExpo<T> extends true
  ? false
  : IsDecimal<T> extends true
    ? false
    : `${T}` extends `${number | ''}${1 | 3 | 5 | 7 | 9}`
      ? true
      : false

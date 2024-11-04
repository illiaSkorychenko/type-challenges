type CompareArrayLength<T extends any[], U extends any[]> = T[U['length']] extends undefined
  ? T['length'] extends U['length']
    ? 0
    : -1
  : 1

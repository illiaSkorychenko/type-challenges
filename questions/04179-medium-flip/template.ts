type Flip<T extends { [P: string | number | symbol]: string | number | boolean }> = {
  [P in keyof T as `${T[P]}`]: P
}

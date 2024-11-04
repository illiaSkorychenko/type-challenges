type OmitRes<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyOmit<T, K extends keyof T> = OmitRes<T, Exclude<keyof T, K>>

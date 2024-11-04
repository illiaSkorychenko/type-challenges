type DeepOmit<O, K extends string> = K extends `${infer First}.${infer Rest}` ? {
  [P in keyof O]: P extends First ? DeepOmit<O[P], Rest> : O[P]
} : Omit<O, K>

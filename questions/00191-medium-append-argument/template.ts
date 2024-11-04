type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never

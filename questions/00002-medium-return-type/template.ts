type MyReturnType<T> = T extends (...args: any[]) => infer R
  ? R
  : T extends new (...args: any[]) => infer R
    ? R
    : T

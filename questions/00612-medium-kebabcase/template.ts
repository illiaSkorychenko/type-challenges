type KebabCasePart<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Lowercase<First>
    ? `${Lowercase<First>}${KebabCasePart<Rest>}`
    : `-${Lowercase<First>}${KebabCasePart<Rest>}`
  : S

type KebabCase<S extends string> = KebabCasePart<Uncapitalize<S>>

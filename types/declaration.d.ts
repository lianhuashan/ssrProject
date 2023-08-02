declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.ttf';
declare module '*.otf';
declare module '*.woff';
declare module '*.eot';

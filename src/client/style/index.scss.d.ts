declare namespace IndexScssNamespace {
  export interface IIndexScss {
    'flex-col-box': string;
    'flex-row-box': string;
    'small-text': string;
    'text-blue': string;
    'text-ellipsis': string;
    'text-gray': string;
    'text-multi-line-ellipsis': string;
    'text-pink': string;
    'text-sub-title': string;
    'text-title': string;
    'text-yellow': string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;

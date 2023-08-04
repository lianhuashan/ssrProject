declare namespace SearchMaskScssNamespace {
  export interface ISearchMaskScss {
    header: string;
    'search-wrapper': string;
  }
}

declare const SearchMaskScssModule: SearchMaskScssNamespace.ISearchMaskScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchMaskScssNamespace.ISearchMaskScss;
};

export = SearchMaskScssModule;
